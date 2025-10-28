import { NextRequest, NextResponse } from 'next/server'
import { EmergencyStatus, EmergencySeverity } from '@prisma/client'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { rateLimit } from '@/lib/rate-limit'
import { sendSMSNotification, sendEmergencyDispatch } from '@/lib/sms'
import { sendBookingConfirmation } from '@/lib/email'


const emergencySchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().regex(/^\+?[\d\s\-\(\)]+$/, 'Valid phone number is required'),
  email: z.string().email().optional(),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().default('WA'),
  zipCode: z.string().min(5, 'Valid ZIP code is required'),
  description: z.string().min(10, 'Please describe the emergency in detail'),
  severity: z.nativeEnum(EmergencySeverity).default('MODERATE'),
})

export async function POST(request: NextRequest) {
  try {
    // Rate limiting (more lenient for emergencies)
    const identifier = request.ip ?? 'anonymous'
    const rateLimiter = { // Custom rate limit for emergencies
      async limit(id: string) {
        // Allow more requests for emergency endpoint
        return { success: true }
      }
    }
    
    const { success } = await rateLimiter.limit(identifier)
    
    if (!success) {
      return NextResponse.json(
        { error: 'Too many requests. Please call directly for urgent issues.' },
        { status: 429 }
      )
    }

    // Validate request body
    const body = await request.json()
    const data = emergencySchema.parse(body)

    // Check service area
    const serviceArea = await prisma.serviceArea.findFirst({
      where: {
        zipCode: data.zipCode,
        isActive: true,
      },
    })

    if (!serviceArea) {
      return NextResponse.json(
        { 
          error: 'Service area not covered',
          message: `We don't currently service ${data.zipCode}. Please call ${process.env.EMERGENCY_PHONE} for assistance finding a local plumber.`
        },
        { status: 400 }
      )
    }

    // Find or create customer
    let customer = null
    if (data.email) {
      customer = await prisma.customer.upsert({
        where: { email: data.email },
        update: {
          firstName: data.name.split(' ')[0],
          lastName: data.name.split(' ').slice(1).join(' ') || '',
          phone: data.phone,
          address: data.address,
          city: data.city,
          state: data.state,
          zipCode: data.zipCode,
        },
        create: {
          firstName: data.name.split(' ')[0],
          lastName: data.name.split(' ').slice(1).join(' ') || '',
          email: data.email,
          phone: data.phone,
          address: data.address,
          city: data.city,
          state: data.state,
          zipCode: data.zipCode,
          source: 'emergency',
        },
      })
    }

    // Create emergency queue entry
    const emergency = await prisma.emergencyQueue.create({
      data: {
        customerId: customer?.id,
        name: data.name,
        phone: data.phone,
        email: data.email,
        address: data.address,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
        description: data.description,
        severity: data.severity,
        status: 'PENDING',
      },
    })

    // Calculate estimated arrival based on severity and travel time
    const travelTime = serviceArea.travelTime || 30 // Default 30 minutes
    const severityMultiplier = {
      'LOW': 2,       // 2x travel time
      'MODERATE': 1.5, // 1.5x travel time
      'HIGH': 1,      // Normal travel time
      'CRITICAL': 0.5  // Half travel time (rush)
    }

    const estimatedMinutes = Math.round(travelTime * (severityMultiplier[data.severity as keyof typeof severityMultiplier] || 1.5))
    const estimatedArrival = new Date(Date.now() + estimatedMinutes * 60 * 1000)

    // Update with estimated arrival
    await prisma.emergencyQueue.update({
      where: { id: emergency.id },
      data: { estimatedArrival },
    })

    // Send SMS notification to business
    try {
      const urgencyText = data.severity === 'CRITICAL' ? '🚨 CRITICAL EMERGENCY' : 
                         data.severity === 'HIGH' ? '⚠️ HIGH PRIORITY EMERGENCY' : 
                         '📢 Emergency Request'

      await sendSMSNotification({
        to: process.env.EMERGENCY_PHONE || process.env.BUSINESS_PHONE!,
        message: `${urgencyText}: ${data.name} at ${data.address}, ${data.city}. Issue: ${data.description.substring(0, 100)}${data.description.length > 100 ? '...' : ''}. Call: ${data.phone}. Queue ID: ${emergency.id}`,
      })
    } catch (smsError) {
      console.error('Failed to send emergency SMS:', smsError)
    }

    // Send confirmation SMS to customer
    try {
      await sendSMSNotification({
        to: data.phone,
        message: `Emergency request received! H2O Plumbing will arrive in approximately ${estimatedMinutes} minutes. Emergency ID: ${emergency.id}. Call ${process.env.EMERGENCY_PHONE} for updates.`,
      })
    } catch (customerSmsError) {
      console.error('Failed to send customer confirmation SMS:', customerSmsError)
    }

    return NextResponse.json({
      success: true,
      emergencyId: emergency.id,
      estimatedArrival,
      estimatedMinutes,
      message: `Emergency request submitted. Estimated arrival: ${estimatedMinutes} minutes.`,
      contactInfo: {
        emergencyPhone: process.env.EMERGENCY_PHONE,
        emergencyId: emergency.id,
      },
    })

  } catch (error) {
    console.error('Emergency request error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error. Please call directly for emergencies.' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const severity = searchParams.get('severity')
    const limit = parseInt(searchParams.get('limit') || '50')

    const where: { status?: EmergencyStatus; severity?: EmergencySeverity } = {}
    if (status && (Object.values(EmergencyStatus) as string[]).includes(status)) {
      where.status = status as EmergencyStatus
    }
    if (severity && (Object.values(EmergencySeverity) as string[]).includes(severity)) {
      where.severity = severity as EmergencySeverity
    }

    const emergencies = await prisma.emergencyQueue.findMany({
      where,
      orderBy: [
        { severity: 'desc' }, // Critical first
        { createdAt: 'asc' }, // Oldest first within same severity
      ],
      take: limit,
    })

    return NextResponse.json({ emergencies })

  } catch (error) {
    console.error('Get emergencies error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}


