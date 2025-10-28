'use client'

import { useEffect } from 'react'

export function useSmoothScroll(offset: number = 80) {
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLElement
      const href = target.getAttribute('href')
      
      if (href?.startsWith('#')) {
        e.preventDefault()
        const targetElement = document.querySelector(href)
        
        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }
    }

    // Add event listener to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick)
    })

    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [offset])
}

// Skip navigation component for accessibility
export function SkipNavigation() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white px-4 py-2 rounded-lg z-50 font-semibold"
    >
      Skip to main content
    </a>
  )
}

// Focus management hook
export function useFocusManagement() {
  const setFocusToElement = (selector: string) => {
    const element = document.querySelector(selector) as HTMLElement
    if (element) {
      element.focus()
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const trapFocus = (containerSelector: string) => {
    const container = document.querySelector(containerSelector) as HTMLElement
    if (!container) return

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }

      if (e.key === 'Escape') {
        // Close modal or return focus to trigger element
        const closeButton = container.querySelector('[data-close]') as HTMLElement
        if (closeButton) {
          closeButton.click()
        }
      }
    }

    container.addEventListener('keydown', handleTabKey)
    firstElement?.focus()

    return () => {
      container.removeEventListener('keydown', handleTabKey)
    }
  }

  return { setFocusToElement, trapFocus }
}

// Announcement for screen readers
export function LiveRegion({ 
  message, 
  level = 'polite' 
}: { 
  message: string
  level?: 'polite' | 'assertive' | 'off' 
}) {
  return (
    <div
      role="status"
      aria-live={level}
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  )
}

// Enhanced button component with better accessibility
interface AccessibleButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  ariaLabel?: string
  type?: 'button' | 'submit' | 'reset'
}

export function AccessibleButton({
  children,
  onClick,
  disabled = false,
  loading = false,
  variant = 'primary',
  size = 'md',
  className = '',
  ariaLabel,
  type = 'button',
  ...props
}: AccessibleButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-400 disabled:bg-primary-300',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 disabled:bg-gray-50',
    danger: 'bg-primary-500 text-white hover:bg-primary-500 focus:ring-primary-400 disabled:bg-red-200'
  }
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-busy={loading}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabled || loading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  )
}

