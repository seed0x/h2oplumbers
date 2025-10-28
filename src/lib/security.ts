import { NextRequest, NextResponse } from 'next/server'

// Security headers configuration
export function securityHeaders() {
  return {
    // Content Security Policy
    'Content-Security-Policy': `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' 
        https://www.googletagmanager.com 
        https://www.google-analytics.com 
        https://clarity.microsoft.com
        https://maps.googleapis.com
        https://www.gstatic.com;
      style-src 'self' 'unsafe-inline' 
        https://fonts.googleapis.com
        https://maps.googleapis.com;
      img-src 'self' data: blob: 
        https://*.googleusercontent.com 
        https://maps.gstatic.com
        https://maps.googleapis.com
        https://www.google-analytics.com;
      font-src 'self' 
        https://fonts.gstatic.com;
      connect-src 'self' 
        https://www.google-analytics.com
        https://clarity.microsoft.com
        https://maps.googleapis.com;
      frame-src 'self' 
        https://www.google.com;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
    `.replace(/\s+/g, ' ').trim(),

    // Security headers
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
    
    // HSTS (HTTP Strict Transport Security)
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    
    // Cache control for security-sensitive responses
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  }
}

// Input sanitization
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return ''
  
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: URLs
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .trim()
}

// Email validation with security considerations
export function isValidEmail(email: string): boolean {
  // Basic format validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (!emailRegex.test(email)) return false
  
  // Security checks
  if (email.length > 320) return false // RFC 5321 limit
  if (email.includes('..')) return false // Consecutive dots
  if (email.startsWith('.') || email.endsWith('.')) return false
  
  const [localPart, domain] = email.split('@')
  if (localPart.length > 64) return false // RFC 5321 limit
  if (domain.length > 253) return false // RFC 5321 limit
  
  return true
}

// Phone number validation and formatting
export function sanitizePhone(phone: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '')
  
  // Validate US phone number (10 or 11 digits)
  if (digits.length === 10) {
    return `+1${digits}`
  } else if (digits.length === 11 && digits.startsWith('1')) {
    return `+${digits}`
  }
  
  return '' // Invalid phone number
}

// Rate limiting configuration
export const rateLimitConfig = {
  // API endpoints
  api: {
    booking: { requests: 5, window: 60 * 1000 }, // 5 requests per minute
    quote: { requests: 3, window: 60 * 1000 }, // 3 requests per minute
    contact: { requests: 3, window: 60 * 1000 }, // 3 requests per minute
    newsletter: { requests: 2, window: 60 * 1000 }, // 2 requests per minute
    emergency: { requests: 10, window: 60 * 1000 }, // 10 requests per minute
    analytics: { requests: 100, window: 60 * 1000 }, // 100 requests per minute
    errors: { requests: 50, window: 60 * 1000 } // 50 requests per minute
  },
  
  // General rate limits
  general: {
    page: { requests: 100, window: 60 * 1000 }, // 100 page views per minute
    auth: { requests: 5, window: 15 * 60 * 1000 }, // 5 auth attempts per 15 minutes
    search: { requests: 20, window: 60 * 1000 } // 20 searches per minute
  }
}

// Security middleware
export function securityMiddleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Add security headers
  const headers = securityHeaders()
  Object.entries(headers).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
  
  // Check for suspicious patterns in URL
  const url = request.nextUrl.pathname.toLowerCase()
  const suspiciousPatterns = [
    '/wp-admin',
    '/wp-login',
    '/.env',
    '/config',
    '/admin',
    '/phpmyadmin',
    '/.git',
    '/backup',
    '/dump.sql'
  ]
  
  if (suspiciousPatterns.some(pattern => url.includes(pattern))) {
    console.warn(`Suspicious URL access attempt: ${url} from IP: ${request.ip}`)
    return new NextResponse('Not Found', { status: 404 })
  }
  
  // Check User-Agent for bots/scrapers
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || ''
  const suspiciousAgents = [
    'sqlmap',
    'nikto',
    'nessus',
    'nmap',
    'masscan',
    'zgrab'
  ]
  
  if (suspiciousAgents.some(agent => userAgent.includes(agent))) {
    console.warn(`Suspicious User-Agent: ${userAgent} from IP: ${request.ip}`)
    return new NextResponse('Forbidden', { status: 403 })
  }
  
  return response
}

// Data validation schemas
export const validationSchemas = {
  booking: {
    name: { min: 2, max: 50, pattern: /^[a-zA-Z\s'-]+$/ },
    email: { validator: isValidEmail },
    phone: { validator: (phone: string) => sanitizePhone(phone).length > 0 },
    address: { min: 5, max: 200 },
    service: { enum: ['drain-cleaning', 'water-heater', 'emergency', 'general', 'leak-repair'] },
    message: { min: 10, max: 1000 }
  },
  
  quote: {
    serviceType: { required: true, max: 50 },
    urgency: { enum: ['low', 'medium', 'high', 'emergency'] },
    propertyType: { enum: ['residential', 'commercial'] },
    description: { min: 10, max: 500 }
  },
  
  contact: {
    subject: { min: 5, max: 100 },
    message: { min: 10, max: 1000 }
  }
}

// Validation rule types
interface ValidationRule {
  required?: boolean
  min?: number
  max?: number
  pattern?: RegExp
  enum?: string[]
  validator?: (value: string) => boolean
}

interface ValidationSchema {
  [field: string]: ValidationRule
}

// Input validation function
export function validateInput<T extends Record<string, unknown>>(data: T, schema: ValidationSchema): { isValid: boolean; errors: string[] } {
  const errors: string[] = []
  
  for (const [field, rules] of Object.entries(schema)) {
    const value = data[field]
    
    // Check required fields
    if (rules.required && (!value || value.toString().trim() === '')) {
      errors.push(`${field} is required`)
      continue
    }
    
    if (!value) continue // Skip optional empty fields
    
    const stringValue = value.toString().trim()
    
    // Length validation
    if (rules.min && stringValue.length < rules.min) {
      errors.push(`${field} must be at least ${rules.min} characters`)
    }
    
    if (rules.max && stringValue.length > rules.max) {
      errors.push(`${field} must be no more than ${rules.max} characters`)
    }
    
    // Pattern validation
    if (rules.pattern && !rules.pattern.test(stringValue)) {
      errors.push(`${field} format is invalid`)
    }
    
    // Enum validation
    if (rules.enum && !rules.enum.includes(stringValue)) {
      errors.push(`${field} must be one of: ${rules.enum.join(', ')}`)
    }
    
    // Custom validator
    if (rules.validator && !rules.validator(stringValue)) {
      errors.push(`${field} is invalid`)
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

// Honeypot field validation (anti-bot)
export function validateHoneypot(formData: Record<string, unknown>): boolean {
  // Check for common honeypot field names
  const honeypotFields = ['website', 'url', 'company_website', 'homepage', 'phone_number_backup']
  
  for (const field of honeypotFields) {
    if (formData[field] && formData[field].toString().trim() !== '') {
      console.warn('Honeypot field filled, likely bot submission')
      return false
    }
  }
  
  return true
}

// CSRF token generation and validation
export function generateCSRFToken(): string {
  return Buffer.from(
    `${Date.now()}-${Math.random().toString(36)}`
  ).toString('base64')
}

export function validateCSRFToken(token: string, maxAge: number = 3600000): boolean {
  try {
    const decoded = Buffer.from(token, 'base64').toString()
    const [timestamp] = decoded.split('-')
    const tokenAge = Date.now() - parseInt(timestamp)
    
    return tokenAge <= maxAge
  } catch {
    return false
  }
}


