"use client";
import Image from 'next/image';
import React from 'react';

/**
 * TeamHeroImage
 * Positioned decorative image for the hero. Place a background-removed PNG at /public/images/team-hero.png
 * (Recommended ~900-1100px wide, transparent background). Falls back to original photo if transparent version
 * not yet provided.
 */
export function TeamHeroImage() {
  return (
    <div className="hero-team-image" aria-hidden="true">
      <Image 
        src="/images/team-hero.png" 
        alt="All County Plumbing team" 
        width={900} 
        height={900} 
        priority 
        className="team-cutout"
        onError={(e) => {
          // Fallback to original photo if cutout not present yet
          const target = e.currentTarget as HTMLImageElement;
          if (!target.dataset.fallback) {
            target.src = '/images/team-original.jpg';
            target.dataset.fallback = 'true';
            target.classList.add('team-fallback');
          }
        }}
      />
    </div>
  );
}
