'use client'

import React, { useState, useEffect } from 'react'
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react'

export interface ValidationError {
  field: string
  message: string
  code?: string
}

export interface FormValidationProps {
  errors?: ValidationError[]
  isSubmitting?: boolean
  isSuccess?: boolean
  successMessage?: string
  className?: string
}

export interface ValidationResult {
  isValid: boolean
  errors: ValidationError[]
}

export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  enum?: string[]
  message: string
}

export interface ValidationSchema {
  [field: string]: ValidationRule
}

// Enhanced validation rules
export const validationRules: ValidationSchema = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s'-]+$/,
    message: 'Name must contain only letters, spaces, hyphens, and apostrophes'
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address'
  },
  phone: {
    required: true,
    pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    message: 'Please enter a valid 10-digit phone number'
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 2000,
    message: 'Message must be between 10 and 2000 characters'
  },
  address: {
    required: false,
    minLength: 10,
    maxLength: 200,
    message: 'Address must be at least 10 characters'
  },
  service: {
    required: true,
    enum: ['emergency', 'drain-cleaning', 'water-heater', 'leak-repair', 'installation', 'general'],
    message: 'Please select a valid service type'
  }
}

/**
 * Real-time field validation
 */
export function validateField(fieldName: string, value: string): ValidationError | null {
  const rules = validationRules[fieldName]
  if (!rules) return null

  // Required field check
  if (rules.required && (!value || value.trim().length === 0)) {
    return {
      field: fieldName,
      message: `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`,
      code: 'required'
    }
  }

  if (!value || value.trim().length === 0) return null // Skip validation for optional empty fields

  const trimmedValue = value.trim()

  // Length validation
  if (rules.minLength && trimmedValue.length < rules.minLength) {
    return {
      field: fieldName,
      message: `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${rules.minLength} characters`,
      code: 'min-length'
    }
  }

  if (rules.maxLength && trimmedValue.length > rules.maxLength) {
    return {
      field: fieldName,
      message: `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} cannot exceed ${rules.maxLength} characters`,
      code: 'max-length'
    }
  }

  // Pattern validation
  if (rules.pattern && !rules.pattern.test(trimmedValue)) {
    return {
      field: fieldName,
      message: rules.message || `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} format is invalid`,
      code: 'pattern'
    }
  }

  // Enum validation
  if (rules.enum && !rules.enum.includes(trimmedValue)) {
    return {
      field: fieldName,
      message: rules.message || `Please select a valid ${fieldName}`,
      code: 'enum'
    }
  }

  return null
}

/**
 * Validate entire form data
 */
export function validateForm(formData: Record<string, string>): ValidationResult {
  const errors: ValidationError[] = []

  for (const [field, value] of Object.entries(formData)) {
    const error = validateField(field, value)
    if (error) {
      errors.push(error)
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

/**
 * Form validation display component
 */
export function FormValidation({ 
  errors = [], 
  isSubmitting = false, 
  isSuccess = false, 
  successMessage = 'Form submitted successfully!',
  className = ''
}: FormValidationProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (errors.length > 0 || isSuccess) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [errors.length, isSuccess])

  if (!visible && !isSubmitting) return null

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Loading State */}
      {isSubmitting && (
        <div className="flex items-center space-x-2 p-3 bg-secondary-50 border border-secondary-200 rounded-lg">
          <Loader2 className="w-5 h-5 animate-spin text-secondary-500" />
          <span className="text-secondary-700 font-medium">Submitting your request...</span>
        </div>
      )}

      {/* Success State */}
      {isSuccess && (
        <div className="flex items-center space-x-2 p-3 bg-green-50 border border-green-200 rounded-lg">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-green-800 font-medium">{successMessage}</span>
        </div>
      )}

      {/* Error States */}
      {errors.length > 0 && (
        <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg">
          <div className="flex items-start space-x-2">
            <AlertCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h4 className="text-red-800 font-medium mb-2">
                Please correct the following error{errors.length > 1 ? 's' : ''}:
              </h4>
              <ul className="space-y-1">
                {errors.map((error, index) => (
                  <li key={index} className="text-primary-600 text-sm">
                    • {error.message}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/**
 * Field error display component
 */
export function FieldError({ fieldName, errors = [] }: { fieldName: string; errors?: ValidationError[] }) {
  const fieldError = errors.find(error => error.field === fieldName)
  
  if (!fieldError) return null

  return (
    <div className="flex items-center space-x-1 mt-1">
      <AlertCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
      <span className="text-primary-500 text-sm">{fieldError.message}</span>
    </div>
  )
}

/**
 * Input wrapper with validation styling
 */
export function ValidatedInput({
  children,
  fieldName,
  errors = [],
  className = ''
}: {
  children: React.ReactElement
  fieldName: string
  errors?: ValidationError[]
  className?: string
}) {
  const hasError = errors.some(error => error.field === fieldName)
  
  const validatedChild = React.cloneElement(children, {
    className: `${children.props.className || ''} ${
      hasError 
        ? 'border-primary-500 focus:ring-red-500 focus:border-primary-500' 
        : 'border-gray-300 focus:ring-secondary-500 focus:border-blue-500'
    } ${className}`,
    'aria-invalid': hasError,
    'aria-describedby': hasError ? `${fieldName}-error` : undefined
  })

  return (
    <div>
      {validatedChild}
      <div id={`${fieldName}-error`}>
        <FieldError fieldName={fieldName} errors={errors} />
      </div>
    </div>
  )
}







