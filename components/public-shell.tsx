'use client';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/sections/footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import { ChatBot } from '@/components/chatbot';
import { PopupForm } from '@/components/popup-form';
import { IntroAnimation } from '@/components/intro-animation';

export function PublicShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <IntroAnimation />
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
      <ChatBot />
      <PopupForm />
    </>
  );
}
