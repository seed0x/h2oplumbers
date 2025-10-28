import { ServiceAreaConfigEntry } from '@/components/service-areas/ServiceAreaPage';
import { PromotionKey } from './promotions';

export const serviceAreas: ServiceAreaConfigEntry[] = [
  {
    slug: 'vancouver-wa-plumber',
    name: 'Vancouver',
    meta: {
      title: 'Plumbers Vancouver WA | Emergency Plumber Near Me | All County Plumbing',
      description: 'Top-rated plumbers in Vancouver, WA. Fast emergency plumber near you, drain cleaning, water heater repair, repiping. Licensed & insured. Serving all Vancouver neighborhoods: Downtown, East Vancouver, Cascade Park, Salmon Creek, Hazel Dell. Call (360) 883-2506 for same-day service!',
      keywords: 'plumbers vancouver wa, plumber vancouver, vancouver plumbers, plumbers near me, emergency plumber vancouver wa, plumbing contractors vancouver wa, licensed plumber vancouver washington, drain cleaning vancouver, clark county plumbing'
    },
    hero: {
      headline: 'Vancouver\'s Most Trusted Plumbers - Serving All Neighborhoods',
      subheading: 'Professional plumbing services throughout Vancouver, WA from Downtown to Salmon Creek, Hazel Dell to Cascade Park. Same-day emergency service available. Licensed plumbing contractors with 20+ years serving Clark County.',
      promotionKey: 'vancouverHomeowner' as PromotionKey
    },
    services: [
      { title: 'Emergency Plumber Vancouver WA', description: '24/7 emergency plumbing services in Vancouver. Fast response for burst pipes, severe leaks, and urgent plumbing issues. Available nights, weekends & holidays.', href: '/services/emergency-plumbing' },
      { title: 'Drain Cleaning Vancouver', description: 'Professional drain cleaning for Vancouver homes and businesses. Hydro jetting, camera inspections, kitchen drains, bathroom clogs, sewer lines. Same-day service.', href: '/services/drain-cleaning' },
      { title: 'Water Heater Repair Vancouver', description: 'Expert water heater repair and replacement in Vancouver, WA. Tank and tankless systems. Gas and electric. Emergency repairs and new installations.', href: '/services/water-heater-repair' },
      { title: 'Commercial Plumbing Vancouver WA', description: 'Reliable commercial plumbing contractors for Vancouver businesses. Restaurants, offices, retail, tenant improvements. Licensed and insured.', href: '/commercial' }
    ],
    neighborhoods: ['Downtown Vancouver','East Vancouver','West Vancouver','Hazel Dell','Salmon Creek','Cascade Park','Felida','Fisher\'s Landing','Orchards','Minnehaha','Image','Mill Plain','Fourth Plain','Burnt Bridge Creek','Evergreen Highlands','Ogden','Sifton','Five Corners','McLoughlin Heights','Bagley Downs','Bagley Annex','Rose Village','Lincoln','Fruit Valley','Vancouver Heights','Vancouver Mall Area','Andresen','78th Street Corridor','Burton','Walnut Grove'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89168.0032379933!2d-122.72246435136717!3d45.6387282424243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495af63c77745c5%3A0x23b8d597d6097bdf!2sVancouver%2C%20WA!5e0!3m2!1sen!2sus!4v1678886472427!5m2!1sen!2sus',
    testimonials: [
      { author: 'John D.', area: 'Salmon Creek', quote: 'Best plumber in Vancouver! Fixed our leaking pipe same day. Professional, courteous, and reasonably priced. Highly recommend.' },
      { author: 'Sarah L.', area: 'Cascade Park', quote: 'Called them for a water heater replacement. They helped us choose the perfect unit and installed it quickly. Great plumbing contractors!' },
      { author: 'Mike R.', area: 'Downtown Vancouver', quote: 'Emergency drain cleaning for our restaurant. They cleared a major clog during peak hours without disrupting service. True professionals.' },
      { author: 'Jennifer K.', area: 'Hazel Dell', quote: 'After searching "plumbers near me" I found All County. They arrived within an hour and solved our plumbing emergency. Will use them again!' },
      { author: 'Robert T.', area: 'East Vancouver', quote: 'Excellent service from start to finish. The plumber explained everything clearly and the pricing was fair. Best plumbing company in Clark County.' }
    ],
    cta: {
      headline: "Vancouver WA's Top-Rated Plumbers",
      blurb: 'When you need a reliable plumber in Vancouver, Washington, trust All County Plumbing. We\'re your local plumbing contractors serving all of Clark County with emergency service, drain cleaning, water heaters, and complete plumbing solutions. Licensed, insured, and family-owned since 2004. Call now for same-day service!'
    }
  }
  ,
  {
    slug: 'camas-plumber',
    name: 'Camas',
    meta: {
      title: 'Camas WA Plumber | Local Plumbing Services | All County Plumbing',
      description: 'Professional plumber in Camas, WA. Emergency plumbing, drain cleaning, water heater repair. Licensed & insured local experts. Call (360) 883-2506 today!',
      keywords: 'Camas WA plumber, plumber Camas Washington, emergency plumbing Camas, drain cleaning Camas WA, water heater repair Camas'
    },
    hero: {
      headline: 'Serving historic downtown Camas to Prune Hill with trusted plumbing solutions.',
      subheading: 'Local, responsive plumbing services for Camas homeowners and businesses.',
      promotionKey: 'camasNewCustomer' as PromotionKey
    },
    services: [
      { title: 'Emergency Plumbing Camas', description: '24/7 emergency help for burst pipes, severe leaks & urgent failures.', href: '/services/emergency-plumbing' },
      { title: 'Camas Drain Cleaning', description: 'Drain & sewer cleaning including root intrusion and hydro jetting.', href: '/services/drain-cleaning' },
      { title: 'Water Heater Service Camas', description: 'Tank & tankless repairs, installs, maintenance & upgrades.', href: '/services/water-heater-repair' },
      { title: 'Camas Commercial Plumbing', description: 'Restaurants, light industrial & retail plumbing specialists.', href: '/commercial' }
    ],
    neighborhoods: ['Downtown Camas','Crown Park','Prune Hill','Grass Valley','Lacamas Lake','Heritage Park','Liberty Park','Everett Creek','Fern Prairie','Lacamas Heights','Sharp\'s Corner','Forest Home'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86332.51709646097!2d-122.461!3d45.587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495985c4b6d6e9d%3A0x99f44d2c0d20593!2sCamas%2C%20WA!5e0!3m2!1sen!2sus!4v1678886472427!5m2!1sen!2sus',
    testimonials: [
      { author: 'Emily P.', area: 'Prune Hill', quote: 'Fast water heater replacement—professional from start to finish.' },
      { author: 'George T.', area: 'Lacamas Lake', quote: 'Solved a persistent drain clog other companies missed.' },
      { author: 'Lisa W.', area: 'Downtown Camas', quote: 'Respectful, clean and honest pricing. Highly recommend.' }
    ],
    cta: {
      headline: "Camas's Trusted Plumber",
      blurb: 'From historic homes to new builds, Camas relies on All County for dependable plumbing service.'
    }
  },
  {
    slug: 'battle-ground-plumber',
    name: 'Battle Ground',
    meta: {
      title: 'Battle Ground WA Plumber | Plumbing Services | All County Plumbing',
      description: 'Reliable plumber in Battle Ground, WA for emergency repairs, drain cleaning, and water heaters. Call (360) 883-2506 today!',
      keywords: 'Battle Ground plumber, plumber Battle Ground WA, emergency plumbing Battle Ground, drain cleaning Battle Ground, water heater repair Battle Ground'
    },
    hero: {
      headline: 'Rural properties & suburban neighborhoods—Battle Ground plumbing pros.',
      subheading: 'Prompt, professional plumbing services across Battle Ground and surrounding areas.',
      promotionKey: 'battleGroundSavings' as PromotionKey
    },
    services: [
      { title: 'Emergency Plumbing Battle Ground', description: 'Rapid response for urgent leaks & failures—24/7 availability.', href: '/services/emergency-plumbing' },
      { title: 'Battle Ground Drain Cleaning', description: 'Root ingress, slow drains, sewer backups & maintenance programs.', href: '/services/drain-cleaning' },
      { title: 'Water Heater Service Battle Ground', description: 'Diagnostic, repair & replacement of tank/tankless systems.', href: '/services/water-heater-repair' },
      { title: 'Battle Ground Commercial Plumbing', description: 'Retail, food service & light industrial building service.', href: '/services/commercial-plumbing' }
    ],
    neighborhoods: ['Old Town','Downtown Core','Lewisville','Meadow Glade','Dublan','Battle Ground Lake Area','Glenwood Heights','Dolan Creek','Meadowland Estates','Larch Corner'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86054.9908!2d-122.5807!3d45.7802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495c0fcb9d75f07%3A0x3d3bb9a5e2e5d4ab!2sBattle%20Ground%2C%20WA!5e0!3m2!1sen!2sus!4v1678886472427!5m2!1sen!2sus',
    testimonials: [
      { author: 'Henry S.', area: 'Lewisville', quote: 'Rerouted a broken pipe line quickly and professionally.' },
      { author: 'Andrea M.', area: 'Meadow Glade', quote: 'Transparent pricing and quality workmanship.' }
    ],
    cta: {
      headline: "Battle Ground's Reliable Plumber",
      blurb: 'Trust our licensed team for dependable service across Battle Ground and surrounding rural properties.'
    }
  },
  {
    slug: 'ridgefield-plumber',
    name: 'Ridgefield',
    meta: {
      title: 'Ridgefield WA Plumber | Local Plumbing Services | All County Plumbing',
      description: 'Expert plumber in Ridgefield, WA for homes & businesses. Emergency service, drains, water heaters. Call today!',
      keywords: 'Ridgefield plumber, plumber Ridgefield WA, emergency plumbing Ridgefield, drain cleaning Ridgefield, water heater repair Ridgefield'
    },
    hero: {
      headline: 'Supporting Ridgefield growth with modern plumbing solutions.',
      subheading: 'From downtown to new developments—professional, timely plumbing service.',
      promotionKey: 'ridgefieldIntro' as PromotionKey
    },
    services: [
      { title: 'Emergency Plumbing Ridgefield', description: 'Immediate help for leaks, bursts and critical failures.', href: '/services/emergency-plumbing' },
      { title: 'Ridgefield Drain Cleaning', description: 'Drain & sewer clearing, inspection & preventative maintenance.', href: '/services/drain-cleaning' },
      { title: 'Water Heater Service Ridgefield', description: 'Installation, repair & optimization of water heating systems.', href: '/services/water-heater-repair' },
      { title: 'Ridgefield Commercial Plumbing', description: 'Winery, retail & office plumbing specialists.', href: '/services/commercial-plumbing' }
    ],
    neighborhoods: ['Downtown Ridgefield','Pioneer Canyon','Royal Terrace','Taverner Ridge','Beechwood','Vista Terrace','Heron Ridge','S. 45th Area','Hillhurst Road Corridor'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86200.112!2d-122.754!3d45.8159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495bd1d34f7e8d3%3A0x9f7e7c8b634e9ea2!2sRidgefield%2C%20WA!5e0!3m2!1sen!2sus!4v1678886472427!5m2!1sen!2sus',
    testimonials: [
      { author: 'Nate R.', area: 'Pioneer Canyon', quote: 'Handled a tankless upgrade flawlessly.' },
      { author: 'Kelly B.', area: 'Downtown', quote: 'Responsive and knowledgeable—best service experience.' }
    ],
    cta: {
      headline: "Ridgefield's Trusted Plumber",
      blurb: 'Your partner for dependable plumbing in fast-growing Ridgefield.'
    }
  },
  {
    slug: 'la-center-plumber',
    name: 'La Center',
    meta: {
      title: 'La Center WA Plumber | Trusted Local Plumbing | All County Plumbing',
      description: 'Serving La Center with reliable plumbing repairs, installs & maintenance. Call (360) 883-2506.',
      keywords: 'La Center plumber, plumber La Center WA, emergency plumbing La Center, drain cleaning La Center'
    },
    hero: {
      headline: 'Reliable plumbing for La Center homes and small businesses.',
      subheading: 'Locally trusted, licensed and insured service professionals.',
      promotionKey: 'laCenterBonus' as PromotionKey
    },
    services: [
      { title: 'Emergency Plumbing La Center', description: 'After-hours & weekend emergency response.', href: '/services/emergency-plumbing' },
      { title: 'La Center Drain Cleaning', description: 'Clog removal, inspection & maintenance.', href: '/services/drain-cleaning' },
      { title: 'Water Heater Service La Center', description: 'Repair & replacement for residential systems.', href: '/services/water-heater-repair' },
      { title: 'La Center Commercial Plumbing', description: 'Small office & hospitality plumbing services.', href: '/services/commercial-plumbing' }
    ],
    neighborhoods: ['Downtown La Center','East Fork Area','Highland Road','NW La Center Rd','Timmen Road','Pacific Highway Vicinity'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86250.122!2d-122.685!3d45.8622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495bc612e1aaec5%3A0x8c5d2c86bcb5db9!2sLa%20Center%2C%20WA!5e0!3m2!1sen!2sus!4v1678886472427!5m2!1sen!2sus',
    testimonials: [
      { author: 'Abby H.', area: 'Downtown', quote: 'Solved a chronic low pressure issue quickly.' }
    ],
    cta: {
      headline: "La Center's Local Plumber",
      blurb: 'Friendly, dependable plumbing service for La Center residents.'
    }
  },
  {
    slug: 'woodland-plumber',
    name: 'Woodland',
    meta: {
      title: 'Woodland WA Plumber | Local Plumbing Experts | All County Plumbing',
      description: 'Professional plumber in Woodland for repairs, drain service & water heaters. Call now!',
      keywords: 'Woodland plumber, plumber Woodland WA, emergency plumbing Woodland, drain cleaning Woodland'
    },
    hero: {
      headline: 'Trusted plumbing across Woodland & nearby rural properties.',
      subheading: 'Comprehensive plumbing services for homes, shops & small businesses.',
      promotionKey: 'woodlandCredit' as PromotionKey
    },
    services: [
      { title: 'Emergency Plumbing Woodland', description: 'Rapid dispatch for urgent plumbing failures.', href: '/services/emergency-plumbing' },
      { title: 'Woodland Drain Cleaning', description: 'Sewer & drain cleaning, camera inspection & line locating.', href: '/services/drain-cleaning' },
      { title: 'Water Heater Service Woodland', description: 'Tank, tankless & maintenance plans.', href: '/services/water-heater-repair' },
      { title: 'Woodland Commercial Plumbing', description: 'Shops, food service & agricultural support plumbing.', href: '/services/commercial-plumbing' }
    ],
    neighborhoods: ['Downtown Woodland','Cedar Creek Area','Green Mountain','Horseshoe Lake','Old Town Woodland','Goat Mountain Corridor'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86390.222!2d-122.752!3d45.9061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495bd7e2cd77b7f%3A0xf0d09e02a1b6589!2sWoodland%2C%20WA!5e0!3m2!1sen!2sus!4v1678886472427!5m2!1sen!2sus',
    testimonials: [
      { author: 'Jason K.', area: 'Horseshoe Lake', quote: 'Professional and efficient—highly recommend.' },
      { author: 'Renee L.', area: 'Downtown', quote: 'Explained everything clearly and delivered quality work.' }
    ],
    cta: {
      headline: "Woodland's Plumbing Pros",
      blurb: 'Local expertise you can trust for dependable Woodland plumbing.'
    }
  },
  {
    slug: 'washougal-plumber',
    name: 'Washougal',
    meta: {
      title: 'Washougal WA Plumber | River Community Plumbing | All County Plumbing',
      description: 'Washougal plumbing services: emergency repairs, drains, heaters & more. Call (360) 883-2506.',
      keywords: 'Washougal plumber, plumber Washougal WA, emergency plumbing Washougal, drain cleaning Washougal'
    },
    hero: {
      headline: 'Serving Washougal riverfront & hillside neighborhoods.',
      subheading: 'Swift, courteous plumbing services for Washougal residents & businesses.',
      promotionKey: 'washougalOffer' as PromotionKey
    },
    services: [
      { title: 'Emergency Plumbing Washougal', description: '24/7 emergency leak & failure response.', href: '/services/emergency-plumbing' },
      { title: 'Washougal Drain Cleaning', description: 'Drain & sewer hydro jetting and camera inspections.', href: '/services/drain-cleaning' },
      { title: 'Water Heater Service Washougal', description: 'Efficient repair & replacement for water heating systems.', href: '/services/water-heater-repair' },
      { title: 'Washougal Commercial Plumbing', description: 'Retail storefront & light industrial plumbing support.', href: '/services/commercial-plumbing' }
    ],
    neighborhoods: ['Downtown Washougal','Riverview','Lookout Ridge','Northside','Port Marina Area','Hathaway Hills','Evergreen Way','13th Street Corridor'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86310.332!2d-122.345!3d45.5827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495976883b0e92d%3A0x79dcd51cb1dcaf0!2sWashougal%2C%20WA!5e0!3m2!1sen!2sus!4v1678886472427!5m2!1sen!2sus',
    testimonials: [
      { author: 'Dana F.', area: 'Lookout Ridge', quote: 'Responsive and courteous—fixed our leak promptly.' }
    ],
    cta: {
      headline: "Washougal's Plumbing Team",
      blurb: 'Dedicated to quality, reliable plumbing service in Washougal.'
    }
  },
  {
    slug: 'longview-plumber',
    name: 'Longview',
    meta: {
      title: 'Longview WA Plumber | Professional Plumbing Services | All County Plumbing',
      description: 'Serving Longview with dependable plumbing repairs, drain cleaning & water heater service.',
      keywords: 'Longview plumber, plumber Longview WA, emergency plumbing Longview, drain cleaning Longview'
    },
    hero: {
      headline: 'Comprehensive residential & light commercial plumbing across Longview.',
      subheading: 'Trusted plumbing expertise for Longview established & newer neighborhoods.',
      promotionKey: 'longviewValue' as PromotionKey
    },
    services: [
      { title: 'Emergency Plumbing Longview', description: 'Day or night emergency plumbing response.', href: '/services/emergency-plumbing' },
      { title: 'Longview Drain Cleaning', description: 'Drain clog clearing & sewer cleaning services.', href: '/services/drain-cleaning' },
      { title: 'Water Heater Service Longview', description: 'Repair & replacement for tank & tankless systems.', href: '/services/water-heater-repair' },
      { title: 'Longview Commercial Plumbing', description: 'Office & retail plumbing maintenance & repair.', href: '/services/commercial-plumbing' }
    ],
    neighborhoods: ['Downtown Longview','Columbia Heights','Mint Valley','West Longview','Olympic West','Cascade Way','Industrial Way Corridor'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86750.667!2d-122.980!3d46.1382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5493b8c714c30961%3A0x6f2ef749acd972d6!2sLongview%2C%20WA!5e0!3m2!1sen!2sus!4v1678886472427!5m2!1sen!2sus',
    testimonials: [
      { author: 'Olivia H.', area: 'Mint Valley', quote: 'Diagnosed and fixed a pressure issue quickly.' },
      { author: 'James C.', area: 'Downtown', quote: 'Great service—fair pricing and professional staff.' }
    ],
    cta: {
      headline: "Longview's Plumbing Experts",
      blurb: 'Quality-focused plumbing services for Longview residents & businesses.'
    }
  }
];

export function getServiceArea(slug: string) {
  return serviceAreas.find(sa => sa.slug === slug);
}
