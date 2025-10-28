import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MasterButton } from '@/components/ui/master-button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { contactInfo } from '@/config/site'
import { AlertTriangle, Flame, Waves, Search, ShowerHead, Home as HomeIcon, Phone, Shield, Activity } from 'lucide-react'
import { BUSINESS_DATA } from '@/lib/business-data'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: 'Residential Plumbing Services Vancouver, Longview WA | Clark & Cowlitz County | H2O',
  description: 'Professional residential plumbing for homeowners in Vancouver, Longview, Camas, Washougal, Ridgefield. Same-day service, water heater repair, drain cleaning, repiping. Family-owned since 2004. Licensed & insured.',
  keywords: 'residential plumbing, home plumber Vancouver WA, same-day plumbing Longview, water heater repair, drain cleaning Camas, repipe Ridgefield, plumber Clark County',
}

const residentialServices = [
  {
    title: 'Same-Day Service',
    description: 'Burst pipes, severe clogs, water heater failures, and other urgent plumbing issues during business hours.',
    icon: AlertTriangle,
    price: 'Starting at $89',
    features: ['Rapid response', 'Upfront pricing', 'Licensed technicians']
  },
  {
    title: 'Water Heater Services',
    description: 'Installation, repair, and replacement of traditional and tankless water heaters.',
    icon: Flame,
    price: 'From $150',
    features: ['All brands serviced', 'Energy-efficient options', 'Same-day installation', 'Warranty included']
  },
  {
    title: 'Drain Cleaning',
    description: 'Professional drain and sewer cleaning to restore proper flow and prevent backups.',
    icon: Waves,
    price: 'Starting at $125',
    features: ['Camera inspection', 'Hydro jetting', 'Root removal', 'Preventive maintenance']
  },
  {
    title: 'Camera Inspection',
    description: 'Video camera inspections to see inside your pipes and diagnose issues accurately.',
    icon: Search,
    price: 'From $99',
    features: ['Video inspection', 'Sewer line scoping', 'Problem identification', 'Accurate diagnostics']
  },
  {
    title: 'Fixture Installation',
    description: 'Installation and replacement of faucets, toilets, showers, and other plumbing fixtures.',
    icon: ShowerHead,
    price: 'Starting at $75',
    features: ['Quality fixtures', 'Professional installation', 'Code compliance', 'Clean-up included']
  },
  {
    title: 'Whole-House Repiping',
    description: 'Complete pipe replacement for older homes with outdated plumbing systems.',
    icon: HomeIcon,
    price: 'Custom quotes',
    features: ['Modern materials', 'Improved water pressure', 'Increased home value', 'Minimal disruption']
  },
  {
    title: 'Sewer Line Repair',
    description: 'Expert sewer line repair and replacement to resolve backups, breaks, and root intrusion.',
    icon: Activity,
    price: 'From $200',
    features: ['Line repair', 'Root removal', 'Trenchless options', 'Full replacement available']
  }
]

const maintenanceProgram = [
  'Annual plumbing inspection',
  'Water heater maintenance',
  'Drain cleaning service',
  'Fixture adjustments',
  'Pipe insulation check',
  'Water pressure testing',
  'Leak prevention inspection',
  'Priority scheduling'
]

export default function ResidentialPage() {
  const breadcrumbItems = [
    { label: 'Services', href: '/services' },
    { label: 'Residential' }
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="bg-slate-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <span className="text-brand-red">Residential Services</span>
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
                  Residential Plumbing Services
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-slate-200">
                  Professional plumbing services for homeowners throughout Clark County and Cowlitz County. From kitchen sinks to whole-home repiping, we treat your home like our own. Serving families in Vancouver, Longview, Castle Rock, Camas, Washougal, Ridgefield, and all surrounding communities.
                </p>
                
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
                    Same-Day Service
                  </div>
                </div>
              </div>
              
              {/* Right Column - Contact Form */}
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
                        <SelectItem value="water-heater">Water Heater Repair</SelectItem>
                        <SelectItem value="drain-cleaning">Drain Cleaning</SelectItem>
                        <SelectItem value="camera-inspection">Camera Inspection</SelectItem>
                        <SelectItem value="fixture-installation">Fixture Installation</SelectItem>
                        <SelectItem value="repipe">Repipe & Pipe Repair</SelectItem>
                        <SelectItem value="bathroom-remodel">Bathroom Remodel</SelectItem>
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

      {/* Service Stats */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">20+ Years</div>
              <p className="text-lg">Serving Families</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">Same Day</div>
              <p className="text-lg">Service Available</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">100%</div>
              <p className="text-lg">Satisfaction Guarantee</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">Licensed</div>
              <p className="text-lg">Insured & Bonded</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">Complete Residential Plumbing Services</h2>
            <p className="text-xl text-slate-600">Professional solutions for every plumbing need in your home</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white border-2 border-brand-red/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-brand-red" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4 text-slate-900">{service.title}</h3>
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="text-slate-700 text-sm space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-brand-red mr-2 text-lg">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-brand-red/10 p-4 rounded-lg">
                    <p className="text-brand-red font-bold text-sm">{service.price}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Maintenance Program */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
                Home Maintenance Program
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Protect your home and prevent costly repairs with our comprehensive plumbing maintenance program.
              </p>
              
              <div className="space-y-4 mb-8">
                {maintenanceProgram.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-brand-red mr-3 text-lg">✓</span>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                <h3 className="text-xl font-heading font-bold mb-4 text-brand-red">Program Benefits:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-heading font-bold mb-2 text-slate-900">Save Money</h4>
                    <p className="text-sm text-slate-600">Prevent costly repairs and issues</p>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold mb-2 text-slate-900">Peace of Mind</h4>
                    <p className="text-sm text-slate-600">Know your plumbing is in good condition</p>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold mb-2 text-slate-900">Priority Service</h4>
                    <p className="text-sm text-slate-600">Get faster response times</p>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold mb-2 text-slate-900">Extend Lifespan</h4>
                    <p className="text-sm text-slate-600">Keep fixtures and pipes working longer</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-brand-red/20">
              <h3 className="text-2xl font-heading font-bold mb-6 text-center text-slate-900">Schedule Your Service</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Service Needed</label>
                  <select className="w-full p-3 border rounded-lg">
                    <option>Same-Day Service</option>
                    <option>Water Heater Service</option>
                    <option>Drain Cleaning</option>
                    <option>Camera Inspection</option>
                    <option>Fixture Installation</option>
                    <option>Maintenance Inspection</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input type="text" className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input type="tel" className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Address</label>
                  <input type="text" className="w-full p-3 border rounded-lg" placeholder="Street Address, City, State" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Time</label>
                  <select className="w-full p-3 border rounded-lg">
                    <option>As soon as possible</option>
                    <option>Morning (7AM-12PM)</option>
                    <option>Afternoon (12PM-4PM)</option>
                    <option>Flexible</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Describe the Issue</label>
                  <textarea className="w-full p-3 border rounded-lg h-24" placeholder="Tell us about your plumbing issue"></textarea>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Schedule Service Call
                </Button>
              </form>
              <p className="text-xs text-slate-500 mt-4 text-center">
                Service calls start at $89. We provide upfront pricing before any work begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Residential */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.15),transparent_60%)]" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Why Homeowners Choose <span className="text-brand-red">H2O Plumbing</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Three generations of family plumbing experience serving families throughout Southwest Washington.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HomeIcon className="w-10 h-10 text-brand-red" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">Family-Owned</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Three generations serving Southwest Washington families since 2004.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-10 h-10 text-brand-red" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">Same-Day Service</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Fast response for urgent plumbing issues during business hours.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-10 h-10 text-brand-red" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">Upfront Pricing</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Transparent pricing with free estimates—no hidden fees or surprises.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-brand-red" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">Licensed & Insured</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Fully licensed, bonded, and insured for your peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.15),transparent_60%)]" aria-hidden="true"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready for Reliable <span className="text-brand-red">Home Plumbing Service?</span>
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-slate-300 leading-relaxed">
            From same-day repairs to complete installations, H2O Plumbing provides expert residential plumbing services throughout Vancouver, Longview, Castle Rock, Ridgefield, Camas, Washougal, and all surrounding communities in Clark and Cowlitz Counties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="bg-gradient-to-r from-brand-red to-brand-red-dark text-white px-12 py-5 rounded-xl font-heading font-bold text-2xl hover:shadow-2xl hover:shadow-brand-red/50 transition-all duration-300 inline-flex items-center hover:-translate-y-1 transform"
            >
              <Phone className="w-8 h-8 mr-3" />
              Call {BUSINESS_DATA.phone}
            </a>
            <Link
              href="/booking"
              className="bg-white text-brand-red px-12 py-5 rounded-xl font-heading font-bold text-2xl hover:bg-slate-100 transition-all duration-300 inline-flex items-center"
            >
              Schedule Online
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Map */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">Service Areas</h2>
            <p className="text-xl text-slate-600">We serve homeowners throughout Southwest Washington</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { city: 'Vancouver', zip: '98661, 98662, 98663, 98664, 98665, 98682, 98683, 98684, 98685, 98686' },
              { city: 'Battle Ground', zip: '98604' },
              { city: 'Camas', zip: '98607' },
              { city: 'Washougal', zip: '98671' },
              { city: 'Ridgefield', zip: '98642' },
              { city: 'La Center', zip: '98629' },
              { city: 'Woodland', zip: '98674' },
              { city: 'Longview', zip: '98632' }
            ].map((area, index) => (
              <div key={index} className="bg-white border-2 border-brand-red/20 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-heading font-bold text-brand-red mb-2">{area.city}</h3>
                <p className="text-sm text-slate-600">Zip codes: {area.zip}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg mb-6">Don't see your area? Call us - we may still be able to help!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS_DATA.phone}
              </a>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-3 bg-white text-brand-red border-2 border-brand-red hover:bg-brand-red hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                Schedule Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}





