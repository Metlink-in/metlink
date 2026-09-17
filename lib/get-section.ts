import { cache } from 'react';
import { connectDB } from './mongodb';
import { SiteContent } from './models/SiteContent';
import { defaults } from './default-data';

// React's cache() dedupes calls with the same argument within a single render
// pass — pages that call getSection('hero') both in generateMetadata() and
// in the page body (a common pattern) previously hit the database twice for
// the same data on every request.
export const getSection = cache(async function getSection<T = unknown>(section: string): Promise<T> {
  try {
    await connectDB();
    const doc = await SiteContent.findOne({ section }).lean();
    if (doc) {
      const raw = (doc as { data: unknown }).data;
      if (raw !== null && raw !== undefined) return raw as T;
    }
  } catch { /* fall through to defaults */ }
  return (defaults[section] ?? null) as T;
});
