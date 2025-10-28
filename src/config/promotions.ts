// Central promotions configuration
// Provides structured definitions for coupons/promotions used across the site.
// This helps ensure consistency, enables A/B testing hooks later, and keeps SEO data centralized.

export interface PromotionDefinition {
  id: string;
  title: string;
  discount: string; // Human readable discount label
  description: string;
  code?: string;
  ctaText: string;
  ctaLink: string;
  expiresAt?: string; // ISO date
  validFrom?: string; // ISO date
  category?: string; // For structured data classification
  variant?: 'hero' | 'inline' | 'compact' | 'light';
  includeStructuredData?: boolean;
}

export const promotions: Record<string, PromotionDefinition> = {
  waterHeaterHero: {
    id: 'waterHeaterHero',
    title: 'Limited Time Family Offer',
    discount: '$50 OFF',
    description: 'Any Water Heater Installation or Replacement when booked this month.',
    code: 'SAVE50',
    ctaText: 'Claim Savings',
    ctaLink: '/booking',
    expiresAt: '2025-11-30',
    validFrom: '2025-09-01',
    category: 'Water Heater',
    variant: 'hero'
  },
  waterHeaterReminderCompact: {
    id: 'waterHeaterReminderCompact',
    title: 'Still Thinking It Over?',
    discount: '$50 OFF',
    description: 'Lock in your water heater install savings before the offer ends.',
    code: 'SAVE50',
    ctaText: 'Book & Save',
    ctaLink: '/booking',
    expiresAt: '2025-11-30',
    validFrom: '2025-09-01',
    category: 'Water Heater',
    variant: 'compact'
  },
  seasonalLight: {
    id: 'seasonalLight',
    title: 'Fall Plumbing Tune-Up',
    discount: 'FREE INSPECTION',
    description: 'Schedule a full system inspection with any service call. Limited seasonal offer.',
    ctaText: 'Schedule Inspection',
    ctaLink: '/booking',
    expiresAt: '2025-12-15',
    validFrom: '2025-09-15',
    category: 'Seasonal',
    variant: 'light'
  },
  // Service Area Promotions
  vancouverHomeowner: {
    id: 'vancouverHomeowner',
    title: 'Vancouver Homeowner Special',
    discount: '$75 OFF',
    description: 'Any plumbing service of $500 or more in Vancouver, WA.',
    code: 'VANCOUVER75',
    ctaText: 'Claim Your Discount',
    ctaLink: '/booking?coupon=VANCOUVER75',
    expiresAt: '2025-12-31',
    category: 'Location',
    variant: 'hero'
  },
  camasNewCustomer: {
    id: 'camasNewCustomer',
    title: 'Camas New Customer Offer',
    discount: '$50 OFF',
    description: 'Any plumbing repair over $350 in Camas.',
    code: 'CAMAS50',
    ctaText: 'Redeem Offer',
    ctaLink: '/booking?coupon=CAMAS50',
    expiresAt: '2025-11-30',
    category: 'Location',
    variant: 'hero'
  },
  battleGroundSavings: {
    id: 'battleGroundSavings',
    title: 'Battle Ground Savings',
    discount: '$65 OFF',
    description: 'Plumbing service of $450+ in Battle Ground.',
    code: 'BATTLEGROUND65',
    ctaText: 'Apply Coupon',
    ctaLink: '/booking?coupon=BATTLEGROUND65',
    expiresAt: '2025-12-15',
    category: 'Location',
    variant: 'hero'
  },
  ridgefieldIntro: {
    id: 'ridgefieldIntro',
    title: 'Ridgefield Intro Offer',
    discount: '$55 OFF',
    description: 'Plumbing repair $400+ in Ridgefield.',
    code: 'RIDGEFIELD55',
    ctaText: 'Use This Offer',
    ctaLink: '/booking?coupon=RIDGEFIELD55',
    expiresAt: '2026-12-31',
    category: 'Location',
    variant: 'hero'
  },
  laCenterBonus: {
    id: 'laCenterBonus',
    title: 'La Center Customer Bonus',
    discount: '$40 OFF',
    description: 'Any plumbing service $300+ in La Center.',
    code: 'LACENTER40',
    ctaText: 'Claim Bonus',
    ctaLink: '/booking?coupon=LACENTER40',
    expiresAt: '2026-12-31',
    category: 'Location',
    variant: 'hero'
  },
  woodlandCredit: {
    id: 'woodlandCredit',
    title: 'Woodland Service Credit',
    discount: '$60 OFF',
    description: 'Repair or install $400+ in Woodland.',
    code: 'WOODLAND60',
    ctaText: 'Use Credit',
    ctaLink: '/booking?coupon=WOODLAND60',
    expiresAt: '2025-12-01',
    category: 'Location',
    variant: 'hero'
  },
  washougalOffer: {
    id: 'washougalOffer',
    title: 'Washougal Plumbing Offer',
    discount: '$50 OFF',
    description: 'Service $350+ in Washougal.',
    code: 'WASHOUGAL50',
    ctaText: 'Claim Offer',
    ctaLink: '/booking?coupon=WASHOUGAL50',
    expiresAt: '2025-11-15',
    category: 'Location',
    variant: 'hero'
  },
  longviewValue: {
    id: 'longviewValue',
    title: 'Longview Value Coupon',
    discount: '$70 OFF',
    description: 'Any service $500+ in Longview.',
    code: 'LONGVIEW70',
    ctaText: 'Get Discount',
    ctaLink: '/booking?coupon=LONGVIEW70',
    expiresAt: '2025-12-31',
    category: 'Location',
    variant: 'hero'
  }
};

export type PromotionKey = keyof typeof promotions;

export function getPromotion(key: PromotionKey) {
  return promotions[key];
}
