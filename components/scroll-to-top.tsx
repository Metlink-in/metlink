'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-6 z-40 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
      style={{ background: 'rgba(14,10,4,0.9)', border: '1px solid #1A1A1A', color: '#FACC15' }}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-4 h-4" />
    </button>
  );
}
