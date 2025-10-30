'use client';

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SectionAnimationProps {
  children: ReactNode;
  animationType?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale' | 'reveal';
  delay?: number;
  duration?: number;
}

export function SectionAnimation({
  children,
  animationType = 'fade',
  delay = 0,
  duration = 1,
}: SectionAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    // Initial states based on animation type
    const initialStates: Record<string, gsap.TweenVars> = {
      fade: { opacity: 0 },
      'slide-up': { opacity: 0, y: 60 },
      'slide-left': { opacity: 0, x: 60 },
      'slide-right': { opacity: 0, x: -60 },
      scale: { opacity: 0, scale: 0.9 },
      reveal: { opacity: 0, y: 40, rotateX: -15 },
    };

    // Final states
    const finalStates: Record<string, gsap.TweenVars> = {
      fade: { opacity: 1 },
      'slide-up': { opacity: 1, y: 0 },
      'slide-left': { opacity: 1, x: 0 },
      'slide-right': { opacity: 1, x: 0 },
      scale: { opacity: 1, scale: 1 },
      reveal: { opacity: 1, y: 0, rotateX: 0 },
    };

    // Set initial state
    gsap.set(element, initialStates[animationType]);

    // Create ScrollTrigger animation with better easing
    const animation = gsap.to(element, {
      ...finalStates[animationType],
      duration: duration * 1.2, // Slightly longer for premium feel
      delay,
      ease: 'power4.out', // Smoother, more premium easing
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'top 15%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      animation.kill();
    };
  }, [animationType, delay, duration]);

  return <div ref={elementRef}>{children}</div>;
}

// Staggered children animation
interface StaggerAnimationProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerAnimation({ children, staggerDelay = 0.1, className }: StaggerAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.children;

    // Set initial state for all children
    gsap.set(elements, { opacity: 0, y: 40 });

    // Create staggered animation with premium easing
    const animation = gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: staggerDelay,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      animation.kill();
    };
  }, [staggerDelay]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

// Parallax effect component
interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function Parallax({ children, speed = 0.5, className }: ParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    gsap.to(element, {
      y: () => -window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, [speed]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

// Scroll-triggered counter animation
interface CounterProps {
  endValue: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({ endValue, duration = 2, prefix = '', suffix = '', className }: CounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!counterRef.current) return;

    const element = counterRef.current;
    const obj = { value: 0 };

    const animation = gsap.to(obj, {
      value: endValue,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reset',
      },
      onUpdate: () => {
        element.textContent = `${prefix}${Math.round(obj.value)}${suffix}`;
      },
    });

    return () => {
      animation.kill();
    };
  }, [endValue, duration, prefix, suffix]);

  return <span ref={counterRef} className={className}>{`${prefix}0${suffix}`}</span>;
}

// CTA pulse animation for conversion elements
export function PulsingCTA({ children, className }: { children: ReactNode; className?: string }) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    // Create subtle breathing animation
    const animation = gsap.to(elementRef.current, {
      scale: 1.02,
      duration: 2,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
