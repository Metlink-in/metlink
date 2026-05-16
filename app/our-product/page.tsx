import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Product — MetLink AI Agency',
  description:
    'Something powerful is on the way. MetLink is building a next-generation AI product — stay tuned.',
};

export default function OurProductPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
      style={{ background: '#07111F' }}>

      {/* Warm glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(43,128,240,0.08) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2 text-[10px] font-black uppercase tracking-[0.25em]"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#2B80F0',  }}>
          <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#2B80F0' }} />
          In Development
        </div>

        {/* Headline */}
        <h1 className="font-black tracking-tight leading-tight mb-6" style={{ color: '#FFFFFF' }}>
          Coming{' '}
          <em style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: '#2B80F0' }}>Soon</em>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
          We are crafting something extraordinary. Our next-generation AI product is being built to
          transform the way businesses grow — stay tuned for the reveal.
        </p>

        {/* Divider dots */}
        <div className="flex items-center gap-2 mb-10">
          {[0, 150, 300].map((delay) => (
            <span key={delay} className="inline-block w-2 h-2 rounded-full animate-bounce"
              style={{ background: '#2B80F0', animationDelay: `${delay}ms` }} />
          ))}
        </div>

        {/* Notify CTA */}
        <Link href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white transition-all hover:brightness-95 active:scale-95"
          style={{ background: '#2B80F0', boxShadow: '0 4px 20px rgba(43,128,240,0.3)' }}>
          Get Notified at Launch <ArrowRight className="w-4 h-4" />
        </Link>

        {/* Footer note */}
        <p className="mt-8 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Have questions?{' '}
          <Link href="/contact" className="font-semibold transition-colors hover:text-[#2B80F0]" style={{ color: '#2B80F0' }}>
            Contact the MetLink team
          </Link>
        </p>
      </div>
    </main>
  );
}
