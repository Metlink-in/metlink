import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { serviceCategories } from '@/lib/services-data';

export function generateMetadata(): Metadata {
  return buildMetadata({
    path: '/services',
    title: ['Our Services', 'AI Marketing & Development'],
    description: [
      'Comprehensive service pillars spanning digital marketing, generative AI, machine learning, data engineering, software development, IoT, and automation-first solutions.',
      `Explore ${serviceCategories.map((c) => c.name).join(', ')}.`,
    ],
  });
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
