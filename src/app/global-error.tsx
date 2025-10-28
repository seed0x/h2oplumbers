'use client'

import { useEffect } from 'react'
import { MasterButton } from '@/components/ui/master-button'
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error occurred:', error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-primary-500" />
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-600 mb-6">
              We're experiencing technical difficulties. Our team has been notified and is working on a fix.
            </p>

            <div className="space-y-3 mb-6">
              <MasterButton
                onClick={reset}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white"
                size="lg"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </MasterButton>

              <MasterButton
                asChild
                variant="outline"
                className="w-full"
                size="lg"
              >
                <a href="/">
                  <Home className="w-5 h-5 mr-2" />
                  Go to Homepage
                </a>
              </MasterButton>
            </div>

            <div className="border-t pt-4">
              <p className="text-sm text-gray-500 mb-3">
                Need immediate assistance?
              </p>
              <MasterButton
                asChild
                className="w-full bg-primary hover:bg-primary-dark text-white"
                size="lg"
              >
                <a href="tel:+13608832506">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (360) 883-2506
                </a>
              </MasterButton>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}





