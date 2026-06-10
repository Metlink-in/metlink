'use client';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/sections/footer';
import { ChatBot } from '@/components/chatbot';
import { PopupForm } from '@/components/popup-form';
import { IntroAnimation } from '@/components/intro-animation';
import { SmoothScroll } from '@/components/smooth-scroll';
import { GlobalMagnetic } from '@/components/global-magnetic';

export function PublicShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <SmoothScroll />
      <GlobalMagnetic />
      {/* Page-transition curtain — replays on each route change */}
      <div key={pathname} className="page-curtain" aria-hidden />
      <IntroAnimation />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
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
