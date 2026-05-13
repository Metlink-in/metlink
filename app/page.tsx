'use client';

import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Code2, Brain, Megaphone, Palette, CheckCircle, Sparkles } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';

const A = '#FAF9F6';
const B = '#FFFFFF';

function Wave({ from, to, flip = false }: { from: string; to: string; flip?: boolean }) {
  return (
    <div style={{ background: from, lineHeight: 0, fontSize: 0 }}>
      <svg viewBox="0 0 1440 48" preserveAspectRatio="none"
        style={{ width: '100%', height: 48, display: 'block', transform: flip ? 'scaleX(-1)' : undefined }}>
        <path d="M0,48 L0,22 C360,48 1080,0 1440,22 L1440,48 Z" fill={to} />
      </svg>
    </div>
  );
}

const services = [
  { icon: Brain,     label: 'AI & Automation',     desc: 'Intelligent systems that learn, adapt, and drive revenue on autopilot.',               color: '#C84B30', num: '01' },
  { icon: Code2,     label: 'Software Development', desc: 'Production-grade platforms built fast with modern, maintainable code.',                  color: '#2563EB', num: '02' },
  { icon: Megaphone, label: 'Digital Marketing',    desc: 'Data-driven campaigns that bring measurable growth and proven ROI.',                     color: '#16A34A', num: '03' },
  { icon: Palette,   label: 'Creative & Media',     desc: 'Brand stories told through stunning visual design and world-class media.',               color: '#D97706', num: '04' },
];

const integrations = [
  { label: 'OpenAI',       color: '#10B981' },
  { label: 'Claude AI',    color: '#D97706' },
  { label: 'Google Drive', color: '#4285F4' },
  { label: 'Notion',       color: '#1C1410' },
  { label: 'Klaviyo',      color: '#F59E0B' },
  { label: 'Make',         color: '#A855F7' },
  { label: 'LangChain',    color: '#C84B30' },
  { label: 'Pinecone',     color: '#16A34A' },
  { label: 'Shopify',      color: '#95BF47' },
  { label: 'HubSpot',      color: '#F97316' },
  { label: 'Zapier',       color: '#FF4A00' },
  { label: 'Supabase',     color: '#3ECF8E' },
];

const clientsRow1 = ['TechVista', 'FinEdge Capital', 'BuildSmart', 'NovaMed Health', 'SwiftCart', 'DataPulse', 'GreenLeaf Agro'];
const clientsRow2 = ['AeroVault', 'PrimeLogic', 'NextScale', 'FlowBase', 'UrbanMove', 'CloudSync', 'BoldBrand'];

const testimonials = [
  {
    quote: "MetLink's AI automation completely transformed our lead pipeline. We went from 50 to 400 qualified leads per month without increasing ad spend.",
    name: 'Rohan Mehta', role: 'CEO', company: 'FinEdge Capital', stars: 5, color: '#C84B30', result: '8× Lead Growth',
  },
  {
    quote: "Their software team delivered a production-grade platform in just 3 weeks. Blown away by the code quality and how seamlessly they integrated with our stack.",
    name: 'Priya Sharma', role: 'CTO', company: 'SwiftCart Commerce', stars: 5, color: '#2563EB', result: '3 Weeks to Launch',
  },
  {
    quote: "The AI chatbot they built handles 70% of our support tickets automatically. Our team now focuses on high-value work. ROI was positive in the first month.",
    name: 'Arjun Singh', role: 'Head of Operations', company: 'NovaMed Health', stars: 5, color: '#16A34A', result: '70% Automation',
  },
];

const techStack = [
  { category: 'AI / ML',      color: '#C84B30', items: ['GPT-4o', 'Claude 3.7', 'Gemini 2.5', 'LangChain', 'LlamaIndex', 'HuggingFace'] },
  { category: 'Frontend',     color: '#2563EB', items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind', 'Framer Motion', 'Three.js'] },
  { category: 'Backend',      color: '#16A34A', items: ['FastAPI', 'Node.js', 'Python', 'GraphQL', 'WebSockets', 'Redis'] },
  { category: 'Cloud & Data', color: '#D97706', items: ['AWS', 'GCP', 'Vercel', 'Supabase', 'Pinecone', 'PostgreSQL'] },
];

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden" style={{ background: A }}>

      {/* ══════════════════════════════════
          HERO — centered layout
      ══════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{
        background: 'linear-gradient(110deg, #EDBEAA 0%, #FAF0EA 35%, #EAF3EE 65%, #C2D8D2 100%)',
        minHeight: '100vh',
      }}>
        {/* Subtle noise texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />

        {/* ── Floating testimonial card — TOP RIGHT, desktop only ── */}
        <div className="absolute top-[18%] right-[4%] w-[265px] hidden lg:block animate-float"
          style={{ zIndex: 20, animationDelay: '0.4s', transform: 'rotate(2deg)' }}>
          <div className="p-5 rounded-2xl" style={{
            background: '#FFFFFF',
            border: '1px solid #E5DDD5',
            boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)',
          }}>
            <div className="flex gap-0.5 mb-2.5">
              {[0,1,2,3,4].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: '#FBBF24' }} />)}
            </div>
            <p className="text-sm font-medium leading-relaxed mb-3" style={{ color: '#1C1410' }}>
              &ldquo;MetLink shipped our AI agent in{' '}
              <strong style={{ color: '#1C1410' }}>6 days.</strong>{' '}
              Revenue up 38%.&rdquo;
            </p>
            <p className="text-[11px] pt-3 mt-1" style={{ borderTop: '1px solid #F0EBE3', color: '#ADA09A' }}>
              &mdash; Sarah K. &nbsp;&middot;&nbsp; Series B SaaS
            </p>
          </div>
        </div>

        {/* ── Floating LIVE DEPLOY card — BOTTOM LEFT, desktop only ── */}
        <div className="absolute bottom-[16%] left-[4%] w-[168px] hidden lg:block animate-float"
          style={{ zIndex: 20, animationDelay: '1s' }}>
          <div className="p-4 rounded-2xl" style={{
            background: '#1C1410',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
          }}>
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[9px] font-black uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.5)' }}>Live Deploy</p>
            </div>
            <p className="text-3xl font-black leading-none mb-1" style={{ color: '#FFFFFF' }}>7 days</p>
            <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>avg. time to ship</p>
          </div>
        </div>

        {/* ── Main centered content ── */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-28 text-center flex flex-col items-center">

          {/* Badge */}
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-semibold"
              style={{ background: '#FFFFFF', border: '1px solid #E5DDD5', color: '#72645A', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              AI Marketing &amp; Development Agency
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={0.08}>
            <h1 className="font-black leading-[1.05] tracking-tight mb-6" style={{ color: '#1C1410', fontSize: 'clamp(2.4rem, 5vw, 4.2rem)' }}>
              We build{' '}
              <em style={{
                fontFamily: 'var(--font-playfair)',
                fontStyle: 'italic',
                fontWeight: 700,
                color: '#C84B30',
              }}>AI automation</em>
              {' '}that actually{' '}
              <span className="relative inline-block">
                scales.
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                  style={{ background: 'linear-gradient(90deg, #C84B30, #E8612A)' }} />
              </span>
            </h1>
          </FadeIn>

          {/* Subtitle */}
          <FadeIn delay={0.14}>
            <p className="text-lg sm:text-xl mb-10 max-w-2xl leading-relaxed" style={{ color: '#72645A' }}>
              Strategy, design, and engineering — one team shipping production AI systems for ambitious brands. From idea to live product in days.
            </p>
          </FadeIn>

          {/* CTA buttons */}
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white transition-all hover:brightness-95 active:scale-95"
                style={{ background: '#C84B30', boxShadow: '0 4px 24px rgba(200,75,48,0.35)' }}>
                <Sparkles className="w-4 h-4" />
                Start building with AI
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm transition-all hover:bg-black/5"
                style={{ border: '1px solid #D5CCBF', color: '#72645A', background: 'rgba(255,255,255,0.8)' }}>
                See our work
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════
          STATS STRIP
      ══════════════════════════════════ */}
      <section style={{ background: B, borderTop: '1px solid #E5DDD5', borderBottom: '1px solid #E5DDD5' }}>
        <StaggerChildren className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            ['150+', 'Projects'],
            ['80+',  'Clients'],
            ['$10M+','Revenue'],
            ['94%',  'Retention'],
          ].map(([val, lbl]) => (
            <StaggerItem key={lbl}>
              <p className="text-4xl font-black mb-1 leading-none" style={{ color: '#1C1410' }}>{val}</p>
              <p className="text-[11px] uppercase tracking-[0.22em] font-bold mt-1.5" style={{ color: '#ADA09A' }}>{lbl}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      <Wave from={B} to={A} flip />

      {/* ══════════════════════════════════
          INTEGRATIONS  (A)
      ══════════════════════════════════ */}
      <section className="relative overflow-hidden py-16 sm:py-20" style={{ background: A }}>
        <FadeIn className="text-center mb-12 px-4">
          <p className="text-[10px] font-black uppercase tracking-[0.45em] mb-3" style={{ color: '#ADA09A' }}>Powered By</p>
          <h2 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: '#1C1410' }}>
            Integrations That <span className="gradient-text-cyan">Drive Results</span>
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: '#72645A' }}>
            We plug into the tools your business already uses — and supercharge them with AI.
          </p>
        </FadeIn>

        <div className="relative space-y-3">
          <div className="absolute inset-y-0 left-0 w-28 sm:w-44 z-10 pointer-events-none"
            style={{ background: `linear-gradient(to right, ${A}, transparent)` }} />
          <div className="absolute inset-y-0 right-0 w-28 sm:w-44 z-10 pointer-events-none"
            style={{ background: `linear-gradient(to left, ${A}, transparent)` }} />

          <div className="animate-marquee flex items-center" style={{ width: 'max-content' }}>
            {[0,1,2,3].map(copy => (
              <div key={copy} className="flex items-center gap-3 pr-3">
                {integrations.slice(0, 6).map(item => (
                  <div key={item.label}
                    className="flex items-center gap-2.5 px-5 py-2.5 rounded-full whitespace-nowrap shrink-0"
                    style={{ background: B, border: '1px solid #E5DDD5' }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                    <span className="text-sm font-semibold" style={{ color: '#72645A' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-center" style={{ width: 'max-content', animation: 'marquee 32s linear infinite reverse' }}>
            {[0,1,2,3].map(copy => (
              <div key={copy} className="flex items-center gap-3 pr-3">
                {integrations.slice(6).map(item => (
                  <div key={item.label}
                    className="flex items-center gap-2.5 px-5 py-2.5 rounded-full whitespace-nowrap shrink-0"
                    style={{ background: B, border: '1px solid #E5DDD5' }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                    <span className="text-sm font-semibold" style={{ color: '#72645A' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Wave from={A} to={B} />

      {/* ══════════════════════════════════
          WHAT WE DO  (B)
      ══════════════════════════════════ */}
      <section className="relative py-24 sm:py-32" style={{ background: B }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4" style={{ color: '#C84B30' }}>What We Do</p>
            <h2 className="font-black mb-4" style={{ color: '#1C1410' }}>
              End-to-End{' '}
              <em style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: '#C84B30' }}>AI Services</em>
            </h2>
            <p className="max-w-xl mx-auto text-base" style={{ color: '#72645A' }}>
              From intelligent automation to world-class software — we deliver across every discipline.
            </p>
          </FadeIn>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(s => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.label}>
                  <div className="group relative flex flex-col h-full p-7 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                    style={{ background: A, border: '1px solid #E5DDD5' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${s.color}50`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px rgba(0,0,0,0.08), 0 0 0 1px ${s.color}30`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = '#E5DDD5';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}>
                    <div className="absolute top-0 left-0 right-0 h-0.5"
                      style={{ background: `linear-gradient(to right, transparent, ${s.color}80, transparent)` }} />
                    <p className="text-[11px] font-black mb-5 tracking-widest" style={{ color: `${s.color}60` }}>{s.num}</p>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${s.color}12`, color: s.color }}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-black mb-3" style={{ color: '#1C1410' }}>{s.label}</h3>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: '#72645A' }}>{s.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>

          <FadeIn delay={0.2} className="text-center mt-10">
            <Link href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold transition-colors hover:opacity-75"
              style={{ color: '#C84B30' }}>
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
      <Wave from={B} to={A} flip />

      {/* ══════════════════════════════════
          OUR CLIENTS  (A)
      ══════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden" style={{ background: A }}>
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4" style={{ color: '#C84B30' }}>Our Clients</p>
          <h2 className="font-black mb-4" style={{ color: '#1C1410' }}>
            Trusted by{' '}
            <em style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: '#C84B30' }}>250+ Businesses</em>
          </h2>
          <p className="max-w-lg mx-auto text-base" style={{ color: '#72645A' }}>
            From fast-growing startups to established enterprises — they chose MetLink to scale.
          </p>
        </FadeIn>

        <div className="relative space-y-3 mb-14">
          <div className="absolute inset-y-0 left-0 w-24 sm:w-40 z-10 pointer-events-none"
            style={{ background: `linear-gradient(to right, ${A}, transparent)` }} />
          <div className="absolute inset-y-0 right-0 w-24 sm:w-40 z-10 pointer-events-none"
            style={{ background: `linear-gradient(to left, ${A}, transparent)` }} />

          <div className="animate-marquee flex items-center" style={{ width: 'max-content' }}>
            {[0,1,2,3].map(copy => (
              <div key={copy} className="flex items-center gap-3 pr-3">
                {clientsRow1.map(name => (
                  <div key={name}
                    className="flex items-center justify-center px-6 py-3.5 rounded-xl whitespace-nowrap shrink-0"
                    style={{ background: B, border: '1px solid #E5DDD5', minWidth: 140 }}>
                    <span className="text-sm font-black tracking-wide" style={{ color: '#ADA09A' }}>{name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-center" style={{ width: 'max-content', animation: 'marquee 40s linear infinite reverse' }}>
            {[0,1,2,3].map(copy => (
              <div key={copy} className="flex items-center gap-3 pr-3">
                {clientsRow2.map(name => (
                  <div key={name}
                    className="flex items-center justify-center px-6 py-3.5 rounded-xl whitespace-nowrap shrink-0"
                    style={{ background: B, border: '1px solid #E5DDD5', minWidth: 140 }}>
                    <span className="text-sm font-black tracking-wide" style={{ color: '#ADA09A' }}>{name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-2.5">
          {['FinTech','Healthcare','E-Commerce','SaaS','Real Estate','Logistics','EdTech','Manufacturing'].map(tag => (
            <span key={tag}
              className="px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider cursor-default transition-all hover:border-orange-200 hover:text-[#C84B30]"
              style={{ background: B, border: '1px solid #E5DDD5', color: '#ADA09A' }}>
              {tag}
            </span>
          ))}
        </FadeIn>
      </section>
      <Wave from={A} to={B} />

      {/* ══════════════════════════════════
          SUCCESS STORIES  (B)
      ══════════════════════════════════ */}
      <section className="relative py-24 sm:py-32" style={{ background: B }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4" style={{ color: '#16A34A' }}>Success Stories</p>
            <h2 className="font-black mb-4" style={{ color: '#1C1410' }}>
              What Our Clients{' '}
              <em style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: '#C84B30' }}>Say</em>
            </h2>
            <p className="max-w-xl mx-auto text-base" style={{ color: '#72645A' }}>
              Real words from real people who chose MetLink to grow their business.
            </p>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <StaggerItem key={t.name}>
                <div className="group relative flex flex-col h-full p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1.5"
                  style={{ background: A, border: '1px solid #E5DDD5', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${t.color}40`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px rgba(0,0,0,0.08)`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#E5DDD5';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(0,0,0,0.04)';
                  }}>
                  <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full"
                    style={{ background: `linear-gradient(to right, transparent, ${t.color}70, transparent)` }} />
                  <div className="absolute top-3 right-5 text-[6rem] font-black leading-none select-none pointer-events-none"
                    style={{ color: `${t.color}08`, fontFamily: 'Georgia, serif', lineHeight: 1 }}>&ldquo;</div>

                  <div className="flex items-center justify-between mb-5 relative z-10">
                    <div className="flex gap-0.5">
                      {Array(t.stars).fill(0).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: '#FBBF24' }} />
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider"
                      style={{ background: `${t.color}10`, color: t.color, border: `1px solid ${t.color}25` }}>
                      <TrendingUp className="w-3 h-3" /> {t.result}
                    </div>
                  </div>

                  <p className="text-[0.9rem] leading-relaxed mb-7 flex-1 relative z-10" style={{ color: '#72645A' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid #F0EBE3' }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                      style={{ background: t.color }}>
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-bold" style={{ color: '#1C1410' }}>{t.name}</p>
                      <p className="text-xs" style={{ color: '#ADA09A' }}>{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <Wave from={B} to={A} flip />

      {/* ══════════════════════════════════
          TECH STACK  (A)
      ══════════════════════════════════ */}
      <section className="relative py-24 sm:py-32" style={{ background: A }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">

            <FadeIn className="lg:w-[36%] flex flex-col justify-start">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4" style={{ color: '#D97706' }}>Tech Stack</p>
              <h2 className="font-black mb-5" style={{ color: '#1C1410' }}>
                Powered by the{' '}
                <em style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: '#C84B30' }}>Best Tools</em>
              </h2>
              <p className="text-base leading-relaxed mb-10" style={{ color: '#72645A' }}>
                Every tool we choose is battle-tested in production, selected for performance and long-term reliability.
              </p>
              <div className="space-y-3">
                {[
                  { icon: <Brain className="w-4 h-4" />,     label: 'AI & Automation',     color: '#C84B30' },
                  { icon: <Code2 className="w-4 h-4" />,     label: 'Software Development', color: '#2563EB' },
                  { icon: <Megaphone className="w-4 h-4" />, label: 'Digital Marketing',    color: '#16A34A' },
                  { icon: <Palette className="w-4 h-4" />,   label: 'Creative & Media',     color: '#D97706' },
                ].map(s => (
                  <div key={s.label} className="flex items-center gap-3 p-3.5 rounded-xl"
                    style={{ background: B, border: '1px solid #E5DDD5' }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${s.color}12`, color: s.color }}>{s.icon}</div>
                    <p className="text-sm font-semibold flex-1" style={{ color: '#1C1410' }}>{s.label}</p>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: s.color }} />
                  </div>
                ))}
              </div>
            </FadeIn>

            <div className="flex-1 grid sm:grid-cols-2 gap-4 content-start">
              {techStack.map((group, gi) => (
                <FadeIn key={group.category} delay={gi * 0.08}>
                  <div className="relative p-6 rounded-2xl h-full transition-all hover:-translate-y-1"
                    style={{ background: B, border: `1px solid ${group.color}20` }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${group.color}50`;
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.06)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${group.color}20`;
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: group.color }} />
                      <p className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: group.color }}>{group.category}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map(item => (
                        <span key={item}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold cursor-default transition-all"
                          style={{ background: A, border: '1px solid #E5DDD5', color: '#72645A' }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.color = group.color;
                            (e.currentTarget as HTMLElement).style.borderColor = `${group.color}40`;
                            (e.currentTarget as HTMLElement).style.background = `${group.color}08`;
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.color = '#72645A';
                            (e.currentTarget as HTMLElement).style.borderColor = '#E5DDD5';
                            (e.currentTarget as HTMLElement).style.background = A;
                          }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Wave from={A} to={B} />

      {/* ══════════════════════════════════
          CTA BANNER  (B → dark card)
      ══════════════════════════════════ */}
      <section className="relative py-20 sm:py-28" style={{ background: B }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden flex flex-col lg:flex-row"
              style={{
                background: 'linear-gradient(135deg, #1C1410 0%, #2D1A12 50%, #1C1410 100%)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.18)',
              }}>
              {/* Warm glow left */}
              <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(200,75,48,0.22) 0%, transparent 65%)', filter: 'blur(80px)', transform: 'translate(-30%,-40%)' }} />
              {/* Warm glow right */}
              <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(232,97,42,0.15) 0%, transparent 65%)', filter: 'blur(60px)', transform: 'translate(30%,30%)' }} />

              {/* LEFT */}
              <div className="relative z-10 flex-1 p-10 sm:p-14 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold mb-7 self-start"
                  style={{ background: 'rgba(200,75,48,0.18)', border: '1px solid rgba(200,75,48,0.35)', color: '#E8612A' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8612A] animate-pulse" />
                  Limited Spots — 2025
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.08] mb-5">
                  Let&apos;s Turn Ideas Into{' '}
                  <em style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: '#E8612A' }}>
                    Results
                  </em>
                </h2>
                <p className="text-base max-w-md mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
                  Partner with a team that ships fast, communicates clearly, and drives measurable ROI — starting week one.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-sm text-white transition-all hover:brightness-110 active:scale-95"
                    style={{ background: '#C84B30', boxShadow: '0 0 32px rgba(200,75,48,0.45)' }}>
                    <Sparkles className="w-4 h-4" />
                    Become a Client
                  </Link>
                  <Link href="/portfolio"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm transition-all hover:border-white/25"
                    style={{ border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#FFFFFF'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'}>
                    See Our Work <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* RIGHT — stat cards 2×2 */}
              <div className="relative z-10 lg:w-[42%] flex-shrink-0 flex flex-col justify-center p-10 sm:p-12 lg:p-14">
                <div className="grid grid-cols-2 gap-3.5 mb-6">
                  {[
                    { val: '450+', label: 'Projects Shipped',     color: '#C84B30' },
                    { val: '250+', label: 'Happy Clients',         color: '#2563EB' },
                    { val: '7d',   label: 'First Build Delivered', color: '#16A34A' },
                    { val: '98%',  label: 'Client Retention',      color: '#D97706' },
                  ].map(s => (
                    <div key={s.label} className="p-5 rounded-2xl"
                      style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)' }}>
                      <p className="text-2xl font-black leading-none mb-2" style={{ color: s.color }}>{s.val}</p>
                      <p className="text-[11px] leading-snug font-medium" style={{ color: 'rgba(255,255,255,0.48)' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2.5">
                  {['NDA signed before we begin', 'Zero long-term lock-in', 'First deliverables in 7 days'].map(point => (
                    <div key={point} className="flex items-center gap-2.5">
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#C84B30' }} />
                      <p className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.52)' }}>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
