'use client';

import Link from 'next/link';
import { Star, MapPin, Clock, Shield, Users, Wrench, Home, Building2, Phone, Tag, Droplets, Flame, Wrench as WrenchAlt, Hammer } from 'lucide-react';
import { FloatingBookButton } from '../ui/floating-book-button';
import { SocialProofNotifications } from '../ui/social-proof-notifications';
import { UrgencyIndicators } from '../ui/urgency-indicators';
import { RecentlyViewedServices } from '../ui/recently-viewed-services';
import { DiscountBanner } from '../ui/discount-banner';
import { BackToTopButton } from '../ui/back-to-top';
import { SkipNavigation } from '../ui/accessibility-utils';
import { FloatingElementsManager } from '../ui/floating-elements-manager';
import { StickyCtaBar } from '../ui/sticky-cta-bar';
import { H2OHero, H2OCouponBanner } from '@/components/sections/h2o-hero';
import { MeetTheTeamSection } from '@/components/sections/meet-the-team';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section';
import { FloatingShareButton } from '@/components/social/social-share';
import { MasterButton } from '@/components/ui/master-button';
import { CouponSection } from "@/components/sections/coupon-section";
import { WaterGradientFlowMedium } from '@/components/ui/water-animation';
import { HeroesDiscountSection } from '@/components/sections/heroes-discount-section';

export function HomeContent({
  serviceHighlights,
  couponDisplayData,
}: {
  serviceHighlights: any[];
  couponDisplayData: any[];
}) {
  return (
    <>
      <SkipNavigation />
      <FloatingShareButton />
      
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
      
      <StickyCtaBar />
      <div data-speed="0.5">
        <WaterGradientFlowMedium />
      </div>
      
      <H2OHero />
      <H2OCouponBanner />
      
      <section className="relative section-padding bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto container-padding">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12" data-fade>
              <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-brand-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-brand-cyan">
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
              <Link
                href="/services"
                className="inline-flex items-center gap-2 self-start text-sm font-semibold uppercase tracking-[0.25em] text-brand-cyan hover:text-brand-cyan-dark transition-colors"
              >
                View All Services
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {serviceHighlights.map((service, index) => {
                const Icon = service.icon === 'home' ? Home : service.icon === 'building2' ? Building2 : Hammer;
                return (
                  <article key={index} data-fade className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
                    <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-brand-cyan/5 to-brand-cyan/10 group-hover:from-brand-cyan/10 group-hover:to-brand-cyan/20 transition-colors">
                      <Icon className="h-16 w-16 text-brand-cyan" />
                    </div>
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
                      <Link
                        href={service.href}
                        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-cyan px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-cyan-dark"
                      >
                        Learn More
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

      <div data-fade>
        <MeetTheTeamSection />
      </div>
      
      <div data-fade>
        <TestimonialsSection />
      </div>
      <div data-fade>
        <HeroesDiscountSection />
      </div>
      <div data-speed="0.3">
        <CouponSection />
      </div>
      <div data-fade>
        <WhyChooseUsSection />
      </div>
    </>
  );
}
