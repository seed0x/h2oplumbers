import { Shield, Flame, Heart, Stethoscope, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { BUSINESS_DATA } from '@/lib/business-data';

const heroCategories = [
  'Military & Veterans',
  'Firefighters',
  'Police Officers',
  'EMS & Healthcare',
  'Teachers & Educators'
];

export function HeroesDiscountSection() {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Subtle patriotic accent - thin stripes */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-200 via-brand-cyan to-slate-200"></div>
      
      <div className="container mx-auto container-padding">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold uppercase tracking-tight text-slate-900 mb-4">
              Honoring Those Who Serve
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We proudly offer <span className="font-bold text-brand-cyan">15% off all services</span> to our military, first responders, and educators.
            </p>
          </div>

          {/* Clean list of eligible groups */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 mb-8">
            <h3 className="text-lg font-heading font-semibold uppercase tracking-wide text-slate-900 mb-6 text-center">
              Eligible Heroes
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {heroCategories.map((category) => (
                <div
                  key={category}
                  className="px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>

          {/* Compact redeem section */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
            <p className="text-sm text-slate-600 mb-4">
              <span className="font-semibold text-slate-900">To redeem:</span> Simply show your valid ID when booking or at service. 
              <span className="text-xs text-slate-500 block mt-1">Cannot be combined with other offers.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center rounded-full bg-brand-cyan px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-cyan-dark"
              >
                Call {BUSINESS_DATA.phone}
              </a>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 text-slate-700 hover:border-brand-cyan hover:text-brand-cyan px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.22em] transition-colors"
              >
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
