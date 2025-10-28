import { z } from 'zod';

// Define types for booking system
export type TimeSlot = {
  start: Date;
  end: Date;
  available: boolean;
};

export type ServicePricing = {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  duration: number; // in minutes
  emergency: boolean;
};

export const BookingFormSchema = z.object({
  firstName: z.string().min(2, { message: 'First name is required' }),
  lastName: z.string().min(2, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Valid email is required' }),
  phone: z.string().min(10, { message: 'Valid phone number is required' }),
  serviceId: z.string({ required_error: 'Please select a service' }),
  date: z.date({ required_error: 'Please select a date' }),
  timeSlot: z.string({ required_error: 'Please select a time slot' }),
  address: z.string().min(5, { message: 'Address is required' }),
  city: z.string().min(2, { message: 'City is required' }),
  zipCode: z.string().min(5, { message: 'Valid zip code is required' }),
  message: z.string().optional(),
  smsNotifications: z.boolean().optional(),
  emergency: z.boolean().optional(),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions',
  }),
});

export type BookingFormValues = z.infer<typeof BookingFormSchema>;

// Sample service pricing data
export const servicePricing: ServicePricing[] = [
  {
    id: 'standard-inspection',
    name: 'Standard Plumbing Inspection',
    basePrice: 99,
    description: 'Complete inspection of your plumbing system to identify issues.',
    duration: 60,
    emergency: false,
  },
  {
    id: 'drain-cleaning',
    name: 'Drain Cleaning',
    basePrice: 149,
    description: 'Professional drain cleaning to remove clogs and improve flow.',
    duration: 90,
    emergency: false,
  },
  {
    id: 'faucet-repair',
    name: 'Faucet Repair/Replacement',
    basePrice: 129,
    description: 'Repair or replacement of leaky or broken faucets.',
    duration: 60,
    emergency: false,
  },
  {
    id: 'toilet-repair',
    name: 'Toilet Repair',
    basePrice: 139,
    description: 'Fix leaks, running toilets, weak flushes, and other toilet issues.',
    duration: 60,
    emergency: false,
  },
  {
    id: 'water-heater-service',
    name: 'Water Heater Service',
    basePrice: 179,
    description: 'Inspection, maintenance, or repair of your water heater.',
    duration: 120,
    emergency: false,
  },
  {
    id: 'pipe-repair',
    name: 'Pipe Repair',
    basePrice: 199,
    description: 'Fix leaky or damaged pipes in your home.',
    duration: 120,
    emergency: true,
  },
  {
    id: 'emergency-service',
    name: 'Emergency Plumbing Service',
    basePrice: 299,
    description: 'Immediate response to urgent plumbing issues.',
    duration: 120,
    emergency: true,
  },
];

// Service areas - valid zip codes for the Battle Ground, WA area
export const validServiceZipCodes = [
  '98604', // Battle Ground
  '98606', // Brush Prairie
  '98662', // Vancouver
  '98661', // Vancouver
  '98664', // Vancouver
  '98665', // Vancouver
  '98682', // Vancouver
  '98683', // Vancouver
  '98684', // Vancouver
  '98685', // Vancouver
  '98686', // Vancouver
  '98675', // Yacolt
  '98601', // Amboy
  '98629', // La Center
  '98642', // Ridgefield
];

// Common plumbing FAQs for the chatbot
export const plumbingFAQs = [
  {
    question: "What should I do if I have a burst pipe?",
    answer: "For a burst pipe: 1) Shut off your water main immediately 2) Call our emergency line at (360) 883-2506 3) Open faucets to drain remaining water 4) Try to remove valuable items from the affected area while waiting for our technician."
  },
  {
    question: "How do I know if I have a water leak?",
    answer: "Signs of a water leak include: unexpectedly high water bills, the sound of running water when no fixtures are in use, damp spots on walls or ceilings, mold or mildew growth, and a water meter that continues to run when all water is turned off."
  },
  {
    question: "How often should I have my drains cleaned?",
    answer: "We recommend having your drains professionally cleaned every 1-2 years for preventive maintenance. However, if you notice slow drainage, gurgling sounds, or foul odors, it's time for a cleaning regardless of the schedule."
  },
  {
    question: "What is the average lifespan of a water heater?",
    answer: "The average lifespan of a conventional tank water heater is 8-12 years, while tankless water heaters can last up to 20 years with proper maintenance. Regular flushing and maintenance can extend the life of your unit."
  },
  {
    question: "Why is my toilet running continuously?",
    answer: "A running toilet is typically caused by a faulty flapper valve, an improperly adjusted float, or a defective fill valve. It can waste up to 200 gallons of water per day and should be repaired promptly."
  },
  {
    question: "What are your service hours?",
    answer: "Our regular service hours are Monday-Friday from 8:00 AM to 5:00 PM. We offer emergency services 24/7 for urgent plumbing issues. For emergency service outside regular hours, please call (360) 883-2506."
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes, we offer free estimates for most plumbing services. You can request one by calling (360) 883-2506 or using our online booking form."
  },
  {
    question: "How do I prevent frozen pipes?",
    answer: "To prevent frozen pipes: 1) Keep your home heated above 55°F 2) Allow faucets to drip during extreme cold 3) Open cabinet doors to allow warm air to reach pipes under sinks 4) Insulate exposed pipes in unheated areas 5) Disconnect garden hoses and shut off exterior faucets before winter."
  }
];

// Business hours for checking emergency hours
export const businessHours = {
  monday: { open: '8:00', close: '17:00' },
  tuesday: { open: '8:00', close: '17:00' },
  wednesday: { open: '8:00', close: '17:00' },
  thursday: { open: '8:00', close: '17:00' },
  friday: { open: '8:00', close: '17:00' },
  saturday: { open: '', close: '' }, // Closed or by appointment
  sunday: { open: '', close: '' },  // Closed or by appointment
};


