import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/json-ld';
import { Breadcrumbs } from '@/components/breadcrumbs';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Product', path: '/product' },
];

export const metadata: Metadata = buildMetadata({
  path: '/product',
  title: ['MetLink Product', 'Coming Soon'],
  description:
    'Something powerful is on the way. MetLink is building a next-generation product for ambitious businesses.',
});

export default function ProductPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#07111F', paddingTop: '6rem', paddingBottom: '5rem' }}>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      {/* Subtle radish glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(43,128,240,0.18) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto w-full">
        <Breadcrumbs items={crumbs} center />

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2 text-[10px] font-normal uppercase tracking-[0.28em]"
          style={{ background: 'rgba(43,128,240,0.15)', border: '1px solid rgba(43,128,240,0.25)', color: '#2B80F0' }}>
          <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#2B80F0' }} />
          In Development
        </div>

        {/* Headline */}
        <h1 className=" leading-[1.0] mb-6"
          style={{
            color: '#FFFFFF',
            fontSize: 'clamp(3rem, 7vw, 6rem)',
          }}>
          Coming{' '}
          <span style={{ color: '#2B80F0' }}>Soon</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
          We are crafting something extraordinary, a next-generation product built to transform the way businesses grow. The reveal is close.
        </p>

        {/* Animated dots */}
        <div className="flex items-center gap-2.5 mb-12">
          {[0, 160, 320].map(delay => (
            <span key={delay} className="inline-block w-2 h-2 rounded-full animate-bounce"
              style={{ background: '#2B80F0', opacity: 0.6 + delay / 1000, animationDelay: `${delay}ms` }} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="https://www.metlinkai.com/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white transition-all hover:brightness-95 active:scale-95"
            style={{ background: '#2B80F0', boxShadow: '0 4px 20px rgba(43,128,240,0.28)' }}>
            <Sparkles className="w-4 h-4" />
            Get notified at launch
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/services"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold transition-all hover:bg-black/5"
            style={{ border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.08)' }}>
            See our services
          </Link>
        </div>

        <p className="mt-8 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Questions?{' '}
          <Link href="https://www.metlinkai.com/contact" className="font-semibold transition-colors"
            style={{ color: '#2B80F0' }}>
            Talk to the MetLink team →
          </Link>
        </p>
      </div>
    </main>
  );
}
