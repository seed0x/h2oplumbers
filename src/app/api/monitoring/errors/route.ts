import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend for error notifications
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

interface ErrorReport {
  message: string
  stack?: string
  url: string
  userAgent?: string
  userId?: string
  timestamp: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  context?: Record<string, any>
}

// Error notification thresholds
const ERROR_THRESHOLDS = {
  critical: 1, // Notify immediately
  high: 3,     // Notify after 3 occurrences in 5 minutes
  medium: 10,  // Notify after 10 occurrences in 15 minutes
  low: 50      // Notify after 50 occurrences in 1 hour
}

// In-memory error tracking (in production, use Redis or database)
const errorCounts = new Map<string, { count: number; firstSeen: Date; lastSeen: Date }>()

export async function POST(request: NextRequest) {
  try {
    const errorData: ErrorReport = await request.json()
    
    // Validate required fields
    if (!errorData.message || !errorData.url) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Add timestamp if not provided
    if (!errorData.timestamp) {
      errorData.timestamp = new Date().toISOString()
    }

    // Create error key for tracking
    const errorKey = `${errorData.message}:${errorData.url}`
    
    // Update error count
    const existing = errorCounts.get(errorKey)
    if (existing) {
      existing.count++
      existing.lastSeen = new Date()
    } else {
      errorCounts.set(errorKey, {
        count: 1,
        firstSeen: new Date(),
        lastSeen: new Date()
      })
    }

    // Check if we should send notification
    const shouldNotify = await checkNotificationThreshold(errorData, errorKey)
    
    if (shouldNotify && resend && process.env.ADMIN_EMAIL) {
      await sendErrorNotification(errorData, errorCounts.get(errorKey)!)
    }

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Client Error Report:', {
        message: errorData.message,
        url: errorData.url,
        severity: errorData.severity,
        count: errorCounts.get(errorKey)?.count
      })
    }

    // In production, you might want to send to external monitoring service
    // like Sentry, LogRocket, or custom analytics

    return NextResponse.json({ 
      success: true, 
      errorId: Buffer.from(errorKey).toString('base64').slice(0, 12)
    })

  } catch (error) {
    console.error('Error handling client error report:', error)
    return NextResponse.json(
      { error: 'Failed to process error report' }, 
      { status: 500 }
    )
  }
}

async function checkNotificationThreshold(errorData: ErrorReport, errorKey: string): Promise<boolean> {
  const errorInfo = errorCounts.get(errorKey)
  if (!errorInfo) return false

  const { count, firstSeen } = errorInfo
  const severity = errorData.severity || 'medium'
  const threshold = ERROR_THRESHOLDS[severity]
  
  // For critical errors, always notify
  if (severity === 'critical') {
    return true
  }

  // Check if count exceeds threshold within time window
  const now = new Date()
  const timeWindows = {
    high: 5 * 60 * 1000,      // 5 minutes
    medium: 15 * 60 * 1000,   // 15 minutes
    low: 60 * 60 * 1000       // 1 hour
  }

  const timeWindow = timeWindows[severity] || timeWindows.medium
  const withinWindow = (now.getTime() - firstSeen.getTime()) <= timeWindow

  return count >= threshold && withinWindow
}

async function sendErrorNotification(errorData: ErrorReport, errorInfo: { count: number; firstSeen: Date; lastSeen: Date }) {
  if (!resend || !process.env.ADMIN_EMAIL) return

  const subject = `${errorData.severity?.toUpperCase()} Error Alert: ${errorData.message}`
  
  const emailBody = `
<h2>Error Alert - All County Plumbers Website</h2>

<h3>Error Details:</h3>
<ul>
  <li><strong>Message:</strong> ${errorData.message}</li>
  <li><strong>URL:</strong> ${errorData.url}</li>
  <li><strong>Severity:</strong> ${errorData.severity}</li>
  <li><strong>Timestamp:</strong> ${errorData.timestamp}</li>
  <li><strong>User Agent:</strong> ${errorData.userAgent || 'Not provided'}</li>
</ul>

<h3>Occurrence Details:</h3>
<ul>
  <li><strong>Count:</strong> ${errorInfo.count} occurrences</li>
  <li><strong>First Seen:</strong> ${errorInfo.firstSeen.toISOString()}</li>
  <li><strong>Last Seen:</strong> ${errorInfo.lastSeen.toISOString()}</li>
</ul>

${errorData.stack ? `
<h3>Stack Trace:</h3>
<pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; font-size: 12px;">
${errorData.stack}
</pre>
` : ''}

${errorData.context ? `
<h3>Additional Context:</h3>
<pre style="background: #f5f5f5; padding: 10px; border-radius: 4px;">
${JSON.stringify(errorData.context, null, 2)}
</pre>
` : ''}

<p><em>This is an automated error notification from All County Plumbers website monitoring.</em></p>
`

  try {
    await resend.emails.send({
      from: 'errors@allcountyplumbers.com',
      to: process.env.ADMIN_EMAIL,
      subject,
      html: emailBody
    })
  } catch (emailError) {
    console.error('Failed to send error notification email:', emailError)
  }
}

// Cleanup old error counts (run periodically)
function cleanupOldErrors() {
  const now = new Date()
  const maxAge = 24 * 60 * 60 * 1000 // 24 hours

  errorCounts.forEach((errorInfo, key) => {
    if (now.getTime() - errorInfo.lastSeen.getTime() > maxAge) {
      errorCounts.delete(key)
    }
  })
}
