"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { promotions, PromotionDefinition, PromotionKey } from '@/config/promotions';

interface PromotionsContextValue {
  get: (key: PromotionKey) => PromotionDefinition | undefined;
  all: PromotionDefinition[];
  active: PromotionDefinition[]; // Non-expired
  expired: PromotionDefinition[];
  overrideVariant?: string; // From query param for experimentation
  assignedVariant?: string; // Persisted bucket variant (simple A/B)
  resolveVariant: (base?: string) => string | undefined; // Compute final variant precedence: override > assigned > base
}

const PromotionsContext = createContext<PromotionsContextValue | null>(null);

function isExpired(p: PromotionDefinition) {
  if (!p.expiresAt) return false;
  return new Date(p.expiresAt).getTime() < Date.now();
}

export const PromotionsProvider: React.FC<{ children: React.ReactNode; experimentVariants?: string[]; storageKey?: string; }>= ({ children, experimentVariants = ['A','B'], storageKey = 'promoAssignedVariant' }) => {
  const [assignedVariant, setAssignedVariant] = useState<string | undefined>(undefined);
  const [overrideVariant, setOverrideVariant] = useState<string | undefined>(undefined);

  // Read query param & assign bucket once
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const override = params.get('promoVariant') || undefined;
    setOverrideVariant(override || undefined);

    if (!override) {
      // Only bucket if no explicit override
      try {
        const existing = window.localStorage.getItem(storageKey) || undefined;
        if (existing) {
          setAssignedVariant(existing);
        } else {
          const bucket = experimentVariants[Math.floor(Math.random() * experimentVariants.length)];
            window.localStorage.setItem(storageKey, bucket);
            setAssignedVariant(bucket);
        }
      } catch {
        // ignore storage errors (private mode etc.)
      }
    }
  }, [experimentVariants, storageKey]);

  const value = useMemo<PromotionsContextValue>(() => {
    const list = Object.values(promotions);
    return {
      get: (key) => promotions[key],
      all: list,
      active: list.filter(p => !isExpired(p)),
      expired: list.filter(p => isExpired(p)),
      overrideVariant,
      assignedVariant,
      resolveVariant: (base) => overrideVariant || assignedVariant || base
    };
  }, [overrideVariant, assignedVariant]);

  return <PromotionsContext.Provider value={value}>{children}</PromotionsContext.Provider>;
};

export function usePromotions() {
  const ctx = useContext(PromotionsContext);
  if (!ctx) throw new Error('usePromotions must be used within PromotionsProvider');
  return ctx;
}


