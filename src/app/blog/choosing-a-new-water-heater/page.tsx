import { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS_DATA } from '@/lib/business-data';
import { Calendar, Clock, Droplets, DollarSign, Home, ChevronRight, Zap, Battery, Wrench, CheckCircle, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tank vs. Tankless: Choosing the Right Water Heater | H2O Plumbing',
  description: 'Is a traditional tank water heater or a modern tankless system right for your family? We break down the pros and cons of each to help you decide.',
};

export default function TankVsTanklessPage() {
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
            <Link href="/blog" className="hover:text-brand-cyan">Blog</Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-brand-cyan font-medium">Tank vs Tankless Water Heater</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url('/images/hero-background-pattern.svg')`,
          backgroundSize: 'cover',
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/20 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider mb-6 border border-brand-cyan/30">
              <Droplets className="w-4 h-4" />
              <span>Upgrades</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight uppercase">
              Tank vs. <span className="text-brand-cyan">Tankless Water Heaters</span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Is a traditional tank water heater or a modern tankless system the right choice for your family? We break down the pros and cons of each.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-cyan" />
                <span>January 22, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-cyan" />
                <span>7 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            <div className="prose prose-slate lg:prose-lg max-w-none
              prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-brand-cyan
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-slate-800
              prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
              prose-li:text-slate-700 prose-li:leading-relaxed
              prose-strong:text-slate-900 prose-strong:font-semibold
              prose-a:text-brand-cyan prose-a:no-underline hover:prose-a:text-brand-cyan-dark
              prose-ul:my-6 prose-li:my-2 prose-ol:my-6
            ">
              
              <p className="text-xl text-slate-600 font-medium border-l-4 border-brand-cyan pl-6 my-8">
                When it's time to replace your water heater, one of the biggest decisions you'll face is choosing between a traditional tank system and a modern tankless unit. Both have their advantages, and the right choice depends on your family's needs, budget, and home setup.
              </p>

              <h2>Understanding the Basics</h2>

              <h3>Traditional Tank Water Heaters</h3>
              <p>
                Tank water heaters store and continuously heat <strong>30-80 gallons of water</strong> in an insulated tank. When you turn on a hot water tap, hot water flows from the top of the tank and is replaced by cold water at the bottom, which is then heated.
              </p>
              <p>
                These have been the standard in American homes for decades and are available in gas, electric, and propane models.
              </p>

              <h3>Tankless Water Heaters (On-Demand)</h3>
              <p>
                Tankless water heaters, also called on-demand or instantaneous water heaters, heat water directly as it flows through the unit—<strong>only when you need it</strong>. When you turn on a hot water tap, cold water travels through a heat exchanger where powerful burners or electric elements rapidly heat it to your desired temperature.
              </p>
              <p>
                Because they don't store hot water, tankless systems are much more compact and can be mounted on walls.
              </p>

              <h2>Tank Water Heater: Pros and Cons</h2>

              <h3>Advantages of Tank Water Heaters</h3>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <ul className="text-slate-700 mb-0 space-y-3">
                      <li><strong>Lower upfront cost:</strong> Tank systems cost significantly less to purchase and install, making them budget-friendly</li>
                      <li><strong>Simple installation:</strong> Replacing an existing tank with a new one is straightforward and requires minimal modifications</li>
                      <li><strong>Works with any fuel type:</strong> Available in electric, natural gas, propane, and even oil models</li>
                      <li><strong>Familiar technology:</strong> Plumbers are universally trained on tank systems, making service and repairs widely available</li>
                      <li><strong>Handles simultaneous demand:</strong> Multiple people can use hot water at once without flow issues (until the tank depletes)</li>
                      <li><strong>No power outage concerns:</strong> Gas tank heaters work during power outages (electric ignition models may not)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3>Disadvantages of Tank Water Heaters</h3>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <div className="flex gap-3">
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <ul className="text-red-800 mb-0 space-y-3">
                      <li><strong>Limited hot water supply:</strong> Once the tank is empty, you must wait 30-60 minutes for more hot water</li>
                      <li><strong>Standby heat loss:</strong> Constantly heating stored water wastes energy even when you're not using hot water</li>
                      <li><strong>Shorter lifespan:</strong> Typically need replacement after 10-15 years</li>
                      <li><strong>Takes up floor space:</strong> Requires a dedicated area in your basement, garage, or utility room</li>
                      <li><strong>Risk of catastrophic failure:</strong> A failing tank can release 30-80 gallons of water into your home</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>Tankless Water Heater: Pros and Cons</h2>

              <h3>Advantages of Tankless Water Heaters</h3>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <ul className="text-slate-700 mb-0 space-y-3">
                      <li><strong>Endless hot water:</strong> Never run out during long showers or when multiple people need hot water</li>
                      <li><strong>Energy efficiency:</strong> Only heats water when needed, saving 20-30% on water heating costs</li>
                      <li><strong>Longer lifespan:</strong> Lasts 20+ years with proper maintenance, nearly twice as long as tank heaters</li>
                      <li><strong>Space-saving design:</strong> Wall-mounted units free up valuable floor space</li>
                      <li><strong>No standby heat loss:</strong> No wasted energy keeping a tank of water hot 24/7</li>
                      <li><strong>Precise temperature control:</strong> Set your exact desired temperature</li>
                      <li><strong>Lower risk of water damage:</strong> No large tank that could burst and flood your home</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3>Disadvantages of Tankless Water Heaters</h3>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <div className="flex gap-3">
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <ul className="text-red-800 mb-0 space-y-3">
                      <li><strong>Higher upfront cost:</strong> Installation costs 2-3x more than a tank system, especially for gas units</li>
                      <li><strong>May require upgrades:</strong> Gas lines, venting, and electrical systems often need modifications</li>
                      <li><strong>Limited flow rate:</strong> If undersized, running multiple fixtures simultaneously can overwhelm the system</li>
                      <li><strong>Longer payback period:</strong> Takes 10-20 years to recoup the higher installation cost through energy savings</li>
                      <li><strong>Sensitive to hard water:</strong> Mineral buildup can damage heat exchangers; annual descaling maintenance required</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>Expert Guidance from H2O Plumbing</h2>
              <p>
                At H2O Plumbing, we've installed hundreds of both tank and tankless water heaters throughout Southwest Washington over our {BUSINESS_DATA.yearsInBusiness}+ years in business. We'll help you make the right choice by evaluating your home's infrastructure, calculating proper sizing, and providing transparent cost estimates.
              </p>
              <p>
                We'll never push you toward a more expensive option if it doesn't make sense for your situation. Our goal is to help you find the water heating solution that best fits your needs and budget.
              </p>

            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-br from-brand-cyan to-brand-cyan-dark rounded-2xl p-8 md:p-10 text-white text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 uppercase">
                Ready to Upgrade Your Water Heater?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Let our experts help you choose the perfect system for your home. Free estimates and honest advice guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand-cyan hover:bg-slate-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                >
                  Schedule Consultation
                </Link>
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white bg-transparent hover:bg-white hover:text-brand-cyan px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  <Wrench className="w-5 h-5" />
                  Call {BUSINESS_DATA.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}


