// Import only pure utilities to avoid loading Next.js server-specific objects
import { validateInput, validateHoneypot, validationSchemas, generateCSRFToken, validateCSRFToken } from '@/lib/validation-utils'

// Mock next/server to avoid pulling in Request implementation for pure utility tests
jest.mock('next/server', () => ({
  NextRequest: function MockReq() {},
  NextResponse: { next: () => ({ headers: { set: () => {} } }) },
}))

describe('Validation Utilities', () => {
  describe('validateInput', () => {
    it('accepts valid booking data', () => {
      const data = {
        name: 'John Smith',
        email: 'john@example.com',
        phone: '360-555-1212',
        address: '123 Main Street',
        service: 'general',
        message: 'Need help with a leaking pipe in the basement'
      }
      const result = validateInput(data, validationSchemas.booking)
      expect(result.isValid).toBe(true)
      expect(result.errors).toHaveLength(0)
    })

    it('rejects invalid fields and collects errors', () => {
      const data = {
        name: 'J', // too short
        email: 'not-an-email',
        phone: '',
        address: '12', // too short
        service: 'unknown',
        message: 'short'
      }
      const result = validateInput(data, validationSchemas.booking)
      expect(result.isValid).toBe(false)
      expect(result.errors.length).toBeGreaterThanOrEqual(4)
      expect(result.errors.join(' ')).toMatch(/name|email|address|service|message/)
    })

    it('handles optional missing fields gracefully', () => {
  const partial = { name: 'Valid Name', email: 'user@test.com', phone: '360-555-1212', address: '12345 Street Road', service: 'general', message: 'Long enough message for validation.' }
      const result = validateInput(partial, validationSchemas.booking)
      expect(result.isValid).toBe(true)
    })
  })

  describe('validateHoneypot', () => {
    it('returns true when honeypot fields are empty/missing', () => {
      expect(validateHoneypot({ name: 'User', email: 'user@example.com' })).toBe(true)
    })

    it('returns false when honeypot field is filled', () => {
      expect(validateHoneypot({ website: 'https://spam.example', name: 'User' })).toBe(false)
    })
  })

  describe('CSRF token utilities', () => {
    it('generates a token that validates', () => {
      const token = generateCSRFToken()
      expect(validateCSRFToken(token)).toBe(true)
    })

    it('invalidates an obviously malformed token', () => {
      expect(validateCSRFToken('@@bad@@')).toBe(false)
    })
  })
})
