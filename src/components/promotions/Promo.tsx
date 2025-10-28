"use client";
import React from 'react';
import { usePromotions } from '@/context/PromotionsContext';
import { CouponSpotlight } from '@/components/ui/CouponSpotlight';
import type { PromotionKey } from '@/config/promotions';

// Lightweight embeddable promo component (for MDX / CMS usage)
// Usage: <Promo id="waterHeaterHero" variantOverride="compact" hideIfExpired />
// Variant resolution precedence: explicit prop > context.resolveVariant(promotion.variant)

interface PromoProps {
  id: PromotionKey;
  variantOverride?: 'hero' | 'inline' | 'compact' | 'light';
  hideIfExpired?: boolean;
  showExpired?: boolean;
  className?: string;
  includeStructuredData?: boolean;
}

export const Promo: React.FC<PromoProps> = ({ id, variantOverride, hideIfExpired = true, showExpired = false, className, includeStructuredData }) => {
  const { get, resolveVariant } = usePromotions();
  const promo = get(id);
  if (!promo) return null;
  const resolved = resolveVariant(promo.variant);
  const finalVariant = (variantOverride || resolved) as 'hero' | 'inline' | 'compact' | 'light' | undefined;

  return (
    <CouponSpotlight
      title={promo.title}
      discount={promo.discount}
      description={promo.description}
      ctaText={promo.ctaText}
      ctaLink={promo.ctaLink}
      code={promo.code}
      expiresAt={promo.expiresAt}
      validFrom={promo.validFrom}
      offerId={promo.id}
      category={promo.category}
      variant={finalVariant}
      hideIfExpired={hideIfExpired}
      showExpired={showExpired}
      className={className}
      includeStructuredData={includeStructuredData ?? promo.includeStructuredData ?? true}
    />
  );
};


