import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  // Create services
  const services = [
    {
      id: 'drain-cleaning',
      name: 'Drain Cleaning',
      description: 'Clear clogged drains, sewer line cleaning, preventive maintenance',
      category: 'maintenance',
      basePrice: 95,
      estimatedDuration: 90, // minutes
      isActive: true,
    },
    {
      id: 'water-heater-repair',
      name: 'Water Heater Repair',
      description: 'Water heater diagnosis, repair, and replacement services',
      category: 'repair',
      basePrice: 150,
      estimatedDuration: 180, // minutes
      isActive: true,
    },
    {
      id: 'water-heater-installation',
      name: 'Water Heater Installation',
      description: 'New water heater installation - tank and tankless options',
      category: 'installation',
      basePrice: 1200,
      estimatedDuration: 300, // minutes
      isActive: true,
    },
    {
      id: 'camera-inspection',
      name: 'Camera & Scope Inspection',
      description: 'Video camera inspections for drains, sewers, and visible leaks',
      category: 'diagnostic',
      basePrice: 150,
      estimatedDuration: 90, // minutes
      isActive: true,
    },
    {
      id: 'toilet-repair',
      name: 'Toilet Repair',
      description: 'Toilet repairs, running toilets, clogs, installations',
      category: 'repair',
      basePrice: 85,
      estimatedDuration: 45, // minutes
      isActive: true,
    },
    {
      id: 'faucet-fixture',
      name: 'Faucet & Fixture Service',
      description: 'Faucet repairs, installations, fixture replacements',
      category: 'repair',
      basePrice: 110,
      estimatedDuration: 90, // minutes
      isActive: true,
    },
    {
      id: 'garbage-disposal',
      name: 'Garbage Disposal Service',
      description: 'Garbage disposal repair, installation, and maintenance',
      category: 'repair',
      basePrice: 120,
      estimatedDuration: 90, // minutes
      isActive: true,
    },
    {
      id: 'pipe-repair',
      name: 'Pipe Repair & Replacement',
      description: 'Broken pipe repair, repiping, pipe replacement services',
      category: 'repair',
      basePrice: 200,
      estimatedDuration: 240, // minutes
      isActive: true,
    },
    {
      id: 'sewer-line',
      name: 'Sewer Line Service',
      description: 'Sewer line cleaning, repair, camera inspection',
      category: 'maintenance',
      basePrice: 250,
      estimatedDuration: 180, // minutes
      isActive: true,
    },
    {
      id: 'commercial-plumbing',
      name: 'Commercial Plumbing',
      description: 'Business and commercial plumbing services',
      category: 'commercial',
      basePrice: 150,
      estimatedDuration: 120, // minutes
      isActive: true,
    },
    {
      id: 'inspection',
      name: 'Plumbing Inspection',
      description: 'Comprehensive plumbing system inspection and assessment',
      category: 'diagnostic',
      basePrice: 125,
      estimatedDuration: 90, // minutes
      isActive: true,
    },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { id: service.id },
      update: service,
      create: service,
    });
  }

  console.log(`✅ Created ${services.length} services`);

  // Add some service areas
  const serviceAreas = [
    { zipCode: '98660', city: 'Vancouver', state: 'WA', isActive: true },
    { zipCode: '98661', city: 'Vancouver', state: 'WA', isActive: true },
    { zipCode: '98662', city: 'Vancouver', state: 'WA', isActive: true },
    { zipCode: '98663', city: 'Vancouver', state: 'WA', isActive: true },
    { zipCode: '98664', city: 'Vancouver', state: 'WA', isActive: true },
    { zipCode: '98665', city: 'Vancouver', state: 'WA', isActive: true },
    { zipCode: '98682', city: 'Vancouver', state: 'WA', isActive: true },
    { zipCode: '98683', city: 'Vancouver', state: 'WA', isActive: true },
    { zipCode: '98684', city: 'Vancouver', state: 'WA', isActive: true },
    { zipCode: '98685', city: 'Vancouver', state: 'WA', isActive: true },
    { zipCode: '98686', city: 'Vancouver', state: 'WA', isActive: true },
    { zipCode: '98607', city: 'Camas', state: 'WA', isActive: true },
    { zipCode: '98671', city: 'Washougal', state: 'WA', isActive: true },
    { zipCode: '98604', city: 'Battle Ground', state: 'WA', isActive: true },
    { zipCode: '98642', city: 'Ridgefield', state: 'WA', isActive: true },
    { zipCode: '98629', city: 'La Center', state: 'WA', isActive: true },
    { zipCode: '98632', city: 'Longview', state: 'WA', isActive: true },
    { zipCode: '98626', city: 'Kelso', state: 'WA', isActive: true },
    { zipCode: '98674', city: 'Woodland', state: 'WA', isActive: true },
  ];

  for (const area of serviceAreas) {
    await prisma.serviceArea.upsert({
      where: { zipCode: area.zipCode },
      update: area,
      create: area,
    });
  }

  console.log(`✅ Created ${serviceAreas.length} service areas`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
