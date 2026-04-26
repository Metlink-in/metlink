'use client';

import Link from 'next/link';
import { ArrowRight, Target, Eye, Heart, Globe, Award, Clock } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';

const values = [
  { icon: Target, title: 'Mission-Driven', desc: 'Every decision we make is anchored to one goal — measurable results for our clients.' },
  { icon: Eye, title: 'Radical Transparency', desc: 'No hidden fees, no smoke and mirrors. You always know exactly where your investment is going.' },
  { icon: Heart, title: 'Client-Obsessed', desc: "Your success is the only metric we care about. We treat every client's business like our own." },
  { icon: Globe, title: 'Global Perspective', desc: 'We bring international best practices and diverse insights to every project we take on.' },
  { icon: Award, title: 'Excellence Always', desc: "We don't ship mediocre. Every deliverable meets the highest standard of quality." },
  { icon: Clock, title: 'Speed & Reliability', desc: 'Fast execution without cutting corners. We deliver on time, every time.' },
];

const team = [
  { name: 'Aryan Shah',   role: 'Founder & CEO',              specialty: 'AI Strategy & Business Development', initials: 'AS', color: '#06B6D4' },
  { name: 'Priya Nair',   role: 'CTO & Lead Architect',        specialty: 'AI Systems & Cloud Infrastructure',  initials: 'PN', color: '#8B5CF6' },
  { name: 'Rahul Mehta',  role: 'Head of Engineering',          specialty: 'Full-Stack & Backend Systems',       initials: 'RM', color: '#34D399' },
  { name: 'Neha Kapoor',  role: 'Creative Director',            specialty: 'Brand Identity & UI/UX Design',      initials: 'NK', color: '#F472B6' },
  { name: 'Vikram Patel', role: 'Performance Marketing Lead',   specialty: 'Paid Media & Growth Strategy',       initials: 'VP', color: '#FBBF24' },
  { name: 'Aisha Khan',   role: 'AI/ML Engineer',               specialty: 'Machine Learning & NLP',             initials: 'AK', color: '#06B6D4' },
];

const milestones = [
  { year: '2020', event: 'MetLink Founded',    desc: 'Started as a 3-person digital marketing consultancy in Mumbai.' },
  { year: '2021', event: 'AI Division Launch', desc: 'Expanded into AI development, delivering first custom ML models.' },
  { year: '2022', event: '50 Clients Milestone', desc: 'Crossed 50 active clients across 10+ industries globally.' },
  { year: '2023', event: 'Software Studio',    desc: 'Launched full-service software development — web, mobile, cloud.' },
  { year: '2024', event: 'Global Expansion',  desc: 'Serving clients in 15+ countries with a 40+ person remote team.' },
  { year: '2025', event: 'AI-First Agency',   desc: "Positioned as India's leading AI marketing & development agency." },
];

const stats = [['5+','Years'],['80+','Clients'],['150+','Projects'],['40+','Team']] as const;

export default function CompanyPage() {
  return (
    <div className="w-full overflow-x-hidden relative" style={{ background: '#030712' }}>

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-30 animate-blob"
            style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.15) 0%, rgba(139,92,246,0.08) 50%, transparent 70%)', filter: 'blur(40px)' }} />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(6,182,212,0.4) 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.25em] mb-8"
              style={{ background: 'rgba(6,182,212,0.05)', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
              About Us
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black text-[#E2E8F0] mb-6 leading-tight">
              We Are{' '}
              <span className="gradient-text-cyan">MetLink</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto mb-10 leading-relaxed">
              An AI-first marketing and development agency — founded on the belief that every business deserves access to world-class technology, creativity, and strategic thinking.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:brightness-110 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', color: '#030712', boxShadow: '0 0 30px rgba(6,182,212,0.2)' }}>
                Work With Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:bg-white/5 hover:border-[#06B6D4]/40"
                style={{ border: '1px solid rgba(30,41,59,0.8)', color: '#E2E8F0' }}>
                View Our Work
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#030712', borderTop: '1px solid rgba(6,182,212,0.08)', borderBottom: '1px solid rgba(6,182,212,0.08)' }}>
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(6,182,212,0.3), rgba(139,92,246,0.3), transparent)' }} />
        <StaggerChildren className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(([v, l]) => (
            <StaggerItem key={l}>
              <p className="text-4xl font-black mb-1 gradient-text-cyan">{v}</p>
              <p className="text-xs text-[#475569] uppercase tracking-widest font-bold">{l}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(6,182,212,0.3), rgba(139,92,246,0.3), transparent)' }} />
      </section>

      {/* Mission & Vision */}
      <section className="py-24" style={{ background: '#030712' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#06B6D4] mb-3">Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#E2E8F0] mb-6">About <span className="gradient-text-cyan">MetLink</span></h2>
              <div className="space-y-4 text-[#64748B] leading-relaxed">
                <p>MetLink was founded with a single conviction: that the gap between ambitious businesses and world-class digital execution doesn&apos;t have to exist.</p>
                <p>We&apos;re a full-service AI marketing and development agency — combining the strategic horsepower of a top-tier marketing firm with the technical depth of a software studio. We don&apos;t do cookie-cutter. Every engagement is custom-built around your goals.</p>
                <p>From brand identity to machine learning systems, from performance ads to enterprise software — we handle the full stack of what it takes to grow a modern digital business.</p>
              </div>
            </FadeIn>
            <StaggerChildren className="grid grid-cols-2 gap-4">
              {[
                { icon: '🎯', title: 'Our Mission', desc: 'To empower businesses with AI-powered marketing and technology that creates lasting competitive advantages.' },
                { icon: '🔭', title: 'Our Vision',  desc: 'To become the most trusted AI marketing and development partner for ambitious businesses worldwide.' },
                { icon: '📊', title: 'Our Approach', desc: 'Data-first strategy, creative excellence, and ruthless focus on metrics that actually move the needle.' },
                { icon: '🤝', title: 'Our Promise',  desc: 'Transparent pricing, honest communication, and zero-compromise quality on every single project.' },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="p-6 rounded-2xl transition-all hover:-translate-y-1 hover:border-[#06B6D4]/30 group cursor-default h-full"
                    style={{ background: '#0F172A', border: '1px solid rgba(30,41,59,0.8)' }}>
                    <span className="text-3xl mb-3 block">{item.icon}</span>
                    <h3 className="font-bold text-[#E2E8F0] mb-2 text-sm group-hover:text-[#06B6D4] transition-colors">{item.title}</h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative" style={{ background: '#030712' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(139,92,246,0.05), transparent 60%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#06B6D4] mb-3">Our Differentiators</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#E2E8F0]">Why Choose <span className="gradient-text-cyan">MetLink</span>?</h2>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <StaggerItem key={v.title}>
                  <div className="group p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#06B6D4]/30 h-full"
                    style={{ background: '#0F172A', border: '1px solid rgba(30,41,59,0.8)' }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                      style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)' }}>
                      <Icon className="w-5 h-5 text-[#06B6D4]" />
                    </div>
                    <h3 className="font-bold text-[#E2E8F0] mb-2 group-hover:text-[#06B6D4] transition-colors">{v.title}</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">{v.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24" style={{ background: '#030712', borderTop: '1px solid rgba(30,41,59,0.6)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#06B6D4] mb-3">Our Journey</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#E2E8F0]">How We Got Here</h2>
          </FadeIn>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(to bottom, rgba(6,182,212,0.4), rgba(139,92,246,0.4), transparent)' }} />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <FadeIn key={m.year} delay={i * 0.08}>
                  <div className="relative flex gap-8 pl-16">
                    <div className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 shadow-lg animate-pulse-glow"
                      style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', color: '#030712' }}>
                      {m.year.slice(2)}
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-[#06B6D4]">{m.year}</span>
                        <h3 className="font-bold text-[#E2E8F0]">{m.event}</h3>
                      </div>
                      <p className="text-sm text-[#64748B] leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 relative" style={{ background: '#030712', borderTop: '1px solid rgba(30,41,59,0.6)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.04), transparent 60%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#06B6D4] mb-3">The People</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#E2E8F0]">Meet the <span className="gradient-text-cyan">Leadership</span></h2>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="group p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#06B6D4]/30 h-full"
                  style={{ background: '#0F172A', border: '1px solid rgba(30,41,59,0.8)' }}>
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center text-xl font-black shadow-xl group-hover:scale-110 transition-transform"
                    style={{ background: `linear-gradient(135deg, ${member.color}22, ${member.color}11)`, border: `1px solid ${member.color}33`, color: member.color }}>
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-[#E2E8F0] text-lg mb-1 group-hover:text-[#06B6D4] transition-colors">{member.name}</h3>
                  <p className="text-[#06B6D4] text-sm font-medium mb-1">{member.role}</p>
                  <p className="text-[#64748B] text-xs">{member.specialty}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#030712', borderTop: '1px solid rgba(30,41,59,0.6)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(6,182,212,0.06), rgba(139,92,246,0.04), transparent 70%)' }} />
        </div>
        <FadeIn className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-[#E2E8F0] mb-4">
            Ready to Grow <span className="gradient-text-cyan">With Us</span>?
          </h2>
          <p className="text-[#64748B] mb-10 text-lg">Whether you&apos;re a startup or an enterprise, we&apos;re the growth partner you&apos;ve been looking for.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl font-bold hover:brightness-110 transition-all active:scale-95"
              style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', color: '#030712', boxShadow: '0 0 40px rgba(6,182,212,0.2)' }}>
              Start the Conversation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/services"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl font-bold hover:bg-white/5 hover:border-[#06B6D4]/40 transition-all"
              style={{ border: '1px solid rgba(30,41,59,0.8)', color: '#E2E8F0' }}>
              Explore Services
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
