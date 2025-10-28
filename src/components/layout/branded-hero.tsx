import React from 'react';
import Image from 'next/image';
import { MasterButton } from '@/components/ui/master-button';
import Link from 'next/link';

interface BrandedHeroProps {
  title: string;
  description: string;
  backgroundImage: string;
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction: {
    text: string;
    href: string;
  };
}

export const BrandedHero: React.FC<BrandedHeroProps> = ({ 
  title, 
  description, 
  backgroundImage,
  primaryAction,
  secondaryAction
}) => {
  return (
    <section className="relative text-white py-24 overflow-hidden">
      {/* Optimized background image using Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-900 bg-opacity-70" aria-hidden="true" />
      </div>
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-10 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryAction.href} passHref>
              <MasterButton variant="primary" size="xl">
                {primaryAction.text}
              </MasterButton>
            </Link>
            <Link href={secondaryAction.href} passHref>
              <MasterButton variant="outline" size="xl">
                {secondaryAction.text}
              </MasterButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};



