import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Product — MetLink AI Agency',
  description:
    'Something powerful is on the way. MetLink is building a next-generation AI product — stay tuned.',
};

export default function OurProductPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080808]">
      {/* Radial glow backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(250,204,21,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Subtle grid lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right,#FACC15 1px,transparent 1px),linear-gradient(to bottom,#FACC15 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
        {/* Badge */}
        <div
          className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          style={{
            background: 'rgba(250,204,21,0.08)',
            border: '1px solid rgba(250,204,21,0.25)',
            color: '#FACC15',
          }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: '#FACC15' }}
          />
          In Development
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none mb-6"
          style={{
            background: 'linear-gradient(135deg,#FFFFFF 30%,#FACC15 70%,#92600A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Coming Soon
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-[#A3A3A3] leading-relaxed mb-10 max-w-xl">
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
                background: '#FACC15',
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
            background: '#FACC15',
            color: '#000000',
            boxShadow: '0 0 32px rgba(250,204,21,0.25)',
          }}
        >
          Get Notified at Launch
        </a>

        {/* Footer note */}
        <p className="mt-8 text-xs text-[#525252]">
          Have questions?{' '}
          <a href="/contact" className="text-amber-400 hover:text-amber-300 transition-colors">
            Contact the MetLink team
          </a>
        </p>
      </div>
    </main>
  );
}
