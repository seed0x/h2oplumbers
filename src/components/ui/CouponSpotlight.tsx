"use client";
import React, { useState, useEffect, useRef } from 'react';
import { trackImpression, trackClick, trackCopy, trackExpired } from '@/lib/promo-analytics';
import { MasterButton } from './master-button';
import { Tag, Clock, Copy, Check } from 'lucide-react';
import clsx from 'clsx';

type CouponVariant = 'hero' | 'inline' | 'compact' | 'light';

interface CouponSpotlightProps {
  title: string;
  discount: string; // e.g. "$50 OFF" or "15% OFF"
  description: string;
  ctaText: string;
  ctaLink: string;
  code?: string; // Optional promo code
  expiresAt?: string; // ISO date string for expiration
  validFrom?: string; // Optional ISO date start
  offerId?: string; // Unique ID for structured data / tracking
  category?: string; // Category for SEO metadata
  variant?: CouponVariant;
  className?: string;
  onCopy?: (code: string) => void;
  includeStructuredData?: boolean; // Whether to output JSON-LD Offer schema
  hideIfExpired?: boolean; // Auto-hide instead of showing disabled state
  showExpired?: boolean; // Force show even if expired (overrides hide)
  testGroup?: string; // Forced A/B group label
}

function computeExpirationLabel(expiresAt?: string) {
  if (!expiresAt) return null;
  const end = new Date(expiresAt);
  if (isNaN(end.getTime())) return null;
  const now = new Date();
  const diffMs = end.getTime() - now.getTime();
  if (diffMs <= 0) return 'Expired';
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays >= 2) return `Expires in ${diffDays} days`;
  if (diffDays === 1) return 'Expires tomorrow';
  if (diffHours >= 2) return `Expires in ${diffHours} hours`;
  if (diffHours === 1) return 'Expires in 1 hour';
  if (diffMinutes >= 2) return `Expires in ${diffMinutes} minutes`;
  if (diffMinutes === 1) return 'Expires in 1 minute';
  return 'Expires soon';
}

export const CouponSpotlight: React.FC<CouponSpotlightProps> = ({
  title,
  discount,
  description,
  ctaText,
  ctaLink,
  code,
  expiresAt,
  variant = 'inline',
  className,
  onCopy,
  validFrom,
  offerId,
  category,
  includeStructuredData = true,
  hideIfExpired = true,
  showExpired = false,
  testGroup
}) => {
  const [copied, setCopied] = useState(false);
  const [expirationLabel, setExpirationLabel] = useState<string | null>(() => computeExpirationLabel(expiresAt));
  const intervalRef = useRef<number | null>(null);
  // Live countdown for offers expiring within 48h
  useEffect(() => {
    if (!expiresAt) return;
    const end = new Date(expiresAt);
    if (isNaN(end.getTime())) return;
    const update = () => setExpirationLabel(computeExpirationLabel(expiresAt));
    update();
    const now = new Date();
    const diffMs = end.getTime() - now.getTime();
    // Only run interval updates if within 48h window
    if (diffMs <= 1000 * 60 * 60 * 48 && diffMs > 0) {
      intervalRef.current = window.setInterval(update, 60 * 1000); // update every minute
    }
    return () => { if (intervalRef.current) window.clearInterval(intervalRef.current); };
  }, [expiresAt]);
  const isExpired = expirationLabel === 'Expired';

  // Basic query param override for very lightweight A/B (e.g., ?promoVariant=light)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const forcedVariant = params.get('promoVariant');
    if (forcedVariant && ['hero','inline','compact','light'].includes(forcedVariant)) {
      // @ts-expect-error runtime override for experimentation
      variant = forcedVariant;
    }
  }, []);

  const wrapperClasses = clsx(
    'relative overflow-hidden rounded-xl my-8 ring-1 ring-inset backdrop-blur-sm',
    'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-white focus-within:ring-red-500 transition-shadow',
    {
      // Hero variant: large presence (brand navy base with subtle red accents)
      'p-8 md:p-10 bg-gradient-to-br from-[hsl(var(--brand-navy))] via-[#182334] to-[#1f2f45] text-white shadow-2xl': variant === 'hero' && !isExpired,
      'p-8 md:p-10 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 text-white shadow-inner': variant === 'hero' && isExpired,
      // Inline variant: medium card
      'p-6 bg-gradient-to-r from-[hsl(var(--brand-navy))] to-[#1f2f45] text-white shadow-lg': variant === 'inline' && !isExpired,
      'p-6 bg-gradient-to-r from-gray-600 to-gray-700 text-white/80 shadow-inner': variant === 'inline' && isExpired,
      // Compact variant: banner style
      'p-4 bg-gradient-to-r from-[hsl(var(--brand-navy))] to-[#24364f] text-white shadow-md flex items-center': variant === 'compact' && !isExpired,
      'p-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white/80 shadow-inner flex items-center': variant === 'compact' && isExpired
      ,
      // Light variant: white surface emphasizing discount badge
      'p-6 md:p-8 bg-white border border-gray-200 shadow-sm text-gray-900': variant === 'light' && !isExpired,
      'p-6 md:p-8 bg-gray-100 border border-gray-200 text-gray-500': variant === 'light' && isExpired
    },
    className
  );

  // Intersection Observer for impression tracking
  const sectionRef = useRef<HTMLElement | null>(null);
  const impressionSentRef = useRef(false);
  useEffect(() => {
    if (!sectionRef.current || impressionSentRef.current || isExpired) return;
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting && !impressionSentRef.current) {
            impressionSentRef.current = true;
            trackImpression({ offerId, code, category, variant, meta: { component: 'CouponSpotlight', testGroup } });
            observer.disconnect();
          }
        }
      },
      { root: null, threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [offerId, code, category, variant, isExpired, testGroup]);

  // Track expiration event once when it becomes expired
  const expiredTrackedRef = useRef(false);
  useEffect(() => {
    if (isExpired && !expiredTrackedRef.current) {
      expiredTrackedRef.current = true;
      trackExpired({ offerId, code, category, variant, meta: { component: 'CouponSpotlight' } });
    }
  }, [isExpired, offerId, code, category, variant]);

  const discountClasses = clsx('font-extrabold tracking-tight drop-shadow-sm', {
    'text-brand-cyan': !isExpired,
    'text-gray-400': isExpired,
    'text-5xl md:text-6xl': variant === 'hero',
    'text-4xl': variant === 'inline',
    'text-2xl mr-4': variant === 'compact'
  });

  const titleClasses = clsx('font-bold', {
    'text-2xl md:text-3xl': variant === 'hero',
    'text-2xl': variant === 'inline',
    'text-lg': variant === 'compact',
    'text-xl md:text-2xl': variant === 'light'
  });

  const descriptionClasses = clsx('opacity-90', {
    'text-lg mt-4 max-w-2xl': variant === 'hero',
    'text-sm mt-2': variant === 'inline',
    'hidden md:inline text-xs': variant === 'compact',
    'text-sm mt-3 max-w-xl': variant === 'light'
  });

  const handleCopy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      onCopy?.(code);
      trackCopy({ offerId, code, category, variant, meta: { component: 'CouponSpotlight' } });
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // Silently fail
    }
  };

  const handlePrimaryClick = () => {
    if (isExpired) return;
    trackClick({ offerId, code, category, variant, meta: { component: 'CouponSpotlight', ctaText } });
  };

  if (isExpired && hideIfExpired && !showExpired) {
    return null;
  }

  return (
    <section
      aria-label={title}
      className={wrapperClasses}
      role="region"
      ref={sectionRef}
    >
      {/* Decorative gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        {/* Brand accent glows */}
        {variant !== 'light' && <>
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-24 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_65%)]" />
        </>}
      </div>
      <div className={clsx('relative z-10', { 'flex items-center w-full': variant === 'compact' })}>
        <div className={clsx('flex items-start', { 'items-center': variant === 'compact' })}>
          <div className={clsx('shrink-0 rounded-full p-3 mr-4 ring-1', {
            'bg-white/15 backdrop-blur ring-white/25': variant !== 'light',
            'bg-brand-cyan/10 ring-brand-cyan/20': variant === 'light' && !isExpired,
            'bg-gray-200 ring-gray-300': variant === 'light' && isExpired,
            'p-4 mr-6': variant === 'hero',
            'p-2 mr-3': variant === 'compact'
          })}>
            <Tag className={clsx({
              'text-white': variant !== 'light',
              'text-brand-cyan': variant === 'light' && !isExpired,
              'text-gray-500': variant === 'light' && isExpired,
              'h-10 w-10': variant === 'hero',
              'h-8 w-8': variant === 'inline',
              'h-5 w-5': variant === 'compact'
            })} />
          </div>
          <div>
            <h3 className={titleClasses} data-offer-id={offerId}>{title}</h3>
            <p className={discountClasses} aria-label={`Discount ${discount}`}>
              <span className="sr-only">Discount:&nbsp;</span>{discount}
            </p>
            <p className={descriptionClasses}>{description}</p>
            {expirationLabel && (
              <div className={clsx(
                'mt-3 inline-flex items-center gap-2 text-[10px] font-medium tracking-wide px-3 py-1 rounded-full ring-1 ring-inset',
                isExpired && variant !== 'light' && 'bg-white/5 text-white/60 ring-white/10',
                !isExpired && variant !== 'light' && 'text-white/90 bg-white/10 ring-white/20',
                variant === 'light' && !isExpired && 'bg-brand-cyan/10 text-brand-cyan ring-brand-cyan/20',
                variant === 'light' && isExpired && 'bg-gray-200 text-gray-500 ring-gray-300'
              )}>
                <Clock className="h-3 w-3" /> {expirationLabel}
              </div>
            )}
          </div>
        </div>
        <div className={clsx('mt-6 flex flex-col gap-3', {
          'md:ml-auto md:items-end md:justify-center md:flex-row md:gap-4 mt-8': variant === 'hero',
          'ml-auto md:flex-row md:items-center md:gap-4 md:ml-8': variant === 'inline',
          'ml-auto flex-row items-center gap-2 mt-0 pl-4': variant === 'compact'
        })}>
          {code && !isExpired && (
            <MasterButton
              type="button"
              variant="outline"
              aria-label={copied ? 'Code copied to clipboard' : `Copy coupon code ${code}`}
              onClick={handleCopy}
              className={clsx('relative font-mono text-sm tracking-wide', {
                'bg-white/15 text-white hover:bg-white/25 border-white/30': variant !== 'light',
                'bg-primary-50 text-primary-600 hover:bg-primary-100 border border-primary-200': variant === 'light',
                'h-10': variant !== 'compact',
                'h-8 px-3 py-1': variant === 'compact'
              })}
            >
              <span className="flex items-center gap-2">
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copied' : code}
              </span>
            </MasterButton>
          )}
          <MasterButton
            asChild={!isExpired}
            disabled={isExpired}
            aria-label={isExpired ? 'Offer expired' : ctaText}
            className={clsx('font-semibold shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2', {
              'focus-visible:ring-offset-[hsl(var(--brand-navy))] focus-visible:ring-red-500': variant !== 'light',
              'focus-visible:ring-offset-white focus-visible:ring-red-500': variant === 'light',
              'bg-primary-500 text-white hover:bg-primary-600 border-0': !isExpired && variant !== 'light',
              'bg-primary-500 text-white hover:bg-primary-600 border border-primary-500': !isExpired && variant === 'light',
              'bg-white/10 text-white/60 border-0 cursor-not-allowed': isExpired && variant !== 'light',
              'bg-gray-300 text-gray-500 cursor-not-allowed': isExpired && variant === 'light',
              'h-12 px-8 text-lg': variant === 'hero',
              'h-11 px-6': variant === 'inline' || variant === 'light',
              'h-9 px-4 text-sm': variant === 'compact'
            })}
          >
            {isExpired ? <span>Offer Ended</span> : <a href={ctaLink} onClick={handlePrimaryClick}>{ctaText}</a>}
          </MasterButton>
        </div>
      </div>
      {includeStructuredData && !isExpired && (
        <script
          type="application/ld+json"
          // We intentionally keep this simple; price not applicable so we omit it
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Offer',
              sku: offerId || code || undefined,
              category: category || undefined,
              name: `${title} - ${discount}`,
              description,
              url: ctaLink,
              price: '0',
              priceCurrency: 'USD',
              availabilityStarts: validFrom || undefined,
              availabilityEnds: expiresAt || undefined,
              eligibleRegion: 'US-WA',
              // Provide a basic identifier for tracking
              identifier: offerId || undefined,
            })
          }}
        />
      )}
    </section>
  );
};






