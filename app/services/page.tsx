'use client';

import { Services } from '@/components/sections/services';
import { CTA } from '@/components/sections/cta';
import { Footer } from '@/components/sections/footer';

export default function ServicesPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-slideInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl">
              We offer comprehensive software solutions tailored to your business needs. Our expert team is ready to turn your vision into reality.
            </p>
          </div>
        </div>
      </div>
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
