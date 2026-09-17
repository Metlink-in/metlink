import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from './site-config';

const SUFFIX = ` | ${SITE_NAME}`; // ' | MetLink'

interface SeoInput {
  /** Route path, no domain, no trailing slash — e.g. '/services/digital-marketing/seo'. */
  path: string;
  /**
   * Ordered real-copy fragments to build the title from (most important first —
   * e.g. the item's own name, then its category, then its tagline). Fragments are
   * joined with ' | ' until the 50–60 char band (incl. the ' | MetLink' suffix) is
   * filled; the last fragment used is trimmed at a word boundary if it would overflow.
   * A single already-complete string also works.
   */
  title: string | string[];
  /**
   * Ordered real-copy fragments to build the description from (e.g. tagline, then
   * the full description, then extra real context). Joined with a space until the
   * 140–155 char band is filled, trimming the last fragment at a word boundary.
   */
  description: string | string[];
  ogType?: 'website' | 'article';
}

/**
 * Greedily joins ordered real-copy fragments with `sep`, filling towards `max` (never
 * exceeding it), trimming the final included fragment at a word boundary if needed.
 * Put fragments that read fine when cut mid-sentence (full taglines/descriptions) last,
 * and short connective clauses (e.g. "Part of MetLink's X services.") earlier — a short
 * clause cut mid-phrase reads as broken, so callers should order fragments accordingly
 * rather than relying on this function to detect it.
 */
function composeText(parts: string[], sep: string, max: number): string {
  let result = '';
  for (const raw of parts) {
    const part = raw.trim().replace(/\s+/g, ' ');
    if (!part) continue;
    const candidate = result ? `${result}${sep}${part}` : part;
    if (candidate.length <= max) {
      result = candidate;
      continue;
    }
    const budget = max - result.length - (result ? sep.length : 0);
    if (budget > 8) {
      let cut = part.slice(0, budget).replace(/\s+\S*$/, '').trim();
      cut = cut.replace(/[,;:—-]+$/, '').trim();
      if (cut) result = result ? `${result}${sep}${cut}` : cut;
    }
    // Don't break: a later, shorter fragment may still fit in the small remaining budget.
  }
  return result;
}

/** Builds the full "base | MetLink" title, filling the base towards the 50–60 char band from real fragments. */
export function clampTitle(input: string | string[]): string {
  const parts = Array.isArray(input) ? input : [input];
  const maxBase = 60 - SUFFIX.length; // 50
  return composeText(parts, ' | ', maxBase);
}

/** Builds a description in the 140–155 char band from real fragments. */
export function clampDescription(input: string | string[]): string {
  const parts = Array.isArray(input) ? input : [input];
  const MAX = 155;
  return composeText(parts, ' ', MAX);
}

export function buildMetadata({ path, title, description, ogType = 'website' }: SeoInput): Metadata {
  const base = clampTitle(title);
  const fullTitle = `${base}${SUFFIX}`;
  const desc = clampDescription(description);
  const url = `${SITE_URL}${path}`;

  return {
    title: { absolute: fullTitle },
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      type: ogType,
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description: desc,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
    },
  };
}
