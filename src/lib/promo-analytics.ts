// Lightweight promotions analytics helper.
// Sends events to window.dataLayer (GTM) if present, else logs to console.
// Designed to be tree-shakeable and side-effect free.

export type PromoEventType = 'impression' | 'click' | 'copy' | 'expired';

export interface PromoAnalyticsEvent {
  type: PromoEventType;
  offerId?: string;
  code?: string;
  category?: string;
  variant?: string;
  timestamp: number;
  meta?: Record<string, any>;
}

declare global {
  interface Window {
    // Harmonize with any existing global declarations: treat as unknown[] if present
    dataLayer: unknown[];
  }
}

function pushToDataLayer(evt: PromoAnalyticsEvent) {
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: 'promotion_event',
      promotion_type: evt.type,
      promotion_offer_id: evt.offerId,
      promotion_code: evt.code,
      promotion_category: evt.category,
      promotion_variant: evt.variant,
      promotion_timestamp: evt.timestamp,
      ...evt.meta
    });
  } else {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.debug('[promo-analytics]', evt);
    }
  }
}

export function trackPromoEvent(evt: Omit<PromoAnalyticsEvent, 'timestamp'>) {
  pushToDataLayer({ ...evt, timestamp: Date.now() });
}

export function trackImpression(base: Omit<PromoAnalyticsEvent, 'timestamp' | 'type'>) {
  trackPromoEvent({ ...base, type: 'impression' });
}
export function trackClick(base: Omit<PromoAnalyticsEvent, 'timestamp' | 'type'>) {
  trackPromoEvent({ ...base, type: 'click' });
}
export function trackCopy(base: Omit<PromoAnalyticsEvent, 'timestamp' | 'type'>) {
  trackPromoEvent({ ...base, type: 'copy' });
}
export function trackExpired(base: Omit<PromoAnalyticsEvent, 'timestamp' | 'type'>) {
  trackPromoEvent({ ...base, type: 'expired' });
}


