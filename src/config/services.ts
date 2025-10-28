/**
 * Services Configuration
 * 
 * This file defines all plumbing services offered by All County Plumbers.
 * Edit this file to add, remove, or modify services.
 * 
 * After making changes:
 * 1. Save this file
 * 2. Run: npm run sync-services (to sync with database)
 * 3. Or manually update via Prisma Studio: http://localhost:5555
 */

export interface ServiceConfig {
  id?: string; // Will be auto-generated in database
  name: string;
  slug: string; // URL-friendly name
  description: string;
  category: ServiceCategory;
  basePrice: number; // Starting price in dollars
  hourlyRate?: number; // Hourly rate in dollars (optional)
  isEmergency: boolean;
  isActive: boolean;
  estimatedDuration: number; // In minutes
  features?: string[]; // Key features/selling points
  icon?: string; // Icon name or path
}

export type ServiceCategory = 
  | 'Emergency'
  | 'Water Heater'
  | 'Drain & Sewer'
  | 'Repair'
  | 'Installation'
  | 'Gas Line'
  | 'Repiping'
  | 'Inspection'
  | 'Maintenance';

/**
 * All available services
 * Add or remove services by editing this array
 */
export const services: ServiceConfig[] = [
  {
    name: 'Emergency Plumbing',
    slug: 'emergency-plumbing',
    description: '24/7 emergency plumbing services for burst pipes, major leaks, and other urgent issues. Same-day service available.',
    category: 'Emergency',
    basePrice: 200,
    hourlyRate: 175,
    isEmergency: true,
    isActive: true,
    estimatedDuration: 60,
    features: [
      '24/7 availability',
      'Same-day service',
      'Rapid response time',
      'Emergency leak repair',
      'Burst pipe repair'
    ],
    icon: 'service-emergency-icon.svg'
  },
  {
    name: 'Water Heater Repair',
    slug: 'water-heater-repair',
    description: 'Expert water heater repair and installation. We service all major brands including Rheem, AO Smith, Bradford White, and more.',
    category: 'Water Heater',
    basePrice: 150,
    hourlyRate: 125,
    isEmergency: false,
    isActive: true,
    estimatedDuration: 120,
    features: [
      'All major brands',
      'Tank & tankless systems',
      'Same-day repairs',
      'Installation & replacement',
      'Preventive maintenance'
    ],
    icon: 'service-water-heater-icon.svg'
  },
  {
    name: 'Drain Cleaning',
    slug: 'drain-cleaning',
    description: 'Professional drain cleaning using hydro-jetting and snake equipment. Clear clogs in sinks, tubs, toilets, and main lines.',
    category: 'Drain & Sewer',
    basePrice: 125,
    hourlyRate: 100,
    isEmergency: false,
    isActive: true,
    estimatedDuration: 90,
    features: [
      'Hydro-jetting available',
      'Camera inspection',
      'Main line clearing',
      'Root removal',
      'Preventive maintenance'
    ],
    icon: 'service-drain-cleaning-icon.svg'
  },
  {
    name: 'Leak Repair',
    slug: 'leak-repair',
    description: 'Fast leak detection and repair for faucets, pipes, toilets, and fixtures. Stop water damage before it spreads.',
    category: 'Repair',
    basePrice: 100,
    hourlyRate: 100,
    isEmergency: false,
    isActive: true,
    estimatedDuration: 60,
    features: [
      'Advanced leak detection',
      'Pipe repairs',
      'Faucet repairs',
      'Toilet repairs',
      'Fixture repairs'
    ],
    icon: 'service-repair-icon.svg'
  },
  {
    name: 'Fixture Installation',
    slug: 'fixture-installation',
    description: 'Professional installation of faucets, sinks, toilets, garbage disposals, and other plumbing fixtures.',
    category: 'Installation',
    basePrice: 175,
    hourlyRate: 125,
    isEmergency: false,
    isActive: true,
    estimatedDuration: 120,
    features: [
      'Faucet installation',
      'Sink installation',
      'Toilet installation',
      'Garbage disposal',
      'Shower/tub installation'
    ],
    icon: 'service-installation-icon.svg'
  },
  {
    name: 'Sewer Line Service',
    slug: 'sewer-line-service',
    description: 'Main sewer line inspection, cleaning, and repair. Video camera inspection available to diagnose issues.',
    category: 'Drain & Sewer',
    basePrice: 250,
    hourlyRate: 150,
    isEmergency: false,
    isActive: true,
    estimatedDuration: 180,
    features: [
      'Video camera inspection',
      'Sewer line cleaning',
      'Sewer line repair',
      'Root removal',
      'Trenchless options'
    ],
    icon: 'service-inspection-icon.svg'
  },
  {
    name: 'Repipe Services',
    slug: 'repipe',
    description: 'Complete or partial repiping for homes with old or damaged pipes. Copper, PEX, and CPVC options available.',
    category: 'Repiping',
    basePrice: 500,
    hourlyRate: 150,
    isEmergency: false,
    isActive: true,
    estimatedDuration: 480,
    features: [
      'Whole-home repiping',
      'Partial repiping',
      'Copper piping',
      'PEX piping',
      'CPVC options'
    ],
    icon: 'service-repipe-icon.svg'
  },
  {
    name: 'Gas Line Service',
    slug: 'gas-line-service',
    description: 'Licensed gas line installation, repair, and inspection for appliances, water heaters, and HVAC systems.',
    category: 'Gas Line',
    basePrice: 200,
    hourlyRate: 150,
    isEmergency: false,
    isActive: true,
    estimatedDuration: 120,
    features: [
      'Gas line installation',
      'Gas line repair',
      'Leak detection',
      'Appliance hookup',
      'Safety inspections'
    ]
  },
  {
    name: 'Plumbing Inspection',
    slug: 'plumbing-inspection',
    description: 'Comprehensive plumbing inspection for home buyers, sellers, or preventive maintenance.',
    category: 'Inspection',
    basePrice: 175,
    hourlyRate: 125,
    isEmergency: false,
    isActive: true,
    estimatedDuration: 90,
    features: [
      'Camera inspection',
      'Detailed report',
      'Home buyer inspection',
      'Pre-listing inspection',
      'Annual maintenance check'
    ],
    icon: 'service-inspection-icon.svg'
  }
];

/**
 * Service categories for filtering/organization
 */
export const serviceCategories: Record<ServiceCategory, { name: string; description: string }> = {
  'Emergency': {
    name: 'Emergency Services',
    description: '24/7 emergency response for urgent plumbing issues'
  },
  'Water Heater': {
    name: 'Water Heater Services',
    description: 'Tank and tankless water heater repair, installation, and maintenance'
  },
  'Drain & Sewer': {
    name: 'Drain & Sewer Services',
    description: 'Professional drain cleaning, sewer line repair, and maintenance'
  },
  'Repair': {
    name: 'Repair Services',
    description: 'Fast, reliable repairs for leaks, pipes, and fixtures'
  },
  'Installation': {
    name: 'Installation Services',
    description: 'Professional installation of plumbing fixtures and appliances'
  },
  'Gas Line': {
    name: 'Gas Line Services',
    description: 'Licensed gas line installation, repair, and inspection'
  },
  'Repiping': {
    name: 'Repiping Services',
    description: 'Whole-home and partial repiping with modern materials'
  },
  'Inspection': {
    name: 'Inspection Services',
    description: 'Comprehensive plumbing inspections and camera diagnostics'
  },
  'Maintenance': {
    name: 'Maintenance Services',
    description: 'Preventive maintenance to keep your plumbing running smoothly'
  }
};

/**
 * Helper functions
 */
export const getServiceBySlug = (slug: string): ServiceConfig | undefined => {
  return services.find(service => service.slug === slug);
};

export const getServicesByCategory = (category: ServiceCategory): ServiceConfig[] => {
  return services.filter(service => service.category === category && service.isActive);
};

export const getActiveServices = (): ServiceConfig[] => {
  return services.filter(service => service.isActive);
};

export const getEmergencyServices = (): ServiceConfig[] => {
  return services.filter(service => service.isEmergency && service.isActive);
};
