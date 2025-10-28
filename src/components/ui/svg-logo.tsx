import React from 'react';
import { cn } from '@/lib/utils';

interface SvgLogoProps {
  variant?: 'default' | 'white' | 'monochrome' | 'icon';
  size?: number;
  className?: string;
}

// SVG version of H2O Plumbing logo (simplified representation)
export function SvgLogo({ variant = 'default', size = 160, className = '' }: SvgLogoProps) {
  const colors = {
    default: {
      primary: '#DC2626', // Brand red
      secondary: '#374151', // Brand gray
      accent: '#F3F4F6', // Light gray
    },
    white: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
      accent: '#FFFFFF',
    },
    monochrome: {
      primary: '#374151',
      secondary: '#374151',
      accent: '#9CA3AF',
    },
    icon: {
      primary: '#DC2626',
      secondary: '#374151',
      accent: '#F3F4F6',
    }
  };

  const colorScheme = colors[variant];
  const aspectRatio = 160 / 53; // Based on original logo dimensions
  const height = size / aspectRatio;

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 160 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
    >
      {/* AC Symbol/Icon */}
      <g>
        {/* Stylized "AC" lettermark */}
        <path
          d="M8 12L18 38H14L12.2 34H5.8L4 38H0L10 12H8Z"
          fill={colorScheme.primary}
        />
        <path
          d="M9 20L7.5 24H10.5L9 20Z"
          fill={colorScheme.accent}
        />
        
        {/* C Letter */}
        <path
          d="M32 12C28 12 25 15 25 20V30C25 35 28 38 32 38C35 38 37 36 37 33H33C33 34 32.5 34 32 34C30 34 29 32 29 30V20C29 18 30 16 32 16C32.5 16 33 16 33 17H37C37 14 35 12 32 12Z"
          fill={colorScheme.primary}
        />

        {/* Plumbing pipe accent */}
        <path
          d="M40 20H50V24H40Z"
          fill={colorScheme.secondary}
          opacity="0.8"
        />
        <circle
          cx="52"
          cy="22"
          r="2"
          fill={colorScheme.secondary}
          opacity="0.6"
        />
      </g>

      {/* Company name text */}
      <g fontSize="10" fontFamily="Arial, sans-serif" fontWeight="600">
        <text x="60" y="20" fill={colorScheme.secondary}>
          H2O
        </text>
        <text x="60" y="32" fill={colorScheme.primary} fontSize="12" fontWeight="700">
          PLUMBING
        </text>
        <text x="60" y="42" fill={colorScheme.secondary} fontSize="6" opacity="0.8">
          RESIDENTIAL • COMMERCIAL • SERVICE
        </text>
      </g>

      {/* Decorative elements */}
      <g opacity="0.3">
        <path
          d="M0 45L160 45"
          stroke={colorScheme.primary}
          strokeWidth="1"
        />
        <circle cx="5" cy="45" r="1.5" fill={colorScheme.primary} />
        <circle cx="155" cy="45" r="1.5" fill={colorScheme.primary} />
      </g>
    </svg>
  );
}

// Icon-only version for favicons and compact spaces
export function LogoIconSvg({ size = 48, className = '', variant = 'default' }: SvgLogoProps) {
  const colors = {
    default: {
      primary: '#DC2626',
      secondary: '#374151',
      accent: '#F3F4F6',
    },
    white: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
      accent: '#FFFFFF',
    },
    monochrome: {
      primary: '#374151',
      secondary: '#374151',
      accent: '#9CA3AF',
    },
    icon: {
      primary: '#DC2626',
      secondary: '#374151',
      accent: '#F3F4F6',
    }
  };

  const colorScheme = colors[variant];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
    >
      {/* Background circle */}
      <circle
        cx="24"
        cy="24"
        r="22"
        fill={colorScheme.accent}
        stroke={colorScheme.primary}
        strokeWidth="2"
      />
      
      {/* Stylized AC monogram */}
      <g transform="translate(12, 14)">
        {/* A */}
        <path
          d="M2 20L6 8H8L12 20H10L9.2 18H4.8L4 20H2Z"
          fill={colorScheme.primary}
        />
        <path
          d="M7 12L5.5 16H8.5L7 12Z"
          fill={colorScheme.accent}
        />
        
        {/* C */}
        <path
          d="M20 8C17 8 15 10 15 13V15C15 18 17 20 20 20C22 20 23 19 23 17H21C21 18 20.5 18 20 18C19 18 18 17 18 15V13C18 11 19 10 20 10C20.5 10 21 10 21 11H23C23 9 22 8 20 8Z"
          fill={colorScheme.primary}
        />
      </g>
      
      {/* Plumbing accent */}
      <g transform="translate(8, 30)" opacity="0.7">
        <rect width="32" height="2" rx="1" fill={colorScheme.secondary} />
        <circle cx="30" cy="1" r="3" fill={colorScheme.secondary} opacity="0.5" />
        <circle cx="2" cy="1" r="3" fill={colorScheme.secondary} opacity="0.5" />
      </g>
    </svg>
  );
}

// Animated loading version
export function AnimatedLogoSvg({ size = 160, className = '' }: Omit<SvgLogoProps, 'variant'>) {
  return (
    <div className={cn('inline-block', className)}>
      <SvgLogo size={size} className="animate-pulse" />
    </div>
  );
}

// Pattern/watermark version (very subtle for backgrounds)
export function LogoPattern({ size = 100, opacity = 0.03, className = '' }: { 
  size?: number; 
  opacity?: number; 
  className?: string; 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('absolute', className)}
      style={{ opacity }}
    >
      <g transform="translate(25, 25)">
        <LogoIconSvg size={50} variant="monochrome" />
      </g>
    </svg>
  );
}


