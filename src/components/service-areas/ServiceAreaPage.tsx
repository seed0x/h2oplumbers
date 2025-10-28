import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Star, Phone, Clock, Shield, Users, Wrench, CheckCircle, ArrowRight, AlertCircle, Droplet, Flame, Building2 } from 'lucide-react';
import { CouponSpotlight } from '@/components/ui/CouponSpotlight';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { MasterButton } from '@/components/ui/master-button';
import { CTAButton } from '@/components/ui/cta-button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { HeroCouponBanner } from '@/components/sections/unified-hero';
import { getPromotion, PromotionKey } from '@/config/promotions';
import { BUSINESS_DATA } from '@/lib/business-data';

export interface ServiceAreaTestimonial {
  author: string;
  area: string;
  quote: string;
}

export interface ServiceAreaConfigEntry {
  slug: string;
  name: string;
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    headline: string;
    subheading: string;
    promotionKey?: string;
  };
  services: Array<{
    title: string;
    description: string;
    href: string;
  }>;
  neighborhoods: string[];
  mapEmbedUrl: string;
  testimonials: ServiceAreaTestimonial[];
  cta: {
    headline: string;
    blurb: string;
  }
}

interface Props {
  data: ServiceAreaConfigEntry;
}

export const ServiceAreaPage: React.FC<Props> = ({ data }) => {
  const breadcrumbItems = [
    { label: 'Service Areas', href: '/service-areas' },
    { label: `${data.name} Plumber` }
  ];

  // Get promotion data if promotionKey exists
  const promotion = data.hero.promotionKey ? getPromotion(data.hero.promotionKey as PromotionKey) : null;

  // Helper function to get icon based on service title
  const getServiceIcon = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('emergency')) return AlertCircle;
    if (lowerTitle.includes('drain')) return Droplet;
    if (lowerTitle.includes('water heater')) return Flame;
    if (lowerTitle.includes('commercial')) return Building2;
    return Wrench; // Default icon
  };

  return (
    <div className="min-h-screen">
      <Breadcrumbs items={breadcrumbItems} />
      
      {/* Professional Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20 pb-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url('/images/hero-background-pattern.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-medium tracking-wide mb-6 ring-1 ring-white/10 shadow-lg shadow-black/10">
                  <span className="inline-block w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                  <span>Serving {data.name} Since 2004</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                  <span className="text-brand-red">{data.name}</span> Plumber
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed">
                  {data.hero.subheading}
                </p>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8">
                  <div className="flex items-center text-white/80">
                    <Shield className="w-5 h-5 mr-2 text-brand-red" />
                    <span className="text-sm font-medium">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Users className="w-5 h-5 mr-2 text-brand-red" />
                    <span className="text-sm font-medium">Family Owned</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Clock className="w-5 h-5 mr-2 text-brand-red" />
                    <span className="text-sm font-medium">Since 2004</span>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center justify-center lg:justify-start mb-8">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <span className="text-lg font-semibold text-white">Highly Rated Local Service</span>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-row flex-wrap gap-4 justify-center lg:justify-start">
                  <Link
                    href="/booking"
                    className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg whitespace-nowrap"
                  >
                    Schedule Service
                  </Link>
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 border-2 border-white bg-transparent text-white hover:bg-white hover:text-brand-red px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg whitespace-nowrap"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>
              </div>
              
              {/* Right Content - Contact Form */}
              <div className="relative">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl ring-1 ring-black/5 p-6 md:p-7">
                  <div className="text-center mb-5">
                    <h2 className="text-xl font-semibold text-slate-900 mb-1">Request Service in {data.name}</h2>
                    <p className="text-sm text-slate-500">Fast response during business hours. No obligation.</p>
                  </div>
                  <form className="space-y-4" aria-label="Request service quote form">
                    <div>
                      <label className="sr-only" htmlFor="service-area-name">Name</label>
                      <Input id="service-area-name" placeholder="Your Name" className="text-black border-slate-300 focus:border-red-600 focus:ring-red-600" />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="service-area-phone">Phone Number</label>
                      <Input id="service-area-phone" type="tel" placeholder="Phone Number" className="text-black border-slate-300 focus:border-red-600 focus:ring-red-600" />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="service-area-address">Address in {data.name}</label>
                      <Input id="service-area-address" placeholder={`Address in ${data.name}`} className="text-black border-slate-300 focus:border-red-600 focus:ring-red-600" />
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger className="text-black border-slate-300 focus:border-red-600 focus:ring-red-600">
                          <SelectValue placeholder="Service Needed" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="drain-cleaning">Drain Cleaning</SelectItem>
                          <SelectItem value="water-heater">Water Heater Repair</SelectItem>
                          <SelectItem value="leak-detection">Leak Detection</SelectItem>
                          <SelectItem value="repipe">Repipe & Pipe Repair</SelectItem>
                          <SelectItem value="bathroom-remodel">Bathroom Remodel</SelectItem>
                          <SelectItem value="new-construction">New Construction</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Get Free Quote
                    </Button>
                  </form>
                  <p className="text-[10px] text-slate-500 mt-4 text-center leading-relaxed">
                    By submitting this form you agree to be contacted about your request. We never share your information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="section-padding bg-gradient-to-br from-white to-slate-50 relative">
        {/* Location-Specific Coupon */}
        {promotion && (
          <div className="absolute top-0 left-0 right-0 -translate-y-1/2 z-30">
            <HeroCouponBanner promotion={{
              badgeLabel: promotion.discount,
              headingLabel: promotion.title,
              detailsLine: promotion.description,
              couponCode: promotion.code || 'SAVE',
              ctaLink: promotion.ctaLink,
              ctaText: promotion.ctaText,
              isTelLink: false
            }} />
          </div>
        )}
        
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-red-100 rounded-full px-4 py-2 mb-4">
                <Wrench className="w-5 h-5 text-brand-red" />
                <span className="text-sm font-semibold text-brand-red uppercase tracking-wider">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase">
                Professional Plumbing Throughout <span className="text-brand-red">{data.name}, WA</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
                {data.hero.headline} Our experienced team provides comprehensive plumbing solutions 
                with the personal touch that only a family business can deliver.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {data.services.map((service, index) => {
                const ServiceIcon = getServiceIcon(service.title);
                return (
                <div key={service.title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-brand-red/20 hover:border-brand-red transform hover:-translate-y-2 group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-brand-red transition-colors flex-shrink-0">
                      <ServiceIcon className="w-8 h-8 text-brand-red group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">{service.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                      <Link 
                        href={service.href}
                        className="inline-flex items-center text-brand-red font-semibold hover:text-brand-red-dark transition-colors group"
                      >
                        Learn More About This Service
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                      </Link>
                    </div>
                  </div>
                </div>
              )})}
            </div>
            
            {/* Why Choose Us for Local Service */}
            <div className="bg-slate-800 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden mb-16">
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url('/images/Work Van Good Image.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-heading font-bold text-center mb-8 uppercase">Why {data.name} Families Choose <span className="text-brand-red">H2O Plumbing</span></h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-heading font-bold mb-3">Fast Local Response</h4>
                    <p className="text-slate-300 leading-relaxed">
                      Based in Battle Ground, we can reach {data.name} quickly for emergencies and scheduled service calls.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-heading font-bold mb-3">Family Business Values</h4>
                    <p className="text-slate-300 leading-relaxed">
                      From Ron to Josh, we treat every customer like family. Personal service, honest pricing, quality work.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-heading font-bold mb-3">Licensed & Experienced</h4>
                    <p className="text-slate-300 leading-relaxed">
                      Over 20 years serving Southwest Washington. Fully licensed, insured, and experienced in local codes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Presence Section with Truck Photo */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/truck-1.jpg" 
                    alt={`H2O Plumbing service van serving ${data.name}, WA`}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-brand-red/95 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-white font-bold text-center">
                        <MapPin className="w-5 h-5 inline-block mr-2" />
                        Proudly Serving {data.name} Since 2004
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-red-100 rounded-full px-4 py-2 mb-6">
                  <MapPin className="w-5 h-5 text-brand-red" />
                  <span className="text-sm font-semibold text-brand-red uppercase tracking-wider">Local Experts</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 uppercase">
                  Your Trusted <span className="text-brand-red">{data.name} Plumbing Team</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Our team has been proudly serving {data.name} families and businesses since 2004. 
                  We're not just plumbers—we're your neighbors, committed to delivering honest service 
                  and quality workmanship to our community.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Fast Local Response</h4>
                      <p className="text-slate-600">Based nearby, we arrive quickly to handle emergencies and routine service.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Three Generations Strong</h4>
                      <p className="text-slate-600">Family-owned expertise passed down through generations of master plumbers.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Licensed & Insured</h4>
                      <p className="text-slate-600">Fully licensed in WA & OR with comprehensive insurance for your peace of mind.</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-lg font-bold transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call {BUSINESS_DATA.phone}
                  </a>
                  <Link
                    href="/booking"
                    className="inline-flex items-center justify-center gap-2 border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-6 py-3 rounded-lg font-bold transition-colors"
                  >
                    Schedule Online
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Neighborhoods We Serve */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-slate-900 mb-6 uppercase">{data.name} Neighborhoods <span className="text-brand-red">We Proudly Serve</span></h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our local expertise means we know {data.name} inside and out. From established neighborhoods 
              to new developments, we've been serving families throughout the area.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.neighborhoods.map((area, index) => (
                  <div key={area} className="text-center py-3 px-2 rounded-lg hover:bg-red-50 transition-colors">
                    <div className="flex items-center justify-center mb-2">
                      <MapPin className="w-4 h-4 text-brand-red mr-1" />
                      <p className="font-semibold text-slate-900">{area}</p>
                    </div>
                  </div>
              ))}
            </div>
            <div className="text-center mt-8 pt-6 border-t border-slate-200">
              <p className="text-slate-600 text-sm">
                Don't see your specific neighborhood? We likely serve your area too! 
                <a href="tel:+13608832506" className="text-primary-600 hover:text-primary-700 font-medium">Call us</a> to confirm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Service Area Map */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-heading font-bold text-slate-900 mb-6 uppercase">Our {data.name} <span className="text-brand-red">Service Area</span></h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                See exactly where we provide service in {data.name} and surrounding areas. 
                We're proud to serve this community with professional, reliable plumbing services.
              </p>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <iframe
                src={data.mapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${data.name} WA plumbing service area map`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-heading font-bold text-slate-900 mb-6 uppercase">What Your {data.name} <span className="text-brand-red">Neighbors Are Saying</span></h3>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Don't just take our word for it. Here's what families throughout {data.name} 
                are saying about their experience with H2O Plumbing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.testimonials.map((testimonial, index) => (
                <div key={testimonial.author} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-brand-red/20 hover:border-brand-red transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-500 mr-3">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                    </div>
                  </div>
                  <blockquote className="text-slate-600 leading-relaxed mb-6 text-lg">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-brand-red" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{testimonial.author}</p>
                      <p className="text-sm text-slate-500">{testimonial.area} Resident</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-brand-red text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url('/images/hero-background-pattern.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="container mx-auto container-padding relative z-10 text-center">
          <h3 className="text-4xl font-heading font-bold mb-6 uppercase">{data.cta.headline}</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90">
            {data.cta.blurb} Contact us today for professional, reliable plumbing service 
            that {data.name} families have trusted since 2004.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-brand-red px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS_DATA.phone}
            </a>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 border-2 border-white bg-transparent text-white hover:bg-white hover:text-brand-red px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
            >
              Schedule Service Online
            </Link>
          </div>
          <div className="border-t border-white/20 pt-6">
            <p className="text-sm text-white/80">
              Licensed & Insured • Family-Owned Since 2004 • Available 24/7 for Emergencies
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}




