import { Metadata } from 'next';
import Link from 'next/link';
import { Video, Search, CheckCircle, Phone, Clock, Shield, Wrench, Camera, Eye, FileText } from 'lucide-react';
import { BUSINESS_DATA } from '@/lib/business-data';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getPromotion } from '@/config/promotions';

export const metadata: Metadata = {
  title: `Camera & Scope Inspections Vancouver, Longview WA | Drain Camera Service | H2O`,
  description: `Professional camera and scope inspections in Vancouver, Longview, and Southwest Washington. Video pipe inspection, drain camera service, sewer line inspections. Same-day service. Call ${BUSINESS_DATA.phone}!`,
  keywords: `camera inspection, scope inspection, drain camera, sewer camera, pipe inspection Vancouver WA, video pipe inspection, drain scope Longview WA`,
};

export default function CameraScopeInspectionsPage() {
  // Get promotion for coupon banner
  const heroPromotion = getPromotion('cameraInspection');
  const fallbackPromotion = {
    id: 'fallbackCamera',
    title: 'Camera Inspection Special',
    discount: '$50 OFF',
    description: 'Video pipe inspection service',
    code: 'CAMERA50',
    ctaText: 'Call to Redeem',
    ctaLink: `tel:${BUSINESS_DATA.phoneRaw}`,
    expiresAt: '2025-12-31',
  };

  const selectedPromotion = heroPromotion ?? fallbackPromotion;
  const badgeLabel = selectedPromotion.discount;
  const headingLabel = selectedPromotion.title;
  const couponCode = selectedPromotion.code ?? 'CAMERA50';
  const ctaLink = selectedPromotion.ctaLink ?? `tel:${BUSINESS_DATA.phoneRaw}`;

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
            <span className="text-brand-red">Camera & Scope Inspections</span>
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
                  Camera & Scope Inspection Services
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-slate-200">
                  Professional video camera inspections for drains, sewers, and pipes throughout Clark County and Cowlitz County. See exactly what's happening inside your plumbing system—from clogs to visible leaks. Serving Vancouver, Longview, Castle Rock, Ridgefield, Camas, Washougal, and all surrounding communities.
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
                        <SelectItem value="camera-inspection">Camera Inspection</SelectItem>
                        <SelectItem value="drain-scope">Drain Scope Service</SelectItem>
                        <SelectItem value="sewer-inspection">Sewer Line Inspection</SelectItem>
                        <SelectItem value="visible-leak">Visible Leak Detection</SelectItem>
                        <SelectItem value="drain-cleaning">Drain Cleaning</SelectItem>
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
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">HD Video</div>
              <p className="text-lg">Clear Camera Inspections</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">Same Day</div>
              <p className="text-lg">Inspection Available</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">All Types</div>
              <p className="text-lg">Drains, Sewers & Pipes</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">Licensed</div>
              <p className="text-lg">Professional Service</p>
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

      {/* What We Inspect */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">What Can We <span className="text-brand-red">Inspect?</span></h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our professional camera and scope equipment lets us see inside your plumbing system to diagnose issues accurately.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-6">
                  <Camera className="w-8 h-8 text-brand-red" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-slate-900">Drain Lines</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Kitchen sinks, bathroom drains, shower and tub lines. See exactly what's causing slow drains or backups.
                </p>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• Kitchen drain lines</li>
                  <li>• Bathroom sink drains</li>
                  <li>• Shower & tub drains</li>
                  <li>• Floor drains</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-6">
                  <Video className="w-8 h-8 text-brand-red" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-slate-900">Sewer Lines</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Main sewer lines from your home to the street. Identify blockages, root intrusion, and pipe condition.
                </p>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• Main sewer line inspection</li>
                  <li>• Root intrusion detection</li>
                  <li>• Pipe condition assessment</li>
                  <li>• Blockage location</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-brand-red" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-slate-900">Visible Leaks</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Locate visible leaks in accessible pipes. Great for confirming leak sources and planning repairs.
                </p>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• Under-sink pipe leaks</li>
                  <li>• Toilet flange inspection</li>
                  <li>• Accessible pipe leaks</li>
                  <li>• Fixture connection leaks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues We Find */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 text-center">Common Issues <span className="text-brand-red">We Discover</span></h2>
            <p className="text-xl text-slate-600 mb-12 text-center">
              Camera inspections reveal the real problems so we can provide accurate solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Drain Blockages</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Hair, grease, soap buildup, and foreign objects causing slow drains or complete blockages.
                  </p>
                </div>

                <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Root Intrusion</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Tree roots growing into sewer lines through joints and cracks, causing recurring backups.
                  </p>
                </div>

                <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Pipe Damage</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Cracks, breaks, or deteriorating pipes that need repair or replacement before they fail.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Collapsed Sections</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Sections of pipe that have collapsed or bellied, creating low spots where debris collects.
                  </p>
                </div>

                <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Incorrect Slope</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Pipes installed without proper slope, preventing proper drainage and causing recurring issues.
                  </p>
                </div>

                <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Scale Buildup</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Mineral deposits and corrosion inside pipes reducing flow and causing slow drainage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Camera Inspections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
                Why Choose <span className="text-brand-red">Camera Inspections?</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                See exactly what's wrong before we start work—no guessing, no surprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-10 h-10 text-brand-red" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Visual Proof</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  See the actual problem with your own eyes on our inspection monitor.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-brand-red" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Accurate Diagnosis</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  No more guessing—we know exactly what's wrong and where it is.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-10 h-10 text-brand-red" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Upfront Pricing</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Accurate estimates based on what we actually see inside your pipes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-10 h-10 text-brand-red" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Right Solution</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Fix it right the first time with a targeted repair plan.
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
            Ready to See What's <span className="text-brand-red">Inside Your Pipes?</span>
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-slate-300 leading-relaxed">
            Professional camera and scope inspection services throughout Vancouver, Longview, Castle Rock, Ridgefield, Camas, Washougal, and all surrounding communities in Clark and Cowlitz Counties.
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
    </div>
  );
}


