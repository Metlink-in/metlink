'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle, ChevronRight, Zap } from 'lucide-react';
import { serviceCategories } from '@/lib/services-data';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';

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

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden bg-black pb-20">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center bg-black overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        {/* Subtle yellow ambient backglow */}
        <div className="absolute top-0 right-[20%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#FACC15] blur-[120px] sm:blur-[160px] opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Left — copy */}
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold mb-6 sm:mb-8 border border-[#1A1A1A] bg-[#0A0A0A] text-[#FACC15] tracking-[0.08em] shadow-[0_0_20px_rgba(250,204,21,0.05)]">
                ✦ AI Marketing & Development Agency
              </div>

              <h1 className="font-black leading-[1.05] text-white mb-5 sm:mb-6">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">We Build</span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FACC15] my-1" style={{ textShadow: '0 0 40px rgba(250,204,21,0.2)' }}>
                  AI-Powered
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Growth Machines</span>
              </h1>

              <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed mb-8 sm:mb-10 max-w-xl">
                From digital marketing to custom AI systems — MetLink delivers end-to-end digital transformation that drives real, compounding revenue growth.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link href="/services"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm bg-[#FACC15] text-black transition-all hover:scale-105 shadow-[0_0_30px_rgba(250,204,21,0.15)] hover:shadow-[0_0_40px_rgba(250,204,21,0.3)]">
                  Explore Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-sm border border-[#1A1A1A] text-[#E5E5E5] transition-all hover:bg-white/5 hover:border-[#FACC15]/30">
                  ▷ View Our Work
                </Link>
              </div>

              {/* Proof dots */}
              <StaggerChildren className="flex flex-wrap gap-5 sm:gap-8 mt-10 sm:mt-14">
                {[['150+', 'Projects'], ['80+', 'Clients'], ['5+', 'Years'], ['$10M+', 'Generated']].map(([v, l]) => (
                  <StaggerItem key={l}>
                    <p className="text-2xl sm:text-3xl font-black text-[#FACC15]">{v}</p>
                    <p className="text-xs text-[#737373] uppercase tracking-widest mt-1 font-semibold">{l}</p>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </FadeIn>

            {/* Right — stat grid */}
            <FadeIn delay={0.2} y={50} className="hidden lg:grid grid-cols-2 gap-5 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FACC15]/5 to-transparent rounded-[40px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="flex flex-col gap-5 mt-16 w-full max-w-[260px] justify-self-end">
                <div className="p-7 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FACC15]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(250,204,21,0.05)]">
                  <p className="text-[10px] font-bold text-[#737373] uppercase tracking-widest mb-3">Performance Ads</p>
                  <p className="text-5xl font-black text-[#FACC15]">500%</p>
                  <p className="text-sm text-[#A3A3A3] mt-2 font-medium">Average ROI Delivered</p>
                </div>
                <div className="p-7 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FACC15]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(250,204,21,0.05)]">
                  <p className="text-[10px] font-bold text-[#737373] uppercase tracking-widest mb-3">Software Built</p>
                  <p className="text-5xl font-black text-[#FACC15]">150+</p>
                  <p className="text-sm text-[#A3A3A3] mt-2 font-medium">Live Deployed Projects</p>
                </div>
              </div>

              <div className="flex flex-col gap-5 w-full max-w-[260px]">
                <div className="p-7 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FACC15]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(250,204,21,0.05)]">
                  <p className="text-[10px] font-bold text-[#737373] uppercase tracking-widest mb-3">AI & Automation</p>
                  <p className="text-5xl font-black text-[#FACC15]">10x</p>
                  <p className="text-sm text-[#A3A3A3] mt-2 font-medium">Faster Internal Workflows</p>
                </div>
                <div className="p-7 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FACC15]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(250,204,21,0.05)]">
                  <p className="text-[10px] font-bold text-[#737373] uppercase tracking-widest mb-3">Client Retention</p>
                  <p className="text-5xl font-black text-[#FACC15]">94%</p>
                  <p className="text-sm text-[#A3A3A3] mt-2 font-medium">Stay Long-Term Partners</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── CLIENT MARQUEE ─── */}
      <section className="py-8 sm:py-10 overflow-hidden bg-black border-y border-[#1A1A1A]">
        <div className="animate-marquee gap-0" style={{ display: 'flex', width: 'max-content' }}>
          {[...clients, ...clients, ...clients].map((c, i) => (
            <div key={i} className="flex-shrink-0 flex items-center gap-3 px-12 border-r border-[#1A1A1A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" />
              <span className="text-sm font-bold tracking-wider text-[#525252]">{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── IMPACT STATS ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10 sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FACC15] mb-3 sm:mb-4">By the Numbers</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Results That Speak for Themselves</h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: 150, suffix: '+', label: 'Projects Delivered', sub: 'Across 16 service lines' },
              { value: 10, suffix: 'M+', label: 'Revenue Generated', sub: 'For our clients' },
              { value: 80, suffix: '+', label: 'Happy Clients', sub: 'Across 15+ countries' },
              { value: 94, suffix: '%', label: 'Retention Rate', sub: 'Stay with us long-term' },
            ].map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-center py-7 sm:py-10 px-4 sm:px-6 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FACC15]/30 transition-colors">
                  <p className="text-3xl sm:text-5xl font-black text-[#FACC15] mb-2 sm:mb-3">
                    <Counter target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="font-bold text-white text-sm sm:text-base mb-1">{s.label}</p>
                  <p className="text-xs sm:text-sm text-[#737373]">{s.sub}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-black relative">
        <div className="absolute top-1/2 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#FACC15] blur-[200px] opacity-[0.02] pointer-events-none -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-10 sm:mb-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FACC15] mb-3 sm:mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4" /> What We Do
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Four Pillars.<br />One Agency.</h2>
            </div>
            <Link href="/services"
              className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm border border-[#FACC15]/20 text-[#FACC15] hover:bg-[#FACC15]/10 transition-colors">
              All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>

          <StaggerChildren className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {serviceCategories.map((cat) => (
              <StaggerItem key={cat.slug}>
                <Link href={`/services/${cat.slug}`}
                  className="group block p-6 sm:p-10 rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FACC15]/40 hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-start justify-between mb-5 sm:mb-6">
                    <div>
                      <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block group-hover:scale-110 transition-transform origin-left">{cat.icon}</span>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#FACC15]">{cat.name}</p>
                      <h3 className="text-xl sm:text-2xl font-black text-white mt-1.5">{cat.tagline}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#1A1A1A] group-hover:bg-[#FACC15] flex items-center justify-center transition-colors flex-shrink-0">
                      <ChevronRight className="w-5 h-5 text-[#737373] group-hover:text-black transition-colors" />
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed mb-6 sm:mb-8">{cat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.services.map((svc) => (
                      <span key={svc.slug} className="px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold bg-[#1A1A1A] text-[#A3A3A3] border border-transparent group-hover:border-[#FACC15]/10 transition-colors">
                        {svc.name}
                      </span>
                    ))}
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-black border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10 sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FACC15] mb-3 sm:mb-4">Why MetLink</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">What Sets Us Apart</h2>
            <p className="text-[#A3A3A3] mt-4 sm:mt-5 max-w-2xl mx-auto text-base sm:text-lg">
              There are hundreds of agencies. Here is why the fastest-growing businesses choose MetLink.
            </p>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyUs.map((item) => (
              <StaggerItem key={item.title}>
                <div className="group p-6 sm:p-8 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FACC15]/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] group-hover:bg-[#FACC15]/10 border border-[#1A1A1A] group-hover:border-[#FACC15]/20 flex items-center justify-center text-2xl mb-5 sm:mb-6 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-white mb-2 sm:mb-3 tracking-wide">{item.title}</h3>
                  <p className="text-sm text-[#737373] leading-loose">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 sm:py-32 lg:py-40 relative overflow-hidden bg-black text-center border-t border-[#1A1A1A]">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 100%, #1A1A1A, transparent 60%)' }} />
        
        <FadeIn className="max-w-3xl mx-auto px-4 relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FACC15] mb-5 sm:mb-6 inline-flex items-center gap-2 border border-[#FACC15]/20 px-4 py-1.5 rounded-full bg-[#FACC15]/5">
            <span className="w-2 h-2 rounded-full bg-[#FACC15] animate-pulse" /> Ready to Grow?
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 sm:mb-8 leading-[1.1]">
            Let&apos;s Build Something<br />Extraordinary
          </h2>
          <p className="text-[#A3A3A3] mb-8 sm:mb-12 text-base sm:text-lg max-w-xl mx-auto">
            Book a free 30-min strategy call. No commitments, no sales pressure — just clarity on what would drive the most growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
            <Link href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black text-sm sm:text-base bg-[#FACC15] text-black transition-transform hover:scale-105 shadow-[0_0_30px_rgba(250,204,21,0.15)]">
              Book Strategy Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-sm sm:text-base border border-[#1A1A1A] text-[#E5E5E5] transition-all hover:bg-white/5 hover:border-[#FACC15]/30">
              See Our Work First
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
