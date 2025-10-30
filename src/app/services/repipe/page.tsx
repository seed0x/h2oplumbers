import { Metadata } from 'next'
import Link from 'next/link'
import { MasterButton } from '@/components/ui/master-button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { BUSINESS_DATA } from '@/lib/business-data'
import { CheckCircle2, Home, Wrench, Shield, Clock, Phone, Droplets, AlertTriangle, Award, TrendingUp, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Whole House Repipe Services Vancouver WA | Copper & PEX Repiping',
  description: 'Professional whole house repiping in Vancouver, Battle Ground, Camas & Clark County. Replace old galvanized, copper pipes with modern PEX or copper. Licensed plumber. Call (360) 883-2506.',
}

const repipeServices = [
  {
    name: 'Copper Repipe',
    price: 'Custom Quote',
    description: 'Premium copper piping installation for long-lasting reliability and proven performance',
    features: [
      'Type L or M copper piping',
      'Soldered connections',
      '50+ year lifespan',
      'Excellent water quality'
    ]
  },
  {
    name: 'PEX Repipe',
    price: 'Custom Quote',
    description: 'Modern flexible PEX piping system that installs faster with fewer connections and leaks',
    features: [
      'Flexible PEX-A or PEX-B',
      'Fewer joints = fewer leaks',
      'Freeze-resistant',
      'Cost-effective installation'
    ]
  },
  {
    name: 'Partial Repipe',
    price: 'Starting at $2,500',
    description: 'Targeted replacement of problematic sections while preserving functioning pipes',
    features: [
      'Replace worst sections first',
      'Budget-friendly option',
      'Address immediate issues',
      'Expandable in the future'
    ]
  },
  {
    name: 'Multi-Story Repipe',
    price: 'Custom Quote',
    description: 'Complete repiping for two and three-story homes with specialized access techniques',
    features: [
      'Multi-level planning',
      'Minimal wall penetration',
      'Coordinated installation',
      'Drywall repair included'
    ]
  }
]

const signsYouNeedRepipe = [
  'Discolored or rusty water',
  'Frequent pipe leaks throughout the house',
  'Low water pressure in multiple fixtures',
  'Visible corrosion on exposed pipes',
  'Pipes are over 50 years old',
  'Galvanized steel pipes',
  'Water tastes metallic or unusual',
  'Multiple pinhole leaks'
]

const repipeProcess = [
  {
    step: '1',
    title: 'Home Assessment',
    description: 'Comprehensive evaluation of your existing plumbing system and home layout',
    icon: <Home className="w-8 h-8" />
  },
  {
    step: '2',
    title: 'Custom Plan & Quote',
    description: 'Detailed plan for pipe routing, access points, and transparent upfront pricing',
    icon: <CheckCircle2 className="w-8 h-8" />
  },
  {
    step: '3',
    title: 'Professional Installation',
    description: 'Expert installation with minimal disruption to your daily routine',
    icon: <Wrench className="w-8 h-8" />
  },
  {
    step: '4',
    title: 'Testing & Restoration',
    description: 'Pressure testing, final inspection, and drywall repair to restore your home',
    icon: <Shield className="w-8 h-8" />
  }
]

const benefits = [
  {
    icon: <Droplets className="w-6 h-6" />,
    title: 'Better Water Quality',
    description: 'Clean, fresh water without rust, corrosion, or metallic taste'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Increased Home Value',
    description: 'Modern plumbing system adds significant value to your property'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Fewer Repairs',
    description: 'Stop the cycle of constant leak repairs and water damage'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Long-Term Solution',
    description: 'Decades of reliable service with proper materials and installation'
  }
]

const materials = [
  {
    material: 'Copper',
    pros: [
      'Time-tested reliability',
      'Excellent durability',
      'Natural antimicrobial properties',
      'High resale value'
    ],
    cons: [
      'Higher material cost',
      'Longer installation time',
      'Can corrode in acidic water'
    ]
  },
  {
    material: 'PEX',
    pros: [
      'Lower overall cost',
      'Faster installation',
      'Flexible - fewer joints',
      'Freeze-resistant'
    ],
    cons: [
      'Cannot be used outdoors',
      'Requires special tools',
      'Newer technology (less history)'
    ]
  }
]

export default function RepipePage() {
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
            <span className="text-brand-cyan font-medium">Repipe Services</span>
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
                  Whole House Repipe Services
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-slate-200">
                  Expert whole house repiping in Vancouver, Battle Ground, Camas, and all Clark County. Replace old galvanized or copper pipes with modern PEX or copper systems. Licensed plumber with proven results.
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
                    Copper & PEX Available
                  </div>
                </div>
              </div>
              
              {/* Right Column - Contact Form */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl ring-1 ring-black/5 p-6 md:p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-cyan-50 rounded-full px-4 py-2 mb-3">
                    <Award className="w-4 h-4 text-brand-cyan" />
                    <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Free Assessment</span>
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">Get Your Custom Quote</h2>
                  <p className="text-sm text-slate-600">Transparent pricing • No hidden fees • Expert consultation</p>
                </div>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" className="text-black border-slate-300 focus:border-brand-cyan focus:ring-brand-cyan" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Phone Number" className="text-black border-slate-300 focus:border-brand-cyan focus:ring-brand-cyan" />
                  </div>
                  <div>
                    <Input placeholder="Your Address" className="text-black border-slate-300 focus:border-brand-cyan focus:ring-brand-cyan" />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Describe your plumbing issues (e.g., frequent leaks, rusty water, low pressure)" 
                      className="text-black border-slate-300 focus:border-brand-cyan focus:ring-brand-cyan min-h-[80px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Free Estimate Today
                  </Button>
                </form>
                <div className="flex items-center justify-center gap-4 mt-5 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    <span>Same-day response</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    <span>Licensed experts</span>
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
              <div className="text-3xl md:text-4xl font-heading font-bold mb-1">200+</div>
              <p className="text-sm md:text-base opacity-90">Homes Repiped</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-heading font-bold mb-1">$8-15K</div>
              <p className="text-sm md:text-base opacity-90">Average Investment</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-heading font-bold mb-1">3-5 Days</div>
              <p className="text-sm md:text-base opacity-90">Typical Timeline</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-heading font-bold mb-1">20+ Yrs</div>
              <p className="text-sm md:text-base opacity-90">Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Repipe Services & Options */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 uppercase">Repipe Options</h2>
            <p className="text-xl text-slate-600">Choose the right solution for your home and budget</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {repipeServices.map((service, index) => (
              <Card key={index} className="border-2 border-slate-200 hover:border-brand-cyan hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-cyan/5 to-transparent rounded-bl-full"></div>
                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-brand-cyan transition-colors">{service.name}</CardTitle>
                    <Badge className="bg-cyan-50 text-brand-cyan border-2 border-brand-cyan/20 font-bold text-base px-3 py-1">
                      {service.price}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-600 leading-relaxed">{service.description}</CardDescription>
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
                    <Link href="/booking">Schedule Assessment</Link>
                  </MasterButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signs You Need a Repipe - High Urgency Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">Warning Signs</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 uppercase">Is Your Home at Risk?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">These warning signs indicate your plumbing system may be failing. Don't wait for a major failure.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {signsYouNeedRepipe.map((sign, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500 hover:shadow-xl transition-all group">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-slate-700 font-medium leading-snug">{sign}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-200">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">Experiencing 2+ of These Signs?</h3>
              <p className="text-lg text-slate-700 mb-6">
                Your plumbing system may be reaching end-of-life. A whole house repipe can prevent costly water damage and provide peace of mind for decades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg flex-1 sm:flex-initial"
                >
                  <Phone className="w-5 h-5" />
                  Emergency Call {BUSINESS_DATA.phone}
                </a>
                <MasterButton className="bg-white hover:bg-slate-50 text-brand-cyan border-2 border-brand-cyan font-bold px-8 py-4 text-lg flex-1 sm:flex-initial">
                  <Link href="/booking">Schedule Free Assessment</Link>
                </MasterButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Comparison - Decision Support */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-cyan-50 text-brand-cyan border-2 border-brand-cyan/20 font-bold text-sm px-4 py-2 mb-4">
              Material Selection Guide
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 uppercase">Copper vs PEX</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Both materials are excellent choices. Here's what you need to know to make the right decision for your home.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {materials.map((mat, index) => (
              <Card key={index} className="border-2 border-slate-200 hover:border-brand-cyan hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark"></div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-3xl font-heading font-bold text-brand-cyan uppercase text-center mb-2">{mat.material}</CardTitle>
                  <div className="text-center text-sm text-slate-500 font-medium">
                    {mat.material === 'Copper' ? 'Traditional • Premium' : 'Modern • Flexible'}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-green-700 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Advantages
                    </h3>
                    <ul className="space-y-2">
                      {mat.pros.map((pro, proIndex) => (
                        <li key={proIndex} className="flex items-center text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-orange-700 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Considerations
                    </h3>
                    <ul className="space-y-2">
                      {mat.cons.map((con, conIndex) => (
                        <li key={conIndex} className="flex items-center text-slate-700">
                          <AlertTriangle className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 md:p-10 border-2 border-brand-cyan/20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 bg-brand-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">Need Expert Guidance?</h3>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                We'll evaluate your home's specific needs, water quality, budget, and goals to recommend the best material. No pressure—just honest, expert advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg flex-1 sm:flex-initial sm:min-w-[240px]">
                  <Phone className="w-5 h-5" />
                  Call for Expert Advice
                </a>
                <MasterButton className="bg-white hover:bg-slate-50 text-brand-cyan border-2 border-brand-cyan font-bold px-8 py-4 text-lg flex-1 sm:flex-initial sm:min-w-[240px]">
                  <Link href="/booking">Schedule Consultation</Link>
                </MasterButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 uppercase">Benefits of Repiping</h2>
            <p className="text-xl text-slate-600">Why invest in a whole house repipe?</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-cyan">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 uppercase">Our Repipe Process</h2>
            <p className="text-xl text-slate-600">What to expect when you work with us</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repipeProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-brand-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <div className="text-3xl font-heading font-bold text-brand-cyan mb-2">{item.step}</div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Address Objections */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-white text-brand-cyan border-2 border-brand-cyan/20 font-bold text-sm px-4 py-2 mb-4">
              Your Questions Answered
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 uppercase">Repipe FAQs</h2>
            <p className="text-xl text-slate-600">Everything you need to know about whole house repiping</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: 'How long does a whole house repipe take?',
                a: 'Most single-story homes take 2-3 days. Two-story homes typically take 3-5 days. Timeline depends on home size and complexity.'
              },
              {
                q: 'Will I have water during the repipe?',
                a: 'Water will be shut off during active work hours (typically 8am-5pm), but restored each evening so you can use your home normally.'
              },
              {
                q: 'Do you repair drywall after cutting access holes?',
                a: 'Yes! Our pricing includes drywall repair and texture matching. You just need to paint after we\'re done.'
              },
              {
                q: 'How much does a whole house repipe cost?',
                a: 'Costs vary based on home size, pipe material, and accessibility. Average range is $4,500-$15,000. We provide detailed quotes after a home assessment.'
              },
              {
                q: 'Should I repipe with copper or PEX?',
                a: 'Both are excellent choices. Copper is traditional and proven. PEX is modern, flexible, and typically less expensive. We\'ll help you decide based on your specific situation.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-7 rounded-xl shadow-md border-l-4 border-brand-cyan hover:shadow-lg transition-all">
                <h3 className="text-lg font-heading font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-brand-cyan text-2xl font-bold flex-shrink-0">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-slate-600 leading-relaxed ml-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Strong Close */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url('/images/hero-background-pattern.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge className="bg-brand-cyan/20 text-brand-cyan border-2 border-brand-cyan font-bold text-sm px-4 py-2 mb-6">
            Invest in Your Home's Future
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 uppercase leading-tight">
            Stop Band-Aiding <span className="text-brand-cyan">Failing Pipes</span>
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-slate-200 leading-relaxed max-w-3xl mx-auto">
            Get lasting peace of mind with a professional whole house repipe. Clean water, better pressure, no more leaks—for decades to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-brand-cyan hover:bg-brand-cyan-dark text-white px-10 py-5 rounded-lg font-bold text-xl transition-all shadow-2xl hover:shadow-brand-cyan/20 hover:scale-105 flex-1 sm:flex-initial"
            >
              <Phone className="w-6 h-6" />
              Call {BUSINESS_DATA.phone}
            </a>
            <MasterButton className="bg-white text-brand-cyan hover:bg-slate-100 font-bold px-10 py-5 text-xl shadow-xl hover:scale-105 transition-all flex-1 sm:flex-initial">
              <Link href="/booking">Schedule Free Assessment</Link>
            </MasterButton>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
              Free home assessment
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
              Transparent pricing
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
              Licensed & insured
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


