'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  treatment?: 'hero' | 'gallery' | 'thumbnail' | 'team' | 'service-icon' | 'before-after';
  overlay?: boolean;
  overlayOpacity?: number;
  fallbackType?: 'gradient' | 'icon' | 'pattern';
  fallbackColors?: string[];
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
  placeholder = 'blur',
  blurDataURL,
  treatment = 'gallery',
  overlay = false,
  overlayOpacity = 40,
  fallbackType = 'gradient',
  fallbackColors = ['#1e3a8a', '#3730a3'] // Default to brand blues
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Treatment-specific configurations
  const treatmentConfig = {
    hero: {
      quality: 90,
      priority: true,
      overlay: true,
      overlayOpacity: 40,
      className: 'object-cover w-full h-full'
    },
    gallery: {
      quality: 85,
      className: 'object-cover w-full h-full transition-transform duration-300 group-hover:scale-105',
      aspectRatio: '16/9'
    },
    thumbnail: {
      width: 400,
      height: 300,
      quality: 80,
      className: 'object-cover w-full h-full transition-transform duration-300 hover:scale-110'
    },
    team: {
      className: 'object-cover w-full h-full rounded-full border-4 border-white shadow-lg',
      quality: 85
    },
    'service-icon': {
      quality: 90,
      className: 'object-contain w-full h-full'
    },
    'before-after': {
      quality: 90,
      className: 'object-cover w-full h-full'
    }
  };

  const config = treatmentConfig[treatment] || treatmentConfig.gallery;
  
  // Type-safe config access
  const configWidth = 'width' in config ? config.width : undefined;
  const configHeight = 'height' in config ? config.height : undefined;
  const configPriority = 'priority' in config ? config.priority : false;
  const configQuality = config.quality || quality;

  // Generate fallback based on type
  const generateFallback = () => {
    if (fallbackType === 'gradient') {
      return (
        <div 
          className={cn(
            'w-full h-full flex items-center justify-center text-white',
            className
          )}
          style={{
            background: `linear-gradient(135deg, ${fallbackColors[0]}, ${fallbackColors[1]})`
          }}
        >
          <div className="text-center">
            <div className="text-2xl mb-2">🔧</div>
            <div className="text-sm opacity-80">H2O Plumbing</div>
          </div>
        </div>
      );
    }

    if (fallbackType === 'icon') {
      return (
        <div className={cn(
          'w-full h-full flex items-center justify-center bg-gray-100 text-gray-400',
          className
        )}>
          <svg 
            className="w-16 h-16" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        </div>
      );
    }

    if (fallbackType === 'pattern') {
      return (
        <div 
          className={cn('w-full h-full', className)}
          style={{
            backgroundColor: fallbackColors[0],
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v30H30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
      );
    }
  };

  // Default blur data URL for better loading experience
  const defaultBlurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

  if (imageError) {
    return generateFallback();
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        width={width || configWidth}
        height={height || configHeight}
        fill={fill}
        priority={priority || configPriority}
        quality={configQuality}
        sizes={sizes}
        placeholder={placeholder}
        blurDataURL={blurDataURL || defaultBlurDataURL}
        className={cn(config.className, {
          'opacity-0 transition-opacity duration-300': isLoading,
          'opacity-100': !isLoading
        })}
        onLoad={() => setIsLoading(false)}
        onError={() => setImageError(true)}
      />
      
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* Overlay for hero images */}
      {(overlay || ('overlay' in config ? config.overlay : false)) && (
        <div 
          className="absolute inset-0 bg-black"
          style={{ 
            opacity: (overlayOpacity || ('overlayOpacity' in config ? config.overlayOpacity : 40) || 40) / 100 
          }}
        />
      )}
    </div>
  );
}

// Specific image components for different use cases

export function HeroImage({ src, alt, className = '', ...props }: Omit<OptimizedImageProps, 'treatment'>) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      treatment="hero"
      fill
      priority
      className={cn('absolute inset-0', className)}
      {...props}
    />
  );
}

export function GalleryImage({ src, alt, className = '', ...props }: Omit<OptimizedImageProps, 'treatment'>) {
  return (
    <div className="group relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-200">
      <OptimizedImage
        src={src}
        alt={alt}
        treatment="gallery"
        fill
        className={className}
        {...props}
      />
    </div>
  );
}

export function ThumbnailImage({ src, alt, className = '', ...props }: Omit<OptimizedImageProps, 'treatment'>) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-md bg-gray-200">
      <OptimizedImage
        src={src}
        alt={alt}
        treatment="thumbnail"
        fill
        className={className}
        {...props}
      />
    </div>
  );
}

export function TeamMemberImage({ src, alt, className = '', ...props }: Omit<OptimizedImageProps, 'treatment'>) {
  return (
    <div className="relative w-32 h-32 mx-auto">
      <OptimizedImage
        src={src}
        alt={alt}
        treatment="team"
        fill
        className={className}
        {...props}
      />
    </div>
  );
}

export function ServiceIconImage({ src, alt, className = '', ...props }: Omit<OptimizedImageProps, 'treatment'>) {
  return (
    <div className="relative w-16 h-16">
      <OptimizedImage
        src={src}
        alt={alt}
        treatment="service-icon"
        fill
        className={className}
        {...props}
      />
    </div>
  );
}

// Before/After slider component
interface BeforeAfterImageProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}

export function BeforeAfterImage({ 
  beforeSrc, 
  afterSrc, 
  beforeAlt, 
  afterAlt, 
  className = '' 
}: BeforeAfterImageProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  return (
    <div 
      className={cn('relative aspect-[16/9] overflow-hidden rounded-lg cursor-ew-resize', className)}
      onMouseMove={handleMouseMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
    >
      {/* Before Image */}
      <OptimizedImage
        src={beforeSrc}
        alt={beforeAlt}
        treatment="before-after"
        fill
      />
      
      {/* After Image with clip path */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
      >
        <OptimizedImage
          src={afterSrc}
          alt={afterAlt}
          treatment="before-after"
          fill
        />
      </div>
      
      {/* Slider line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
        After
      </div>
    </div>
  );
}


