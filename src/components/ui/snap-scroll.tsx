'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export function SnapScroll() {
  const sectionsRef = useRef<HTMLElement[]>([]);
  const currentSectionRef = useRef(0);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    // Get all snap sections
    const sections = gsap.utils.toArray<HTMLElement>('.snap-section');
    sectionsRef.current = sections;

    if (sections.length === 0) return;

    // Detect if mobile
    const isMobile = () => window.innerWidth < 768;
    
    // Desktop: Wheel-based snap scrolling
    const setupDesktopScroll = () => {
      let animationInProgress = false;

      // Create ScrollTrigger snap points
      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          snap: {
            snapTo: 1,
            duration: { min: 0.2, max: 0.6 },
            delay: 0,
            ease: 'power2.inOut',
          },
          onEnter: () => {
            currentSectionRef.current = index;
            updateNavigationDots(index);
          },
          onEnterBack: () => {
            currentSectionRef.current = index;
            updateNavigationDots(index);
          },
        });
      });

      // Enhanced wheel control with momentum - LESS SENSITIVE
      let lastWheelTime = Date.now();
      let wheelDelta = 0;
      const wheelThreshold = 150; // Higher threshold = less sensitive
      let wheelTimeout: NodeJS.Timeout;

      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        
        if (animationInProgress) return;

        const now = Date.now();
        const timeDiff = now - lastWheelTime;
        
        // Accumulate wheel delta
        wheelDelta += Math.abs(e.deltaY);

        // Reset if too much time passed
        if (timeDiff > 300) {
          wheelDelta = Math.abs(e.deltaY);
        }

        lastWheelTime = now;

        // Clear existing timeout
        if (wheelTimeout) clearTimeout(wheelTimeout);

        // Debounce - wait for scrolling to stop
        wheelTimeout = setTimeout(() => {
          // Only trigger if we've accumulated enough delta
          if (wheelDelta < wheelThreshold) {
            wheelDelta = 0;
            return;
          }

          wheelDelta = 0;
          const direction = e.deltaY > 0 ? 1 : -1;
          const targetSection = currentSectionRef.current + direction;

          if (targetSection >= 0 && targetSection < sections.length) {
            animationInProgress = true;
            currentSectionRef.current = targetSection;
            
            gsap.to(window, {
              scrollTo: { y: sections[targetSection], autoKill: true },
              duration: 1.2,
              ease: 'power2.inOut',
              onComplete: () => {
                animationInProgress = false;
              },
            });

            updateNavigationDots(targetSection);
          }
        }, 50); // Small delay to prevent rapid firing
      };

      // Add wheel listener with passive false for preventDefault
      window.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        window.removeEventListener('wheel', handleWheel);
      };
    };

    // Mobile: Touch-based snap scrolling with native behavior
    const setupMobileScroll = () => {
      // Use CSS snap for mobile (smoother native behavior)
      document.body.style.scrollSnapType = 'y mandatory';
      sections.forEach((section) => {
        section.style.scrollSnapAlign = 'start';
        section.style.scrollSnapStop = 'always';
      });

      // Track section visibility for navigation dots
      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            currentSectionRef.current = index;
            updateNavigationDots(index);
          },
          onEnterBack: () => {
            currentSectionRef.current = index;
            updateNavigationDots(index);
          },
        });
      });

      return () => {
        document.body.style.scrollSnapType = '';
        sections.forEach((section) => {
          section.style.scrollSnapAlign = '';
          section.style.scrollSnapStop = '';
        });
      };
    };

    // Setup appropriate scroll behavior
    const cleanup = isMobile() ? setupMobileScroll() : setupDesktopScroll();

    // Cleanup on unmount
    return () => {
      if (cleanup) cleanup();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}

// Helper to update navigation dots
function updateNavigationDots(index: number) {
  const dots = document.querySelectorAll('.scroll-nav-dot');
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  // Dispatch custom event for other components
  window.dispatchEvent(new CustomEvent('sectionchange', { detail: { index } }));
}

// Scroll Navigation Component
export function ScrollNavigation({ totalSections }: { totalSections: number }) {
  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('.snap-section');
    const target = sections[index];
    if (target) {
      gsap.to(window, {
        scrollTo: { y: target, autoKill: true },
        duration: 1,
        ease: 'power2.inOut',
      });
    }
  };

  return (
    <nav
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3"
      aria-label="Section navigation"
    >
      {Array.from({ length: totalSections }).map((_, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(index)}
          className={`scroll-nav-dot w-3 h-3 rounded-full border-2 border-brand-cyan transition-all duration-300 hover:scale-125 ${
            index === 0 ? 'active' : ''
          }`}
          aria-label={`Go to section ${index + 1}`}
        >
          <span className="sr-only">Section {index + 1}</span>
        </button>
      ))}
    </nav>
  );
}

// Scroll Progress Bar
export function ScrollProgressBar() {
  useEffect(() => {
    const progressBar = document.getElementById('scroll-progress-bar');
    if (!progressBar) return;

    ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const progress = self.progress * 100;
        progressBar.style.width = `${progress}%`;
      },
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
      <div
        id="scroll-progress-bar"
        className="h-full bg-gradient-to-r from-brand-cyan to-brand-turquoise transition-all duration-200"
        style={{ width: '0%' }}
      />
    </div>
  );
}
