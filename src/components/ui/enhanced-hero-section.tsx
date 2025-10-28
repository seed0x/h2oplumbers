'use client';

import { useState, useEffect } from 'react';
import { MasterButton } from './master-button';
import { Phone, Star, Users, Wrench, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  backgroundImage?: string;
  className?: string;
}

export function EnhancedHeroSection({ 
  backgroundImage = '',
  className = ''
}: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={cn(
      'relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200',
      'min-h-[calc(100vh-110px)]',
      className
    )}>
      {/* Subtle pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]" aria-hidden="true">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px,#000 1px,transparent 0)",
          backgroundSize: '28px 28px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* LEFT PANEL */}
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl p-8 md:p-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-center text-white shadow-lg">
              {/* Main headline */}
              {/* Main headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-6"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    Vancouver's Trusted Plumbing Experts Since 2004
                  </span>
                </h1>
              </motion.div>

              {/* Subheading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-8"
              >
                <p className="text-xl md:text-2xl text-secondary-100 max-w-4xl mx-auto leading-relaxed">
                  Licensed, insured, and family-owned plumbing company serving Southwest Washington 
                  with honest service, quality workmanship, and trusted local expertise.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">20+</div>
                  <div className="text-secondary-100 text-sm md:text-base">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">1000+</div>
                  <div className="text-secondary-100 text-sm md:text-base">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">200+</div>
                  <div className="text-secondary-100 text-sm md:text-base">5-Star Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">100%</div>
                  <div className="text-secondary-100 text-sm md:text-base">Satisfaction</div>
                </div>
              </motion.div>

              {/* Star Rating */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex items-center justify-center lg:justify-start mb-8"
              >
                <div className="flex text-yellow-400 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <span className="text-lg text-secondary-100">4.9/5 Stars • 200+ Reviews</span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                <MasterButton 
                  size="lg" 
                  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  Call (360) 883-2506
                </MasterButton>
                
                <MasterButton 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-secondary-900 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Users className="w-6 h-6 mr-3" />
                  Schedule Service
                </MasterButton>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="mt-12 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 text-blue-200"
              >
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span>Family Owned Since 2004</span>
                </div>
                <div className="flex items-center">
                  <Wrench className="w-5 h-5 mr-2" />
                  <span>WA #ALLCOPL030RW</span>
                </div>
              </motion.div>

            </div>
          </div>
          {/* RIGHT SIDE FORM */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a Free Quote</h2>
              <p className="text-gray-600 mb-6 text-sm">Fast response during business hours. No obligation.</p>
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input id="name" name="name" required className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input id="phone" name="phone" type="tel" required className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                  <select id="service" name="service" required className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary">
                    <option value="">Select a service</option>
                    <option>Leak Detection</option>
                    <option>Water Heater</option>
                    <option>Drain Cleaning</option>
                    <option>New Construction</option>
                    <option>Commercial Plumbing</option>
                    <option>Other</option>
                  </select>
                </div>
                <MasterButton type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3">Get Free Quote</MasterButton>
                <p className="text-[11px] text-gray-500 leading-snug">By submitting this form you agree to be contacted about your request. We never share your information.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CompactHeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
  breadcrumbs?: Array<{ label: string; href?: string; }>;
}

export function CompactHeroSection({ 
  title,
  subtitle,
  backgroundImage = '/images/all-county-hero-bg.jpg',
  className = '',
  breadcrumbs
}: CompactHeroSectionProps) {
  return (
    <section className={cn(
      "relative py-20 lg:py-24 flex items-center justify-center overflow-hidden",
      "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900",
      className
    )}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M30 30c0-16.569 13.431-30 30-30v30H30z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <ol className="flex justify-center items-center space-x-2 text-blue-200">
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={index} className="flex items-center">
                  {breadcrumb.href ? (
                    <a href={breadcrumb.href} className="hover:text-white transition-colors">
                      {breadcrumb.label}
                    </a>
                  ) : (
                    <span className="text-white">{breadcrumb.label}</span>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <span className="mx-2 text-blue-300">›</span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-secondary-100 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}


