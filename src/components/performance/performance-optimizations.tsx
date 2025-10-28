'use client'

import { useEffect, useState } from 'react'

interface PerformanceOptimizationsProps {
  children: React.ReactNode
}

export function PerformanceOptimizations({ children }: PerformanceOptimizationsProps) {
  const [isSlowConnection, setIsSlowConnection] = useState(false)

  useEffect(() => {
    // Detect slow connections and adjust image quality
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      const connection = (navigator as any).connection
      if (connection) {
        const isSlowConnection = 
          connection.effectiveType === 'slow-2g' ||
          connection.effectiveType === '2g' ||
          connection.downlink < 1.5

        setIsSlowConnection(isSlowConnection)
        
        if (isSlowConnection) {
          document.documentElement.classList.add('slow-connection')
          
          // Reduce image quality for slow connections
          const images = document.querySelectorAll('img[data-nimg]')
          images.forEach(img => {
            if (img instanceof HTMLImageElement) {
              const src = img.src
              if (src.includes('quality=')) {
                img.src = src.replace(/quality=\d+/, 'quality=50')
              }
            }
          })
        }
      }
    }

    // Preload critical resources
    const criticalResources = [
      '/images/acp-logo.png',
      '/favicon.ico'
    ]

    criticalResources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = resource.endsWith('.png') ? 'image' : 'fetch'
      link.href = resource
      document.head.appendChild(link)
    })

    // Optimize loading for above-the-fold content
    const aboveTheFoldImages = document.querySelectorAll('img[data-priority="true"]')
    aboveTheFoldImages.forEach(img => {
      img.setAttribute('loading', 'eager')
      img.setAttribute('fetchpriority', 'high')
    })

    // Lazy load below-the-fold images with intersection observer
    const lazyImages = document.querySelectorAll('img[loading="lazy"]')
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.removeAttribute('data-src')
            observer.unobserve(img)
          }
        }
      })
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    })

    lazyImages.forEach(img => imageObserver.observe(img))

    return () => {
      imageObserver.disconnect()
    }
  }, [])

  // Add slow connection styles
  useEffect(() => {
    if (isSlowConnection) {
      const style = document.createElement('style')
      style.textContent = `
        .slow-connection img {
          filter: blur(0.5px);
          transition: filter 0.3s ease;
        }
        .slow-connection img.loaded {
          filter: none;
        }
        .slow-connection .animate-pulse {
          animation-duration: 2s;
        }
      `
      document.head.appendChild(style)
      
      return () => {
        document.head.removeChild(style)
      }
    }
  }, [isSlowConnection])

  return <>{children}</>
}

// Hook for optimizing image loading
export function useImageOptimization() {
  const [isSlowConnection, setIsSlowConnection] = useState(false)

  useEffect(() => {
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      const connection = (navigator as any).connection
      setIsSlowConnection(
        connection?.effectiveType === 'slow-2g' ||
        connection?.effectiveType === '2g' ||
        connection?.downlink < 1.5
      )
    }
  }, [])

  return {
    isSlowConnection,
    getImageQuality: (defaultQuality: number = 85) => 
      isSlowConnection ? Math.min(50, defaultQuality) : defaultQuality,
    shouldLazyLoad: (priority: boolean = false) => !priority,
    getImageSizes: (priority: boolean = false) => 
      priority 
        ? '100vw' 
        : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  }
}

// Component for critical CSS inlining
export function CriticalCSS() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* Critical above-the-fold styles */
          .hero-section { min-height: 70vh; }
          .logo { width: auto; height: 2rem; }
          .btn-primary { 
            background-color: hsl(var(--brand-red)); 
            color: hsl(var(--brand-white));
          }
          .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
          .sr-only { 
            position: absolute; 
            width: 1px; 
            height: 1px; 
            padding: 0; 
            margin: -1px; 
            overflow: hidden; 
            clip: rect(0, 0, 0, 0); 
            white-space: nowrap; 
            border: 0; 
          }
        `
      }}
    />
  )
}
