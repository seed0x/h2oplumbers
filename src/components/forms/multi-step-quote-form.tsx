'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Upload, Phone, Mail, MapPin, Camera } from 'lucide-react'
import { useDropzone } from 'react-dropzone'

interface FormData {
  serviceType: string
  urgency: string
  description: string
  location: string
  photos: File[]
  name: string
  email: string
  phone: string
  address: string
  preferredTime: string
}

const initialFormData: FormData = {
  serviceType: '',
  urgency: '',
  description: '',
  location: '',
  photos: [],
  name: '',
  email: '',
  phone: '',
  address: '',
  preferredTime: ''
}

export function MultiStepQuoteForm({ onClose }: { onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const totalSteps = 4

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    maxFiles: 5,
    onDrop: (acceptedFiles) => {
      setFormData(prev => ({
        ...prev,
        photos: [...prev.photos, ...acceptedFiles].slice(0, 5)
      }))
    }
  })

  const serviceTypes = [
    { id: 'drain-cleaning', label: 'Drain Cleaning', description: 'Clogged drains, slow drainage' },
    { id: 'water-heater', label: 'Water Heater', description: 'Installation, repair, maintenance' },
    { id: 'leak-repair', label: 'Leak Repair', description: 'Pipes, faucets, toilets' },
    { id: 'installation', label: 'New Installation', description: 'Fixtures, appliances' },
    { id: 'emergency', label: 'Emergency Service', description: 'Urgent plumbing issues' },
    { id: 'other', label: 'Other', description: 'Custom plumbing needs' }
  ]

  const urgencyLevels = [
    { id: 'emergency', label: 'Emergency', description: 'Needs immediate attention', color: 'red' },
    { id: 'urgent', label: 'Urgent', description: 'Within 24 hours', color: 'orange' },
    { id: 'soon', label: 'Soon', description: 'Within a few days', color: 'yellow' },
    { id: 'flexible', label: 'Flexible', description: 'Within a week', color: 'green' }
  ]

  const locations = [
    'Kitchen', 'Bathroom', 'Basement', 'Utility Room', 'Garage', 'Outdoor', 'Multiple Locations', 'Other'
  ]

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    try {
      // Create form payload
      const payload = {
        serviceType: formData.serviceType,
        urgency: formData.urgency,
        description: formData.description,
        location: formData.location,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        preferredTime: formData.preferredTime,
        photos: formData.photos.map(photo => photo.name) // Just send photo names
      };

      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        // Success - show confirmation
        alert(`Quote request submitted successfully! 
        
Reference: ${result.quoteId || 'QR-' + Date.now()}

We'll contact you within 2 hours during business hours with your detailed quote.

For urgent issues, call (360) 883-2506 immediately.`);
        onClose();
      } else {
        // Handle validation or server errors
        const errorMessage = result.message || 'Failed to submit quote request. Please try again.';
        alert(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Quote submission error:', error);
      alert('Network error. Please check your connection and try again, or call us at (360) 883-2506.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.serviceType && formData.urgency
      case 2:
        return formData.description.trim().length > 10 && formData.location
      case 3:
        return true // Photos are optional
      case 4:
        return formData.name && formData.email && formData.phone && formData.address
      default:
        return false
    }
  }

  const progressPercentage = (currentStep / totalSteps) * 100

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Header with Progress */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Get Your Free Quote</h2>
            <button onClick={onClose} className="text-red-200 hover:text-white">
              ×
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-red-800 rounded-full h-2">
            <motion.div
              className="bg-yellow-400 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-red-200 text-sm mt-2">Step {currentStep} of {totalSteps}</p>
        </div>

        {/* Form Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          <AnimatePresence mode="wait">
            {/* Step 1: Service Type & Urgency */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
              >
                <h3 className="text-xl font-bold mb-4">What service do you need?</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {serviceTypes.map(service => (
                    <button
                      key={service.id}
                      onClick={() => setFormData(prev => ({ ...prev, serviceType: service.id }))}
                      className={`p-4 border-2 rounded-lg text-left transition-all ${
                        formData.serviceType === service.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-red-300'
                      }`}
                    >
                      <div className="font-semibold">{service.label}</div>
                      <div className="text-sm text-gray-600">{service.description}</div>
                    </button>
                  ))}
                </div>

                <h4 className="font-bold mb-3">How urgent is this?</h4>
                <div className="space-y-2">
                  {urgencyLevels.map(level => (
                    <button
                      key={level.id}
                      onClick={() => setFormData(prev => ({ ...prev, urgency: level.id }))}
                      className={`w-full p-3 border-2 rounded-lg text-left transition-all ${
                        formData.urgency === level.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-red-300'
                      }`}
                    >
                      <div className="font-semibold">{level.label}</div>
                      <div className="text-sm text-gray-600">{level.description}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Details & Location */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
              >
                <h3 className="text-xl font-bold mb-4">Tell us more about the issue</h3>
                
                <div className="mb-6">
                  <label className="block font-semibold mb-2">Describe the problem *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Please describe the plumbing issue in detail..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Where is the problem located? *</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {locations.map(location => (
                      <button
                        key={location}
                        onClick={() => setFormData(prev => ({ ...prev, location }))}
                        className={`p-2 border rounded-lg text-sm transition-all ${
                          formData.location === location
                            ? 'border-primary-500 bg-primary-50 text-primary-500'
                            : 'border-gray-300 hover:border-red-300'
                        }`}
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Photo Upload */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
              >
                <h3 className="text-xl font-bold mb-4">Upload photos (optional)</h3>
                <p className="text-gray-600 mb-4">Photos help us provide a more accurate quote</p>
                
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed p-8 rounded-lg text-center cursor-pointer transition-all ${
                    isDragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-red-400'
                  }`}
                >
                  <input {...getInputProps()} />
                  <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  {isDragActive ? (
                    <p className="text-primary-500 font-semibold">Drop the photos here...</p>
                  ) : (
                    <div>
                      <p className="font-semibold mb-2">Drag & drop photos here, or click to select</p>
                      <p className="text-sm text-gray-500">Up to 5 photos, max 10MB each</p>
                    </div>
                  )}
                </div>

                {formData.photos.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Uploaded Photos:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {formData.photos.map((file, index) => (
                        <div key={index} className="relative">
                          <Image
                            src={URL.createObjectURL(file)}
                            alt={`Uploaded photo ${index + 1}`}
                            width={160}
                            height={80}
                            className="w-full h-20 object-cover rounded-lg"
                          />
                          <button
                            onClick={() => setFormData(prev => ({
                              ...prev,
                              photos: prev.photos.filter((_, i) => i !== index)
                            }))}
                            className="absolute -top-2 -right-2 bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 4: Contact Information */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
              >
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block font-semibold mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    required
                  />
                </div>

                <div className="mt-4">
                  <label className="block font-semibold mb-2">Service Address *</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                    placeholder="Street address, City, State, ZIP"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    required
                  />
                </div>

                <div className="mt-4">
                  <label className="block font-semibold mb-2">Preferred Time</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData(prev => ({ ...prev, preferredTime: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    <option value="">No preference</option>
                    <option value="morning">Morning (8 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                    <option value="weekend">Weekend</option>
                  </select>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer with Navigation */}
        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          {currentStep < totalSteps ? (
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="flex items-center space-x-2 bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isStepValid() || isSubmitting}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Get My Quote</span>
              )}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  )
}





