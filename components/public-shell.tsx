'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/sections/footer';
import { ChatBot } from '@/components/chatbot';
import { PopupForm } from '@/components/popup-form';
import { IntroAnimation } from '@/components/intro-animation';

/* ── Top progress bar ── */
function TopBar({ active }: { active: boolean }) {
  const [width, setWidth] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (active) {
      setWidth(0);
      let w = 0;
      timer.current = setInterval(() => {
        w += Math.random() * 12;
        if (w >= 90) { clearInterval(timer.current!); w = 90; }
        setWidth(w);
      }, 120);
    } else {
      if (timer.current) clearInterval(timer.current);
      setWidth(100);
    }
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [active]);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, height: 2,
      zIndex: 9999, pointerEvents: 'none',
    }}>
      <motion.div
        animate={{ width: `${width}%`, opacity: active || width < 100 ? 1 : 0 }}
        transition={{ duration: active ? 0.3 : 0.5, ease: 'easeOut' }}
        onAnimationComplete={() => { if (!active) setWidth(0); }}
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, #2B80F0, #5FA8FF)',
          boxShadow: '0 0 10px rgba(43,128,240,0.7)',
          borderRadius: '0 2px 2px 0',
        }}
      />
    </div>
  );
}

export function PublicShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');
  const [loading, setLoading] = useState(false);
  const prev = useRef(pathname);

  useEffect(() => {
    if (prev.current !== pathname) {
      setLoading(true);
      prev.current = pathname;
      const t = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(t);
    }
  }, [pathname]);

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <TopBar active={loading} />
      <IntroAnimation />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ChatBot />
      <PopupForm />
    </>
  );
}
