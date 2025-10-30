import { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS_DATA } from '@/lib/business-data';
import { Calendar, Clock, AlertCircle, Phone, Power, Droplets, Wrench, Home, ChevronRight, CheckSquare, Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Emergency Plumbing Checklist: What to Do Before We Arrive | H2O Plumbing',
  description: 'Plumbing emergency? Follow these critical steps to minimize damage and stay safe while waiting for professional help to arrive.',
};

export default function EmergencyChecklistPost() {
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
            <span className="text-brand-cyan font-medium">Emergency Plumbing Checklist</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url('/images/hero-background-pattern.svg')`,
          backgroundSize: 'cover',
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider mb-6 border border-white/30">
              <AlertCircle className="w-4 h-4" />
              <span>Emergency Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight uppercase">
              Emergency Plumbing <span className="text-cyan-300">Checklist</span>
            </h1>
            
            <p className="text-xl text-slate-100 mb-8 leading-relaxed">
              Plumbing emergency? Follow these critical steps to minimize damage and stay safe while waiting for professional help to arrive.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-300" />
                <span>December 20, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-300" />
                <span>4 min read</span>
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
              
              <p className="text-xl text-slate-600 font-medium border-l-4 border-red-500 pl-6 my-8">
                A plumbing emergency can strike at any time—a burst pipe, overflowing toilet, or sudden leak. Knowing what to do in those first critical minutes can save thousands of dollars in water damage and make the repair process much smoother.
              </p>

              <div className="bg-red-50 border-2 border-red-500 p-8 my-8 rounded-xl">
                <div className="flex gap-4">
                  <Phone className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-red-900 mt-0 mb-3">Call for Help First!</h3>
                    <p className="text-red-800 text-lg mb-4">
                      <strong>In a true emergency, call H2O Plumbing immediately:</strong>
                    </p>
                    <a 
                      href={`tel:${BUSINESS_DATA.phoneRaw}`}
                      className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-xl transition-colors shadow-lg no-underline"
                    >
                      <Phone className="w-6 h-6" />
                      {BUSINESS_DATA.phone}
                    </a>
                    <p className="text-red-800 mt-4 mb-0">
                      Then follow the steps below while you wait for our team to arrive.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Step 1: Stop the Water Flow</h2>
              <p>
                The most critical first step is to <strong>shut off the water supply</strong> to prevent further flooding and damage.
              </p>

              <h3>For Localized Issues (One Fixture)</h3>
              <p>
                If the problem is isolated to a single fixture (toilet, sink, appliance), locate and turn off the fixture shutoff valve:
              </p>
              <ul>
                <li><strong>Toilets:</strong> Look for the oval-shaped valve on the water supply line behind the toilet, near the floor</li>
                <li><strong>Sinks:</strong> Check under the sink for valves on the hot and cold supply lines</li>
                <li><strong>Washing machines:</strong> Turn off both hot and cold valves behind the appliance</li>
                <li><strong>Water heaters:</strong> Turn off the cold water inlet valve at the top of the tank</li>
              </ul>
              <p>
                <strong>Turn valves clockwise (righty-tighty)</strong> until they stop. Don't force them—if a valve is stuck, move to shutting off the main water supply instead.
              </p>

              <h3>For Major Leaks or Burst Pipes</h3>
              <p>
                If water is gushing or you can't locate the fixture valve, <strong>shut off your home's main water supply immediately:</strong>
              </p>
              <ol>
                <li>Locate your main water shutoff valve (usually in the basement, crawl space, garage, or utility room near where the water line enters your home)</li>
                <li>Turn the valve fully clockwise until it stops</li>
                <li>If you have a lever-style valve, turn it 90 degrees (perpendicular to the pipe)</li>
                <li>Open a faucet somewhere in the house to release remaining pressure</li>
              </ol>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
                <div className="flex gap-3">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-amber-900 mb-2">Know Where Your Shutoff Valve Is NOW</p>
                    <p className="text-amber-800 mb-0">Don't wait for an emergency to find it! Locate your main water shutoff valve today and make sure everyone in your household knows where it is. Test it annually to ensure it works.</p>
                  </div>
                </div>
              </div>

              <h2>Step 2: Turn Off Electricity (If Necessary)</h2>
              <p>
                If water is near electrical outlets, appliances, or your home's electrical panel, <strong>turn off electricity to the affected area</strong> immediately:
              </p>
              <ul>
                <li>Go to your electrical panel (breaker box)</li>
                <li>Flip the breaker for the affected room or area to the OFF position</li>
                <li>If there's significant flooding near the panel itself, call an electrician and don't approach it</li>
              </ul>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <div className="flex gap-3">
                  <Power className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-red-900 mb-2">Safety Warning:</p>
                    <p className="text-red-800 mb-0"><strong>Never touch electrical equipment or outlets with wet hands or while standing in water.</strong> Water and electricity are a deadly combination. If in doubt, evacuate and call emergency services.</p>
                  </div>
                </div>
              </div>

              <h2>Step 3: Contain and Clean Up Water</h2>
              <p>
                Once the water is off and the area is safe, work to minimize water damage:
              </p>
              <ul>
                <li><strong>Use towels, mops, and buckets</strong> to soak up standing water</li>
                <li><strong>Move furniture and valuables</strong> away from the affected area</li>
                <li><strong>Place buckets or containers</strong> under active drips</li>
                <li><strong>Open windows and use fans</strong> to improve ventilation and start drying</li>
                <li><strong>Remove wet carpets or rugs</strong> if possible to prevent mold</li>
              </ul>
              <p>
                The faster you act, the less damage water will cause to floors, walls, and belongings.
              </p>

              <h2>Step 4: Document the Damage</h2>
              <p>
                For insurance purposes, document everything before cleaning up:
              </p>
              <div className="bg-cyan-50 border-l-4 border-brand-cyan p-6 my-8 rounded-r-lg">
                <div className="flex gap-3">
                  <Camera className="w-6 h-6 text-brand-cyan flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900 mb-2">What to Document:</p>
                    <ul className="text-slate-700 mb-0 space-y-2">
                      <li>Take photos and videos of all water damage</li>
                      <li>Capture the water source and affected areas</li>
                      <li>Photograph damaged belongings and furniture</li>
                      <li>Make a written list of damaged items with approximate values</li>
                      <li>Save all receipts related to emergency repairs and cleanup</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>Step 5: Protect Your Belongings</h2>
              <p>
                While waiting for help to arrive:
              </p>
              <ul>
                <li>Move electronics, documents, and valuables to a dry location</li>
                <li>Elevate furniture legs with aluminum foil or plastic to prevent further water absorption</li>
                <li>Remove books, papers, and fabric items from wet areas</li>
                <li>If a ceiling is leaking, poke a small hole in the bulge to release water in a controlled way (into a bucket) rather than letting it burst</li>
              </ul>

              <h2>Common Plumbing Emergencies & Quick Tips</h2>

              <h3>Burst Pipe</h3>
              <p>
                <strong>Action:</strong> Shut off main water supply immediately, turn off electricity if water is near outlets, call H2O Plumbing for <Link href="/services/leak-detection">emergency leak repair</Link>.
              </p>

              <h3>Overflowing Toilet</h3>
              <p>
                <strong>Action:</strong> Turn off the toilet shutoff valve, lift the tank lid and push down the flapper to stop water flow, do NOT flush again. If it won't stop, shut off the main water supply.
              </p>

              <h3>Water Heater Leak</h3>
              <p>
                <strong>Action:</strong> Turn off the cold water inlet valve on top of the heater, turn off the power (circuit breaker for electric, gas valve for gas), call for professional <Link href="/services/water-heater">water heater repair</Link>.
              </p>

              <h3>Sewer Backup</h3>
              <p>
                <strong>Action:</strong> Stop using ALL water and drains immediately, keep family and pets away from contaminated water, call H2O Plumbing for emergency <Link href="/services/drain-cleaning">sewer service</Link>. This is a health hazard requiring immediate professional attention.
              </p>

              <h3>Frozen/Burst Pipe in Winter</h3>
              <p>
                <strong>Action:</strong> Shut off main water, open faucets to relieve pressure, apply gentle heat to frozen section with a hair dryer (never a torch), call for professional help. See our guide on <Link href="/blog/prepare-pipes-for-winter">preventing frozen pipes</Link>.
              </p>

              <h2>What NOT to Do in a Plumbing Emergency</h2>
              <ul>
                <li><strong>Don't panic</strong>—staying calm helps you think clearly</li>
                <li><strong>Don't use chemical drain cleaners</strong> on backups or clogs during an emergency—they can make the situation worse and are dangerous</li>
                <li><strong>Don't attempt major repairs yourself</strong> unless you're qualified—you could make things worse</li>
                <li><strong>Don't ignore small leaks</strong> hoping they'll go away—they always get worse</li>
                <li><strong>Don't wait to call</strong>—the sooner professionals arrive, the less damage you'll have</li>
              </ul>

              <h2>Why Choose H2O Plumbing for Emergencies</h2>
              <p>
                When disaster strikes, you need a plumber you can trust. For over {BUSINESS_DATA.yearsInBusiness} years, H2O Plumbing has been Southwest Washington's go-to emergency plumbing service because:
              </p>
              <ul>
                <li><strong>Fast response times:</strong> We understand that every minute counts</li>
                <li><strong>Available 24/7:</strong> Plumbing emergencies don't wait for business hours</li>
                <li><strong>Fully equipped trucks:</strong> We arrive with the tools and parts to fix most issues on the spot</li>
                <li><strong>Experienced technicians:</strong> Our team has seen it all and knows how to handle any emergency</li>
                <li><strong>Transparent pricing:</strong> We'll explain the problem and costs upfront—no surprises</li>
                <li><strong>Licensed & insured:</strong> Your protection and peace of mind are guaranteed</li>
              </ul>
              <p>
                We treat every emergency with the urgency it deserves, working quickly to stop the damage and get your plumbing back to normal.
              </p>

              <h2>Prevention: The Best Emergency Response</h2>
              <p>
                While you can't prevent every plumbing emergency, regular maintenance can dramatically reduce your risk:
              </p>
              <ul>
                <li>Schedule annual plumbing inspections to catch problems early</li>
                <li>Know where all your shutoff valves are located</li>
                <li>Test your main shutoff valve annually to ensure it works</li>
                <li>Insulate pipes in unheated areas to prevent freezing</li>
                <li>Never pour grease down drains</li>
                <li>Install water leak detectors in high-risk areas</li>
                <li>Replace old washing machine hoses with braided steel versions</li>
              </ul>

            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 md:p-10 text-white text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 uppercase">
                Experiencing a Plumbing Emergency?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Don't wait—call H2O Plumbing now for immediate assistance. Available 24/7 throughout Southwest Washington.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-white text-red-600 hover:bg-slate-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg no-underline"
                >
                  <Phone className="w-5 h-5" />
                  Call {BUSINESS_DATA.phone}
                </a>
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white bg-transparent hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  Schedule Service
                </Link>
              </div>
              <p className="text-sm text-white/80 mt-6">
                Same-day emergency service • Licensed & Insured • {BUSINESS_DATA.yearsInBusiness}+ Years of Experience
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
