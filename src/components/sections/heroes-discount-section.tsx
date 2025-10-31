import { Shield, Flame, Heart, Stethoscope, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { BUSINESS_DATA } from '@/lib/business-data';

const heroCategories = [
  { name: 'Military & Veterans', icon: Shield },
  { name: 'Firefighters', icon: Flame },
  { name: 'Police Officers', icon: Shield },
  { name: 'EMS & Healthcare', icon: Stethoscope },
  { name: 'Teachers & Educators', icon: GraduationCap }
];

export function HeroesDiscountSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Brand accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-turquoise to-brand-cyan"></div>
      
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-brand-cyan mb-6">
              <Heart className="h-4 w-4" />
              Heroes Discount
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold uppercase tracking-tight text-slate-900 mb-6">
              Honoring Those Who Serve
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We proudly offer <span className="font-bold text-brand-cyan">15% off all services</span> to our military, first responders, and educators.
            </p>
          </div>

          {/* Eligible Heroes Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {heroCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className="group bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-brand-cyan transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-cyan/10 to-brand-turquoise/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-brand-cyan" />
                  </div>
                  <p className="text-sm font-heading font-bold text-slate-900">
                    {category.name}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Redeem section */}
          <div className="bg-gradient-to-r from-brand-cyan to-brand-turquoise rounded-2xl p-8 md:p-10 shadow-xl text-center">
            <p className="text-white text-base md:text-lg mb-2 font-medium">
              <span className="font-bold">To redeem:</span> Simply show your valid ID when booking or at service.
            </p>
            <p className="text-white/80 text-sm mb-6">
              Cannot be combined with other offers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center rounded-xl bg-white hover:bg-slate-50 text-brand-cyan px-8 py-3.5 text-base font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Call {BUSINESS_DATA.phone}
              </a>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 hover:border-white px-8 py-3.5 text-base font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
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
