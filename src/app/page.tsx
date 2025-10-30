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
  const couponIcons = [Droplets, Flame]; // Lucide icons for each coupon
  const couponDisplayData = activeCoupons.map((coupon, index) => ({
    ...coupon,
    badge: index === 0 ? 'Most Popular' : 'Limited Time',
    IconComponent: couponIcons[index] || WrenchAlt,
  }));
  
  const serviceHighlights = [
    {
      title: 'Residential Services',
      description:
        'Complete home plumbing solutions from emergency repairs to fixture upgrades, with professional service you can trust.',
      href: '/residential',
      IconComponent: Home,
      category: 'Homes & Condos',
    },
    {
      title: 'Commercial Plumbing',
      description:
        'Reliable plumbing support for offices, restaurants, retail spaces, and facilities that need minimal downtime.',
      href: '/commercial',
      IconComponent: Building2,
      category: 'Businesses & Facilities',
    },
    {
      title: 'Remodels & Renovations',
      description:
        'Expert plumbing for kitchen and bath remodels, tenant improvements, and full property renovations.',
      href: '/tenant-improvements',
      IconComponent: Hammer,
      category: 'Renovation Projects',
    },
  ];

  return (
    <>
      {/* <LocalBusinessStructuredData /> */}
      <SkipNavigation />
      <FloatingShareButton />
      
      {/* Optimized floating elements with scroll-based visibility */}
      <FloatingElementsManager>
        {{
          discountBanner: <DiscountBanner />,
          socialProof: <SocialProofNotifications />,
          floatingBook: <FloatingBookButton />,
          urgency: <UrgencyIndicators />,
          recentlyViewed: <RecentlyViewedServices />,
          backToTop: <BackToTopButton />,
        }}
      </FloatingElementsManager>
      
      {/* Sticky CTA bar appears after 50% scroll */}
      <StickyCtaBar />
      
      {/* Animated Water Background */}
      <WaterGradientFlowMedium />
      
      <H2OHero />
      
      {/* H2O Coupon Banner */}
      <H2OCouponBanner />
      
      {/* Unified Services Section */}
      {/* Tailwind: section-padding helper applies consistent vertical rhythm; bg-white ensures clean separation from gradient banner */}
      <section className="relative section-padding bg-gradient-to-b from-slate-50 to-white">
        {/* Tailwind: container-padding matches horizontal spacing scale between sections */}
        <div className="container mx-auto container-padding">
          {/* Tailwind: responsive flex block keeps intro copy and link aligned while adding generous gap */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
            <div>
              {/* Tailwind: rounded-full badge with tracking emphasizes the service label */}
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-brand-cyan" aria-label="Service expertise">
                <Wrench className="h-4 w-4" />
                Service Expertise
              </div>
              <h2 className="mt-6 text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold uppercase tracking-tight text-slate-900">
                Your Complete Plumbing Solution
              </h2>
              <p className="mt-4 max-w-2xl text-base md:text-lg text-slate-600">
                Professional plumbing services and commercial solutions serving Vancouver and Clark County since 2009.
              </p>
            </div>
            {/* Tailwind: uppercase tracking and hover state style the "View All Services" link as a secondary CTA */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 self-start text-sm font-semibold uppercase tracking-[0.25em] text-brand-cyan hover:text-brand-cyan-dark transition-colors"
            >
              View All Services
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Tailwind: responsive grid renders one card per row on mobile, scaling to three across on desktop */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceHighlights.map((service) => (
              <article
                key={service.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                {/* Tailwind: group + hover utilities create elevation and shadow transitions on each service card */}
                {/* Tailwind: fixed height top panel centers the service icon inside a soft neutral background */}
                <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-brand-cyan/5 to-brand-cyan/10 group-hover:from-brand-cyan/10 group-hover:to-brand-cyan/20 transition-colors">
                  <service.IconComponent className="h-16 w-16 text-brand-cyan" />
                </div>
                {/* Tailwind: flex-1 column with generous padding maintains consistent spacing for text and CTA */}
                <div className="flex flex-1 flex-col px-8 pb-8 pt-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-cyan/80">
                    {service.category}
                  </span>
                  <h3 className="mt-3 text-2xl font-heading font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  {/* Tailwind: rounded-full button stretches to full width with lift-on-hover motion */}
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-cyan px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-cyan-dark"
                  >
                    Learn More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MeetTheTeamSection />
      
      {/* Professional Coupon Showcase Section */}
      {/* Tailwind: section-padding with gradient background builds a soft spotlight zone for the offers */}
      <section className="relative section-padding bg-gradient-to-b from-white via-slate-50 to-slate-100">
        {/* Tailwind: container-padding keeps layout aligned with global grid */}
        <div className="container mx-auto container-padding">
          {/* Tailwind: text-center + spacing utilities balance headline and intro copy */}
          <div className="text-center mb-16">
            {/* Badge matching hero and services style */}
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-brand-cyan mb-6" aria-label="Current offers">
              <Tag className="h-4 w-4" />
              Current Offers
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold uppercase tracking-tight text-slate-900 mb-4">Save on Professional Plumbing Services</h2>
            <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
              <strong className="text-brand-cyan">Service-focused value pricing.</strong> Professional plumbing services shouldn't break the bank. 
              Take advantage of our current offers for Vancouver and Clark County businesses and homeowners.
            </p>
          </div>
          
          {/* Tailwind: responsive grid arranges coupon cards with hover lift effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {couponDisplayData.map((coupon, index) => (
              <div key={coupon.code} className="bg-white rounded-2xl shadow-xl border-2 border-dashed border-brand-cyan/30 p-8 relative transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl group">
                <div className="absolute -top-4 left-6 bg-brand-cyan text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                  {coupon.badge}
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-cyan/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-cyan/20 transition-colors">
                    <coupon.IconComponent className="w-8 h-8 text-brand-cyan" />
                  </div>
                  <div className="text-4xl font-heading font-bold text-brand-cyan mb-2">
                    {coupon.title.match(/\$\d+|\d+%|FREE/)?.[0] || 'SAVE'}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-4">{coupon.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    {coupon.description}
                  </p>
                  <div className="bg-brand-cyan/10 border border-brand-cyan/30 rounded-lg p-4 mb-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-cyan mb-1">Coupon Code: {coupon.code}</p>
                    <p className="text-xs text-slate-600">Valid through {new Date(coupon.expiryDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-1" />
                      <span>Licensed & Insured</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Same Day Service</span>
                    </div>
                  </div>
                  <MasterButton 
                    asChild
                    variant="primary"
                    size="lg"
                    className="w-full bg-brand-cyan hover:bg-brand-cyan-dark border border-brand-cyan"
                  >
                    <a href="tel:+13604339743">Call to Schedule</a>
                  </MasterButton>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Offers Link */}
          <div className="text-center mb-12">
            <Link
              href="/coupons"
              className="inline-flex items-center gap-2 text-brand-cyan hover:text-brand-cyan-dark font-bold text-lg transition-colors group"
            >
              View All Current Offers
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
            </Link>
          </div>
          
          {/* Trust Section */}
          {/* Tailwind: dark slate background with low-opacity pattern reinforces credibility */}
          <div className="bg-slate-800 rounded-2xl p-8 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url('/images/hero-background-pattern.svg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Why Our Customers Trust Our Coupons</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <h4 className="font-heading font-semibold mb-2">No Hidden Fees</h4>
                  <p className="text-sm text-slate-300">Transparent pricing with no surprises</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <h4 className="font-heading font-semibold mb-2">Easy to Redeem</h4>
                  <p className="text-sm text-slate-300">Simply mention the code when you call</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <h4 className="font-heading font-semibold mb-2">Same Great Service</h4>
                  <p className="text-sm text-slate-300">No compromise on quality or service</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <h4 className="font-heading font-semibold mb-2">Family Business</h4>
                  <p className="text-sm text-slate-300">Personal service from local owners</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm italic">
                "Coupons cannot be combined with other offers. New customers only for select promotions. 
                All work performed by licensed, insured professionals."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      <HeroesDiscountSection />
      <CouponSection />
      <WhyChooseUsSection />

      {/* Family Business Story Section */}
      {/* Tailwind: deep slate background with pattern overlay creates storytelling contrast */}
      <section className="section-padding bg-slate-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url('/images/hero-background-pattern.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-6xl mx-auto">
            
            {/* Family Leadership Section */}
            <div className="text-center mb-16">
              {/* Badge matching hero and services style */}
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-cyan/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white mb-6" aria-label="Family legacy">
                <Users className="h-4 w-4" />
                Family Legacy
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold uppercase tracking-tight text-white mb-6">Three Decades of Plumbing Excellence</h2>
              <p className="text-base md:text-lg text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                <strong className="text-brand-cyan">The Veach family tradition:</strong> A family business built on trust, quality workmanship,
                and treating every customer like family. Meet the team that's been serving Southwest Washington since 2004.
              </p>
              
              {/* Tailwind: grid toggles from single column storytelling to three-column bios on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                {/* Ron - Founder */}
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <img 
                      src="/images/ron-veach.jpg" 
                      alt="Ron Veach - Founder of H2O Plumbing"
                      className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white/20"
                    />
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-brand-cyan text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Founder
                    </div>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">Ron Veach</h3>
                  <p className="text-brand-cyan font-semibold mb-4">Founder</p>
                  <p className="text-slate-300 leading-relaxed">
                    With decades of experience, Ron built H2O Plumbing on the foundation of honest work, 
                    fair pricing, and treating every customer with respect. His commitment to quality established 
                    our reputation throughout Clark County.
                  </p>
                </div>
                
                {/* Josh - Current Owner */}
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <img 
                      src="/images/fleet/josh-.jpg" 
                      alt="Josh Veach - Owner of H2O Plumbing"
                      className="w-48 h-48 rounded-full object-cover object-center shadow-2xl border-4 border-white/20"
                    />
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-brand-cyan text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Operations
                    </div>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">Josh Veach</h3>
                  <p className="text-brand-cyan font-semibold mb-4">Operations</p>
                  <p className="text-slate-300 leading-relaxed">
                    Learning the trade from his father, Josh brings fresh energy while maintaining the same 
                    family values. Under his leadership, we've expanded our services while keeping our 
                    personal, family-focused approach.
                  </p>
                </div>
                
                {/* Skylee - Operations & Accounting */}
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <img 
                      src="/images/skylee-hewitt.jpg" 
                      alt="Skylee Hewitt - Operations & Accounting at H2O Plumbing"
                      className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white/20"
                    />
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-brand-cyan text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Operations
                    </div>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">Skylee Hewitt</h3>
                  <p className="text-brand-cyan font-semibold mb-4">Operations & Accounting</p>
                  <p className="text-slate-300 leading-relaxed">
                    Growing up in the family business, Skylee brings dedication to managing operations, 
                    billing, and accounting. Her attention to detail ensures smooth service delivery 
                    and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Why We Expanded Section */}
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-tight text-white mb-6">Why We're Now Serving Homeowners</h3>
              <p className="text-base md:text-lg text-slate-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                For over 20 years, we've been the trusted plumbing contractor for builders and developers. 
                Now, homeowners throughout Clark County asked us to bring that same expertise to their homes.
              </p>
              
              {/* Tailwind: evenly spaced grid highlights the three differentiators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="w-16 h-16 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-brand-cyan" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white mb-3">20+ Years of Construction Experience</h4>
                  <p className="text-slate-300 leading-relaxed">
                    We know plumbing systems inside and out from installing thousands of them. 
                    This gives us unique insight into repairs and service.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="w-16 h-16 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-brand-cyan" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white mb-3">Uncompromising Quality</h4>
                  <p className="text-slate-300 leading-relaxed">
                    We bring the same attention to detail and quality materials from our construction 
                    work to every service call in your home.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="w-16 h-16 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-brand-cyan" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white mb-3">Family Values</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Every job is personal to us. We treat your home and family with the same care 
                    and respect we'd want for our own.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Ready to Experience the H2O Difference?</h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied families who trust H2O Plumbing for their home's plumbing needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MasterButton 
                  asChild
                  variant="secondary"
                  size="lg"
                  className="bg-brand-cyan text-white hover:bg-brand-cyan-dark font-bold"
                >
                  <Link href="/about">Read Our Full Story</Link>
                </MasterButton>
                <CTAButton 
                  variant="booking"
                  size="lg" 
                  className="border-2 border-brand-cyan bg-transparent text-white hover:bg-brand-cyan hover:text-white font-bold"
                >
                  Schedule Your Service Call
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section with Local Presence */}
      {/* Tailwind: soft gradient background keeps this info-heavy section bright and airy */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto container-padding">
          {/* Tailwind: text-center block mirrors previous section rhythm for consistency */}
          <div className="text-center mb-16">
            {/* Badge matching hero and services style */}
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-brand-cyan mb-6" aria-label="Service areas">
              <MapPin className="h-4 w-4" />
              Service Areas
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold uppercase tracking-tight text-slate-900 mb-6">Serving Families Throughout Southwest Washington</h2>
            <p className="text-base md:text-lg text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              <strong className="text-brand-cyan">Locally owned, locally trusted.</strong> Our professional team serves Clark and Cowlitz Counties 
              with reliable, honest plumbing services. When you see our van in your neighborhood, you know quality work is being done.
            </p>
          </div>

          {/* Local Presence Section */}
          {/* Tailwind: responsive two-column layout pairs narrative with imagery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-6">Your Local Plumbing Professionals</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-cyan/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-slate-900 mb-2">Based in Battle Ground</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Centrally located to serve all of Clark County quickly and efficiently. 
                      We know the area, the local codes, and what Southwest Washington homes need.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-cyan/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-slate-900 mb-2">Fast Response Times</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Being local means we can reach most locations within 30 minutes. 
                      For emergencies, we prioritize getting to you as quickly as possible.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-cyan/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-slate-900 mb-2">Fully Licensed & Insured</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Washington State Licensed, bonded, and insured. 
                      Your property and our work are fully protected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/vbg.jpg"
                  alt="H2O Plumbing service van - professional plumbers serving Clark County WA"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-slate-800 font-semibold text-center">
                      "When you see our van in your neighborhood, you know quality work is being done."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Area Grid */}
          {/* Tailwind: stacked card grid lists each service area with hover lift */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-tight text-slate-900 text-center mb-8">Areas We Proudly Serve</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { city: 'Vancouver', href: '/service-areas/vancouver-wa-plumber', response: '15-25 min' },
                { city: 'Camas', href: '/service-areas/camas-plumber', response: '20-30 min' },
                { city: 'Washougal', href: '/service-areas/washougal-plumber', response: '25-35 min' },
                { city: 'Ridgefield', href: '/service-areas/ridgefield-plumber', response: '15-25 min' },
                { city: 'La Center', href: '/service-areas/la-center-plumber', response: '10-20 min' },
                { city: 'Woodland', href: '/service-areas/woodland-plumber', response: '15-25 min' },
                { city: 'Longview', href: '/service-areas/longview-plumber', response: '35-45 min' },
                { city: 'Battle Ground', href: '/service-areas/battle-ground-plumber', response: '5-15 min' }
              ].map((location) => (
                <div key={location.city} className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-brand-cyan/20 transform hover:-translate-y-1 group">
                  <div className="w-12 h-12 bg-brand-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-cyan/20 transition-colors">
                    <MapPin className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-slate-900 mb-2">{location.city}</h4>
                  <p className="text-sm text-slate-500 mb-3">Response Time: {location.response}</p>
                  <p className="text-sm text-slate-600 mb-4">Professional plumbing services throughout {location.city} and surrounding areas.</p>
                  <Link 
                    href={location.href}
                    className="inline-flex items-center text-brand-cyan font-semibold hover:text-brand-cyan-dark transition-colors group"
                  >
                    View Services
                    <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          {/* Tailwind: callout card reuses dark slate styling with translucent background image */}
          <div className="bg-slate-800 rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url('/images/vbg.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">Don't See Your Area Listed?</h3>
              <p className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                We serve many communities throughout Southwest Washington. 
                <strong className="text-brand-cyan">Call us</strong> to confirm service availability and response times for your specific location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <MasterButton 
                  asChild
                  variant="phone"
                  size="xl"
                  className="bg-brand-cyan text-white hover:bg-brand-cyan-dark font-bold shadow-lg"
                >
                  <a href="tel:+13608832506" className="inline-flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (360) 883-2506
                  </a>
                </MasterButton>
                <span className="text-slate-400">or</span>
                <Link 
                  href="/service-area"
                  className="text-white font-semibold hover:text-slate-300 transition-colors underline"
                >
                  Check Your ZIP Code Online
                </Link>
              </div>
              <p className="text-sm text-slate-400">
                Same-day service available throughout our service area
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Optimized for Vancouver WA conversions */}
      {/* Tailwind: bold red background with centered layout drives conversions before footer */}
      <section className="py-16 md:py-20 bg-brand-cyan text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold uppercase tracking-tight text-white mb-6">
            Ready for Vancouver's Most Trusted Plumbing Service?
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 200+ satisfied Clark County homeowners this year. Get your free estimate today — 
            no obligation, just honest pricing from your local plumbing experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto mb-10">
            <CTAButton 
              variant="quote"
              size="xl" 
              className="bg-white text-brand-cyan hover:bg-slate-100 font-bold shadow-lg"
            >
              Get FREE Estimate
            </CTAButton>
            <MasterButton 
              asChild
              variant="phone"
              size="xl"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-brand-cyan font-bold"
            >
              <a href="tel:+13608832506" className="inline-flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                {BUSINESS_DATA.phone}
              </a>
            </MasterButton>
          </div>
          
          {/* Trust reinforcement */}
          <div className="pt-6 border-t border-white/20">
            <p className="text-sm text-white/90">
              Licensed & Insured • Family-Owned Since 2004 • 100% Satisfaction Guarantee
            </p>
          </div>
        </div>
      </section>
    </>
  );
}





