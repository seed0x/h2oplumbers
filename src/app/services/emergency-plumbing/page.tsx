import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Phone, AlertTriangle, Wrench, Shield, Star, Home, ChevronRight } from 'lucide-react';
import { BUSINESS_DATA } from '@/lib/business-data';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from 'next/image';

export const metadata: Metadata = {
  title: `Same-Day Plumber Vancouver, Battle Ground, Longview WA | Clark & Cowlitz County | H2O`,
  description: `Same-day plumber serving Vancouver, Battle Ground, Longview, Camas, Washougal, Ridgefield, Woodland. Clark County & Cowlitz County. Burst pipes, severe leaks, sewer backups. Licensed, insured, fast response. Call ${BUSINESS_DATA.phone}.`,
  keywords: `same day plumber Vancouver WA, emergency plumber Longview, burst pipe Battle Ground, urgent plumbing Camas Washougal, emergency plumber Clark County Cowlitz County`,
};

export default function SameDayPlumbingPage() {
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
            <span className="text-brand-cyan font-medium">Same-Day Service</span>
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
                  Same-Day Plumbing Service in Southwest Washington
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-slate-200">
                  Plumbing problems can't wait. When you need fast help, H2O Plumbing is here to provide professional same-day plumbing services throughout Clark County and Cowlitz County. Serving Vancouver, Battle Ground, Ridgefield, Camas, Washougal, La Center, Longview, Woodland, Kalama, and all surrounding communities.
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
                    <AlertTriangle className="w-4 h-4 text-brand-cyan" />
                    <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Fast Response</span>
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">Get Help Right Now</h2>
                  <p className="text-sm text-slate-600">Same-day service • Licensed experts • Fast response</p>
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
                        <SelectItem value="emergency">Same-Day Service</SelectItem>
                        <SelectItem value="drain-cleaning">Drain Cleaning</SelectItem>
                        <SelectItem value="water-heater">Water Heater Repair</SelectItem>
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
                    Get Help Now
                  </Button>
                </form>
                <div className="flex items-center justify-center gap-4 mt-5 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-green-600" />
                    <span>1-2 hour response</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-3 h-3 text-green-600" />
                    <span>Licensed pros</span>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-heading font-bold mb-1">1-2 Hours</div>
              <p className="text-sm md:text-base opacity-90">Response Time</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-heading font-bold mb-1">Same Day</div>
              <p className="text-sm md:text-base opacity-90">Service Available</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-heading font-bold mb-1">20+ Yrs</div>
              <p className="text-sm md:text-base opacity-90">Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Constitutes a Plumbing Same-Day */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 text-center">
              What Requires <span className="text-brand-cyan">Same-Day Service?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-16 text-center leading-relaxed max-w-3xl mx-auto">
              Not all plumbing problems require immediate service, but some situations can't wait. Here are the 
              most common urgent issues we handle throughout Southwest Washington:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-brand-cyan/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-cyan/10 rounded-lg flex items-center justify-center mr-4">
                    <AlertTriangle className="w-7 h-7 text-brand-cyan" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900">
                    Burst Pipes
                  </h3>
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Burst pipes can cause thousands of dollars in water damage within minutes. Whether caused by 
                  freezing temperatures, age, or pressure issues, burst pipes require immediate attention.
                </p>
                <ul className="text-slate-600 space-y-3">
                  <li className="flex items-start">
                    <span className="text-brand-cyan mr-3 text-xl font-bold">•</span>
                    <span>Shut off main water supply immediately</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-cyan mr-3 text-xl font-bold">•</span>
                    <span>Remove standing water if safe to do so</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-cyan mr-3 text-xl font-bold">•</span>
                    <span>Call us for same-day pipe repair</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-cyan mr-3 text-xl font-bold">•</span>
                    <span>Document damage for insurance claims</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-brand-cyan/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-cyan/10 rounded-lg flex items-center justify-center mr-4">
                    <AlertTriangle className="w-7 h-7 text-brand-cyan" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900">
                    Severe Water Leaks
                  </h3>
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Major leaks from pipes, water heaters, or fixtures can quickly flood your home and cause 
                  structural damage. Early intervention is crucial to minimize damage.
                </p>
                <ul className="text-slate-600 space-y-3">
                  <li className="flex items-start">
                    <span className="text-brand-cyan mr-3 text-xl font-bold">•</span>
                    <span>Locate and turn off water source</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-cyan mr-3 text-xl font-bold">•</span>
                    <span>Move valuables away from water</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-cyan mr-3 text-xl font-bold">•</span>
                    <span>Contact us for immediate leak repair</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-cyan mr-3 text-xl font-bold">•</span>
                    <span>Begin drying affected areas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-brand-cyan/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-cyan/10 rounded-lg flex items-center justify-center mr-4">
                    <AlertTriangle className="w-7 h-7 text-brand-cyan" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900">
                    Sewer Line Backups
                  </h3>
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Sewer backups create unsanitary conditions and can pose health risks to your family. 
                  These situations require immediate professional attention and proper cleanup.
                </p>
                <ul className="text-slate-600 space-y-3">
                  <li className="flex items-start">
                    <span className="text-brand-cyan mr-3 text-xl font-bold">•</span>
                    <span>Avoid contact with sewage water</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-cyan mr-3 text-xl font-bold">•</span>
                    <span>Don't use affected drains or toilets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-cyan mr-3 text-xl font-bold">•</span>
                    <span>Ventilate the area if possible</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-cyan mr-3 text-xl font-bold">•</span>
                    <span>Call for Same-Day sewer repair</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-brand-cyan/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-cyan/10 rounded-lg flex items-center justify-center mr-4">
                    <AlertTriangle className="w-7 h-7 text-brand-cyan" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900">
                    Water Heater Failures
                  </h3>
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Sudden water heater failure, especially with leaking, requires prompt attention to prevent 
                  water damage and restore hot water service to your home.
                </p>
                <ul className="text-slate-600 space-y-3">
                  <li className="flex items-start">
                    <span className="text-brand-cyan mr-3 text-xl font-bold">•</span>
                    <span>Turn off power/gas to unit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-cyan mr-3 text-xl font-bold">•</span>
                    <span>Shut off water supply to heater</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-cyan mr-3 text-xl font-bold">•</span>
                    <span>Clear area around water heater</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-cyan mr-3 text-xl font-bold">•</span>
                    <span>Schedule Same-Day repair/replacement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Same-Day Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 text-center">
              Our <span className="text-brand-cyan">Same-Day Response</span> Process
            </h2>
            <p className="text-xl text-slate-600 mb-16 text-center max-w-3xl mx-auto">
              When you call H2O Plumbing for same-day service, here's what you can expect:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-cyan to-brand-cyan-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-heading font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Same-Day Call</h3>
                <p className="text-slate-600 leading-relaxed">
                  Call our same-day service line and speak directly with a knowledgeable dispatcher who can provide 
                  immediate guidance while we dispatch a technician.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-cyan to-brand-cyan-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-heading font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Rapid Dispatch</h3>
                <p className="text-slate-600 leading-relaxed">
                  We immediately dispatch the nearest available technician with a fully stocked truck to 
                  minimize response time and get repairs started quickly.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-cyan to-brand-cyan-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-heading font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Damage Control</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our first priority is stopping the immediate problem to prevent further damage, then we 
                  assess the situation and explain the necessary repairs.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-cyan to-brand-cyan-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-heading font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Complete Repair</h3>
                <p className="text-slate-600 leading-relaxed">
                  We complete permanent repairs using quality materials and techniques, ensuring the problem 
                  won't recur and your plumbing system is fully functional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Same-Day Prevention Tips */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 text-center">
              Preventing <span className="text-brand-cyan">Urgent Plumbing Issues</span>
            </h2>
            <p className="text-xl text-slate-600 mb-16 text-center max-w-3xl mx-auto">
              While not all urgent plumbing issues can be prevented, regular maintenance and attention to warning 
              signs can help you avoid many costly situations:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-3xl font-heading font-bold text-slate-900 mb-8 flex items-center">
                  <div className="w-10 h-10 bg-brand-cyan/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-brand-cyan text-xl">✓</span>
                  </div>
                  Regular Maintenance Tips
                </h3>
                <ul className="space-y-5 text-slate-700">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Schedule annual plumbing inspections to catch problems early</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Insulate pipes in unheated areas to prevent freezing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Replace old supply lines and hoses every 5-10 years</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Keep drains clear with regular cleaning and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-brand-cyan rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Monitor water pressure and address high pressure issues</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-3xl font-heading font-bold text-slate-900 mb-8 flex items-center">
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-yellow-600 text-xl">!</span>
                  </div>
                  Warning Signs to Watch For
                </h3>
                <ul className="space-y-5 text-slate-700">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">!</span>
                    </div>
                    <span>Unusual water stains on walls or ceilings</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">!</span>
                    </div>
                    <span>Significant drops in water pressure throughout the home</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">!</span>
                    </div>
                    <span>Persistent sewage odors from drains or yard</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">!</span>
                    </div>
                    <span>Gurgling sounds from drains or toilets</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">!</span>
                    </div>
                    <span>Unexplained increases in water bills</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Emergencies */}
      <section className="py-20 bg-gradient-to-br from-brand-cyan via-brand-cyan to-brand-cyan-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Why Southwest Washington Trusts Us for <span className="text-yellow-400">Emergencies</span>
            </h2>
            <p className="text-xl mb-16 text-white/90 max-w-3xl mx-auto">
              When urgent plumbing issues strike, you need a team you can trust to respond quickly and fix 
              the problem right the first time. Here's why families from Vancouver to Longview, Battle Ground to Woodland, and Camas to Ridgefield choose H2O Plumbing:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-20 h-20 bg-yellow-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-12 h-12 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Fast Response Times</h3>
                <p className="text-white/90 leading-relaxed">
                  We understand that every minute counts in a plumbing Same-Day. Our average response 
                  time is 1-2 hours, with priority given to the most urgent situations.
                </p>
              </div>

              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-20 h-20 bg-yellow-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-12 h-12 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Fully Equipped Trucks</h3>
                <p className="text-white/90 leading-relaxed">
                  Our service vehicles are stocked with the most commonly needed parts and tools, allowing 
                  us to complete most Same-Day repairs on the first visit.
                </p>
              </div>

              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-20 h-20 bg-yellow-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-12 h-12 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Licensed & Insured</h3>
                <p className="text-white/90 leading-relaxed">
                  All our Same-Day technicians are fully licensed, insured, and experienced in handling 
                  urgent plumbing situations safely and effectively.
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
            Don't Let a Plumbing <span className="text-brand-cyan">Emergency</span> Ruin Your Day
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-slate-300 leading-relaxed">
            When plumbing disasters strike, H2O Plumbing is here to help. Call now for fast, 
            professional same-day plumbing services throughout Vancouver, Battle Ground, Longview, Camas, Washougal, Ridgefield, Woodland, and all of Southwest Washington.
          </p>
          <a 
            href="tel:3608832506" 
            className="bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white px-12 py-5 rounded-xl font-heading font-bold text-2xl hover:shadow-2xl hover:shadow-brand-cyan/50 transition-all duration-300 inline-flex items-center hover:-translate-y-1 transform"
          >
            <Phone className="w-8 h-8 mr-3" />
            Call (360) 883-2506 Now
          </a>
        </div>
      </section>
    </div>
  );
}





