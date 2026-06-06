'use client';
import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Moves its children vertically as the section scrolls through the viewport,
 * creating a parallax/depth effect. Use for background layers.
 */
export function Parallax({ children, speed = 60, className = '' }: { children: ReactNode; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return (
    <div ref={ref} className={className} style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <motion.div style={{ y, position: 'absolute', inset: '-15% 0' }}>
        {children}
      </motion.div>
    </div>
  );
}
