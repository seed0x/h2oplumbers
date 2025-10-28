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
  Home, 
  MapPin, 
  Calendar, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  Clock, 
  CheckCircle2,
  AlertCircle,
  DollarSign,
  Ruler
} from 'lucide-react';

interface NewConstructionQuoteFormProps {
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
  role: string;

  // Project Information
  projectType: string;
  projectPhase: string;
  estimatedUnits: string;
  projectLocation: string;
  estimatedStartDate: string;
  projectBudget: string;

  // Service Requirements
  services: string[];
  specifications: string;
  timeline: string;
  additionalInfo: string;

  // Business Details
  licenseNumber: string;
  preferredContact: string;
  urgency: string;
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
  role: '',
  projectType: '',
  projectPhase: '',
  estimatedUnits: '',
  projectLocation: '',
  estimatedStartDate: '',
  projectBudget: '',
  services: [],
  specifications: '',
  timeline: '',
  additionalInfo: '',
  licenseNumber: '',
  preferredContact: '',
  urgency: ''
};

const projectTypes = [
  'Single-Family Homes',
  'Multi-Family Development',
  'Townhomes/Condos',
  'Commercial Building',
  'Mixed-Use Development',
  'Custom Home',
  'Spec Homes',
  'Master-Planned Community'
];

const projectPhases = [
  'Pre-Planning/Design',
  'Permit Phase',
  'Ready to Break Ground',
  'Rough-In Phase',
  'Finish Phase',
  'Final Inspection'
];

const serviceOptions = [
  'Complete Plumbing System',
  'Water Service Connection',
  'Sewer/Septic Connection',
  'Gas Line Installation',
  'Rough-In Plumbing',
  'Fixture Installation',
  'Backflow Prevention',
  'Water Heater Systems',
  'Pressure Testing',
  'Final Inspections'
];

const budgetRanges = [
  'Under $50,000',
  '$50,000 - $100,000',
  '$100,000 - $250,000',
  '$250,000 - $500,000',
  '$500,000 - $1M',
  'Over $1M',
  'Discuss Budget'
];

export function NewConstructionQuoteForm({ 
  variant = 'standalone', 
  className = '' 
}: NewConstructionQuoteFormProps) {
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
      case 'projectType':
      case 'projectPhase':
      case 'projectLocation':
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
        fieldsToValidate.push('projectType', 'projectPhase', 'projectLocation');
        break;
      case 3:
        return formData.services.length > 0;
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
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'company', 'projectType', 'projectPhase', 'projectLocation'];
    let isValid = true;
    const newErrors: FormErrors = {};
    
    requiredFields.forEach(field => {
      const fieldValue = formData[field as keyof FormData] as string;
      if (!validateField(field, fieldValue)) {
        isValid = false;
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });
    
    if (formData.services.length === 0) {
      isValid = false;
      newErrors.services = 'Please select at least one service';
    }
    
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
          type: 'new-construction-quote',
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
      // Handle error (show notification, etc.)
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className={`max-w-2xl mx-auto ${className}`}>
        <CardContent className="text-center py-12">
          <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Quote Request Submitted Successfully!
          </h3>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in partnering with H2O Plumbing. 
            We'll review your project details and contact you within 24 hours with a detailed quote.
          </p>
          <div className="bg-secondary-50 rounded-lg p-4 text-left">
            <h4 className="font-semibold text-secondary-900 mb-2">What happens next?</h4>
            <ul className="text-sm text-secondary-700 space-y-1">
              <li>• Our project manager will review your requirements</li>
              <li>• We'll prepare a detailed quote based on your specifications</li>
              <li>• You'll receive a comprehensive proposal within 24 hours</li>
              <li>• We'll schedule a project discussion call if needed</li>
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
              <User className="w-12 h-12 text-secondary-500 mx-auto mb-3" />
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="text-gray-600">Tell us about yourself and your company</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name *</label>
                <Input
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="John"
                  className={errors.firstName ? 'border-primary-500' : ''}
                />
                {errors.firstName && (
                  <p className="text-primary-500 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name *</label>
                <Input
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Smith"
                  className={errors.lastName ? 'border-primary-500' : ''}
                />
                {errors.lastName && (
                  <p className="text-primary-500 text-sm mt-1">{errors.lastName}</p>
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
                  className={errors.email ? 'border-primary-500' : ''}
                />
                {errors.email && (
                  <p className="text-primary-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="(360) 555-0123"
                  className={errors.phone ? 'border-primary-500' : ''}
                />
                {errors.phone && (
                  <p className="text-primary-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Company/Builder *</label>
              <Input
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="ABC Homes"
                className={errors.company ? 'border-primary-500' : ''}
              />
              {errors.company && (
                <p className="text-primary-500 text-sm mt-1">{errors.company}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Role/Title</label>
              <Input
                value={formData.role}
                onChange={(e) => handleInputChange('role', e.target.value)}
                placeholder="Project Manager, Superintendent, etc."
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Building2 className="w-12 h-12 text-secondary-500 mx-auto mb-3" />
              <h3 className="text-xl font-semibold">Project Details</h3>
              <p className="text-gray-600">Describe your construction project</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Project Type *</label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Phase *</label>
                <Select value={formData.projectPhase} onValueChange={(value) => handleInputChange('projectPhase', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select current phase" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectPhases.map((phase) => (
                      <SelectItem key={phase} value={phase}>{phase}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Estimated Units/Size</label>
                <Input
                  value={formData.estimatedUnits}
                  onChange={(e) => handleInputChange('estimatedUnits', e.target.value)}
                  placeholder="50 units, 2500 sq ft, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Budget</label>
                <Select value={formData.projectBudget} onValueChange={(value) => handleInputChange('projectBudget', value)}>
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
            <div>
              <label className="block text-sm font-medium mb-2">Project Location *</label>
              <Input
                value={formData.projectLocation}
                onChange={(e) => handleInputChange('projectLocation', e.target.value)}
                placeholder="Vancouver, WA or specific address"
                className={errors.projectLocation ? 'border-primary-500' : ''}
              />
              {errors.projectLocation && (
                <p className="text-primary-500 text-sm mt-1">{errors.projectLocation}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Estimated Start Date</label>
              <Input
                type="date"
                value={formData.estimatedStartDate}
                onChange={(e) => handleInputChange('estimatedStartDate', e.target.value)}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <FileText className="w-12 h-12 text-secondary-500 mx-auto mb-3" />
              <h3 className="text-xl font-semibold">Service Requirements</h3>
              <p className="text-gray-600">Select the plumbing services you need</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-4">Required Services * (Select all that apply)</label>
              <div className="grid md:grid-cols-2 gap-3">
                {serviceOptions.map((service) => (
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
            <div>
              <label className="block text-sm font-medium mb-2">Specifications & Requirements</label>
              <Textarea
                value={formData.specifications}
                onChange={(e) => handleInputChange('specifications', e.target.value)}
                placeholder="Describe any specific requirements, fixtures, special considerations, etc."
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Timeline Requirements</label>
              <Input
                value={formData.timeline}
                onChange={(e) => handleInputChange('timeline', e.target.value)}
                placeholder="e.g., Rough-in by March 15th, completion by May 1st"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Clock className="w-12 h-12 text-secondary-500 mx-auto mb-3" />
              <h3 className="text-xl font-semibold">Additional Information</h3>
              <p className="text-gray-600">Help us better understand your project</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Contractor License # (if applicable)</label>
                <Input
                  value={formData.licenseNumber}
                  onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                  placeholder="WA License Number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Contact Method</label>
                <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange('preferredContact', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="How should we contact you?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phone">Phone Call</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="text">Text Message</SelectItem>
                    <SelectItem value="any">Any Method</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Project Urgency</label>
              <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="How urgent is this project?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate (within 1 week)</SelectItem>
                  <SelectItem value="soon">Soon (within 1 month)</SelectItem>
                  <SelectItem value="planned">Planned (1-3 months)</SelectItem>
                  <SelectItem value="future">Future planning (3+ months)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Additional Information</label>
              <Textarea
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                placeholder="Any other details, questions, or special requirements for your project?"
                rows={4}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className={`max-w-4xl mx-auto ${className}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl text-gray-900 flex items-center">
              <Building2 className="w-6 h-6 mr-3 text-secondary-500" />
              New Construction Quote Request
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Get a detailed quote for your construction project
            </p>
          </div>
          <Badge variant="outline" className="text-secondary-500 border-blue-600">
            Step {currentStep} of {totalSteps}
          </Badge>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mt-6">
          <div 
            className="bg-secondary-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </CardHeader>

      <CardContent>
        <form ref={formRef} onSubmit={handleSubmit}>
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <MasterButton
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center"
            >
              ← Previous
            </MasterButton>
            
            {currentStep < totalSteps ? (
              <MasterButton
                type="button"
                onClick={nextStep}
                className="bg-secondary-500 hover:bg-secondary-600 flex items-center"
              >
                Next →
              </MasterButton>
            ) : (
              <MasterButton
                type="submit"
                disabled={isSubmitting}
                className="bg-green-600 hover:bg-green-700 flex items-center"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                {!isSubmitting && <CheckCircle2 className="w-4 h-4 ml-2" />}
              </MasterButton>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}








