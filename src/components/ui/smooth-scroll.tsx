'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function SmoothScroll() {
  useEffect(() => {
    // Respect reduced motion preferences
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Wheel smoothing only on desktop; mobile uses native scroll
      smoothWheel: true,
    });

    // Expose globally so other components (e.g., SnapScroll) can use it
    (window as any).__lenis = lenis;

    // Sync GSAP ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    // Use requestAnimationFrame directly for better performance
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Initialize basic reveal/parallax hooks (progressive enhancement)
    const initAnimations = () => {
      // Fade in elements on scroll
      const fadeElements = document.querySelectorAll('[data-fade]');
      fadeElements.forEach((el) => {
        gsap.fromTo(el,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });

      // Subtle parallax elements
      const parallaxElements = document.querySelectorAll('[data-speed]');
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '0.5');
        gsap.to(el, {
          y: () => window.innerHeight * speed * -0.3,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        });
      });

      ScrollTrigger.refresh();
    };

    setTimeout(initAnimations, 100);

    return () => {
      lenis.destroy();
      if ((window as any).__lenis === lenis) {
        (window as any).__lenis = undefined;
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
