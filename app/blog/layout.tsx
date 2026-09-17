import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    path: '/blog',
    title: 'The MetLink Blog — AI, Marketing & Software Insights',
    description: [
      'Actionable insights on AI, marketing, software, and creative strategy, from the team that builds it every day.',
      'Covering AI & Automation, Digital Marketing, Creative Media, and Software Development.',
    ],
  });
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
