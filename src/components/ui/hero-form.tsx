"use client";
import { useState } from 'react';
import { submitQuickQuote } from '@/lib/quote';

export function HeroQuoteForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = (formData: FormData) => {
    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const service = String(formData.get('service') || '');

    const errors = [];
    
    if (!name || name.length < 2) {
      errors.push('Name must be at least 2 characters');
    }
    
    if (!phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
      errors.push('Please enter a valid phone number');
    }
    
    if (!service) {
      errors.push('Please select a service');
    }

    return { isValid: errors.length === 0, errors };
  };

  return (
    <>
      <form
        className="hero-quote-form"
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const formData = new FormData(form);
          
          // Client-side validation
          const validation = validateForm(formData);
          if (!validation.isValid) {
            setStatus('error');
            setErrorMessage(validation.errors.join(', '));
            return;
          }

          setSubmitting(true); 
          setStatus(null);
          setErrorMessage('');

          try {
            await submitQuickQuote({
              name: String(formData.get('name') || ''),
              phone: String(formData.get('phone') || ''),
              service: String(formData.get('service') || ''),
            });
            setStatus('success'); 
            form.reset();
          } catch (err) {
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again or call us directly.');
          } finally {
            setSubmitting(false);
          }
        }}
      >
        <input 
          type="text" 
          name="name" 
          placeholder="Full Name" 
          aria-label="Full Name" 
          required 
          minLength={2}
          maxLength={50}
        />
        <input 
          type="tel" 
          name="phone" 
          placeholder="Phone Number" 
          aria-label="Phone Number" 
          required 
          pattern="[\+]?[1-9]?[\d\s\-\(\)\.]{7,20}"
          title="Please enter a valid phone number"
        />
        <select name="service" aria-label="Service Needed" required defaultValue="">
          <option value="" disabled>Service Needed</option>
          <option value="Same-Day Repair">⚡ Same-Day Repair</option>
          <option value="Drain Cleaning">🚰 Drain Cleaning</option>
          <option value="Water Heater">🔥 Water Heater Service</option>
          <option value="Leak Repair">💧 Leak Repair</option>
          <option value="Installation">🔧 New Installation</option>
          <option value="Commercial Service">🏢 Commercial Service</option>
          <option value="Other">❓ Other Service</option>
        </select>
        
        {/* Honeypot field */}
        <input 
          type="text" 
          name="website" 
          style={{ display: 'none' }} 
          tabIndex={-1} 
          autoComplete="off"
        />
        
        <button 
          type="submit" 
          disabled={submitting}
          className={submitting ? 'submitting' : ''}
        >
          {submitting ? (
            <>
              <span className="spinner"></span>
              Getting Quote...
            </>
          ) : (
            'Get Free Quote'
          )}
        </button>
      </form>
      
      {/* Status Messages */}
      {status === 'success' && (
        <div className="form-success">
          <p className="text-sm text-green-600 mt-2 p-3 bg-green-50 rounded-md">
            ✅ <strong>Success!</strong> We received your request and will call you within 30 minutes during business hours.
          </p>
        </div>
      )}
      
      {status === 'error' && (
        <div className="form-error">
          <p className="text-sm text-primary-500 mt-2 p-3 bg-primary-50 rounded-md">
            ❌ <strong>Error:</strong> {errorMessage || 'Please try again or call us at (360) 883-2506.'}
          </p>
        </div>
      )}
      
      <p className="form-disclaimer">
        🔒 By submitting this form you agree to be contacted about your request. We never share your information and you can opt out anytime.
      </p>

      <style jsx>{`
        .hero-quote-form .spinner {
          display: inline-block;
          width: 12px;
          height: 12px;
          border: 2px solid #f3f3f3;
          border-top: 2px solid #333;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-right: 8px;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .hero-quote-form button.submitting {
          background-color: #6b7280;
          cursor: not-allowed;
        }
        
        .form-success, .form-error {
          margin-top: 12px;
        }
      `}</style>
    </>
  );
}




