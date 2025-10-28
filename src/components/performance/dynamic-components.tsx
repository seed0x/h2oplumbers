'use client'

import { Suspense, lazy } from 'react'
import dynamic from 'next/dynamic'

// Component loading fallbacks
export function ComponentSkeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className || 'h-32'}`}>
      <div className="h-full w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite]" />
    </div>
  )
}

// Lazy load heavy components

export const LazyCostCalculator = dynamic(
  () => import('../calculator/enhanced-cost-calculator').then(mod => ({ default: mod.EnhancedCostCalculator })),
  {
    loading: () => <ComponentSkeleton className="h-80" />,
    ssr: false
  }
)

export const LazyServiceAreaChecker = dynamic(
  () => import('../services/service-area-checker').then(mod => ({ default: mod.ServiceAreaChecker })),
  {
    loading: () => <ComponentSkeleton className="h-64" />,
    ssr: false
  }
)

// Chatbot with intersection observer for performance
export const LazyChatbot = dynamic(
  () => import('../chat/plumbing-chatbot').then(mod => ({ default: mod.PlumbingChatbot })),
  {
    loading: () => null,
    ssr: false
  }
)

// Error boundary for dynamic imports
export function DynamicComponentWrapper({ 
  children, 
  fallback 
}: { 
  children: React.ReactNode
  fallback?: React.ReactNode 
}) {
  return (
    <Suspense fallback={fallback || <ComponentSkeleton />}>
      {children}
    </Suspense>
  )
}

// Route prefetching utility
export function usePrefetchRoutes() {
  if (typeof window !== 'undefined') {
    const router = require('next/router')
    
    // Prefetch critical routes
    const criticalRoutes = ['/services', '/booking', '/contact']
    
    criticalRoutes.forEach(route => {
      router.prefetch?.(route)
    })
  }
}
