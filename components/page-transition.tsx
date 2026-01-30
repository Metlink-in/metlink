'use client';

import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  delay?: number;
}

export function PageTransition({ children, delay = 0 }: PageTransitionProps) {
  return (
    <div
      className="animate-slideInUp"
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
