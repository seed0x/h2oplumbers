'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MasterButton } from "@/components/ui/master-button";
import { Phone, Tag } from "lucide-react";

type HeroPromotion = {
  badgeLabel: string;
  headingLabel: string;
  detailsLine: string;
  couponCode: string;
  ctaLink: string;
  ctaText: string;
  isTelLink: boolean;
};

type UnifiedHeroProps = {
  promotion: HeroPromotion;
};

export function UnifiedHero({ promotion }: UnifiedHeroProps) {
  const { badgeLabel, headingLabel, detailsLine, couponCode, ctaLink, ctaText, isTelLink } = promotion;
  const badgeCircleLabel = badgeLabel.replace(/[^0-9$%]+$/,'').trim() || 'Save';
  
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.service) {
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Service requested: ${formData.service}`,
          formType: 'general',
        }),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-28 md:pt-32 lg:pt-28">
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" aria-hidden="true" />
        <div className="relative z-10 container mx-auto px-4 pb-[118px] md:pb-[136px] lg:pb-[150px]">
        <div className="max-w-xl lg:max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-medium tracking-wide mb-6 ring-1 ring-white/10 shadow-lg shadow-black/10">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>Family Owned • Since 2004 • Licensed & Insured</span>
          </div>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Trusted Vancouver Plumbing
            <span className="block text-slate-300 font-light">Family Integrity. Professional Results.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-prose">
            Three generations of plumbing expertise serving Southwest Washington. Straight answers, quality workmanship, and workmanship we stand behind.
          </p>

          {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10">
              {[
                { value: '20+', label: 'Years Serving' },
                { value: '1000+', label: 'Projects Completed' },
                { value: '4.9', label: 'Avg Rating' },
                { value: '100%', label: 'Licensed & Insured' }
              ].map(stat => (
                <div key={stat.label} className="">
                  <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wide text-slate-400 font-medium mt-1">{stat.label}</div>
                  <div className="mt-2 h-1 w-8 bg-red-600/70 rounded" />
                </div>
              ))}
            </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-4 mb-10">
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <a href="tel:+13608832506" aria-label="Call H2O Plumbing">Call (360) 883-2506</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/40 text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-4 text-lg transition-all duration-300 bg-transparent transform hover:-translate-y-1"
            >
              <a href="/booking">Schedule Service</a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-2.5 pt-6 border-t border-white/10 max-w-xl mb-2.5">
            {[
              'Licensed • WA ALLCOPL030RW',
              'OR CCB# 147151',
              'Family Owned & Operated',
              'Local • Vancouver, WA'
            ].map(b => (
              <span
                key={b}
                className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-slate-200 ring-1 ring-white/15 shadow-sm shadow-black/10"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500/80" />
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Floating Form (desktop centered vertically). Mobile version appears inline after badges by natural flow */}
        <div className="mt-12 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-[4%] lg:w-[380px] xl:w-[420px] z-20">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl ring-1 ring-black/5 p-6 md:p-7">
            <div className="text-center mb-5">
              <h2 className="text-xl font-semibold text-slate-900 mb-1">Request a Free Quote</h2>
              <p className="text-sm text-slate-500">Fast response during business hours. No obligation.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Request service quote form">
              <div>
                <label className="sr-only" htmlFor="hero-name">Name</label>
                <Input 
                  id="hero-name" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="text-black border-slate-300 focus:border-red-600 focus:ring-red-600" 
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="hero-email">Email Address</label>
                <Input 
                  id="hero-email" 
                  type="email" 
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="text-black border-slate-300 focus:border-red-600 focus:ring-red-600" 
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="hero-phone">Phone Number</label>
                <Input 
                  id="hero-phone" 
                  type="tel" 
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="text-black border-slate-300 focus:border-red-600 focus:ring-red-600" 
                />
              </div>
              <div>
                <select 
                  value={formData.service} 
                  onChange={(e) => setFormData({...formData, service: e.target.value})} 
                  required
                  className="w-full h-10 px-3 py-2 text-black bg-white border border-slate-300 rounded-md focus:border-red-600 focus:ring-2 focus:ring-red-600 focus:outline-none"
                >
                  <option value="">Service Needed</option>
                  <option value="drain-cleaning">Drain Cleaning</option>
                  <option value="water-heater">Water Heater Repair</option>
                  <option value="leak-detection">Leak Detection</option>
                  <option value="repipe">Repipe & Pipe Repair</option>
                  <option value="bathroom-remodel">Bathroom Remodel</option>
                  <option value="new-construction">New Construction</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {submitStatus === 'success' && (
                <div className="text-green-600 text-sm text-center font-medium">
                  ✓ Thank you! We'll contact you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-600 text-sm text-center font-medium">
                  Error submitting. Please call us directly.
                </div>
              )}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Get Free Quote'}
              </Button>
            </form>
            <p className="text-[10px] text-slate-500 mt-4 text-center leading-relaxed">
              By submitting this form you agree to be contacted about your request. We never share your information.
            </p>
          </div>
        </div>
        </div>
      </section>

    </>
  );
}

export function HeroCouponBanner({ promotion }: UnifiedHeroProps) {
  const { badgeLabel, headingLabel, detailsLine, couponCode, ctaLink, ctaText, isTelLink } = promotion;
  const badgeCircleLabel = badgeLabel.replace(/[^0-9$%]+$/,'').trim() || 'Save';

  return (
    <div className="relative z-30 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-brand-cyan to-red-600 shadow-lg">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url('/images/hero-background-pattern.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
          
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 p-5 md:p-6">
            {/* Left Side - Compact Offer Info */}
            <div className="flex items-center gap-4 text-white">
              <div className="flex-shrink-0">
                <div className="text-3xl md:text-4xl font-heading font-bold">{badgeLabel}</div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-heading font-bold uppercase">{headingLabel}</h3>
                <p className="text-xs md:text-sm text-white/90 mt-1">{detailsLine.split('•')[0].trim()}</p>
              </div>
            </div>
            
            {/* Right Side - Code & CTA */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Coupon Code */}
              <div className="bg-white px-5 py-3 rounded-lg text-center">
                <div className="text-lg font-heading font-bold text-brand-cyan tracking-wider">{couponCode}</div>
              </div>
              
              {/* CTA Button */}
              <a
                href={ctaLink}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-brand-cyan px-6 py-3 rounded-lg font-bold transition-all whitespace-nowrap"
              >
                {ctaText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


