'use client'

import { useEffect } from 'react'

interface ErrorTrackingProps {
  children: React.ReactNode
}

// Global error tracking and reporting
export function ErrorTracking({ children }: ErrorTrackingProps) {
  useEffect(() => {
    // Global error handler for unhandled errors
    const handleError = (event: ErrorEvent) => {
      console.error('Global Error:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
      })

      // In production, you would send this to your error tracking service
      // trackError({
      //   message: event.message,
      //   source: event.filename,
      //   line: event.lineno,
      //   column: event.colno,
      //   stack: event.error?.stack
      // })

      // Show user-friendly notification
      if (window.announceToScreenReader) {
        window.announceToScreenReader('An error occurred. Please refresh the page or contact support.')
      }
    }

    // Global promise rejection handler
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled Promise Rejection:', event.reason)
      
      // In production, track the rejection
      // trackError({
      //   message: `Unhandled Promise Rejection: ${event.reason}`,
      //   type: 'promise_rejection'
      // })
    }

    // Resource loading error handler
    const handleResourceError = (event: Event) => {
      const target = event.target as HTMLElement
      if (target && target.tagName) {
        console.error(`Resource failed to load: ${target.tagName}`, target)
        
        // Handle specific resource types
        if (target.tagName === 'IMG') {
          const img = target as HTMLImageElement
          // Use fallback image or show placeholder
          img.src = '/images/placeholder-image.svg'
          img.alt = 'Image unavailable'
        }
        
        // Track resource errors
        // trackError({
        //   message: `Resource loading failed: ${target.tagName}`,
        //   url: (target as any).src || (target as any).href,
        //   type: 'resource_error'
        // })
      }
    }

    // Add event listeners
    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)
    document.addEventListener('error', handleResourceError, true) // Capture phase

    // Network status monitoring
    const handleOnline = () => {
      if (window.announceToScreenReader) {
        window.announceToScreenReader('Connection restored')
      }
      document.body.classList.remove('offline')
    }

    const handleOffline = () => {
      if (window.announceToScreenReader) {
        window.announceToScreenReader('Connection lost. Some features may not work.')
      }
      document.body.classList.add('offline')
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Initial network status
    if (!navigator.onLine) {
      document.body.classList.add('offline')
    }

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
      document.removeEventListener('error', handleResourceError, true)
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return <>{children}</>
}

// User-friendly error notification system
export function ErrorNotification({ 
  error, 
  onDismiss 
}: { 
  error: string | null
  onDismiss: () => void 
}) {
  if (!error) return null

  return (
    <div 
      role="alert" 
      aria-live="assertive"
      className="fixed top-4 right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-md"
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <svg className="w-5 h-5 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">Something went wrong</p>
          <p className="text-sm opacity-90 mt-1">{error}</p>
        </div>
        <button
          onClick={onDismiss}
          className="flex-shrink-0 ml-4 text-white hover:text-gray-200"
          aria-label="Dismiss error notification"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

// Retry mechanism for failed operations
export function useRetry<T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
) {
  const retry = async (attempt: number = 1): Promise<T> => {
    try {
      return await operation()
    } catch (error) {
      if (attempt >= maxRetries) {
        throw error
      }
      
      console.warn(`Operation failed, retrying (${attempt}/${maxRetries})...`, error)
      
      // Exponential backoff
      await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, attempt - 1)))
      
      return retry(attempt + 1)
    }
  }

  return retry
}

// Graceful degradation helper
export function withFallback<T>(
  operation: () => T,
  fallback: T,
  errorMessage?: string
): T {
  try {
    return operation()
  } catch (error) {
    console.warn(errorMessage || 'Operation failed, using fallback:', error)
    return fallback
  }
}

