'use client';

import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Projects } from '@/components/sections/projects';
import { Stats } from '@/components/sections/stats';
import { Team } from '@/components/sections/team';
import { CTA } from '@/components/sections/cta';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Services />
      <Projects />
      <Stats />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
