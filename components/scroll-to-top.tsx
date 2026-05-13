'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-6 z-40 w-10 h-10 rounded-full flex items-center justify-center
                 transition-all duration-300 hover:scale-110 hover:brightness-110 active:scale-95 animate-fadeInScale"
      style={{
        background: '#C84B30',
        boxShadow: '0 4px 16px rgba(200,75,48,0.35)',
        color: '#FFFFFF',
      }}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-4 h-4" />
    </button>
  );
}
