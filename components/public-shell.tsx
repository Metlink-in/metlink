'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/sections/footer';
import { ChatBot } from '@/components/chatbot';
import { PopupForm } from '@/components/popup-form';
import { GlobalMagnetic } from '@/components/global-magnetic';

export function PublicShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/metlink-portal');

  // Reset scroll to top on every route change.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <GlobalMagnetic />
      {/* Page-transition curtain — replays on each route change */}
      <div key={pathname} className="page-curtain" aria-hidden />
      <Header />
      {/* AnimatePresence in default (sync) mode — mode="wait" blocks scroll
          events while waiting for the exit animation to finish, making the
          page feel frozen. Sync mode lets new page mount immediately. The
          mobile stacking fix is handled by Lenis + willChange changes. */}
      <AnimatePresence>
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
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
