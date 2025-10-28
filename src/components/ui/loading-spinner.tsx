'use client';

import { LogoLoader, LogoIcon } from './logo';
import { LogoIconSvg } from './svg-logo';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'logo' | 'minimal';
  className?: string;
  text?: string;
}

export function LoadingSpinner({ 
  size = 'md', 
  variant = 'default',
  className = '',
  text = 'Loading...'
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  if (variant === 'logo') {
    return (
      <div className={cn('flex flex-col items-center justify-center space-y-4', className)}>
        <LogoLoader size={size} />
        {text && (
          <p className="text-brand-gray text-sm animate-pulse">{text}</p>
        )}
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className={cn('flex items-center justify-center', className)}>
        <div className={cn(
          'spinner-brand',
          sizeClasses[size]
        )} />
      </div>
    );
  }

  return (
    <div className={cn('flex flex-col items-center justify-center space-y-4', className)}>
      {/* Brand-colored spinner */}
      <div className="relative">
        <div className={cn(
          'spinner-brand',
          sizeClasses[size]
        )} />
        {/* Center logo icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <LogoIconSvg size={size === 'sm' ? 16 : size === 'md' ? 20 : 32} variant="icon" />
        </div>
      </div>
      
      {text && (
        <p className="text-brand-gray text-sm animate-pulse">{text}</p>
      )}
    </div>
  );
}

// Page loading component
export function PageLoader({ message = 'Loading page...' }: { message?: string }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner variant="logo" size="lg" text={message} />
      </div>
    </div>
  );
}

// Skeleton loaders with brand integration
export function ContentSkeleton({ lines = 3, className = '' }: { lines?: number; className?: string }) {
  return (
    <div className={cn('animate-pulse space-y-4', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-4 bg-gray-200 rounded w-full" />
      ))}
    </div>
  );
}

export function ImageSkeleton({ aspectRatio = 'square', className = '' }: { 
  aspectRatio?: 'square' | 'video' | 'portrait'; 
  className?: string; 
}) {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]'
  };

  return (
    <div className={cn(
      'bg-gray-200 rounded-lg animate-pulse flex items-center justify-center',
      aspectClasses[aspectRatio],
      className
    )}>
      <LogoIconSvg size={48} variant="monochrome" className="opacity-20" />
    </div>
  );
}

export function CardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={cn('bg-white rounded-lg shadow p-6 animate-pulse', className)}>
      <div className="space-y-4">
        <ImageSkeleton aspectRatio="video" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>
        <ContentSkeleton lines={2} />
      </div>
    </div>
  );
}
