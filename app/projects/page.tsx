'use client';

import { Projects } from '@/components/sections/projects';
import { Stats } from '@/components/sections/stats';
import { CTA } from '@/components/sections/cta';
import { Footer } from '@/components/sections/footer';

export default function ProjectsPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-slideInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Projects
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl">
              Explore our portfolio of innovative solutions. From web applications to mobile platforms, we've delivered results for diverse industries.
            </p>
          </div>
        </div>
      </div>
      <Projects />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
