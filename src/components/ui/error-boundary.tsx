'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  // Error captured by boundary; integrate reporting service here
    
    // Here you could log to your error reporting service
    // logErrorToService(error, errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback
      return <FallbackComponent error={this.state.error} resetError={this.resetError} />
    }

    return this.props.children
  }
}

interface FallbackProps {
  error?: Error
  resetError: () => void
}

export function DefaultErrorFallback({ error, resetError }: FallbackProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <AlertTriangle className="w-8 h-8 text-primary-500" />
        </motion.div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Oops! Something went wrong
        </h1>
        
        <p className="text-gray-600 mb-6">
          We're sorry for the inconvenience. The page encountered an unexpected error, 
          but don't worry - our team has been notified and we're working on a fix.
        </p>

        {process.env.NODE_ENV === 'development' && error && (
          <details className="mb-6 text-left">
            <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
              Error Details (Development)
            </summary>
            <pre className="bg-gray-100 p-4 rounded-lg text-xs overflow-auto max-h-32 text-primary-500">
              {error.message}
              {error.stack}
            </pre>
          </details>
        )}

        <div className="space-y-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={resetError}
            className="w-full bg-primary-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center space-x-2"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Try Again</span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/"
            className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </motion.a>

          <p className="text-sm text-gray-500">
            Still having trouble? Call us at{' '}
            <a href="tel:3608832506" className="text-primary-500 font-semibold hover:underline">
              (360) 883-2506
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

// Smaller inline error boundary for components
export function InlineErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary fallback={InlineErrorFallback}>
      {children}
    </ErrorBoundary>
  )
}

function InlineErrorFallback({ error, resetError }: FallbackProps) {
  return (
    <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 my-4">
      <div className="flex items-start space-x-3">
        <AlertTriangle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="font-semibold text-red-800 mb-1">
            Unable to load this section
          </h3>
          <p className="text-primary-600 text-sm mb-3">
            This component encountered an error. Please try refreshing the page.
          </p>
          <button
            onClick={resetError}
            className="text-primary-500 hover:text-red-800 text-sm font-medium underline"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  )
}



