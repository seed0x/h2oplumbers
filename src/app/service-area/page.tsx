import { Metadata } from 'next';
import { Suspense } from 'react'
import { LazyServiceAreaChecker, ComponentSkeleton } from '../../components/performance/dynamic-components'
import { MapPin, Clock, Shield, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Service Areas | H2O Plumbing',
  description: 'Check if H2O Plumbing serves your area. We provide plumbing services throughout Battle Ground, Vancouver, and surrounding Clark County areas.',
};

export default function ServiceAreaPage() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-screen">
      <div className="container mx-auto container-padding py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-brand-red mb-6">
            <MapPin className="h-4 w-4" />
            Service Areas
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold uppercase tracking-tight text-slate-900 mb-6">
            Check Your Service Area
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Enter your ZIP code to check if we service your area and see our response times. 
            <strong className="text-brand-red">We're locally based in Battle Ground</strong> and serve families throughout Clark and Cowlitz Counties.
          </p>
        </div>
        
        {/* Service Area Checker */}
        <Suspense fallback={<ComponentSkeleton className="h-64" />}>
          <LazyServiceAreaChecker />
        </Suspense>
        
        {/* Why Choose Us Section */}
        <div className="mt-16 text-center max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-tight text-slate-900 mb-12">
            Why Choose H2O Plumbing?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg hover:shadow-xl hover:border-brand-red transition-all duration-300">
              <div className="w-16 h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-brand-red" />
              </div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-3">20+</div>
              <div className="text-xl font-heading font-semibold text-slate-900 mb-2">Years Experience</div>
              <div className="text-sm text-slate-600 leading-relaxed">Trusted local plumbers serving Southwest Washington since 2004</div>
            </div>
            
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg hover:shadow-xl hover:border-brand-red transition-all duration-300">
              <div className="w-16 h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-brand-red" />
              </div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-3">100%</div>
              <div className="text-xl font-heading font-semibold text-slate-900 mb-2">Licensed & Insured</div>
              <div className="text-sm text-slate-600 leading-relaxed">Your property and our work are fully protected and guaranteed</div>
            </div>
            
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg hover:shadow-xl hover:border-brand-red transition-all duration-300">
              <div className="w-16 h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-brand-red" />
              </div>
              <div className="text-4xl font-heading font-bold text-brand-red mb-3">1000+</div>
              <div className="text-xl font-heading font-semibold text-slate-900 mb-2">Satisfied Customers</div>
              <div className="text-sm text-slate-600 leading-relaxed">Family-owned business with 5-star rated service</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


