"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { MasterButton } from '@/components/ui/master-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { 
  BookingFormSchema, 
  BookingFormValues,
  ServicePricing, 
  TimeSlot,
  validServiceZipCodes
} from '@/types/booking';
import { toast } from '@/components/ui/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

interface BookingFormProps {
  service: ServicePricing;
  date: Date;
  timeSlot: TimeSlot;
  onClose: () => void;
}

export function BookingForm({ service, date, timeSlot, onClose }: BookingFormProps) {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(BookingFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      serviceId: service.id,
      date: date,
      timeSlot: format(timeSlot.start, 'HH:mm'),
      address: '',
      city: '',
      zipCode: '',
      message: '',
      smsNotifications: false,
      emergency: service.emergency || false,
      acceptTerms: false,
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    try {
      // This is where you'd send the data to your backend
  // booking form submitted
      
      // Simulate API call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Check if zip code is valid
      if (!validServiceZipCodes.includes(data.zipCode)) {
        toast.error(
          "Service Area Check",
          "We're sorry, but we don't currently service this zip code. Please contact us for more information."
        );
        return;
      }
      
      // Show success message
      toast.success(
        "Booking Confirmed!",
        "Your booking request has been submitted successfully. You will receive a confirmation email shortly."
      );
      
      // Close the form
      onClose();
    } catch (error) {
  // booking form submission error
      toast.error(
        "Something went wrong",
        "There was an error submitting your booking. Please try again."
      );
    }
  };

  const formatDate = (date: Date) => {
    return format(date, 'EEEE, MMMM d, yyyy');
  };

  const formatTime = (date: Date) => {
    return format(date, 'h:mm a');
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Complete Your Booking</DialogTitle>
          <DialogDescription>
            Please provide your information to confirm your booking for {service.name} on {formatDate(date)} at {formatTime(timeSlot.start)}.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="(123) 456-7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Main St" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Battle Ground" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ZIP Code</FormLabel>
                    <FormControl>
                      <Input placeholder="98604" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Information</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Please share any additional details about your plumbing needs" 
                      className="min-h-[80px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="smsNotifications"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Send me SMS notifications about my appointment
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="acceptTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I agree to the <a href="/terms" className="text-primary hover:underline">terms and conditions</a>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            
            <div className="bg-muted p-4 rounded-md">
              <h4 className="font-semibold mb-2">Booking Summary</h4>
              <p className="text-sm">Service: {service.name}</p>
              <p className="text-sm">Date: {formatDate(date)}</p>
              <p className="text-sm">Time: {formatTime(timeSlot.start)} - {formatTime(timeSlot.end)}</p>
              <p className="text-sm font-semibold mt-2">Total: ${service.basePrice}</p>
            </div>
            
            <DialogFooter>
              <MasterButton type="button" variant="outline" onClick={onClose}>
                Cancel
              </MasterButton>
              <MasterButton type="submit">
                Confirm Booking
              </MasterButton>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

