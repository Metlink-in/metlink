import { ReactNode } from 'react';

type Dir = 'up' | 'down' | 'left' | 'right';

// Scroll-triggered reveal animation removed for performance — content renders
// immediately instead of animating in as it scrolls into view. Same props/API
// kept so every call site across the site still works unchanged.

export function FadeIn({ children, className = '' }: { children: ReactNode, delay?: number, y?: number, direction?: Dir, distance?: number, className?: string }) {
  return <div className={className}>{children}</div>;
}

export function StaggerChildren({ children, className = '' }: { children: ReactNode, className?: string }) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className = '' }: { children: ReactNode, className?: string }) {
  return <div className={className}>{children}</div>;
}
