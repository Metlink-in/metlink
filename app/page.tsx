'use client';

import Link from 'next/link';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';

const CR = '#FAF9F6';   // cream bg
const WH = '#FFFFFF';   // white
const DK = '#192540';   // dark text
const MU = '#72645A';   // muted
const LM = '#ADA09A';   // light muted
const BD = '#E5DDD5';   // border
const AC = '#2B80F0';   // radish accent

const integrations = [
  { label: 'OpenAI',      dot: '#10B981' },
  { label: 'Anthropic',   dot: '#D97706' },
  { label: 'Notion',      dot: '#192540' },
  { label: 'Klaviyo',     dot: '#F59E0B' },
  { label: 'LangChain',   dot: '#2B80F0' },
  { label: 'Pinecone',    dot: '#16A34A' },
  { label: 'Make',        dot: '#A855F7' },
  { label: 'Supabase',    dot: '#3ECF8E' },
  { label: 'Vercel',      dot: '#192540' },
  { label: 'HuggingFace', dot: '#F97316' },
  { label: 'Stripe',      dot: '#6366F1' },
  { label: 'Zapier',      dot: '#FF4A00' },
];

const services = [
  {
    num: '01', color: '#2B80F0',
    title: 'Digital Marketing',
    tagline: 'Data-driven growth at scale.',
    desc: 'Performance marketing, SEO, and brand strategy that turns audiences into customers.',
    bullets: ['Performance Marketing', 'SEO & Content', 'Personal Branding', 'Social Media'],
  },
  {
    num: '02', color: '#D97706',
    title: 'Creative Media',
    tagline: 'Visuals that stop the scroll.',
    desc: 'World-class production — brand identity to high-volume video — built to convert.',
    bullets: ['Brand Identity', 'Video & UGC', 'Motion Design', 'Web & UI/UX'],
  },
  {
    num: '03', color: '#16A34A',
    title: 'AI & Automation',
    tagline: 'Intelligent systems. Infinite scale.',
    desc: 'Cutting-edge AI that transforms operations and unlocks business intelligence.',
    bullets: ['AI Integration', 'Data Science', 'Machine Learning', 'Conversational AI'],
  },
  {
    num: '04', color: '#2563EB',
    title: 'Software Development',
    tagline: 'Code that scales. Systems that last.',
    desc: 'End-to-end product engineering — web, mobile, and cloud — built to grow.',
    bullets: ['Web & Mobile Apps', 'Cloud & APIs', 'AI Integration', 'Automation'],
  },
];

const steps = [
  {
    num: '01',
    title: 'Discover & Define',
    desc: 'Deep-dive strategy session. We map your goals, data, and systems to find where AI creates leverage.',
  },
  {
    num: '02',
    title: 'Build & Integrate',
    desc: 'We ship working AI systems in days, not months. Modular, tested, integrated into your stack.',
  },
  {
    num: '03',
    title: 'Scale & Optimize',
    desc: 'We monitor, retrain, and evolve continuously — performance compounds over time.',
  },
];

const stack = [
  { name: 'GPT-4o & o3',   cat: 'OpenAI',        color: '#10B981' },
  { name: 'Claude 3.5',    cat: 'Anthropic',     color: '#D97706' },
  { name: 'Gemini 2.5',    cat: 'Google',        color: '#4285F4' },
  { name: 'LangChain',     cat: 'Orchestration', color: '#2B80F0' },
  { name: 'Pinecone',      cat: 'Vector DB',     color: '#16A34A' },
  { name: 'HuggingFace',   cat: 'Open Source',   color: '#F97316' },
  { name: 'AWS / GCP',     cat: 'Cloud Infra',   color: '#F59E0B' },
  { name: 'MLflow',        cat: 'MLOps',         color: '#A855F7' },
  { name: 'LlamaIndex',    cat: 'Retrieval',     color: '#6366F1' },
  { name: 'Kubernetes',    cat: 'Infra',         color: '#326CE5' },
  { name: 'FastAPI + Next',cat: 'Stack',         color: '#3ECF8E' },
  { name: 'Supabase',      cat: 'Data',          color: '#3ECF8E' },
];

const whyUs = [
  { title: 'End-to-End Partner',  desc: 'Strategy, design, dev, and deployment — one accountable team.' },
  { title: 'AI-First Execution',  desc: 'Every project integrates cutting-edge AI to deliver 10× results.' },
  { title: 'Real-Time Insights',  desc: 'Live KPI dashboards. Zero ambiguity on performance.' },
  { title: 'Ship in 7 Days',      desc: 'No lengthy discovery. First working deliverables in one week.' },
  { title: 'Measurable ROI',      desc: 'We define success metrics upfront and own every one.' },
  { title: 'Scalable Systems',    desc: 'Built to grow from 10 to 10 million users without re-architecting.' },
];

const PF = 'var(--font-playfair)';
const headingSize = 'clamp(1.8rem, 3.5vw, 2.8rem)';

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden" style={{ background: CR }}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section id="hero" className="relative overflow-hidden" style={{
        background: '#F2D5C8',
        minHeight: '100vh',
      }}>
        {/* Noise */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />

        {/* Floating LIVE DEPLOY — bottom-left, desktop only */}
        <div className="absolute bottom-[18%] left-[4%] hidden lg:block animate-float"
          style={{ zIndex: 20, animationDelay: '1s', width: 168 }}>
          <div className="p-4 rounded-2xl" style={{
            background: DK,
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
          }}>
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[9px] font-black uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.5)' }}>Live Deploy</p>
            </div>
            <p className="text-3xl font-black leading-none mb-1" style={{ color: WH, fontFamily: PF }}>7 days</p>
            <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>avg. time to ship</p>
          </div>
        </div>

        {/* Floating testimonial card — top-right, desktop only */}
        <div className="absolute top-[14%] right-[4%] w-[260px] hidden lg:block animate-float"
          style={{ zIndex: 20, animationDelay: '0.4s', transform: 'rotate(2deg)' }}>
          <div className="p-5 rounded-2xl" style={{
            background: WH,
            border: `1px solid ${BD}`,
            boxShadow: '0 20px 60px rgba(0,0,0,0.10)',
          }}>
            <div className="flex gap-0.5 mb-2.5">
              {[0,1,2,3,4].map(i => <Star key={i} className="w-3 h-3 fill-current" style={{ color: '#FBBF24' }} />)}
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ color: DK }}>
              &ldquo;MetLink shipped our AI agent in <strong>6 days</strong>. Revenue up 38%.&rdquo;
            </p>
            <p className="text-[11px] pt-3" style={{ borderTop: `1px solid #F0EBE3`, color: LM }}>
              &mdash; Sarah K, Series B SaaS
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-16 text-center flex flex-col items-center">

          {/* Agency badge */}
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium"
              style={{ background: WH, border: `1px solid ${BD}`, color: MU, boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              AI Marketing &amp; Development Agency
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={0.08}>
            <h1 className="font-black leading-[1.0] mb-6"
              style={{
                color: DK,
                fontFamily: PF,
                fontSize: 'clamp(2.8rem, 6vw, 5.4rem)',
              }}>
              We build{' '}
              <em style={{ fontStyle: 'italic', color: AC }}>AI automation</em>
              {' '}that actually scales.
            </h1>
          </FadeIn>

          {/* Subtext */}
          <FadeIn delay={0.14}>
            <p className="text-lg sm:text-xl mb-10 max-w-2xl leading-relaxed" style={{ color: MU }}>
              Strategy, design, and engineering — one team shipping production AI systems for ambitious brands. From idea to live product in days.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white transition-all hover:brightness-95 active:scale-95"
                style={{ background: AC, boxShadow: '0 4px 24px rgba(43,128,240,0.30)' }}>
                <Sparkles className="w-4 h-4" />
                Start building with AI
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/services"
                className="inline-flex items-center px-7 py-4 rounded-full font-semibold text-sm transition-all hover:bg-black/5"
                style={{ border: `1px solid rgba(28,20,16,0.18)`, color: DK, background: 'rgba(255,255,255,0.70)' }}>
                See our work
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Stats row — inside hero */}
        <StaggerChildren className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
          {[
            ['150+', 'Projects'],
            ['80+',  'Clients'],
            ['$10M+','Revenue'],
            ['94%',  'Retention'],
          ].map(([val, lbl]) => (
            <StaggerItem key={lbl} className="flex flex-col items-center">
              <p className="font-black leading-none mb-1.5"
                style={{ color: DK, fontFamily: PF, fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>{val}</p>
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold" style={{ color: LM }}>{lbl}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* ══════════════════════════════════════
          INTEGRATIONS MARQUEE
      ══════════════════════════════════════ */}
      <section className="py-12 sm:py-14 overflow-hidden" style={{ background: WH, borderTop: `1px solid ${BD}`, borderBottom: `1px solid ${BD}` }}>
        <FadeIn className="text-center mb-6 px-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.45em]" style={{ color: LM }}>Integrations &amp; partners</p>
        </FadeIn>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-20 sm:w-36 z-10 pointer-events-none"
            style={{ background: `linear-gradient(to right, ${WH}, transparent)` }} />
          <div className="absolute inset-y-0 right-0 w-20 sm:w-36 z-10 pointer-events-none"
            style={{ background: `linear-gradient(to left, ${WH}, transparent)` }} />
          {/* Single row, duplicated for seamless loop */}
          <div style={{ overflow: 'hidden' }}>
            <div style={{ display: 'flex', width: 'max-content', animation: 'scroll 28s linear infinite' }}>
              {[...integrations, ...integrations].map((item, i) => (
                <div key={i}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full shrink-0 mx-2"
                  style={{ background: CR, border: `1px solid ${BD}` }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: item.dot }} />
                  <span className="text-sm font-semibold whitespace-nowrap" style={{ color: MU }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES
      ══════════════════════════════════════ */}
      <section id="services" className="py-20 sm:py-28" style={{ background: CR }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeIn className="flex flex-wrap items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.45em] mb-3" style={{ color: AC }}>Services</p>
              <h2 className="font-black leading-[1.05]" style={{ color: DK, fontFamily: PF, fontSize: headingSize }}>
                What we <em style={{ fontStyle: 'italic', color: AC }}>build</em> for clients.
              </h2>
            </div>
            <Link href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-60"
              style={{ color: DK }}>
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>

          {/* 4 cards in a grid — separated by 1px border lines */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ border: `1px solid ${BD}` }}>
            {services.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.07}>
                <div className="flex flex-col p-8 h-full transition-colors hover:bg-white"
                  style={{
                    borderRight: i < 3 ? `1px solid ${BD}` : undefined,
                    borderBottom: `1px solid ${BD}`,
                  }}>
                  <p className="text-xs font-bold mb-5 tracking-widest" style={{ color: LM }}>{s.num}</p>
                  <h3 className="text-lg font-black mb-1.5" style={{ color: DK, fontFamily: PF }}>{s.title}</h3>
                  <p className="text-sm font-semibold mb-4" style={{ color: s.color }}>{s.tagline}</p>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: MU }}>{s.desc}</p>
                  <ul className="mt-auto space-y-2">
                    {s.bullets.map(b => (
                      <li key={b} className="flex items-center gap-2 text-[13px]" style={{ color: MU }}>
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESS
      ══════════════════════════════════════ */}
      <section id="process" className="py-20 sm:py-28" style={{ background: WH, borderTop: `1px solid ${BD}`, borderBottom: `1px solid ${BD}` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeIn className="mb-14">
            <p className="text-[10px] font-bold uppercase tracking-[0.45em] mb-3" style={{ color: AC }}>Process</p>
            <h2 className="font-black leading-[1.05]" style={{ color: DK, fontFamily: PF, fontSize: headingSize }}>
              How we <em style={{ fontStyle: 'italic', color: AC }}>work</em>.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-bold" style={{ color: LM }}>{step.num}</span>
                    <div className="flex-1 h-px" style={{ background: BD }} />
                  </div>
                  <h3 className="text-xl font-black mb-3" style={{ color: DK, fontFamily: PF }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: MU }}>{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          AI STACK
      ══════════════════════════════════════ */}
      <section id="stack" className="py-20 sm:py-28" style={{ background: CR }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeIn className="mb-10 max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.45em] mb-3" style={{ color: AC }}>AI Stack</p>
            <h2 className="font-black leading-[1.05] mb-4" style={{ color: DK, fontFamily: PF, fontSize: headingSize }}>
              Powered by the <em style={{ fontStyle: 'italic', color: AC }}>best</em> models.
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: MU }}>
              Frontier LLMs, vector databases, and production MLOps tooling. We build AI systems that actually work at scale.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-60"
              style={{ color: AC }}>
              Explore AI services <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {stack.map(t => (
              <StaggerItem key={t.name}>
                <div className="flex flex-col gap-0.5 p-4 rounded-xl transition-all hover:-translate-y-0.5"
                  style={{ background: WH, border: `1px solid ${BD}` }}>
                  <p className="text-[13px] font-black" style={{ color: DK }}>{t.name}</p>
                  <p className="text-[11px] font-semibold" style={{ color: t.color }}>{t.cat}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY METLINK
      ══════════════════════════════════════ */}
      <section className="py-20 sm:py-28" style={{ background: WH, borderTop: `1px solid ${BD}` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeIn className="mb-14">
            <p className="text-[10px] font-bold uppercase tracking-[0.45em] mb-3" style={{ color: AC }}>Why MetLink</p>
            <h2 className="font-black leading-[1.05]" style={{ color: DK, fontFamily: PF, fontSize: headingSize }}>
              What sets us <em style={{ fontStyle: 'italic', color: AC }}>apart</em>.
            </h2>
          </FadeIn>

          <div style={{ border: `1px solid ${BD}` }}>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {whyUs.map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="p-8 transition-colors hover:bg-[#FAF9F6]"
                  style={{
                    borderRight: [0,1,3,4].includes(i) ? `1px solid ${BD}` : undefined,
                    borderBottom: i < 3 ? `1px solid ${BD}` : undefined,
                    background: WH,
                  }}>
                  <p className="text-xs font-bold mb-3" style={{ color: LM }}>0{i + 1}</p>
                  <h3 className="text-base font-black mb-2" style={{ color: DK }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: MU }}>{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      <section id="contact" className="py-16 sm:py-24" style={{ background: CR }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative rounded-[28px] overflow-hidden text-center px-8 sm:px-16 py-16 sm:py-20"
              style={{
                background: '#110E09',
                boxShadow: '0 40px 100px rgba(0,0,0,0.28)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
              {/* Glows */}
              <div className="absolute -top-20 -right-20 w-[560px] h-[560px] pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(43,128,240,0.55) 0%, rgba(43,128,240,0.18) 40%, transparent 70%)', filter: 'blur(60px)' }} />
              <div className="absolute -bottom-20 -left-20 w-[380px] h-[380px] pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(20,60,45,0.7) 0%, transparent 65%)', filter: 'blur(80px)' }} />

              <div className="relative z-10 flex flex-col items-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold mb-7"
                  style={{ border: '1px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.65)' }}>
                  <Sparkles className="w-3 h-3" />
                  Let&apos;s build together
                </div>

                {/* Headline */}
                <h2 className="font-black leading-[1.05] mb-5"
                  style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontFamily: PF, color: '#FAF5F0' }}>
                  Ready to scale with{' '}
                  <em style={{ fontStyle: 'italic', color: '#4B9CF4' }}>AI?</em>
                </h2>

                {/* Subtext */}
                <p className="text-base sm:text-lg mb-10 max-w-xl leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.52)' }}>
                  Book a free 30-min strategy call. No commitments — just clarity on what AI can do for your business.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 justify-center">
                  <a href="mailto:hello@metlink.ai"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white transition-all hover:brightness-110 active:scale-95"
                    style={{ background: AC, boxShadow: '0 0 40px rgba(43,128,240,0.5)' }}>
                    Book your strategy call
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <Link href="/services"
                    className="inline-flex items-center px-8 py-4 rounded-full font-semibold text-sm transition-all hover:border-white/30"
                    style={{ border: '1px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.75)' }}>
                    See services
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
