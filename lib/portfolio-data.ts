export interface Project {
  slug: string;
  title: string;
  category: string;
  client: string;
  date: string;
  tech: string[];
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  results: string[];
  gradientFrom: string;
  gradientTo: string;
  colorClass: string;
}

// Real projects live in MongoDB and are managed from Admin → Portfolio. This
// file has no placeholder/sample entries — the portfolio and its sitemap
// entries are empty until real case studies are published from the admin panel.
export const projects: Project[] = [];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
