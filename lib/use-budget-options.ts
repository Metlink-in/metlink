'use client';

import { useEffect, useState } from 'react';

const INR_BUDGETS = ['₹30K – ₹50K', '₹50K – ₹1L', '₹1L – ₹5L', '₹5L – ₹20L', '₹20L – ₹50L', '₹50L+'];
const USD_BUDGETS = ['$500 – $1K', '$1K – $5K', '$5K – $20K', '$20K – $50K', '$50K – $150K', '$150K+'];

/**
 * Budget options in ₹ by default (our primary market); switches to $ once
 * mounted if the visitor's browser locale looks like en-US. Starts with the
 * ₹ list on both server and first client render so hydration always matches
 * — the swap (if any) happens a tick later via the effect, not during render.
 */
export function useBudgetOptions(): string[] {
  const [options, setOptions] = useState<string[]>(INR_BUDGETS);

  useEffect(() => {
    const locales = [navigator.language, ...(navigator.languages ?? [])];
    if (locales.some(l => /-US$/i.test(l))) setOptions(USD_BUDGETS);
  }, []);

  return options;
}
