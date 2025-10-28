'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface WatermarkedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  watermarkPosition?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'center';
  watermarkOpacity?: number;
  watermarkSize?: 'sm' | 'md' | 'lg';
}

export function WatermarkedImage({
  src,
  alt,
  width,
  height,
  className = '',
  fill = false,
  priority = false,
  watermarkPosition = 'bottom-right',
  watermarkOpacity = 0.7,
  watermarkSize = 'md'
}: WatermarkedImageProps) {
  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4', 
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  };

  const sizeClasses = {
    sm: 'w-16 h-5',
    md: 'w-20 h-6', 
    lg: 'w-24 h-8'
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        className="object-cover w-full h-full"
      />
      
      {/* Watermark */}
      <div 
        className={cn(
          'absolute z-10 flex items-center justify-center',
          positionClasses[watermarkPosition]
        )}
        style={{ opacity: watermarkOpacity }}
      >
        <div className="bg-white bg-opacity-90 rounded px-2 py-1 shadow-sm">
          <Image
            src="/images/all-county-plumbing-logo.png"
            alt="H2O Plumbing"
            width={sizeClasses[watermarkSize] === 'w-16 h-5' ? 64 : sizeClasses[watermarkSize] === 'w-20 h-6' ? 80 : 96}
            height={sizeClasses[watermarkSize] === 'w-16 h-5' ? 20 : sizeClasses[watermarkSize] === 'w-20 h-6' ? 24 : 32}
            className={cn('object-contain', sizeClasses[watermarkSize])}
          />
        </div>
      </div>
    </div>
  );
}

// Text-based watermark alternative
interface TextWatermarkProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  watermarkText?: string;
  watermarkPosition?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'center';
  watermarkOpacity?: number;
}

export function TextWatermarkedImage({
  src,
  alt,
  width,
  height,
  className = '',
  fill = false,
  priority = false,
  watermarkText = 'H2O Plumbing',
  watermarkPosition = 'bottom-right',
  watermarkOpacity = 0.8
}: TextWatermarkProps) {
  const positionClasses = {
    'bottom-right': 'bottom-2 right-2',
    'bottom-left': 'bottom-2 left-2', 
    'top-right': 'top-2 right-2',
    'top-left': 'top-2 left-2',
    'center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        className="object-cover w-full h-full"
      />
      
      {/* Text Watermark */}
      <div 
        className={cn(
          'absolute z-10 text-white text-sm font-semibold px-2 py-1 bg-black bg-opacity-60 rounded',
          positionClasses[watermarkPosition]
        )}
        style={{ opacity: watermarkOpacity }}
      >
        {watermarkText}
      </div>
    </div>
  );
}


