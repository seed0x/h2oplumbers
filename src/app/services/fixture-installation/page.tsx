import { Metadata } from 'next'
import Link from 'next/link'
import { MasterButton } from '@/components/ui/master-button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { contactInfo } from '@/config/site'
import { BUSINESS_DATA } from '@/lib/business-data'
import { fixturePricing } from '@/config/fixture-pricing'
import { CheckCircle, Wrench, Home, Droplets, Clock, Phone, MapPin, Star, CheckCircle2, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fixture Installation Vancouver WA | ADA Bathroom Contractors | H2O Plumbing',
  description: 'Professional fixture installation in Vancouver, Battle Ground, Camas. ADA compliant bathroom contractors, toilet installation, faucet installation, accessible shower systems. Licensed plumber. Same-day service. Call (360) 883-2506.',
  keywords: 'fixture installation Vancouver WA, ada bathroom contractors near me, ada compliant bathroom, accessible bathroom installation, toilet installation Clark County, faucet installation Battle Ground, shower installation Southwest Washington, handicap accessible bathroom Vancouver',
}

// Import fixture pricing from centralized config
const fixtures = fixturePricing

const installationProcess = [
  {
    step: '1',
    title: 'Consultation & Planning',
    description: 'We assess your space, discuss options, and help you choose the right fixtures for your needs and budget.',
    icon: <Home className="w-8 h-8" />
  },
  {
    step: '2', 
    title: 'Precise Measurements',
    description: 'Accurate measurements ensure proper fit and function for your new fixtures.',
    icon: <Wrench className="w-8 h-8" />
  },
  {
    step: '3',
    title: 'Professional Installation',
    description: 'Expert installation with attention to detail, proper sealing, and code compliance.',
    icon: <Droplets className="w-8 h-8" />
  },
  {
    step: '4',
    title: 'Testing & Warranty',
    description: 'Complete testing of all connections and provide warranty on our installation work.',
    icon: <CheckCircle className="w-8 h-8" />
  }
]

const whyChooseUs = [
  'Licensed and insured fixture installation',
  'Wide selection of quality fixture brands',
  'Expert installation with proper sealing',
  'Code-compliant installations',
  'Cleanup and debris removal included',
  'Warranty on installation workmanship',
  'Upfront pricing with no surprises',
  'Same-day installation available'
]

export default function FixtureInstallationPage() {
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
            <span className="text-brand-cyan font-medium">Fixture Installation</span>
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
                  Professional Fixture Installation Services
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-slate-200">
                  Expert plumber for toilet, faucet, sink, and shower installation in Vancouver, Battle Ground, Camas, and all Clark County. Licensed fixture installation with same-day service available. Quality workmanship guaranteed.
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
                    Same-Day Service
                  </div>
                </div>
              </div>
              
              {/* Right Column - Contact Form */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl ring-1 ring-black/5 p-6 md:p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-cyan-50 rounded-full px-4 py-2 mb-3">
                    <Wrench className="w-4 h-4 text-brand-cyan" />
                    <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Professional Install</span>
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">Get Your Fixtures Installed Right</h2>
                  <p className="text-sm text-slate-600">Quality brands • Expert installation • Warranty included</p>
                </div>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" className="text-black border-slate-300 focus:border-brand-cyan focus:ring-brand-cyan" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Phone Number" className="text-black border-slate-300 focus:border-brand-cyan focus:ring-brand-cyan" />
                  </div>
                  <div>
                    <Select>
                      <SelectTrigger className="text-black border-slate-300 focus:border-brand-cyan focus:ring-brand-cyan">
                        <SelectValue placeholder="Fixture Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="toilet">Toilet Installation</SelectItem>
                        <SelectItem value="faucet">Faucet Installation</SelectItem>
                        <SelectItem value="sink">Sink Installation</SelectItem>
                        <SelectItem value="shower">Shower Installation</SelectItem>
                        <SelectItem value="bathtub">Bathtub Installation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Free Quote Now
                  </Button>
                </form>
                <div className="flex items-center justify-center gap-4 mt-5 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    <span>Warranty included</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-green-600" />
                    <span>Same-day available</span>
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
              <div className="text-3xl md:text-4xl font-heading font-bold mb-1">500+</div>
              <p className="text-sm md:text-base opacity-90">Fixtures Installed</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-heading font-bold mb-1">Same Day</div>
              <p className="text-sm md:text-base opacity-90">Service Available</p>
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

      {/* Fixtures & Pricing */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 uppercase">Fixtures We Install</h2>
            <p className="text-xl text-slate-600">Professional plumbing fixture installation in Vancouver WA & Clark County</p>
          </div>
          
          {fixtures.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-block bg-gradient-to-r from-brand-cyan/10 to-brand-cyan/5 rounded-full px-6 py-2 mb-4">
                  <h3 className="text-2xl font-heading font-bold text-brand-cyan uppercase tracking-wide">{category.category}</h3>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="border-2 border-slate-200 hover:border-brand-cyan hover:shadow-2xl transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-brand-cyan/5 to-transparent rounded-bl-full"></div>
                    
                    <CardHeader className="pb-4 relative z-10">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-brand-cyan to-brand-cyan-dark rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                          <Wrench className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <CardTitle className="text-2xl font-heading font-bold text-slate-900 group-hover:text-brand-cyan transition-colors leading-tight">
                              {item.name}
                            </CardTitle>
                            <Badge className="bg-gradient-to-r from-brand-cyan/10 to-brand-cyan/20 text-brand-cyan font-bold text-sm px-4 py-1.5 whitespace-nowrap border-2 border-brand-cyan/30">
                              {item.price}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0 relative z-10">
                      <p className="text-slate-600 leading-relaxed mb-6 text-base">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="inline-flex items-center gap-1.5 bg-cyan-50 text-brand-cyan px-3 py-1 rounded-full text-xs font-medium border border-brand-cyan/20">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Licensed Install
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-cyan-50 text-brand-cyan px-3 py-1 rounded-full text-xs font-medium border border-brand-cyan/20">
                          <Clock className="w-3.5 h-3.5" />
                          Same-Day Available
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-cyan-50 text-brand-cyan px-3 py-1 rounded-full text-xs font-medium border border-brand-cyan/20">
                          <Star className="w-3.5 h-3.5" />
                          Warranty Included
                        </span>
                      </div>
                      
                      <MasterButton className="w-full bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-3.5 text-base shadow-lg hover:shadow-xl transition-all" variant="primary">
                        <Link href="/booking" className="flex items-center justify-center gap-2">
                          <Phone className="w-4 h-4" />
                          Schedule Installation
                        </Link>
                      </MasterButton>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 uppercase">Our Installation Process</h2>
            <p className="text-xl text-slate-600">Professional fixture installation for Vancouver & Clark County homes</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {installationProcess.map((step, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-brand-cyan text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {step.icon}
                </div>
                <div className="bg-cyan-50 text-brand-cyan rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADA Compliant Bathroom Installation */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-6">
              Accessibility Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 uppercase">ADA Compliant Bathroom Installation</h2>
            <p className="text-xl text-slate-600">Professional ADA bathroom contractors serving Vancouver, Battle Ground, Camas & Clark County</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-3xl font-heading font-bold text-slate-900 mb-6">Accessible Bathroom Specialists</h3>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                H2O Plumbing specializes in ADA compliant bathroom installations for homes, businesses, 
                and assisted living facilities throughout Clark County. Our licensed contractors ensure your 
                bathroom meets all accessibility requirements while maintaining comfort and style.
              </p>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Whether you're renovating for aging in place, adding accessibility features for family members 
                with mobility challenges, or ensuring commercial property compliance, we deliver expert installation 
                with attention to detail and code compliance.
              </p>
              
              <div className="bg-white border-2 border-brand-cyan/20 rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-heading font-bold text-slate-900 mb-4 uppercase">We Install:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-3 flex-shrink-0" />
                    <span className="text-slate-700">Comfort height toilets</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-3 flex-shrink-0" />
                    <span className="text-slate-700">Roll-in shower systems</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-3 flex-shrink-0" />
                    <span className="text-slate-700">Grab bar installation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-3 flex-shrink-0" />
                    <span className="text-slate-700">Accessible sink heights</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-3 flex-shrink-0" />
                    <span className="text-slate-700">Wheelchair accessible vanities</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-3 flex-shrink-0" />
                    <span className="text-slate-700">ADA compliant faucets</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-3 flex-shrink-0" />
                    <span className="text-slate-700">Walk-in bathtubs</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-3 flex-shrink-0" />
                    <span className="text-slate-700">Barrier-free shower entries</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="border-2 border-brand-cyan/20 hover:border-brand-cyan hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900">Residential ADA Bathrooms</CardTitle>
                  <CardDescription className="text-slate-600">
                    Create a safe, accessible bathroom for aging in place or family members with mobility needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-2 flex-shrink-0 mt-0.5" />
                      Complete bathroom accessibility assessments
                    </li>
                    <li className="flex items-start text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-2 flex-shrink-0 mt-0.5" />
                      Custom fixture selection and planning
                    </li>
                    <li className="flex items-start text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-2 flex-shrink-0 mt-0.5" />
                      Code-compliant installation throughout Clark County
                    </li>
                    <li className="flex items-start text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-2 flex-shrink-0 mt-0.5" />
                      Licensed and insured contractors
                    </li>
                  </ul>
                  <MasterButton className="w-full bg-brand-cyan hover:bg-brand-cyan-dark text-white font-semibold">
                    <Link href="/booking">Request ADA Consultation</Link>
                  </MasterButton>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-brand-cyan/20 hover:border-brand-cyan hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900">Commercial ADA Compliance</CardTitle>
                  <CardDescription className="text-slate-600">
                    Ensure your business meets ADA requirements with professional accessible bathroom installation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-2 flex-shrink-0 mt-0.5" />
                      ADA compliance for offices, restaurants, retail
                    </li>
                    <li className="flex items-start text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-2 flex-shrink-0 mt-0.5" />
                      Multi-stall accessible bathroom solutions
                    </li>
                    <li className="flex items-start text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-2 flex-shrink-0 mt-0.5" />
                      Commercial-grade fixtures and installation
                    </li>
                    <li className="flex items-start text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-2 flex-shrink-0 mt-0.5" />
                      Fast turnaround to minimize business disruption
                    </li>
                  </ul>
                  <MasterButton className="w-full bg-brand-cyan hover:bg-brand-cyan-dark text-white font-semibold">
                    <Link href="/commercial">Commercial Services</Link>
                  </MasterButton>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-brand-cyan to-brand-cyan-dark rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
            <h3 className="text-3xl font-heading font-bold mb-4 uppercase">Expert ADA Bathroom Contractors in Clark County</h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Serving Vancouver, Battle Ground, Camas, Washougal, Ridgefield, and all of Clark County with 
              professional ADA compliant bathroom installation. Licensed, insured, and experienced in accessibility solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-white text-brand-cyan hover:bg-slate-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS_DATA.phone}
              </a>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-3 bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Installations */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 uppercase">Most Popular Installations</h2>
            <p className="text-xl text-slate-600">Top-rated fixture installation services in Vancouver WA</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Toilet Installation',
                description: 'Complete toilet installation including removal of old toilet, wax ring replacement, and proper sealing for Vancouver & Clark County homes.',
                features: ['Standard and comfort height toilets', 'Dual-flush and water-saving models', 'Complete removal and disposal', 'Testing for proper operation'],
                startingPrice: '$250'
              },
              {
                title: 'Kitchen Faucet Installation',
                description: 'Professional kitchen faucet installation with proper connections and testing for Battle Ground, Camas, and surrounding areas.',
                features: ['Pull-down and pull-out faucets', 'Commercial-style faucets', 'Proper water line connections', 'Leak testing and warranty'],
                startingPrice: '$120'
              },
              {
                title: 'Shower System Installation',
                description: 'Complete shower system installation including fixtures, valves, and proper waterproofing throughout Clark County.',
                features: ['Rain heads and handheld options', 'Multi-function shower systems', 'Proper valve installation', 'Waterproof connections'],
                startingPrice: '$600'
              }
            ].map((service, index) => (
              <Card key={index} className="border-2 border-slate-200 hover:border-brand-cyan hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-brand-cyan transition-colors">{service.title}</CardTitle>
                    <Badge className="bg-cyan-50 text-brand-cyan font-bold text-base px-3 py-1">
                      From {service.startingPrice}
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
                    <Link href="/booking">Schedule Installation</Link>
                  </MasterButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase">Why Choose H2O Plumbing?</h2>
              <p className="text-lg text-slate-600 mb-6">Your trusted fixture installation plumber serving Vancouver, Battle Ground, Camas, and all of Clark County WA.</p>
              <div className="space-y-4">
                {whyChooseUs.map((benefit, index) => (
                  <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle2 className="w-6 h-6 text-brand-cyan mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <MasterButton size="lg" className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-semibold text-lg px-8 py-4">
                  <Link href="/booking">Schedule Your Installation</Link>
                </MasterButton>
              </div>
            </div>
            <div className="bg-white border-2 border-slate-200 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6 uppercase border-b-4 border-brand-cyan pb-3">Installation Warranty</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-cyan mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Warranty on installation work (varies by fixture)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-cyan mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Manufacturer warranty on all fixtures</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-cyan mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Free follow-up adjustments within 30 days</span>
                </div>
              </div>
              
              <h4 className="text-xl font-heading font-bold text-slate-900 mt-8 mb-4 uppercase">Service Areas in Clark County</h4>
              <div className="grid grid-cols-2 gap-2">
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
                  <div key={index} className="flex items-center py-2">
                    <MapPin className="w-4 h-4 text-brand-cyan mr-2 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-12 h-12 mr-4" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase">Same-Day Installation Available</h2>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Need a fixture installed today? We offer same-day installation services for most fixtures 
            throughout Vancouver, Battle Ground, Camas, and all of Clark County WA.
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
              Request Installation Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}






