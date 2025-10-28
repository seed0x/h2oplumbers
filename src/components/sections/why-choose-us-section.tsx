import { Shield, Clock, Users, Award } from 'lucide-react';

export const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* Badge matching hero and services style */}
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-brand-red mb-6" aria-label="Why choose us">
            <Award className="h-4 w-4" />
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold uppercase tracking-tight text-slate-900 mb-4">Why Families Choose H2O Plumbing</h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            As a family business serving other families, we understand what matters most - <strong className="text-brand-red">reliable service, honest pricing,</strong> 
            and treating your home with the same care we'd give our own. Here's why families trust us:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-brand-red/20 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl group">
            <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Licensed & Insured</h3>
            <p className="text-slate-600 leading-relaxed">
              Fully licensed, bonded, and insured for your protection. All work is backed by comprehensive warranties 
              and meets Washington state plumbing codes.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-brand-red/20 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl group">
            <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Clock className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Same Day Service</h3>
            <p className="text-slate-600 leading-relaxed">
              Most plumbing issues can't wait. We offer same-day service for urgent repairs and try to accommodate 
              your schedule for all other services.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-brand-red/20 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl group">
            <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Family Values, Family Service</h3>
            <p className="text-slate-600 leading-relaxed">
              Three generations of plumbers serving Southwest Washington families. We treat your home like our own 
              and your family like ours. That's the H2O difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


