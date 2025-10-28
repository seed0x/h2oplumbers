"use client";
import { useState, useEffect } from 'react';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Label } from '../../components/ui/label';
import { MasterButton } from '../../components/ui/master-button';
import { 
  validateField, 
  validateForm, 
  FormValidation,
  ValidatedInput,
  type ValidationError 
} from '@/components/forms/form-validation';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([]);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: '',
    name: '',
    formType: 'general' // Set default form type
  });

  // Real-time validation on field change
  const handleFieldChange = (fieldName: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
    
    // Clear previous errors for this field
    setValidationErrors(prev => prev.filter(err => err.field !== fieldName));
    
    // Validate field in real-time (with debounce effect)
    const timeoutId = setTimeout(() => {
      const fieldError = validateField(fieldName, value);
      if (fieldError) {
        setValidationErrors(prev => [...prev, fieldError]);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);
    const payload = Object.fromEntries(formDataObj.entries()) as Record<string, string>;
    
    // Client-side validation
    const validation = validateForm(payload);
    setValidationErrors(validation.errors);
    
    if (!validation.isValid) {
      setError('Please correct the errors above before submitting.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setError(null);
    setValidationErrors([]);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        form.reset();
        setFormData({ email: '', phone: '', message: '', name: '', formType: 'general' });
      } else {
        // Handle server-side validation errors
        if (data.issues && Array.isArray(data.issues)) {
          const serverErrors: ValidationError[] = data.issues.map((issue: any) => ({
            field: issue.path?.[0] || 'general',
            message: issue.message,
            code: issue.code
          }));
          setValidationErrors(serverErrors);
        }
        
        setError(data.message || 'Submission failed. Please try again.');
        setStatus('error');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  }

  return (
    <div className="space-y-6">
      <FormValidation 
        errors={validationErrors}
        isSubmitting={status === 'submitting'}
        isSuccess={status === 'success'}
        successMessage="Thank you! We received your message and will get back to you within 2 hours during business hours."
      />

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="contact-name" className="text-gray-700 font-medium">
            Full Name <span className="text-red-400">*</span>
          </Label>
          <ValidatedInput fieldName="name" errors={validationErrors}>
            <Input
              id="contact-name" 
              name="name" 
              type="text"
              placeholder="John Smith" 
              className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
              value={formData.name}
              onChange={(e) => handleFieldChange('name', e.target.value)}
              required
              aria-describedby="name-help"
            />
          </ValidatedInput>
          <p id="name-help" className="text-slate-400 text-sm">
            Your full name helps us personalize our response
          </p>
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="contact-email" className="text-gray-700 font-medium">
            Email Address <span className="text-red-400">*</span>
          </Label>
          <ValidatedInput fieldName="email" errors={validationErrors}>
            <Input
              id="contact-email" 
              name="email" 
              type="email" 
              placeholder="you@example.com" 
              className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
              value={formData.email}
              onChange={(e) => handleFieldChange('email', e.target.value)}
              required
              aria-describedby="email-help"
            />
          </ValidatedInput>
          <p id="email-help" className="text-slate-400 text-sm">
            We'll send your service confirmation to this email
          </p>
        </div>

        {/* Phone Field */}
        <div className="space-y-2">
          <Label htmlFor="contact-phone" className="text-gray-700 font-medium">
            Phone Number <span className="text-red-400">*</span>
          </Label>
          <ValidatedInput fieldName="phone" errors={validationErrors}>
            <Input
              id="contact-phone" 
              name="phone" 
              type="tel" 
              placeholder="(360) 555-0123" 
              className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
              value={formData.phone}
              onChange={(e) => handleFieldChange('phone', e.target.value)}
              required
              aria-describedby="phone-help"
            />
          </ValidatedInput>
          <p id="phone-help" className="text-slate-400 text-sm">
            For urgent issues, we'll call you directly
          </p>
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label htmlFor="contact-message" className="text-gray-700 font-medium">
            Message <span className="text-red-400">*</span>
          </Label>
          <ValidatedInput fieldName="message" errors={validationErrors}>
            <Textarea
              id="contact-message" 
              name="message" 
              placeholder="Please describe your plumbing issue in detail. Include location (kitchen, bathroom, etc.) and any symptoms you've noticed."
              className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 min-h-[140px]"
              value={formData.message}
              onChange={(e) => handleFieldChange('message', e.target.value)}
              required
              aria-describedby="message-help"
            />
          </ValidatedInput>
          <div className="flex justify-between items-center">
            <p id="message-help" className="text-slate-400 text-sm">
              Detailed descriptions help us prepare for your service call
            </p>
            <span className={`text-sm ${formData.message.length > 2000 ? 'text-red-400' : 'text-slate-400'}`}>
              {formData.message.length}/2000
            </span>
          </div>
        </div>

        {/* Hidden form type field */}
        <input 
          type="hidden" 
          name="formType" 
          value="general"
        />

        {/* Honeypot Field (hidden anti-spam) */}
        <input 
          type="text" 
          name="website" 
          style={{ display: 'none' }} 
          tabIndex={-1} 
          autoComplete="off"
        />

        {/* Submit Button */}
        <MasterButton 
          disabled={status === 'submitting'} 
          type="submit" 
          className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-3 text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Sending Message...</span>
            </div>
          ) : (
            'Send Message'
          )}
        </MasterButton>

        {/* Error Display (for non-validation errors) */}
        {status === 'error' && error && !validationErrors.length && (
          <p className="text-red-400 text-sm text-center bg-red-900/20 p-3 rounded-lg">
            {error}
          </p>
        )}

        {/* Additional Help */}
        <div className="text-center pt-4 border-t border-slate-700">
          <p className="text-slate-400 text-sm mb-2">
            Need immediate assistance?
          </p>
          <a 
            href="tel:+13608832506" 
            className="text-secondary-400 hover:text-secondary-300 font-semibold text-lg transition-colors"
          >
            Call (360) 883-2506
          </a>
          <p className="text-slate-500 text-xs mt-1">
            Available 24/7 for emergency service
          </p>
        </div>
      </form>
    </div>
  );
}




