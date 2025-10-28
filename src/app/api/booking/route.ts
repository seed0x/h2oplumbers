import { NextRequest, NextResponse } from 'next/server'
import { AppointmentStatus } from '@prisma/client'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { rateLimit } from '@/lib/rate-limit'
import { sendBookingConfirmation } from '@/lib/email'
import { sendSMSNotification } from '@/lib/sms'

const { Priority } = require('@prisma/client')

const bookingSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().regex(/^\+?[\d\s\-\(\)]+$/, 'Valid phone number is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().default('WA'),
  zipCode: z.string().min(5, 'Valid ZIP code is required'),
  serviceId: z.string().cuid('Valid service ID is required'),
  scheduledAt: z.string().datetime('Valid date and time is required'),
  description: z.string().optional(),
  priority: z.nativeEnum(Priority).default('NORMAL'),
  source: z.string().default('website'),
})

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const identifier = request.ip ?? 'anonymous'
    const { success } = await rateLimit.limit(identifier)
    
    if (!success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Validate request body
    const body = await request.json()
    const data = bookingSchema.parse(body)

    // Check if service exists and is active
    const service = await prisma.service.findFirst({
      where: {
        id: data.serviceId,
        isActive: true,
      },
    })

    if (!service) {
      return NextResponse.json(
        { error: 'Service not found or unavailable' },
        { status: 400 }
      )
    }

    // Check service area availability
    const serviceArea = await prisma.serviceArea.findFirst({
      where: {
        zipCode: data.zipCode,
        isActive: true,
      },
    })

    if (!serviceArea) {
      return NextResponse.json(
        { error: 'Service not available in this area' },
        { status: 400 }
      )
    }

    // Create or get customer
    const customer = await prisma.customer.upsert({
      where: { email: data.email },
      update: {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        address: data.address,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
      },
      create: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
        source: data.source,
      },
    })

    // Create appointment
    const appointment = await prisma.appointment.create({
      data: {
        customerId: customer.id,
        serviceId: data.serviceId,
        scheduledAt: new Date(data.scheduledAt as string),
        description: data.description,
        priority: data.priority,
        address: data.address,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
        estimatedCost: service.basePrice,
        duration: service.estimatedDuration,
      },
      include: {
        customer: true,
        service: true,
      },
    })

    // Send confirmation email
    try {
      await sendBookingConfirmation({
        customerEmail: customer.email,
        customerName: `${customer.firstName} ${customer.lastName}`,
        appointment,
      })
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError)
    }

    // Send SMS notification to business
    try {
      await sendSMSNotification({
        to: process.env.BUSINESS_PHONE!,
        message: `New booking: ${customer.firstName} ${customer.lastName} - ${service.name} on ${appointment.scheduledAt.toLocaleDateString()}`,
      })
    } catch (smsError) {
      console.error('Failed to send SMS notification:', smsError)
    }

    return NextResponse.json({
      success: true,
      appointmentId: appointment.id,
      message: 'Appointment booked successfully',
    })

  } catch (error) {
    console.error('Booking error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const customerId = searchParams.get('customerId')
    const status = searchParams.get('status')

    const where: { customerId?: string; status?: AppointmentStatus } = {}
    if (customerId) where.customerId = customerId
    if (status && (Object.values(AppointmentStatus) as string[]).includes(status)) {
      where.status = status as AppointmentStatus
    }

    const appointments = await prisma.appointment.findMany({
      where,
      include: {
        customer: true,
        service: true,
      },
      orderBy: { scheduledAt: 'desc' },
      take: 50, // Limit results
    })

    return NextResponse.json({ appointments })

  } catch (error) {
    console.error('Get appointments error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
