#!/usr/bin/env node
/**
 * Sync Services Script
 * 
 * This script syncs services from src/config/services.ts to the database.
 * Run this after making changes to the services configuration file.
 * 
 * Usage:
 *   npm run sync-services
 *   OR
 *   node scripts/sync-services.js
 */

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Services configuration
const services = [
  {
    name: 'Emergency Plumbing',
    description: '24/7 emergency plumbing services for burst pipes, major leaks, and other urgent issues. Same-day service available.',
    category: 'Emergency',
    basePrice: 200,
    hourlyRate: 175,
    isEmergency: true,
    isActive: true,
    estimatedDuration: 60
  },
  {
    name: 'Water Heater Repair',
    description: 'Expert water heater repair and installation. We service all major brands including Rheem, AO Smith, Bradford White, and more.',
    category: 'Water Heater',
    basePrice: 150,
    hourlyRate: 125,
    isEmergency: false,
    isActive: true,
    estimatedDuration: 120
  },
  {
    name: 'Drain Cleaning',
    description: 'Professional drain cleaning using hydro-jetting and snake equipment. Clear clogs in sinks, tubs, toilets, and main lines.',
    category: 'Drain & Sewer',
    basePrice: 125,
    hourlyRate: 100,
    isEmergency: false,
    isActive: true,
    estimatedDuration: 90
  },
  {
    name: 'Leak Repair',
    description: 'Fast leak detection and repair for faucets, pipes, toilets, and fixtures. Stop water damage before it spreads.',
    category: 'Repair',
    basePrice: 100,
    hourlyRate: 100,
    isEmergency: false,
    isActive: true,
    estimatedDuration: 60
  },
  {
    name: 'Fixture Installation',
    description: 'Professional installation of faucets, sinks, toilets, garbage disposals, and other plumbing fixtures.',
    category: 'Installation',
    basePrice: 175,
    hourlyRate: 125,
    isEmergency: false,
    isActive: true,
    estimatedDuration: 120
  },
  {
    name: 'Sewer Line Service',
    description: 'Main sewer line inspection, cleaning, and repair. Video camera inspection available to diagnose issues.',
    category: 'Drain & Sewer',
    basePrice: 250,
    hourlyRate: 150,
    isEmergency: false,
    isActive: true,
    estimatedDuration: 180
  },
  {
    name: 'Repiping Services',
    description: 'Complete or partial repiping for homes with old or damaged pipes. Copper, PEX, and CPVC options available.',
    category: 'Repiping',
    basePrice: 500,
    hourlyRate: 150,
    isEmergency: false,
    isActive: true,
    estimatedDuration: 480
  },
  {
    name: 'Gas Line Service',
    description: 'Licensed gas line installation, repair, and inspection for appliances, water heaters, and HVAC systems.',
    category: 'Gas Line',
    basePrice: 200,
    hourlyRate: 150,
    isEmergency: false,
    isActive: true,
    estimatedDuration: 120
  }
];

const serviceAreas = [
  // Clark County, WA - Primary service area
  { zipCode: '98660', city: 'Vancouver', county: 'Clark', state: 'WA', isActive: true, travelTime: 15 },
  { zipCode: '98661', city: 'Vancouver', county: 'Clark', state: 'WA', isActive: true, travelTime: 15 },
  { zipCode: '98662', city: 'Vancouver', county: 'Clark', state: 'WA', isActive: true, travelTime: 20 },
  { zipCode: '98663', city: 'Vancouver', county: 'Clark', state: 'WA', isActive: true, travelTime: 20 },
  { zipCode: '98664', city: 'Vancouver', county: 'Clark', state: 'WA', isActive: true, travelTime: 25 },
  { zipCode: '98665', city: 'Vancouver', county: 'Clark', state: 'WA', isActive: true, travelTime: 20 },
  { zipCode: '98682', city: 'Vancouver', county: 'Clark', state: 'WA', isActive: true, travelTime: 25 },
  { zipCode: '98683', city: 'Vancouver', county: 'Clark', state: 'WA', isActive: true, travelTime: 25 },
  { zipCode: '98684', city: 'Vancouver', county: 'Clark', state: 'WA', isActive: true, travelTime: 30 },
  { zipCode: '98686', city: 'Vancouver', county: 'Clark', state: 'WA', isActive: true, travelTime: 30 },
  
  // Other Clark County cities
  { zipCode: '98604', city: 'Battle Ground', county: 'Clark', state: 'WA', isActive: true, travelTime: 35 },
  { zipCode: '98606', city: 'Brush Prairie', county: 'Clark', state: 'WA', isActive: true, travelTime: 30 },
  { zipCode: '98607', city: 'Camas', county: 'Clark', state: 'WA', isActive: true, travelTime: 30 },
  { zipCode: '98629', city: 'La Center', county: 'Clark', state: 'WA', isActive: true, travelTime: 40 },
  { zipCode: '98642', city: 'Ridgefield', county: 'Clark', state: 'WA', isActive: true, travelTime: 35 },
  { zipCode: '98671', city: 'Washougal', county: 'Clark', state: 'WA', isActive: true, travelTime: 35 },
];

async function syncServices() {
  console.log('🔄 Syncing services from config to database...\n');

  try {
    await prisma.$connect();
    console.log('✅ Database connected\n');

    // Sync services
    console.log('📋 Syncing services...');
    let servicesCreated = 0;
    let servicesUpdated = 0;
    let servicesSkipped = 0;

    for (const service of services) {
      const { slug, features, icon, ...serviceData } = service;
      
      // Add metadata for additional fields
      const metadata = {
        slug,
        features: features || [],
        icon: icon || null
      };

      try {
        // Try to find existing service by name
        const existing = await prisma.service.findFirst({
          where: { name: service.name }
        });

        if (existing) {
          // Update existing service
          await prisma.service.update({
            where: { id: existing.id },
            data: {
              ...serviceData,
              metadata
            }
          });
          console.log(`✏️  Updated: ${service.name}`);
          servicesUpdated++;
        } else {
          // Create new service
          const created = await prisma.service.create({
            data: {
              ...serviceData,
              metadata
            }
          });
          console.log(`✅ Created: ${service.name} (ID: ${created.id})`);
          servicesCreated++;
        }
      } catch (error) {
        console.log(`⚠️  Skipped: ${service.name} - ${error.message}`);
        servicesSkipped++;
      }
    }

    console.log(`\n📊 Services Summary:`);
    console.log(`   Created: ${servicesCreated}`);
    console.log(`   Updated: ${servicesUpdated}`);
    console.log(`   Skipped: ${servicesSkipped}`);

    // Sync service areas
    console.log('\n📍 Syncing service areas...');
    let areasCreated = 0;
    let areasUpdated = 0;
    let areasSkipped = 0;

    for (const area of serviceAreas) {
      try {
        const existing = await prisma.serviceArea.findFirst({
          where: { zipCode: area.zipCode }
        });

        if (existing) {
          await prisma.serviceArea.update({
            where: { id: existing.id },
            data: area
          });
          console.log(`✏️  Updated: ${area.city} ${area.zipCode}`);
          areasUpdated++;
        } else {
          await prisma.serviceArea.create({
            data: area
          });
          console.log(`✅ Created: ${area.city} ${area.zipCode}`);
          areasCreated++;
        }
      } catch (error) {
        console.log(`⚠️  Skipped: ${area.city} ${area.zipCode} - ${error.message}`);
        areasSkipped++;
      }
    }

    console.log(`\n📊 Service Areas Summary:`);
    console.log(`   Created: ${areasCreated}`);
    console.log(`   Updated: ${areasUpdated}`);
    console.log(`   Skipped: ${areasSkipped}`);

    // Final summary
    const totalServices = await prisma.service.count();
    const totalAreas = await prisma.serviceArea.count();
    const activeServices = await prisma.service.count({ where: { isActive: true } });

    console.log('\n' + '='.repeat(50));
    console.log('📈 DATABASE SUMMARY');
    console.log('='.repeat(50));
    console.log(`   Total Services: ${totalServices} (${activeServices} active)`);
    console.log(`   Total Service Areas: ${totalAreas}`);

    console.log('\n✨ Sync complete!');
    console.log('\n📋 Next steps:');
    console.log('1. View in Prisma Studio: http://localhost:5555');
    console.log('2. Test booking form with services');
    console.log('3. Deploy to production if ready');

  } catch (error) {
    console.error('\n❌ Sync failed:', error.message);
    console.error('\nFull error:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('\n🔌 Database connection closed');
  }
}

// Run the sync
syncServices();
