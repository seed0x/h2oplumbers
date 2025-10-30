import { Metadata } from 'next'
import Link from 'next/link'
import { MasterButton } from '@/components/ui/master-button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { contactInfo } from '@/config/site'
import { BUSINESS_DATA } from '@/lib/business-data'
import { CheckCircle2, Camera, AlertTriangle, Wrench, TreePine, Phone, MapPin, Shield, Clock, Home, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sewer Line Repair & Replacement Vancouver WA | Clark County Plumber',
  description: 'Professional sewer line repair, replacement & camera inspection in Vancouver, Battle Ground, Camas & Clark County. Expert diagnosis and trenchless repair. Licensed plumber. Call (360) 883-2506.',
  keywords: 'sewer line repair Vancouver WA, sewer replacement Clark County, sewer camera inspection Battle Ground, trenchless sewer repair Camas, plumber Vancouver',
}

const sewerServices = [
  {
    name: 'Sewer Camera Inspection',
    price: 'Starting at $195',
    description: 'High-definition video camera inspection to diagnose sewer line issues, locate blockages, and assess pipe condition',
    features: [
      'HD video recording provided',
      'Precise location mapping',
      'Identify root intrusion & breaks',
      'Complete condition assessment'
    ]
  },
  {
    name: 'Sewer Line Repair',
    price: 'Starting at $500',
    description: 'Targeted spot repairs for damaged sections using traditional or trenchless methods depending on the situation',
    features: [
      'Spot repair options',
      'Traditional excavation',
      'Pipe bursting available',
      'Minimal landscape disruption'
    ]
  },
  {
    name: 'Sewer Line Replacement',
    price: 'Custom Quote',
    description: 'Complete sewer line replacement with modern materials for long-lasting performance and reliability',
    features: [
      'Full line replacement',
      'Modern PVC or cast iron',
      'Permit handling included',
      'Code-compliant installation'
    ]
  },
  {
    name: 'Root Removal & Cleaning',
    price: 'Starting at $350',
    description: 'Professional removal of tree roots and debris from sewer lines using specialized cutting equipment',
    features: [
      'Root cutting equipment',
      'Hydro-jetting available',
      'Preventive treatment options',
      'Follow-up inspection'
    ]
  }
]

const commonIssues = [
  {
    icon: <TreePine className="w-6 h-6" />,
    issue: 'Tree Root Intrusion',
    description: 'Roots growing into pipes causing blockages and breaks',
    solution: 'Camera inspection, root cutting, and pipe repair or lining'
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    issue: 'Pipe Bellies & Settling',
    description: 'Sagging pipes that trap waste and cause recurring clogs',
    solution: 'Section replacement or pipe bursting to restore proper grade'
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    issue: 'Cracked or Broken Pipes',
    description: 'Age, ground movement, or heavy loads causing pipe damage',
    solution: 'Spot repair or complete line replacement depending on extent'
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    issue: 'Offset Joints & Separated Pipes',
    description: 'Pipe sections separating causing leaks and blockages',
    solution: 'Excavation repair or trenchless pipe lining'
  }
]

const warningSign = [
  'Multiple drain clogs throughout the home',
  'Sewage backup in toilets or drains',
  'Foul odors from drains or yard',
  'Soggy spots or extra green patches in yard',
  'Gurgling sounds from drains',
  'Slow draining throughout the house',
  'Foundation cracks or settling',
  'Increased pest or rodent activity'
]

const processSteps = [
  {
    step: '1',
    title: 'Camera Inspection',
    description: 'We start with a video camera inspection to accurately diagnose the problem and location',
    icon: <Camera className="w-8 h-8" />
  },
  {
    step: '2',
    title: 'Diagnosis & Options',
    description: 'Review camera footage together and discuss repair or replacement options with upfront pricing',
    icon: <CheckCircle2 className="w-8 h-8" />
  },
  {
    step: '3',
    title: 'Professional Repair',
    description: 'Expert repair or replacement using the most effective method for your specific situation',
    icon: <Wrench className="w-8 h-8" />
  },
  {
    step: '4',
    title: 'Testing & Warranty',
    description: 'Complete system testing and provide warranty on our workmanship',
    icon: <Shield className="w-8 h-8" />
  }
]

export default function SewerLineRepairPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="bg-slate-50 py-4" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-brand-cyan flex items-center" aria-label="Home">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <Link href="/services" className="hover:text-brand-cyan">Services</Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-brand-cyan font-medium">Sewer Line Repair</span>
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
                  Sewer Line Repair & Replacement
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-slate-200">
                  Expert sewer line diagnosis, repair, and replacement in Vancouver, Battle Ground, Camas, and all Clark County. Camera inspections, trenchless repairs, and complete line replacement. Licensed plumber with proven solutions.
                </p>
                
                {/* Quick Contact Options */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-3 bg-brand-cyan hover:bg-brand-cyan-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    Call {BUSINESS_DATA.phone}
                  </a>
                </div>
                
                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                    Licensed & Insured
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                    Family-Owned Since 2004
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                    Camera Inspection Available
                  </div>
                </div>
              </div>
              
              {/* Right Column - Contact Form */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl ring-1 ring-black/5 p-6 md:p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-cyan-50 rounded-full px-4 py-2 mb-3">
                    <Camera className="w-4 h-4 text-brand-cyan" />
                    <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Camera Inspection</span>
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">Diagnose Your Sewer Problem</h2>
                  <p className="text-sm text-slate-600">HD camera • Expert diagnosis • Honest solutions</p>
                </div>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" className="text-black border-slate-300 focus:border-brand-cyan focus:ring-brand-cyan" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Phone Number" className="text-black border-slate-300 focus:border-brand-cyan focus:ring-brand-cyan" />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Describe the issue (e.g., backup, slow drains, soggy yard)" 
                      className="text-black border-slate-300 focus:border-brand-cyan focus:ring-brand-cyan min-h-[80px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Free Estimate
                  </Button>
                </form>
                <div className="flex items-center justify-center gap-4 mt-5 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Camera className="w-3 h-3 text-green-600" />
                    <span>HD camera inspection</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-3 h-3 text-green-600" />
                    <span>Warranty included</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 mt-3 text-center leading-relaxed">
                  By submitting this form you agree to be contacted about your request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Social Proof Bar */}
      <section className="py-12 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-heading font-bold mb-1">100+</div>
              <p className="text-sm md:text-base opacity-90">Sewer Lines Fixed</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-heading font-bold mb-1">HD Camera</div>
              <p className="text-sm md:text-base opacity-90">Inspection Available</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-heading font-bold mb-1">Licensed</div>
              <p className="text-sm md:text-base opacity-90">& Insured</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-heading font-bold mb-1">Warranty</div>
              <p className="text-sm md:text-base opacity-90">Included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sewer Services & Pricing */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 uppercase">Sewer Line Services</h2>
            <p className="text-xl text-slate-600">Professional sewer diagnosis and repair in Vancouver WA & Clark County</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {sewerServices.map((service, index) => (
              <Card key={index} className="border-2 border-slate-200 hover:border-brand-cyan hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-brand-cyan transition-colors">{service.name}</CardTitle>
                    <Badge className="bg-cyan-50 text-brand-cyan border-2 border-brand-cyan/20 font-bold text-base px-3 py-1">
                      {service.price}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <MasterButton className="w-full bg-brand-cyan hover:bg-brand-cyan-dark text-white font-semibold">
                    <Link href="/booking">Schedule Service</Link>
                  </MasterButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Sewer Issues */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 uppercase">Common Sewer Line Problems</h2>
            <p className="text-xl text-slate-600">Issues we diagnose and repair for Clark County homeowners</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {commonIssues.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-50 text-brand-cyan rounded-lg p-3 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.issue}</h3>
                    <p className="text-slate-600 mb-3">{item.description}</p>
                    <div className="border-l-4 border-brand-cyan pl-4">
                      <p className="text-sm font-semibold text-slate-900 mb-1">Our Solution:</p>
                      <p className="text-sm text-slate-700">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase">Warning Signs You Need Help</h2>
              <p className="text-lg text-slate-600 mb-6">Don't wait until it's too late. These signs indicate potential sewer line problems that need professional attention in Vancouver, Battle Ground, or Camas.</p>
              <div className="grid gap-3">
                {warningSign.map((sign, index) => (
                  <div key={index} className="flex items-start bg-slate-50 p-4 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-brand-cyan mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-700">{sign}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-3 bg-brand-cyan hover:bg-brand-cyan-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call {BUSINESS_DATA.phone} Now
                </a>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6 uppercase border-b-4 border-brand-cyan pb-3">Our Service Process</h3>
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-brand-cyan text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 uppercase">Serving Clark County</h2>
            <p className="text-xl text-slate-600">Professional sewer line repair throughout Southwest Washington</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
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
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <MapPin className="w-5 h-5 text-brand-cyan mr-3 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-12 h-12 mr-4" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase">Need Sewer Line Help?</h2>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Don't let sewer problems get worse. Get a professional camera inspection and honest assessment for your Vancouver, Battle Ground, or Camas home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-white text-brand-cyan hover:bg-slate-100 px-8 py-5 rounded-lg font-bold text-lg transition-colors shadow-lg"
            >
              <Phone className="w-6 h-6" />
              Call {BUSINESS_DATA.phone} Now
            </a>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-3 bg-slate-900 text-white hover:bg-slate-800 px-8 py-5 rounded-lg font-bold text-lg transition-colors shadow-lg"
            >
              Schedule Inspection
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}



