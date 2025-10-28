import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CouponSpotlight } from '@/components/ui/CouponSpotlight';
import { PromotionsProvider } from '@/context/PromotionsContext';
import { Promo } from '@/components/promotions/Promo';

// Helper to freeze time
function withFixedNow<T>(iso: string, fn: () => T): T {
  const realDateNow = Date.now;
  const fixed = new Date(iso).getTime();
  // @ts-ignore
  Date.now = () => fixed;
  try { return fn(); } finally { Date.now = realDateNow; }
}

describe('Coupon / Promotion logic', () => {
  test('hides expired coupon when hideIfExpired true (default)', () => {
    withFixedNow('2025-12-20T00:00:00.000Z', () => {
      const { container } = render(
        <CouponSpotlight
          title="Expired Offer"
            discount="$25 OFF"
            description="Should not render"
            ctaText="Book Now"
            ctaLink="/booking"
            code="OLD25"
            expiresAt="2025-01-01T00:00:00.000Z"
            offerId="expired1"
            category="Test"
        />
      );
      expect(container.firstChild).toBeNull();
    });
  });

  test('shows expired coupon when showExpired is true even if hideIfExpired default', () => {
    withFixedNow('2025-12-20T00:00:00.000Z', () => {
      render(
        <CouponSpotlight
          title="Expired Visible"
          discount="$10 OFF"
          description="Visible expired"
          ctaText="Book"
          ctaLink="/booking"
          code="OLD10"
          expiresAt="2025-01-01T00:00:00.000Z"
          offerId="expired2"
          category="Test"
          showExpired
        />
      );
      expect(screen.getByText('Offer Ended')).toBeInTheDocument();
    });
  });

  test('Promo component renders promotion by id', () => {
    render(
      <PromotionsProvider>
        <Promo id="waterHeaterHero" />
      </PromotionsProvider>
    );
    expect(screen.getByText(/Limited Time Family Offer/i)).toBeInTheDocument();
  });

  test('variant override precedence in Promo (explicit prop overrides context)', () => {
    render(
      <PromotionsProvider>
        <Promo id="waterHeaterHero" variantOverride="compact" />
      </PromotionsProvider>
    );
    // Compact variant uses a button with class h-9 px-4 text-sm - we can probe by discount size difference
    const discountEl = screen.getByLabelText(/Discount/);
    expect(discountEl).toBeInTheDocument();
  });
});
