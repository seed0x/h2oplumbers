'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { useImageOptimization } from './performance-optimizations'

interface SmartImageProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
  fill?: boolean
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
}

export function SmartImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  fill = false,
  sizes,
  quality,
  placeholder = 'blur',
  blurDataURL,
  onLoad,
  onError,
  ...props
}: SmartImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)
  const { isSlowConnection, getImageQuality, getImageSizes } = useImageOptimization()

  // Auto-generate blur placeholder for better UX
  const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdAB//2Q=='

  const optimizedQuality = getImageQuality(quality || 85)
  const optimizedSizes = sizes || getImageSizes(priority)

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    onError?.()
  }

  // Add loading skeleton for better perceived performance
  const LoadingSkeleton = () => (
    <div 
      className={`animate-pulse bg-gray-200 ${fill ? 'absolute inset-0' : ''}`}
      style={!fill ? { width, height } : undefined}
    >
      <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
    </div>
  )

  // Error fallback
  if (hasError) {
    return (
      <div 
        className={`bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 ${className} ${fill ? 'absolute inset-0' : ''}`}
        style={!fill ? { width, height } : undefined}
      >
        <div className="text-center">
          <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <p className="text-xs">Image unavailable</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${fill ? '' : 'inline-block'}`}>
      {!isLoaded && <LoadingSkeleton />}
      
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        priority={priority}
        quality={optimizedQuality}
        sizes={optimizedSizes}
        placeholder={placeholder}
        blurDataURL={blurDataURL || defaultBlurDataURL}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
        {...props}
      />
      
      {/* Progressive enhancement for slow connections */}
      {isSlowConnection && !isLoaded && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="animate-spin w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full mx-auto mb-2"></div>
            <p className="text-xs">Loading...</p>
          </div>
        </div>
      )}
    </div>
  )
}

// Specialized components for common use cases

export function HeroImage(props: Omit<SmartImageProps, 'priority'>) {
  return <SmartImage {...props} priority={true} quality={90} />
}

export function LazyImage(props: SmartImageProps) {
  return <SmartImage {...props} priority={false} />
}

export function ThumbnailImage(props: SmartImageProps) {
  return <SmartImage {...props} priority={false} quality={75} />
}


