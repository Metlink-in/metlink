import React from 'react';
import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { PublicShell } from '@/components/public-shell';
import { SITE_URL } from '@/lib/site-config';
import { getSection } from '@/lib/get-section';
import { organizationSchema } from '@/lib/schema';
import { JsonLd } from '@/components/json-ld';
import './globals.css';

const dm = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  weight: ['200', '300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Grow with AI',
    template: '%s | MetLink',
  },
  // Favicon/apple-touch/manifest icons are handled by the file-convention
  // app/favicon.ico, app/icon.png, app/apple-icon.png and app/manifest.ts —
  // intentionally not declared here so they don't produce duplicate/conflicting
  // <link> tags (that mismatch was why the favicon wasn't rendering correctly).
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [social, contact] = await Promise.all([
    getSection<Record<string, string>>('social'),
    getSection<Record<string, string>>('contact'),
  ]);

  // '#' is the CMS's unset-placeholder value — only publish real, configured profiles.
  const sameAs = Object.values(social ?? {}).filter((url) => url && url !== '#');
  const orgSchema = organizationSchema({
    sameAs,
    email: contact?.email,
    telephone: contact?.phone,
  });

  return (
    <html lang="en" className={dm.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <JsonLd data={orgSchema} />
        <PublicShell>{children}</PublicShell>
        <Analytics />
      </body>
    </html>
  );
}
