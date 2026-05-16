import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Shield, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Product — MetLink AI Agency',
  description: 'Something powerful is on the way. MetLink is building a next-generation AI product — stay tuned.',
};

const features = [
  { icon: Zap,       title: 'AI-Powered Automation', desc: 'Automate complex workflows with intelligent decision-making built in.' },
  { icon: BarChart3, title: 'Real-Time Analytics',   desc: 'Live dashboards that surface insights the moment they matter.' },
  { icon: Shield,    title: 'Enterprise-Grade',       desc: 'Built with security, scalability, and compliance from day one.' },
];

export default function ProductPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#FAF9F6', paddingTop: '6rem', paddingBottom: '5rem' }}>

      {/* Subtle radish glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(200,75,48,0.07) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto w-full">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2 text-[10px] font-black uppercase tracking-[0.28em]"
          style={{ background: '#FEF1EE', border: '1px solid rgba(200,75,48,0.25)', color: '#C84B30' }}>
          <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#C84B30' }} />
          In Development
        </div>

        {/* Headline */}
        <h1 className="font-black leading-[1.0] mb-6"
          style={{
            color: '#192540',
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(3rem, 7vw, 6rem)',
          }}>
          Coming{' '}
          <em style={{ fontStyle: 'italic', color: '#C84B30' }}>Soon</em>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl" style={{ color: '#72645A' }}>
          We are crafting something extraordinary — a next-generation AI product built to transform the way businesses grow. The reveal is close.
        </p>

        {/* Animated dots */}
        <div className="flex items-center gap-2.5 mb-12">
          {[0, 160, 320].map(delay => (
            <span key={delay} className="inline-block w-2 h-2 rounded-full animate-bounce"
              style={{ background: '#C84B30', opacity: 0.6 + delay / 1000, animationDelay: `${delay}ms` }} />
          ))}
        </div>

        {/* Feature preview cards */}
        <div className="grid sm:grid-cols-3 gap-px mb-12 w-full"
          style={{ border: '1px solid #E5DDD5', borderRadius: 16, overflow: 'hidden' }}>
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-start p-6 text-left"
              style={{ background: '#FFFFFF' }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                style={{ background: '#FEF1EE', color: '#C84B30' }}>
                <Icon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
              </div>
              <h3 className="text-sm font-black mb-1.5" style={{ color: '#192540' }}>{title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#ADA09A' }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white transition-all hover:brightness-95 active:scale-95"
            style={{ background: '#C84B30', boxShadow: '0 4px 20px rgba(200,75,48,0.28)' }}>
            <Sparkles className="w-4 h-4" />
            Get notified at launch
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/services"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold transition-all hover:bg-black/5"
            style={{ border: '1px solid #E5DDD5', color: '#72645A', background: '#FFFFFF' }}>
            See our services
          </Link>
        </div>

        <p className="mt-8 text-xs" style={{ color: '#ADA09A' }}>
          Questions?{' '}
          <Link href="/contact" className="font-semibold transition-colors"
            style={{ color: '#C84B30' }}>
            Talk to the MetLink team →
          </Link>
        </p>
      </div>
    </main>
  );
}
