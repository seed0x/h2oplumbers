'use client'

import { useEffect } from 'react'

interface AccessibilityEnhancementsProps {
  children: React.ReactNode
}

export function AccessibilityEnhancements({ children }: AccessibilityEnhancementsProps) {
  useEffect(() => {
    // Add high contrast mode detection
    const addHighContrastSupport = () => {
      const highContrastMediaQuery = window.matchMedia('(prefers-contrast: high)')
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast')
          // Increase contrast for key elements
          const style = document.createElement('style')
          style.id = 'high-contrast-styles'
          style.textContent = `
            .high-contrast .btn-primary {
              background-color: #000 !important;
              color: #fff !important;
              border: 2px solid #fff !important;
            }
            .high-contrast .btn-secondary {
              background-color: #fff !important;
              color: #000 !important;
              border: 2px solid #000 !important;
            }
            .high-contrast a {
              text-decoration: underline !important;
            }
            .high-contrast :focus {
              outline: 3px solid #ffff00 !important;
              outline-offset: 2px !important;
            }
          `
          document.head.appendChild(style)
        } else {
          document.documentElement.classList.remove('high-contrast')
          const existingStyle = document.getElementById('high-contrast-styles')
          if (existingStyle) {
            document.head.removeChild(existingStyle)
          }
        }
      }
      
      // Initial check
      handleContrastChange({ matches: highContrastMediaQuery.matches } as MediaQueryListEvent)
      
      // Listen for changes
      highContrastMediaQuery.addEventListener('change', handleContrastChange)
      
      return () => {
        highContrastMediaQuery.removeEventListener('change', handleContrastChange)
      }
    }

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      const reducedMotionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      
      const handleMotionPreference = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('reduce-motion')
          // Override animations
          const style = document.createElement('style')
          style.id = 'reduced-motion-styles'
          style.textContent = `
            .reduce-motion *,
            .reduce-motion *::before,
            .reduce-motion *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
            .reduce-motion .animate-pulse,
            .reduce-motion .animate-spin {
              animation: none !important;
            }
          `
          document.head.appendChild(style)
        } else {
          document.documentElement.classList.remove('reduce-motion')
          const existingStyle = document.getElementById('reduced-motion-styles')
          if (existingStyle) {
            document.head.removeChild(existingStyle)
          }
        }
      }
      
      // Initial check
      handleMotionPreference({ matches: reducedMotionMediaQuery.matches } as MediaQueryListEvent)
      
      // Listen for changes
      reducedMotionMediaQuery.addEventListener('change', handleMotionPreference)
      
      return () => {
        reducedMotionMediaQuery.removeEventListener('change', handleMotionPreference)
      }
    }

    // Improve focus management
    const improveFocusManagement = () => {
      // Make sure all interactive elements have proper focus states
      const interactiveElements = document.querySelectorAll(
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      
      interactiveElements.forEach(element => {
        if (!element.hasAttribute('aria-label') && !element.textContent?.trim()) {
          // Add aria-label for elements without text content
          const tagName = element.tagName.toLowerCase()
          if (tagName === 'button') {
            element.setAttribute('aria-label', 'Button')
          } else if (tagName === 'a') {
            element.setAttribute('aria-label', 'Link')
          }
        }
      })

      // Add proper focus indicators
      const focusStyle = document.createElement('style')
      focusStyle.id = 'enhanced-focus-styles'
      focusStyle.textContent = `
        *:focus {
          outline: 2px solid hsl(var(--brand-cyan)) !important;
          outline-offset: 2px !important;
          box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.2) !important;
        }
        
        button:focus,
        a:focus,
        input:focus,
        select:focus,
        textarea:focus {
          outline: 3px solid hsl(var(--brand-cyan)) !important;
          outline-offset: 2px !important;
        }
      `
      document.head.appendChild(focusStyle)
    }

    // Add keyboard navigation improvements
    const improveKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        // ESC key handling for modals
        if (e.key === 'Escape') {
          const modal = document.querySelector('[role="dialog"]')
          const popover = document.querySelector('[data-popover-open="true"]')
          
          if (modal) {
            const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]')
            if (closeButton instanceof HTMLElement) {
              closeButton.click()
            }
          }
          
          if (popover) {
            popover.removeAttribute('data-popover-open')
          }
        }
        
        // Enter key handling for custom clickable elements
        if (e.key === 'Enter') {
          const target = e.target as HTMLElement
          if (target.hasAttribute('role') && 
              target.getAttribute('role') === 'button' && 
              !target.hasAttribute('disabled')) {
            target.click()
          }
        }
      })
    }

    // Add screen reader announcements for dynamic content
    const addScreenReaderAnnouncements = () => {
      // Create announcement region
      const announceRegion = document.createElement('div')
      announceRegion.setAttribute('aria-live', 'polite')
      announceRegion.setAttribute('aria-atomic', 'true')
      announceRegion.className = 'sr-only'
      announceRegion.id = 'accessibility-announcements'
      document.body.appendChild(announceRegion)

      // Function to announce messages
      window.announceToScreenReader = (message: string) => {
        const region = document.getElementById('accessibility-announcements')
        if (region) {
          region.textContent = message
          setTimeout(() => {
            region.textContent = ''
          }, 1000)
        }
      }
    }

    // Run all enhancements
    const cleanupContrast = addHighContrastSupport()
    const cleanupMotion = addReducedMotionSupport()
    improveFocusManagement()
    improveKeyboardNavigation()
    addScreenReaderAnnouncements()

    return () => {
      cleanupContrast?.()
      cleanupMotion?.()
      
      const styles = ['high-contrast-styles', 'reduced-motion-styles', 'enhanced-focus-styles']
      styles.forEach(id => {
        const style = document.getElementById(id)
        if (style) document.head.removeChild(style)
      })
      
      const announcements = document.getElementById('accessibility-announcements')
      if (announcements) document.body.removeChild(announcements)
    }
  }, [])

  return <>{children}</>
}

// ARIA live region component for dynamic updates
export function ARIALiveRegion({ 
  message, 
  level = 'polite',
  atomic = true 
}: {
  message: string
  level?: 'off' | 'polite' | 'assertive'
  atomic?: boolean
}) {
  return (
    <div
      aria-live={level}
      aria-atomic={atomic}
      className="sr-only"
    >
      {message}
    </div>
  )
}

// Enhanced form accessibility
export function AccessibleForm({ 
  children, 
  onSubmit,
  title 
}: {
  children: React.ReactNode
  onSubmit?: () => void
  title?: string
}) {
  return (
    <form 
      onSubmit={onSubmit} 
      aria-label={title}
      noValidate
    >
      {children}
    </form>
  )
}

// Enhanced input with proper ARIA attributes
interface AccessibleInputProps {
  id: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  error?: string
  description?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function AccessibleInput({
  id,
  label,
  type = 'text',
  placeholder,
  required = false,
  error,
  description,
  value,
  onChange
}: AccessibleInputProps) {
  const describedByIds = []
  if (description) describedByIds.push(`${id}-description`)
  if (error) describedByIds.push(`${id}-error`)

  return (
    <div className="space-y-1">
      <label 
        htmlFor={id}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
        {required && <span className="text-primary-500 ml-1" aria-label="required">*</span>}
      </label>
      
      {description && (
        <p 
          id={`${id}-description`}
          className="text-sm text-gray-600"
        >
          {description}
        </p>
      )}
      
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={describedByIds.length > 0 ? describedByIds.join(' ') : undefined}
        className={`
          block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-primary-500
          ${error ? 'border-primary-500' : ''}
        `}
      />
      
      {error && (
        <p 
          id={`${id}-error`}
          role="alert"
          className="text-sm text-primary-500"
        >
          {error}
        </p>
      )}
    </div>
  )
}

// Declare global function for TypeScript
declare global {
  interface Window {
    announceToScreenReader: (message: string) => void
  }
}




