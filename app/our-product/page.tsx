import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Product — MetLink AI Agency',
  description:
    'Something powerful is on the way. MetLink is building a next-generation AI product — stay tuned.',
};

export default function OurProductPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030712]">
      {/* Radial glow backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(6,182,212,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Subtle grid lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(6,182,212,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(6,182,212,0.04) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
        {/* Badge */}
        <div
          className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          style={{
            background: 'rgba(6,182,212,0.08)',
            border: '1px solid rgba(6,182,212,0.25)',
            color: '#06B6D4',
          }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: '#06B6D4' }}
          />
          In Development
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight mb-6 pb-2"
          style={{
            background: 'linear-gradient(135deg, #E2E8F0 20%, #06B6D4 60%, #8B5CF6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Coming Soon
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-[#64748B] leading-relaxed mb-10 max-w-xl">
          We are crafting something extraordinary. Our next-generation AI product is being built to
          transform the way businesses grow — stay tuned for the reveal.
        </p>

        {/* Divider dots */}
        <div className="flex items-center gap-2 mb-10">
          {[0, 150, 300].map((delay) => (
            <span
              key={delay}
              className="inline-block w-2 h-2 rounded-full animate-bounce"
              style={{
                background: '#06B6D4',
                animationDelay: `${delay}ms`,
              }}
            />
          ))}
        </div>

        {/* Notify CTA */}
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-all hover:opacity-90 shadow-lg"
          style={{
            background: '#06B6D4',
            color: '#030712',
            boxShadow: '0 0 32px rgba(6,182,212,0.25)',
          }}
        >
          Get Notified at Launch
        </a>

        {/* Footer note */}
        <p className="mt-8 text-xs text-[#64748B]">
          Have questions?{' '}
          <a href="/contact" className="text-[#06B6D4] hover:text-[#06B6D4] transition-colors">
            Contact the MetLink team
          </a>
        </p>
      </div>
    </main>
  );
}
