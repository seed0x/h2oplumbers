import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { rateLimit } from '@/lib/rate-limit'
import { sendQuoteEmail } from '@/lib/email'

const { Priority, LeadStatus } = require('@prisma/client')

const quoteSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().regex(/^\+?[\d\s\-\(\)]+$/, 'Valid phone number is required'),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().default('WA'),
  zipCode: z.string().optional(),
  services: z.array(z.string().cuid()).min(1, 'At least one service is required'),
  description: z.string().min(10, 'Please describe your plumbing needs'),
  urgency: z.nativeEnum(Priority).default('NORMAL'),
  preferredDate: z.string().datetime().optional(),
  preferredTime: z.enum(['morning', 'afternoon', 'evening']).optional(),
  budget: z.number().optional(),
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
    const data = quoteSchema.parse(body)

    // Get services for pricing
    const services = await prisma.service.findMany({
      where: {
        id: { in: data.services },
        isActive: true,
      },
    })

    if (services.length === 0) {
      return NextResponse.json(
        { error: 'No valid services found' },
        { status: 400 }
      )
    }

    // Calculate quote
    let totalPrice = 0
    const quoteItems = services.map(service => {
      const price = Number(service.basePrice)
      totalPrice += price
      return {
        service: service.name,
        description: service.description,
        price,
      }
    })

    // Add service call fee
    const serviceCallFee = Number(process.env.BASE_SERVICE_CALL_FEE || '89')
    quoteItems.unshift({
      service: 'Service Call Fee',
      description: 'Initial diagnostic and assessment',
      price: serviceCallFee,
    })
    totalPrice += serviceCallFee

    // Apply urgency multiplier
    if (data.urgency === 'HIGH') {
      totalPrice *= 1.25
    } else if (data.urgency === 'URGENT') {
      totalPrice *= Number(process.env.EMERGENCY_MULTIPLIER || '1.5')
    }

    // Check if weekend (add weekend surcharge)
    const isWeekend = data.preferredDate ? 
      [0, 6].includes(new Date(data.preferredDate).getDay()) : false
    
    if (isWeekend) {
      const weekendMultiplier = Number(process.env.WEEKEND_MULTIPLIER || '1.25')
      totalPrice *= weekendMultiplier
    }

    // Create or get customer
    const customer = await prisma.customer.upsert({
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
        source: data.source,
      },
    })

    // Create lead for the quote
    const lead = await prisma.lead.create({
      data: {
        customerId: customer.id,
        serviceId: data.services[0], // Primary service
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
        description: data.description,
        urgency: data.urgency,
        preferredDate: data.preferredDate ? new Date(data.preferredDate) : null,
        preferredTime: data.preferredTime,
        budget: data.budget,
        source: data.source,
        status: 'QUOTED',
        metadata: {
          quoteTotal: totalPrice,
          quoteItems,
          isWeekendJob: isWeekend,
        },
      },
    })

    // Send quote email
    try {
      await sendQuoteEmail({
        customerEmail: data.email,
        customerName: data.name,
        quote: {
          items: quoteItems,
          total: totalPrice,
          validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        },
      })
    } catch (emailError) {
      console.error('Failed to send quote email:', emailError)
    }

    return NextResponse.json({
      success: true,
      quoteId: lead.id,
      quote: {
        items: quoteItems,
        total: totalPrice,
        validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
      message: 'Quote generated successfully',
    })

  } catch (error) {
    console.error('Quote error:', error)

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
