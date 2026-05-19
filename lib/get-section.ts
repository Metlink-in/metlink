import { connectDB } from './mongodb';
import { SiteContent } from './models/SiteContent';
import { defaults } from './default-data';

export async function getSection<T = unknown>(section: string): Promise<T> {
  try {
    await connectDB();
    const doc = await SiteContent.findOne({ section }).lean();
    if (doc) return (doc as { data: T }).data;
  } catch { /* fall through to defaults */ }
  return (defaults[section] ?? null) as T;
}
