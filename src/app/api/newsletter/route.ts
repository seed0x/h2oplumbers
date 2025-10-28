import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { rateLimit } from '@/lib/rate-limit'
import { sendBookingConfirmation } from '@/lib/email'
import { randomBytes } from 'crypto'

const newsletterSchema = z.object({
  email: z.string().email('Valid email is required'),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  source: z.string().default('website'),
  tags: z.array(z.string()).default([]),
})

const unsubscribeSchema = z.object({
  email: z.string().email().optional(),
  token: z.string().optional(),
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
    const data = newsletterSchema.parse(body)

    // Generate verification token
    const verificationToken = randomBytes(32).toString('hex')

    // Create or update newsletter subscription
    const subscription = await prisma.newsletter.upsert({
      where: { email: data.email },
      update: {
        firstName: data.firstName || null,
        lastName: data.lastName || null,
        isActive: true,
        verificationToken,
        source: data.source,
        tags: data.tags,
        subscribedAt: new Date(),
        unsubscribedAt: null,
      },
      create: {
        email: data.email,
        firstName: data.firstName || null,
        lastName: data.lastName || null,
        isActive: true,
        isVerified: false,
        verificationToken,
        source: data.source,
        tags: data.tags,
      },
    })

    // TODO: Send verification email
    // await sendVerificationEmail({
    //   email: data.email,
    //   name: data.firstName || 'Customer',
    //   verificationToken,
    // })

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      subscription: {
        id: subscription.id,
        email: subscription.email,
        isVerified: subscription.isVerified,
      },
    })

  } catch (error) {
    console.error('Newsletter subscription error:', error)

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

export async function DELETE(request: NextRequest) {
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

    // Get unsubscribe data
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')
    const token = searchParams.get('token')

    const validation = unsubscribeSchema.safeParse({ email, token })
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Email or token is required' },
        { status: 400 }
      )
    }

  let where: { verificationToken?: string; email?: string } = {}
    if (token) {
      // Unsubscribe via token (from email link)
  where.verificationToken = token
    } else if (email) {
      // Unsubscribe via email
  where.email = email
    } else {
      return NextResponse.json(
        { error: 'Email or token is required' },
        { status: 400 }
      )
    }

    // Find and update subscription
    const subscription = await prisma.newsletter.findFirst({ where })

    if (!subscription) {
      return NextResponse.json(
        { error: 'Subscription not found' },
        { status: 404 }
      )
    }

    // Unsubscribe
    await prisma.newsletter.update({
      where: { id: subscription.id },
      data: {
        isActive: false,
        unsubscribedAt: new Date(),
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Successfully unsubscribed from newsletter',
    })

  } catch (error) {
    console.error('Newsletter unsubscribe error:', error)

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

export async function PATCH(request: NextRequest) {
  try {
    // Verify newsletter subscription
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')

    if (!token) {
      return NextResponse.json(
        { error: 'Verification token is required' },
        { status: 400 }
      )
    }

    const subscription = await prisma.newsletter.findFirst({
      where: { verificationToken: token },
    })

    if (!subscription) {
      return NextResponse.json(
        { error: 'Invalid verification token' },
        { status: 404 }
      )
    }

    // Verify subscription
    await prisma.newsletter.update({
      where: { id: subscription.id },
      data: {
        isVerified: true,
        verificationToken: null, // Clear token after verification
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Email verified successfully',
    })

  } catch (error) {
    console.error('Newsletter verification error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
