'use client';

import { Team } from '@/components/sections/team';
import { CTA } from '@/components/sections/cta';
import { Footer } from '@/components/sections/footer';

export default function TeamPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-slideInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Meet Our Team
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl">
              Our talented team of developers, designers, and strategists work together to create exceptional digital experiences for our clients.
            </p>
          </div>
        </div>
      </div>
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
