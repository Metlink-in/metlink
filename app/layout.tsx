import React from 'react';
import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Header } from '@/components/header';
import { Footer } from '@/components/sections/footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import { ChatBot } from '@/components/chatbot';
import { PopupForm } from '@/components/popup-form';
import { IntroAnimation } from '@/components/intro-animation';
import './globals.css';

const dm = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  weight: ['200', '300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'MetLink — AI Marketing & Development Agency',
    template: '%s | MetLink',
  },
  description:
    'MetLink is a full-service AI marketing & development agency — digital marketing, creative media, AI automation, and custom software that drives measurable revenue growth.',
  keywords: ['AI agency', 'digital marketing', 'software development', 'AI automation', 'performance marketing', 'MetLink'],
  authors: [{ name: 'MetLink' }],
  creator: 'MetLink',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://metlink.in',
    siteName: 'MetLink',
    title: 'MetLink — AI Marketing & Development Agency',
    description: 'AI-powered marketing, creative media, and software development for ambitious businesses.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetLink — AI Marketing & Development Agency',
    description: 'AI-powered marketing, creative media, and software development.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#07111F',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dm.variable}>
      <body className="font-sans antialiased">
        <IntroAnimation />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <ChatBot />
        <PopupForm />
        <Analytics />
      </body>
    </html>
  );
}
