'use client';

import { useState, useEffect, ReactNode } from 'react';

interface FloatingElementsManagerProps {
  children: {
    discountBanner?: ReactNode;
    socialProof?: ReactNode;
    floatingBook?: ReactNode;
    urgency?: ReactNode;
    recentlyViewed?: ReactNode;
    backToTop?: ReactNode;
  };
}

export function FloatingElementsManager({ children }: FloatingElementsManagerProps) {
  const [scrollY, setScrollY] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setDocumentHeight(document.documentElement.scrollHeight - window.innerHeight);
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollPercent = documentHeight > 0 ? (scrollY / documentHeight) * 100 : 0;

  // Smart visibility logic - show max 2-3 elements at once
  const visibility = {
    // Always show discount banner at top
    discountBanner: scrollY < 200,
    
    // Show social proof after hero section
    socialProof: scrollY > 300 && scrollY < 2000,
    
    // Show floating book button after services section
    floatingBook: scrollY > 600,
    
    // Show urgency indicators in middle of page
    urgency: scrollPercent > 20 && scrollPercent < 70,
    
    // Show recently viewed near bottom
    recentlyViewed: scrollPercent > 50,
    
    // Show back to top button after scrolling down
    backToTop: scrollY > 800,
  };

  return (
    <>
      {visibility.discountBanner && children.discountBanner}
      {visibility.socialProof && children.socialProof}
      {visibility.floatingBook && children.floatingBook}
      {visibility.urgency && children.urgency}
      {visibility.recentlyViewed && children.recentlyViewed}
      {visibility.backToTop && children.backToTop}
    </>
  );
}
