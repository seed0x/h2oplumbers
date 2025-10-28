import React from 'react';
import { MapPin, Clock, Shield, Phone, Mail } from 'lucide-react';
import { BUSINESS_DATA } from '@/lib/business-data';

export const TopInfoBar = () => {
  return (
    <div id="top-info-bar" className="fixed top-0 left-0 right-0 bg-[#111827] text-[12px] lg:text-[13px] tracking-normal text-white py-2 border-b border-gray-800 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-3 lg:gap-6">
          <div className="flex items-center gap-3 lg:gap-6 text-gray-200 overflow-hidden">
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <MapPin className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-secondary-400 flex-shrink-0" />
              <span className="whitespace-nowrap">Portland-Vancouver Metro</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 flex-shrink-0">
              <Clock className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-secondary-400 flex-shrink-0" />
              <span className="whitespace-nowrap">{BUSINESS_DATA.hours.display}</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 flex-shrink-0">
              <Shield className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-secondary-400 flex-shrink-0" />
              <span className="whitespace-nowrap">{BUSINESS_DATA.licenses.display}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 lg:gap-5 flex-shrink-0">
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="flex items-center gap-1.5 font-semibold hover:text-secondary-300 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-secondary-400 flex-shrink-0" />
              <span>{BUSINESS_DATA.phone}</span>
            </a>
            <a
              href={`mailto:${BUSINESS_DATA.email}`}
              className="hidden lg:flex items-center gap-1.5 hover:text-secondary-300 transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-secondary-400 flex-shrink-0" />
              <span className="truncate max-w-[200px]">{BUSINESS_DATA.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};



