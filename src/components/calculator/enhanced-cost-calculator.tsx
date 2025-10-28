'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { MasterButton } from '../ui/master-button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Checkbox } from '../ui/checkbox'
import { Slider } from '../ui/slider'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const calculatorSchema = z.object({
  serviceType: z.string().min(1, 'Please select a service'),
  complexity: z.enum(['simple', 'moderate', 'complex']),
  urgency: z.enum(['standard', 'urgent', 'emergency']),
  materialQuality: z.enum(['standard', 'premium', 'luxury']),
  additionalServices: z.array(z.string()).optional(),
  squareFootage: z.number().min(1).max(10000).optional(),
  fixtures: z.number().min(1).max(20).optional(),
  pipeLength: z.number().min(1).max(500).optional(),
})

type CalculatorData = z.infer<typeof calculatorSchema>

const serviceTypes = {
  'drain-cleaning': {
    name: 'Drain Cleaning',
    basePrice: 125,
    factors: {
      simple: 1.0,
      moderate: 1.3,
      complex: 1.8
    }
  },
  'pipe-repair': {
    name: 'Pipe Repair',
    basePrice: 200,
    factors: {
      simple: 1.0,
      moderate: 1.5,
      complex: 2.2
    }
  },
  'faucet-installation': {
    name: 'Faucet Installation',
    basePrice: 150,
    factors: {
      simple: 1.0,
      moderate: 1.2,
      complex: 1.6
    }
  },
  'toilet-service': {
    name: 'Toilet Repair/Installation',
    basePrice: 180,
    factors: {
      simple: 1.0,
      moderate: 1.4,
      complex: 2.0
    }
  },
  'water-heater': {
    name: 'Water Heater Service',
    basePrice: 350,
    factors: {
      simple: 1.0,
      moderate: 1.6,
      complex: 2.5
    }
  },
  'sewer-line': {
    name: 'Sewer Line Service',
    basePrice: 500,
    factors: {
      simple: 1.0,
      moderate: 1.8,
      complex: 3.0
    }
  },
}

const urgencyMultipliers = {
  standard: 1.0,
  urgent: 1.25,
  emergency: 1.5
}

const materialMultipliers = {
  standard: 1.0,
  premium: 1.3,
  luxury: 1.8
}

const additionalServicesList = [
  { id: 'video-inspection', name: 'Video Pipe Inspection', price: 200 },
  { id: 'water-testing', name: 'Water Quality Testing', price: 75 },
  { id: 'leak-detection', name: 'Electronic Leak Detection', price: 150 },
  { id: 'hydro-jetting', name: 'Hydro Jetting', price: 300 },
  { id: 'pipe-lining', name: 'Pipe Lining', price: 400 },
  { id: 'backflow-testing', name: 'Backflow Prevention Testing', price: 100 },
]

export function EnhancedCostCalculator() {
  const [estimate, setEstimate] = useState(0)
  interface EstimateBreakdown {
    baseService: number
    complexity: string
    urgency: string
    materials: string
    additionalServices: number
    total: number
  }
  const [breakdown, setBreakdown] = useState<EstimateBreakdown | null>(null)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [pipeLength, setPipeLength] = useState([50])
  const [fixtures, setFixtures] = useState([1])

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<CalculatorData>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      complexity: 'moderate',
      urgency: 'standard',
      materialQuality: 'standard',
      additionalServices: [],
      pipeLength: 50,
      fixtures: 1,
    }
  })

  const watchedValues = watch()

  const calculateEstimate = useCallback(() => {
    const serviceType = watchedValues.serviceType
    if (!serviceType || !serviceTypes[serviceType as keyof typeof serviceTypes]) {
      setEstimate(0)
      return
    }

    const service = serviceTypes[serviceType as keyof typeof serviceTypes]
    let basePrice = service.basePrice

    const complexity = watchedValues.complexity || 'moderate'
    basePrice *= service.factors[complexity]

    const urgency = watchedValues.urgency || 'standard'
    basePrice *= urgencyMultipliers[urgency]

    const materialQuality = watchedValues.materialQuality || 'standard'
    basePrice *= materialMultipliers[materialQuality]

    if (['pipe-repair', 'sewer-line'].includes(serviceType)) {
      basePrice += (pipeLength[0] - 10) * 5
    }

    if (['faucet-installation', 'toilet-service'].includes(serviceType)) {
      basePrice += (fixtures[0] - 1) * 50
    }

    let additionalCost = 0
    selectedServices.forEach(serviceId => {
      const service = additionalServicesList.find(s => s.id === serviceId)
      if (service) additionalCost += service.price
    })

    const totalEstimate = Math.round(basePrice + additionalCost)
    setEstimate(totalEstimate)
  setBreakdown({
      baseService: Math.round(service.basePrice),
      complexity: complexity,
      urgency: urgency,
      materials: materialQuality,
      additionalServices: additionalCost,
      total: totalEstimate
    })
  }, [watchedValues, selectedServices, pipeLength, fixtures])

  useEffect(() => {
    calculateEstimate()
  }, [calculateEstimate])

  const handleAdditionalServiceToggle = (serviceId: string) => {
    const newServices = selectedServices.includes(serviceId)
      ? selectedServices.filter(id => id !== serviceId)
      : [...selectedServices, serviceId]
    
    setSelectedServices(newServices)
    setValue('additionalServices', newServices)
  }

  const onSubmit = (data: CalculatorData) => {
    // Here you could send the estimate to the server or redirect to booking
  // telemetry hook placeholder: capture calculation event if needed
    // Redirect to booking with pre-filled data
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Calculator Form */}
      <Card>
        <CardHeader>
          <CardTitle>Service Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Service Type Selection */}
          <div>
            <Label>Service Type</Label>
            <Select onValueChange={(value) => setValue('serviceType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(serviceTypes).map(([key, service]) => (
                  <SelectItem key={key} value={key}>
                    {service.name} - Starting at ${service.basePrice}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.serviceType && (
              <p className="text-primary-500 text-sm mt-1">{errors.serviceType.message}</p>
            )}
          </div>

          {/* Job Complexity */}
          <div>
            <Label>Job Complexity</Label>
            <Select 
              defaultValue="moderate"
              onValueChange={(value: 'simple' | 'moderate' | 'complex') => setValue('complexity', value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="simple">Simple - Standard access, no complications</SelectItem>
                <SelectItem value="moderate">Moderate - Some challenges expected</SelectItem>
                <SelectItem value="complex">Complex - Difficult access or major work</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Urgency */}
          <div>
            <Label>Service Urgency</Label>
            <Select 
              defaultValue="standard"
              onValueChange={(value: 'standard' | 'urgent' | 'emergency') => setValue('urgency', value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard - Next available appointment</SelectItem>
                <SelectItem value="urgent">Urgent - Same day service (+25%)</SelectItem>
                <SelectItem value="emergency">Emergency - Immediate response (+50%)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Material Quality */}
          <div>
            <Label>Material Quality</Label>
            <Select 
              defaultValue="standard"
              onValueChange={(value: 'standard' | 'premium' | 'luxury') => setValue('materialQuality', value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard - Quality materials</SelectItem>
                <SelectItem value="premium">Premium - High-grade materials (+30%)</SelectItem>
                <SelectItem value="luxury">Luxury - Top-tier materials (+80%)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Conditional Fields */}
          {['pipe-repair', 'sewer-line'].includes(watchedValues.serviceType) && (
            <div>
              <Label>Estimated Pipe Length (feet): {pipeLength[0]}</Label>
              <Slider
                value={pipeLength}
                onValueChange={(value) => {
                  setPipeLength(value)
                  setValue('pipeLength', value[0])
                }}
                max={200}
                min={10}
                step={5}
                className="mt-2"
              />
            </div>
          )}

          {['faucet-installation', 'toilet-service'].includes(watchedValues.serviceType) && (
            <div>
              <Label>Number of Fixtures: {fixtures[0]}</Label>
              <Slider
                value={fixtures}
                onValueChange={(value) => {
                  setFixtures(value)
                  setValue('fixtures', value[0])
                }}
                max={10}
                min={1}
                step={1}
                className="mt-2"
              />
            </div>
          )}

          {/* Additional Services */}
          <div>
            <Label className="text-base font-medium">Additional Services</Label>
            <div className="space-y-3 mt-3">
              {additionalServicesList.map((service) => (
                <div key={service.id} className="flex items-center space-x-3">
                  <Checkbox
                    id={service.id}
                    checked={selectedServices.includes(service.id)}
                    onCheckedChange={() => handleAdditionalServiceToggle(service.id)}
                  />
                  <Label htmlFor={service.id} className="flex-1 cursor-pointer">
                    {service.name}
                  </Label>
                  <span className="text-sm font-medium">${service.price}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Estimate Display */}
      <Card>
        <CardHeader>
          <CardTitle>Cost Estimate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {estimate > 0 && breakdown ? (
              <>
                {/* Main Estimate */}
                <div className="text-center p-6 bg-secondary-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                    Estimated Cost
                  </h3>
                  <p className="text-4xl font-bold text-secondary-500">
                    ${estimate.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    *Final price may vary based on actual conditions
                  </p>
                </div>

                {/* Cost Breakdown */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Cost Breakdown</h4>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Base Service:</span>
                      <span>${breakdown.baseService}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Complexity: {breakdown.complexity}</span>
                      <span>Material: {breakdown.materials}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Urgency: {breakdown.urgency}</span>
                      <span>Additional Services: ${breakdown.additionalServices}</span>
                    </div>
                    
                    <hr className="my-2" />
                    
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total Estimate:</span>
                      <span>${breakdown.total}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <MasterButton className="w-full" size="lg">
                    Book This Service - ${estimate}
                  </MasterButton>
                  
                  <MasterButton variant="outline" className="w-full">
                    Get Detailed Quote
                  </MasterButton>
                  
                  <p className="text-xs text-center text-gray-500">
                    All estimates include labor and basic materials. 
                    Final pricing determined after on-site assessment.
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">
                  Select a service type to see cost estimate
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-400">Our services include:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Professional assessment</li>
                    <li>• Quality materials and parts</li>
                    <li>• Licensed and insured technicians</li>
                    <li>• 1-year warranty on workmanship</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}






