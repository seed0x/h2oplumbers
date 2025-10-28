'use client'

import React from 'react';
import { coupons } from '@/config/coupons';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { MasterButton } from '@/components/ui/master-button';
import { Tag, Heart, Sparkles, Clock, Shield, Gift } from 'lucide-react';
import { BUSINESS_DATA } from '@/lib/business-data';

export function DynamicCouponSection() {
  const activeCoupons = coupons.filter(coupon => new Date(coupon.expiryDate) > new Date() && coupon.active);

  if (activeCoupons.length === 0) {
    return (
      <>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-brand-red via-brand-red-dark to-red-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Gift className="w-5 h-5" />
                <span className="text-sm font-semibold">Family Savings</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight">
                Special Offers for Our Community
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                We believe quality plumbing shouldn't break the bank. Check back soon for exclusive savings from your trusted family plumbers.
              </p>
            </div>
          </div>
        </section>

        {/* No Active Coupons */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-red/10 text-brand-red mb-6">
                <Tag className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">
                New Offers Coming Soon!
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We're always working on new ways to help our customers save. Check back soon for exclusive promotions, or give us a call—we love taking care of our community.
              </p>
              <MasterButton asChild variant="primary" size="lg">
                <a href={`tel:${BUSINESS_DATA.phone.link}`}>
                  Call Us Today: {BUSINESS_DATA.phone}
                </a>
              </MasterButton>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-red via-brand-red-dark to-red-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Gift className="w-5 h-5" />
              <span className="text-sm font-semibold">Family Savings</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight">
              Save Big on Quality Plumbing
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              We love helping families save! Grab these exclusive offers and experience the honest, reliable service that's made us Vancouver's trusted plumbers for over {BUSINESS_DATA.yearsInBusiness} years.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">Family-Owned</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium">No Hidden Fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coupons Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
              Current Promotions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Simply mention the coupon code when booking your appointment. It's that easy!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {activeCoupons.map((coupon, idx) => (
              <Card key={coupon.code} className="flex flex-col justify-between shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-brand-red/20 hover:border-brand-red overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/10 rounded-bl-full -mr-12 -mt-12 group-hover:scale-110 transition-transform duration-300" />
                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                      <Tag className="w-6 h-6" />
                    </div>
                    {idx === 0 && (
                      <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-2xl font-heading font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                    {coupon.title}
                  </CardTitle>
                  <CardDescription className="text-base text-slate-600">
                    {coupon.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-br from-brand-red/5 to-brand-red/10 border-2 border-dashed border-brand-red/50 p-6 rounded-xl text-center group-hover:from-brand-red/10 group-hover:to-brand-red/20 transition-colors duration-300">
                    <p className="text-sm font-medium text-slate-600 mb-2">Use Code:</p>
                    <p className="text-3xl font-heading font-bold text-brand-red tracking-wider">{coupon.code}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4 pt-6">
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-500 w-full">
                    <Clock className="w-4 h-4" />
                    <span>Expires: {new Date(coupon.expiryDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <MasterButton asChild variant="primary" size="lg" className="w-full">
                    <a href="/booking">
                      <Tag className="mr-2 h-5 w-5" />
                      Book Now & Save
                    </a>
                  </MasterButton>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Trust Section */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border-2 border-brand-red/20 p-8 md:p-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red/10 text-brand-red mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
                Honest Pricing, Every Time
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                As a family-owned business, we treat your home like our own. These coupons are just one way we show our commitment to fair, transparent pricing. No hidden fees, no surprises—just honest plumbing service you can trust.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-slate-600">
                  <Shield className="w-5 h-5 text-brand-red" />
                  <span className="font-medium">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Sparkles className="w-5 h-5 text-brand-red" />
                  <span className="font-medium">Upfront Estimates</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Heart className="w-5 h-5 text-brand-red" />
                  <span className="font-medium">Family Owned Since {BUSINESS_DATA.established}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

