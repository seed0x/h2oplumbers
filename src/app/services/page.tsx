import { Metadata } from 'next';
import Link from 'next/link';
import { Wrench, Droplets, Thermometer, Search, Home, Building2, Phone, ShowerHead, Activity } from 'lucide-react';
import { Breadcrumbs } from '../../components/ui/breadcrumbs';
import { getPromotion } from '@/config/promotions';
import { PromotionsProvider } from '@/context/PromotionsContext';
import { FloatingShareButton } from '@/components/social/social-share';
import { generateSocialMeta, socialMetaTemplates } from '@/lib/social-meta';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HeroCouponBanner } from '@/components/sections/unified-hero';

export const metadata: Metadata = generateSocialMeta({
  ...socialMetaTemplates.services,
  title: 'Family Plumbing Services | Vancouver, Battle Ground, Longview | Clark & Cowlitz County | H2O Plumbing'
});

export default function ServicesPage() {
  const breadcrumbItems = [
    { label: 'Services' }
  ];

  // Get promotion for coupon banner
  const heroPromotion = getPromotion('waterHeaterHero');
  const fallbackPromotion = {
    id: 'fallbackHero',
    title: 'Family Service Savings',
    discount: '$75 OFF Services Over $500',
    description: 'New customers save on qualifying projects',
    code: 'SAVE75',
    ctaText: 'Call to Redeem',
    ctaLink: 'tel:+13608832506',
    expiresAt: '2025-12-31',
  };

  const selectedPromotion = heroPromotion ?? fallbackPromotion;
  const formatDate = (iso?: string) =>
    iso ? new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : undefined;
  const validFromLabel = formatDate(selectedPromotion.validFrom);
  const expiresLabel = formatDate(selectedPromotion.expiresAt);
  const detailSegments = [
    selectedPromotion.description,
    validFromLabel ? `Valid from ${validFromLabel}` : null,
    expiresLabel ? `Valid through ${expiresLabel}` : null,
    'Cannot be combined with other offers',
  ].filter(Boolean);
  const detailsLine = detailSegments.join(' • ');
  const badgeLabel = selectedPromotion.discount;
  const headingLabel = selectedPromotion.title;
  const couponCode = selectedPromotion.code ?? 'SAVE75';
  const ctaLink = selectedPromotion.ctaLink ?? 'tel:+13608832506';
  const ctaText = selectedPromotion.ctaText ?? 'Call to Redeem';
  const isTelLink = ctaLink.startsWith('tel:');

  const services = [
    {
      title: 'Same-Day Service',
      description: 'Fast response for urgent plumbing issues including burst pipes, severe leaks, and sewer backups during normal business hours.',
      href: '/services/emergency-plumbing',
      icon: Wrench,
      color: 'red',
      features: ['Fast Response', 'Licensed Technicians', 'Same-Day Repairs']
    },
    {
      title: 'Drain Cleaning',
      description: 'Professional drain cleaning services using advanced equipment. From kitchen sinks to main sewer lines, we clear all types of blockages.',
      href: '/services/drain-cleaning',
      icon: Droplets,
      color: 'blue',
      features: ['Hydro Jetting', 'Camera Inspections', 'Root Removal', 'Preventive Maintenance']
    },
    {
      title: 'Water Heater Services',
      description: 'Complete water heater solutions including repair, installation, and maintenance for tank and tankless systems.',
      href: '/services/water-heater-repair',
      icon: Thermometer,
      color: 'orange',
      features: ['Repair & Replacement', 'Tank & Tankless', 'Energy Efficiency', 'Warranty Service']
    },
    {
      title: 'Camera/Line Scope',
      description: 'Advanced camera inspection technology to visually inspect pipes and sewer lines, identifying blockages, damage, and potential issues.',
      href: '/services/camera-scope-inspections',
      icon: Search,
      color: 'green',
      features: ['Video Inspection', 'Sewer Line Scoping', 'Problem Identification', 'Accurate Diagnostics']
    },
    {
      title: 'Fixture Installation',
      description: 'Professional installation and replacement of plumbing fixtures including sinks, faucets, toilets, and shower systems.',
      href: '/services/fixture-installation',
      icon: ShowerHead,
      color: 'teal',
      features: ['Faucet Installation', 'Toilet Replacement', 'Sink Installation', 'Shower Systems']
    },
    {
      title: 'Sewer Line Repair',
      description: 'Expert sewer line repair and replacement services to resolve backups, breaks, and root intrusion issues.',
      href: '/services/sewer-line-repair',
      icon: Activity,
      color: 'amber',
      features: ['Line Repair', 'Root Removal', 'Trenchless Options', 'Full Replacement']
    },
    {
      title: 'Repipe Services',
      description: 'Complete home repiping solutions for outdated or failing plumbing systems with modern, durable materials.',
      href: '/services/repipe',
      icon: Wrench,
      color: 'slate',
      features: ['Whole Home Repipe', 'Copper & PEX', 'Minimal Disruption', 'Warranty Included']
    },
    {
      title: 'New Construction Plumbing',
      description: 'Complete plumbing systems for new construction projects with proper design, installation, and code compliance.',
      href: '/new-construction',
      icon: Home,
      color: 'purple',
      features: ['System Design', 'Code Compliance', 'Quality Installation', 'Project Coordination']
    },
    {
      title: 'Commercial Plumbing',
      description: 'Specialized commercial plumbing services for businesses with minimal disruption and efficient solutions.',
      href: '/commercial',
      icon: Building2,
      color: 'indigo',
      features: ['Business Focus', 'Minimal Disruption', 'Maintenance Programs', 'Emergency Service']
    }
  ];

  return (
    <PromotionsProvider>
    <div className="min-h-screen bg-white">
      <FloatingShareButton />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section with Contact Form */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url('/images/hero-background-pattern.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase tracking-tight mb-6">
                  Your Family's Trusted Plumbing Company
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-slate-200">
                  Serving families throughout Clark County and Cowlitz County since 2004. From Vancouver to Longview, Battle Ground to Woodland, Camas to Ridgefield - 
                  we're here for your family! From your kitchen sink to new home construction.
                </p>
                
                {/* Quick Contact Options */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href="tel:+13608832506"
                    className="inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    Call (360) 883-2506
                  </a>
                </div>
                
                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                    Licensed & Insured
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                    Family-Owned Since 2004
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                    Same-Day Service
                  </div>
                </div>
              </div>
              
              {/* Right Column - Contact Form (from homepage) */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl ring-1 ring-black/5 p-6 md:p-7">
                <div className="text-center mb-5">
                  <h2 className="text-xl font-semibold text-slate-900 mb-1">Request a Free Quote</h2>
                  <p className="text-sm text-slate-500">Fast response during business hours. No obligation.</p>
                </div>
                <form className="space-y-4" aria-label="Request service quote form">
                  <div>
                    <label className="sr-only" htmlFor="hero-name">Name</label>
                    <Input id="hero-name" placeholder="Your Name" className="text-black border-slate-300 focus:border-red-600 focus:ring-red-600" />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="hero-phone">Phone Number</label>
                    <Input id="hero-phone" type="tel" placeholder="Phone Number" className="text-black border-slate-300 focus:border-red-600 focus:ring-red-600" />
                  </div>
                  <div>
                    <Select>
                      <SelectTrigger className="text-black border-slate-300 focus:border-red-600 focus:ring-red-600">
                        <SelectValue placeholder="Service Needed" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Same-Day Service</SelectItem>
                        <SelectItem value="drain-cleaning">Drain Cleaning</SelectItem>
                        <SelectItem value="water-heater">Water Heater Repair</SelectItem>
                        <SelectItem value="camera-inspection">Camera Inspection</SelectItem>
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
      </section>

      {/* Compact Coupon Banner */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-brand-red to-red-600 rounded-2xl shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-6">
                {/* Left - Offer Text */}
                <div className="flex items-center gap-4 md:gap-6 text-white">
                  <div className="flex-shrink-0">
                    <div className="text-4xl md:text-5xl font-heading font-bold">{badgeLabel}</div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold mb-1">{headingLabel}</h3>
                    <p className="text-sm md:text-base text-white/90">{selectedPromotion.description}</p>
                  </div>
                </div>
                
                {/* Right - Code & CTA */}
                <div className="flex items-stretch gap-4 flex-shrink-0">
                  <div className="flex flex-col justify-center text-center">
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-1">Code</div>
                    <div className="bg-white px-6 py-3 rounded-lg">
                      <div className="text-xl font-heading font-bold text-brand-red">{couponCode}</div>
                    </div>
                  </div>
                  <a
                    href={ctaLink}
                    className="bg-white text-brand-red hover:bg-slate-100 px-6 py-3 rounded-lg font-bold transition-colors shadow-lg whitespace-nowrap flex items-center"
                  >
                    Claim Savings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header with Badge */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-brand-red mb-6">
                <Wrench className="h-4 w-4" />
                Our Services
              </div>
              <h2 className="text-4xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-4">Complete Family Plumbing Solutions</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                As a family business serving families throughout Clark County and Cowlitz County for over 20 years, we understand what matters most - 
                reliable service, honest pricing, and treating your home like our own.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                const colorClasses = {
                  red: 'bg-brand-red/10 text-brand-red border-brand-red/20',
                  blue: 'bg-brand-red/10 text-brand-red border-brand-red/20',
                  orange: 'bg-brand-red/10 text-brand-red border-brand-red/20',
                  green: 'bg-brand-red/10 text-brand-red border-brand-red/20',
                  teal: 'bg-brand-red/10 text-brand-red border-brand-red/20',
                  amber: 'bg-brand-red/10 text-brand-red border-brand-red/20',
                  slate: 'bg-brand-red/10 text-brand-red border-brand-red/20',
                  purple: 'bg-brand-red/10 text-brand-red border-brand-red/20',
                  indigo: 'bg-brand-red/10 text-brand-red border-brand-red/20'
                };

                return (
                  <div key={index} className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-slate-100 hover:border-brand-red/20 group">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 border-2 ${colorClasses[service.color as keyof typeof colorClasses]} group-hover:bg-brand-red/20 transition-colors`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-4 text-slate-900">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="text-slate-600 mb-6 space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-brand-red rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={service.href} 
                      className="text-brand-red font-bold hover:text-brand-red-dark transition-colors inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                      Learn More About {service.title} <span>→</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url('/images/hero-background-pattern.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              Service Areas
            </div>
            <h2 className="text-4xl font-heading font-bold uppercase tracking-tight text-white mb-4">Serving Families Throughout Southwest Washington</h2>
            <p className="text-xl text-slate-300 mb-12">
              As your neighborhood plumbing family, we're proud to serve families throughout 
              Clark County (Vancouver, Battle Ground, Ridgefield, Camas, Washougal, La Center, Amboy, Yacolt) and Cowlitz County (Longview, Woodland, Kalama, Castle Rock).
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { name: 'Vancouver', href: '/service-areas/vancouver-wa-plumber' },
                { name: 'Camas', href: '/service-areas/camas-plumber' },
                { name: 'Washougal', href: '/service-areas/washougal-plumber' },
                { name: 'Ridgefield', href: '/service-areas/ridgefield-plumber' },
                { name: 'La Center', href: '/service-areas/la-center-plumber' },
                { name: 'Woodland', href: '/service-areas/woodland-plumber' },
                { name: 'Longview', href: '/service-areas/longview-plumber' },
                { name: 'Kalama', href: '/service-areas/kalama-plumber' }
              ].map((area) => (
                <Link 
                  key={area.name} 
                  href={area.href}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow hover:shadow-xl transition-all text-center border border-white/20 hover:border-brand-red hover:bg-white/20 group"
                >
                  <p className="font-heading font-semibold text-white group-hover:text-brand-red transition-colors">{area.name}</p>
                  <p className="text-sm text-slate-300">Plumber</p>
                </Link>
              ))}
            </div>

            <Link 
              href="/service-areas"
              className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-lg font-bold hover:bg-brand-red-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View All Service Areas
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-8 text-center">Why Choose H2O Plumbing?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-heading font-bold text-brand-red mb-6">Our Commitment to Excellence</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-heading font-bold text-slate-900 mb-2">Licensed & Insured</h4>
                    <p className="text-slate-700">
                      Fully licensed, bonded, and insured for your protection. All work meets Washington state codes and standards.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-slate-900 mb-2">Experienced Technicians</h4>
                    <p className="text-slate-700">
                      Our plumbers have years of experience and ongoing training to handle any plumbing challenge effectively.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-slate-900 mb-2">Quality Guarantee</h4>
                    <p className="text-slate-700">
                      We stand behind our work with comprehensive warranties and are committed to your complete satisfaction.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-brand-red mb-6">Service You Can Trust</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-heading font-bold text-slate-900 mb-2">Transparent Pricing</h4>
                    <p className="text-slate-700">
                      Upfront pricing with no hidden fees. You'll know the cost before we begin work on your plumbing system.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-slate-900 mb-2">Same-Day Service</h4>
                    <p className="text-slate-700">
                      Most plumbing issues can be resolved the same day. We carry common parts and tools for efficient service.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-slate-900 mb-2">Family-Owned Business</h4>
                    <p className="text-slate-700">
                      Three generations of plumbers serving Southwest Washington families. We're invested in our community and treat your family like our own.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight mb-4">Ready for Professional Plumbing Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Contact H2O Plumbing today for reliable family plumbing services throughout Vancouver, 
            Clark County & Cowlitz County. We're here to take care of your family's plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/booking" 
              className="bg-white text-brand-red px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg"
            >
              Schedule Service Now
            </Link>
            <a 
              href="tel:+13608832506" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-brand-red transition-colors"
            >
              Call (360) 883-2506
            </a>
          </div>
        </div>
      </section>
    </div>
    </PromotionsProvider>
  );
}






