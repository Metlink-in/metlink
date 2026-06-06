'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Dir = 'up' | 'down' | 'left' | 'right';

export function FadeIn({ children, delay = 0, y = 24, direction, distance = 48, className = '' }: { children: ReactNode, delay?: number, y?: number, direction?: Dir, distance?: number, className?: string }) {
  const offset = direction
    ? {
        up:    { y: distance,  x: 0 },
        down:  { y: -distance, x: 0 },
        left:  { x: distance,  y: 0 },
        right: { x: -distance, y: 0 },
      }[direction]
    : { y, x: 0 };

  return (
    <motion.div
      initial={{ opacity: 0, ...offset, scale: 0.98 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildren({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 42, scale: 0.96 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
