'use client'

import { useEffect } from 'react'

// Web vitals metric shape (subset we care about)
interface WebVitalMetric {
  name: string
  value: number
  id: string
  delta: number
  rating: 'good' | 'needs-improvement' | 'poor'
}

// Performance monitoring and web vitals tracking
export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load Web Vitals dynamically
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
  const emit = (metric: WebVitalMetric) => {/* web vitals metric hook */}
  onCLS(emit)
  onFCP(emit) 
  onLCP(emit)
  onTTFB(emit)
  onINP(emit)
      }).catch((error) => {
  // web vitals unavailable
      })

      // Performance Observer for monitoring
      if ('PerformanceObserver' in window) {
        // Monitor navigation timing
        const navObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming
              /* navigation metrics hook (metrics available in navEntry if needed) */
            }
          }
        })
        navObserver.observe({ entryTypes: ['navigation'] })

        // Monitor resource loading
        const resourceObserver = new PerformanceObserver((list) => {
          const resources = list.getEntries()
          const slowResources = resources.filter(entry => entry.duration > 1000)
          
          if (slowResources.length > 0) {
            // slow resource list suppressed
          }
        })
        resourceObserver.observe({ entryTypes: ['resource'] })

        // Monitor long tasks
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            // long task detected; integrate reporting if desired
          }
        })
        longTaskObserver.observe({ entryTypes: ['longtask'] })
      }

      // Memory usage monitoring
      if ('memory' in performance) {
        // memory metrics accessible via (performance as any).memory
        /* const memInfo = (performance as any).memory */
      }

      // Connection speed monitoring
      if ('connection' in navigator) {
        const connection = (navigator as any).connection
        // Adjust image quality based on very slow connections
        if (connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g') {
          document.documentElement.classList.add('slow-connection')
        }
      }
    }
  }, [])

  return null
}

// Google Analytics 4 component
export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && measurementId) {
      // Load gtag script
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
      document.head.appendChild(script)

      // Initialize gtag
      window.dataLayer = window.dataLayer || []
      window.gtag = function gtag() {
        window.dataLayer.push(arguments)
      }
      
      window.gtag('js', new Date())
      window.gtag('config', measurementId, {
        page_title: document.title,
        page_location: window.location.href
      })

      // Track custom events
  const trackEvent = (eventName: string, parameters: Record<string, unknown>) => {
        window.gtag('event', eventName, parameters)
      }

      // Auto-track scroll depth
      let maxScroll = 0
      const trackScroll = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        )
        
        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
          maxScroll = scrollPercent
          trackEvent('scroll_depth', {
            scroll_depth: scrollPercent
          })
        }
      }

      window.addEventListener('scroll', trackScroll, { passive: true })

      // Track form submissions
      const trackFormSubmission = (formName: string) => {
        trackEvent('form_submit', {
          form_name: formName
        })
      }

      // Track phone calls
      const trackPhoneCall = () => {
        trackEvent('phone_call', {
          event_category: 'engagement',
          event_label: 'header_phone'
        })
      }

      // Add click tracking to phone links
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement
        if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('tel:')) {
          trackPhoneCall()
        }
      })

      // Cleanup
      return () => {
        window.removeEventListener('scroll', trackScroll)
      }
    }
  }, [measurementId])

  return null
}

// Facebook Pixel component
export function FacebookPixel({ pixelId }: { pixelId: string }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && pixelId) {
      // Load Facebook Pixel script
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://connect.facebook.net/en_US/fbevents.js'
      document.head.appendChild(script)

      // Initialize Facebook Pixel
      script.onload = () => {
        if (window.fbq) {
          window.fbq('init', pixelId)
          window.fbq('track', 'PageView')

          // Track custom events
          const trackLeadEvent = () => {
            window.fbq('track', 'Lead')
          }

          const trackContactEvent = () => {
            window.fbq('track', 'Contact')
          }

          // Add event listeners for tracking
          document.addEventListener('submit', (e) => {
            const form = e.target as HTMLFormElement
            if (form.id === 'booking-form' || form.classList.contains('booking-form')) {
              trackLeadEvent()
            } else if (form.id === 'contact-form' || form.classList.contains('contact-form')) {
              trackContactEvent()
            }
          })
        }
      }
    }
  }, [pixelId])

  return null
}

// Declare gtag and fbq for TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
    fbq: (...args: unknown[]) => void
  }
}
