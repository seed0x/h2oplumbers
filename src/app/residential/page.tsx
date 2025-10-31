import { Metadata } from 'next'
import Link from 'next/link'
import { AlertTriangle, Flame, Waves, Search, ShowerHead, Home as HomeIcon, Phone, Shield, Activity, Star, CheckCircle2, Clock, Award, Droplet, ChevronRight } from 'lucide-react'
import { BUSINESS_DATA } from '@/lib/business-data'

export const metadata: Metadata = {
  title: 'Residential Plumbing Services Vancouver WA | H2O Plumbing',
  description: 'Expert residential plumbing services in Vancouver WA. Same-day repairs, water heaters, drain cleaning, repiping & more. 30+ years experience. Licensed & insured. Call (360) 433-9743',
  keywords: 'residential plumbing Vancouver WA, home plumber, water heater repair, drain cleaning, emergency plumbing, H2O Plumbing',
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
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="bg-slate-50 py-3 border-b border-slate-200" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-brand-cyan transition-colors flex items-center" aria-label="Home">
              <HomeIcon className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <Link href="/services" className="hover:text-brand-cyan transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-brand-cyan font-semibold">Residential</span>
          </div>
        </div>
      </nav>

      {/* Hero Section - Clean White Design */}
      <section className="relative overflow-hidden bg-white pt-12 pb-16 md:pb-20">
        {/* Grid pattern background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `
              linear-gradient(to right, rgb(6 182 212) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(6 182 212) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Subtle accent gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-cyan/5 via-transparent to-transparent rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Trust Bar */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-10">
              <div className="flex items-center gap-2 text-sm bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                <div className="flex -space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-bold text-slate-900">4.9/5 Rating</span>
              </div>
              <div className="h-4 w-px bg-slate-300 hidden sm:block" />
              <div className="flex items-center gap-2 text-sm bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                <Shield className="w-4 h-4 text-brand-cyan" />
                <span className="font-bold text-slate-900">Licensed & Insured</span>
              </div>
              <div className="h-4 w-px bg-slate-300 hidden sm:block" />
              <div className="flex items-center gap-2 text-sm bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                <Clock className="w-4 h-4 text-brand-cyan" />
                <span className="font-bold text-slate-900">Backed by All County Plumbing</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column - Content */}
              <div className="lg:pt-4">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-cyan/10 to-brand-turquoise/10 border border-brand-cyan/20 rounded-full px-4 py-2 mb-6">
                  <HomeIcon className="w-4 h-4 text-brand-cyan" />
                  <span className="text-sm font-semibold text-slate-700">Residential Services</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-5 leading-[1.1] text-slate-900">
                  Vancouver's Trusted
                  <br />
                  <span className="bg-gradient-to-r from-brand-cyan via-brand-turquoise to-brand-cyan bg-clip-text text-transparent">
                    Home Plumbing Experts
                  </span>
                </h1>

                <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
                  Family-backed by All County Plumbing. From same-day repairs to complete installations, we treat every home like our own.
                </p>

                {/* Primary CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <a
                    href="tel:+13604339743"
                    className="group relative inline-flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <Phone className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Call Now (360) 433-9743</span>
                  </a>
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-brand-cyan border-2 border-brand-cyan font-bold px-8 py-4 rounded-xl text-base shadow-lg transition-all duration-300"
                  >
                    Get Free Quote
                  </a>
                </div>

                {/* Urgency Bar */}
                <div className="bg-gradient-to-r from-brand-cyan/10 to-brand-turquoise/10 border-l-4 border-brand-cyan rounded-lg p-4 mb-6">
                  <p className="text-sm text-slate-700">
                    <span className="font-bold text-brand-cyan">⚡ Same-Day Service Available</span> — Call before 2 PM for same-day appointments
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-start gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Same-Day Service</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Upfront Pricing</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>100% Satisfaction</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Clock, value: '2020', label: 'Founded' },
                    { icon: HomeIcon, value: '5,000+', label: 'Homes Served' },
                  ].map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <Icon className="w-6 h-6 text-brand-cyan mx-auto mb-1.5" />
                        <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                        <div className="text-[11px] text-slate-600 font-medium">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div id="quote-form" className="lg:sticky lg:top-24">
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white border-2 border-brand-cyan/30">
                  {/* Trust Banner */}
                  <div className="bg-gradient-to-r from-brand-cyan to-brand-turquoise text-white py-3 px-4 text-center">
                    <p className="text-sm font-bold">🏆 Trusted by 5,000+ Vancouver Homeowners</p>
                  </div>
                  
                  <div className="p-6 md:p-7">
                    <div className="text-center mb-5">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-brand-cyan to-brand-turquoise rounded-xl mb-3 shadow-lg">
                        <Droplet className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-1.5">
                        Get Your Free Quote Today
                      </h2>
                      <p className="text-slate-600 text-sm">
                        ✓ Fast Response ✓ No Obligation ✓ Honest Pricing
                      </p>
                    </div>

                    <form className="space-y-3.5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                        <input 
                          type="text" 
                          id="name" 
                          required
                          className="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-lg focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 outline-none transition-all text-sm text-slate-900"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          required
                          className="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-lg focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 outline-none transition-all text-sm text-slate-900"
                          placeholder="(360) 555-0123"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-xs font-semibold text-slate-700 mb-1.5">Service Needed *</label>
                        <select 
                          id="service" 
                          required
                          className="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-lg focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 outline-none transition-all text-sm text-slate-900"
                        >
                          <option value="">Select a service...</option>
                          <option>Emergency Repair</option>
                          <option>Water Heater</option>
                          <option>Drain Cleaning</option>
                          <option>Leak Detection</option>
                          <option>Fixture Installation</option>
                          <option>Repipe/Pipe Repair</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-brand-cyan to-brand-turquoise hover:from-brand-cyan-dark hover:to-brand-cyan text-white font-bold py-4 rounded-xl text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        Get My Free Quote →
                      </button>
                      <div className="text-center mt-4 space-y-2">
                        <p className="text-xs text-slate-500">
                          ⚡ Response within 1 hour during business hours
                        </p>
                        <p className="text-xs text-slate-500">
                          🔒 Your info is safe — we never share or sell it
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Stats - Compact Banner */}
      <section className="py-8 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-heading font-bold text-brand-cyan mb-1">30+</div>
              <p className="text-sm text-slate-600 font-medium">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-brand-cyan mb-1">Same Day</div>
              <p className="text-sm text-slate-600 font-medium">Service Available</p>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-brand-cyan mb-1">100%</div>
              <p className="text-sm text-slate-600 font-medium">Satisfaction</p>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-brand-cyan mb-1">Licensed</div>
              <p className="text-sm text-slate-600 font-medium">& Insured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-cyan/10 px-4 py-2 rounded-full mb-4">
              <HomeIcon className="w-4 h-4 text-brand-cyan" />
              <span className="text-sm font-semibold text-brand-cyan">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">Complete Residential Plumbing Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Professional solutions for every plumbing need in your home</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="group bg-white border-2 border-slate-200 hover:border-brand-cyan/30 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-cyan/10 to-brand-turquoise/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-brand-cyan" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3 text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <ul className="text-slate-600 text-sm space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan mr-2 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-slate-50 border border-brand-cyan/20 p-4 rounded-lg">
                    <p className="text-brand-cyan font-bold text-sm">{service.price}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA Below Services */}
          <div className="mt-16 text-center">
            <p className="text-lg text-slate-600 mb-6">Ready to get started? We're here to help with all your plumbing needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13604339743"
                className="inline-flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5" />
                Call (360) 433-9743
              </a>
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-brand-cyan border-2 border-brand-cyan font-bold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Program */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-cyan/10 px-4 py-2 rounded-full mb-4">
              <Shield className="w-4 h-4 text-brand-cyan" />
              <span className="text-sm font-semibold text-brand-cyan">Maintenance Program</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
              Preventive Maintenance Program
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Protect your home and prevent costly repairs with regular plumbing maintenance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* What's Included */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">What's Included</h3>
              <div className="space-y-3">
                {maintenanceProgram.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">Program Benefits</h3>
              <div className="space-y-4">
                {[
                  { icon: Award, title: 'Save Money', desc: 'Prevent costly repairs and emergency calls' },
                  { icon: Shield, title: 'Peace of Mind', desc: 'Know your plumbing is in good condition' },
                  { icon: Clock, title: 'Priority Service', desc: 'Get faster response times when you need us' },
                  { icon: HomeIcon, title: 'Extend Lifespan', desc: 'Keep fixtures and pipes working longer' }
                ].map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-brand-cyan" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{benefit.title}</h4>
                        <p className="text-sm text-slate-600">{benefit.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-slate-600 mb-6">Interested in our maintenance program?</p>
            <a
              href="tel:+13604339743"
              className="inline-flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Call to Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-brand-cyan/10 px-4 py-2 rounded-full mb-4">
                <Star className="w-4 h-4 text-brand-cyan" />
                <span className="text-sm font-semibold text-brand-cyan">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-slate-900">
                Why Vancouver Homeowners
                <br />
                <span className="bg-gradient-to-r from-brand-cyan via-brand-turquoise to-brand-cyan bg-clip-text text-transparent">Trust H2O Plumbing</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Over 30 years of family plumbing experience serving Southwest Washington homes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: HomeIcon, title: 'Family-Owned', desc: 'Trusted local business serving families since 2009' },
                { icon: Clock, title: 'Same-Day Service', desc: 'Fast response for urgent plumbing issues' },
                { icon: Shield, title: 'Licensed & Insured', desc: 'Fully bonded and insured for your protection' },
                { icon: Award, title: 'Quality Guarantee', desc: '100% satisfaction on every job we complete' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-cyan/10 to-brand-turquoise/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-10 h-10 text-brand-cyan" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-cyan via-brand-turquoise to-brand-cyan text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready for Expert Home Plumbing Service?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            From emergency repairs to complete installations, H2O Plumbing provides trusted residential services throughout Vancouver and Southwest Washington.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+13604339743"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-brand-cyan px-10 py-5 rounded-xl font-heading font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              Call (360) 433-9743
            </a>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border-2 border-white px-10 py-5 rounded-xl font-heading font-bold text-xl transition-all duration-300"
            >
              Schedule Online
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">Service Areas</h2>
            <p className="text-xl text-slate-600">Serving homeowners throughout Southwest Washington</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              'Vancouver', 'Battle Ground', 'Camas', 'Washougal',
              'Ridgefield', 'La Center', 'Woodland', 'Longview'
            ].map((city, index) => (
              <div key={index} className="bg-white border border-brand-cyan/20 rounded-xl p-4 text-center hover:border-brand-cyan hover:shadow-md transition-all">
                <h3 className="font-heading font-bold text-brand-cyan">{city}</h3>
              </div>
            ))}
          </div>

          <div className="text-center bg-white p-8 rounded-2xl border border-slate-200">
            <p className="text-lg text-slate-600 mb-6">Don't see your area? We serve many communities in Clark County.</p>
            <a
              href="tel:+13604339743"
              className="inline-flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Call (360) 433-9743
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}





