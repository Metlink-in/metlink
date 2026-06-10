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
          initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -6, filter: 'blur(2px)' }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
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
