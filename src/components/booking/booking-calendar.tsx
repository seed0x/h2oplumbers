"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { format } from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';
import { MasterButton } from '@/components/ui/master-button';
import { servicePricing, ServicePricing, TimeSlot } from '@/types/booking';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { BookingForm } from './booking-form';

// Mock function to generate available time slots
const generateTimeSlots = (date: Date): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const startHour = 8; // 8 AM
  const endHour = 17; // 5 PM
  const slotDuration = 60; // 60 minutes per slot
  
  // Don't generate slots for past dates
  if (date < new Date()) {
    return slots;
  }
  
  // Don't generate slots for weekends
  const dayOfWeek = date.getDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return slots;
  }
  
  for (let hour = startHour; hour < endHour; hour++) {
    const start = new Date(date);
    start.setHours(hour, 0, 0, 0);
    
    const end = new Date(date);
    end.setHours(hour, slotDuration, 0, 0);
    
    // Randomly make some slots unavailable (for demo purposes)
    const available = Math.random() > 0.3;
    
    slots.push({
      start,
      end,
      available,
    });
  }
  
  return slots;
};

export function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedService, setSelectedService] = useState<ServicePricing | null>(null);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [showBookingForm, setShowBookingForm] = useState<boolean>(false);
  
  // Generate available slots when date is selected
  useEffect(() => {
    if (selectedDate) {
      const slots = generateTimeSlots(selectedDate);
      setAvailableSlots(slots);
      setSelectedSlot(null);
    } else {
      setAvailableSlots([]);
      setSelectedSlot(null);
    }
  }, [selectedDate]);

  // Handle date selection in the calendar
  const handleSelectSlot = ({ start }: { start: Date }) => {
    setSelectedDate(start);
  };

  // Handle service selection
  const handleServiceChange = (serviceId: string) => {
    const service = servicePricing.find(s => s.id === serviceId) || null;
    setSelectedService(service);
  };

  // Handle time slot selection
  const handleSlotSelect = (slot: TimeSlot) => {
    if (slot.available) {
      setSelectedSlot(slot);
    }
  };

  // Format date for display
  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return format(date, 'EEEE, MMMM d, yyyy');
  };

  // Format time for display
  const formatTime = (date: Date | null) => {
    if (!date) return '';
    return format(date, 'h:mm a');
  };

  // Initialize the localizer
  const localizer = momentLocalizer(moment);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold mb-4">Select Service Date</h3>
            <div className="h-[500px]">
              <Calendar
                localizer={localizer}
                selectable
                onSelectSlot={handleSelectSlot}
                defaultDate={new Date()}
                defaultView={Views.MONTH}
                events={[]}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '100%' }}
                min={new Date(new Date().setHours(8, 0, 0, 0))}
                max={new Date(new Date().setHours(17, 0, 0, 0))}
                views={['month', 'week']}
              />
            </div>
          </CardContent>
        </Card>

        {selectedDate && availableSlots.length > 0 && (
          <Card className="mt-6">
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">Available Time Slots</h3>
              <p className="text-muted-foreground mb-4">{formatDate(selectedDate)}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {availableSlots.map((slot, index) => (
                  <MasterButton
                    key={index}
                    variant={slot.available ? (selectedSlot === slot ? "primary" : "outline") : "ghost"}
                    disabled={!slot.available}
                    onClick={() => handleSlotSelect(slot)}
                    className="h-12"
                  >
                    {formatTime(slot.start)}
                  </MasterButton>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <div>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold mb-4">Booking Details</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="service">Select Service</Label>
                <Select onValueChange={handleServiceChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {servicePricing.map(service => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name} - ${service.basePrice}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedService && (
                <div className="bg-muted p-3 rounded-md">
                  <p className="font-medium">{selectedService.name}</p>
                  <p className="text-sm text-muted-foreground mb-1">{selectedService.description}</p>
                  <p className="text-sm">Base Price: <span className="font-semibold">${selectedService.basePrice}</span></p>
                  <p className="text-sm">Duration: {selectedService.duration} minutes</p>
                </div>
              )}

              {selectedDate && (
                <div>
                  <p className="font-medium">Selected Date:</p>
                  <p className="text-muted-foreground">{formatDate(selectedDate)}</p>
                </div>
              )}

              {selectedSlot && (
                <div>
                  <p className="font-medium">Selected Time:</p>
                  <p className="text-muted-foreground">{formatTime(selectedSlot.start)} - {formatTime(selectedSlot.end)}</p>
                </div>
              )}

              <MasterButton 
                className="w-full" 
                disabled={!selectedService || !selectedDate || !selectedSlot}
                onClick={() => setShowBookingForm(true)}
              >
                Continue Booking
              </MasterButton>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {showBookingForm && selectedService && selectedDate && selectedSlot && (
        <BookingForm
          service={selectedService}
          date={selectedDate}
          timeSlot={selectedSlot}
          onClose={() => setShowBookingForm(false)}
        />
      )}
    </div>
  );
}

