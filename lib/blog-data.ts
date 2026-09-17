export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  authorEmoji: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  gradientFrom: string;
  gradientTo: string;
  colorClass: string;
  /** Optional real cover photo URL. */
  coverImage?: string;
}

// Real posts live in MongoDB and are managed from Admin → Blog. This file has
// no placeholder/sample entries — the blog and its sitemap entries are empty
// until real posts are published from the admin panel.
export const blogPosts: BlogPost[] = [];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
