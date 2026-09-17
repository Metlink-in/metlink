// Single source of truth for the canonical, absolute site URL.
// Reuses the existing NEXT_PUBLIC_BASE_URL env var (already used for
// server-side fetches in the blog/portfolio detail pages) so there's one
// variable, not two, controlling "what host is this site on".
export const SITE_URL = (process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.metlinkai.com').replace(/\/+$/, '');

export const SITE_NAME = 'MetLink';
