'use client';

import { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MasterButton } from '@/components/ui/master-button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Building2, 
  UtensilsCrossed, 
  ShoppingBag, 
  Factory, 
  Stethoscope, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  Clock, 
  CheckCircle2,
  AlertTriangle,
  DollarSign,
  Users
} from 'lucide-react';

interface CommercialQuoteFormProps {
  variant?: 'embedded' | 'standalone';
  className?: string;
}

interface FormData {
  // Contact Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  title: string;

  // Business Information
  businessType: string;
  businessSize: string;
  location: string;
  website: string;

  // Service Requirements
  serviceType: string;
  services: string[];
  urgency: string;
  timeline: string;
  budget: string;

  // Project Details
  problemDescription: string;
  currentProvider: string;
  maintenanceSchedule: string;
  additionalInfo: string;
}

interface FormErrors {
  [key: string]: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  title: '',
  businessType: '',
  businessSize: '',
  location: '',
  website: '',
  serviceType: '',
  services: [],
  urgency: '',
  timeline: '',
  budget: '',
  problemDescription: '',
  currentProvider: '',
  maintenanceSchedule: '',
  additionalInfo: ''
};

const businessTypes = [
  'Restaurant/Food Service',
  'Office Building',
  'Retail Store/Shopping Center',
  'Medical/Dental Office',
  'Industrial/Manufacturing',
  'Multi-Tenant Property',
  'Hotel/Hospitality',
  'School/Educational',
  'Government Facility',
  'Other'
];

const businessSizes = [
  'Small (1-10 employees)',
  'Medium (11-50 employees)',
  'Large (51-200 employees)',
  'Enterprise (200+ employees)',
  'Multi-Location Business'
];

const serviceTypes = [
  'Emergency Repair',
  'Scheduled Maintenance',
  'New Installation',
  'System Upgrade',
  'Preventive Service Plan',
  'Consultation/Assessment'
];

const commercialServices = [
  'Drain Cleaning & Maintenance',
  'Water Heater Service/Replacement',
  'Backflow Prevention',
  'Grease Trap Service',
  'Fixture Repair/Replacement',
  'Pipe Repair/Replacement',
  'Leak Detection',
  'ADA Compliance Updates',
  'Emergency Plumbing Service',
  'Preventive Maintenance Program',
  'Sewer Line Service',
  'Water Line Service'
];

const budgetRanges = [
  'Under $1,000',
  '$1,000 - $5,000',
  '$5,000 - $15,000',
  '$15,000 - $50,000',
  'Over $50,000',
  'Discuss Budget'
];

export function CommercialQuoteForm({ 
  variant = 'standalone', 
  className = '' 
}: CommercialQuoteFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  const totalSteps = 4;

  const validateField = (field: string, value: string): boolean => {
    switch (field) {
      case 'firstName':
      case 'lastName':
      case 'company':
        return value.trim().length > 0;
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case 'phone':
        return /^[\+]?[\d\s\(\)\-\.]+$/.test(value) && value.replace(/\D/g, '').length >= 10;
      case 'businessType':
      case 'serviceType':
      case 'location':
        return value.length > 0;
      default:
        return true;
    }
  };

  const clearError = (field: string) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      clearError(field);
    }
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const validateStep = (step: number): boolean => {
    const fieldsToValidate: string[] = [];
    
    switch (step) {
      case 1:
        fieldsToValidate.push('firstName', 'lastName', 'email', 'phone', 'company');
        break;
      case 2:
        fieldsToValidate.push('businessType', 'location');
        break;
      case 3:
        fieldsToValidate.push('serviceType');
        break;
      case 4:
        return true;
    }
    
    let isValid = true;
    const newErrors: FormErrors = {};
    
    fieldsToValidate.forEach(field => {
      const fieldValue = formData[field as keyof FormData] as string;
      if (!validateField(field, fieldValue)) {
        isValid = false;
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });
    
    setErrors(newErrors);
    return isValid;
  };

  const validateForm = (): boolean => {
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'company', 'businessType', 'location', 'serviceType'];
    let isValid = true;
    const newErrors: FormErrors = {};
    
    requiredFields.forEach(field => {
      const fieldValue = formData[field as keyof FormData] as string;
      if (!validateField(field, fieldValue)) {
        isValid = false;
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });
    
    setErrors(newErrors);
    return isValid;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'commercial-quote',
          services: formData.services.join(', '),
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className={`max-w-2xl mx-auto ${className} border-slate-200`}>
        <CardContent className="text-center py-12">
          <CheckCircle2 className="w-16 h-16 text-brand-red mx-auto mb-6" />
          <h3 className="text-2xl font-heading font-bold uppercase text-slate-900 mb-4">
            Request Received!
          </h3>
          <p className="text-slate-600 mb-6">
            Thank you for choosing All County Plumbing for your commercial needs. 
            Our team will review your requirements and respond within 4 hours.
          </p>
          <div className="bg-slate-50 rounded-lg p-4 text-left border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-2">What happens next?</h4>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• We'll review your request</li>
              <li>• Site assessment scheduled if needed</li>
              <li>• Detailed proposal within 24-48 hours</li>
              <li>• Flexible scheduling to minimize disruption</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    );
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-3">
                <User className="w-8 h-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-heading font-bold uppercase">Contact Information</h3>
              <p className="text-slate-600">Tell us about yourself and your business</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name *</label>
                <Input
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="John"
                  className={errors.firstName ? 'border-brand-red' : ''}
                />
                {errors.firstName && (
                  <p className="text-brand-red text-sm mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name *</label>
                <Input
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Smith"
                  className={errors.lastName ? 'border-brand-red' : ''}
                />
                {errors.lastName && (
                  <p className="text-brand-red text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="john@company.com"
                  className={errors.email ? 'border-brand-red' : ''}
                />
                {errors.email && (
                  <p className="text-brand-red text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="(360) 555-0123"
                  className={errors.phone ? 'border-brand-red' : ''}
                />
                {errors.phone && (
                  <p className="text-brand-red text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Company/Business Name *</label>
              <Input
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="ABC Restaurant"
                className={errors.company ? 'border-brand-red' : ''}
              />
              {errors.company && (
                <p className="text-brand-red text-sm mt-1">{errors.company}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Your Title/Role</label>
              <Input
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Manager, Owner, Facilities Director, etc."
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-3">
                <Building2 className="w-8 h-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-heading font-bold uppercase">Business Information</h3>
              <p className="text-slate-600">Help us understand your business needs</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Business Type *</label>
                <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                  <SelectTrigger className={errors.businessType ? 'border-brand-red' : ''}>
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.businessType && (
                  <p className="text-brand-red text-sm mt-1">{errors.businessType}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Business Size</label>
                <Select value={formData.businessSize} onValueChange={(value) => handleInputChange('businessSize', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select business size" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessSizes.map((size) => (
                      <SelectItem key={size} value={size}>{size}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Business Location *</label>
              <Input
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="Vancouver, WA or specific address"
                className={errors.location ? 'border-brand-red' : ''}
              />
              {errors.location && (
                <p className="text-brand-red text-sm mt-1">{errors.location}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Website (optional)</label>
              <Input
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                placeholder="https://yourcompany.com"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-3">
                <FileText className="w-8 h-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-heading font-bold uppercase">Service Requirements</h3>
              <p className="text-slate-600">What plumbing services do you need?</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Type of Service *</label>
              <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                <SelectTrigger className={errors.serviceType ? 'border-brand-red' : ''}>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.serviceType && (
                <p className="text-brand-red text-sm mt-1">{errors.serviceType}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-4">Specific Services Needed (Select all that apply)</label>
              <div className="grid md:grid-cols-2 gap-3 max-h-64 overflow-y-auto">
                {commercialServices.map((service) => (
                  <div key={service} className="flex items-center space-x-3">
                    <Checkbox
                      checked={formData.services.includes(service)}
                      onCheckedChange={() => handleServiceToggle(service)}
                    />
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Urgency Level</label>
                <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="How urgent is this?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emergency">Emergency (ASAP)</SelectItem>
                    <SelectItem value="urgent">Urgent (within 24 hours)</SelectItem>
                    <SelectItem value="soon">Soon (within 1 week)</SelectItem>
                    <SelectItem value="planned">Planned (within 1 month)</SelectItem>
                    <SelectItem value="quote">Just getting quotes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Budget</label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((budget) => (
                      <SelectItem key={budget} value={budget}>{budget}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-3">
                <Clock className="w-8 h-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-heading font-bold uppercase">Additional Details</h3>
              <p className="text-slate-600">Help us better serve your business</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Describe the Problem/Project</label>
              <Textarea
                value={formData.problemDescription}
                onChange={(e) => handleInputChange('problemDescription', e.target.value)}
                placeholder="Please describe your plumbing needs, any current issues, or project requirements..."
                rows={4}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Current Plumbing Provider</label>
                <Input
                  value={formData.currentProvider}
                  onChange={(e) => handleInputChange('currentProvider', e.target.value)}
                  placeholder="Current plumber or 'None'"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Maintenance Schedule</label>
                <Select value={formData.maintenanceSchedule} onValueChange={(value) => handleInputChange('maintenanceSchedule', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="How often do you maintain?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No regular maintenance</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="biannual">Twice per year</SelectItem>
                    <SelectItem value="annual">Annually</SelectItem>
                    <SelectItem value="as-needed">As needed only</SelectItem>
                    <SelectItem value="interested">Interested in program</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Additional Information</label>
              <Textarea
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                placeholder="Any other details, special requirements, or questions?"
                rows={3}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className={`max-w-4xl mx-auto ${className} border-slate-200`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl text-slate-900 flex items-center font-heading uppercase">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center mr-3">
                <Building2 className="w-5 h-5 text-brand-red" />
              </div>
              Commercial Service Request
            </CardTitle>
            <p className="text-slate-600 mt-2">
              Get professional commercial plumbing service for your business
            </p>
          </div>
          <Badge variant="outline" className="text-brand-red border-brand-red">
            Step {currentStep} of {totalSteps}
          </Badge>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-slate-200 rounded-full h-2 mt-6">
          <div 
            className="bg-brand-red h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </CardHeader>

      <CardContent>
        <form ref={formRef} onSubmit={handleSubmit}>
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              ← Previous
            </button>
            
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-lg font-bold transition-colors flex items-center gap-2"
              >
                Next →
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-lg font-bold transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
                {!isSubmitting && <CheckCircle2 className="w-4 h-4" />}
              </button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}



