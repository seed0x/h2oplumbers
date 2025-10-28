import { Metadata } from 'next'
import Link from 'next/link'
import { MasterButton } from '@/components/ui/master-button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { contactInfo } from '@/config/site'
import { BUSINESS_DATA } from '@/lib/business-data'
import { CheckCircle2, Building2, Phone, Clock, MapPin, Shield, Zap, Target, Utensils, Building, Store, Stethoscope } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tenant Improvement Plumbing Vancouver WA | Commercial Build-Out | Clark County',
  description: 'Professional tenant improvement plumbing for restaurants, offices, retail in Vancouver, Battle Ground, Camas & Clark County. Commercial build-outs, remodels. Licensed plumber. Call (360) 883-2506.',
  keywords: 'tenant improvement plumbing Vancouver WA, commercial build-out Clark County, restaurant plumbing Battle Ground, office plumbing Camas, commercial remodel Vancouver',
}

const tiServices = [
  {
    title: 'Restaurant Conversions',
    description: 'Transform any space into a fully functional restaurant with proper plumbing infrastructure.',
    icon: <Utensils className="w-10 h-10 text-brand-red" />,
    features: [
      'Kitchen equipment hookups',
      'Grease trap installation',
      'Floor drain systems',
      'Hand washing stations',
      'Ice machine connections',
      'Dishwasher plumbing'
    ]
  },
  {
    title: 'Office Build-Outs',
    description: 'Complete plumbing systems for office spaces, break rooms, and restroom facilities.',
    icon: <Building className="w-10 h-10 text-brand-red" />,
    features: [
      'Restroom installations',
      'Break room plumbing',
      'Water fountains',
      'Coffee station hookups',
      'ADA compliance',
      'Water line connections'
    ]
  },
  {
    title: 'Retail Modifications',
    description: 'Plumbing modifications for retail spaces, salons, and customer service areas.',
    icon: <Store className="w-10 h-10 text-brand-red" />,
    features: [
      'Customer restrooms',
      'Employee facilities',
      'Utility sinks',
      'Service counters',
      'Storage areas',
      'Backflow prevention'
    ]
  },
  {
    title: 'Medical/Dental Offices',
    description: 'Specialized plumbing for healthcare facilities with strict regulatory requirements.',
    icon: <Stethoscope className="w-10 h-10 text-brand-red" />,
    features: [
      'Medical-grade fixtures',
      'Sterilization systems',
      'Lab sinks',
      'Eyewash stations',
      'Patient restrooms',
      'Waste management'
    ]
  }
]

const tiProcess = [
  {
    step: '1',
    title: 'Design Review',
    description: 'We review architectural plans and provide plumbing design input to ensure code compliance and functionality.',
    timeline: '1-2 days'
  },
  {
    step: '2',
    title: 'Permit Assistance',
    description: 'Help obtain necessary permits and ensure all work meets local building codes and regulations.',
    timeline: '3-7 days'
  },
  {
    step: '3',
    title: 'Rough-In Work',
    description: 'Install new plumbing lines, relocate existing pipes, and prepare infrastructure for fixtures.',
    timeline: '2-5 days'
  },
  {
    step: '4',
    title: 'Fixture Installation',
    description: 'Install all plumbing fixtures, equipment hookups, and complete final connections.',
    timeline: '1-3 days'
  },
  {
    step: '5',
    title: 'Testing & Inspection',
    description: 'Pressure test all systems, coordinate inspections, and ensure everything is functioning properly.',
    timeline: '1-2 days'
  }
]

export default function TenantImprovementsPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="bg-slate-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <Link href="/commercial" className="hover:text-brand-red">Commercial</Link>
            <span>/</span>
            <span className="text-brand-red">Tenant Improvements</span>
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
                  Tenant Improvement Plumbing Services
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-slate-200">
                  Expert commercial plumbing for tenant improvements, build-outs, and remodels in Vancouver, Battle Ground, Camas, and all Clark County. Restaurant conversions, office spaces, retail modifications. Licensed commercial plumber.
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
                    Commercial Specialists
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                    Code Compliant
                  </div>
                </div>
              </div>
              
              {/* Right Column - Contact Form */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl ring-1 ring-black/5 p-6 md:p-7">
                <div className="text-center mb-5">
                  <h2 className="text-xl font-semibold text-slate-900 mb-1">Request TI Quote</h2>
                  <p className="text-sm text-slate-500">Fast turnaround. Competitive pricing.</p>
                </div>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Business Name" className="text-black border-slate-300 focus:border-red-600 focus:ring-red-600" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Phone Number" className="text-black border-slate-300 focus:border-red-600 focus:ring-red-600" />
                  </div>
                  <div>
                    <Select>
                      <SelectTrigger className="text-black border-slate-300 focus:border-red-600 focus:ring-red-600">
                        <SelectValue placeholder="Project Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="restaurant">Restaurant Conversion</SelectItem>
                        <SelectItem value="office">Office Build-Out</SelectItem>
                        <SelectItem value="retail">Retail Modification</SelectItem>
                        <SelectItem value="medical">Medical/Dental Office</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Project details and timeline" 
                      className="text-black border-slate-300 focus:border-red-600 focus:ring-red-600 min-h-[80px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Project Quote
                  </Button>
                </form>
                <p className="text-[10px] text-slate-500 mt-4 text-center leading-relaxed">
                  By submitting this form you agree to be contacted about your request.
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
              <p className="text-lg">TI Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">1-2 Week</div>
              <p className="text-lg">Average Turnaround</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">Licensed</div>
              <p className="text-lg">Commercial Plumber</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">Full</div>
              <p className="text-lg">Service & Permits</p>
            </div>
          </div>
        </div>
      </section>

      {/* TI Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 uppercase">Tenant Improvement Specialties</h2>
            <p className="text-xl text-slate-600">Commercial plumbing solutions in Vancouver WA & Clark County</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {tiServices.map((service, index) => (
              <Card key={index} className="border-2 border-slate-200 hover:border-brand-red hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-brand-red transition-colors mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base text-slate-600">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-brand-red mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 uppercase">Our TI Process</h2>
            <p className="text-xl text-slate-600">Streamlined approach for Vancouver & Clark County projects</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {tiProcess.map((process, index) => (
              <div key={index} className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-slate-200">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-brand-red to-red-700 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6 shadow-lg">
                  {process.step}
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{process.title}</h3>
                    <Badge className="bg-red-100 text-brand-red border-0 w-fit">{process.timeline}</Badge>
                  </div>
                  <p className="text-slate-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADA Compliance Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase">
                ADA Compliance Updates
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Ensure your Vancouver or Clark County commercial space meets Americans with Disabilities Act requirements with our comprehensive ADA compliance services.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start bg-slate-50 p-5 rounded-lg">
                  <div className="bg-red-100 text-brand-red rounded-lg p-3 mr-4 flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Accessible Restrooms</h3>
                    <p className="text-slate-600">Compliant fixtures, clearances, and grab bar installations</p>
                  </div>
                </div>
                <div className="flex items-start bg-slate-50 p-5 rounded-lg">
                  <div className="bg-red-100 text-brand-red rounded-lg p-3 mr-4 flex-shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Drinking Fountains</h3>
                    <p className="text-slate-600">Proper height and accessibility requirements</p>
                  </div>
                </div>
                <div className="flex items-start bg-slate-50 p-5 rounded-lg">
                  <div className="bg-red-100 text-brand-red rounded-lg p-3 mr-4 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Fixture Modifications</h3>
                    <p className="text-slate-600">Lever handles, sensor faucets, and accessible controls</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Discuss Your Project
                </a>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-200">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6 text-center uppercase border-b-4 border-brand-red pb-3">Service Areas</h3>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  'Vancouver, WA',
                  'Battle Ground, WA',
                  'Camas, WA',
                  'Washougal, WA',
                  'Ridgefield, WA',
                  'La Center, WA',
                  'Woodland, WA',
                  'Longview, WA'
                ].map((area, index) => (
                  <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                    <MapPin className="w-4 h-4 text-brand-red mr-2 flex-shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-slate-900">Why Choose All County?</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">20+ years commercial experience</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Licensed & insured plumber</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Permit assistance included</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Competitive pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-brand-red to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="w-12 h-12 mr-4" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase">Ready For Your TI Project?</h2>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Get professional tenant improvement plumbing for your Vancouver, Battle Ground, or Camas commercial space. Fast turnaround with minimal disruption.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-white text-brand-red hover:bg-slate-100 px-8 py-5 rounded-lg font-bold text-lg transition-colors shadow-lg"
            >
              <Phone className="w-6 h-6" />
              Call {BUSINESS_DATA.phone} Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-slate-900 text-white hover:bg-slate-800 px-8 py-5 rounded-lg font-bold text-lg transition-colors shadow-lg"
            >
              Request Project Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


