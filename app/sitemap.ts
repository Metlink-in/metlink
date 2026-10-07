import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';
import { gitLastModified, parseLooseDate } from '@/lib/sitemap-utils';
import { serviceCategories, getAllServiceSlugs } from '@/lib/services-data';
import { industries, getAllIndustryTopicSlugs } from '@/lib/industries-data';
import { automationIndustries, getAllAutomationTopicSlugs } from '@/lib/automation-data';
import { connectDB } from '@/lib/mongodb';
import { BlogPostModel } from '@/lib/models/BlogPost';

type Entry = MetadataRoute.Sitemap[number];

const abs = (path: string) => `${SITE_URL}${path}`;

// NOTE: if the route count ever grows past the ~50,000-URL sitemap limit,
// split this file into a sitemap index by exporting `generateSitemaps()`
// (Next's native chunking convention) and slicing ROUTE_ENTRIES() below by id —
// at ~320 URLs today that split isn't needed yet.
async function routeEntries(): Promise<Entry[]> {
  const entries: Entry[] = [];

  // ── Static top-level pages (lastmod = real last-commit date of their source file) ──
  const staticPages: { path: string; file: string; priority: number }[] = [
    { path: '/', file: 'app/page.tsx', priority: 1.0 },
    { path: '/services', file: 'app/services/page.tsx', priority: 0.9 },
    { path: '/industries', file: 'app/industries/page.tsx', priority: 0.9 },
    { path: '/blog', file: 'app/blog/page.tsx', priority: 0.8 },
    { path: '/company', file: 'app/company/page.tsx', priority: 0.6 },
    { path: '/contact', file: 'app/contact/page.tsx', priority: 0.7 },
    { path: '/product', file: 'app/product/page.tsx', priority: 0.6 },
    { path: '/privacy', file: 'app/privacy/page.tsx', priority: 0.2 },
    { path: '/terms', file: 'app/terms/page.tsx', priority: 0.2 },
    { path: '/cookies', file: 'app/cookies/page.tsx', priority: 0.2 },
  ];
  for (const p of staticPages) {
    entries.push({ url: abs(p.path), lastModified: gitLastModified(p.file), priority: p.priority, changeFrequency: 'monthly' });
  }

  // ── Services: categories + individual service pages ──
  // (skip a duplicate '/services/automation-first' entry — it's served by both a
  // dedicated static file and this dynamic category route at the same URL; that's
  // existing routing behaviour, not something this pass restructures.)
  for (const cat of serviceCategories) {
    entries.push({
      url: abs(`/services/${cat.slug}`),
      lastModified: gitLastModified('lib/services-data.ts'),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }
  for (const { category, service } of getAllServiceSlugs()) {
    entries.push({
      url: abs(`/services/${category}/${service}`),
      lastModified: gitLastModified('lib/services-data.ts'),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  // ── Industries: categories + topic pages ──
  for (const ind of industries) {
    entries.push({
      url: abs(`/industries/${ind.slug}`),
      lastModified: gitLastModified('lib/industries-data.ts'),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }
  for (const { industry, topic } of getAllIndustryTopicSlugs()) {
    entries.push({
      url: abs(`/industries/${industry}/${topic}`),
      lastModified: gitLastModified('lib/industries-data.ts'),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  // ── Automation: industries + topic pages ──
  for (const ind of automationIndustries) {
    entries.push({
      url: abs(`/automation/${ind.slug}`),
      lastModified: gitLastModified('lib/automation-data.ts'),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }
  for (const { industry, topic } of getAllAutomationTopicSlugs()) {
    entries.push({
      url: abs(`/automation/${industry}/${topic}`),
      lastModified: gitLastModified('lib/automation-data.ts'),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  // ── Blog posts: real, admin-published content from MongoDB
  // (there is no static fallback catalogue for these — everything here is real). ──
  try {
    await connectDB();
    const posts = await BlogPostModel.find({ published: true }).select('slug date updatedAt').lean();

    for (const post of posts as { slug: string; date?: string; updatedAt?: Date }[]) {
      entries.push({
        url: abs(`/blog/${post.slug}`),
        lastModified: (post.date && parseLooseDate(post.date)) ?? post.updatedAt ?? new Date(),
        changeFrequency: 'yearly',
        priority: 0.6,
      });
    }
  } catch {
    // DB unreachable at sitemap build time — omit blog URLs rather than fail the whole sitemap.
  }

  return entries;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return routeEntries();
}
