'use client';

import { useState, useEffect } from 'react';

export const useExitIntent = (onExitIntent: () => void) => {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (triggered) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // If the mouse is leaving the top of the viewport, trigger the exit intent
      if (e.clientY <= 0) {
        onExitIntent();
        setTriggered(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [onExitIntent, triggered]);
};
