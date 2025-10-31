'use client';

import { useState, useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_DATA } from '@/lib/business-data';
import Link from 'next/link';

export function StickyCtaBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA bar after scrolling 50% of page height
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
      
      setIsVisible(scrollPercentage > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-xl bg-white/95 border-t-2 border-brand-cyan shadow-2xl transform transition-transform duration-300 ease-in-out"
      style={{ transform: isVisible ? 'translateY(0)' : 'translateY(100%)' }}
    >
      {/* Brand accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-turquoise to-brand-cyan" />
      
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Text */}
          <div className="text-center sm:text-left">
            <p className="text-slate-900 font-heading font-bold text-base md:text-lg">
              Need Service Today?
            </p>
            <p className="text-slate-600 text-xs md:text-sm font-medium">
              Same-day • Licensed & Insured
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-turquoise hover:from-brand-cyan-dark hover:to-brand-cyan text-white px-6 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">{BUSINESS_DATA.phone}</span>
              <span className="sm:hidden">Call Now</span>
            </a>
            
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-brand-cyan border-2 border-brand-cyan hover:border-brand-cyan-dark px-6 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Calendar className="w-4 h-4 md:w-5 md:h-5" />
              <span>Book Online</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
