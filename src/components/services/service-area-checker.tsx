'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { MasterButton } from '../ui/master-button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Badge } from '../ui/badge'
import { MapPin, CheckCircle, XCircle, Loader2 } from 'lucide-react'
import { z } from 'zod'

const zipCodeSchema = z.string().regex(/^\d{5}(-\d{4})?$/, 'Please enter a valid ZIP code')

// Service areas with zip codes
const serviceAreas = {
  primary: {
    name: 'Primary Service Area',
    description: 'Same-day service available',
    zipCodes: ['98604', '98660', '98661', '98662', '98665', '98682', '98685'],
    cities: ['Battle Ground', 'Vancouver', 'Hazel Dell', 'Salmon Creek']
  },
  secondary: {
    name: 'Extended Service Area',
    description: 'Next-day service available',
    zipCodes: ['98607', '98629', '98642', '98675', '98686'],
    cities: ['Brush Prairie', 'Ridgefield', 'La Center', 'Yacolt', 'Woodland']
  },
  extended: {
    name: 'Special Service Area',
    description: 'Service available with scheduling',
    zipCodes: ['98601', '98606', '98671', '98674', '98683'],
    cities: ['Amboy', 'Hockinson', 'Washougal', 'Camas', 'Mount Vista']
  }
}

interface ServiceAreaResult {
  inServiceArea: boolean
  areaType?: 'primary' | 'secondary' | 'extended'
  message: string
  responseTime?: string
  additionalFee?: number
}

export function ServiceAreaChecker() {
  const [zipCode, setZipCode] = useState('')
  const [result, setResult] = useState<ServiceAreaResult | null>(null)
  const [isChecking, setIsChecking] = useState(false)
  const [error, setError] = useState('')

  const checkServiceArea = async () => {
    setError('')
    setResult(null)
    
    // Validate ZIP code
    try {
      zipCodeSchema.parse(zipCode)
    } catch (e) {
      setError('Please enter a valid 5-digit ZIP code')
      return
    }

    setIsChecking(true)

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Clean ZIP code (remove extension if present)
    const cleanZip = zipCode.split('-')[0]

    // Check which service area the ZIP code belongs to
    let areaResult: ServiceAreaResult = {
      inServiceArea: false,
      message: 'Sorry, we do not currently service this area. Please call us to discuss special arrangements.'
    }

    // Check primary service area
    if (serviceAreas.primary.zipCodes.includes(cleanZip)) {
      areaResult = {
        inServiceArea: true,
        areaType: 'primary',
        message: 'Great news! You are in our primary service area.',
        responseTime: 'Same-day service available',
        additionalFee: 0
      }
    }
    // Check secondary service area
    else if (serviceAreas.secondary.zipCodes.includes(cleanZip)) {
      areaResult = {
        inServiceArea: true,
        areaType: 'secondary',
        message: 'You are in our extended service area.',
        responseTime: 'Next-day service available',
        additionalFee: 25
      }
    }
    // Check extended service area
    else if (serviceAreas.extended.zipCodes.includes(cleanZip)) {
      areaResult = {
        inServiceArea: true,
        areaType: 'extended',
        message: 'You are in our special service area.',
        responseTime: 'Service available with advance scheduling',
        additionalFee: 50
      }
    }

    setResult(areaResult)
    setIsChecking(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    checkServiceArea()
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Main ZIP Input Card */}
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-slate-200 mb-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-3 bg-red-50 rounded-full px-6 py-3 mb-4">
            <MapPin className="h-6 w-6 text-brand-red" />
            <span className="font-heading font-bold uppercase text-lg text-slate-900">Quick Service Check</span>
          </div>
          <p className="text-slate-600">Enter your ZIP code below to check availability and response times</p>
        </div>
        
        {/* Input Form */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              id="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="Enter ZIP code (e.g., 98604)"
              className="flex-1 text-lg p-6 border-2 border-slate-300 focus:border-brand-red focus:ring-brand-red text-black"
              maxLength={10}
            />
            <button
              type="submit"
              disabled={isChecking || !zipCode.trim()}
              className="bg-brand-red hover:bg-brand-red-dark text-white px-8 py-6 rounded-lg font-bold text-lg transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isChecking ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Checking...
                </span>
              ) : (
                'Check Area'
              )}
            </button>
          </div>
          {error && (
            <p className="text-brand-red text-sm mt-3 text-center font-semibold">{error}</p>
          )}
        </form>

      </div>

      {/* Results */}
      {result && (
        <div className={`rounded-2xl p-8 md:p-10 shadow-xl border-2 mb-8 ${
          result.inServiceArea 
            ? 'border-green-500 bg-gradient-to-br from-green-50 to-white' 
            : 'border-yellow-500 bg-gradient-to-br from-yellow-50 to-white'
        }`}>
          <div className="flex items-start gap-6">
            <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
              result.inServiceArea ? 'bg-green-100' : 'bg-yellow-100'
            }`}>
              {result.inServiceArea ? (
                <CheckCircle className="h-8 w-8 text-green-600" />
              ) : (
                <XCircle className="h-8 w-8 text-yellow-600" />
              )}
            </div>
            
            <div className="flex-1">
              <h3 className={`text-2xl font-heading font-bold uppercase mb-3 ${
                result.inServiceArea ? 'text-green-900' : 'text-yellow-900'
              }`}>
                {result.message}
              </h3>
              
              {result.inServiceArea && (
                <div className="space-y-4">
                  <Badge className={`text-base px-4 py-2 ${
                    result.areaType === 'primary' ? 'bg-brand-red text-white' : 
                    result.areaType === 'secondary' ? 'bg-blue-600 text-white' : 'bg-slate-600 text-white'
                  }`}>
                    {result.areaType === 'primary' ? '⭐ Primary Service Area' :
                     result.areaType === 'secondary' ? '📍 Extended Service Area' : '📍 Special Service Area'}
                  </Badge>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-slate-200">
                      <p className="text-sm text-slate-600 mb-1">Response Time</p>
                      <p className="text-lg font-bold text-slate-900">{result.responseTime}</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-slate-200">
                      <p className="text-sm text-slate-600 mb-1">Service Fee</p>
                      {result.additionalFee && result.additionalFee > 0 ? (
                        <p className="text-lg font-bold text-slate-900">+${result.additionalFee} travel charge</p>
                      ) : (
                        <p className="text-lg font-bold text-green-600">No extra fees!</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-lg font-bold transition-colors"
                    >
                      Schedule Service
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-300 px-6 py-3 rounded-lg font-bold transition-colors"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              )}
              
              {!result.inServiceArea && (
                <div className="space-y-4">
                  <p className="text-lg text-slate-700">
                    We may still be able to help! Contact us to discuss your specific location.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:3608832506"
                      className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-lg font-bold transition-colors"
                    >
                      📞 Call (360) 883-2506
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-300 px-6 py-3 rounded-lg font-bold transition-colors"
                    >
                      Send Message
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Service Areas Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(serviceAreas).map(([key, area]) => (
          <div key={key} className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200 hover:border-brand-red transition-all hover:shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <Badge className={`text-sm px-4 py-2 font-bold ${
                key === 'primary' ? 'bg-brand-red text-white' : 
                key === 'secondary' ? 'bg-blue-600 text-white' : 'bg-slate-600 text-white'
              }`}>
                {area.name}
              </Badge>
            </div>
            
            <p className="text-center text-slate-700 font-semibold mb-4">{area.description}</p>
            
            <div className="space-y-3">
              <p className="text-sm font-heading font-bold uppercase text-slate-900">Cities Served:</p>
              <div className="flex flex-wrap gap-2">
                {area.cities.map((city, index) => (
                  <span key={index} className="text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


