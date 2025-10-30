import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS_DATA } from '@/lib/business-data';
import { Calendar, Clock, Waves, AlertTriangle, CheckCircle, XCircle, Wrench, Home, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Unclog a Drain: DIY Methods That Actually Work | H2O Plumbing',
  description: 'Learn effective DIY methods to clear common drain clogs. Expert tips from H2O Plumbing on when to tackle it yourself and when to call a professional.',
};

export default function UnclogDrainPost() {
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
            <span className="text-brand-cyan font-medium">How to Unclog a Drain</span>
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
              <Waves className="w-4 h-4" />
              <span>DIY Tips</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight uppercase">
              How to <span className="text-brand-cyan">Unclog a Drain</span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Dealing with a clogged drain? Learn effective DIY methods to clear common clogs and when it's time to call a professional plumber.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-cyan" />
                <span>January 10, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-cyan" />
                <span>5 min read</span>
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
                A clogged drain is one of the most common household plumbing issues—and one of the most frustrating. Before you reach for harsh chemical drain cleaners, try these safer, more effective methods.
              </p>

              <h2>Why Drains Get Clogged</h2>
              <p>
                Understanding what causes clogs can help you prevent them in the future. Most drain clogs are caused by a buildup of:
              </p>
              <ul>
                <li><strong>Hair and soap scum</strong> in bathroom sinks and showers</li>
                <li><strong>Food particles and grease</strong> in kitchen sinks</li>
                <li><strong>Toilet paper, wipes, and foreign objects</strong> in toilets</li>
                <li><strong>Mineral deposits</strong> from hard water over time</li>
              </ul>

              <h2>DIY Methods That Actually Work</h2>

              <h3>1. Start with Boiling Water</h3>
              <p>
                For minor clogs, especially in kitchen sinks with grease buildup, boiling water can work wonders. <strong>Boil a full kettle of water</strong> and pour it slowly down the drain in 2-3 stages, allowing the hot water to work for several seconds between each pour.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-amber-900 mb-2">Caution:</p>
                    <p className="text-amber-800 text-base mb-0">Never use boiling water on PVC pipes or if you have a porcelain sink, as extreme heat can damage them.</p>
                  </div>
                </div>
              </div>

              <h3>2. The Baking Soda and Vinegar Method</h3>
              <p>
                This classic combination creates a fizzing reaction that can break down minor clogs:
              </p>
              <ol>
                <li>Remove any standing water from the sink or tub</li>
                <li>Pour <strong>½ cup of baking soda</strong> down the drain</li>
                <li>Follow with <strong>½ cup of white vinegar</strong></li>
                <li>Cover the drain with a plug or wet cloth</li>
                <li>Wait 30 minutes, then flush with hot water</li>
              </ol>
              <p>
                This method is safe for all types of pipes and is a great monthly maintenance routine to prevent future clogs.
              </p>

              <h3>3. Use a Plunger (The Right Way)</h3>
              <p>
                A plunger isn't just for toilets! Use a <strong>cup plunger for sinks and tubs</strong> and a <strong>flange plunger for toilets</strong>. Here's the proper technique:
              </p>
              <ul>
                <li>Fill the sink or tub with enough water to cover the plunger cup</li>
                <li>Place the plunger over the drain, creating a seal</li>
                <li>Use quick, forceful plunges—push down and pull up rapidly</li>
                <li>Repeat 15-20 times, then check if water drains</li>
              </ul>
              <p>
                <strong>Pro tip:</strong> If you have an overflow drain, cover it with a wet cloth to improve suction and make plunging more effective.
              </p>

              <h3>4. Try a Drain Snake or Auger</h3>
              <p>
                For stubborn clogs, a <Link href="/services/drain-cleaning">drain snake</Link> (also called a plumber's auger) is highly effective. These flexible tools can reach 15-25 feet into your pipes to break up or retrieve clogs:
              </p>
              <ol>
                <li>Insert the snake into the drain opening</li>
                <li>Turn the handle clockwise as you push it forward</li>
                <li>When you hit resistance, continue turning to break through the clog</li>
                <li>Pull the snake back out slowly, removing any debris</li>
                <li>Flush with hot water</li>
              </ol>

              <h3>5. Remove and Clean the P-Trap</h3>
              <p>
                The curved pipe beneath your sink (called the P-trap) often catches debris. If you're comfortable with basic plumbing, you can remove and clean it:
              </p>
              <ol>
                <li>Place a bucket under the P-trap to catch water</li>
                <li>Use a wrench to loosen the slip nuts on both ends</li>
                <li>Remove the trap and clear any debris</li>
                <li>Inspect the trap for cracks or damage</li>
                <li>Reassemble and test for leaks</li>
              </ol>

              <h2>What NOT to Do</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <div className="flex gap-3">
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <ul className="text-red-800 mb-0 space-y-2">
                      <li><strong>Avoid chemical drain cleaners:</strong> They're harsh on pipes, dangerous to handle, and often ineffective on tough clogs</li>
                      <li><strong>Don't use excessive force:</strong> You could damage pipes or push the clog deeper</li>
                      <li><strong>Never mix cleaning products:</strong> Combining chemicals can create dangerous fumes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>When to Call a Professional</h2>
              <p>
                While many clogs can be handled with DIY methods, some situations require professional expertise:
              </p>
              <div className="bg-cyan-50 border-l-4 border-brand-cyan p-6 my-8 rounded-r-lg">
                <div className="flex gap-3">
                  <Wrench className="w-6 h-6 text-brand-cyan flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900 mb-3">Call H2O Plumbing if:</p>
                    <ul className="text-slate-700 mb-0 space-y-2">
                      <li>Multiple drains are clogged at once (indicates a main line issue)</li>
                      <li>You've tried these methods and the clog persists</li>
                      <li>Water backs up into other fixtures when you use a drain</li>
                      <li>You notice foul sewage odors coming from drains</li>
                      <li>The clog keeps returning after you clear it</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>Prevention Tips</h2>
              <p>
                The best way to deal with clogged drains is to prevent them in the first place:
              </p>
              <ul>
                <li>Use drain screens or strainers to catch hair and food particles</li>
                <li>Never pour grease or oil down kitchen drains</li>
                <li>Run hot water after each use to help clear residue</li>
                <li>Do a monthly baking soda and vinegar treatment</li>
                <li>Only flush toilet paper—never wipes, even if labeled "flushable"</li>
                <li>Schedule annual <Link href="/services/drain-cleaning">professional drain cleaning</Link> for preventive maintenance</li>
              </ul>

              <h2>Trust the Experts</h2>
              <p>
                At H2O Plumbing, we've been helping Southwest Washington families with all their plumbing needs for over {BUSINESS_DATA.yearsInBusiness} years. If you've tried these DIY methods and still have a stubborn clog, our experienced team is ready to help with professional <Link href="/services/drain-cleaning">drain cleaning services</Link>.
              </p>
              <p>
                We use advanced video inspection and hydro-jetting technology to diagnose and clear even the toughest clogs—without damaging your pipes. Plus, we'll give you honest advice on preventing future issues.
              </p>

            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-br from-brand-cyan to-brand-cyan-dark rounded-2xl p-8 md:p-10 text-white text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
                <Waves className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 uppercase">
                Still Dealing with a Stubborn Clog?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Let our experienced team handle it. Same-day service available throughout Southwest Washington.
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
