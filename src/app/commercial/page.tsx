import { Metadata } from 'next'
import Link from 'next/link'
import { MasterButton } from '@/components/ui/master-button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { contactInfo } from '@/config/site'
import { Building2, UtensilsCrossed, ShoppingBag, Factory, Stethoscope, Building, CheckCircle2, Clock, Shield, Award, Users, MapPin, Wrench, TrendingUp, HeartHandshake, Star, Phone } from 'lucide-react'
import { BUSINESS_DATA } from '@/lib/business-data'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CommercialPortfolio } from '@/components/sections/commercial-portfolio'
import { CommercialQuoteForm } from '@/components/forms/commercial-quote-form'
import { BookingCTA, PhoneCTA } from '@/components/ui/cta-button'
import { FloatingShareButton } from '@/components/social/social-share'
import { generateSocialMeta, socialMetaTemplates } from '@/lib/social-meta'

export const metadata: Metadata = generateSocialMeta({
  ...socialMetaTemplates.services,
  title: 'Commercial Plumbing Vancouver WA | Restaurant, Office & Industrial Plumbers',
  description: '24/7 commercial plumbing in Vancouver, Battle Ground & Clark County. Restaurants, offices, retail & industrial. Licensed, 485+ projects. Same-day service. Code compliance experts.',
});

const commercialServices = [
  {
    title: 'Office Buildings',
    description: 'Comprehensive plumbing services for office complexes and corporate facilities.',
    icon: Building2,
    services: ['Restroom maintenance', 'Water fountain service', 'Break room plumbing', 'Pipe repairs & replacements'],
    rating: 5
  },
  {
    title: 'Restaurants & Food Service',
    description: 'Specialized plumbing for restaurants, cafes, and commercial kitchens.',
    icon: UtensilsCrossed,
    services: ['Grease trap installation', 'Kitchen equipment hookups', 'Floor drains', 'Hot water systems'],
    rating: 5
  },
  {
    title: 'Retail Spaces',
    description: 'Plumbing solutions for retail stores, shopping centers, and customer facilities.',
    icon: ShoppingBag,
    services: ['Public restrooms', 'Janitorial sinks', 'Backflow prevention', 'ADA compliance'],
    rating: 4.9
  },
  {
    title: 'Industrial Facilities',
    description: 'Heavy-duty plumbing systems for manufacturing and industrial operations.',
    icon: Factory,
    services: ['Process water systems', 'Waste management', 'High-pressure lines', 'Safety equipment'],
    rating: 4.8
  },
  {
    title: 'Medical/Dental Offices',
    description: 'Specialized plumbing for healthcare facilities and dental practices.',
    icon: Stethoscope,
    services: ['Specialized drainage', 'Water line installations', 'Fixture repairs', 'Patient restrooms'],
    rating: 5
  },
  {
    title: 'Multi-Tenant Buildings',
    description: 'Comprehensive plumbing management for apartment complexes and condos.',
    icon: Building,
    services: ['Central systems', 'Individual metering', 'Common areas', 'Laundry facilities'],
    rating: 4.9
  }
]

const maintenanceServices = [
  {
    title: 'Preventive Maintenance',
    description: 'Regular system inspections and maintenance to prevent costly breakdowns',
    icon: Clock
  },
  {
    title: 'Priority Response',
    description: '24/7 same-day service with priority scheduling for commercial clients',
    icon: Shield
  },
  {
    title: 'Drain Maintenance',
    description: 'Specialized cleaning and maintenance for commercial drainage systems',
    icon: Wrench
  },
  {
    title: 'System Optimization',
    description: 'Efficiency improvements to reduce water usage and utility costs',
    icon: TrendingUp
  }
]

export default function CommercialPage() {
  const breadcrumbItems = [
    { label: 'Services', href: '/services' },
    { label: 'Commercial' }
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
            <span className="text-brand-red">Commercial Services</span>
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
                  Commercial Plumbing Partner You Can Trust
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-slate-200">
                  Professional commercial plumber serving Vancouver, Clark County, and Cowlitz County businesses. Expert plumbing services for restaurants, offices, retail stores, and industrial facilities. Licensed, insured, and trusted by 50+ local businesses for same-day repairs, maintenance, and installations.
                </p>
                
                {/* Trust Badge */}
                <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg px-4 py-3 mb-8">
                  <Building2 className="w-5 h-5 text-brand-red" />
                  <span className="font-semibold text-white">Trusted by 50+ Local Businesses</span>
                </div>
                
                {/* Quick Contact Options */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    Call {BUSINESS_DATA.phone}
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
                    24/7 Priority Response
                  </div>
                </div>
              </div>
              
              {/* Right Column - Contact Form */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl ring-1 ring-black/5 p-6 md:p-7">
                <div className="text-center mb-5">
                  <h2 className="text-xl font-semibold text-slate-900 mb-1">Request a Commercial Quote</h2>
                  <p className="text-sm text-slate-500">Priority scheduling for business clients. No obligation.</p>
                </div>
                <form className="space-y-4" aria-label="Request commercial quote form">
                  <div>
                    <label className="sr-only" htmlFor="hero-name">Business Name</label>
                    <Input id="hero-name" placeholder="Business Name" className="text-black border-slate-300 focus:border-red-600 focus:ring-red-600" />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="hero-phone">Phone Number</label>
                    <Input id="hero-phone" type="tel" placeholder="Phone Number" className="text-black border-slate-300 focus:border-red-600 focus:ring-red-600" />
                  </div>
                  <div>
                    <Select>
                      <SelectTrigger className="text-black border-slate-300 focus:border-red-600 focus:ring-red-600">
                        <SelectValue placeholder="Business Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="restaurant">Restaurant/Food Service</SelectItem>
                        <SelectItem value="office">Office Building</SelectItem>
                        <SelectItem value="retail">Retail Space</SelectItem>
                        <SelectItem value="industrial">Industrial Facility</SelectItem>
                        <SelectItem value="medical">Medical/Dental</SelectItem>
                        <SelectItem value="multi-tenant">Multi-Tenant Building</SelectItem>
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

      {/* Stats Section */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">50+</div>
              <p className="text-lg">Business Clients</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">24/7</div>
              <p className="text-lg">Emergency Response</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">Same Day</div>
              <p className="text-lg">Service Available</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">20+ Years</div>
              <p className="text-lg">Commercial Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Portfolio Section */}
      <CommercialPortfolio />

      {/* Ready to Partner CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-6">
            Ready to <span className="text-brand-red">Partner</span> With Us?
          </h2>
          <p className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed">
            Join the 50+ businesses who trust H2O Plumbing for reliable, code-compliant commercial plumbing. 
            From routine maintenance to emergency repairs, we're here 24/7.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-5xl font-heading font-bold text-brand-red mb-3">2hr</div>
              <p className="text-lg text-slate-200">Average Response Time</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-5xl font-heading font-bold text-brand-red mb-3">100%</div>
              <p className="text-lg text-slate-200">Code Compliance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-5xl font-heading font-bold text-brand-red mb-3">24/7</div>
              <p className="text-lg text-slate-200">Emergency Service</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-10 py-5 rounded-lg font-bold text-xl transition-colors shadow-xl"
            >
              <Phone className="w-6 h-6" />
              Call {BUSINESS_DATA.phone}
            </a>
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-10 py-5 rounded-lg font-bold text-xl transition-colors shadow-xl"
            >
              Request Commercial Quote
            </a>
          </div>
          
          <p className="text-slate-400 mt-8 text-sm">
            Licensed in WA & OR • Serving Clark County & Cowlitz County Since 2004
          </p>
        </div>
      </section>

      {/* Commercial Industry Specialties */}
      <section className="py-20 px-4 bg-white" id="industry-specialties">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-4">
              Commercial Plumbing Specialties in Clark County
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Expert commercial plumbing services tailored to your industry's unique requirements. From restaurant grease traps to industrial process water systems, we handle it all with minimal business disruption.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border border-slate-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-brand-red" />
                    </div>
                    <div className="flex items-center">
                      {Array.from({ length: Math.floor(service.rating) }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                      ))}
                      {service.rating % 1 > 0 && (
                        <Star className="h-4 w-4 text-yellow-400" />
                      )}
                      <span className="text-sm text-slate-500 ml-1">{service.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-slate-900 mt-2 font-heading uppercase">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-center text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-red mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Programs */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-4">
              Commercial Plumbing Maintenance Plans
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Prevent costly downtime and emergency repairs with scheduled maintenance. Customized plans for restaurants, offices, retail, and industrial facilities across Vancouver and Clark County.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {maintenanceServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border border-slate-200">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-brand-red" />
                  </div>
                  <CardTitle className="text-xl font-heading uppercase">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-slate-900 text-white p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase mb-4 text-center">Protect Your Business Investment</h3>
              <p className="text-lg mb-8 text-slate-200 text-center">
                Regular maintenance prevents costly emergencies, extends equipment life, and keeps your operations running smoothly. We work around your business hours to minimize disruption across Vancouver, Battle Ground, and Camas.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-8 h-8 text-brand-red" />
                  </div>
                  <div className="font-semibold mb-1">Flexible Scheduling</div>
                  <div className="text-sm text-slate-300">Work around your hours</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-brand-red" />
                  </div>
                  <div className="font-semibold mb-1">Prevent Emergencies</div>
                  <div className="text-sm text-slate-300">Catch issues early</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-8 h-8 text-brand-red" />
                  </div>
                  <div className="font-semibold mb-1">Extend Equipment Life</div>
                  <div className="text-sm text-slate-300">Maximize your investment</div>
                </div>
              </div>
              <div className="text-center">
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Schedule Maintenance Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section - Updated with more conversion elements */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-white opacity-60 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-4">
              Get Your Commercial Quote
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Ready to work with Southwest Washington's most reliable commercial plumbing service?
              Our quotes include:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="bg-red-50 p-2 rounded-full mr-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red" />
                </div>
                <span className="text-slate-700">Detailed service options</span>
              </li>
              <li className="flex items-center">
                <div className="bg-red-50 p-2 rounded-full mr-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red" />
                </div>
                <span className="text-slate-700">Upfront pricing</span>
              </li>
              <li className="flex items-center">
                <div className="bg-red-50 p-2 rounded-full mr-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red" />
                </div>
                <span className="text-slate-700">Response time guarantee</span>
              </li>
              <li className="flex items-center">
                <div className="bg-red-50 p-2 rounded-full mr-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red" />
                </div>
                <span className="text-slate-700">Flexible scheduling options</span>
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
                <span className="text-slate-700 font-medium">Business Client Rating</span>
              </div>
              <p className="italic text-slate-600 text-sm">
                "H2O has been our trusted plumbing partner for years. Their response time and professionalism 
                ensure our operations continue without interruption."
              </p>
              <p className="text-slate-900 font-medium text-sm mt-2">— Sarah Martinez, Operations Manager, Riverview Restaurant</p>
            </div>
            
            <div className="hidden md:block">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg w-full"
              >
                Request a Service Consultation
              </a>
            </div>
          </div>
          
          {/* Form column */}
          <div>
            <CommercialQuoteForm />
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
              <p className="text-sm text-slate-600">24/7 Same-Day Service</p>
            </div>
            <div className="text-center">
              <div className="bg-red-50 p-4 rounded-full mb-3 inline-block">
                <Award className="h-6 w-6 text-brand-red" />
              </div>
              <p className="text-sm text-slate-600">Top-Rated Commercial Service</p>
            </div>
            <div className="text-center">
              <div className="bg-red-50 p-4 rounded-full mb-3 inline-block">
                <Users className="h-6 w-6 text-brand-red" />
              </div>
              <p className="text-sm text-slate-600">Industry-Specific Expertise</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section for SEO */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-12 text-center">
            Commercial Plumbing FAQ
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-heading font-bold uppercase text-slate-900 mb-3">
                Do you provide 24/7 commercial plumbing services in Vancouver?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Yes, H2O Plumbing offers 24/7 emergency commercial plumbing services throughout Vancouver, Battle Ground, Camas, and all of Clark County. We understand that plumbing emergencies don't follow business hours, and we prioritize urgent commercial calls to get you back in business fast.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-heading font-bold uppercase text-slate-900 mb-3">
                What commercial plumbing services do you offer for restaurants?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                We specialize in restaurant plumbing including grease trap installation and maintenance, commercial kitchen equipment hookups, floor drain cleaning, hot water system repairs, backflow prevention testing, and health department compliance. We work around your business hours to minimize disruption.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-heading font-bold uppercase text-slate-900 mb-3">
                How much does commercial plumbing maintenance cost?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Commercial maintenance plans are customized based on your facility size, industry, and specific needs. Regular maintenance helps prevent unexpected breakdowns and extends the life of your plumbing systems. Contact us for a free consultation and customized quote for your Vancouver or Clark County business.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-heading font-bold uppercase text-slate-900 mb-3">
                Are you licensed for commercial plumbing in Washington State?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Yes, H2O Plumbing is fully licensed, bonded, and insured for commercial plumbing work in Washington State. We maintain all required certifications for backflow testing, grease trap installation, and comply with all local building codes in Clark County and Cowlitz County.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section with Local SEO Enhancements */}
      <section className="py-20 px-4 bg-slate-50" id="service-areas">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-8">
            Commercial Plumbing Service Areas in Southwest Washington
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Providing expert commercial plumbing throughout Clark County, Cowlitz County, and surrounding areas
          </p>
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
            <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase mb-4">24/7 Commercial Plumbing Service</h3>
            <p className="text-lg mb-6 text-slate-200">
              Emergency commercial plumbing available now in Vancouver, Battle Ground, Camas, and throughout Clark County. Fast, reliable response when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now: {BUSINESS_DATA.phone}
              </a>
            </div>
          </div>
        </div>
        
        {/* Enhanced Schema Data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "H2O Plumbing Services - Commercial Plumbing",
          "image": "https://h2oplumbers.com/logo.png",
          "@id": "https://h2oplumbers.com/commercial",
          "url": "https://h2oplumbers.com/commercial",
          "telephone": "+13608832506",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Battle Ground",
            "addressLocality": "Battle Ground",
            "addressRegion": "WA",
            "postalCode": "98604",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 45.7809,
            "longitude": -122.5355
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Vancouver",
              "containedInPlace": {"@type": "AdministrativeArea", "name": "Clark County"}
            },
            {
              "@type": "City",
              "name": "Battle Ground",
              "containedInPlace": {"@type": "AdministrativeArea", "name": "Clark County"}
            },
            {
              "@type": "City",
              "name": "Camas",
              "containedInPlace": {"@type": "AdministrativeArea", "name": "Clark County"}
            },
            {
              "@type": "City",
              "name": "Longview",
              "containedInPlace": {"@type": "AdministrativeArea", "name": "Cowlitz County"}
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Commercial Plumbing Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Restaurant Plumbing Services",
                  "description": "Grease trap installation, kitchen equipment hookups, floor drains"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Office Building Plumbing",
                  "description": "Restroom maintenance, water fountains, break room plumbing"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Industrial Plumbing",
                  "description": "Process water systems, high-pressure lines, waste management"
                }
              }
            ]
          }
        }) }} />
        
        {/* FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do you provide 24/7 commercial plumbing services in Vancouver?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, H2O Plumbing offers 24/7 emergency commercial plumbing services throughout Vancouver, Battle Ground, Camas, and all of Clark County. We prioritize urgent commercial calls to get you back in business fast."
              }
            },
            {
              "@type": "Question",
              "name": "What commercial plumbing services do you offer for restaurants?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We specialize in restaurant plumbing including grease trap installation and maintenance, commercial kitchen equipment hookups, floor drain cleaning, hot water system repairs, backflow prevention testing, and health department compliance."
              }
            }
          ]
        }) }} />
      </section>
    </div>
  );
}





