"use client";
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white' | 'monochrome' | 'icon' | 'animated' | 'acp';
  className?: string;
  href?: string;
  priority?: boolean;
  floating?: boolean;
  glow?: boolean;
  hideText?: boolean; // hide descriptor tagline if needed later
}

export function Logo({ 
  size = 'md', 
  variant = 'default',
  className = '',
  href = '/',
  priority = false,
  floating = false,
  glow = false,
  hideText = true
}: LogoProps) {
  const sizes = {
    xs: { width: 80, height: 27 },
    sm: { width: 120, height: 40 },
    md: { width: 160, height: 53 },
    lg: { width: 200, height: 67 },
    xl: { width: 240, height: 80 }
  };

  const { width, height } = sizes[size];

  // Logo source based on variant
  // Use existing SVG assets; fallback to PNG if custom uploads are later added.
  const logoPaths = {
    default: '/images/logos/acp-logo.png',
    white: '/images/logos/acp-logo-white.png',
    monochrome: '/images/logos/acp-logo-monochrome.svg',
    icon: '/images/logos/acp-icon.svg',
    animated: '/images/logos/acp-animated-logo.gif',
    acp: '/images/logos/acp-logo.png'
  };

  const logoSrc = logoPaths[variant] || logoPaths.default;

  const logoClasses = cn(
    'h-auto w-auto transition-all duration-300',
    'logo-responsive',
    {
      'logo-float': floating,
      'logo-glow': glow,
      'logo-pulse': variant === 'animated',
    },
    className
  );

  const [imageError, setImageError] = useState(false);

  const TextFallback = () => (
    <div className={cn('flex flex-col leading-none select-none', {
      'items-start': true
    })} aria-label="All County Plumbing textual logo">
  <span className="logo-main font-extrabold tracking-tight text-[var(--acp-red)]" style={{
        fontSize: size === 'xs' ? 20 : size === 'sm' ? 22 : size === 'md' ? 24 : size === 'lg' ? 28 : 32,
        letterSpacing: '-0.5px'
      }}>ALL COUNTY</span>
  <span className="logo-sub font-semibold text-[var(--acp-navy)]" style={{
        fontSize: size === 'xs' ? 12 : size === 'sm' ? 13 : size === 'md' ? 15 : size === 'lg' ? 16 : 18
      }}>PLUMBING</span>
    </div>
  );

  const LogoImage = () => (
    imageError ? <TextFallback /> : (
      <Image
        src={logoSrc}
        alt="All County Plumbing LLC - Professional Plumbing Services"
        width={width}
        height={height}
        priority={priority}
        onError={() => setImageError(true)}
        className={logoClasses + ' select-none'}
      />
    )
  );

  if (!href) {
    return <LogoImage />;
  }

  return (
    <Link 
      href={href} 
      className={cn('flex items-center group', className)}
      aria-label="All County Plumbing Home"
    >
      <LogoImage />
      {!hideText && (
        <span className="ml-3 text-xs font-medium tracking-wide text-gray-600 group-hover:text-gray-900 transition-colors">Since 2004</span>
      )}
    </Link>
  );
}

// Icon-only version for compact spaces
export function LogoIcon({ size = 'md', className = '' }: Pick<LogoProps, 'size' | 'className'>) {
  return (
    <Logo 
      size={size}
      variant="icon"
      className={className}
    />
  );
}

// Animated loading logo
export function LogoLoader({ size = 'md', className = '' }: Pick<LogoProps, 'size' | 'className'>) {
  return (
    <Logo 
      size={size}
      variant="animated"
      className={cn('logo-pulse', className)}
      href=""
    />
  );
}
