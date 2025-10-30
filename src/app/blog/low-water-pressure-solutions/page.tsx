import { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS_DATA } from '@/lib/business-data';
import { Calendar, Clock, Settings, AlertTriangle, CheckCircle, Droplets, Wrench, Home, ChevronRight, Filter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Low Water Pressure? Common Causes & Solutions | H2O Plumbing',
  description: 'Discover the common causes of low water pressure in your home and practical solutions to restore proper flow. Expert advice from H2O Plumbing.',
};

export default function LowWaterPressurePost() {
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
            <span className="text-brand-cyan font-medium">Low Water Pressure Solutions</span>
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
              <Settings className="w-4 h-4" />
              <span>Troubleshooting</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight uppercase">
              Low Water <span className="text-brand-cyan">Pressure Solutions</span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Low water pressure can be frustrating. Discover the common causes and practical solutions to restore proper flow throughout your home.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-cyan" />
                <span>January 5, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-cyan" />
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

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
                There's nothing more frustrating than turning on your faucet and getting a weak trickle instead of a steady stream. Low water pressure doesn't just make showering and washing dishes difficult—it can also signal underlying plumbing issues that need attention.
              </p>

              <h2>How to Tell If You Have Low Water Pressure</h2>
              <p>
                Before diving into solutions, it's important to identify if you actually have a water pressure problem. Normal residential water pressure should be between <strong>40-60 PSI (pounds per square inch)</strong>. You might have low water pressure if:
              </p>
              <ul>
                <li>Water comes out of faucets in a weak stream rather than a strong flow</li>
                <li>Your shower feels like a drizzle instead of a proper spray</li>
                <li>Washing machines and dishwashers take longer to fill</li>
                <li>Multiple fixtures can't run simultaneously without pressure drops</li>
                <li>Upper floors have noticeably weaker water pressure than lower floors</li>
              </ul>
              <p>
                You can measure your home's water pressure with an inexpensive pressure gauge available at any hardware store. Simply attach it to an outdoor spigot and turn on the water.
              </p>

              <h2>Common Causes of Low Water Pressure</h2>

              <h3>1. Clogged Aerators</h3>
              <p>
                <strong>The simplest fix:</strong> Often, what seems like low water pressure is actually just a clogged aerator—the small screen at the tip of your faucet. Mineral deposits, sediment, and debris can accumulate here over time, restricting water flow.
              </p>
              <div className="bg-cyan-50 border-l-4 border-brand-cyan p-6 my-8 rounded-r-lg">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-cyan flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900 mb-2">Quick Fix:</p>
                    <ol className="text-slate-700 mb-0">
                      <li>Unscrew the aerator from the faucet tip</li>
                      <li>Rinse it under water and scrub with an old toothbrush</li>
                      <li>Soak in white vinegar for 30 minutes if heavily clogged</li>
                      <li>Reattach and test water flow</li>
                    </ol>
                  </div>
                </div>
              </div>

              <h3>2. Partially Closed Main Water Valve</h3>
              <p>
                Your home has a main water shutoff valve that controls water flow to your entire house. If this valve isn't fully open—perhaps after recent plumbing work—it can significantly reduce water pressure throughout your home.
              </p>
              <p>
                <strong>Where to find it:</strong> The main shutoff valve is typically located where the water line enters your home, often in the basement, crawl space, or utility room. Make sure it's turned fully counterclockwise to the open position.
              </p>

              <h3>3. Corroded or Clogged Pipes</h3>
              <p>
                If your home has older galvanized steel pipes, corrosion and mineral buildup inside the pipes can gradually narrow the passage for water flow. This is especially common in homes built before the 1960s.
              </p>
              <p>
                <strong>Signs of pipe corrosion:</strong>
              </p>
              <ul>
                <li>Discolored or rusty water</li>
                <li>Visible rust or corrosion on exposed pipes</li>
                <li>Water pressure that has gradually decreased over years</li>
                <li>Leaks at pipe joints</li>
              </ul>
              <p>
                Unfortunately, corroded pipes typically require professional <Link href="/services/repiping">pipe replacement or repiping</Link>. While this is a significant investment, modern materials like PEX and copper offer decades of trouble-free service.
              </p>

              <h3>4. Faulty Pressure Regulator</h3>
              <p>
                Many homes have a pressure regulator (also called a pressure-reducing valve) installed where the main water line enters the house. This device protects your plumbing from excessive pressure from the municipal supply. If the regulator fails or is set incorrectly, it can cause low water pressure throughout your home.
              </p>
              <p>
                <strong>How to tell:</strong> If all fixtures in your home suddenly have low pressure, the regulator may be the culprit. These devices typically last 10-15 years and should be replaced by a professional plumber.
              </p>

              <h3>5. Leaking Pipes</h3>
              <p>
                A leak anywhere in your plumbing system reduces the water available to your fixtures, resulting in lower pressure. Some leaks are obvious, but others may be hidden behind walls, under floors, or underground.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-amber-900 mb-2">Warning Signs of Hidden Leaks:</p>
                    <ul className="text-amber-800 mb-0 space-y-2">
                      <li>Unexpectedly high water bills</li>
                      <li>Damp spots on walls, ceilings, or floors</li>
                      <li>Mold or mildew growth</li>
                      <li>Sound of running water when fixtures are off</li>
                    </ul>
                    <p className="text-amber-800 mt-3 mb-0">Learn more in our guide on <Link href="/blog/signs-of-a-hidden-water-leak" className="text-amber-900 underline">identifying hidden water leaks</Link>.</p>
                  </div>
                </div>
              </div>

              <h3>6. Municipal Supply Issues</h3>
              <p>
                Sometimes the problem isn't in your home at all—it's with the municipal water supply. Construction, repairs, increased demand, or problems at the water treatment facility can all cause temporary or persistent low pressure.
              </p>
              <p>
                <strong>Check with neighbors:</strong> If they're experiencing the same issue, contact your local water utility to report the problem.
              </p>

              <h3>7. Water Heater Issues</h3>
              <p>
                If you only have low pressure with hot water (but cold water is fine), the problem likely lies with your <Link href="/services/water-heater">water heater</Link>. Sediment buildup inside the tank or a partially closed shutoff valve can restrict hot water flow.
              </p>
              <p>
                <strong>Solution:</strong> Have your water heater flushed annually to remove sediment, and check that the shutoff valve is fully open.
              </p>

              <h3>8. Clogged Fixtures or Showerheads</h3>
              <p>
                Similar to faucet aerators, showerheads can become clogged with mineral deposits, especially in areas with hard water. If only one fixture has low pressure, this is likely the cause.
              </p>
              <p>
                <strong>Easy fix:</strong> Remove the showerhead and soak it in white vinegar overnight, then scrub away mineral deposits with a brush.
              </p>

              <h2>DIY Solutions You Can Try</h2>
              <p>
                Before calling a plumber, try these simple fixes:
              </p>
              <ol>
                <li><strong>Clean aerators and showerheads:</strong> Remove, rinse, and soak in vinegar</li>
                <li><strong>Check valve positions:</strong> Ensure main shutoff and fixture shutoff valves are fully open</li>
                <li><strong>Test water pressure:</strong> Use a gauge to confirm the actual PSI</li>
                <li><strong>Inspect visible pipes:</strong> Look for signs of leaks, corrosion, or damage</li>
                <li><strong>Check with neighbors:</strong> Determine if it's a municipal supply issue</li>
              </ol>

              <h2>When to Call a Professional Plumber</h2>
              <p>
                Some water pressure issues require professional diagnosis and repair. Contact H2O Plumbing if:
              </p>
              <div className="bg-cyan-50 border-l-4 border-brand-cyan p-6 my-8 rounded-r-lg">
                <div className="flex gap-3">
                  <Wrench className="w-6 h-6 text-brand-cyan flex-shrink-0 mt-1" />
                  <div>
                    <ul className="text-slate-700 mb-0 space-y-2">
                      <li>Low pressure affects your entire home (not just one fixture)</li>
                      <li>Simple fixes like cleaning aerators don't solve the problem</li>
                      <li>You suspect corroded or leaking pipes</li>
                      <li>Your pressure regulator needs adjustment or replacement</li>
                      <li>Water pressure has gradually decreased over months or years</li>
                      <li>You notice signs of hidden leaks</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>Preventing Future Water Pressure Issues</h2>
              <p>
                Keep your water flowing strong with these preventive measures:
              </p>
              <ul>
                <li>Install a <Link href="/services/water-treatment">water softener</Link> if you have hard water to prevent mineral buildup</li>
                <li>Flush your water heater annually to prevent sediment accumulation</li>
                <li>Clean faucet aerators and showerheads every 6 months</li>
                <li>Have your plumbing inspected by a professional every few years</li>
                <li>Consider repiping if you have galvanized steel pipes over 50 years old</li>
                <li>Monitor your water bill for unexpected increases that might indicate leaks</li>
              </ul>

              <h2>Expert Help When You Need It</h2>
              <p>
                At H2O Plumbing, we've been diagnosing and solving water pressure issues for Southwest Washington families for over {BUSINESS_DATA.yearsInBusiness} years. Our experienced technicians have the tools and expertise to quickly identify the source of your low water pressure and provide lasting solutions.
              </p>
              <p>
                Whether it's a simple valve adjustment, a pressure regulator replacement, or a complete repiping project, we'll give you honest recommendations and transparent pricing. We're committed to restoring proper water flow to your home so you can enjoy the comfort and convenience you deserve.
              </p>

            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-br from-brand-cyan to-brand-cyan-dark rounded-2xl p-8 md:p-10 text-white text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 uppercase">
                Tired of Weak Water Pressure?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Let our experts diagnose and fix the problem. Same-day service available throughout Southwest Washington.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand-cyan hover:bg-slate-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                >
                  Schedule Service
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
