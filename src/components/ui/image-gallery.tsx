'use client';

import { useState } from 'react';
import { OptimizedImage, BeforeAfterImage, GalleryImage } from './optimized-image';
import { Dialog, DialogContent, DialogTrigger } from './dialog';
import { cn } from '@/lib/utils';

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    category?: string;
    beforeSrc?: string;
    afterSrc?: string;
    description?: string;
  }>;
  className?: string;
  columns?: 2 | 3 | 4;
  showCategories?: boolean;
}

export function ImageGallery({ 
  images, 
  className = '',
  columns = 3,
  showCategories = true 
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get unique categories
  const uniqueCategories = images.map(img => img.category).filter((cat): cat is string => Boolean(cat));
  const categories = ['all', ...Array.from(new Set(uniqueCategories))];
  
  // Filter images by category
  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const gridClasses = cn(
    'grid gap-4',
    {
      'grid-cols-2': columns === 2,
      'grid-cols-2 md:grid-cols-3': columns === 3,
      'grid-cols-2 md:grid-cols-3 lg:grid-cols-4': columns === 4,
    }
  );

  return (
    <div className={className}>
      {/* Category Filter */}
      {showCategories && categories.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                selectedCategory === category
                  ? 'bg-brand-red text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              {category === 'all' ? 'All Work' : category}
            </button>
          ))}
        </div>
      )}

      {/* Image Grid */}
      <div className={gridClasses}>
        {filteredImages.map((image, index) => (
          <div key={index} className="aspect-square">
            {image.beforeSrc && image.afterSrc ? (
              <BeforeAfterImage
                beforeSrc={image.beforeSrc}
                afterSrc={image.afterSrc}
                alt={image.alt}
                width={400}
                height={400}
                fill
                className="w-full h-full object-cover"
              />
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer">
                    <GalleryImage
                      src={image.src}
                      alt={image.alt}
                      category={image.category}
                      width={400}
                      height={400}
                      fill
                      className="w-full h-full object-cover"
                      onLightboxOpen={() => setSelectedImage(index)}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="relative">
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                    {image.description && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-700">{image.description}</p>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        ))}
      </div>

      {/* No images message */}
      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">No images found for this category.</div>
        </div>
      )}
    </div>
  );
}

// Team Gallery Component
interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
  experience?: string;
}

interface TeamGalleryProps {
  members: TeamMember[];
  className?: string;
}

export function TeamGallery({ members, className = '' }: TeamGalleryProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8', className)}>
      {members.map((member, index) => (
        <div key={index} className="group">
          <div className="relative mb-4">
            <OptimizedImage
              src={member.image}
              alt={`${member.name} - ${member.role}`}
              width={300}
              height={300}
              className="w-full aspect-square object-cover rounded-lg"
              brandOverlay
              hoverLift
            />
            {/* Overlay with info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-6">
              <div className="text-white">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-white/80">{member.role}</p>
                {member.experience && (
                  <p className="text-sm text-white/70 mt-1">{member.experience}</p>
                )}
              </div>
            </div>
          </div>
          
          {/* Member Info */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
            <p className="text-brand-red font-medium">{member.role}</p>
            {member.bio && (
              <p className="text-gray-600 text-sm mt-2">{member.bio}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// Fleet/Truck Gallery
interface VehicleImage {
  src: string;
  alt: string;
  description?: string;
  year?: string;
  type?: string;
}

interface FleetGalleryProps {
  vehicles: VehicleImage[];
  className?: string;
}

export function FleetGallery({ vehicles, className = '' }: FleetGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % vehicles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length);
  };

  return (
    <div className={cn('relative', className)}>
      {/* Main Image */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
        <OptimizedImage
          src={vehicles[currentIndex]?.src || ''}
          alt={vehicles[currentIndex]?.alt || ''}
          width={1200}
          height={675}
          fill
          className="object-cover"
          brandOverlay
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
          aria-label="Previous image"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
          aria-label="Next image"
        >
          →
        </button>

        {/* Image Info Overlay */}
        {vehicles[currentIndex]?.description && (
          <div className="absolute bottom-4 left-4 right-4 bg-black/75 text-white p-4 rounded">
            <p className="font-medium">{vehicles[currentIndex].description}</p>
            {vehicles[currentIndex].year && vehicles[currentIndex].type && (
              <p className="text-white/80 text-sm mt-1">
                {vehicles[currentIndex].year} {vehicles[currentIndex].type}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
        {vehicles.map((vehicle, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'flex-shrink-0 relative w-20 h-14 rounded overflow-hidden border-2 transition-all duration-200',
              index === currentIndex
                ? 'border-brand-red'
                : 'border-transparent hover:border-gray-300'
            )}
          >
            <OptimizedImage
              src={vehicle.src}
              alt={vehicle.alt}
              width={80}
              height={56}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {vehicles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-200',
              index === currentIndex
                ? 'bg-brand-red'
                : 'bg-gray-300 hover:bg-gray-400'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}


