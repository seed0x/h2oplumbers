'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

export function MotionScrollWrapper({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Create parallax effects for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 1]);

  return (
    <div ref={ref} className="relative">
      <motion.div
        style={{
          y: y1,
          scale,
          opacity,
        }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}

export function SectionMotion({
  children,
  direction = 'up',
}: {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const transforms = {
    up: useTransform(scrollYProgress, [0, 1], [100, -100]),
    down: useTransform(scrollYProgress, [0, 1], [-100, 100]),
    left: useTransform(scrollYProgress, [0, 1], [100, -100]),
    right: useTransform(scrollYProgress, [0, 1], [-100, 100]),
  };

  const y = direction === 'up' || direction === 'down' ? transforms[direction] : 0;
  const x = direction === 'left' || direction === 'right' ? transforms[direction] : 0;
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{
        y: direction === 'up' || direction === 'down' ? y : undefined,
        x: direction === 'left' || direction === 'right' ? x : undefined,
        opacity,
        scale,
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
