import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Define the service types that match your business
const services = [
  {
    id: 'drain-cleaning',
    name: 'Drain Cleaning',
    category: 'maintenance', 
    description: 'Clear clogged drains, sewer line cleaning, preventive maintenance',
    estimatedDuration: '1-2 hours',
    basePrice: 95
  },
  {
    id: 'water-heater-repair',
    name: 'Water Heater Repair',
    category: 'repair',
    description: 'Water heater diagnosis, repair, and replacement services',
    estimatedDuration: '2-4 hours',
    basePrice: 150
  },
  {
    id: 'water-heater-installation',
    name: 'Water Heater Installation',
    category: 'installation',
    description: 'New water heater installation - tank and tankless options',
    estimatedDuration: '4-6 hours',
    basePrice: 1200
  },
  {
    id: 'camera-inspection',
    name: 'Camera & Scope Inspection',
    category: 'diagnostic',
    description: 'Video camera inspections for drains, sewers, and visible leaks',
    estimatedDuration: '1-2 hours',
    basePrice: 150
  },
  {
    id: 'toilet-repair',
    name: 'Toilet Repair',
    category: 'repair',
    description: 'Toilet repairs, running toilets, clogs, installations',
    estimatedDuration: '30min-1 hour',
    basePrice: 85
  },
  {
    id: 'faucet-fixture',
    name: 'Faucet & Fixture Service',
    category: 'repair',
    description: 'Faucet repairs, installations, fixture replacements',
    estimatedDuration: '1-2 hours',
    basePrice: 110
  },
  {
    id: 'garbage-disposal',
    name: 'Garbage Disposal Service',
    category: 'repair',
    description: 'Garbage disposal repair, installation, and maintenance',
    estimatedDuration: '1-2 hours',
    basePrice: 120
  },
  {
    id: 'pipe-repair',
    name: 'Pipe Repair & Replacement',
    category: 'repair',
    description: 'Broken pipe repair, repiping, pipe replacement services',
    estimatedDuration: '2-6 hours',
    basePrice: 200
  },
  {
    id: 'sewer-line',
    name: 'Sewer Line Service',
    category: 'maintenance',
    description: 'Sewer line cleaning, repair, camera inspection',
    estimatedDuration: '2-4 hours',
    basePrice: 250
  },
  {
    id: 'commercial-plumbing',
    name: 'Commercial Plumbing',
    category: 'commercial',
    description: 'Business and commercial plumbing services',
    estimatedDuration: 'Varies',
    basePrice: 150
  },
  {
    id: 'inspection',
    name: 'Plumbing Inspection',
    category: 'diagnostic',
    description: 'Comprehensive plumbing system inspection and assessment',
    estimatedDuration: '1-2 hours',
    basePrice: 125
  }
];

export async function GET() {
  try {
    // In production, you might want to add database integration
    // For now, returning the predefined services
    return NextResponse.json({ 
      services: services.map(service => ({
        id: service.id,
        name: service.name,
        category: service.category,
        description: service.description
      }))
    });
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}
