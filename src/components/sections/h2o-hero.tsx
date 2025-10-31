'use client'

import React, { useState, FormEvent, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button";
import { Phone, Droplet, Clock, Shield, CheckCircle2, Star, ArrowRight, Award, Users } from "lucide-react";
import Link from 'next/link';

export function H2OHero() {
  const heroRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const heroRect = heroRef.current.getBoundingClientRect();
      const heroHeight = heroRect.height;
      const scrolled = Math.max(0, -heroRect.top);
      const progress = Math.min(1, scrolled / heroHeight);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      alert('Please fill in all required fields');
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
          message: `Service Request: ${formData.service}`,
          formType: 'general'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '' });
      alert('Thank you! We\'ll contact you shortly.');
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      alert('Something went wrong. Please call us directly at (360) 433-9743');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    {/* Hero Content Section */}
    <section ref={heroRef} className="snap-section relative min-h-screen overflow-hidden bg-white pt-20 md:pt-24 pb-12 md:pb-0">
      {/* Subtle dark gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/5 to-slate-900/15" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `
            linear-gradient(to right, rgb(6 182 212) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(6 182 212) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Animated gradient accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-brand-cyan/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-brand-turquoise/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />

      <div 
        className="relative z-10 container mx-auto px-4 transition-all duration-300 ease-out"
        style={{
          opacity: 1 - scrollProgress * 0.6,
          transform: `translateY(${scrollProgress * 30}px) scale(${1 - scrollProgress * 0.05})`
        }}
      >
        {/* Top Trust Bar - Conversion Optimized with subtle animation */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-8 md:mb-10 animate-fade-in">
          <div className="flex items-center gap-2 text-sm bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
            <div className="flex -space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-slate-900">4.9/5 Rating</span>
          </div>
          <div className="h-4 w-px bg-slate-300 hidden sm:block" />
          <div className="flex items-center gap-2 text-sm bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
            <Shield className="w-4 h-4 text-brand-cyan" />
            <span className="font-bold text-slate-900">Licensed & Insured</span>
          </div>
          <div className="h-4 w-px bg-slate-300 hidden sm:block" />
          <div className="flex items-center gap-2 text-sm bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
            <Clock className="w-4 h-4 text-brand-cyan" />
            <span className="font-bold text-slate-900">Same‑Day Service</span>
          </div>
        </div>

        {/* Main Hero Content - Responsive Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start pb-8 md:pb-12 lg:pb-16">
          {/* Left Column - Hero Content */}
          <div className="lg:pt-8 animate-slide-up mb-8 lg:mb-0">
            {/* Urgency Badge with animation */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-cyan/10 to-brand-turquoise/10 border border-brand-cyan/30 rounded-full px-5 py-2.5 mb-6 shadow-sm hover:shadow-md transition-all duration-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-cyan"></span>
              </span>
              <span className="text-sm font-bold text-slate-700 tracking-wide">Available Today • Same-Day Service</span>
            </div>

            {/* Main Headline - Benefit Focused with animation */}
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-heading font-bold mb-5 leading-[1.1] tracking-tight animate-fade-in">
              <span className="text-slate-900">Vancouver's Trusted</span>
              <br />
              <span className="bg-gradient-to-r from-brand-cyan via-brand-turquoise to-brand-cyan bg-clip-text text-transparent animate-gradient">
                Plumbing Experts
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              <span className="text-brand-cyan font-semibold">Three generations</span> serving Vancouver, Clark County, and Southwest Washington since 2009. Licensed, insured, and family-owned.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="tel:+13604339743"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-cyan to-brand-turquoise hover:from-brand-cyan-dark hover:to-brand-cyan text-white font-bold px-8 py-4 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Phone className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Call (360) 433-9743</span>
              </a>
              <a
                href="/booking"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-brand-cyan border-2 border-brand-cyan/30 hover:border-brand-cyan font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Schedule Online
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Trust badges below CTAs */}
            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="font-medium">No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="font-medium">Upfront Pricing</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="font-medium">100% Satisfaction Guaranteed</span>
              </div>
            </div>

          </div>

          {/* Right Column - Quote Form - Hidden on mobile, shown on desktop */}
          <div id="quote-form" className="hidden lg:block w-full max-w-md mx-auto lg:max-w-none lg:sticky lg:top-24 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Outer card with enhanced shadow and gradient border */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border-2 border-slate-200 hover:border-brand-cyan/30 transition-all duration-300">

              <div className="p-6 md:p-8">
                {/* Form Header with animated icon */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-brand-cyan to-brand-turquoise rounded-2xl mb-4 shadow-lg animate-bounce" style={{ animationDuration: '2s', animationIterationCount: '3' }}>
                    <Droplet className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-2">
                    Get Your Free Quote
                  </h2>
                  <p className="text-slate-600 text-sm">
                    Quick response • No obligation • Honest pricing
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-lg focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 outline-none transition-all text-sm text-slate-900 placeholder:text-slate-400"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-lg focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 outline-none transition-all text-sm text-slate-900 placeholder:text-slate-400"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-lg focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 outline-none transition-all text-sm text-slate-900 placeholder:text-slate-400"
                      placeholder="(360) 555-0123"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-slate-700 mb-1.5">Service Needed *</label>
                    <select 
                      id="service" 
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-lg focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 outline-none transition-all text-sm text-slate-900"
                    >
                      <option value="">Select a service...</option>
                      <option value="Emergency Repair">Emergency Repair</option>
                      <option value="Drain Cleaning">Drain Cleaning</option>
                      <option value="Water Heater">Water Heater</option>
                      <option value="Leak Detection">Leak Detection</option>
                      <option value="Pipe Repair/Replacement">Pipe Repair/Replacement</option>
                      <option value="Bathroom Remodel">Bathroom Remodel</option>
                      <option value="Commercial Services">Commercial Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brand-cyan to-brand-turquoise hover:from-brand-cyan-dark hover:to-brand-cyan text-white font-bold py-4 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Request Free Quote'}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </button>
                  {submitStatus === 'success' && (
                    <div className="text-center text-green-600 font-semibold text-sm animate-fade-in">
                      ✓ Thank you! We'll contact you shortly.
                    </div>
                  )}
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

                {/* Trust indicators - Simplified */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: CheckCircle2, title: 'Same-Day Available' },
                    { icon: Shield, title: 'Licensed & Insured' },
                    { icon: Award, title: '30-Year Warranty' },
                    { icon: Star, title: '4.9/5 Rating' }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-2 text-xs text-slate-600">
                        <Icon className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                        <span className="font-medium">{item.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated water wave transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none transition-all duration-500 ease-out pointer-events-none"
        style={{ 
          transform: `translateY(${-120 + scrollProgress * 50}px) scale(${1 + scrollProgress * 0.1})`,
          opacity: 1 - scrollProgress * 0.3
        }}
      >
        <svg className="relative block w-full h-64 md:h-64" viewBox="0 0 1200 120" preserveAspectRatio="none">
          {/* Background wave layer - lightest */}
          <path d="M0,20 C250,100 450,100 600,60 C750,20 950,20 1200,60 L1200,120 L0,120 Z" fill="#cbd5e1" className="opacity-40">
            <animate attributeName="d" dur="6s" repeatCount="indefinite"
              values="
                M0,20 C250,100 450,100 600,60 C750,20 950,20 1200,60 L1200,120 L0,120 Z;
                M0,60 C250,20 450,20 600,80 C750,120 950,120 1200,80 L1200,120 L0,120 Z;
                M0,20 C250,100 450,100 600,60 C750,20 950,20 1200,60 L1200,120 L0,120 Z
              "
            />
          </path>
          {/* Middle wave layer - slate */}
          <path d="M0,40 C250,90 450,90 600,50 C750,10 950,10 1200,50 L1200,120 L0,120 Z" fill="#e2e8f0">
            <animate attributeName="d" dur="4s" repeatCount="indefinite"
              values="
                M0,40 C250,90 450,90 600,50 C750,10 950,10 1200,50 L1200,120 L0,120 Z;
                M0,10 C250,50 450,50 600,70 C750,110 950,110 1200,70 L1200,120 L0,120 Z;
                M0,40 C250,90 450,90 600,50 C750,10 950,10 1200,50 L1200,120 L0,120 Z
              "
            />
          </path>
          {/* Front wave layer - white */}
          <path d="M0,60 C250,80 450,80 600,50 C750,20 950,20 1200,50 L1200,120 L0,120 Z" fill="#f8fafc">
            <animate attributeName="d" dur="8s" repeatCount="indefinite"
              values="
                M0,60 C250,80 450,80 600,50 C750,20 950,20 1200,50 L1200,120 L0,120 Z;
                M0,30 C250,50 450,50 600,75 C750,100 950,100 1200,75 L1200,120 L0,120 Z;
                M0,60 C250,80 450,80 600,50 C750,20 950,20 1200,50 L1200,120 L0,120 Z
              "
            />
          </path>
          {/* Accent wave - brand cyan for water effect */}
          <path d="M0,70 C250,85 450,85 600,60 C750,35 950,35 1200,60 L1200,120 L0,120 Z" fill="#06b6d4" className="opacity-30">
            <animate attributeName="d" dur="5s" repeatCount="indefinite"
              values="
                M0,70 C250,85 450,85 600,60 C750,35 950,35 1200,60 L1200,120 L0,120 Z;
                M0,40 C250,60 450,60 600,80 C750,105 950,105 1200,80 L1200,120 L0,120 Z;
                M0,70 C250,85 450,85 600,60 C750,35 950,35 1200,60 L1200,120 L0,120 Z
              "
            />
          </path>
        </svg>
      </div>
    </section>

    {/* Mobile Form Section - Snap section on mobile */}
    <section className="snap-section lg:hidden relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-100 via-slate-50 to-white py-8">
      <div className="container mx-auto px-4">
        <div className="w-full max-w-md mx-auto">
          {/* Form card */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border-2 border-slate-200">
            <div className="p-6 md:p-8">
              {/* Form Header with animated icon */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-brand-cyan to-brand-turquoise rounded-2xl mb-4 shadow-lg animate-bounce" style={{ animationDuration: '2s', animationIterationCount: '3' }}>
                  <Droplet className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-2">
                  Get Your Free Quote
                </h2>
                <p className="text-slate-600 text-sm">
                  Quick response • No obligation • Honest pricing
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                <div>
                  <label className="sr-only" htmlFor="mobile-name">Full Name</label>
                  <input 
                    type="text" 
                    id="mobile-name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-lg focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 outline-none transition-all text-sm text-slate-900 placeholder:text-slate-400"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="mobile-email">Email Address</label>
                  <input 
                    type="email" 
                    id="mobile-email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-lg focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 outline-none transition-all text-sm text-slate-900 placeholder:text-slate-400"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="mobile-phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="mobile-phone" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-lg focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 outline-none transition-all text-sm text-slate-900 placeholder:text-slate-400"
                    placeholder="(360) 555-0123"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="mobile-service">Service Needed</label>
                  <select 
                    id="mobile-service" 
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-lg focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/10 outline-none transition-all text-sm text-slate-900"
                  >
                    <option value="">Select a service...</option>
                    <option value="Emergency Repair">Emergency Repair</option>
                    <option value="Drain Cleaning">Drain Cleaning</option>
                    <option value="Water Heater">Water Heater</option>
                    <option value="Leak Detection">Leak Detection</option>
                    <option value="Pipe Repair/Replacement">Pipe Repair/Replacement</option>
                    <option value="Bathroom Remodel">Bathroom Remodel</option>
                    <option value="Commercial Services">Commercial Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-brand-cyan to-brand-turquoise hover:from-brand-cyan-dark hover:to-brand-cyan text-white font-bold py-4 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Request Free Quote'}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>
                {submitStatus === 'success' && (
                  <div className="text-center text-green-600 font-semibold text-sm animate-fade-in">
                    ✓ Thank you! We'll contact you shortly.
                  </div>
                )}
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
                  <span className="bg-white px-3 py-0.5 text-slate-500 font-medium rounded-full text-[10px]">Why Choose H2O</span>
                </div>
              </div>

              {/* Trust indicators - Simplified */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: CheckCircle2, title: 'Same-Day Available' },
                  { icon: Shield, title: 'Licensed & Insured' },
                  { icon: Award, title: '30-Year Warranty' },
                  { icon: Star, title: '4.9/5 Rating' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 text-xs text-slate-600">
                      <Icon className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                      <span className="font-medium">{item.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
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
