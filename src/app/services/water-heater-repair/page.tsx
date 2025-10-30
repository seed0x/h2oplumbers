import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Thermometer, Wrench, Zap, Clock, Shield, DollarSign, Phone, Home, ChevronRight, CheckCircle } from 'lucide-react';
import { BUSINESS_DATA } from '@/lib/business-data';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getPromotion } from '@/config/promotions';

export const metadata: Metadata = {
  title: `Water Heater Repair Vancouver, Battle Ground, Longview WA | Clark & Cowlitz County | H2O`,
  description: `Expert water heater repair, installation & replacement in Vancouver, Battle Ground, Longview, Camas, Washougal, Ridgefield, Woodland. Serving Clark County & Cowlitz County. Tank & tankless systems. Same-day service. Licensed plumbers. Call ${BUSINESS_DATA.phone}!`,
  keywords: `water heater repair Vancouver WA, water heater Longview WA, tankless water heater Battle Ground, water heater installation Clark County, water heater Cowlitz County, hot water heater Camas Washougal`,
};

export default function WaterHeaterRepairPage() {
  // Get promotion for coupon banner
  const heroPromotion = getPromotion('waterHeater');
  const fallbackPromotion = {
    id: 'fallbackWaterHeater',
    title: 'Water Heater Special',
    discount: '$100 OFF',
    description: 'New water heater installation',
    code: 'HEATER100',
    ctaText: 'Call to Redeem',
    ctaLink: `tel:${BUSINESS_DATA.phoneRaw}`,
    expiresAt: '2025-12-31',
  };

  const selectedPromotion = heroPromotion ?? fallbackPromotion;
  const badgeLabel = selectedPromotion.discount;
  const headingLabel = selectedPromotion.title;
  const couponCode = selectedPromotion.code ?? 'HEATER100';
  const ctaLink = selectedPromotion.ctaLink ?? `tel:${BUSINESS_DATA.phoneRaw}`;

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
            <span className="text-brand-cyan font-medium">Water Heater Services</span>
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
                  Professional Water Heater Services
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-slate-200">
                  Expert water heater repair, installation, and replacement for residential and commercial properties throughout Clark County and Cowlitz County. Serving Vancouver, Battle Ground, Ridgefield, Camas, Washougal, La Center, Yacolt, Amboy, Longview, Woodland, Kalama, and all surrounding communities. Tank and tankless systems—same-day service available.
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
                    <Thermometer className="w-4 h-4 text-brand-cyan" />
                    <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Same-Day Installation</span>
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">Get Hot Water Flowing Again</h2>
                  <p className="text-sm text-slate-600">Expert service • All brands • Quality guaranteed</p>
                </div>
                <form className="space-y-4" aria-label="Request service quote form">
                  <div>
                    <label className="sr-only" htmlFor="hero-name">Name</label>
                    <Input id="hero-name" placeholder="Your Name" className="text-black border-slate-300 focus:border-brand-cyan focus:ring-brand-cyan" />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="hero-phone">Phone Number</label>
                    <Input id="hero-phone" type="tel" placeholder="Phone Number" className="text-black border-slate-300 focus:border-brand-cyan focus:ring-brand-cyan" />
                  </div>
                  <div>
                    <Select>
                      <SelectTrigger className="text-black border-slate-300 focus:border-brand-cyan focus:ring-brand-cyan">
                        <SelectValue placeholder="Service Needed" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="water-heater">Water Heater Repair</SelectItem>
                        <SelectItem value="water-heater-install">Water Heater Installation</SelectItem>
                        <SelectItem value="emergency">Same-Day Service</SelectItem>
                        <SelectItem value="drain-cleaning">Drain Cleaning</SelectItem>
                        <SelectItem value="camera-inspection">Camera Inspection</SelectItem>
                        <SelectItem value="repipe">Repipe & Pipe Repair</SelectItem>
                        <SelectItem value="bathroom-remodel">Bathroom Remodel</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Free Quote Now
                  </Button>
                </form>
                <div className="flex items-center justify-center gap-4 mt-5 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Shield className="w-3 h-3 text-green-600" />
                    <span>Quality guaranteed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-green-600" />
                    <span>Same-day service</span>
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
              <p className="text-sm md:text-base opacity-90">Units Installed</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-heading font-bold mb-1">Same Day</div>
              <p className="text-sm md:text-base opacity-90">Service Available</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-heading font-bold mb-1">10 Year</div>
              <p className="text-sm md:text-base opacity-90">Warranty</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-heading font-bold mb-1">All Brands</div>
              <p className="text-sm md:text-base opacity-90">Serviced</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Coupon Banner */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-brand-cyan rounded-2xl shadow-lg overflow-hidden">
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
                    <div className="text-lg font-heading font-bold text-brand-cyan">{couponCode}</div>
                  </div>
                  <a
                    href={ctaLink}
                    className="bg-white text-brand-cyan hover:bg-slate-100 px-8 py-3.5 rounded-lg font-bold transition-colors shadow-lg whitespace-nowrap inline-flex items-center justify-center h-[52px]"
                  >
                    Claim Savings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Water Heater Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Complete <span className="text-brand-cyan">Water Heater</span> Solutions</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Whether you need same-day repairs, routine maintenance, or a complete water heater replacement, 
                H2O Plumbing provides expert service for all types of water heating systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-brand-cyan/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-brand-cyan/10 rounded-full flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8 text-brand-cyan" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-slate-900">Water Heater Repair</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Expert diagnosis and repair of all water heater problems throughout Southwest Washington. From heating element replacement 
                  to thermostat issues, we fix it right the first time.
                </p>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• No hot water troubleshooting</li>
                  <li>• Heating element replacement</li>
                  <li>• Thermostat repair</li>
                  <li>• Leak detection and repair</li>
                  <li>• Gas valve replacement</li>
                  <li>• Pilot light issues</li>
                </ul>
                <div className="bg-brand-cyan/10 p-4 rounded-lg">
                  <p className="text-brand-cyan font-medium text-sm">Same-day repairs available</p>
                </div>
              </div>

              <div className="bg-white border-2 border-brand-cyan/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-brand-cyan/10 rounded-full flex items-center justify-center mb-6">
                  <Thermometer className="w-8 h-8 text-brand-cyan" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-slate-900">Water Heater Installation</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Professional installation of new water heaters with proper sizing, code compliance, 
                  and comprehensive warranties on all work performed.
                </p>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• Tank water heater installation</li>
                  <li>• Tankless system installation</li>
                  <li>• Hybrid heat pump units</li>
                  <li>• Gas and electric systems</li>
                  <li>• Proper sizing consultation</li>
                  <li>• Code compliance assurance</li>
                </ul>
                <div className="bg-brand-cyan/10 p-4 rounded-lg">
                  <p className="text-brand-cyan font-medium text-sm">Free installation estimates</p>
                </div>
              </div>

              <div className="bg-white border-2 border-brand-cyan/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-brand-cyan/10 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-brand-cyan" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-slate-900">Maintenance & Replacement</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Preventive maintenance programs and replacement services to ensure optimal performance 
                  and extend the life of your water heating system.
                </p>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• Annual maintenance programs</li>
                  <li>• Anode rod replacement</li>
                  <li>• Tank flushing services</li>
                  <li>• System performance optimization</li>
                  <li>• Replacement consultation</li>
                  <li>• Energy efficiency upgrades</li>
                </ul>
                <div className="bg-brand-cyan/10 p-4 rounded-lg">
                  <p className="text-brand-cyan font-medium text-sm">Maintenance plans available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tank vs Tankless Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
                Tank vs. <span className="text-brand-cyan">Tankless</span> Water Heaters
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Compare both options side-by-side to choose the best water heating solution for your home.
              </p>
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Tank Water Heater */}
              <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-brand-cyan to-brand-cyan/90 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Thermometer className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold">Tank Water Heater</h3>
                    </div>
                    <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full font-semibold">Most Popular</span>
                  </div>
                  <p className="text-sm text-white/90">Traditional storage tank system</p>
                </div>

                <div className="p-6 space-y-6">
                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-heading font-bold text-slate-900">$800-$2,500</span>
                    <span className="text-slate-600 text-sm">installed</span>
                  </div>

                  {/* Pros */}
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Advantages
                    </h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2 text-slate-700">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Lower upfront cost</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Simple installation</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Proven, reliable technology</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Easy maintenance & repair</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Works in most homes</span>
                      </li>
                    </ul>
                  </div>

                  {/* Cons */}
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-amber-600" />
                      Considerations
                    </h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2 text-slate-600">
                        <span className="text-amber-600 mt-0.5">•</span>
                        <span>Higher energy bills</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600">
                        <span className="text-amber-600 mt-0.5">•</span>
                        <span>Limited hot water supply</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600">
                        <span className="text-amber-600 mt-0.5">•</span>
                        <span>Takes up floor space</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600">
                        <span className="text-amber-600 mt-0.5">•</span>
                        <span>8-12 year lifespan</span>
                      </li>
                    </ul>
                  </div>

                  {/* Best For */}
                  <div className="bg-slate-100 rounded-xl p-4 border-l-4 border-brand-cyan">
                    <h5 className="font-heading font-bold text-slate-900 mb-2 text-sm">BEST FOR</h5>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Budget-conscious homeowners and homes with predictable hot water needs
                    </p>
                  </div>
                </div>
              </div>

              {/* Tankless Water Heater */}
              <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold">Tankless Water Heater</h3>
                    </div>
                    <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full font-semibold">Energy Saver</span>
                  </div>
                  <p className="text-sm text-white/90">On-demand heating system</p>
                </div>

                <div className="p-6 space-y-6">
                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-heading font-bold text-slate-900">$2,500-$4,500</span>
                    <span className="text-slate-600 text-sm">installed</span>
                  </div>

                  {/* Pros */}
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Advantages
                    </h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2 text-slate-700">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Unlimited hot water</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>30-40% more efficient</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Wall-mounted, saves space</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>20+ year lifespan</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>Only heats when needed</span>
                      </li>
                    </ul>
                  </div>

                  {/* Cons */}
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-amber-600" />
                      Considerations
                    </h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2 text-slate-600">
                        <span className="text-amber-600 mt-0.5">•</span>
                        <span>Higher upfront cost</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600">
                        <span className="text-amber-600 mt-0.5">•</span>
                        <span>May need electrical upgrade</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600">
                        <span className="text-amber-600 mt-0.5">•</span>
                        <span>Flow rate limitations</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600">
                        <span className="text-amber-600 mt-0.5">•</span>
                        <span>Complex installation</span>
                      </li>
                    </ul>
                  </div>

                  {/* Best For */}
                  <div className="bg-slate-100 rounded-xl p-4 border-l-4 border-green-600">
                    <h5 className="font-heading font-bold text-slate-900 mb-2 text-sm">BEST FOR</h5>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Energy-conscious homes, limited space, and families with high hot water usage
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <div className="bg-slate-50 border-2 border-brand-cyan/20 rounded-2xl p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">
                  Not Sure Which Is Right for You?
                </h3>
                <p className="text-slate-600 mb-6">
                  Our water heater experts will evaluate your home's needs and recommend the best solution.
                </p>
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call for Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Water Heater Problems */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 text-center">Common Water Heater Problems in <span className="text-brand-cyan">Southwest Washington</span></h2>
            <p className="text-xl text-slate-600 mb-12 text-center">
              Recognizing water heater problems early can prevent costly repairs and extend your system's life. 
              Here are the most common issues we see throughout Clark County and Cowlitz County:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white border-2 border-brand-cyan/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">No Hot Water</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Complete loss of hot water can indicate failed heating elements, gas valve issues, 
                    or thermostat problems requiring immediate attention.
                  </p>
                  <div className="text-sm text-slate-600 font-semibold">
                    <span className="text-brand-cyan">Possible Causes:</span> Heating element failure, gas supply issues, thermostat malfunction
                  </div>
                </div>

                <div className="bg-white border-2 border-brand-cyan/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Insufficient Hot Water</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Running out of hot water quickly often means your system is undersized, sediment 
                    buildup is reducing capacity, or heating elements are failing.
                  </p>
                  <div className="text-sm text-slate-600 font-semibold">
                    <span className="text-brand-cyan">Possible Causes:</span> Sediment buildup, undersized unit, failing elements
                  </div>
                </div>

                <div className="bg-white border-2 border-brand-cyan/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Strange Noises</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Popping, rumbling, or crackling sounds typically indicate sediment buildup causing 
                    overheating and inefficient operation.
                  </p>
                  <div className="text-sm text-slate-600 font-semibold">
                    <span className="text-brand-cyan">Possible Causes:</span> Sediment accumulation, mineral deposits, aging tank
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white border-2 border-brand-cyan/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Water Leaks</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Any water around your water heater indicates potential tank corrosion, loose 
                    connections, or valve problems requiring prompt professional attention.
                  </p>
                  <div className="text-sm text-slate-600 font-semibold">
                    <span className="text-brand-cyan">Possible Causes:</span> Tank corrosion, loose fittings, valve failure
                  </div>
                </div>

                <div className="bg-white border-2 border-brand-cyan/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Discolored Water</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Rusty or discolored hot water suggests internal tank corrosion or anode rod 
                    failure, often requiring system replacement.
                  </p>
                  <div className="text-sm text-slate-600 font-semibold">
                    <span className="text-brand-cyan">Possible Causes:</span> Tank corrosion, anode rod failure, mineral deposits
                  </div>
                </div>

                <div className="bg-white border-2 border-brand-cyan/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">High Energy Bills</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Sudden increases in energy costs often indicate declining efficiency due to 
                    sediment buildup, failing components, or an aging system.
                  </p>
                  <div className="text-sm text-slate-600 font-semibold">
                    <span className="text-brand-cyan">Possible Causes:</span> Sediment buildup, failing insulation, aging system
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose H2O Plumbing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
                Why Choose <span className="text-brand-cyan">H2O Plumbing</span> for Water Heaters?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Family-owned and trusted since 2004, serving Southwest Washington with expert water heater services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-brand-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-brand-cyan" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Same-Day Service</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Fast response times with same-day installation and repair services available throughout Southwest Washington.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-brand-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-brand-cyan" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Licensed & Insured</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Fully licensed, bonded, and insured plumbers with decades of combined water heater experience.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-brand-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-10 h-10 text-brand-cyan" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Upfront Pricing</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Free estimates with transparent, competitive pricing. No hidden fees or surprise charges.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-brand-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-10 h-10 text-brand-cyan" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Expert Service</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  20+ years serving families and businesses with professional water heater installation and repair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Water Heater Sizing Guide */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 text-center">Choosing the Right <span className="text-brand-cyan">Size</span> Water Heater</h2>
            <p className="text-xl text-slate-600 mb-12 text-center">
              Proper sizing ensures you have adequate hot water while maximizing energy efficiency. 
              Our experts help you select the perfect system for your home throughout Southwest Washington.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-slate-100">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6 text-center">Tank Water Heater Sizing Guide</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="text-left py-3 px-4 font-bold text-slate-900">Family Size</th>
                      <th className="text-left py-3 px-4 font-bold text-slate-900">Tank Size (Gallons)</th>
                      <th className="text-left py-3 px-4 font-bold text-slate-900">Typical Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 px-4">1-2 People</td>
                      <td className="py-3 px-4 font-medium text-brand-cyan">30-40 Gallons</td>
                      <td className="py-3 px-4 text-slate-600">Low to moderate usage</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 px-4">2-3 People</td>
                      <td className="py-3 px-4 font-medium text-brand-cyan">40-50 Gallons</td>
                      <td className="py-3 px-4 text-slate-600">Moderate usage patterns</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 px-4">3-4 People</td>
                      <td className="py-3 px-4 font-medium text-brand-cyan">50-60 Gallons</td>
                      <td className="py-3 px-4 text-slate-600">Typical family usage</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 px-4">4-5 People</td>
                      <td className="py-3 px-4 font-medium text-brand-cyan">60-80 Gallons</td>
                      <td className="py-3 px-4 text-slate-600">High usage household</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">5+ People</td>
                      <td className="py-3 px-4 font-medium text-brand-cyan">80+ Gallons</td>
                      <td className="py-3 px-4 text-slate-600">Very high usage needs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow border border-slate-100">
                <h4 className="text-lg font-heading font-bold text-slate-900 mb-4">Factors We Consider</h4>
                <ul className="text-slate-700 space-y-2">
                  <li>• Number of bathrooms and fixtures</li>
                  <li>• Family size and usage patterns</li>
                  <li>• Peak demand periods</li>
                  <li>• Available space for installation</li>
                  <li>• Energy efficiency preferences</li>
                  <li>• Budget considerations</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow border border-slate-100">
                <h4 className="text-lg font-heading font-bold text-slate-900 mb-4">Professional Assessment</h4>
                <p className="text-slate-700 mb-4">
                  Our experienced technicians perform on-site evaluations to recommend the ideal 
                  water heater size and type for your specific needs and budget.
                </p>
                <Link 
                  href="/booking"
                  className="bg-brand-cyan text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-cyan-dark transition-colors inline-block"
                >
                  Schedule Free Consultation
                </Link>
              </div>
            </div>

            {/* Brand Focus Section */}
            <div className="mt-12">
              <h3 className="text-3xl font-heading font-bold text-slate-900 mb-8 text-center">Trusted <span className="text-brand-cyan">Water Heater Brands</span> We Service</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow border border-slate-100 text-center">
                  <div className="w-16 h-16 bg-brand-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Thermometer className="w-8 h-8 text-brand-cyan" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">Premium Brands</h4>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>Rheem</li>
                    <li>Navien</li>
                    <li>Noritz</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow border border-slate-100 text-center">
                  <div className="w-16 h-16 bg-brand-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-brand-cyan" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">Reliable Brands</h4>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>Bradford White</li>
                    <li>AO Smith</li>
                    <li>State</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow border border-slate-100 text-center">
                  <div className="w-16 h-16 bg-brand-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-brand-cyan" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">All Systems</h4>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>Tank Water Heaters</li>
                    <li>Tankless Systems</li>
                    <li>Hybrid Heat Pumps</li>
                  </ul>
                </div>
              </div>
              
              {/* Brands We Usually Install Section */}
              <div className="bg-gradient-to-r from-slate-50 to-white rounded-2xl p-8 border border-slate-200 shadow-lg mb-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h4 className="text-2xl font-heading font-bold text-slate-900 mb-4">Brands We Usually Install</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-heading font-semibold text-slate-900 mb-2 text-sm">Tank Systems:</h5>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Rheem Professional Series</li>
                          <li>• Bradford White</li>
                          <li>• AO Smith Signature</li>
                          <li>• State Select</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-heading font-semibold text-slate-900 mb-2 text-sm">Tankless Systems:</h5>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Navien NPE Series</li>
                          <li>• Noritz Residential</li>
                          <li>• Rheem Performance Plus</li>
                          <li>• Rinnai RL Series</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md border-2 border-brand-cyan">
                    <h4 className="text-xl font-heading font-bold text-slate-900 mb-3">Need a Specific Brand?</h4>
                    <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                      Request a quote for the exact brand and efficiency level you want. We'll size the system correctly, pull permits if required, and register warranties.
                    </p>
                    <Link href="/booking" className="block bg-brand-cyan text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-cyan-dark transition-colors shadow-lg text-center">Request Brand Quote</Link>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Link href="/booking" className="inline-block bg-brand-cyan text-white px-8 py-4 rounded-lg font-bold hover:bg-brand-cyan-dark transition-colors shadow-lg">Get Your Free Quote Today</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 text-center">
              Water Heater <span className="text-brand-cyan">Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 text-center">
              Get answers to the most common questions about water heater service, repair, and replacement.
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-slate-50 to-white rounded-xl p-6 border-l-4 border-brand-cyan shadow-sm">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">How long does a water heater typically last?</h3>
                <p className="text-slate-700 leading-relaxed">
                  Traditional tank water heaters typically last 8-12 years, while tankless systems can last 20+ years with proper maintenance. Factors affecting lifespan include water quality, usage patterns, and regular maintenance.
                </p>
              </div>

              <div className="bg-gradient-to-r from-slate-50 to-white rounded-xl p-6 border-l-4 border-brand-cyan shadow-sm">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">What size water heater do I need for my home?</h3>
                <p className="text-slate-700 leading-relaxed">
                  For tank water heaters: 1-2 people need 30-40 gallons, 2-3 people need 40-50 gallons, 3-4 people need 50-60 gallons, and 5+ people need 80+ gallons. Our technicians perform on-site assessments to recommend the ideal size for your specific needs.
                </p>
              </div>

              <div className="bg-gradient-to-r from-slate-50 to-white rounded-xl p-6 border-l-4 border-brand-cyan shadow-sm">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Should I repair or replace my water heater?</h3>
                <p className="text-slate-700 leading-relaxed">
                  If your water heater is under 8 years old and the repair cost is less than half the replacement cost, repair is usually recommended. For units over 10 years old with major issues, or if you're experiencing frequent repairs, replacement is typically more cost-effective long-term.
                </p>
              </div>

              <div className="bg-gradient-to-r from-slate-50 to-white rounded-xl p-6 border-l-4 border-brand-cyan shadow-sm">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">How much does water heater installation cost?</h3>
                <p className="text-slate-700 leading-relaxed">
                  Tank water heaters typically cost $800-$2,500 installed, while tankless systems range from $2,500-$4,500. Exact costs depend on unit size, type, location, and any necessary upgrades to electrical or gas systems. We provide free, detailed estimates.
                </p>
              </div>

              <div className="bg-gradient-to-r from-slate-50 to-white rounded-xl p-6 border-l-4 border-brand-cyan shadow-sm">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Do you offer same-day water heater service?</h3>
                <p className="text-slate-700 leading-relaxed">
                  Yes! We offer same-day service for water heater repairs and installations throughout Southwest Washington. Call us in the morning, and in many cases, we can have your hot water restored the same day.
                </p>
              </div>

              <div className="bg-gradient-to-r from-slate-50 to-white rounded-xl p-6 border-l-4 border-brand-cyan shadow-sm">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">What's the difference between tank and tankless water heaters?</h3>
                <p className="text-slate-700 leading-relaxed">
                  Tank water heaters store and continuously heat water in a reservoir, offering lower upfront costs but higher energy bills. Tankless systems heat water on-demand, providing unlimited hot water and 30-40% energy savings, but require higher initial investment.
                </p>
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
            Ready for Reliable <span className="text-brand-cyan">Hot Water?</span>
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-slate-300 leading-relaxed">
            From same-day repairs to new installations, H2O Plumbing provides expert water heater 
            services throughout Vancouver, Battle Ground, Ridgefield, Camas, Washougal, Longview, Woodland, Kalama, and all surrounding communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white px-12 py-5 rounded-xl font-heading font-bold text-2xl hover:shadow-2xl hover:shadow-brand-cyan/50 transition-all duration-300 inline-flex items-center hover:-translate-y-1 transform"
            >
              <Phone className="w-8 h-8 mr-3" />
              Call {BUSINESS_DATA.phone}
            </a>
            <Link
              href="/booking"
              className="bg-white text-brand-cyan px-12 py-5 rounded-xl font-heading font-bold text-2xl hover:bg-slate-100 transition-all duration-300 inline-flex items-center"
            >
              Schedule Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}








