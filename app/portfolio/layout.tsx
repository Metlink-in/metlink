import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    path: '/portfolio',
    title: 'Portfolio — AI, Software & Marketing Case Studies',
    description: [
      'Real projects. Real results. Explore our portfolio of AI systems, software solutions, marketing campaigns, and brand transformations.',
      '150+ projects delivered, $10M+ revenue generated for clients, and a 98% satisfaction rate.',
    ],
  });
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
