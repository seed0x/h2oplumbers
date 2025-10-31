'use client'

import React from 'react'
import { Button } from "@/components/ui/button";
import { Phone, Droplet, Clock, Shield, CheckCircle2, Star, ArrowRight, Award, Users } from "lucide-react";
import Link from 'next/link';

export function H2OHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 pt-20 md:pt-24 pb-32 md:pb-40">
      {/* Clean geometric pattern background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(to right, rgb(6 182 212) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(6 182 212) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Subtle accent gradient - top right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-cyan/5 via-transparent to-transparent rounded-full blur-3xl" />
      
      {/* Subtle accent gradient - bottom left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-brand-turquoise/5 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Top Trust Bar - Conversion Optimized */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-8">
          <div className="flex items-center gap-2 text-sm bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
            <div className="flex -space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-slate-900">4.9/5 Rating</span>
          </div>
          <div className="h-4 w-px bg-slate-300 hidden sm:block" />
          <div className="flex items-center gap-2 text-sm bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
            <Shield className="w-4 h-4 text-brand-cyan" />
            <span className="font-bold text-slate-900">Licensed & Insured</span>
          </div>
          <div className="h-4 w-px bg-slate-300 hidden sm:block" />
          <div className="flex items-center gap-2 text-sm bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
            <Clock className="w-4 h-4 text-brand-cyan" />
            <span className="font-bold text-slate-900">Same‑Day Service</span>
          </div>
        </div>

        {/* Main Hero Content - Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Hero Content */}
          <div className="lg:pt-4">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-cyan/10 to-brand-turquoise/10 border border-brand-cyan/20 rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              <span className="text-sm font-semibold text-slate-700">Available Today • Same-Day Service</span>
            </div>

            {/* Main Headline - Benefit Focused */}
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-5 leading-[1.1]">
              <span className="text-slate-900">Expert Plumbing</span>
              <br />
              <span className="bg-gradient-to-r from-brand-cyan via-brand-turquoise to-brand-cyan bg-clip-text text-transparent">
                Done Right, On Time
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
              H2O Plumbing launched in 2020 as the service division of All County Plumbing.
              Fast, reliable solutions for your home or business.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href="tel:+13604339743"
                className="group relative inline-flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold px-7 py-3.5 rounded-xl text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Phone className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Call (360) 433-9743</span>
              </a>
              <a
                href="/booking"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-brand-cyan border-2 border-brand-cyan font-bold px-7 py-3.5 rounded-xl text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Online
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust bullets */}
            <div className="flex flex-wrap items-start gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Upfront Pricing</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>100% Satisfaction</span>
              </div>
            </div>

          </div>

          {/* Right Column - Quote Form */}
          <div id="quote-form" className="lg:sticky lg:top-24">
            {/* Outer card with subtle shadow */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white border border-slate-200">

              <div className="p-6 md:p-7">
                {/* Form Header with icon */}
                <div className="text-center mb-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-brand-cyan to-brand-turquoise rounded-xl mb-3">
                    <Droplet className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-1.5">
                    Get Your Free Quote
                  </h2>
                  <p className="text-slate-600 text-xs">
                    Quick response • No obligation • Honest pricing
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-3.5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-lg focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 outline-none transition-all text-sm text-slate-900 placeholder:text-slate-400"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-lg focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 outline-none transition-all text-sm text-slate-900 placeholder:text-slate-400"
                      placeholder="(360) 555-0123"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-slate-700 mb-1.5">Service Needed *</label>
                    <select 
                      id="service" 
                      required
                      className="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-lg focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 outline-none transition-all text-sm text-slate-900"
                    >
                      <option value="">Select a service...</option>
                      <option>Emergency Repair</option>
                      <option>Drain Cleaning</option>
                      <option>Water Heater</option>
                      <option>Leak Detection</option>
                      <option>Pipe Repair/Replacement</option>
                      <option>Bathroom Remodel</option>
                      <option>Commercial Services</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-cyan to-brand-turquoise hover:from-brand-cyan-dark hover:to-brand-cyan text-white font-bold py-3 rounded-lg text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Request Free Quote
                  </button>
                  <p className="text-xs text-slate-500 text-center leading-relaxed">
                    We'll respond within 1 hour during business hours
                  </p>
                </form>

                {/* Divider */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-slate-50 px-3 py-0.5 text-slate-500 font-medium rounded-full text-[10px]">Why Choose H2O</span>
                  </div>
                </div>

                {/* Why Choose Us - Below Form */}
                <div className="space-y-2.5">
                  {[
                    { icon: CheckCircle2, title: 'Same-Day Service', desc: 'Available for most requests', color: 'text-brand-cyan', bgColor: 'bg-brand-cyan/10' },
                    { icon: Shield, title: 'Licensed & Insured', desc: 'Fully bonded professionals', color: 'text-brand-turquoise', bgColor: 'bg-brand-turquoise/10' },
                    { icon: Award, title: '30-Year Warranty', desc: 'On select installations', color: 'text-brand-cyan', bgColor: 'bg-brand-cyan/10' },
                    { icon: Star, title: 'Top-Rated Service', desc: '4.9/5 stars from real customers', color: 'text-yellow-500', bgColor: 'bg-yellow-50' }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-start gap-2.5 bg-slate-50 rounded-lg p-3 border border-slate-200 hover:border-brand-cyan/30 transition-all">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${item.bgColor} flex items-center justify-center`}>
                          <Icon className={`w-4 h-4 ${item.color} flex-shrink-0`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-900 text-xs mb-0.5">{item.title}</h3>
                          <p className="text-[11px] text-slate-600 leading-snug">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Integrated seamless transition banner
export function H2OCouponBanner() {
  return (
    <div className="relative -mt-24 md:-mt-32">
      {/* Diagonal slice transition */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-50 to-white" style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0 100%)' }} />
      
      <div className="relative container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Compact inline banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-cyan to-brand-turquoise shadow-xl">
            {/* Subtle shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4">
              {/* Left - Offer */}
              <div className="flex items-center gap-3 text-white">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Droplet className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl md:text-3xl font-bold">10% OFF</span>
                    <span className="text-sm md:text-base font-semibold">First-Time Service</span>
                  </div>
                  <p className="text-[11px] text-white/90">On service calls over $200</p>
                </div>
              </div>
              
              {/* Right - Code & CTA */}
              <div className="flex items-center gap-3">
                <div className="bg-white/95 px-4 py-2 rounded-lg text-center">
                  <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Code</div>
                  <div className="text-base font-black text-brand-cyan">H2O10</div>
                </div>
                <a
                  href="tel:+13604339743"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-brand-cyan px-4 py-2 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
