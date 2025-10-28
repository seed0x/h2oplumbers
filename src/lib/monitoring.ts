'use client'

// Error reporting utility
class ErrorReporter {
  private static instance: ErrorReporter
  private userId?: string
  private sessionId: string

  constructor() {
    this.sessionId = this.generateSessionId()
    this.setupGlobalErrorHandlers()
  }

  static getInstance(): ErrorReporter {
    if (!ErrorReporter.instance) {
      ErrorReporter.instance = new ErrorReporter()
    }
    return ErrorReporter.instance
  }

  setUserId(userId: string) {
    this.userId = userId
  }

  private generateSessionId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }

  private setupGlobalErrorHandlers() {
    // JavaScript errors
    window.addEventListener('error', (event) => {
      this.reportError({
        message: event.message,
        stack: event.error?.stack,
        url: window.location.href,
        severity: 'medium',
        context: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno
        }
      })
    })

    // Promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.reportError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        url: window.location.href,
        severity: 'high',
        context: {
          reason: event.reason,
          promise: event.promise
        }
      })
    })

    // React error boundary support
    if (typeof window !== 'undefined') {
      ;(window as unknown as { __ERROR_REPORTER__?: ErrorReporter }).__ERROR_REPORTER__ = this
    }
  }

  async reportError({
    message,
    stack,
    url,
    severity = 'medium',
    context
  }: {
    message: string
    stack?: string
    url?: string
    severity?: 'low' | 'medium' | 'high' | 'critical'
  context?: Record<string, unknown>
  }) {
    try {
      const errorData = {
        message,
        stack,
        url: url || window.location.href,
        userAgent: navigator.userAgent,
        userId: this.userId,
        sessionId: this.sessionId,
        timestamp: new Date().toISOString(),
        severity,
        context: {
          ...context,
          viewport: {
            width: window.innerWidth,
            height: window.innerHeight
          },
          document: {
            title: document.title,
            referrer: document.referrer
          }
        }
      }

      await fetch('/api/monitoring/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(errorData)
      })
    } catch (e) {
      console.error('Failed to report error:', e)
    }
  }

  // Manual error reporting
  captureException(error: Error, context?: Record<string, unknown>) {
    this.reportError({
      message: error.message,
      stack: error.stack,
      severity: 'high',
      context
    })
  }

  // Performance monitoring
  reportPerformance() {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      
      if (navigation) {
        this.track('performance_metrics', {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          firstByte: navigation.responseStart - navigation.requestStart,
          connectTime: navigation.connectEnd - navigation.connectStart,
          dnsTime: navigation.domainLookupEnd - navigation.domainLookupStart
        })
      }

      // Core Web Vitals
      this.observeCoreWebVitals()
    }
  }

  private observeCoreWebVitals() {
    // First Contentful Paint
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          this.track('core_web_vital', {
            metric: 'first_contentful_paint',
            value: entry.startTime
          })
        }
      }
    })
    observer.observe({ entryTypes: ['paint'] })

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      this.track('core_web_vital', {
        metric: 'largest_contentful_paint',
        value: lastEntry.startTime
      })
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

    // Cumulative Layout Shift
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as any[]) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
        }
      }
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })

    // Report CLS on page unload
    window.addEventListener('beforeunload', () => {
      this.track('core_web_vital', {
        metric: 'cumulative_layout_shift',
        value: clsValue
      })
    })
  }

  // Analytics tracking
  track(event: string, properties?: Record<string, unknown>) {
    const analyticsData = {
      event,
      properties,
      userId: this.userId,
      sessionId: this.sessionId,
      page: window.location.pathname,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    }

    // Send to analytics API
    fetch('/api/monitoring/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(analyticsData)
    }).catch(console.error)

    // Also send to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event, properties)
    }

    // Microsoft Clarity custom events
    if (typeof window !== 'undefined' && (window as any).clarity) {
      (window as any).clarity('event', event)
    }
  }

  // Business-specific tracking methods
  trackBookingStarted(serviceType?: string) {
    this.track('booking_started', {
      service_type: serviceType,
      page: window.location.pathname
    })
  }

  trackBookingCompleted(bookingData: Record<string, unknown>) {
    this.track('booking_completed', {
      ...bookingData,
      conversion_page: window.location.pathname
    })
  }

  trackQuoteRequested(quoteData: Record<string, unknown>) {
    this.track('quote_requested', {
      ...quoteData,
      page: window.location.pathname
    })
  }

  trackEmergencyCallClicked() {
    this.track('emergency_call_clicked', {
      page: window.location.pathname,
      timestamp: new Date().toISOString()
    })
  }

  trackServiceViewed(serviceName: string) {
    this.track('service_viewed', {
      service_name: serviceName,
      page: window.location.pathname
    })
  }

  trackServiceAreaViewed(area: string) {
    this.track('service_area_viewed', {
      area,
      page: window.location.pathname
    })
  }

  // Form interaction tracking
  trackFormStarted(formName: string) {
    this.track('form_started', {
      form_name: formName,
      page: window.location.pathname
    })
  }

  trackFormCompleted(formName: string, formData?: Record<string, unknown>) {
    this.track('form_completed', {
      form_name: formName,
      ...formData,
      page: window.location.pathname
    })
  }

  trackFormAbandoned(formName: string, completionPercentage: number) {
    this.track('form_abandoned', {
      form_name: formName,
      completion_percentage: completionPercentage,
      page: window.location.pathname
    })
  }
}

// Initialize and export
export const errorReporter = ErrorReporter.getInstance()

// React Error Boundary support
interface ReactErrorInfo { componentStack: string }
export function reportReactError(error: Error, errorInfo: ReactErrorInfo) {
  errorReporter.captureException(error, {
    type: 'react_error_boundary',
    componentStack: errorInfo.componentStack
  })
}

// Utility hooks for React components
export function useErrorReporter() {
  return {
  reportError: (error: Error, context?: Record<string, unknown>) => {
      errorReporter.captureException(error, context)
    },
  track: (event: string, properties?: Record<string, unknown>) => {
      errorReporter.track(event, properties)
    }
  }
}

// Auto-initialize on import
if (typeof window !== 'undefined') {
  // Report initial page performance
  window.addEventListener('load', () => {
    setTimeout(() => {
      errorReporter.reportPerformance()
    }, 1000)
  })
}


