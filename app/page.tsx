'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, LinkIcon, Clock, Target, Megaphone, Palette, Bot, Code, Brain, Sparkles, Layers, Activity, ChevronDown } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';
import { FadeIn } from '@/components/fade-in';
import { AuroraBg } from '@/components/aurora-bg';
import { HeroSphere } from '@/components/hero-sphere';

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

/* ─── Typing text ─── */
function TypingText({ words }: { words: string[] }) {
  const [idx, setIdx]             = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting]   = useState(false);

  useEffect(() => {
    const word = words[idx];
    const speed = deleting ? 35 : 75;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < word.length) setDisplayed(word.slice(0, displayed.length + 1));
        else setTimeout(() => setDeleting(true), 2000);
      } else {
        if (displayed.length > 0) setDisplayed(displayed.slice(0, -1));
        else { setDeleting(false); setIdx((i) => (i + 1) % words.length); }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, words]);

  return (
    <span className="gradient-text-cyan">
      {displayed}
      <span className="text-[#06B6D4] opacity-80">|</span>
    </span>
  );
}

const whyUs = [
  { title: 'End-to-End AI Partner',  desc: 'Strategy, design, development, and deployment — one accountable team.', icon: <LinkIcon className="w-4 h-4" /> },
  { title: 'AI-First Execution',     desc: 'Every project integrates cutting-edge AI to deliver 10x results.', icon: <Brain className="w-4 h-4" /> },
  { title: 'Real-Time Insights',     desc: 'Live KPI dashboards and zero ambiguity on where your investment performs.', icon: <Activity className="w-4 h-4" /> },
  { title: 'Ship in 7 Days',         desc: 'No lengthy discovery. First working deliverables within one week.', icon: <Clock className="w-4 h-4" /> },
  { title: 'Measurable ROI',         desc: 'We define success metrics upfront and are accountable to every one.', icon: <Target className="w-4 h-4" /> },
  { title: 'Scalable Systems',       desc: 'Built to grow from 10 to 10 million users without re-architecting.', icon: <Layers className="w-4 h-4" /> },
];

const catIcons: Record<string, React.ReactNode> = {
  'digital-marketing':   <Megaphone className="w-5 h-5" />,
  'creative-media':      <Palette   className="w-5 h-5" />,
  'ai-automation':       <Bot       className="w-5 h-5" />,
  'software-development':<Code      className="w-5 h-5" />,
};

const catColors: Record<string, { accent: string; glow: string }> = {
  'digital-marketing':   { accent: '#06B6D4', glow: 'rgba(6,182,212,0.08)'   },
  'creative-media':      { accent: '#A78BFA', glow: 'rgba(167,139,250,0.08)' },
  'ai-automation':       { accent: '#34D399', glow: 'rgba(52,211,153,0.08)'  },
  'software-development':{ accent: '#F472B6', glow: 'rgba(244,114,182,0.08)' },
};

const caps = [
  { name: 'GPT-4o & o3',         label: 'OpenAI',        color: '#10B981' },
  { name: 'Claude 3.5 Sonnet',   label: 'Anthropic',     color: '#D97757' },
  { name: 'Gemini 2.5 Flash',    label: 'Google',        color: '#3B82F6' },
  { name: 'LangChain + RAG',     label: 'Orchestration', color: '#8B5CF6' },
  { name: 'Pinecone / Weaviate', label: 'Vector DBs',    color: '#06B6D4' },
  { name: 'HuggingFace',         label: 'Open Source',   color: '#F97316' },
  { name: 'AWS / GCP / Azure',   label: 'Cloud Infra',   color: '#EF4444' },
  { name: 'MLflow + W&B',        label: 'MLOps',         color: '#A78BFA' },
  { name: 'LlamaIndex',          label: 'Retrieval',     color: '#34D399' },
  { name: 'Docker + Kubernetes', label: 'Infra',         color: '#60A5FA' },
  { name: 'FastAPI + Next.js',   label: 'Stack',         color: '#F472B6' },
  { name: 'Supabase + PgVector', label: 'Data',          color: '#FBBF24' },
];

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden bg-[#030712]">

      {/* ═══════════════════════════════════
          HERO — text left · 3D sphere right
      ═══════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">

        {/* Full-section aurora background */}
        <AuroraBg />

        {/* Header spacer */}
        <div className="h-14 shrink-0" />

        {/* Content row */}
        <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                        flex flex-col lg:flex-row lg:items-center">

          {/* LEFT — text */}
          <FadeIn className="order-2 lg:order-1 w-full lg:w-1/2
                             flex flex-col items-center lg:items-start text-center lg:text-left
                             pt-4 pb-20 lg:py-0">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold mb-6 border tracking-[0.12em]"
              style={{ background: 'rgba(6,182,212,0.07)', borderColor: 'rgba(6,182,212,0.25)', color: '#06B6D4' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
              AI Marketing & Development Agency
            </div>

            <h1 className="font-black text-white leading-[1.02] tracking-tight mb-6">
              <span className="block">We Build</span>
              <span className="block min-h-[1.1em]">
                <TypingText words={['AI Automation', 'Neural Systems', 'Smart Agents', 'ML Pipelines']} />
              </span>
              <span className="block">That Scale</span>
            </h1>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10 w-full sm:w-auto">
              <Link href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#030712] transition-all hover:brightness-110 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)', boxShadow: '0 0 40px rgba(6,182,212,0.28)' }}>
                <Sparkles className="w-4 h-4" />
                Start Building with AI
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-sm transition-all hover:bg-white/5"
                style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#94A3B8' }}>
                See Our Work
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center lg:justify-start gap-x-8 gap-y-5">
              {[
                ['150+', 'Projects'],
                ['80+',  'Clients'],
                ['$10M+','Revenue'],
                ['94%',  'Retention'],
              ].map(([val, lbl], i) => (
                <div key={lbl} className="flex items-center gap-3">
                  {i > 0 && <span className="hidden sm:block w-px h-5 shrink-0" style={{ background: 'rgba(255,255,255,0.08)' }} />}
                  <div>
                    <p className="text-xl font-black gradient-text-cyan leading-none">{val}</p>
                    <p className="text-[10px] uppercase tracking-widest mt-1" style={{ color: '#475569' }}>{lbl}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* RIGHT — interactive 3D neural sphere */}
          <FadeIn delay={0.15}
            className="order-1 lg:order-2 w-full lg:w-1/2 shrink-0
                       h-[80vw] sm:h-[60vw] md:h-[55vh] lg:h-[calc(100vh-56px)] lg:max-h-[780px]">
            <HeroSphere />
          </FadeIn>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-25">
          <ChevronDown className="w-4 h-4" style={{ color: '#06B6D4' }} />
        </div>
      </section>

      {/* ═══════════════════════════════
          INTEGRATIONS — marquee
      ═══════════════════════════════ */}
      <section className="relative overflow-hidden py-16 sm:py-20" style={{ background: '#06090f' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 90% at 50% 100%, rgba(14,60,110,0.6) 0%, rgba(6,9,15,0) 70%)' }} />

        <div className="relative z-10 text-center mb-12">
          <p className="text-[10px] font-medium uppercase" style={{ color: '#334155', letterSpacing: '0.45em' }}>
            Integrations
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-32 sm:w-48 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #06090f, transparent)' }} />
          <div className="absolute inset-y-0 right-0 w-32 sm:w-48 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #06090f, transparent)' }} />

          <div className="animate-marquee flex items-center" style={{ width: 'max-content' }}>
            {[0, 1, 2, 3].map((copy) => (
              <div key={copy} className="flex items-center">
                <div className="flex items-center mx-12 sm:mx-16 opacity-55 hover:opacity-100 transition-opacity duration-300 shrink-0">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" alt="Google Drive" style={{ height: 36, width: 36, objectFit: 'contain' }} />
                </div>
                <div className="flex items-center gap-3 mx-12 sm:mx-16 opacity-55 hover:opacity-100 transition-opacity duration-300 shrink-0">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" alt="Notion" style={{ height: 32, width: 32, objectFit: 'contain', filter: 'invert(1)', borderRadius: 6 }} />
                  <span className="text-xl font-semibold" style={{ color: '#E2E8F0' }}>Notion</span>
                </div>
                <div className="flex items-center mx-12 sm:mx-16 opacity-55 hover:opacity-100 transition-opacity duration-300 shrink-0">
                  <span className="text-2xl font-bold tracking-tight" style={{ color: '#E2E8F0' }}>klaviyo</span>
                </div>
                <div className="flex items-center mx-12 sm:mx-16 opacity-55 hover:opacity-100 transition-opacity duration-300 shrink-0">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" alt="OpenAI" style={{ height: 26, objectFit: 'contain', filter: 'invert(1)' }} />
                </div>
                <div className="flex items-center gap-2.5 mx-12 sm:mx-16 opacity-55 hover:opacity-100 transition-opacity duration-300 shrink-0">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" fill="#D97757" />
                  </svg>
                  <span className="text-2xl font-semibold" style={{ color: '#E2E8F0' }}>Claude</span>
                </div>
                <div className="flex items-center gap-3 mx-12 sm:mx-16 opacity-55 hover:opacity-100 transition-opacity duration-300 shrink-0">
                  <svg width="38" height="22" viewBox="0 0 40 24" fill="none">
                    <circle cx="8"  cy="12" r="6" stroke="#E2E8F0" strokeWidth="1.8" fill="none" />
                    <circle cx="20" cy="12" r="6" stroke="#E2E8F0" strokeWidth="1.8" fill="none" />
                    <circle cx="32" cy="12" r="6" stroke="#E2E8F0" strokeWidth="1.8" fill="none" />
                  </svg>
                  <span className="text-xl font-bold italic" style={{ color: '#E2E8F0' }}>make</span>
                </div>
                <div className="flex items-center mx-12 sm:mx-16 opacity-55 hover:opacity-100 transition-opacity duration-300 shrink-0">
                  <span className="text-xl font-semibold" style={{ color: '#E2E8F0' }}>LangChain</span>
                </div>
                <div className="flex items-center mx-12 sm:mx-16 opacity-55 hover:opacity-100 transition-opacity duration-300 shrink-0">
                  <span className="text-xl font-semibold" style={{ color: '#E2E8F0' }}>Pinecone</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          STATS — cinematic numbers
      ═══════════════════════════════ */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#06B6D4' }}>Impact</p>
            <h2 className="font-black text-white">Numbers That Matter</h2>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { value: 150, suffix: '+',  label: 'Projects Delivered', color: '#06B6D4' },
              { value: 10,  suffix: 'M+', label: 'Revenue Generated',  color: '#8B5CF6' },
              { value: 80,  suffix: '+',  label: 'Happy Clients',       color: '#34D399' },
              { value: 94,  suffix: '%',  label: 'Retention Rate',      color: '#F472B6' },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1}>
                <div className="group text-center px-6 py-12 cursor-default"
                  style={{ borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <p className="text-5xl sm:text-7xl font-black mb-3 transition-all duration-300 group-hover:scale-105 origin-bottom tabular-nums"
                    style={{ color: s.color, textShadow: `0 0 60px ${s.color}25` }}>
                    <Counter target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em]" style={{ color: '#475569' }}>{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          SERVICES — editorial list
      ═══════════════════════════════ */}
      <section className="py-24 sm:py-32 relative" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 15% 60%, rgba(139,92,246,0.05), transparent 55%)' }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#06B6D4' }}>Services</p>
              <h2 className="font-black text-white leading-tight">What We Build</h2>
            </div>
            <Link href="/services"
              className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
              style={{ color: '#475569' }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#E2E8F0'}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#475569'}>
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>

          <div>
            {serviceCategories.map((cat, i) => {
              const c = catColors[cat.slug] || { accent: '#06B6D4', glow: 'rgba(6,182,212,0.08)' };
              return (
                <FadeIn key={cat.slug} delay={i * 0.07}>
                  <Link
                    href={`/services/${cat.slug}`}
                    className="group relative flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 lg:gap-16 py-10 sm:py-12 transition-all duration-300 hover:pl-3"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>

                    {/* Left accent */}
                    <div className="absolute left-0 top-6 bottom-6 w-0 group-hover:w-[2px] transition-all duration-400 rounded-full"
                      style={{ background: c.accent }} />

                    {/* Index number */}
                    <span className="hidden lg:block flex-shrink-0 text-5xl font-black tabular-nums leading-none select-none transition-all duration-300 w-20 text-right"
                      style={{ color: c.accent, opacity: 0.15 }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.opacity = '0.4'}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.opacity = '0.15'}>
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Icon + category name */}
                    <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:w-40 flex-shrink-0">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                        style={{ background: c.glow, border: `1px solid ${c.accent}20`, color: c.accent }}>
                        {catIcons[cat.slug]}
                      </div>
                      <p className="text-[10px] font-black uppercase tracking-[0.25em]" style={{ color: c.accent }}>{cat.name}</p>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-3 leading-tight">{cat.tagline}</h3>
                      <p className="text-sm leading-relaxed mb-5 max-w-lg" style={{ color: '#475569' }}>{cat.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {cat.services.map((svc) => (
                          <span key={svc.slug}
                            className="px-3.5 py-1.5 rounded-full text-[11px] font-medium transition-all duration-200"
                            style={{ color: '#475569', border: '1px solid rgba(255,255,255,0.06)' }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.color = c.accent;
                              (e.currentTarget as HTMLElement).style.borderColor = `${c.accent}30`;
                              (e.currentTarget as HTMLElement).style.background = `${c.accent}08`;
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.color = '#475569';
                              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                              (e.currentTarget as HTMLElement).style.background = '';
                            }}>
                            {svc.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden sm:block flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ background: `${c.accent}15`, color: c.accent }}>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          HOW WE WORK — 3 steps
      ═══════════════════════════════ */}
      <section className="py-24 sm:py-32 relative overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(6,182,212,0.04), transparent 55%)' }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#8B5CF6' }}>Process</p>
            <h2 className="font-black text-white">How We Work</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-0">
            {[
              {
                num: '01',
                title: 'Discover & Define',
                desc: 'We start with a deep-dive strategy session — mapping your goals, data, and existing systems to identify where AI creates the biggest leverage.',
                color: '#06B6D4',
              },
              {
                num: '02',
                title: 'Build & Integrate',
                desc: 'Our team ships working AI systems in days, not months. Every build is modular, tested, and integrated directly into your stack.',
                color: '#8B5CF6',
              },
              {
                num: '03',
                title: 'Scale & Optimize',
                desc: 'We monitor, retrain, and evolve your systems continuously — so performance compounds over time, not decays.',
                color: '#34D399',
              },
            ].map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div className="group relative p-8 sm:p-10 transition-all duration-300"
                  style={{ borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>

                  {/* Large background number */}
                  <div className="absolute top-6 right-6 text-8xl font-black select-none pointer-events-none"
                    style={{ color: step.color, opacity: 0.06, lineHeight: 1 }}>
                    {step.num}
                  </div>

                  <div className="relative z-10">
                    {/* Step pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6"
                      style={{ background: `${step.color}10`, color: step.color, border: `1px solid ${step.color}20` }}>
                      Step {step.num}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-white mb-4 leading-tight">{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{step.desc}</p>

                    {/* Bottom accent line */}
                    <div className="mt-8 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                      style={{ background: `linear-gradient(to right, ${step.color}, transparent)` }} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          AI STACK — flowing pills
      ═══════════════════════════════ */}
      <section className="py-24 sm:py-32 relative" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">

            <FadeIn className="lg:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#8B5CF6' }}>AI Stack</p>
              <h2 className="font-black text-white mb-5 leading-tight">Powered by<br />the Best Models</h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: '#475569' }}>
                We integrate frontier LLMs, vector databases, and production MLOps tooling to build AI systems that actually work at scale.
              </p>
              <Link href="/services/ai-automation"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                style={{ color: '#8B5CF6' }}>
                Explore AI services <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>

            <FadeIn delay={0.15} className="lg:col-span-3">
              <div className="flex flex-wrap gap-2.5">
                {caps.map((cap) => (
                  <span key={cap.name}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium cursor-default transition-all duration-200 select-none"
                    style={{ border: `1px solid ${cap.color}20`, color: '#64748B', background: `${cap.color}05` }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = cap.color;
                      el.style.borderColor = `${cap.color}45`;
                      el.style.background = `${cap.color}10`;
                      el.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = '#64748B';
                      el.style.borderColor = `${cap.color}20`;
                      el.style.background = `${cap.color}05`;
                      el.style.transform = '';
                    }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: cap.color, boxShadow: `0 0 5px ${cap.color}` }} />
                    {cap.name}
                    <span className="text-[10px] opacity-40 font-normal">{cap.label}</span>
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          WHY US — divider list
      ═══════════════════════════════ */}
      <section className="py-24 sm:py-32 relative" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            <FadeIn className="lg:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#06B6D4' }}>Why MetLink</p>
              <h2 className="font-black text-white leading-tight">What Sets<br />Us Apart</h2>
            </FadeIn>

            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-x-10">
              {whyUs.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.06}>
                  <div className="group py-7 transition-all duration-300"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5 transition-all duration-300 group-hover:scale-110"
                        style={{ background: 'rgba(6,182,212,0.08)', color: '#06B6D4' }}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1.5 text-sm">{item.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
              <div className="col-span-2" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          CTA — full-bleed dramatic
      ═══════════════════════════════ */}
      <section className="relative py-32 sm:py-40 overflow-hidden text-center">
        {/* Gradient overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(139,92,246,0.1) 0%, rgba(6,182,212,0.05) 50%, transparent 80%)' }} />

        {/* Top border glow */}
        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(6,182,212,0.4), rgba(139,92,246,0.4), transparent)' }} />

        <FadeIn className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-6" style={{ color: '#06B6D4' }}>
            Let&apos;s Build Together
          </p>
          <h2 className="font-black text-white mb-6 leading-[1.05]">
            Ready to Scale<br />
            <span className="gradient-text-cyan">with AI?</span>
          </h2>
          <p className="text-base sm:text-lg mb-12 max-w-md mx-auto" style={{ color: '#475569' }}>
            Book a free 30-min strategy call. No commitments — just clarity on what AI can do for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact"
              className="group inline-flex items-center gap-2.5 px-9 py-5 rounded-full font-bold text-sm text-[#030712] transition-all hover:brightness-110 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)', boxShadow: '0 0 50px rgba(6,182,212,0.2)' }}>
              Book AI Strategy Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-5 rounded-full font-semibold text-sm transition-all hover:bg-white/5"
              style={{ border: '1px solid rgba(255,255,255,0.08)', color: '#64748B' }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#E2E8F0'}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#64748B'}>
              View Our Work
            </Link>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
