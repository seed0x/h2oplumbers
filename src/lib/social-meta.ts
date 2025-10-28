import type { Metadata } from 'next';
import { BUSINESS_DATA } from './business-data';

interface SocialMetaProps {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  siteName?: string
  locale?: string
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

export function generateSocialMeta({
  title,
  description,
  image = '/images/social/all-county-plumbing-social.jpg',
  url,
  type = 'website',
  siteName = 'All County Plumbing',
  locale = 'en_US',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = []
}: SocialMetaProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://all-county-plumbing.com'
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteName}`,
          type: 'image/jpeg',
        }
      ],
      locale,
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && type === 'article' && { authors: [author] }),
      ...(section && type === 'article' && { section }),
      ...(tags.length > 0 && type === 'article' && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@AllCountyPLBG', // Update with actual Twitter handle
      creator: '@AllCountyPLBG',
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    // Rich Cards for Google
    other: {
      'fb:app_id': process.env.FACEBOOK_APP_ID || '',
      'ia:markup_url': fullUrl,
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': siteName,
      'application-name': siteName,
      'msapplication-TileColor': '#dc2626', // Brand red color
      'theme-color': '#dc2626',
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}

// Pre-configured metadata for common pages
export const socialMetaTemplates = {
  homepage: {
    title: 'All County Plumbing | Licensed Plumbers in Vancouver, WA & Clark County',
    description: 'Expert plumbing services in Vancouver, WA. 24/7 emergency plumbers near you, drain cleaning, water heater repair, repiping & more. Licensed & insured. Serving Clark County since 2004. Call (360) 883-2506.',
    image: '/images/social/homepage-social.jpg',
    url: '/',
  },
  services: {
    title: 'Professional Plumbing Services | All County Plumbing',
    description: 'Complete plumbing services: emergency repairs, drain cleaning, water heater installation, leak repair & more. Licensed, insured, and available 24/7.',
    image: '/images/social/services-social.jpg',
    url: '/services',
  },
  emergency: {
    title: '24/7 Emergency Plumbing Services | All County Plumbing',
    description: 'Emergency plumbing services available 24/7 in Southwest Washington. Fast response, licensed plumbers. Call (360) 883-2506 for immediate help.',
    image: '/images/social/emergency-social.jpg',
    url: '/services/emergency-plumbing',
  },
  contact: {
    title: 'Contact All County Plumbing | Get Your Free Quote Today',
    description: 'Contact All County Plumbing for professional plumbing services in Southwest Washington. Get your free quote today. Call (360) 883-2506.',
    image: '/images/social/contact-social.jpg',
    url: '/contact',
  },
  reviews: {
    title: 'Customer Reviews | All County Plumbing',
    description: 'Read what customers say about All County Plumbing. 4.9/5 stars on Google, Yelp & Facebook. Trusted licensed plumbers since 2004.',
    image: '/images/social/reviews-social.jpg',
    url: '/reviews',
  },
}

// Schema.org for social media profiles
export const socialProfileSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'All County Plumbing',
  alternateName: 'All County Plumbers',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://all-county-plumbing.com',
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://all-county-plumbing.com'}/images/logos/all-county-plumbing-logo.png`,
  sameAs: [
    'https://www.facebook.com/AllCountyPlumbing', // Update with actual URLs
    'https://www.instagram.com/allcountyplumbing',
    'https://www.linkedin.com/company/all-county-plumbing',
    'https://www.youtube.com/channel/UCAllCountyPlumbing',
    'https://twitter.com/AllCountyPLBG',
    'https://www.yelp.com/biz/all-county-plumbing',
    'https://nextdoor.com/pages/all-county-plumbing',
    'https://www.bbb.org/profiles/all-county-plumbing'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: BUSINESS_DATA.phoneRaw,
    contactType: 'customer service',
    availableLanguage: 'English',
    areaServed: [
      'Battle Ground, WA',
      'Vancouver, WA', 
      'Camas, WA',
      'Washougal, WA',
      'Ridgefield, WA',
      'La Center, WA',
      'Woodland, WA',
      'Yacolt, WA'
    ]
  },
  foundingDate: '2004',
  description: 'Licensed plumbing contractors providing emergency repairs, drain cleaning, water heater services and complete plumbing solutions in Southwest Washington since 2004.',
}
