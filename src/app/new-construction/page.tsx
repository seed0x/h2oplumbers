import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MasterButton } from '@/components/ui/master-button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { contactInfo } from '@/config/site'
import { Wrench, Ruler, ShowerHead, CheckCircle2, Building2, Clock, Target, Handshake, Star, Shield, Users, MapPin, Phone } from 'lucide-react'
import { BuilderPortfolio } from '@/components/sections/builder-portfolio'
import { NewConstructionQuoteForm } from '@/components/forms/new-construction-quote-form'
import { BookingCTA, PhoneCTA } from '@/components/ui/cta-button'
import { FloatingShareButton } from '@/components/social/social-share'
import { generateSocialMeta, socialMetaTemplates } from '@/lib/social-meta'

export const metadata: Metadata = generateSocialMeta({
  ...socialMetaTemplates.services,
  title: 'New Construction Plumbing Vancouver WA | Builder Partner | H2O Plumbing',
  description: 'Trusted new construction plumbing for builders in Vancouver, Battle Ground & Clark County. Residential, commercial & multi-family projects. Licensed, on-time delivery.',
});

const constructionProcess = [
  {
    step: '1',
    title: 'Design & Planning',
    description: 'We work with architects and contractors to design efficient plumbing systems that meet all codes and regulations.',
    icon: Ruler
  },
  {
    step: '2', 
    title: 'Rough-In Installation',
    description: 'Installation of water lines, drain lines, and vent systems before walls are closed up.',
    icon: Wrench
  },
  {
    step: '3',
    title: 'Top-Out & Testing',
    description: 'Completing vertical runs, installing fixtures, and pressure testing all systems.',
    icon: ShowerHead
  },
  {
    step: '4',
    title: 'Final Inspection',
    description: 'Ensuring all work meets local building codes and passes required inspections.',
    icon: CheckCircle2
  }
]

const projectTypes = [
  {
    title: 'Residential New Builds',
    description: 'Complete plumbing systems for single-family homes, townhomes, and custom residences.',
    features: ['Water service connections', 'Interior plumbing rough-in', 'Fixture installation', 'Drain & vent systems']
  },
  {
    title: 'Commercial Construction',
    description: 'Plumbing systems for office buildings, retail spaces, restaurants, and industrial facilities.',
    features: ['Commercial grade fixtures', 'ADA compliance', 'Backflow prevention', 'Grease trap systems']
  },
  {
    title: 'Multi-Family Developments',
    description: 'Apartments, condominiums, and multi-unit housing projects.',
    features: ['Central water systems', 'Individual unit metering', 'Laundry facilities', 'Common area plumbing']
  }
]

export default function NewConstructionPage() {
  const breadcrumbItems = [
    { label: 'Services', href: '/services' },
    { label: 'New Construction' }
  ];

  return (
    <div className="min-h-screen">
      <FloatingShareButton />
      
      {/* Breadcrumbs */}
      <nav className="bg-slate-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <span className="text-brand-red">New Construction</span>
          </div>
        </div>
      </nav>

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
                  New Construction Plumbing Partner You Can Trust
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-slate-200">
                  Licensed new construction plumbing contractor serving Vancouver, Battle Ground, Camas, and Clark County builders. From rough-in to final inspection - we deliver code-compliant systems on schedule. Professional residential and commercial plumbing installation for Southwest Washington construction projects.
                </p>
                
                {/* Trust Badge */}
                <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg px-4 py-3 mb-8">
                  <Building2 className="w-5 h-5 text-brand-red" />
                  <span className="font-semibold text-white">Trusted by 9+ Major Builders</span>
                </div>
                
                {/* Quick Contact Options */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href="tel:3608832506"
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
                    On-Time Delivery
                  </div>
                </div>
              </div>
              
              {/* Right Column - Contact Form */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl ring-1 ring-black/5 p-6 md:p-7">
                <div className="text-center mb-5">
                  <h2 className="text-xl font-semibold text-slate-900 mb-1">Request a Project Quote</h2>
                  <p className="text-sm text-slate-500">Priority scheduling for builders. No obligation.</p>
                </div>
                <form className="space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="hero-name">Name or Company</label>
                    <input id="hero-name" placeholder="Name or Company" className="w-full p-3 border border-slate-300 rounded-lg focus:border-brand-red focus:ring-brand-red text-black" />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="hero-phone">Phone Number</label>
                    <input id="hero-phone" type="tel" placeholder="Phone Number" className="w-full p-3 border border-slate-300 rounded-lg focus:border-brand-red focus:ring-brand-red text-black" />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="hero-project">Project Type</label>
                    <select id="hero-project" className="w-full p-3 border border-slate-300 rounded-lg focus:border-brand-red focus:ring-brand-red text-black">
                      <option>Project Type</option>
                      <option>Residential New Build</option>
                      <option>Commercial Construction</option>
                      <option>Multi-Family Development</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                  >
                    Get Free Quote
                  </button>
                </form>
                <p className="text-[10px] text-slate-500 mt-4 text-center leading-relaxed">
                  By submitting this form you agree to be contacted about your request. We never share your information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">1000+</div>
              <p className="text-lg">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">20+</div>
              <p className="text-lg">Builder Partners</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">2000+</div>
              <p className="text-lg">Units Built</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">20+ Years</div>
              <p className="text-lg">Construction Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Builder Portfolio Section */}
      <BuilderPortfolio />

      {/* Ready to Partner CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-6">
            Ready to <span className="text-brand-red">Partner</span> With Us?
          </h2>
          <p className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed">
            Join the 20+ builders who trust H2O Plumbing for reliable, code-compliant plumbing systems. 
            From rough-in to final inspection, we deliver on time, every time.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-5xl font-heading font-bold text-brand-red mb-3">98%</div>
              <p className="text-lg text-slate-200">On-Time Completion Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-5xl font-heading font-bold text-brand-red mb-3">100%</div>
              <p className="text-lg text-slate-200">Code Compliance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-5xl font-heading font-bold text-brand-red mb-3">24/7</div>
              <p className="text-lg text-slate-200">Builder Support</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3608832506"
              className="inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-10 py-5 rounded-lg font-bold text-xl transition-colors shadow-xl"
            >
              <Phone className="w-6 h-6" />
              Call (360) 883-2506
            </a>
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-10 py-5 rounded-lg font-bold text-xl transition-colors shadow-xl"
            >
              Request Builder Quote
            </a>
          </div>
          
          <p className="text-slate-400 mt-8 text-sm">
            Licensed in WA & OR • Serving Clark County & Cowlitz County Since 2004
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-white opacity-60 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-4">
              Get Your Project Quote
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Partner with Clark County's trusted new construction plumbing contractor. Our quotes include:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="bg-red-50 p-2 rounded-full mr-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red" />
                </div>
                <span className="text-slate-700">Detailed cost breakdown</span>
              </li>
              <li className="flex items-center">
                <div className="bg-red-50 p-2 rounded-full mr-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red" />
                </div>
                <span className="text-slate-700">Materials & labor estimates</span>
              </li>
              <li className="flex items-center">
                <div className="bg-red-50 p-2 rounded-full mr-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red" />
                </div>
                <span className="text-slate-700">Timeline projection</span>
              </li>
              <li className="flex items-center">
                <div className="bg-red-50 p-2 rounded-full mr-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red" />
                </div>
                <span className="text-slate-700">Code compliance assurance</span>
              </li>
              <li className="flex items-center">
                <div className="bg-red-50 p-2 rounded-full mr-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red" />
                </div>
                <span className="text-slate-700">Fixture spec sheets</span>
              </li>
            </ul>
            
            {/* Social proof elements */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-8">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-slate-700 font-medium">Builder Rating</span>
              </div>
              <p className="italic text-slate-600 text-sm">
                "H2O has been reliable and professional on every project. Their attention to detail and code compliance keeps us on schedule."
              </p>
              <p className="text-slate-900 font-medium text-sm mt-2">— Local Builder, Vancouver WA</p>
            </div>
          </div>
          
          {/* Form column */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-slate-200">
            <h3 className="text-2xl font-heading font-bold uppercase mb-6 text-center">Get Your Project Quote</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700">Project Type</label>
                <select className="w-full p-3 border border-slate-300 rounded-lg focus:border-brand-red focus:ring-brand-red">
                  <option>Residential New Build</option>
                  <option>Commercial Construction</option>
                  <option>Multi-Family Development</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700">Project Location</label>
                <input type="text" className="w-full p-3 border border-slate-300 rounded-lg focus:border-brand-red focus:ring-brand-red" placeholder="City, State" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700">Square Footage (approx.)</label>
                <input type="text" className="w-full p-3 border border-slate-300 rounded-lg focus:border-brand-red focus:ring-brand-red" placeholder="e.g. 2,500 sq ft" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700">Timeline</label>
                <select className="w-full p-3 border border-slate-300 rounded-lg focus:border-brand-red focus:ring-brand-red">
                  <option>Within 30 days</option>
                  <option>1-3 months</option>
                  <option>3-6 months</option>
                  <option>6+ months</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-brand-red hover:bg-brand-red-dark text-white px-6 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg">
                Request Quote
              </button>
            </form>
          </div>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-16">
            <div className="text-center">
              <div className="bg-red-50 p-4 rounded-full mb-3 inline-block">
                <Shield className="h-6 w-6 text-brand-red" />
              </div>
              <p className="text-sm text-slate-600">Licensed & Insured</p>
            </div>
            <div className="text-center">
              <div className="bg-red-50 p-4 rounded-full mb-3 inline-block">
                <Clock className="h-6 w-6 text-brand-red" />
              </div>
              <p className="text-sm text-slate-600">On-Time Completion</p>
            </div>
            <div className="text-center">
              <div className="bg-red-50 p-4 rounded-full mb-3 inline-block">
                <Users className="h-6 w-6 text-brand-red" />
              </div>
              <p className="text-sm text-slate-600">Experienced Teams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-20 px-4 bg-slate-50" id="construction-process">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-4">Our Construction Process</h2>
            <p className="text-xl text-slate-600">A proven approach that ensures quality and compliance</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {constructionProcess.map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border border-slate-200">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center">
                    <process.icon className="w-8 h-8 text-brand-red" />
                  </div>
                  <div className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <CardTitle className="text-xl font-heading uppercase">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    {process.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 px-4 bg-white" id="project-types">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-4">Construction Project Types</h2>
            <p className="text-xl text-slate-600">We handle all types of new construction plumbing</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border border-slate-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 font-heading uppercase">{project.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-red mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-center text-slate-900 mb-4">
            Why Builders Choose Us
          </h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
            We understand construction timelines and deliver the reliability you need.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all border-2 border-slate-200 hover:border-brand-red group">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
                <Building2 className="text-brand-red w-8 h-8 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-bold uppercase mb-3 text-slate-900">Licensed & Insured</h3>
              <p className="text-slate-600 leading-relaxed">WA Contractor License #ALLCOPL030RW and OR CCB# 147151</p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all border-2 border-slate-200 hover:border-brand-red group">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
                <Clock className="text-brand-red w-8 h-8 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-bold uppercase mb-3 text-slate-900">On-Time Performance</h3>
              <p className="text-slate-600 leading-relaxed">We meet construction schedules and deadlines consistently</p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all border-2 border-slate-200 hover:border-brand-red group">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
                <Target className="text-brand-red w-8 h-8 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-bold uppercase mb-3 text-slate-900">Code Compliance</h3>
              <p className="text-slate-600 leading-relaxed">Deep knowledge of local building codes and permit requirements</p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all border-2 border-slate-200 hover:border-brand-red group">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
                <Handshake className="text-brand-red w-8 h-8 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-bold uppercase mb-3 text-slate-900">Local Partnership</h3>
              <p className="text-slate-600 leading-relaxed">Trusted by builders throughout Southwest Washington</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 px-4 bg-white" id="service-areas">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-8">Construction Service Areas</h2>
          <p className="text-xl text-slate-600 mb-12">Serving construction projects throughout Southwest Washington</p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 text-center mb-12">
            {[
              { city: 'Vancouver', county: 'Clark County' },
              { city: 'Battle Ground', county: 'Clark County' },
              { city: 'Camas', county: 'Clark County' },
              { city: 'Washougal', county: 'Clark County' },
              { city: 'Ridgefield', county: 'Clark County' },
              { city: 'La Center', county: 'Clark County' },
              { city: 'Woodland', county: 'Cowlitz County' },
              { city: 'Longview', county: 'Cowlitz County' }
            ].map((location, index) => (
              <div key={index} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow shadow-sm border border-slate-200">
                <h3 className="font-semibold text-slate-900">{location.city}, WA</h3>
                <p className="text-sm text-slate-600">{location.county}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-900 text-white p-8 md:p-12 rounded-2xl shadow-lg">
            <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-6 text-slate-200">
              Contact us for expert new construction plumbing services throughout Clark County and Cowlitz County.
            </p>
            <a
              href="tel:3608832506"
              className="inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
            >
              Call for Quote
            </a>
          </div>
        </div>
        
        {/* Local Schema Data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "New Construction Plumbing Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "H2O Plumbing Services",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Battle Ground",
              "addressRegion": "WA",
              "postalCode": "98604",
              "addressCountry": "US"
            },
            "telephone": "+13608832506"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Vancouver",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Clark County"
              }
            },
            {
              "@type": "City",
              "name": "Battle Ground",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Clark County"
              }
            },
            {
              "@type": "City",
              "name": "Camas",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Clark County"
              }
            }
          ],
          "serviceType": "New Construction Plumbing"
        }) }} />
      </section>
    </div>
  )
}







