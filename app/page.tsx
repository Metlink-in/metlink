'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';

/* ─── Animated counter ─── */
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = target / 60;
      const t = setInterval(() => {
        start += step;
        if (start >= target) { setCount(target); clearInterval(t); }
        else setCount(Math.floor(start));
      }, 22);
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const clients = ['TechCorp', 'FinanceHub', 'GrowthLab', 'MedCare', 'RetailPro', 'DataVault', 'CloudBase', 'InnovateCo', 'ScaleUp', 'Nexus AI'];

const industries = [
  { name: 'FinTech & Banking', icon: '🏦' },
  { name: 'Healthcare', icon: '🏥' },
  { name: 'E-Commerce', icon: '🛒' },
  { name: 'SaaS & Tech', icon: '💡' },
  { name: 'Real Estate', icon: '🏗️' },
  { name: 'Education', icon: '🎓' },
  { name: 'Logistics', icon: '🚚' },
  { name: 'Manufacturing', icon: '⚙️' },
];

const techStack = ['Next.js', 'Python', 'GPT-4', 'TensorFlow', 'React Native', 'AWS', 'Vercel', 'Figma', 'Meta Ads', 'Google Ads', 'LangChain', 'Pinecone'];

const whyUs = [
  { title: 'End-to-End Partner', desc: 'Strategy, design, development, and marketing — all from one accountable team.', icon: '🔗' },
  { title: 'AI-First Execution', desc: 'Every project integrates AI to achieve 10x results at a fraction of traditional cost.', icon: '🤖' },
  { title: 'Radical Transparency', desc: 'Weekly reports, real KPIs, and zero ambiguity on where your investment goes.', icon: '📊' },
  { title: 'Starts in 7 Days', desc: 'No months-long discovery phases. First deliverables within one week.', icon: '⚡' },
  { title: 'Results Guarantee', desc: 'We define success metrics upfront and are held accountable to each one.', icon: '🎯' },
  { title: 'Global + Local', desc: 'International-grade execution with deep understanding of local markets.', icon: '🌏' },
];

// Gold divider line
function GoldDivider() {
  return (
    <div className="flex items-center gap-3 my-2">
      <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.3), transparent)' }} />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#080808' }}>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center" style={{ background: '#080808' }}>
        {/* Subtle radial glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(212,168,67,0.07) 0%, transparent 70%)' }} />
          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: 'linear-gradient(rgba(212,168,67,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.8) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8"
                style={{ background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.2)', color: '#D4A843', letterSpacing: '0.08em' }}>
                ✦ AI Marketing & Development Agency
              </div>

              <h1 className="font-black leading-[1.02] text-[#F5EDD8] mb-6">
                <span className="block text-5xl md:text-6xl lg:text-7xl">We Build</span>
                <span className="block text-5xl md:text-6xl lg:text-7xl" style={{
                  background: 'linear-gradient(135deg, #F0C855 0%, #D4A843 40%, #A37820 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>AI-Powered</span>
                <span className="block text-5xl md:text-6xl lg:text-7xl">Growth Machines</span>
              </h1>

              <p className="text-lg text-[#9A8F7A] leading-relaxed mb-8 max-w-xl">
                From digital marketing to custom AI systems — MetLink delivers end-to-end digital transformation that drives real, compounding revenue growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90 shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #D4A843 0%, #A37820 100%)', color: '#080808', boxShadow: '0 8px 32px rgba(212,168,67,0.25)' }}>
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:bg-white/5"
                  style={{ border: '1px solid rgba(212,168,67,0.25)', color: '#C8B99A' }}>
                  ▷ View Our Work
                </Link>
              </div>

              {/* Proof dots */}
              <div className="flex flex-wrap gap-6 mt-10">
                {[['150+', 'Projects'], ['80+', 'Clients'], ['5+', 'Years'], ['$10M+', 'Generated']].map(([v, l]) => (
                  <div key={l}>
                    <p className="text-2xl font-black" style={{ color: '#D4A843' }}>{v}</p>
                    <p className="text-xs text-[#6A5F4A] uppercase tracking-wider">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — floating stat cards */}
            <div className="relative hidden lg:flex justify-center items-center h-96">
              {/* Center glow */}
              <div className="absolute w-48 h-48 rounded-full" style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.12), transparent)' }} />

              {[
                { label: 'Performance Ads', value: '500%', sub: 'ROI Delivered', pos: 'top-0 left-8' },
                { label: 'AI & Automation', value: '10x', sub: 'Faster Workflows', pos: 'top-8 right-0' },
                { label: 'Software Built', value: '150+', sub: 'Live Projects', pos: 'bottom-0 left-16' },
                { label: 'Client Retention', value: '94%', sub: 'Stay Long-Term', pos: 'bottom-8 right-8' },
              ].map((card, i) => (
                <div key={card.label}
                  className="absolute p-5 rounded-2xl"
                  style={{
                    [card.pos.split(' ')[0]]: card.pos.includes('top') ? (card.pos.includes('8') ? '2rem' : '0') : (card.pos.includes('8') ? '2rem' : '0'),
                    [card.pos.split(' ')[1] as 'left' | 'right']: card.pos.includes('left') ? (card.pos.includes('16') ? '4rem' : '2rem') : '0',
                    background: 'rgba(14,12,6,0.95)',
                    border: '1px solid rgba(212,168,67,0.20)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
                    animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.4}s`,
                    position: 'absolute',
                    top: ['0', '2rem', 'auto', 'auto'][i],
                    bottom: ['auto', 'auto', '0', '2rem'][i],
                    left: ['2rem', 'auto', '4rem', 'auto'][i],
                    right: ['auto', '0', 'auto', '2rem'][i],
                  }}>
                  <p className="text-[10px] font-bold text-[#6A5F4A] uppercase tracking-widest mb-1">{card.label}</p>
                  <p className="text-3xl font-black" style={{
                    background: 'linear-gradient(135deg, #F0C855, #D4A843)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>{card.value}</p>
                  <p className="text-xs text-[#9A8F7A] mt-0.5">{card.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLIENT MARQUEE ─── */}
      <section className="py-8 overflow-hidden" style={{ background: '#060606', borderTop: '1px solid rgba(212,168,67,0.08)', borderBottom: '1px solid rgba(212,168,67,0.08)' }}>
        <div className="flex animate-marquee gap-0">
          {[...clients, ...clients].map((c, i) => (
            <div key={i} className="flex-shrink-0 flex items-center gap-3 px-10"
              style={{ borderRight: '1px solid rgba(212,168,67,0.08)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(212,168,67,0.5)' }} />
              <span className="text-sm font-semibold tracking-wider" style={{ color: '#4A4030' }}>{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── IMPACT STATS ─── */}
      <section className="py-24" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">By the Numbers</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#F5EDD8]">Results That Speak for Themselves</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: 150, suffix: '+', label: 'Projects Delivered', sub: 'Across 16 service lines' },
              { value: 10, suffix: 'M+', label: 'Revenue Generated', sub: 'For our clients' },
              { value: 80, suffix: '+', label: 'Happy Clients', sub: 'Across 15+ countries' },
              { value: 94, suffix: '%', label: 'Retention Rate', sub: 'Stay with us long-term' },
            ].map((s) => (
              <div key={s.label} className="text-center py-8 px-6 rounded-2xl"
                style={{ background: 'rgba(212,168,67,0.04)', border: '1px solid rgba(212,168,67,0.10)' }}>
                <p className="text-5xl font-black mb-2" style={{
                  background: 'linear-gradient(135deg, #F0C855, #D4A843, #A37820)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  <Counter target={s.value} suffix={s.suffix} />
                </p>
                <p className="font-bold text-[#F5EDD8] text-sm mb-1">{s.label}</p>
                <p className="text-xs text-[#6A5F4A]">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24" style={{ background: '#060606' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#F5EDD8]">Four Pillars.<br />One Agency.</h2>
            </div>
            <Link href="/services"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.20)', color: '#D4A843' }}>
              All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {serviceCategories.map((cat, i) => (
              <Link key={cat.slug} href={`/services/${cat.slug}`}
                className="group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(10,8,4,0.8)',
                  border: '1px solid rgba(212,168,67,0.10)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                }}>
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">{cat.icon}</span>
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-400">{cat.name}</p>
                    <h3 className="text-xl font-black text-[#F5EDD8] mt-1">{cat.tagline}</h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#4A4030] group-hover:text-amber-400 group-hover:translate-x-1 transition-all mt-1" />
                </div>
                <p className="text-sm text-[#7A6F5A] leading-relaxed mb-5">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.services.map((svc) => (
                    <span key={svc.slug} className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ background: 'rgba(212,168,67,0.06)', border: '1px solid rgba(212,168,67,0.12)', color: '#9A8F7A' }}>
                      {svc.name}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className="py-24" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">Who We Serve</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#F5EDD8]">Built for Every Industry</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <div key={ind.name}
                className="group p-6 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{ background: 'rgba(212,168,67,0.03)', border: '1px solid rgba(212,168,67,0.08)' }}
                >
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">{ind.icon}</span>
                <p className="text-sm font-semibold text-[#C8B99A]">{ind.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="py-16" style={{ background: '#060606', borderTop: '1px solid rgba(212,168,67,0.08)', borderBottom: '1px solid rgba(212,168,67,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6A5F4A] mb-8">Technologies We Master</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <span key={t} className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:border-amber-400/30 hover:text-[#F5EDD8]"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,168,67,0.12)', color: '#9A8F7A' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="py-24" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">Why MetLink</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#F5EDD8]">What Sets Us Apart</h2>
            <p className="text-[#7A6F5A] mt-4 max-w-2xl mx-auto">
              There are hundreds of agencies. Here is why the fastest-growing businesses choose MetLink.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item, i) => (
              <div key={item.title}
                className="group p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(10,8,4,0.8)', border: '1px solid rgba(212,168,67,0.08)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.15)' }}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#F5EDD8] mb-2">{item.title}</h3>
                <p className="text-sm text-[#7A6F5A] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#060606' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(212,168,67,0.06), transparent 70%)' }} />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-4">Ready to Grow?</p>
          <h2 className="text-4xl md:text-6xl font-black text-[#F5EDD8] mb-6 leading-tight">
            Let's Build Something<br />Extraordinary
          </h2>
          <p className="text-[#9A8F7A] mb-10 text-lg max-w-xl mx-auto">
            Book a free 30-min strategy call. No commitments, no sales pressure — just clarity on what would drive the most growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl font-bold text-base transition-all hover:opacity-90 shadow-xl"
              style={{ background: 'linear-gradient(135deg, #D4A843 0%, #A37820 100%)', color: '#080808', boxShadow: '0 8px 40px rgba(212,168,67,0.30)' }}>
              Book Free Strategy Call <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl font-semibold text-base transition-all hover:bg-white/5"
              style={{ border: '1px solid rgba(212,168,67,0.20)', color: '#C8B99A' }}>
              See Our Work First
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
