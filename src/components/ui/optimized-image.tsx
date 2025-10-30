'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  fill?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  // Brand integration features
  brandOverlay?: boolean;
  hoverLift?: boolean;
  blurUp?: boolean;
  watermark?: boolean;
  loading?: 'eager' | 'lazy';
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 85,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  fill = false,
  style,
  onClick,
  brandOverlay = false,
  hoverLift = false,
  blurUp = true,
  watermark = false,
  loading = 'lazy',
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  // Generate WebP source with fallback
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  const containerClasses = cn(
    'relative overflow-hidden',
    {
      'image-lift': hoverLift,
      'image-brand-overlay': brandOverlay,
      'cursor-pointer': onClick,
    },
    className
  );

  const imageClasses = cn(
    'transition-all duration-300',
    {
      'blur-up': blurUp && !isLoaded,
      'loaded': isLoaded,
    }
  );

  // Watermark component
  const Watermark = () => (
    watermark ? (
      <div className="absolute bottom-2 right-2 opacity-30">
        <div className="bg-white/90 rounded px-2 py-1 text-xs text-brand-gray font-medium">
          H2O Plumbing
        </div>
      </div>
    ) : null
  );

  // Error fallback
  if (error) {
    return (
      <div className={cn(containerClasses, 'bg-gray-200 flex items-center justify-center')}>
        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    );
  }

  return (
    <div className={containerClasses} onClick={onClick} style={style}>
      {/* Skeleton loader */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse">
          <div className="w-full h-full bg-gray-300/50"></div>
        </div>
      )}

      {/* Main image with WebP support */}
      <picture>
        <source 
          srcSet={webpSrc}
          type="image/webp"
          sizes={sizes}
        />
        {fill ? (
          <Image
            ref={imageRef}
            src={src}
            alt={alt}
            fill
            priority={priority}
            quality={quality}
            sizes={sizes}
            className={imageClasses}
            onLoad={handleLoad}
            onError={handleError}
            {...props}
          />
        ) : (
          <Image
            ref={imageRef}
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            quality={quality}
            sizes={sizes}
            className={imageClasses}
            onLoad={handleLoad}
            onError={handleError}
            {...props}
          />
        )}
      </picture>

      <Watermark />
    </div>
  );
}

// Specialized components for different use cases

// Team member photo with overlay
export function TeamMemberImage({
  src,
  alt,
  name,
  role,
  ...props
}: OptimizedImageProps & { name?: string; role?: string }) {
  return (
    <div className="group relative">
      <OptimizedImage
        src={src}
        alt={alt}
        brandOverlay
        hoverLift
        className="rounded-lg"
        {...props}
      />
      {(name || role) && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {name && <div className="text-white font-semibold">{name}</div>}
          {role && <div className="text-white/80 text-sm">{role}</div>}
        </div>
      )}
    </div>
  );
}

// Before/After comparison image
export function BeforeAfterImage({
  beforeSrc,
  afterSrc,
  alt,
  ...props
}: Omit<OptimizedImageProps, 'src'> & { beforeSrc: string; afterSrc: string }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="relative group cursor-pointer" onClick={() => setShowAfter(!showAfter)}>
      <OptimizedImage
        src={showAfter ? afterSrc : beforeSrc}
        alt={alt}
        watermark
        className="rounded-lg"
        {...props}
      />
      <div className="absolute top-2 left-2 bg-black/75 text-white px-2 py-1 rounded text-sm">
        {showAfter ? 'After' : 'Before'}
      </div>
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
        <div className="bg-white text-brand-gray px-4 py-2 rounded-full font-medium">
          Click to see {showAfter ? 'Before' : 'After'}
        </div>
      </div>
    </div>
  );
}

// Gallery image with lightbox trigger
export function GalleryImage({
  src,
  alt,
  onLightboxOpen,
  category,
  ...props
}: OptimizedImageProps & { onLightboxOpen?: () => void; category?: string }) {
  return (
    <div className="group relative cursor-pointer" onClick={onLightboxOpen}>
      <OptimizedImage
        src={src}
        alt={alt}
        brandOverlay
        hoverLift
        watermark
        className="rounded-lg"
        {...props}
      />
      {category && (
        <div className="absolute top-2 right-2 bg-brand-cyan text-white px-2 py-1 rounded text-xs font-medium">
          {category}
        </div>
      )}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
        <div className="text-white text-2xl">🔍</div>
      </div>
    </div>
  );
}

// Generate blur data URL for placeholder
export function generateBlurDataURL(width: number, height: number): string {
  const canvas = typeof window !== 'undefined' ? document.createElement('canvas') : null
  if (!canvas) {
    return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
  }
  
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.fillStyle = '#f3f4f6'
    ctx.fillRect(0, 0, width, height)
    return canvas.toDataURL('image/jpeg', 0.1)
  }
  
  return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
}


