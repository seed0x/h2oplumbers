import { Metadata } from 'next';
import Link from 'next/link';
import { Star, MapPin, Clock, Shield, Users, Wrench, Home, Building2, Search, Phone, Tag, Droplets, Flame, Wrench as WrenchAlt, Hammer } from 'lucide-react';
import { FloatingBookButton } from '../components/ui/floating-book-button';
import { SocialProofNotifications } from '../components/ui/social-proof-notifications';
import { UrgencyIndicators } from '../components/ui/urgency-indicators';
import { RecentlyViewedServices } from '../components/ui/recently-viewed-services';
import { DiscountBanner } from '../components/ui/discount-banner';
import { BackToTopButton } from '../components/ui/back-to-top';
import { SkipNavigation } from '../components/ui/accessibility-utils';
import { FloatingElementsManager } from '../components/ui/floating-elements-manager';
import { StickyCtaBar } from '../components/ui/sticky-cta-bar';
import { H2OHero, H2OCouponBanner } from '@/components/sections/h2o-hero';
import { TrustBadgeSection } from '@/components/sections/trust-badge-section';
import { HomeServiceCards } from '../components/ui/animated-service-cards';
import { MeetTheTeamSection } from '@/components/sections/meet-the-team';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section';
import { BookingCTA, PhoneCTA, CTAButton } from '@/components/ui/cta-button';
import { FloatingShareButton } from '@/components/social/social-share';
import { generateSocialMeta, socialMetaTemplates } from '@/lib/social-meta';
import { MasterButton } from '@/components/ui/master-button';
import { CouponSection } from "@/components/sections/coupon-section";
import { LocalBusinessStructuredData } from '@/components/seo/structured-data';
import { BUSINESS_DATA } from '@/lib/business-data';
import { getPromotion, PromotionDefinition } from '@/config/promotions';
import { coupons } from '@/config/coupons';
import { WaterAnimation, WaterGradientFlowMedium } from '@/components/ui/water-animation';
import { HeroesDiscountSection } from '@/components/sections/heroes-discount-section';
import { HomeContent } from '@/components/pages/home-content';
import { HomeContentSnap } from '@/components/pages/home-content-snap';
import { SmoothScroll } from '@/components/ui/smooth-scroll';

export const metadata: Metadata = generateSocialMeta({
  ...socialMetaTemplates.homepage,
});

export default function HomePage() {
  // Get active coupons from config - show only 2 featured
  const activeCoupons = coupons.filter(coupon => 
    new Date(coupon.expiryDate) > new Date() && coupon.active
  ).slice(0, 2); // Show max 2 featured coupons
  
  const heroPromotion = getPromotion('waterHeaterHero');
  const fallbackPromotion: PromotionDefinition = {
    id: 'fallbackHero',
    title: 'Family Service Savings',
    discount: '$75 OFF Services Over $500',
    description: 'New customers save on qualifying projects',
    code: 'SAVE75',
    ctaText: 'Call to Redeem',
    ctaLink: 'tel:+13608832506',
    expiresAt: '2025-12-31',
    category: 'General',
    variant: 'hero',
  };

  const selectedPromotion = heroPromotion ?? fallbackPromotion;
  const isFallbackPromotion = !heroPromotion;
  const formatDate = (iso?: string) =>
    iso ? new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : undefined;
  const validFromLabel = formatDate(selectedPromotion.validFrom);
  const expiresLabel = formatDate(selectedPromotion.expiresAt);
  const detailSegments = isFallbackPromotion
    ? [
        selectedPromotion.description,
        expiresLabel ? `Valid through ${expiresLabel}` : null,
        'Cannot be combined with other offers',
      ]
    : [
        selectedPromotion.description,
        validFromLabel ? `Valid from ${validFromLabel}` : null,
        expiresLabel ? `Valid through ${expiresLabel}` : null,
        'Cannot be combined with other offers',
      ];
  const detailsLine = detailSegments.filter(Boolean).join(' • ');
  const badgeLabel = selectedPromotion.discount;
  const headingLabel = selectedPromotion.title;
  const couponCode = selectedPromotion.code ?? 'SAVE75';
  const ctaLink = selectedPromotion.ctaLink ?? 'tel:+13608832506';
  const ctaText = selectedPromotion.ctaText ?? 'Call to Redeem';
  const isTelLink = ctaLink.startsWith('tel:');

  // Map coupons to display format with icons and badges
  const couponDisplayData = activeCoupons.map((coupon, index) => ({
    ...coupon,
    badge: index === 0 ? 'Most Popular' : 'Limited Time',
    icon: index === 0 ? 'droplets' : 'flame',
  }));
  
  const serviceHighlights = [
    {
      title: 'Residential Services',
      description:
        'Complete home plumbing solutions from emergency repairs to fixture upgrades, with professional service you can trust.',
      href: '/residential',
      icon: 'home',
      category: 'Homes & Condos',
    },
    {
      title: 'Commercial Plumbing',
      description:
        'Reliable plumbing support for offices, restaurants, retail spaces, and facilities that need minimal downtime.',
      href: '/commercial',
      icon: 'building2',
      category: 'Businesses & Facilities',
    },
    {
      title: 'Remodels & Renovations',
      description:
        'Expert plumbing for kitchen and bath remodels, tenant improvements, and full property renovations.',
      href: '/tenant-improvements',
      icon: 'hammer',
      category: 'Renovation Projects',
    },
  ];

  return (
    <>
      <LocalBusinessStructuredData />
      <SmoothScroll />
      <SkipNavigation />
      <FloatingShareButton />
      <FloatingElementsManager>
        {{
          discountBanner: <DiscountBanner />,
          socialProof: <SocialProofNotifications />,
          floatingBook: null,
          urgency: null,
          recentlyViewed: <RecentlyViewedServices />,
          backToTop: <BackToTopButton />,
        }}
      </FloatingElementsManager>
      <StickyCtaBar />
      <HomeContentSnap 
        serviceHighlights={serviceHighlights}
      />
    </>
  );
}
