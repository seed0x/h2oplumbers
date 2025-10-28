import { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, Zap, Shield, Star, Clock, CheckCircle, Phone } from 'lucide-react';
import { BUSINESS_DATA } from '@/lib/business-data';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getPromotion } from '@/config/promotions';

export const metadata: Metadata = {
  title: `Drain Cleaning Vancouver, Battle Ground, Longview WA | Clark & Cowlitz County | H2O`,
  description: `Professional drain cleaning in Vancouver, Battle Ground, Longview, Amboy, Yacolt. Serving Clark County & Cowlitz County. Kitchen sinks, bathroom drains, sewer lines. Hydro jetting, camera inspections. Licensed plumbers. Call today!`,
  keywords: `drain cleaning Vancouver WA, drain cleaning Longview WA, clogged drain Battle Ground, hydro jetting Clark County, sewer line cleaning Cowlitz County, drain snake Amboy Yacolt`,
};

export default function DrainCleaningPage() {
  // Get promotion for coupon banner
  const heroPromotion = getPromotion('drainCleaning');
  const fallbackPromotion = {
    id: 'fallbackDrain',
    title: 'Drain Cleaning Special',
    discount: '$50 OFF',
    description: 'Professional drain cleaning services',
    code: 'DRAIN50',
    ctaText: 'Call to Redeem',
    ctaLink: `tel:${BUSINESS_DATA.phoneRaw}`,
    expiresAt: '2025-12-31',
  };

  const selectedPromotion = heroPromotion ?? fallbackPromotion;
  const badgeLabel = selectedPromotion.discount;
  const headingLabel = selectedPromotion.title;
  const couponCode = selectedPromotion.code ?? 'DRAIN50';
  const ctaLink = selectedPromotion.ctaLink ?? `tel:${BUSINESS_DATA.phoneRaw}`;

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-500">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary-500">Services</Link>
            <span>/</span>
            <span className="text-primary-500">Drain Cleaning</span>
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
                  Professional Drain Cleaning Services
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-slate-200">
                  Fast, effective drain cleaning solutions for residential and commercial properties throughout Clark County and Cowlitz County. Serving Vancouver, Battle Ground, Ridgefield, Camas, Washougal, La Center, Yacolt, Amboy, Longview, Woodland, Kalama, and all surrounding communities. From simple clogs to complex sewer line issues, our expert plumbers restore proper drainage quickly and safely.
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
                        <SelectItem value="drain-cleaning">Drain Cleaning</SelectItem>
                        <SelectItem value="emergency">Same-Day Service</SelectItem>
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

      {/* Service Stats */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">1000+</div>
              <p className="text-lg">Drains Cleaned Annually</p>
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
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">20+ Years</div>
              <p className="text-lg">Drain Cleaning Experience</p>
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
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="bg-white px-6 py-3.5 rounded-lg flex items-center justify-center min-w-[140px] h-[52px]">
                    <div className="text-lg font-heading font-bold text-brand-red">{couponCode}</div>
                  </div>
                  <a
                    href={ctaLink}
                    className="bg-white text-brand-red hover:bg-slate-100 px-8 py-3.5 rounded-lg font-bold transition-colors shadow-lg whitespace-nowrap inline-flex items-center justify-center h-[52px]"
                  >
                    Claim Savings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Drain Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
                Complete <span className="text-brand-red">Drain Cleaning</span> Solutions
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                H2O Plumbing provides comprehensive drain cleaning services for every type of blockage 
                and drainage issue throughout Southwest Washington, including all of Clark County and Cowlitz County.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-3xl font-heading font-bold text-slate-900 mb-8">Residential Drain Cleaning</h3>
                <div className="space-y-6">
                  <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h4 className="text-xl font-heading font-bold text-brand-red mb-3">Kitchen Drain Cleaning</h4>
                    <p className="text-gray-700 mb-3">
                      Kitchen sinks face unique challenges from grease, food particles, and soap buildup. 
                      Our specialized techniques effectively clear these stubborn blockages.
                    </p>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Grease and fat removal</li>
                      <li>• Food particle extraction</li>
                      <li>• Garbage disposal cleaning</li>
                      <li>• Preventive maintenance advice</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h4 className="text-xl font-heading font-bold text-brand-red mb-3">Bathroom Drain Cleaning</h4>
                    <p className="text-gray-700 mb-3">
                      Hair, soap scum, and personal care products create unique drainage challenges in bathrooms. 
                      We have the tools and expertise to handle all bathroom drain issues.
                    </p>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Hair and soap removal</li>
                      <li>• Shower and tub drains</li>
                      <li>• Bathroom sink cleaning</li>
                      <li>• Floor drain maintenance</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h4 className="text-xl font-heading font-bold text-brand-red mb-3">Toilet and Floor Drains</h4>
                    <p className="text-gray-700 mb-3">
                      Specialized equipment and techniques for clearing toilet clogs and maintaining floor drains 
                      in basements, garages, and utility areas.
                    </p>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Toilet auger services</li>
                      <li>• Floor drain cleaning</li>
                      <li>• Laundry drain maintenance</li>
                      <li>• Basement drain clearing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-heading font-bold text-slate-900 mb-8">Advanced Drain Services</h3>
                <div className="space-y-6">
                  <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h4 className="text-xl font-heading font-bold text-brand-red mb-3">Hydro Jetting Services</h4>
                    <p className="text-gray-700 mb-3">
                      High-pressure water jetting effectively removes even the toughest blockages, including 
                      tree roots, mineral buildup, and years of accumulated debris.
                    </p>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• High-pressure water cleaning</li>
                      <li>• Root removal and prevention</li>
                      <li>• Grease and scale removal</li>
                      <li>• Sewer line restoration</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h4 className="text-xl font-heading font-bold text-brand-red mb-3">Camera Drain Inspections</h4>
                    <p className="text-gray-700 mb-3">
                      Advanced video inspection technology allows us to accurately diagnose drain problems 
                      and provide targeted solutions without guesswork.
                    </p>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Video pipe inspection</li>
                      <li>• Blockage location identification</li>
                      <li>• Pipe condition assessment</li>
                      <li>• Repair recommendation</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h4 className="text-xl font-heading font-bold text-brand-red mb-3">Sewer Line Cleaning</h4>
                    <p className="text-gray-700 mb-3">
                      Main sewer line cleaning requires specialized equipment and expertise. We handle everything 
                      from minor blockages to major sewer line restoration.
                    </p>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Main sewer line clearing</li>
                      <li>• Tree root removal</li>
                      <li>• Sewer line maintenance</li>
                      <li>• Emergency sewer service</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Commercial Drain Services */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-brand-red/20">
              <h3 className="text-3xl font-heading font-bold text-slate-900 mb-4 text-center">Commercial Drain Cleaning</h3>
              <p className="text-center text-slate-600 mb-8">
                We provide specialized drain cleaning services for businesses throughout Southwest Washington, serving Longview, Vancouver, Battle Ground, Camas, Washougal, Ridgefield, Woodland, and all surrounding areas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-8 h-8 text-brand-red" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-slate-900 mb-3">Restaurant Drains</h4>
                  <p className="text-gray-700 text-sm">
                    Specialized grease trap cleaning, kitchen drain maintenance, and floor drain services 
                    for restaurants and food service establishments.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-brand-red" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-slate-900 mb-3">Office Buildings</h4>
                  <p className="text-gray-700 text-sm">
                    Preventive maintenance programs and emergency drain services for office buildings, 
                    retail spaces, and commercial facilities.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-brand-red" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-slate-900 mb-3">Industrial Facilities</h4>
                  <p className="text-gray-700 text-sm">
                    High-capacity drain cleaning for manufacturing facilities, warehouses, and industrial 
                    properties throughout Clark County and Cowlitz County.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <Link 
                  href="/commercial" 
                  className="inline-flex items-center text-brand-red font-bold hover:text-brand-red-dark transition-colors text-lg group"
                >
                  Learn More About Our Commercial Services 
                  <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Drain Cleaning Process */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 text-center">
              Our Professional <span className="text-brand-red">Drain Cleaning</span> Process
            </h2>
            <p className="text-xl text-slate-600 mb-16 text-center max-w-3xl mx-auto">
              Every drain cleaning job begins with a thorough assessment to determine the best approach 
              for your specific situation. Here's what you can expect:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-red to-brand-red-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-heading font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Initial Assessment</h3>
                <p className="text-slate-600 leading-relaxed">
                  We evaluate the drainage problem, identify the type and location of the blockage, 
                  and determine the most effective cleaning method.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-red to-brand-red-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-heading font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Equipment Selection</h3>
                <p className="text-slate-600 leading-relaxed">
                  Based on our assessment, we select the appropriate tools - from drain snakes for simple 
                  clogs to hydro jetters for tough blockages.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-red to-brand-red-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-heading font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Professional Cleaning</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our experienced technicians safely and effectively clear the blockage while protecting 
                  your pipes and surrounding areas from damage.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-red to-brand-red-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-heading font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Testing & Prevention</h3>
                <p className="text-slate-600 leading-relaxed">
                  We test the drain thoroughly to ensure proper flow and provide recommendations 
                  to prevent future clogs and maintain optimal drainage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Drain Problems */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 text-center">
              Common Drain Problems in <span className="text-brand-red">Southwest Washington</span>
            </h2>
            <p className="text-xl text-slate-600 mb-16 text-center max-w-3xl mx-auto">
              Understanding common drainage issues can help you identify problems early and prevent costly repairs. 
              Here are the most frequent drain problems we encounter throughout Southwest Washington:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Slow Draining Sinks</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Gradual accumulation of hair, soap, grease, and debris creates partial blockages that 
                    slow drainage over time.
                  </p>
                  <div className="text-sm text-slate-600 font-semibold">
                    <span className="text-brand-red">Signs:</span> Water backs up, gurgling sounds, unpleasant odors
                  </div>
                </div>

                <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Completely Blocked Drains</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Complete blockages prevent any water flow and require immediate professional attention 
                    to prevent overflow and water damage.
                  </p>
                  <div className="text-sm text-slate-600 font-semibold">
                    <span className="text-brand-red">Signs:</span> No drainage, water backing up, potential flooding
                  </div>
                </div>

                <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Recurring Clogs</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Frequent blockages often indicate deeper issues like tree root intrusion, pipe damage, 
                    or improper drain slope.
                  </p>
                  <div className="text-sm text-slate-600 font-semibold">
                    <span className="text-brand-red">Signs:</span> Same drain clogs repeatedly, multiple drain issues
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Tree Root Intrusion</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Tree roots naturally seek water sources and can infiltrate sewer lines through small 
                    cracks, eventually causing major blockages.
                  </p>
                  <div className="text-sm text-slate-600 font-semibold">
                    <span className="text-brand-red">Signs:</span> Gurgling toilets, slow drains, sewage backups
                  </div>
                </div>

                <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Grease Buildup</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Cooking grease and fats solidify in pipes, creating stubborn blockages that worsen 
                    over time and attract other debris.
                  </p>
                  <div className="text-sm text-slate-600 font-semibold">
                    <span className="text-brand-red">Signs:</span> Kitchen sink backing up, foul odors, slow drainage
                  </div>
                </div>

                <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Mineral Buildup</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Hard water minerals accumulate inside pipes over time, reducing flow capacity and 
                    creating rough surfaces that catch debris.
                  </p>
                  <div className="text-sm text-slate-600 font-semibold">
                    <span className="text-brand-red">Signs:</span> Reduced water flow, white deposits, recurring clogs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 text-center">
              Drain Maintenance Tips from <span className="text-brand-red">Southwest Washington's Experts</span>
            </h2>
            <p className="text-xl text-slate-600 mb-16 text-center max-w-3xl mx-auto">
              Preventive maintenance is the key to avoiding costly drain problems. Follow these expert tips 
              to keep your drains flowing smoothly:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg border-2 border-green-200">
                <h3 className="text-3xl font-heading font-bold text-slate-900 mb-8 flex items-center">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                  Do's for Healthy Drains
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Use drain screens</strong>
                      <p className="text-gray-700 text-sm">Install screens in sinks and showers to catch hair and debris</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Run hot water regularly</strong>
                      <p className="text-gray-700 text-sm">Hot water helps dissolve soap and grease buildup</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Clean regularly</strong>
                      <p className="text-gray-700 text-sm">Monthly cleaning with baking soda and vinegar helps maintain flow</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Schedule professional cleaning</strong>
                      <p className="text-gray-700 text-sm">Annual professional cleaning prevents major blockages</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-lg border-2 border-red-200">
                <h3 className="text-3xl font-heading font-bold text-slate-900 mb-8 flex items-center">
                  <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-brand-red text-xl">×</span>
                  </div>
                  Don'ts That Damage Drains
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-xs font-bold">✕</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Pour grease down drains</strong>
                      <p className="text-gray-700 text-sm">Grease solidifies and creates stubborn blockages</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-xs font-bold">✕</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Use chemical drain cleaners</strong>
                      <p className="text-gray-700 text-sm">Harsh chemicals can damage pipes and are environmentally harmful</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-xs font-bold">✕</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Flush inappropriate items</strong>
                      <p className="text-gray-700 text-sm">Only toilet paper and waste should go down toilets</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-xs font-bold">✕</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Ignore warning signs</strong>
                      <p className="text-gray-700 text-sm">Address slow drainage and odors before they become major problems</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.15),transparent_60%)]" aria-hidden="true"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Professional <span className="text-brand-red">Drain Cleaning</span> You Can Trust
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-slate-300 leading-relaxed">
            Don't let clogged drains disrupt your daily routine. Contact H2O Plumbing today for 
            fast, effective drain cleaning services throughout Vancouver, Battle Ground, Camas, Washougal, Ridgefield, Longview, Woodland, and all of Southwest Washington.
          </p>
          <a 
            href={`tel:${BUSINESS_DATA.phoneRaw}`}
            className="bg-gradient-to-r from-brand-red to-brand-red-dark text-white px-12 py-5 rounded-xl font-heading font-bold text-2xl hover:shadow-2xl hover:shadow-brand-red/50 transition-all duration-300 inline-flex items-center hover:-translate-y-1 transform"
          >
            <Phone className="w-8 h-8 mr-3" />
            Call {BUSINESS_DATA.phone} Now
          </a>
        </div>
      </section>
    </div>
  );
}




