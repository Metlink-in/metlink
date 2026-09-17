import { execSync } from 'child_process';

const gitDateCache = new Map<string, Date | undefined>();

/**
 * Real last-modified date for a source file, from git history — used as a
 * defensible `lastmod` for routes whose content has no explicit date field
 * (so we don't fabricate "today" for every URL). Falls back to `undefined`
 * (sitemap entry simply omits lastModified) if git history isn't available,
 * e.g. a shallow CI checkout.
 */
export function gitLastModified(relPath: string): Date | undefined {
  if (gitDateCache.has(relPath)) return gitDateCache.get(relPath);
  let result: Date | undefined;
  try {
    const out = execSync(`git log -1 --format=%aI -- "${relPath}"`, {
      cwd: process.cwd(),
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString()
      .trim();
    if (out) result = new Date(out);
  } catch {
    result = undefined;
  }
  gitDateCache.set(relPath, result);
  return result;
}

/** Parses the loose human date strings used in blog/portfolio data ("April 10, 2025", "October 2024"). */
export function parseLooseDate(value: string): Date | undefined {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? undefined : d;
}
