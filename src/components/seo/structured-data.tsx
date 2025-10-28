import { BUSINESS_DATA } from '@/lib/business-data'

interface LocalBusinessSchema {
  name: string
  description: string
  url: string
  telephone: string
  email: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo: {
    latitude: number
    longitude: number
  }
  openingHours: string[]
  serviceArea: string[]
  priceRange: string
  paymentAccepted: string[]
}

// Enhanced structured data component for Vancouver WA local SEO

export function LocalBusinessStructuredData() {
  if (!BUSINESS_DATA || !BUSINESS_DATA.website) {
    console.error('LocalBusinessStructuredData missing business data', BUSINESS_DATA)
    return null
  }
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'PlumbingService'], // Multiple types for better categorization
    '@id': `${BUSINESS_DATA.website}#business`,
    name: BUSINESS_DATA.name,
    alternateName: 'All County Plumbing',
    description: `Professional plumbing services in ${BUSINESS_DATA.serviceArea.primary} and ${BUSINESS_DATA.serviceArea.counties.join(', ')}. Family-owned since ${BUSINESS_DATA.established} with ${BUSINESS_DATA.yearsInBusiness} years of experience in residential, commercial, and new construction plumbing.`,
    url: BUSINESS_DATA.website,
    telephone: BUSINESS_DATA.phoneRaw,
    email: BUSINESS_DATA.email,
    image: `${BUSINESS_DATA.website}/logo.png`,
    logo: `${BUSINESS_DATA.website}/logo.png`,
    
    // Enhanced address with coordinates
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_DATA.address.street,
      addressLocality: BUSINESS_DATA.address.city,
      addressRegion: BUSINESS_DATA.address.state,
      postalCode: BUSINESS_DATA.address.zip,
      addressCountry: 'US'
    },
    
    // Precise Vancouver WA coordinates
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_DATA.address.coordinates.latitude,
      longitude: BUSINESS_DATA.address.coordinates.longitude
    },
    
    // Enhanced opening hours
    openingHours: BUSINESS_DATA.hours.structured,
    
    // Detailed service area for local SEO
    areaServed: BUSINESS_DATA.serviceArea.cities.map(city => ({
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'State',
        name: 'Washington'
      }
    })),
    
    // Service specialties
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Plumbing Services',
      itemListElement: BUSINESS_DATA.specialties.map((specialty, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: specialty,
          description: `Professional ${specialty.toLowerCase()} services in ${BUSINESS_DATA.serviceArea.primary}`,
          serviceType: specialty
        },
        position: index + 1
      }))
    },
    
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Debit Card'],
    
    // Customer rating
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1'
    },
    
    // Business credentials
    knowsAbout: BUSINESS_DATA.localKeywords,
    
    // Social media presence
    sameAs: [
      BUSINESS_DATA.socialMedia.facebook,
      BUSINESS_DATA.socialMedia.google,
      BUSINESS_DATA.socialMedia.nextdoor
    ],
    
    // Business attributes
    foundingDate: BUSINESS_DATA.established,
    slogan: 'Your Trusted Vancouver WA Plumbing Experts Since 2004'
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
    />
  )
}

export function PlumbingServiceStructuredData() {
  const services = [
    {
      name: 'Emergency Plumbing Repair',
  description: 'Emergency plumbing assistance for burst pipes, leaks, and urgent repairs during business hours',
      serviceType: 'Emergency Repair'
    },
    {
      name: 'Drain Cleaning',
      description: 'Professional drain cleaning and clog removal services',
      serviceType: 'Maintenance'
    },
    {
      name: 'Water Heater Installation',
      description: 'Water heater installation, repair, and replacement services',
      serviceType: 'Installation'
    },
    {
      name: 'Pipe Repair and Replacement',
      description: 'Comprehensive pipe repair and replacement services for all plumbing systems',
      serviceType: 'Repair'
    }
  ]

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Plumbing Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'All County Plumbers',
      '@id': '#business'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Plumbing Services',
      itemListElement: services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
          serviceType: service.serviceType
        },
        position: index + 1
      }))
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
    />
  )
}

export function FAQStructuredData() {
  const faqs = [
    {
  question: 'Do you offer emergency plumbing services?',
  answer: 'We prioritize urgent issues like burst pipes, major leaks, and sewer backups during business hours. Call us to check current availability.'
    },
    {
      question: 'What areas do you service?',
      answer: 'We service all counties in the region, including residential and commercial properties. Use our service area checker to confirm coverage for your location.'
    },
    {
      question: 'How much do plumbing services cost?',
      answer: 'Plumbing costs vary depending on the type of service and complexity. Use our cost calculator for an estimate, or contact us for a detailed quote. We provide transparent pricing with no hidden fees.'
    },
    {
      question: 'Are your plumbers licensed and insured?',
      answer: 'Yes, all our plumbers are fully licensed, bonded, and insured. We maintain the highest standards of professionalism and workmanship.'
    },
    {
      question: 'Do you provide warranties on your work?',
      answer: 'Yes, we provide warranties on all our plumbing work and the parts we install. Warranty terms vary by service type and are discussed before starting any work.'
    }
  ]

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
    />
  )
}

export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url: string }> }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
    />
  )
}
