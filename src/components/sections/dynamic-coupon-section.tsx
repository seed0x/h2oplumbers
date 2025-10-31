'use client'

import React from 'react';
import { coupons } from '@/config/coupons';
import { Tag, Droplet, Clock, Shield } from 'lucide-react';
import Link from 'next/link';

export function DynamicCouponSection() {
  const activeCoupons = coupons.filter(coupon => new Date(coupon.expiryDate) > new Date() && coupon.active);

  if (activeCoupons.length === 0) {
    return (
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-50 text-brand-cyan px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Tag className="w-4 h-4" /> Current Offers
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight uppercase text-slate-900 mb-3">Save on Professional Plumbing Services</h2>
          <p className="text-base md:text-lg text-slate-600">No active coupons right now. Check back soon!</p>
        </div>
      </section>
    );
  }

  const display = activeCoupons.slice(0, 2);

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16 md:py-20">
        {/* Top pill */}
        <div className="flex items-center justify-center mb-4">
          <span className="inline-flex items-center gap-2 bg-cyan-50 text-brand-cyan px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Tag className="w-4 h-4" /> Current Offers
          </span>
        </div>

        {/* Heading + subheading */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight uppercase text-slate-900">
            Save on Professional Plumbing Services
          </h2>
          <p className="text-base md:text-lg text-slate-600 mt-3">
            Service-focused value pricing. Professional plumbing services shouldn't break the bank. Take advantage of our current offers for Vancouver and Clark County families and businesses.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {display.map((c, idx) => (
            <div key={c.code} className="relative rounded-2xl border-2 border-dashed border-brand-cyan/30 p-6 md:p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
              {/* Corner label */}
              <div className="absolute -top-3 left-4">
                <span className="inline-flex items-center rounded-full bg-cyan-100 text-brand-cyan text-xs font-bold px-3 py-1 shadow-sm">
                  {idx === 0 ? 'Most Popular' : 'Limited Time'}
                </span>
              </div>

              <div className="flex flex-col h-full text-center items-center">
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-brand-cyan flex items-center justify-center mb-4">
                  <Droplet className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900 mb-2">
                  {c.title}
                </h3>
                <p className="text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                  {c.description}
                </p>

                {/* Code box */}
                <div className="bg-slate-50 border-2 border-dashed border-brand-cyan/40 rounded-xl p-4 text-center mb-6 w-full max-w-md">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Coupon Code</div>
                  <div className="text-xl md:text-2xl font-heading font-black text-brand-cyan tracking-wider">{c.code}</div>
                  <div className="mt-1 text-xs text-slate-500">Valid through {new Date(c.expiryDate).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})}</div>
                </div>

                {/* Footer row + button */}
                <div className="mt-auto w-full max-w-md">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <span className="inline-flex items-center gap-2"><Shield className="w-4 h-4 text-brand-cyan" /> Licensed & Insured</span>
                    <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4 text-brand-cyan" /> Same Day Service</span>
                  </div>
                  <Link href="/booking" className="block w-full text-center bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-3 rounded-xl transition-colors">
                    Call to Schedule
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



