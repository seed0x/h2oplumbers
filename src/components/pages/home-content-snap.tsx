'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Star, Shield, Clock, CheckCircle2, Award, Users, Home, Building2, Hammer, Droplets, ArrowRight, Wrench, Mail, MapPin } from 'lucide-react';
import { SectionAnimation, StaggerAnimation, AnimatedCounter, PulsingCTA } from '../ui/section-animations';
import { SnapScroll, ScrollNavigation, ScrollProgressBar } from '../ui/snap-scroll';
import { BUSINESS_DATA } from '@/lib/business-data';
import { WaterAnimation } from '../ui/water-animation';
import { CouponSection } from '@/components/sections/coupon-section';
import { DynamicCouponSection } from '@/components/sections/dynamic-coupon-section';
import { HeroesDiscountSection } from '@/components/sections/heroes-discount-section';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section';
import { H2OHero } from '@/components/sections/h2o-hero';

interface ServiceHighlight {
  title: string;
  description: string;
  href: string;
  icon: string;
  category: string;
}

interface HomeContentSnapProps {
  serviceHighlights: ServiceHighlight[];
}

export function HomeContentSnap({ serviceHighlights }: HomeContentSnapProps) {
  const totalSections = 10;

  return (
    <>

      {/* Subtle water droplets throughout */}
      <WaterAnimation />
      
      <SnapScroll />
      <ScrollProgressBar />
      <ScrollNavigation totalSections={totalSections} />

      {/* Section 1: Hero with CTA */}
      <section className="snap-section relative min-h-screen w-full p-0 overflow-visible">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgb(6 182 212) 1px, transparent 1px),
                linear-gradient(to bottom, rgb(6 182 212) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        {/* Gradient accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-brand-cyan/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-brand-turquoise/8 to-transparent rounded-full blur-3xl" />

        <H2OHero />

        {/* Scroll indicator */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-scroll-indicator">
          <span className="text-xs md:text-sm text-slate-500 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 md:w-7 md:h-12 border-2 border-slate-300 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 md:h-4 bg-brand-cyan rounded-full" />
          </div>
        </div>
      </section>

      {/* Section 2: Services Grid */}
      <section id="services" className="snap-section relative min-h-screen flex items-start justify-center bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionAnimation animationType="slide-up">
              <div className="text-center mb-12 md:mb-14">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-brand-cyan mb-6">
                  <Wrench className="h-4 w-4" />
                  Service Expertise
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-4">
                  Complete Plumbing Services in Vancouver WA
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  From same-day repairs to full remodels—residential and commercial plumbing solutions for Clark County and Southwest Washington.
                </p>
              </div>
            </SectionAnimation>

            <StaggerAnimation staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
              {serviceHighlights.map((service, index) => {
                const Icon = service.icon === 'home' ? Home : service.icon === 'building2' ? Building2 : Hammer;
                return (
                  <article
                    key={index}
                    className="group h-full bg-white rounded-3xl border-2 border-slate-200 hover:border-brand-cyan p-6 md:p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6 h-full">
                      <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-brand-cyan/10 to-brand-turquoise/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Icon className="w-10 h-10 text-brand-cyan" />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-cyan/80">
                          {service.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-heading font-semibold text-slate-900 mt-2 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-base text-slate-600 leading-relaxed mb-4 md:mb-6">{service.description}</p>
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:gap-4"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </StaggerAnimation>
          </div>
        </div>
      </section>

      {/* Section 3: Coupons (links to coupons page) */}
      <section className="snap-section relative min-h-screen flex items-center justify-center bg-white py-20 md:py-32">
        <div className="w-full">
          <SectionAnimation animationType="fade">
            <DynamicCouponSection />
          </SectionAnimation>
        </div>
      </section>

      {/* Section 4: Why Choose Us (Original) */}
      <section className="snap-section relative min-h-screen flex items-center justify-center bg-slate-50 py-20 md:py-32">
        <div className="w-full">
          <SectionAnimation animationType="slide-up">
            <WhyChooseUsSection />
          </SectionAnimation>
        </div>
      </section>

      {/* Section 5: Why Vancouver Trusts H2O */}
      <section className="snap-section relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-cyan/5 via-white to-brand-cyan/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionAnimation animationType="slide-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">Why Vancouver Trusts H2O</h2>
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                  Backed by All County Plumbing, H2O launched in 2020 to bring family-backed, professional service to Clark County.
                </p>
              </div>
            </SectionAnimation>

            <StaggerAnimation staggerDelay={0.2} className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: CheckCircle2,
                  title: 'Same-Day Service',
                  description: 'Emergency repairs available 24/7. We arrive fast and fix it right the first time.',
                  color: 'text-brand-cyan',
                  bgColor: 'from-brand-cyan/10 to-brand-cyan/5',
                },
                {
                  icon: Shield,
                  title: 'Licensed & Insured',
                  description:
                    'Fully bonded professionals with WA & OR licenses. Your property is protected with us.',
                  color: 'text-brand-turquoise',
                  bgColor: 'from-brand-turquoise/10 to-brand-turquoise/5',
                },
                {
                  icon: Award,
                  title: '30-Year Warranty',
                  description: 'Industry-leading warranty on select installations. We stand behind our work.',
                  color: 'text-brand-cyan',
                  bgColor: 'from-brand-cyan/10 to-brand-cyan/5',
                },
                {
                  icon: Star,
                  title: 'Top-Rated Service',
                  description: '4.9/5 stars from real customers. Read hundreds of verified reviews.',
                  color: 'text-yellow-500',
                  bgColor: 'from-yellow-50 to-yellow-25',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${item.bgColor} rounded-3xl p-6 md:p-8 border-2 border-slate-200 hover:border-brand-cyan transition-all duration-500 hover:shadow-2xl hover:-translate-y-1`}
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md">
                        <Icon className={`w-8 h-8 ${item.color}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </StaggerAnimation>
          </div>
        </div>
      </section>

      {/* Section 5: Meet The Team */}
      <section className="snap-section relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionAnimation animationType="slide-up">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] mb-6">
                  <Users className="h-4 w-4" />
                  Our Team
                </div>
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                  Meet Your Vancouver Plumbing Family
                </h2>
                <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                  <strong className="text-white">Three generations of family excellence.</strong> Founded in {BUSINESS_DATA.established}, we're a family business bringing honest, professional plumbing to Southwest Washington.
                </p>
              </div>
            </SectionAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: 'Ron Veach',
                  title: 'Founder & Master Plumber',
                  imageUrl: '/images/ron-veach.jpg',
                  bio: "With over 30 years of experience, Ron founded H2O to bring honest, family-focused plumbing to our community."
                },
                {
                  name: 'Josh Veach',
                  title: 'Lead Technician & Operations',
                  imageUrl: '/images/josh-veach.jpg',
                  bio: "Following in his father's footsteps, Josh leads our field team with a commitment to quality and customer satisfaction."
                },
                {
                  name: 'Skylee Hewitt',
                  title: 'Operations & Accounting',
                  imageUrl: '/images/skylee-hewitt.jpg',
                  bio: "Growing up in the family business, Skylee now leads H2O's operations, billing, and accounting with dedication and precision."
                },
                {
                  name: 'Our Field Team',
                  title: 'Licensed Plumbers & Apprentices',
                  imageUrl: '/images/family-Allcountyteam.webp',
                  bio: "Our skilled technicians are the friendly faces you'll see at your door, ready to solve your plumbing problems."
                },
              ].map((member, index) => (
                <SectionAnimation key={index} animationType="slide-up" delay={index * 0.15}>
                  <div className="group text-center">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-6 border-2 border-slate-700 hover:border-brand-cyan transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                      {/* Real photo */}
                      <div className="relative w-32 h-32 mx-auto mb-6">
                        <Image
                          src={member.imageUrl}
                          alt={`Photo of ${member.name}`}
                          fill
                          className="rounded-full object-cover ring-4 ring-brand-cyan group-hover:ring-brand-turquoise transition-all"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                      <p className="text-brand-cyan text-center font-semibold mb-4">{member.title}</p>
                      <p className="text-sm text-slate-300 leading-relaxed flex-1">{member.bio}</p>
                    </div>
                  </div>
                </SectionAnimation>
              ))}
            </div>

            <SectionAnimation animationType="fade" delay={0.8}>
              <div className="mt-16 text-center">
                <div className="inline-block bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border-2 border-slate-700 max-w-3xl">
                  <p className="text-lg md:text-2xl mb-6 text-slate-300 italic">
                    "We’re a family-backed team. We treat every home like it’s our own and every customer like family."
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-brand-cyan font-semibold">Family-owned and operated since {BUSINESS_DATA.established}</p>
                </div>
              </div>
            </SectionAnimation>
          </div>
        </div>
      </section>

      {/* Section 6: Special Offer */}
      <section className="snap-section relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-cyan via-brand-turquoise to-brand-cyan overflow-hidden py-20">
        {/* Animated water droplet elements */}
        <div className="absolute inset-0 opacity-10">
          <Droplets className="absolute top-20 left-20 w-32 h-32 animate-float" />
          <Droplets className="absolute bottom-20 right-20 w-40 h-40 animate-float" style={{ animationDelay: '1s' }} />
          <Droplets className="absolute top-1/2 left-1/4 w-24 h-24 animate-float" style={{ animationDelay: '0.5s' }} />
          <Droplets className="absolute top-1/3 right-1/4 w-28 h-28 animate-float" style={{ animationDelay: '1.5s' }} />
        </div>
        
        {/* Subtle water ripple effect */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border-2 border-white animate-ping"
                style={{
                  top: `${30 + i * 20}%`,
                  left: `${20 + i * 30}%`,
                  width: '200px',
                  height: '200px',
                  animationDuration: `${4 + i}s`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <SectionAnimation animationType="scale">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-semibold uppercase tracking-wider">Vancouver Special</span>
              </div>
            </SectionAnimation>

            <SectionAnimation animationType="slide-up" delay={0.2}>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6">Save 10% Today</h2>
            </SectionAnimation>

            <SectionAnimation animationType="slide-up" delay={0.4}>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                <strong className="text-white">First-time customers</strong> in Vancouver & Clark County save 10% on service calls over $200
              </p>
            </SectionAnimation>

            <SectionAnimation animationType="scale" delay={0.6}>
              <div className="inline-block bg-white/95 backdrop-blur-sm px-8 py-4 rounded-2xl mb-10">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Promo Code</div>
                <div className="text-4xl md:text-5xl font-black text-brand-cyan">H2O10</div>
              </div>
            </SectionAnimation>

            <SectionAnimation animationType="slide-up" delay={0.8}>
              <PulsingCTA>
                <a
                  href="tel:+13604339743"
                  className="inline-flex items-center gap-3 bg-white hover:bg-slate-50 text-brand-cyan px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-6 h-6" />
                  Call Now to Redeem
                </a>
              </PulsingCTA>
            </SectionAnimation>

            <SectionAnimation animationType="fade" delay={1}>
              <p className="text-sm mt-8 opacity-75">
                *Cannot be combined with other offers • Valid through December 31, 2025
              </p>
            </SectionAnimation>
          </div>
        </div>
      </section>

      {/* Section 7: Testimonials */}
      <section className="snap-section relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionAnimation animationType="slide-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
                  What Vancouver Says About Us
                </h2>
                <div className="flex items-center justify-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-2xl font-bold text-slate-900 ml-2">4.9/5</span>
                </div>
                <p className="text-lg text-slate-600">Based on 500+ verified reviews</p>
              </div>
            </SectionAnimation>

            <StaggerAnimation staggerDelay={0.2} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Sarah M.',
                  role: 'Homeowner',
                  text: 'Quick response, professional service, and fair pricing. Fixed our water heater the same day!',
                  rating: 5,
                },
                {
                  name: 'Mike R.',
                  role: 'Business Owner',
                  text: "Best plumbers in Vancouver! They've handled all our commercial plumbing for years.",
                  rating: 5,
                },
                {
                  name: 'Jennifer L.',
                  role: 'Property Manager',
                  text: 'Reliable, honest, and always on time. We trust H2O for all our properties.',
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200 hover:border-brand-cyan transition-all duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </StaggerAnimation>
          </div>
        </div>
      </section>

      {/* Section 8: Coupons */}
      <section className="snap-section relative min-h-screen flex items-center justify-center bg-white py-20 md:py-32">
        <div className="w-full">
          <SectionAnimation animationType="fade">
            <CouponSection />
          </SectionAnimation>
        </div>
      </section>

      {/* Section 9: Heroes Discount */}
      <section className="snap-section relative min-h-screen flex items-center justify-center bg-slate-50 py-20 md:py-32">
        <div className="w-full">
          <SectionAnimation animationType="slide-up">
            <HeroesDiscountSection />
          </SectionAnimation>
        </div>
      </section>

      {/* Section 10: Final CTA */}
      <section className="snap-section relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }} />
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-turquoise/10 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Service Areas at top */}
            <SectionAnimation animationType="fade">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] mb-6">
                  <MapPin className="h-4 w-4" />
                  Service Areas
                </div>
                <p className="text-slate-300 mb-8">
                  Serving <strong className="text-white">Vancouver, Battle Ground, Camas, Washougal, Ridgefield, La Center</strong> and all of Clark County & Southwest Washington
                </p>
              </div>
            </SectionAnimation>

            <SectionAnimation animationType="slide-up" delay={0.3}>
              <div className="text-center mb-12">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight">
                  Ready to Get Started?
                </h2>
                <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
                  <strong className="text-white">Licensed, insured, and ready to help.</strong> Vancouver&apos;s most trusted plumbing team.
                </p>
              </div>
            </SectionAnimation>

            <SectionAnimation animationType="scale" delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <PulsingCTA>
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="group relative inline-flex items-center justify-center gap-4 bg-gradient-to-r from-brand-cyan to-brand-turquoise hover:from-brand-cyan-dark hover:to-brand-cyan text-white font-bold px-12 py-6 rounded-2xl text-xl shadow-2xl hover:shadow-brand-cyan/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <Phone className="w-7 h-7 relative z-10" />
                    <div className="relative z-10 text-left">
                      <div className="text-sm opacity-90">Call Now</div>
                      <div className="text-2xl font-black">{BUSINESS_DATA.phone}</div>
                    </div>
                  </a>
                </PulsingCTA>
                <a
                  href={`mailto:${BUSINESS_DATA.email}`}
                  className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-10 py-6 rounded-2xl text-lg border-2 border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <Mail className="w-6 h-6" />
                  Email Us
                </a>
              </div>
            </SectionAnimation>

            <StaggerAnimation staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {[
                { icon: Clock, title: 'Same-Day Service', desc: 'Priority response' },
                { icon: Shield, title: 'Licensed & Insured', desc: 'WA & OR certified' },
                { icon: Award, title: '30-Year Warranty', desc: 'On installations' },
                { icon: Star, title: '4.9/5 Rating', desc: '500+ reviews' },
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border-2 border-slate-700 text-center hover:border-brand-cyan transition-all duration-300">
                  <item.icon className="w-12 h-12 text-brand-cyan mx-auto mb-3" />
                  <div className="text-lg font-bold mb-1">{item.title}</div>
                  <div className="text-sm text-slate-400">{item.desc}</div>
                </div>
              ))}
            </StaggerAnimation>
          </div>
        </div>
      </section>
    </>
  );
}
