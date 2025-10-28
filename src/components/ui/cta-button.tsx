'use client'

import React from 'react';
import Link from 'next/link';
import { MasterButton } from '@/components/ui/master-button';
import { Phone, Calendar, MessageSquare, Star } from 'lucide-react';
import { contactInfo } from '@/config/site';
import { BUSINESS_DATA } from '@/lib/business-data';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'phone' | 'booking' | 'contact' | 'quote';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  children?: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

export function CTAButton({ 
  variant = 'primary', 
  size = 'md', 
  href, 
  children, 
  className = '',
  showIcon = true
}: CTAButtonProps) {
  // Map our variant names to MasterButton variant names
  const variantMap = {
    primary: 'primary',
    secondary: 'secondary',
    phone: 'phone',
    booking: 'primary',
    contact: 'outline',
    quote: 'primary'
  };
  
  // High-conversion configurations optimized for plumbing business
  const configs = {
    primary: {
      defaultHref: '/contact',
      defaultText: 'Get Free Estimate',
      icon: Star
    },
    secondary: {
      defaultHref: '/services',
      defaultText: 'View Our Services',
      icon: null
    },
    phone: {
      defaultHref: contactInfo.phoneLink || `tel:${BUSINESS_DATA.phoneRaw}`,
      defaultText: `Call ${BUSINESS_DATA.phone}`,
      icon: Phone
    },
    booking: {
      defaultHref: '/booking',
      defaultText: 'Schedule Service Now',
      icon: Calendar
    },
    contact: {
      defaultHref: '/contact',
      defaultText: 'Get Quote',
      icon: MessageSquare
    },
    quote: {
      defaultHref: '/contact',
      defaultText: 'Free Quote - No Obligation',
      icon: Star
    }
  };

  const config = configs[variant];
  const Icon = config.icon;
  const finalHref = href || config.defaultHref;
  const childString = typeof children === 'string' ? children.trim() : '';
  const finalText = childString === '' ? config.defaultText : children;
  
  const buttonContent = (
    <>
      {showIcon && Icon && <Icon className="w-5 h-5 mr-2 flex-shrink-0" />}
      <span className="flex-1">{finalText}</span>
    </>
  );
  
  if (finalHref.startsWith('tel:') || finalHref.startsWith('mailto:')) {
    return (
      <MasterButton 
        asChild
        variant={variantMap[variant] as any} 
        size={size}
        className={className}
      >
        <a href={finalHref} className="inline-flex items-center">
          {buttonContent}
        </a>
      </MasterButton>
    );
  }

  return (
    <MasterButton 
      asChild
      variant={variantMap[variant] as any} 
      size={size}
      className={className}
    >
      <Link href={finalHref} className="inline-flex items-center">
        {buttonContent}
      </Link>
    </MasterButton>
  );
}

// Pre-configured common CTAs for easy use
export function PrimaryCTA(props: Omit<CTAButtonProps, 'variant'>) {
  return <CTAButton {...props} variant="primary" />;
}

export function PhoneCTA(props: Omit<CTAButtonProps, 'variant'>) {
  return <CTAButton {...props} variant="phone" />;
}

export function BookingCTA(props: Omit<CTAButtonProps, 'variant'>) {
  return <CTAButton {...props} variant="booking" />;
}

export function ContactCTA(props: Omit<CTAButtonProps, 'variant'>) {
  return <CTAButton {...props} variant="contact" />;
}


