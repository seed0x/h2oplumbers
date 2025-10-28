import { NavItem, ServiceItem, ContactInfo } from '@/types/index';
import { BUSINESS_DATA } from '@/lib/business-data';

export const siteConfig = {
  name: BUSINESS_DATA.name,
  description: "Professional plumbing services for residential and commercial properties in Vancouver, WA and surrounding areas. Get 10% Off Any Plumbing Services Today!",
  url: "https://h2oplumbers.com",
  ogImage: "/images/og-image.jpg",
  links: {
    facebook: "https://www.facebook.com/h2oplumbers",
    twitter: "https://twitter.com/h2oplumbers",
    instagram: "https://www.instagram.com/h2oplumbers",
    yelp: "https://www.yelp.com/biz/h2o-plumbing-vancouver",
    sisterCompany: "https://h2oplumbers.com",
  }
};

export const contactInfo: ContactInfo = {
  address: BUSINESS_DATA.address.full,
  city: BUSINESS_DATA.address.city,
  state: BUSINESS_DATA.address.state,
  zipCode: BUSINESS_DATA.address.zip,
  phone: BUSINESS_DATA.phone,
  phoneLink: `tel:${BUSINESS_DATA.phoneRaw}`,
  email: BUSINESS_DATA.email,
  hours: [
    { days: "Monday-Friday", hours: "7:00 AM - 3:30 PM" },
    { days: "Saturday-Sunday", hours: "Closed" }
  ],
  license: BUSINESS_DATA.licenses.display,
  founded: BUSINESS_DATA.established,
  socialLinks: {
    facebook: "https://www.facebook.com/h2oplumbers",
    twitter: "https://twitter.com/h2oplumbers",
    instagram: "https://www.instagram.com/h2oplumbers",
    yelp: "https://www.yelp.com/biz/h2o-plumbing-vancouver",
  }
};

export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Residential",
        href: "/residential",
      },
      {
        title: "Commercial",
        href: "/commercial",
      },
      {
        title: "New Construction",
        href: "/new-construction",
      },
    ],
  },
  {
    title: "Service Areas",
    href: "/service-areas",
    children: [
      {
        title: "Vancouver",
        href: "/service-areas/vancouver-wa-plumber",
      },
      {
        title: "Battle Ground",
        href: "/service-areas/battle-ground-plumber",
      },
      {
        title: "Camas",
        href: "/service-areas/camas-plumber",
      },
      {
        title: "Washougal",
        href: "/service-areas/washougal-plumber",
      },
      {
        title: "Ridgefield",
        href: "/service-areas/ridgefield-plumber",
      },
      {
        title: "La Center",
        href: "/service-areas/la-center-plumber",
      },
    ],
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Coupons",
    href: "/coupons",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const services: Record<string, ServiceItem[]> = {
  residential: [
    {
      id: "residential-plumbing",
      title: "Residential Plumbing",
      description: "Complete plumbing services for your home including repairs, installations, and maintenance.",
      icon: "home",
      slug: "residential-plumbing",
      metaData: {
        title: "Residential Plumbing Services | H2O Plumbing",
        description: "Professional residential plumbing services including repairs, installations, and maintenance for homeowners in Battle Ground, WA.",
        keywords: "residential plumbing, home plumbing services, bathroom plumbing, kitchen plumbing, Battle Ground",
      }
    },
    {
      id: "plumbing-repipes",
      title: "Plumbing Repipes",
      description: "Complete home repiping services with copper or PEX pipes.",
      icon: "pipe",
      slug: "plumbing-repipes",
      metaData: {
        title: "Home Repiping Services | H2O Plumbing",
        description: "Professional home repiping services with copper or PEX pipes for residential properties in Battle Ground, WA.",
        keywords: "repiping services, copper pipes, PEX pipes, residential repiping, whole house repipe",
      }
    },
    {
      id: "plumbing-remodel",
      title: "Bathroom & Kitchen Remodel",
      description: "Expert plumbing services for bathroom and kitchen remodeling projects.",
      icon: "bath",
      slug: "plumbing-remodel",
      metaData: {
        title: "Bathroom & Kitchen Remodel Plumbing | H2O Plumbing",
        description: "Professional plumbing services for bathroom and kitchen remodeling projects in Battle Ground, WA.",
        keywords: "bathroom remodel, kitchen remodel, plumbing remodel, fixture installation",
      }
    },
  ],
  commercial: [
    {
      id: "commercial-plumbing",
      title: "Commercial Plumbing",
      description: "Comprehensive plumbing services for businesses, offices, and commercial properties.",
      icon: "building",
      slug: "commercial-plumbing",
      metaData: {
        title: "Commercial Plumbing Services | H2O Plumbing",
        description: "Professional commercial plumbing services for businesses and commercial properties in Battle Ground, WA.",
        keywords: "commercial plumbing, business plumbing, office plumbing, commercial property",
      }
    },
    {
      id: "drain-cleaning",
      title: "Drain Cleaning",
      description: "Professional drain cleaning services including hydro jetting and snake drain cleaning.",
      icon: "drain",
      slug: "drain-cleaning",
      metaData: {
        title: "Commercial Drain Cleaning Services | H2O Plumbing",
        description: "Professional drain cleaning services including hydro jetting and snake drain cleaning for commercial properties in Battle Ground, WA.",
        keywords: "drain cleaning, hydro jetting, snake drain cleaning, clogged drains",
      }
    },
    {
      id: "water-heater-services",
      title: "Water Heater Services",
      description: "Commercial water heater installation, repair, and maintenance services.",
      icon: "water",
      slug: "water-heater-services",
      metaData: {
        title: "Commercial Water Heater Services | H2O Plumbing",
        description: "Professional commercial water heater installation, repair, and maintenance services in Battle Ground, WA.",
        keywords: "commercial water heater, water heater repair, water heater installation",
      }
    },
  ],
  newConstruction: [
    {
      id: "new-construction-plumbing",
      title: "New Construction Plumbing",
      description: "Complete plumbing solutions for new residential and commercial construction projects.",
      icon: "construction",
      slug: "new-construction-plumbing",
      metaData: {
        title: "New Construction Plumbing Services | H2O Plumbing",
        description: "Professional plumbing services for new residential and commercial construction projects in Battle Ground, WA.",
        keywords: "new construction plumbing, new build plumbing, construction projects",
      }
    },
    {
      id: "custom-home-plumbing",
      title: "Custom Home Plumbing",
      description: "Specialized plumbing solutions for custom home construction projects.",
      icon: "home",
      slug: "custom-home-plumbing",
      metaData: {
        title: "Custom Home Plumbing Services | H2O Plumbing",
        description: "Professional plumbing solutions for custom home construction projects in Battle Ground, WA.",
        keywords: "custom home plumbing, luxury home plumbing, custom build plumbing",
      }
    },
    {
      id: "commercial-construction",
      title: "Commercial Construction",
      description: "Complete plumbing systems for new commercial construction projects.",
      icon: "building",
      slug: "commercial-construction",
      metaData: {
        title: "Commercial Construction Plumbing | H2O Plumbing",
        description: "Professional plumbing systems installation for new commercial construction projects in Battle Ground, WA.",
        keywords: "commercial construction plumbing, new business plumbing, commercial build",
      }
    },
  ],
};


