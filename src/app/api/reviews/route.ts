import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { rateLimit } from '@/lib/rate-limit'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'

const reviewSchema = z.object({
  customerEmail: z.string().email().optional(),
  platform: z.string().default('website'),
  rating: z.number().min(1).max(5),
  title: z.string().optional(),
  content: z.string().min(10, 'Review must be at least 10 characters'),
  authorName: z.string().min(1, 'Author name is required'),
  authorImage: z.string().url().optional(),
  isVerified: z.boolean().default(false),
})

const responseSchema = z.object({
  reviewId: z.string().cuid(),
  responseText: z.string().min(1, 'Response text is required'),
})

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const platform = searchParams.get('platform')
    const published = searchParams.get('published')
  const limit = parseInt(searchParams.get('limit') || '20')
  const offset = parseInt(searchParams.get('offset') || '0')
  const includeExternal = searchParams.get('external') === 'true'

    const where: {
      platform?: string
      isPublished?: boolean
    } = {}
    if (platform) where.platform = platform
    if (published !== null) where.isPublished = published === 'true'

    const reviews = await prisma.review.findMany({
      where,
      include: {
        customer: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
      orderBy: { reviewDate: 'desc' },
      take: limit,
      skip: offset,
    })

    const totalCount = await prisma.review.count({ where })

    // Calculate average rating
    const avgRating = await prisma.review.aggregate({
      where: { ...where, isPublished: true },
      _avg: { rating: true },
      _count: { rating: true },
    })

    let externalReviews: any[] = []
    if (includeExternal) {
      const { fetchExternalReviews } = await import('@/lib/external-reviews')
      externalReviews = await fetchExternalReviews()
    }
    const combined = [...reviews, ...externalReviews].sort((a: any, b: any) => {
      const da = new Date(a.reviewDate || a.createdAt || 0).getTime()
      const db = new Date(b.reviewDate || b.createdAt || 0).getTime()
      return db - da
    })
    const combinedStats = {
      averageRating: combined.length ? combined.reduce((s, r: any) => s + (r.rating || 0), 0) / combined.length : 0,
      totalReviews: combined.length,
    }
    return NextResponse.json({
      reviews,
      externalReviews,
      combinedReviews: combined,
      pagination: {
        total: totalCount,
        limit,
        offset,
        hasMore: offset + limit < totalCount,
      },
      stats: {
        averageRating: avgRating._avg.rating || 0,
        totalReviews: avgRating._count.rating || 0,
      },
      combinedStats,
    })

  } catch (error) {
    console.error('Get reviews error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

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
    const data = reviewSchema.parse(body)

    // Find customer if email provided
    let customer = null
    if (data.customerEmail) {
      customer = await prisma.customer.findUnique({
        where: { email: data.customerEmail },
      })
    }

    // Create review
    const review = await prisma.review.create({
      data: {
        customerId: customer?.id,
        platform: data.platform,
        rating: data.rating,
        title: data.title,
        content: data.content,
        authorName: data.authorName,
        authorImage: data.authorImage,
        isVerified: data.isVerified,
        reviewDate: new Date(),
        isPublished: false, // Requires manual approval
      },
      include: {
        customer: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
    })

    return NextResponse.json({
      success: true,
      reviewId: review.id,
      message: 'Review submitted successfully. It will be published after moderation.',
      review,
    })

  } catch (error) {
    console.error('Create review error:', error)

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
    // Check authentication (admin only)
    const session = await getServerSession(authOptions)
    if (!session?.user || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')
    const reviewId = searchParams.get('id')

    if (!reviewId) {
      return NextResponse.json(
        { error: 'Review ID is required' },
        { status: 400 }
      )
    }

    if (action === 'publish') {
      // Publish review
      const review = await prisma.review.update({
        where: { id: reviewId },
        data: { isPublished: true },
      })

      return NextResponse.json({
        success: true,
        message: 'Review published successfully',
        review,
      })

    } else if (action === 'respond') {
      // Add response to review
      const body = await request.json()
      const responseData = responseSchema.parse(body)

      const review = await prisma.review.update({
        where: { id: responseData.reviewId },
        data: {
          responseText: responseData.responseText,
          responseDate: new Date(),
        },
      })

      return NextResponse.json({
        success: true,
        message: 'Response added successfully',
        review,
      })

    } else {
      return NextResponse.json(
        { error: 'Invalid action' },
        { status: 400 }
      )
    }

  } catch (error) {
    console.error('Update review error:', error)

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


