import { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS_DATA } from '@/lib/business-data';
import { Calendar, Clock, Shield, Wrench, AlertTriangle, Droplet } from 'lucide-react';

export const metadata: Metadata = {
  title: '5 Signs of a Hidden Water Leak | All County Plumbing',
  description: 'Learn to spot the early warning signs of a hidden water leak in your home. Catching leaks early can save you from costly repairs and water damage.',
};

export default function HiddenWaterLeakPage() {
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
            <span className="text-brand-red">Hidden Water Leak Signs</span>
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
              <Shield className="w-4 h-4 text-brand-red" />
              <span>Repair Guide</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
              <span className="text-brand-red">5 Signs</span> You Might Have a Hidden Water Leak
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-slate-300 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            <div className="prose lg:prose-xl max-w-none">
              <p>A hidden water leak can be one of a homeowner's worst nightmares. Unlike a dripping faucet, these leaks are often out of sight, silently causing damage to your home's structure and promoting mold growth. Knowing the signs of a hidden leak can help you catch it early and prevent a major disaster.</p>

              <h2>1. An Unexplained Increase in Your Water Bill</h2>
              <p>If your water bill has suddenly spiked without a change in your water usage habits, it's a strong indicator of a leak. Keep an eye on your monthly statements and compare them to previous months or the same period last year.</p>

              <h2>2. Mold or Mildew</h2>
              <p>Mold and mildew thrive in damp environments. If you notice a musty smell or see mold growth on walls, ceilings, or floors (especially in areas without high humidity like a shower), it could be due to a leak in a nearby pipe.</p>

              <h2>3. Stains, Discoloration, or Damage</h2>
              <p>Water stains on your walls or ceilings are a clear sign of a leak. Look for discoloration, bubbling or peeling paint, or warped wallpaper. Don't ignore these signs, even if the area isn't actively wet to the touch.</p>

              <h2>4. The Sound of Running Water</h2>
              <p>If you can hear water running when all your faucets and appliances are turned off, you likely have a leak. This could be a hissing sound from a pipe or the sound of dripping inside a wall.</p>

              <h2>5. A Spinning Water Meter</h2>
              <p>You can check for a leak by using your water meter. First, make sure all water is turned off in your home. Then, check your water meter. If the dial is spinning, it means water is flowing somewhere on your property, indicating a leak.</p>

              <h2>What to Do If You Suspect a Leak</h2>
              <p>If you notice any of these signs, it's important to act quickly. A professional plumber can perform a leak detection service to pinpoint the exact location of the leak without causing unnecessary damage to your home. At <Link href="/contact" className="text-brand-red hover:text-brand-red-dark font-semibold">All County Plumbing</Link>, we use advanced acoustic and thermal imaging technology to find and repair hidden leaks efficiently.</p>
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
                <Droplet className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4 uppercase">
                Suspect a Hidden Leak?
              </h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Don't wait for a small leak to become a big problem. Our expert team uses <strong className="text-brand-red">advanced leak detection technology</strong> to find and fix leaks quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                >
                  Schedule Leak Detection
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
                Fast response • Non-invasive detection • Family-Owned Since {BUSINESS_DATA.established}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
