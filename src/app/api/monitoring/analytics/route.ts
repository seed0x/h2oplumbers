import { NextRequest, NextResponse } from 'next/server'
import { rateLimit } from '@/lib/rate-limit'

// Analytics event types
interface AnalyticsEvent {
  event: string
  properties?: Record<string, any>
  userId?: string
  sessionId?: string
  timestamp?: string
  page?: string
  referrer?: string
  userAgent?: string
}

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting
    const identifier = request.ip || 'anonymous'
    
    const rateLimitResult = await rateLimit.limit(identifier)
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      )
    }

    const eventData: AnalyticsEvent = await request.json()
    
    // Validate required fields
    if (!eventData.event) {
      return NextResponse.json({ error: 'Event name is required' }, { status: 400 })
    }

    // Add server-side data
    const enrichedEvent: AnalyticsEvent = {
      ...eventData,
      timestamp: eventData.timestamp || new Date().toISOString(),
      userAgent: eventData.userAgent || request.headers.get('user-agent') || undefined,
      // Add IP hash for privacy
      properties: {
        ...eventData.properties,
        ipHash: request.ip ? hashString(request.ip) : undefined
      }
    }

    // Process different event types
    await processAnalyticsEvent(enrichedEvent)

    // In development, log the event
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', {
        event: enrichedEvent.event,
        page: enrichedEvent.page,
        properties: enrichedEvent.properties
      })
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Analytics tracking error:', error)
    return NextResponse.json(
      { error: 'Failed to track event' }, 
      { status: 500 }
    )
  }
}

async function processAnalyticsEvent(event: AnalyticsEvent) {
  // Here you can send data to various analytics services
  
  // Google Analytics 4 (if measurement ID is set)
  if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    await sendToGoogleAnalytics(event)
  }

  // Microsoft Clarity (events are client-side, but we can track server-side events)
  if (process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID) {
    await sendToClarityCustomEvent(event)
  }

  // Custom database storage (optional)
  if (process.env.STORE_ANALYTICS_IN_DB) {
    await storeEventInDatabase(event)
  }

  // Business-specific event processing
  await processBusinessEvents(event)
}

async function sendToGoogleAnalytics(event: AnalyticsEvent) {
  if (!process.env.GA_MEASUREMENT_SECRET || !process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    return
  }

  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const apiSecret = process.env.GA_MEASUREMENT_SECRET

  try {
    const payload = {
      client_id: event.sessionId || 'server-side-event',
      events: [{
        name: event.event.replace(/[^a-zA-Z0-9_]/g, '_'), // GA4 event name requirements
        parameters: {
          ...event.properties,
          page_title: event.page,
          page_location: event.page
        }
      }]
    }

    await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      }
    )
  } catch (error) {
    console.error('Failed to send to Google Analytics:', error)
  }
}

async function sendToClarityCustomEvent(event: AnalyticsEvent) {
  // Clarity doesn't have server-side API, but we can prepare data for client-side
  // This would be handled by the client-side Clarity integration
  // We just log it here for reference
  console.log('Clarity event (client-side processing required):', event.event)
}

async function storeEventInDatabase(event: AnalyticsEvent) {
  // If you want to store analytics in your own database
  // This would require setting up an analytics table in Prisma
  try {
    // Example with Prisma (would need to add AnalyticsEvent model)
    // await prisma.analyticsEvent.create({
    //   data: {
    //     event: event.event,
    //     properties: event.properties,
    //     userId: event.userId,
    //     sessionId: event.sessionId,
    //     page: event.page,
    //     timestamp: new Date(event.timestamp || Date.now())
    //   }
    // })
  } catch (error) {
    console.error('Failed to store event in database:', error)
  }
}

async function processBusinessEvents(event: AnalyticsEvent) {
  // Handle business-specific events
  switch (event.event) {
    case 'booking_started':
      console.log('Booking process started:', event.properties)
      break
      
    case 'booking_completed':
      console.log('Booking completed:', event.properties)
      // Could trigger email notifications, CRM updates, etc.
      break
      
    case 'quote_requested':
      console.log('Quote requested:', event.properties)
      // Could notify sales team
      break
      
    case 'emergency_call_clicked':
      console.log('Emergency call initiated:', event.properties)
      // High priority - might want to alert operations team
      break
      
    case 'service_area_viewed':
      console.log('Service area viewed:', event.properties)
      // Track geographical interest
      break
      
    default:
      // Generic event processing
      break
  }
}

// Simple hash function for IP addresses (for privacy)
function hashString(str: string): string {
  let hash = 0
  if (str.length === 0) return hash.toString()
  
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  
  return Math.abs(hash).toString(36)
}


