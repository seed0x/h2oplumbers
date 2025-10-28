import { Metadata } from 'next'
import Link from 'next/link'
import { MasterButton } from '@/components/ui/master-button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { BUSINESS_DATA } from '@/lib/business-data'
import { CheckCircle2, Home, Wrench, Shield, Clock, Phone, Droplets, AlertTriangle, Award, TrendingUp } from 'lucide-react'

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
      <nav className="bg-slate-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-brand-red">Services</Link>
            <span>/</span>
            <span className="text-brand-red">Repipe Services</span>
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
                    Copper & PEX Available
                  </div>
                </div>
              </div>
              
              {/* Right Column - Contact Form */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl ring-1 ring-black/5 p-6 md:p-7">
                <div className="text-center mb-5">
                  <h2 className="text-xl font-semibold text-slate-900 mb-1">Request Repipe Estimate</h2>
                  <p className="text-sm text-slate-500">Free home assessment. Transparent pricing.</p>
                </div>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" className="text-black border-slate-300 focus:border-red-600 focus:ring-red-600" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Phone Number" className="text-black border-slate-300 focus:border-red-600 focus:ring-red-600" />
                  </div>
                  <div>
                    <Input placeholder="Your Address" className="text-black border-slate-300 focus:border-red-600 focus:ring-red-600" />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Describe your plumbing issues (e.g., frequent leaks, rusty water, low pressure)" 
                      className="text-black border-slate-300 focus:border-red-600 focus:ring-red-600 min-h-[80px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Free Estimate
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
              <p className="text-lg">Homes Repiped</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">Licensed</div>
              <p className="text-lg">& Insured</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">Warranty</div>
              <p className="text-lg">On All Work</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">20+ Yrs</div>
              <p className="text-lg">Experience</p>
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
              <Card key={index} className="border-2 border-slate-200 hover:border-brand-red hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-brand-red transition-colors">{service.name}</CardTitle>
                    <Badge className="bg-red-100 text-brand-red font-bold text-base px-3 py-1">
                      {service.price}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-brand-red mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <MasterButton className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-semibold">
                    <Link href="/booking">Schedule Assessment</Link>
                  </MasterButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signs You Need a Repipe */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 uppercase">Signs You Need a Repipe</h2>
            <p className="text-xl text-slate-600">Is it time to replace your home's plumbing?</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {signsYouNeedRepipe.map((sign, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-2 border-slate-200 hover:border-brand-red transition-all">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <p className="text-slate-700 font-medium">{sign}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-slate-600 mb-6">
              If you're experiencing two or more of these issues, it may be time to consider a whole house repipe.
            </p>
            <MasterButton className="bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 text-lg">
              <Link href="/booking">Schedule Free Assessment</Link>
            </MasterButton>
          </div>
        </div>
      </section>

      {/* Material Comparison */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 uppercase">Copper vs PEX</h2>
            <p className="text-xl text-slate-600">Which material is right for your home?</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {materials.map((mat, index) => (
              <Card key={index} className="border-2 border-slate-200">
                <CardHeader>
                  <CardTitle className="text-3xl font-heading font-bold text-brand-red uppercase text-center">{mat.material}</CardTitle>
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
          
          <div className="mt-12 bg-slate-100 rounded-xl p-8">
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4 text-center">Not sure which to choose?</h3>
            <p className="text-lg text-slate-600 text-center mb-6">
              We'll help you select the best material based on your home's needs, water quality, budget, and long-term goals.
            </p>
            <div className="text-center">
              <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                <Phone className="w-5 h-5" />
                Call for Expert Advice
              </a>
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
                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-red">
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
                <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <div className="text-3xl font-heading font-bold text-brand-red mb-2">{item.step}</div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 uppercase">Repipe FAQs</h2>
            <p className="text-xl text-slate-600">Common questions about whole house repiping</p>
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
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-2 border-slate-200">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 uppercase">Ready to Upgrade Your Home's Plumbing?</h2>
          <p className="text-xl mb-8 text-slate-200">
            Stop dealing with leaks, low pressure, and rusty water. Let's discuss your repipe options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS_DATA.phone}
            </a>
            <MasterButton className="bg-white text-brand-red hover:bg-slate-100 font-bold px-8 py-4 text-lg">
              <Link href="/booking">Schedule Free Assessment</Link>
            </MasterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
