import { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS_DATA } from '@/lib/business-data';
import { Calendar, Clock, ThermometerSnowflake, AlertTriangle, Wrench, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Prepare Your Pipes for a Pacific Northwest Winter | All County Plumbing',
  description: 'Learn essential tips to prevent frozen pipes and other common winter plumbing issues in the Pacific Northwest. Keep your home safe and avoid costly repairs.',
};

export default function PreparePipesForWinterPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="bg-slate-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-brand-red">Blog</Link>
            <span>/</span>
            <span className="text-brand-red">Winter Pipe Preparation</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url('/images/hero-background-pattern.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-medium tracking-wide mb-6 ring-1 ring-white/10">
              <ThermometerSnowflake className="w-4 h-4 text-brand-red" />
              <span>Maintenance Guide</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
              How to Prepare Your Pipes for a <span className="text-brand-red">Pacific Northwest Winter</span>
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-slate-300 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 28, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            <div className="prose lg:prose-xl max-w-none">
              <p>Winter in the Pacific Northwest brings beautiful scenery, but it can also bring freezing temperatures that pose a significant threat to your home's plumbing. Frozen pipes can burst, leading to extensive water damage and costly repairs. By taking a few preventative steps, you can protect your pipes and ensure they function properly all winter long.</p>

              <h2>Why Are Frozen Pipes a Problem?</h2>
              <p>When water freezes, it expands. If water freezes inside your pipes, the pressure can cause them to crack or burst. This is especially true for pipes in unheated areas like basements, crawl spaces, attics, and garages. A single burst pipe can release hundreds of gallons of water, causing structural damage, mold growth, and ruined belongings.</p>

              <h2>1. Insulate Exposed Pipes</h2>
              <p>The most effective way to prevent frozen pipes is to insulate them. Focus on pipes in unheated or poorly insulated areas. You can use foam pipe sleeves, heat tape, or fiberglass insulation. This is a simple and inexpensive measure that provides a strong defense against freezing temperatures.</p>
              <ul>
                <li><strong>Foam Sleeves:</strong> Easy to install and available at most hardware stores.</li>
                <li><strong>Heat Tape:</strong> For areas that are extremely cold, heat tape provides an active source of warmth.</li>
              </ul>

              <h2>2. Seal Air Leaks</h2>
              <p>Even small drafts can cause pipes to freeze. Check for and seal any cracks or openings around pipes, as well as in your foundation and exterior walls. Use caulk or spray foam to close gaps that let in cold air. Pay close attention to areas where pipes pass through walls.</p>

              <h2>3. Disconnect and Drain Outdoor Hoses</h2>
              <p>Before the first freeze, disconnect all garden hoses from your outdoor faucets (hose bibbs). If you leave them connected, water can freeze in the hose and expand back into the faucet, causing it to break. If you have an interior shut-off valve for your outdoor faucets, close it and drain the line.</p>

              <h2>4. Keep Your Home Warm</h2>
              <p>Maintain a consistent temperature in your home, even when you're away. It might be tempting to lower the thermostat to save on heating bills, but the cost of a burst pipe is far greater. Keep your thermostat set to at least 55°F (13°C).</p>

              <h2>5. Let Faucets Drip</h2>
              <p>During a severe cold snap, letting a faucet drip can prevent pipes from freezing. The moving water, even a small trickle, is less likely to freeze. This is particularly important for faucets that are fed by pipes in unheated or exterior walls.</p>

              <h2>What to Do If a Pipe Freezes</h2>
              <p>If you turn on a faucet and only a trickle of water comes out, you may have a frozen pipe. Here's what to do:</p>
              <ol>
                <li><strong>Keep the faucet open.</strong> As you treat the frozen pipe and the ice begins to melt, you want the water to be able to flow through.</li>
                <li><strong>Apply gentle heat.</strong> You can use a hairdryer, a heating pad, or towels soaked in hot water. Never use an open flame.</li>
                <li><strong>Call a professional.</strong> If you can't locate the frozen pipe or if the pipe has burst, call a licensed plumber immediately.</li>
              </ol>

              <p>By taking these precautions, you can significantly reduce the risk of frozen pipes and enjoy a worry-free winter. If you have any concerns about your plumbing system's readiness for winter, don't hesitate to <Link href="/contact" className="text-brand-red hover:text-brand-red-dark font-semibold">contact All County Plumbing</Link> for a professional inspection.</p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url('/images/Work Van Good Image.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red/20 text-white mb-6">
                <Wrench className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4 uppercase">
                Need Help Winterizing Your Plumbing?
              </h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Our experienced team can inspect your home and ensure your plumbing is ready for winter. <strong className="text-brand-red">Don't wait until it's too late</strong> — protect your home now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                >
                  Schedule Inspection
                </Link>
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white bg-transparent text-white hover:bg-white hover:text-brand-red px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                >
                  <Wrench className="w-5 h-5" />
                  Call {BUSINESS_DATA.phone}
                </a>
              </div>
              <p className="text-sm text-slate-400">
                Same-day service available • Licensed & Insured • Family-Owned Since {BUSINESS_DATA.established}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
