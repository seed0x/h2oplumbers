import { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS_DATA } from '@/lib/business-data';
import { Calendar, Clock, Home, AlertTriangle, CheckCircle, XCircle, Wrench, DollarSign, ChevronRight, Droplets } from 'lucide-react';

export const metadata: Metadata = {
  title: 'When to Repair vs. Replace Your Toilet | H2O Plumbing',
  description: 'Is your toilet acting up? Learn when a simple repair will do and when it\'s time to invest in a replacement for long-term savings.',
};

export default function ReplaceToiletPost() {
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
            <span className="text-brand-cyan font-medium">When to Replace Your Toilet</span>
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
              <Home className="w-4 h-4" />
              <span>Maintenance</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight uppercase">
              When to Repair vs. <span className="text-brand-cyan">Replace Your Toilet</span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Is your toilet acting up? Learn when a simple repair will do and when it's time to invest in a replacement for long-term savings.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-cyan" />
                <span>December 28, 2024</span>
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
                Your toilet is one of the most-used fixtures in your home, but when it starts acting up, the decision to repair or replace can be confusing. This guide will help you make the right choice for your home and budget.
              </p>

              <h2>How Long Should a Toilet Last?</h2>
              <p>
                A well-maintained toilet can last <strong>15-30 years or more</strong>, but its lifespan depends on several factors including the quality of the original installation, water quality, frequency of use, and regular maintenance. While the porcelain bowl and tank are incredibly durable, the internal components wear out much faster—typically every 5-10 years.
              </p>

              <h2>Common Toilet Problems (And When to Repair)</h2>
              <p>
                Many toilet issues are minor and can be fixed with simple, affordable repairs:
              </p>

              <h3>Running Toilet</h3>
              <p>
                A constantly running toilet is usually caused by a worn flapper valve or faulty fill valve. These are inexpensive parts that can be replaced in under an hour.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900 mb-2">Verdict: Repair</p>
                    <p className="text-slate-700 mb-0"><strong>Cost:</strong> $15-50 for DIY parts, or $150-250 for professional service. A running toilet can waste 200+ gallons per day, so fix this quickly!</p>
                  </div>
                </div>
              </div>

              <h3>Weak Flush</h3>
              <p>
                A weak or incomplete flush is often caused by clogged rim jets (the small holes under the toilet rim), a partially clogged drain, or mineral buildup. Cleaning the jets with vinegar or a wire can restore proper flushing.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900 mb-2">Verdict: Repair (Usually)</p>
                    <p className="text-slate-700 mb-0">Clean the rim jets and check for obstructions. If the problem persists, it could indicate a larger issue with the toilet's design or internal passages.</p>
                  </div>
                </div>
              </div>

              <h3>Loose or Wobbly Toilet</h3>
              <p>
                A rocking toilet is typically caused by loose closet bolts or an uneven floor. Tightening the bolts or adding shims usually solves the problem—but check for water damage around the base first.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-amber-900 mb-2">Warning:</p>
                    <p className="text-amber-800 mb-0">If you see water damage, rotting flooring, or a damaged wax ring, you'll need professional help to properly reseal the toilet and repair any subfloor damage.</p>
                  </div>
                </div>
              </div>

              <h3>Minor Leaks</h3>
              <p>
                Small leaks around the base or from tank bolts can often be fixed by replacing the wax ring, tank-to-bowl gasket, or tightening connections.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900 mb-2">Verdict: Repair</p>
                    <p className="text-slate-700 mb-0"><strong>Cost:</strong> $100-300 for professional service. Address leaks immediately to prevent water damage and mold growth.</p>
                  </div>
                </div>
              </div>

              <h2>When to Replace Your Toilet</h2>
              <p>
                Sometimes replacement is the smarter choice—here's when:
              </p>

              <h3>1. Your Toilet is Over 25 Years Old</h3>
              <p>
                Older toilets use <strong>3.5 to 7 gallons per flush</strong>, compared to modern high-efficiency toilets (HETs) that use just <strong>1.28 gallons per flush</strong>. Upgrading can save your family thousands of gallons of water and hundreds of dollars per year.
              </p>
              <div className="bg-cyan-50 border-l-4 border-brand-cyan p-6 my-8 rounded-r-lg">
                <div className="flex gap-3">
                  <DollarSign className="w-6 h-6 text-brand-cyan flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900 mb-2">Cost Savings Example:</p>
                    <p className="text-slate-700 mb-0">A family of four using an old 5-gallon toilet vs. a new 1.28-gallon model can save over 27,000 gallons annually—that's about $200-400 per year in water and sewer costs!</p>
                  </div>
                </div>
              </div>

              <h3>2. Frequent Repairs</h3>
              <p>
                If you're calling a plumber for toilet repairs every few months, it's time to cut your losses. Repeated repairs add up quickly, and an unreliable toilet is a daily inconvenience.
              </p>
              <p>
                <strong>Rule of thumb:</strong> If repair costs exceed 50% of a new toilet's price, replace it.
              </p>

              <h3>3. Cracks in the Porcelain</h3>
              <p>
                Cracks in the toilet tank or bowl—even hairline cracks—can lead to sudden leaks or even catastrophic failure. There's no reliable way to repair porcelain cracks, so replacement is necessary.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <div className="flex gap-3">
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-red-900 mb-2">Verdict: Replace Immediately</p>
                    <p className="text-red-800 mb-0">Even small cracks can grow and cause flooding. Don't risk it—schedule a replacement as soon as possible.</p>
                  </div>
                </div>
              </div>

              <h3>4. Persistent Clogs</h3>
              <p>
                If your toilet clogs frequently despite proper use (no flushing wipes, etc.), the internal trap or drainage pathways may be inadequate. Older low-flow toilets from the 1990s were notorious for poor flushing performance.
              </p>
              <p>
                Modern toilets are engineered with improved flushing technology like pressure-assist systems, larger trapways, and better bowl designs. Upgrading will save you from constant plunging.
              </p>

              <h3>5. Constant Wobbling Despite Repairs</h3>
              <p>
                If your toilet continues to rock even after tightening bolts and shimming, the flange may be broken or the subfloor damaged. While the flange can be repaired, if you're already dealing with water damage and an older toilet, replacement is often the better investment.
              </p>

              <h3>6. You Want to Upgrade Comfort or Efficiency</h3>
              <p>
                Even if your toilet works fine, you might choose to upgrade for:
              </p>
              <ul>
                <li><strong>Comfort height toilets:</strong> Taller bowls (17-19 inches) are easier on knees and backs</li>
                <li><strong>Water savings:</strong> Modern WaterSense-certified toilets use 20% less water than standard models</li>
                <li><strong>Dual-flush options:</strong> Choose between a full or partial flush for maximum efficiency</li>
                <li><strong>Bidet seats:</strong> Add comfort and hygiene with an integrated bidet function</li>
                <li><strong>Better aesthetics:</strong> Modern designs can enhance your bathroom's appearance</li>
              </ul>

              <h2>How Much Does Toilet Replacement Cost?</h2>
              <p>
                Here's what to expect for professional toilet replacement in Southwest Washington:
              </p>
              <ul>
                <li><strong>Budget toilets:</strong> $150-300 (toilet) + $150-250 (installation) = $300-550 total</li>
                <li><strong>Mid-range toilets:</strong> $300-600 (toilet) + $150-250 (installation) = $450-850 total</li>
                <li><strong>Premium toilets:</strong> $600-1,500+ (toilet) + $150-300 (installation) = $750-1,800+ total</li>
              </ul>
              <p>
                Additional costs may apply if you need flange repair, subfloor replacement, or plumbing modifications. At H2O Plumbing, we provide transparent pricing and will inspect your installation conditions before starting work.
              </p>

              <h2>What to Look for in a New Toilet</h2>
              <p>
                When shopping for a replacement toilet, consider these features:
              </p>
              <ol>
                <li><strong>WaterSense certification:</strong> Ensures efficiency without sacrificing performance</li>
                <li><strong>MaP (Maximum Performance) score:</strong> Look for a score of 500+ grams (most toilets now exceed 800g)</li>
                <li><strong>Comfort height:</strong> Also called "ADA height"—easier for most adults</li>
                <li><strong>Elongated bowl:</strong> More comfortable than round bowls (if space allows)</li>
                <li><strong>Siphonic jet or pressure-assist:</strong> Superior flushing performance</li>
                <li><strong>Easy-clean design:</strong> Skirted trapways and surface coatings resist stains</li>
                <li><strong>Quiet-close seat:</strong> Prevents slamming lids</li>
              </ol>

              <h2>The Bottom Line: Repair or Replace?</h2>
              <div className="bg-slate-50 border-2 border-slate-200 p-8 my-8 rounded-xl">
                <h3 className="text-2xl font-bold text-brand-cyan mb-4 mt-0">Quick Decision Guide</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-green-700 mb-3 flex items-center gap-2 mt-0">
                      <CheckCircle className="w-5 h-5" />
                      Choose Repair If:
                    </h4>
                    <ul className="text-slate-700 mb-0 space-y-2">
                      <li>Your toilet is less than 15 years old</li>
                      <li>The issue is minor (running, weak flush, loose)</li>
                      <li>There are no cracks or major damage</li>
                      <li>Repair costs are under $200</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-cyan mb-3 flex items-center gap-2 mt-0">
                      <Wrench className="w-5 h-5" />
                      Choose Replacement If:
                    </h4>
                    <ul className="text-slate-700 mb-0 space-y-2">
                      <li>Your toilet is over 25 years old</li>
                      <li>You have cracks in the tank or bowl</li>
                      <li>Frequent repairs are adding up</li>
                      <li>You want to save water and money</li>
                      <li>Persistent clogs won't go away</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>Expert Installation Matters</h2>
              <p>
                Whether you choose to repair or replace, professional installation ensures the job is done right. At H2O Plumbing, we've been installing and repairing toilets for Southwest Washington families for over {BUSINESS_DATA.yearsInBusiness} years. Our experienced technicians will:
              </p>
              <ul>
                <li>Inspect your existing setup and recommend the best solution</li>
                <li>Properly remove and dispose of your old toilet</li>
                <li>Check and repair the flange and subfloor if needed</li>
                <li>Install your new toilet with a proper seal to prevent leaks</li>
                <li>Test for proper operation and check for any issues</li>
                <li>Clean up completely—you won't even know we were there!</li>
              </ul>
              <p>
                We also offer a satisfaction guarantee on all our work, so you can trust that your new toilet will perform flawlessly for years to come.
              </p>

            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-br from-brand-cyan to-brand-cyan-dark rounded-2xl p-8 md:p-10 text-white text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 uppercase">
                Ready to Repair or Replace Your Toilet?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Our expert plumbers will help you make the right decision for your home and budget.
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
