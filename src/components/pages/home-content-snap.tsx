'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Star, Shield, Clock, CheckCircle2, Award, Users, Home, Building2, Hammer, Droplets, ArrowRight, Wrench, Mail, MapPin } from 'lucide-react';
import { SectionAnimation, StaggerAnimation, AnimatedCounter, PulsingCTA } from '../ui/section-animations';
import { SnapScroll, ScrollNavigation, ScrollProgressBar } from '../ui/snap-scroll';
import { BUSINESS_DATA } from '@/lib/business-data';
import { WaterAnimation } from '../ui/water-animation';

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
  const totalSections = 8;

  return (
    <>
      {/* Subtle water droplets throughout */}
      <WaterAnimation />
      
      <SnapScroll />
      <ScrollProgressBar />
      <ScrollNavigation totalSections={totalSections} />

      {/* Section 1: Hero with CTA */}
      <section className="snap-section relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-brand-cyan/5 overflow-hidden pt-20 md:pt-0">
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

        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto text-center">
            <SectionAnimation animationType="fade" delay={0.2}>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-brand-cyan mb-8">
                <Clock className="h-4 w-4" />
                Same-Day Service
              </div>
            </SectionAnimation>

            <SectionAnimation animationType="slide-up" delay={0.4}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-heading font-bold mb-6 md:mb-8 leading-[1.05] tracking-tight">
                <span className="text-slate-900 block">Vancouver's Trusted</span>
                <span className="bg-gradient-to-r from-brand-cyan via-brand-turquoise to-brand-cyan bg-clip-text text-transparent block">
                  Plumbing Experts
                </span>
              </h1>
            </SectionAnimation>

            <SectionAnimation animationType="slide-up" delay={0.6}>
              <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                <strong className="text-brand-cyan">Three generations</strong> serving Vancouver, Clark County, and Southwest Washington since {BUSINESS_DATA.established}. Licensed, insured, and family-owned.
              </p>
            </SectionAnimation>

            <SectionAnimation animationType="scale" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16">
                <PulsingCTA>
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="group relative inline-flex items-center justify-center gap-3 bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold px-10 md:px-14 py-5 md:py-6 rounded-2xl text-lg md:text-xl shadow-2xl hover:shadow-brand-cyan/30 transition-all duration-300 transform hover:scale-105 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <Phone className="w-6 h-6 relative z-10" />
                    <span className="relative z-10">Call {BUSINESS_DATA.phone}</span>
                  </a>
                </PulsingCTA>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-brand-cyan border-2 border-brand-cyan font-bold px-10 md:px-14 py-5 md:py-6 rounded-2xl text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View Services
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </SectionAnimation>

            {/* Trust stats - Brand consistent style */}
            <SectionAnimation animationType="fade" delay={1}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-brand-cyan/20 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                  <div className="w-16 h-16 bg-brand-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-1">
                    <AnimatedCounter endValue={30} suffix="+" />
                  </div>
                  <div className="text-sm text-slate-600 font-semibold">Years Serving</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-brand-cyan/20 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                  <div className="w-16 h-16 bg-brand-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-1">
                    <AnimatedCounter endValue={5000} suffix="+" />
                  </div>
                  <div className="text-sm text-slate-600 font-semibold">Happy Customers</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-brand-cyan/20 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                  <div className="w-16 h-16 bg-brand-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-1">4.9</div>
                  <div className="text-sm text-slate-600 font-semibold">Star Rating</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-brand-cyan/20 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                  <div className="w-16 h-16 bg-brand-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-1">24/7</div>
                  <div className="text-sm text-slate-600 font-semibold">Emergency</div>
                </div>
              </div>
            </SectionAnimation>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-scroll-indicator">
          <span className="text-xs md:text-sm text-slate-500 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 md:w-7 md:h-12 border-2 border-slate-300 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 md:h-4 bg-brand-cyan rounded-full" />
          </div>
        </div>
      </section>

      {/* Section 2: Services Grid */}
      <section id="services" className="snap-section relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionAnimation animationType="slide-up">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-brand-cyan mb-6">
                  <Wrench className="h-4 w-4" />
                  Service Expertise
                </div>
                <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-6">
                  Complete Plumbing Services in Vancouver WA
                </h2>
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                  From emergency repairs to full remodels—residential and commercial plumbing solutions for Clark County and Southwest Washington.
                </p>
              </div>
            </SectionAnimation>

            <StaggerAnimation staggerDelay={0.15}>
              {serviceHighlights.map((service, index) => {
                const Icon = service.icon === 'home' ? Home : service.icon === 'building2' ? Building2 : Hammer;
                return (
                  <article
                    key={index}
                    className="group bg-white rounded-3xl border-2 border-slate-200 hover:border-brand-cyan p-6 md:p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 mb-6 last:mb-0"
                  >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
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
                        <p className="text-base text-slate-600 leading-relaxed">{service.description}</p>
                      </div>
                      <Link
                        href={service.href}
                        className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:gap-4"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </StaggerAnimation>
          </div>
        </div>
      </section>

      {/* Section 3: Quick Contact CTA */}
      <section className="snap-section relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        {/* Split background - stacks on mobile */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 lg:w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute inset-0 lg:left-1/2 bg-gradient-to-br from-white to-slate-50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left - CTA */}
            <SectionAnimation animationType="slide-right">
              <div className="text-white py-12 md:py-20 pr-0 lg:pr-12">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-semibold">Get Started Now</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                  Need a Plumber in Vancouver?
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-slate-300">
                  Same-day service available. <strong className="text-white">Call now</strong> or request a free quote. Serving all of Clark County.
                </p>
                <div className="space-y-4 mb-10">
                  {[
                    'Licensed & insured professionals',
                    'Upfront, transparent pricing',
                    'Satisfaction guaranteed',
                    '24/7 emergency availability',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-brand-cyan flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                <PulsingCTA>
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="inline-flex items-center gap-3 bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold px-10 py-5 rounded-2xl text-xl shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="w-6 h-6" />
                    {BUSINESS_DATA.phone}
                  </a>
                </PulsingCTA>
              </div>
            </SectionAnimation>

            {/* Right - Quick Form */}
            <SectionAnimation animationType="slide-left" delay={0.2}>
              <div className="bg-white py-12 md:py-20 pl-0 lg:pl-12">
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border-2 border-slate-200 shadow-xl">
                  <h3 className="text-3xl font-heading font-bold text-slate-900 mb-2">Get Your Free Quote</h3>
                  <p className="text-slate-600 mb-6"><strong className="text-brand-cyan">Fast response</strong> • No obligation • Vancouver & Clark County</p>
                  
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full px-5 py-4 bg-white border-2 border-slate-200 rounded-xl focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/10 outline-none transition-all text-slate-900"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="w-full px-5 py-4 bg-white border-2 border-slate-200 rounded-xl focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/10 outline-none transition-all text-slate-900"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full px-5 py-4 bg-white border-2 border-slate-200 rounded-xl focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/10 outline-none transition-all text-slate-900"
                    />
                    <select
                      required
                      className="w-full px-5 py-4 bg-white border-2 border-slate-200 rounded-xl focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/10 outline-none transition-all text-slate-900"
                    >
                      <option value="">Select Service...</option>
                      <option>Emergency Repair</option>
                      <option>Drain Cleaning</option>
                      <option>Water Heater</option>
                      <option>Leak Detection</option>
                      <option>Pipe Repair</option>
                      <option>Bathroom Remodel</option>
                      <option>Commercial Services</option>
                    </select>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-brand-cyan to-brand-turquoise hover:from-brand-cyan-dark hover:to-brand-cyan text-white font-bold py-4 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      Get Free Quote
                    </button>
                  </form>
                </div>
              </div>
            </SectionAnimation>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="snap-section relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-cyan/5 via-white to-brand-cyan/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionAnimation animationType="slide-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">Why Vancouver Trusts H2O</h2>
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                  <strong className="text-brand-cyan">Three generations.</strong> We're not just plumbers—we're your Clark County neighbors, committed to excellence since {BUSINESS_DATA.established}.
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
                  <p className="text-xl md:text-2xl mb-6 text-slate-300 italic">
                    "Three generations strong. We're not just a team, we're a family. We treat every home like it's our own and every customer like family."
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

      {/* Section 8: Final CTA */}
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
                { icon: Clock, title: '24/7 Emergency', desc: 'Always available' },
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
