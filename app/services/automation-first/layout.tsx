import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { getCategoryBySlug } from '@/lib/services-data';

const FALLBACK_SUBTITLE = 'Connect your tools, remove manual busywork, and let intelligent workflows and AI agents run your operations around the clock.';

export function generateMetadata(): Metadata {
  const cat = getCategoryBySlug('automation-first');
  return buildMetadata({
    path: '/services/automation-first',
    title: ['Automation Services', cat?.tagline ?? 'Run Your Business on Autopilot'],
    description: [FALLBACK_SUBTITLE, cat?.description ?? ''],
  });
}

export default function AutomationFirstLayout({ children }: { children: React.ReactNode }) {
  return children;
}
