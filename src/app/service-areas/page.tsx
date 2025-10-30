'use client';

import { Metadata } from 'next'
import Link from 'next/link'
import { MasterButton } from '@/components/ui/master-button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { contactInfo } from '@/config/site'
import { MapPin, Phone, Clock, Star, CheckCircle, Wrench, Loader2, AlertCircle, Shield, Award, Users } from 'lucide-react'
import { useServiceAreas } from '@/hooks/use-service-areas'
import { BUSINESS_DATA } from '@/lib/business-data'
import { ServiceAreaChecker } from '@/components/services/service-area-checker'

// Note: Metadata export moved to layout.tsx since this is now a client component

export default function ServiceAreasPage() {
  const { serviceAreas, secondaryCities, loading, error } = useServiceAreas();

  // Transform API data to match existing component structure
  const transformedAreas = serviceAreas.map((area, index) => ({
    city: area.city,
    state: area.state,
    description: `Professional plumbing services in ${area.city} and surrounding areas.`,
    zipCodes: area.zipCodes.map(zip => zip.zipCode).join(', '),
    population: area.zipCodes.length > 1 ? '25,000+' : '15,000+', // Estimate based on ZIP codes
    responseTime: area.zipCodes.length > 0 && area.zipCodes[0].travelTime 
      ? `${area.zipCodes[0].travelTime}-${area.zipCodes[0].travelTime + 15} minutes`
      : '30-45 minutes',
    slug: `${area.city.toLowerCase().replace(/\s+/g, '-')}-${area.state.toLowerCase()}-plumber`,
    highlights: getServiceHighlights(area.city, area.county)
  }));

  // Get highlights based on city
  function getServiceHighlights(city: string, county: string | null): string[] {
    const baseHighlights = ['Professional service', '24/7 emergency', 'Licensed & insured'];
    
    switch (city.toLowerCase()) {
      case 'vancouver':
        return ['Largest city we serve', '24/7 emergency service', 'Commercial & residential'];
      case 'battle ground':
        return ['Our home base', 'Fastest response times', 'Local family business'];
      case 'camas':
        return ['Historic & new homes', 'Crown Park area', 'Lacamas Lake region'];
      case 'washougal':
        return ['Riverside properties', 'Rural & urban service', 'Historic downtown'];
      case 'ridgefield':
        return ['Growing community', 'New construction', 'Junction Ridge area'];
      case 'la center':
        return ['Small town service', 'Rural properties', 'Well system expertise'];
      case 'woodland':
        return ['Cowlitz County', 'Commercial service', 'Industrial facilities'];
      case 'longview':
        return ['Extended service area', 'Port facilities', 'Columbia River region'];
      default:
        return baseHighlights;
    }
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="bg-slate-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-brand-cyan">Home</Link>
            <span>/</span>
            <span className="text-brand-cyan">Service Areas</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url('/images/hero-background-pattern.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-brand-cyan" />
              <span className="font-semibold text-white">Serving Southwest Washington</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase tracking-tight mb-6">
              Our Service Areas
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-slate-200">
              Expert plumbing contractor serving 8+ cities across Clark County, Cowlitz County, and Southwest Washington. Residential and commercial plumbing services in Vancouver, Battle Ground, Camas, Washougal, Ridgefield, La Center, Woodland, and Longview. Licensed, insured, and locally owned since 2004.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-brand-cyan hover:bg-brand-cyan-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS_DATA.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-heading font-bold text-brand-cyan mb-2">8</div>
              <p className="text-lg">Cities Served</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-brand-cyan mb-2">4+</div>
              <p className="text-lg">Counties</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-brand-cyan mb-2">1-2 Hours</div>
              <p className="text-lg">Typical Response</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-brand-cyan mb-2">20+ Years</div>
              <p className="text-lg">Local Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* ZIP Code Checker */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-4">Check Your Service Area</h2>
            <p className="text-xl text-slate-600">Enter your ZIP code to see if we serve your area and get response time estimates</p>
          </div>
          <ServiceAreaChecker />
        </div>
      </section>

      {/* Service Coverage Map */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-4">Comprehensive Southwest Washington Coverage</h2>
            <p className="text-xl text-slate-600">From Vancouver to Longview - we serve it all</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loading && (
              <div className="col-span-full flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-secondary-500 mr-3" />
                <span className="text-gray-600">Loading service areas...</span>
              </div>
            )}
            
            {error && (
              <div className="col-span-full flex items-center justify-center py-12">
                <AlertCircle className="w-8 h-8 text-primary-500 mr-3" />
                <span className="text-primary-500">Error loading service areas: {error}</span>
              </div>
            )}
            
            {!loading && !error && transformedAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-brand-cyan group">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-red-50 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-brand-cyan" />
                    </div>
                  </div>
                  <Badge className="bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20 mb-3">
                    {area.responseTime}
                  </Badge>
                  <CardTitle className="text-2xl font-heading uppercase text-slate-900">
                    {area.city}, {area.state}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Population: {area.population}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">{area.description}</p>
                  
                  <div>
                    <h4 className="font-heading font-semibold uppercase text-slate-900 mb-2 text-sm">Service Highlights:</h4>
                    <ul className="space-y-2">
                      {area.highlights.map((highlight: string, idx: number) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-brand-cyan mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-xs text-slate-500 pt-3 border-t border-slate-200">
                    <strong>ZIP Codes:</strong> {area.zipCodes}
                  </div>
                  
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="w-full inline-flex items-center justify-center bg-brand-cyan hover:bg-brand-cyan-dark text-white px-6 py-3 rounded-lg font-bold transition-colors"
                  >
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Areas */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-4">Don't See Your City Listed?</h2>
            <p className="text-xl text-slate-600">
              We serve many other communities throughout Clark County and Southwest Washington. 
              Call us to confirm service availability in your area.
            </p>
            
            <div className="mt-8 grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {loading && (
                <div className="col-span-full flex items-center justify-center py-8">
                  <Loader2 className="w-6 h-6 animate-spin text-secondary-500 mr-2" />
                  <span className="text-gray-600">Loading additional areas...</span>
                </div>
              )}
              
              {!loading && secondaryCities.map((city, index) => (
                <div key={index} className="bg-slate-50 border-2 border-slate-200 rounded-lg p-3 text-center hover:border-brand-cyan hover:shadow-md transition-all">
                  <span className="text-slate-700 font-semibold">{city}</span>
                </div>
              ))}
              
              {!loading && secondaryCities.length === 0 && (
                <div className="col-span-full text-center text-gray-500 py-4">
                  Additional service areas available - call for details
                </div>
              )}
            </div>
            
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-brand-cyan hover:bg-brand-cyan-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg mt-8"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS_DATA.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Why Families Choose H2O Plumbing */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-4">Why Vancouver & Clark County Choose H2O Plumbing</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              As a Battle Ground-based, family-owned plumbing company, we've built our reputation on reliable service throughout Southwest Washington. Serving Vancouver, Clark County, and Cowlitz County since 2004 with honest pricing, licensed technicians, and quality workmanship you can trust.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Local Expertise',
                description: 'Deep knowledge of Southwest Washington water systems, building codes, and local plumbing challenges.',
                icon: <MapPin className="w-8 h-8" />
              },
              {
                title: 'Fast Response',
                description: 'Quick response times throughout Clark County and Cowlitz County with same-day service available.',
                icon: <Clock className="w-8 h-8" />
              },
              {
                title: 'Quality Work',
                description: 'Licensed, insured, and committed to quality workmanship on every job, big or small.',
                icon: <Wrench className="w-8 h-8" />
              },
              {
                title: 'Family Values',
                description: 'Honest pricing, reliable service, and treating every customer like family since 2004.',
                icon: <Star className="w-8 h-8" />
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-brand-cyan transition-all hover:shadow-lg">
                <div className="bg-red-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="text-brand-cyan">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-heading font-bold uppercase text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-8">Our Service Commitment</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-5xl font-heading font-bold text-brand-cyan mb-3">20+</div>
              <p className="text-lg text-slate-200">Years Serving Southwest WA</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-5xl font-heading font-bold text-brand-cyan mb-3">Same Day</div>
              <p className="text-lg text-slate-200">Service Available</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-5xl font-heading font-bold text-brand-cyan mb-3">100%</div>
              <p className="text-lg text-slate-200">Satisfaction Guarantee</p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase mb-4">Licensed & Insured Throughout Southwest Washington</h3>
            <p className="text-lg mb-8 text-slate-300">
              WA State License #ALLCOPL030RW | Oregon CCB #147151<br/>
              Fully licensed, insured, and bonded for your protection and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-brand-cyan hover:bg-brand-cyan-dark text-white px-10 py-5 rounded-lg font-bold text-xl transition-colors shadow-xl"
              >
                <Phone className="w-6 h-6" />
                Call {BUSINESS_DATA.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-10 py-5 rounded-lg font-bold text-xl transition-colors shadow-xl"
              >
                Request Service Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}







