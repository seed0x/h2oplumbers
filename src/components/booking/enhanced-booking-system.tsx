'use client'

import React, { useState, useMemo } from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { MasterButton } from '../ui/master-button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Textarea } from '../ui/textarea'
import { toast } from 'sonner'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^\(\d{3}\) \d{3}-\d{4}$/, 'Phone must be in format (555) 123-4567'),
  email: z.string().email('Please enter a valid email address'),
  address: z.string().min(10, 'Please enter your complete service address'),
  serviceType: z.string().min(1, 'Please select a service type'),
  preferredTime: z.string().min(1, 'Please select a preferred time'),
  notes: z.string().optional()
})

type BookingForm = z.infer<typeof bookingSchema>

const serviceTypes = [
  { id: 'emergency', name: 'Emergency Repair', price: 150, description: 'Urgent plumbing issues requiring immediate attention' },
  { id: 'drain_cleaning', name: 'Drain Cleaning', price: 95, description: 'Professional drain cleaning and clog removal' },
  { id: 'water_heater', name: 'Water Heater Service', price: 120, description: 'Water heater installation, repair, or maintenance' },
  { id: 'pipe_repair', name: 'Pipe Repair', price: 110, description: 'Pipe repair and replacement services' },
  { id: 'fixture_install', name: 'Fixture Installation', price: 85, description: 'Installation of faucets, toilets, and other fixtures' },
  { id: 'maintenance', name: 'Preventive Maintenance', price: 75, description: 'Routine maintenance and inspection services' }
]

const timeSlots = [
  '8:00 AM - 10:00 AM',
  '10:00 AM - 12:00 PM',
  '12:00 PM - 2:00 PM',
  '2:00 PM - 4:00 PM',
  '4:00 PM - 6:00 PM'
]

export function EnhancedBookingSystem() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedService, setSelectedService] = useState<string>('')
  const [isBooking, setIsBooking] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema)
  })

  const watchedServiceType = watch('serviceType')
  const watchedPreferredTime = watch('preferredTime')

  const selectedServiceData = useMemo(() => {
    return serviceTypes.find(service => service.id === watchedServiceType)
  }, [watchedServiceType])

  // Generate available time slots based on selected date
  const availableSlots = useMemo(() => {
    if (!selectedDate) return []
    
    const isToday = moment(selectedDate).isSame(moment(), 'day')
    const currentHour = moment().hour()
    
    return timeSlots.filter(slot => {
      if (!isToday) return true
      
      const slotStart = parseInt(slot.split(':')[0])
      const isPM = slot.includes('PM') && !slot.includes('12:')
      const hour24 = isPM ? slotStart + 12 : slotStart
      
      return hour24 > currentHour + 1 // Need at least 1 hour notice
    })
  }, [selectedDate])

  // Calendar events (for demonstration)
  const events = useMemo(() => {
    const today = moment()
    return [
      {
        id: 1,
        title: 'Booked',
        start: today.clone().hour(10).minute(0).toDate(),
        end: today.clone().hour(12).minute(0).toDate(),
        resource: 'unavailable'
      },
      {
        id: 2,
        title: 'Booked',
        start: today.clone().add(1, 'day').hour(14).minute(0).toDate(),
        end: today.clone().add(1, 'day').hour(16).minute(0).toDate(),
        resource: 'unavailable'
      }
    ]
  }, [])

  const onSubmit = async (data: BookingForm) => {
    if (!selectedDate) {
      toast.error('Please select a date from the calendar')
      return
    }

    setIsBooking(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const bookingData = {
        ...data,
        date: selectedDate,
        serviceDetails: selectedServiceData,
        totalPrice: selectedServiceData?.price || 0
      }
      
  // booking submitted
      toast.success('Booking Confirmed! We will contact you shortly to confirm your appointment.')
      
      reset()
      setSelectedDate(null)
      setSelectedService('')
      
    } catch (error) {
      toast.error('Booking Failed. Please try again or call us directly.')
    } finally {
      setIsBooking(false)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Calendar Section */}
      <Card>
        <CardHeader>
          <CardTitle>Select Date & Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 mb-6">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: '100%' }}
              view={Views.MONTH}
              onSelectSlot={(slotInfo) => {
                if (moment(slotInfo.start).isAfter(moment(), 'day') || moment(slotInfo.start).isSame(moment(), 'day')) {
                  setSelectedDate(slotInfo.start)
                }
              }}
              onSelectEvent={() => {}}
              selectable
              popup
              eventPropGetter={(event) => ({
                style: {
                  backgroundColor: event.resource === 'unavailable' ? '#dc2626' : '#2563eb'
                }
              })}
            />
          </div>
          
          {selectedDate && (
            <div className="space-y-4">
              <p className="font-medium">
                Selected Date: {moment(selectedDate).format('MMMM DD, YYYY')}
              </p>
              
              <div>
                <Label htmlFor="serviceType">Service Type</Label>
                <Select onValueChange={(value) => setValue('serviceType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name} - ${service.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedServiceData && (
                <div className="p-4 bg-secondary-50 rounded-lg">
                  <p className="font-medium">{selectedServiceData.name}</p>
                  <p className="text-sm text-gray-600">
                    {selectedServiceData.description}
                  </p>
                  <p className="text-lg font-bold text-secondary-500">
                    Starting at ${selectedServiceData.price}
                  </p>
                </div>
              )}

              <div>
                <Label htmlFor="preferredTime">Preferred Time</Label>
                <Select onValueChange={(value) => setValue('preferredTime', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Booking Form */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  {...register('name')}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-primary-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  {...register('phone')}
                  placeholder="(555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-primary-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-primary-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="address">Service Address</Label>
              <Textarea
                id="address"
                {...register('address')}
                placeholder="Enter the complete address where service is needed"
              />
              {errors.address && (
                <p className="text-primary-500 text-sm mt-1">{errors.address.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="notes">Additional Notes (Optional)</Label>
              <Textarea
                id="notes"
                {...register('notes')}
                placeholder="Any additional details about your plumbing needs"
              />
            </div>

            {selectedServiceData && selectedDate && watchedPreferredTime && (
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold mb-2">Booking Summary</h3>
                <p>Service: {selectedServiceData.name}</p>
                <p>Date: {moment(selectedDate).format('MMMM DD, YYYY')}</p>
                <p>Time: {watchedPreferredTime}</p>
                <p>Starting Price: ${selectedServiceData.price}</p>
              </div>
            )}

            {errors.preferredTime && (
              <p className="text-primary-500 text-sm mt-1">{errors.preferredTime.message}</p>
            )}

            <MasterButton
              type="submit"
              disabled={isBooking || !selectedDate || !watchedServiceType || !watchedPreferredTime}
              className="w-full"
            >
              {isBooking ? 'Processing...' : 'Book Appointment'}
            </MasterButton>

            <p className="text-sm text-gray-600 text-center">
              We'll contact you within 1 hour to confirm your appointment details.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}



