'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle, ChevronRight, Zap, LinkIcon, Cpu, BarChart, Clock, Target, Globe, Megaphone, Palette, Bot, Code, Brain, Sparkles, Network, Shield, Layers, Activity } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';
import { NeuralNet, AIOrb } from '@/components/neural-net';

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

/* ─── Typing text animation ─── */
function TypingText({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < word.length) {
          setDisplayed(word.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1));
        } else {
          setDeleting(false);
          setIdx((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, words]);

  return (
    <span className="gradient-text-cyan">
      {displayed}
      <span className="animate-pulse text-[#06B6D4]">|</span>
    </span>
  );
}

const whyUs = [
  { title: 'End-to-End AI Partner', desc: 'Strategy, design, AI development, and deployment — one accountable team that owns your results.', icon: <LinkIcon className="w-5 h-5" /> },
  { title: 'AI-First Execution', desc: 'Every project integrates cutting-edge AI to achieve 10x results at a fraction of traditional cost.', icon: <Brain className="w-5 h-5" /> },
  { title: 'Real-Time Insights', desc: 'Weekly reports, live KPI dashboards, and zero ambiguity on where your investment performs.', icon: <Activity className="w-5 h-5" /> },
  { title: 'Ship in 7 Days', desc: 'No months-long discovery. First working AI deliverables in your hands within one week.', icon: <Clock className="w-5 h-5" /> },
  { title: 'Measurable ROI', desc: 'We define success metrics upfront and are fully accountable to every one of them.', icon: <Target className="w-5 h-5" /> },
  { title: 'Scalable Systems', desc: 'AI systems built to grow — from 10 to 10 million users without re-architecting.', icon: <Layers className="w-5 h-5" /> },
];

const catIcons: Record<string, React.ReactNode> = {
  'digital-marketing': <Megaphone className="w-6 h-6" />,
  'creative-media': <Palette className="w-6 h-6" />,
  'ai-automation': <Bot className="w-6 h-6" />,
  'software-development': <Code className="w-6 h-6" />,
};

const catColors: Record<string, { accent: string; glow: string; border: string }> = {
  'digital-marketing':  { accent: '#06B6D4', glow: 'rgba(6,182,212,0.15)',   border: 'rgba(6,182,212,0.3)' },
  'creative-media':     { accent: '#A78BFA', glow: 'rgba(167,139,250,0.15)', border: 'rgba(167,139,250,0.3)' },
  'ai-automation':      { accent: '#34D399', glow: 'rgba(52,211,153,0.15)',  border: 'rgba(52,211,153,0.3)' },
  'software-development':{ accent: '#F472B6', glow: 'rgba(244,114,182,0.15)', border: 'rgba(244,114,182,0.3)' },
};

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden bg-[#030712] pb-20">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-14 sm:pt-16">
        {/* Neural network canvas bg */}
        <div className="absolute inset-0 pointer-events-none">
          <NeuralNet className="w-full h-full opacity-60" />
        </div>

        {/* Grid */}
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />

        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left */}
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 sm:mb-8 border tracking-[0.08em] animate-border-glow"
                style={{ background: 'rgba(6,182,212,0.05)', borderColor: 'rgba(6,182,212,0.3)', color: '#06B6D4' }}>
                <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
                AI Marketing & Development Agency
              </div>

              <h1 className="font-black leading-[1.05] text-white mb-5 sm:mb-6">
                <span className="block">We Build</span>
                <span className="block my-1 min-h-[1.1em]">
                  <TypingText words={['AI Automation', 'Neural Systems', 'Smart Agents', 'ML Pipelines', 'Growth Machines']} />
                </span>
                <span className="block">That Scale</span>
              </h1>

              <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl"
                style={{ color: '#94A3B8' }}>
                From custom AI models to autonomous marketing systems — MetLink engineers
                end-to-end digital transformation that drives compounding, measurable revenue.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link href="/services"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-sm text-[#030712] transition-all hover:brightness-110 active:scale-95 glow-cyan"
                  style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)' }}>
                  <Sparkles className="w-4 h-4" />
                  Explore AI Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-sm border transition-all hover:bg-white/5"
                  style={{ borderColor: '#1E293B', color: '#E2E8F0' }}>
                  View Our Work
                </Link>
              </div>

              <StaggerChildren className="flex flex-wrap items-center gap-x-10 gap-y-6 mt-12 sm:mt-16">
                {[
                  ['150+', 'Projects', 'Delivered'],
                  ['80+', 'Clients', 'Globally'],
                  ['5+', 'Years', 'Experience'],
                  ['$10M+', 'Revenue', 'Generated'],
                ].map(([v, l, sub]) => (
                  <StaggerItem key={l} className="group/stat">
                    <div className="flex flex-col">
                      <p className="text-3xl sm:text-4xl font-black gradient-text-cyan transition-transform group-hover/stat:scale-110 origin-left">{v}</p>
                      <p className="text-[10px] font-black text-white/90 uppercase tracking-[0.2em] mt-2 mb-0.5">{l}</p>
                      <p className="text-[10px] uppercase tracking-widest opacity-40" style={{ color: '#64748B' }}>{sub}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </FadeIn>

            {/* Right — AI Orb + stat cards */}
            <FadeIn delay={0.2} y={50} className="hidden lg:flex flex-col items-center gap-6 relative">
              {/* Orb */}
              <div className="animate-float">
                <AIOrb size={340} />
              </div>

              {/* Floating stat cards around orb */}
              <div className="absolute top-0 right-0 p-5 rounded-2xl glass animate-border-glow"
                style={{ border: '1px solid rgba(6,182,212,0.2)' }}>
                <p className="text-[9px] font-bold uppercase tracking-widest mb-2" style={{ color: '#64748B' }}>AI Models Deployed</p>
                <p className="text-3xl font-black" style={{ color: '#06B6D4' }}>500%</p>
                <p className="text-xs mt-1" style={{ color: '#64748B' }}>Average ROI</p>
              </div>

              <div className="absolute bottom-4 left-0 p-5 rounded-2xl glass"
                style={{ border: '1px solid rgba(139,92,246,0.2)' }}>
                <p className="text-[9px] font-bold uppercase tracking-widest mb-2" style={{ color: '#64748B' }}>Automation Rate</p>
                <p className="text-3xl font-black" style={{ color: '#8B5CF6' }}>10x</p>
                <p className="text-xs mt-1" style={{ color: '#64748B' }}>Faster Workflows</p>
              </div>

              <div className="absolute top-1/2 -left-4 p-4 rounded-xl glass"
                style={{ border: '1px solid rgba(52,211,153,0.2)', transform: 'translateY(-50%)' }}>
                <p className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: '#64748B' }}>Retention</p>
                <p className="text-2xl font-black" style={{ color: '#34D399' }}>94%</p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #030712, transparent)' }} />
      </section>

      {/* ─── INTEGRATIONS ─── */}
      <section className="relative overflow-hidden" style={{ background: '#06090f' }}>
        {/* Center radial glow matching reference */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(14,60,110,0.55) 0%, rgba(6,9,15,0) 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 sm:py-20 flex flex-col items-center gap-12">
          {/* Label */}
          <p className="text-[10px] font-medium uppercase tracking-[0.5em]" style={{ color: '#475569', letterSpacing: '0.45em' }}>
            Integrations
          </p>

          {/* Logo row */}
          <div className="w-full flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
            {/* Google Drive */}
            <div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg"
                alt="Google Drive" className="h-8 w-8 object-contain" />
            </div>

            {/* Notion */}
            <div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
                alt="Notion" className="h-7 w-7 object-contain rounded-md" style={{ filter: 'invert(1)' }} />
              <span className="text-lg font-semibold" style={{ color: '#E2E8F0', letterSpacing: '-0.01em' }}>Notion</span>
            </div>

            {/* Klaviyo — text logo */}
            <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
              <span className="text-xl font-bold tracking-tight" style={{ color: '#E2E8F0' }}>klaviyo</span>
            </div>

            {/* OpenAI */}
            <div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
                alt="OpenAI" className="h-6 object-contain" style={{ filter: 'invert(1)' }} />
            </div>

            {/* Claude / Anthropic */}
            <div className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity duration-300">
              {/* Anthropic star SVG */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" fill="#D97757" />
              </svg>
              <span className="text-xl font-semibold" style={{ color: '#E2E8F0' }}>Claude</span>
            </div>

            {/* Make / Integromat */}
            <div className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity duration-300">
              {/* Make logo: three circles connected */}
              <svg width="32" height="20" viewBox="0 0 40 24" fill="none">
                <circle cx="8"  cy="12" r="6" stroke="#E2E8F0" strokeWidth="2" fill="none" />
                <circle cx="20" cy="12" r="6" stroke="#E2E8F0" strokeWidth="2" fill="none" />
                <circle cx="32" cy="12" r="6" stroke="#E2E8F0" strokeWidth="2" fill="none" />
              </svg>
              <span className="text-lg font-bold italic" style={{ color: '#E2E8F0' }}>make</span>
            </div>

            {/* LangChain */}
            <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
              <span className="text-lg font-semibold" style={{ color: '#E2E8F0' }}>LangChain</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── IMPACT STATS ─── */}
      <section className="py-16 sm:py-24 lg:py-32 relative">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-10 sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 sm:mb-4" style={{ color: '#06B6D4' }}>
              By the Numbers
            </p>
            <h2 className="font-black text-white">Results That Speak for Themselves</h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: 150, suffix: '+', label: 'Projects Delivered', sub: 'Across 16 service lines', color: '#06B6D4' },
              { value: 10, suffix: 'M+', label: 'Revenue Generated', sub: 'For our clients', color: '#8B5CF6' },
              { value: 80, suffix: '+', label: 'Happy Clients', sub: 'Across 15+ countries', color: '#34D399' },
              { value: 94, suffix: '%', label: 'Retention Rate', sub: 'Stay with us long-term', color: '#F472B6' },
            ].map((s) => (
              <StaggerItem key={s.label}>
                <div className="group text-center py-8 sm:py-10 px-4 sm:px-6 rounded-2xl glass card-3d transition-all duration-300 hover:shadow-lg cursor-default"
                  style={{ border: '1px solid rgba(30,41,59,0.8)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = s.color + '40';
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${s.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,41,59,0.8)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '';
                  }}>
                  <p className="text-3xl sm:text-5xl font-black mb-2 sm:mb-3 transition-transform group-hover:scale-110"
                    style={{ color: s.color }}>
                    <Counter target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="font-bold text-white text-sm sm:text-base mb-1">{s.label}</p>
                  <p className="text-xs sm:text-sm" style={{ color: '#64748B' }}>{s.sub}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-16 sm:py-24 lg:py-32 relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(139,92,246,0.04), transparent 60%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-10 sm:mb-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 sm:mb-4 flex items-center gap-2" style={{ color: '#06B6D4' }}>
                <Zap className="w-4 h-4" /> What We Build
              </p>
              <h2 className="font-black text-white">Four Pillars.<br />One AI-First Agency.</h2>
            </div>
            <Link href="/services"
              className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm border transition-all hover:bg-white/5"
              style={{ borderColor: 'rgba(6,182,212,0.2)', color: '#06B6D4' }}>
              All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {serviceCategories.map((cat) => {
              const c = catColors[cat.slug] || { accent: '#06B6D4', glow: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.3)' };
              return (
                <StaggerItem key={cat.slug}>
                  <Link href={`/services/${cat.slug}`}
                    className="group block h-full p-8 sm:p-10 rounded-[2rem] glass relative overflow-hidden transition-all duration-500 card-3d"
                    style={{ border: '1px solid rgba(30,41,59,0.8)' }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = c.border;
                      el.style.boxShadow = `0 20px 60px ${c.glow}`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = 'rgba(30,41,59,0.8)';
                      el.style.boxShadow = '';
                    }}>

                    {/* Glow orb */}
                    <div className="absolute top-0 right-0 w-48 h-48 rounded-full translate-x-16 -translate-y-16 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                      style={{ background: `radial-gradient(circle, ${c.glow}, transparent 70%)` }} />

                    {/* Circuit decoration */}
                    <div className="absolute bottom-0 right-0 w-32 h-24 opacity-10 group-hover:opacity-30 transition-opacity">
                      <svg viewBox="0 0 128 96" fill="none">
                        <path d="M128 0 L80 0 L80 32 L48 32 L48 96" stroke={c.accent} strokeWidth="1" />
                        <circle cx="80" cy="32" r="3" fill={c.accent} />
                        <circle cx="48" cy="32" r="3" fill={c.accent} />
                      </svg>
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-8">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                          style={{ background: `${c.accent}15`, border: `1px solid ${c.accent}30`, color: c.accent }}>
                          {catIcons[cat.slug]}
                        </div>
                        <div className="w-10 h-10 rounded-full border flex items-center justify-center transition-all group-hover:scale-110"
                          style={{ borderColor: 'rgba(30,41,59,0.8)', color: '#475569' }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background = c.accent;
                            (e.currentTarget as HTMLElement).style.borderColor = c.accent;
                            (e.currentTarget as HTMLElement).style.color = '#030712';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background = '';
                            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,41,59,0.8)';
                            (e.currentTarget as HTMLElement).style.color = '#475569';
                          }}>
                          <ChevronRight className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <p className="text-[10px] font-black uppercase tracking-[0.25em] mb-3" style={{ color: c.accent }}>{cat.name}</p>
                        <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">{cat.tagline}</h3>
                        <p className="text-sm sm:text-base leading-relaxed mb-10 opacity-60 group-hover:opacity-90 transition-opacity"
                          style={{ color: '#94A3B8' }}>
                          {cat.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-6" style={{ borderTop: '1px solid rgba(30,41,59,0.5)' }}>
                        {cat.services.map((svc) => (
                          <span key={svc.slug}
                            className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all"
                            style={{ background: 'rgba(15,23,42,0.8)', color: '#475569', border: '1px solid rgba(30,41,59,0.8)' }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.color = c.accent;
                              (e.currentTarget as HTMLElement).style.borderColor = `${c.accent}40`;
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.color = '#475569';
                              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,41,59,0.8)';
                            }}>
                            {svc.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── AI CAPABILITIES STRIP ─── */}
      <section className="py-16 sm:py-20 border-y relative overflow-hidden"
        style={{ borderColor: 'rgba(30,41,59,0.5)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.03) 0%, rgba(139,92,246,0.03) 100%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: '#8B5CF6' }}>AI Capabilities</p>
            <h2 className="font-black text-white">Powered by the Latest Models</h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'GPT-4o & o3', label: 'OpenAI', color: '#10B981' },
              { name: 'Claude 3.5 Sonnet', label: 'Anthropic', color: '#F59E0B' },
              { name: 'Gemini 2.5 Flash', label: 'Google', color: '#3B82F6' },
              { name: 'LangChain + RAG', label: 'Orchestration', color: '#8B5CF6' },
              { name: 'Pinecone / Weaviate', label: 'Vector DBs', color: '#06B6D4' },
              { name: 'HuggingFace', label: 'Open Source', color: '#F97316' },
              { name: 'AWS / GCP / Azure', label: 'Cloud Infra', color: '#EF4444' },
              { name: 'MLflow + Weights & Biases', label: 'MLOps', color: '#A78BFA' },
            ].map((cap) => (
              <StaggerItem key={cap.name}>
                <div className="group p-4 sm:p-5 rounded-xl glass transition-all duration-300 cursor-default"
                  style={{ border: '1px solid rgba(30,41,59,0.6)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${cap.color}40`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${cap.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,41,59,0.6)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '';
                  }}>
                  <div className="w-2 h-2 rounded-full mb-3" style={{ background: cap.color, boxShadow: `0 0 8px ${cap.color}` }} />
                  <p className="text-sm font-bold text-white mb-1">{cap.name}</p>
                  <p className="text-[10px] uppercase tracking-wider" style={{ color: '#475569' }}>{cap.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="py-16 sm:py-24 lg:py-32 border-t relative"
        style={{ borderColor: 'rgba(30,41,59,0.5)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(6,182,212,0.03), transparent 60%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-10 sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 sm:mb-4" style={{ color: '#06B6D4' }}>Why MetLink</p>
            <h2 className="font-black text-white">What Sets Us Apart</h2>
            <p className="mt-4 sm:mt-5 max-w-2xl mx-auto text-base sm:text-lg" style={{ color: '#64748B' }}>
              There are hundreds of agencies. Here is why the fastest-growing businesses choose MetLink.
            </p>
          </FadeIn>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyUs.map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="group p-6 sm:p-8 rounded-2xl glass transition-all duration-300 card-3d cursor-default"
                  style={{ border: '1px solid rgba(30,41,59,0.8)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.2)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 40px rgba(6,182,212,0.05)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,41,59,0.8)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '';
                  }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 sm:mb-6 transition-all group-hover:scale-110"
                    style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.15)', color: '#06B6D4' }}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-white mb-2 sm:mb-3 tracking-wide">{item.title}</h3>
                  <p className="text-sm leading-loose" style={{ color: '#64748B' }}>{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 sm:py-32 lg:py-40 relative overflow-hidden text-center border-t"
        style={{ borderColor: 'rgba(30,41,59,0.5)' }}>
        {/* BG network */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <NeuralNet />
        </div>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(139,92,246,0.08), transparent 60%)' }} />

        <FadeIn className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 border px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] mb-5 sm:mb-6"
            style={{ borderColor: 'rgba(6,182,212,0.2)', color: '#06B6D4', background: 'rgba(6,182,212,0.05)' }}>
            <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
            Ready to Deploy AI?
          </div>
          <h2 className="font-black text-white mb-6 sm:mb-8 leading-[1.1]">
            Let&apos;s Build Something<br />
            <span className="gradient-text-cyan">Extraordinary</span>
          </h2>
          <p className="mb-8 sm:mb-12 text-base sm:text-lg max-w-xl mx-auto" style={{ color: '#64748B' }}>
            Book a free 30-min AI strategy call. No commitments, no sales pressure —
            just clarity on what AI would drive the most growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
            <Link href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-black text-sm sm:text-base text-[#030712] transition-all hover:brightness-110 active:scale-95 glow-cyan"
              style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)' }}>
              Book AI Strategy Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-sm sm:text-base border transition-all hover:bg-white/5"
              style={{ borderColor: 'rgba(30,41,59,0.8)', color: '#E2E8F0' }}>
              See Our Work First
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
