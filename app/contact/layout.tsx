import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    path: '/contact',
    title: "Contact MetLink — Let's Build Something Remarkable",
    description:
      'Share your vision and we will craft a tailored strategy within 24 hours. Reach MetLink by email, phone, or a project inquiry — average response under 2 hours.',
  });
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
