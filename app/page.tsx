'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Brain, Code2, TrendingUp, Palette, ChevronRight, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { serviceCategories } from '@/lib/services-data';

/* -------- Animated counter -------- */
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = target / 50;
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, 40);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* -------- Marquee strip -------- */
const clientNames = [
  'RetailTech Co.', 'CapitalFlow', 'MedCare', 'GrowthStack', 'NovaTech',
  'GlobalCorp', 'FutureSoft', 'CloudVision', 'DataHub', 'InnovateLabs',
  'SkyBridge', 'NexaCore', 'AlphaWave', 'PrimeSolutions', 'TechForge',
];

function MarqueeStrip() {
  const items = [...clientNames, ...clientNames];
  return (
    <div className="w-full overflow-hidden py-6">
      <div className="flex animate-marquee whitespace-nowrap gap-12">
        {items.map((name, i) => (
          <span key={i} className="text-sm font-semibold text-foreground/25 hover:text-foreground/50 transition-colors flex-shrink-0 tracking-wider uppercase">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

const industries = [
  { icon: '💳', name: 'FinTech' },
  { icon: '🏥', name: 'Healthcare' },
  { icon: '🛒', name: 'E-Commerce' },
  { icon: '📦', name: 'SaaS' },
  { icon: '🏗️', name: 'Real Estate' },
  { icon: '🎓', name: 'EdTech' },
  { icon: '🏭', name: 'Manufacturing' },
  { icon: '🚀', name: 'Startups' },
];

const techStack = [
  { name: 'Python', color: 'text-blue-400' },
  { name: 'React', color: 'text-cyan-400' },
  { name: 'Next.js', color: 'text-foreground' },
  { name: 'GPT-4', color: 'text-emerald-400' },
  { name: 'TensorFlow', color: 'text-orange-400' },
  { name: 'AWS', color: 'text-yellow-400' },
  { name: 'Node.js', color: 'text-green-400' },
  { name: 'LangChain', color: 'text-purple-400' },
  { name: 'FastAPI', color: 'text-teal-400' },
  { name: 'PostgreSQL', color: 'text-blue-300' },
  { name: 'Docker', color: 'text-cyan-300' },
  { name: 'Figma', color: 'text-pink-400' },
];

const whyUs = [
  {
    icon: Brain,
    title: 'AI-First Approach',
    desc: 'Every solution is designed with AI at its core — not bolted on, but built in from day one.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    desc: 'From kickoff to delivery in weeks, not months. We ship fast without compromising quality.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
  },
  {
    icon: TrendingUp,
    title: 'ROI-Obsessed',
    desc: "We track and optimize every metric that matters to your bottom line—not vanity numbers.",
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  {
    icon: Code2,
    title: 'Full-Stack Capability',
    desc: 'Marketing, design, AI, and development — all under one roof. No hand-offs. No gaps.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Palette,
    title: 'Premium Creative',
    desc: 'World-class design and content that stops scrolling and starts conversations.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
  },
  {
    icon: ArrowRight,
    title: 'Transparent Partnership',
    desc: 'Clear communication, real-time dashboards, and zero hidden surprises — ever.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
];

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 80, suffix: '+', label: 'Clients Worldwide' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 5, suffix: 'x', label: 'Average ROI' },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setTimeout(() => setIsVisible(true), 100); }, []);

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── HERO ────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-3xl" />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm font-medium">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                AI Marketing & Development Agency
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] tracking-tight">
                  We Build{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-textShine">
                    AI-Powered
                  </span>
                  <br />
                  Growth Machines
                </h1>
                <p className="text-xl text-foreground/60 max-w-lg leading-relaxed">
                  From digital marketing to custom AI systems — MetLink delivers end-to-end digital transformation that drives real revenue.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity shadow-2xl shadow-blue-600/30 group"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-foreground/70 hover:text-foreground hover:border-white/20 hover:bg-white/5 transition-all font-medium"
                >
                  <Play className="w-4 h-4" /> View Our Work
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-2">
                {[
                  { n: '150+', l: 'Projects' },
                  { n: '80+', l: 'Clients' },
                  { n: '5x', l: 'Avg ROI' },
                ].map(({ n, l }) => (
                  <div key={l} className="text-center">
                    <p className="text-2xl font-black text-foreground">{n}</p>
                    <p className="text-xs text-foreground/40 uppercase tracking-wider">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — floating cards */}
            <div className={`relative h-[500px] hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {[
                { title: 'AI & Automation', value: '10x', sub: 'Faster Workflows', from: 'from-blue-600', to: 'to-cyan-600', top: '0', right: '0', delay: '0s', size: 'w-56 h-36' },
                { title: 'Performance Ads', value: '500%', sub: 'ROI Delivered', from: 'from-purple-600', to: 'to-pink-600', top: '35%', left: '0', delay: '0.5s', size: 'w-52 h-32' },
                { title: 'Software Built', value: '150+', sub: 'Live Projects', from: 'from-emerald-600', to: 'to-teal-600', bottom: '0', right: '10%', delay: '1s', size: 'w-56 h-36' },
              ].map((card) => (
                <div
                  key={card.title}
                  className={`absolute ${card.size} bg-gradient-to-br ${card.from} ${card.to} rounded-2xl border border-white/10 shadow-2xl animate-float p-5 flex flex-col justify-between overflow-hidden`}
                  style={{
                    top: card.top, right: card.right, left: card.left, bottom: card.bottom,
                    animationDelay: card.delay,
                  }}
                >
                  <div className="absolute inset-0 bg-black/10 rounded-2xl" />
                  <p className="relative text-white/70 text-xs font-semibold uppercase tracking-wider">{card.title}</p>
                  <div className="relative">
                    <p className="text-4xl font-black text-white">{card.value}</p>
                    <p className="text-white/60 text-sm">{card.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <span className="text-xs text-foreground/40">Scroll to explore</span>
          <div className="w-5 h-8 border border-foreground/20 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-blue-400/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* ── CLIENT LOGOS ─────────────────────────────── */}
      <section className="w-full py-10 bg-zinc-950/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 mb-4">
          <p className="text-center text-xs font-semibold text-foreground/30 uppercase tracking-widest">
            Companies We Are Working With
          </p>
        </div>
        <MarqueeStrip />
      </section>

      {/* ── OUR IMPACT ─────────────────────────────── */}
      <section className="w-full py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">Our Impact</p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">Results That Speak For Themselves</h2>
            <p className="text-foreground/50 mt-4 text-lg max-w-2xl mx-auto">Numbers that represent real businesses, real challenges, and real outcomes.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-blue-500/20 hover:bg-blue-500/[0.03] transition-all duration-300 text-center"
                style={{ animation: `slideInUp 0.6s ease-out ${i * 0.1}s both` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-300" />
                <div className="relative">
                  <p className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-foreground/50 mt-2 text-sm uppercase tracking-wider font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ─────────────────────────── */}
      <section className="w-full py-24 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">Four Pillars of Growth</h2>
            <p className="text-foreground/50 mt-4 text-lg max-w-2xl mx-auto">
              End-to-end digital transformation — marketing, media, AI, and software — all under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {serviceCategories.map((cat, i) => (
              <Link
                key={cat.slug}
                href={`/services/${cat.slug}`}
                className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-300 overflow-hidden"
                style={{ animation: `slideInUp 0.6s ease-out ${i * 0.1}s both` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradientFrom} ${cat.gradientTo} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ background: cat.bgGlow }} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-4xl mb-3 block">{cat.icon}</span>
                      <h3 className={`text-2xl font-bold ${cat.colorClass} mb-2`}>{cat.name}</h3>
                      <p className="text-foreground/50 text-sm leading-relaxed max-w-xs">{cat.tagline}</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/5 transition-all">
                      <ChevronRight className="w-5 h-5 text-foreground/40 group-hover:text-foreground/80 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.services.map((svc) => (
                      <span
                        key={svc.slug}
                        className="text-xs px-3 py-1 rounded-full border border-white/10 text-foreground/50"
                      >
                        {svc.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ──────────────────────────────── */}
      <section className="w-full py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">Industries</p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">Industries We Transform</h2>
            <p className="text-foreground/50 mt-4 text-lg max-w-2xl mx-auto">
              We've delivered results across diverse sectors. Your industry is next.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <div
                key={ind.name}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-blue-500/20 hover:bg-blue-500/[0.03] transition-all duration-300 cursor-pointer"
                style={{ animation: `fadeInScale 0.5s ease-out ${i * 0.08}s both` }}
              >
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{ind.icon}</span>
                <p className="text-sm font-semibold text-foreground/70 group-hover:text-foreground transition-colors">{ind.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ──────────────────────────────── */}
      <section className="w-full py-24 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">Technology</p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">Built With the Best Stack</h2>
            <p className="text-foreground/50 mt-4 text-lg max-w-2xl mx-auto">
              We use battle-tested, cutting-edge technologies to build systems that scale and perform.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <div
                key={tech.name}
                className={`px-6 py-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/5 transition-all duration-300 cursor-default`}
                style={{ animation: `fadeInScale 0.4s ease-out ${i * 0.05}s both` }}
              >
                <span className={`font-semibold text-sm ${tech.color}`}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────── */}
      <section className="w-full py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-pink-400 uppercase tracking-widest mb-3">Why MetLink</p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">Why Choose Us?</h2>
            <p className="text-foreground/50 mt-4 text-lg max-w-2xl mx-auto">
              We're not just another agency. We're your dedicated growth partner.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                  style={{ animation: `slideInUp 0.6s ease-out ${i * 0.1}s both` }}
                >
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────── */}
      <section className="w-full py-32 bg-zinc-950/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">Get Started Today</p>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>
          <p className="text-xl text-foreground/50 mb-10">
            Partner with MetLink to transform your business with AI-powered marketing, creative media, and custom software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-2xl shadow-blue-600/30 group"
            >
              Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl border border-white/10 text-foreground/70 hover:text-foreground hover:border-white/20 hover:bg-white/5 transition-all font-semibold text-lg"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
