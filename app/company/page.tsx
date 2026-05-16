'use client';

import Link from 'next/link';
import { ArrowRight, Target, Eye, Heart, Globe, Award, Clock, BarChart2, Shield } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';

const values = [
  { icon: Target, title: 'Mission-Driven',      desc: 'Every decision we make is anchored to one goal — measurable results for our clients.' },
  { icon: Eye,    title: 'Radical Transparency', desc: 'No hidden fees, no smoke and mirrors. You always know exactly where your investment is going.' },
  { icon: Heart,  title: 'Client-Obsessed',      desc: "Your success is the only metric we care about. We treat every client's business like our own." },
  { icon: Globe,  title: 'Global Perspective',   desc: 'We bring international best practices and diverse insights to every project we take on.' },
  { icon: Award,  title: 'Excellence Always',    desc: "We don't ship mediocre. Every deliverable meets the highest standard of quality." },
  { icon: Clock,  title: 'Speed & Reliability',  desc: 'Fast execution without cutting corners. We deliver on time, every time.' },
];

const team = [
  { name: 'Aryan Shah',   role: 'Founder & CEO',            specialty: 'AI Strategy & Business Development', initials: 'AS', color: '#2B80F0' },
  { name: 'Priya Nair',   role: 'CTO & Lead Architect',      specialty: 'AI Systems & Cloud Infrastructure',  initials: 'PN', color: '#2B80F0' },
  { name: 'Rahul Mehta',  role: 'Head of Engineering',        specialty: 'Full-Stack & Backend Systems',       initials: 'RM', color: '#2B80F0' },
  { name: 'Neha Kapoor',  role: 'Creative Director',          specialty: 'Brand Identity & UI/UX Design',      initials: 'NK', color: '#2B80F0' },
  { name: 'Vikram Patel', role: 'Performance Marketing Lead', specialty: 'Paid Media & Growth Strategy',       initials: 'VP', color: '#2B80F0' },
  { name: 'Aisha Khan',   role: 'AI/ML Engineer',             specialty: 'Machine Learning & NLP',             initials: 'AK', color: '#2B80F0' },
];

const milestones = [
  { year: '2020', event: 'MetLink Founded',       desc: 'Started as a 3-person digital marketing consultancy in Mumbai.' },
  { year: '2021', event: 'AI Division Launch',    desc: 'Expanded into AI development, delivering first custom ML models.' },
  { year: '2022', event: '50 Clients Milestone',  desc: 'Crossed 50 active clients across 10+ industries globally.' },
  { year: '2023', event: 'Software Studio',        desc: 'Launched full-service software development — web, mobile, cloud.' },
  { year: '2024', event: 'Global Expansion',       desc: 'Serving clients in 15+ countries with a 40+ person remote team.' },
  { year: '2025', event: 'AI-First Agency',        desc: "Positioned as India's leading AI marketing & development agency." },
];

const stats = [['5+','Years'],['80+','Clients'],['150+','Projects'],['40+','Team']] as const;

export default function CompanyPage() {
  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#07111F' }}>

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden"
        style={{ background: '#07111F' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(43,128,240,0.18) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-normal uppercase tracking-[0.25em] mb-8"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)', color: '#2B80F0',  }}>
              About Us
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className=" mb-6 leading-tight" style={{ color: '#FFFFFF' }}>
              We Are{' '}
              <span style={{ color: '#2B80F0' }}>MetLink</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              An AI-first marketing and development agency — founded on the belief that every business deserves access to world-class technology, creativity, and strategic thinking.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:brightness-95 active:scale-95"
                style={{ background: '#2B80F0', boxShadow: '0 4px 20px rgba(43,128,240,0.3)' }}>
                Work With Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:bg-black/5"
                style={{ border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.08)' }}>
                View Our Work
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#0B1628', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <StaggerChildren className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(([v, l]) => (
            <StaggerItem key={l}>
              <p className="text-4xl font-black mb-1 gradient-text-cyan">{v}</p>
              <p className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(255,255,255,0.4)' }}>{l}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24" style={{ background: '#07111F' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-xs font-normal uppercase tracking-[0.25em] mb-3" style={{ color: '#2B80F0' }}>Who We Are</p>
              <h2 className=" mb-6" style={{ color: '#FFFFFF' }}>
                About{' '}
                <span style={{ color: '#2B80F0' }}>MetLink</span>
              </h2>
              <div className="space-y-4 leading-relaxed text-base" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <p>MetLink was founded with a single conviction: that the gap between ambitious businesses and world-class digital execution doesn&apos;t have to exist.</p>
                <p>We&apos;re a full-service AI marketing and development agency — combining the strategic horsepower of a top-tier marketing firm with the technical depth of a software studio. We don&apos;t do cookie-cutter. Every engagement is custom-built around your goals.</p>
                <p>From brand identity to machine learning systems, from performance ads to enterprise software — we handle the full stack of what it takes to grow a modern digital business.</p>
              </div>
            </FadeIn>
            <StaggerChildren className="grid grid-cols-2 gap-4">
              {[
                { Icon: Target,    title: 'Our Mission',  desc: 'To empower businesses with AI-powered marketing and technology that creates lasting competitive advantages.' },
                { Icon: Eye,       title: 'Our Vision',   desc: 'To become the most trusted AI marketing and development partner for ambitious businesses worldwide.' },
                { Icon: BarChart2, title: 'Our Approach', desc: 'Data-first strategy, creative excellence, and ruthless focus on metrics that actually move the needle.' },
                { Icon: Shield,    title: 'Our Promise',  desc: 'Transparent pricing, honest communication, and zero-compromise quality on every single project.' },
              ].map(item => (
                <StaggerItem key={item.title}>
                  <div className="p-6 rounded-2xl transition-all hover:-translate-y-1 cursor-default h-full"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(43,128,240,0.3)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: 'rgba(43,128,240,0.12)', border: '1px solid rgba(43,128,240,0.2)' }}>
                      <item.Icon className="w-4.5 h-4.5" style={{ color: '#2B80F0' }} />
                    </div>
                    <h3 className="font-bold mb-2 text-sm" style={{ color: '#FFFFFF' }}>{item.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24" style={{ background: '#0B1628' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-xs font-normal uppercase tracking-[0.25em] mb-3" style={{ color: '#2B80F0' }}>Our Differentiators</p>
            <h2 className="" style={{ color: '#FFFFFF' }}>
              Why Choose{' '}
              <span style={{ color: '#2B80F0' }}>MetLink</span>?
            </h2>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(v => {
              const Icon = v.icon;
              return (
                <StaggerItem key={v.title}>
                  <div className="group p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 h-full"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(43,128,240,0.3)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                      style={{ background: 'rgba(43,128,240,0.15)', border: '1px solid rgba(43,128,240,0.3)' }}>
                      <Icon className="w-5 h-5" style={{ color: '#2B80F0' }} />
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-[#2B80F0] transition-colors" style={{ color: '#FFFFFF' }}>{v.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{v.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24" style={{ background: '#07111F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-xs font-normal uppercase tracking-[0.25em] mb-3" style={{ color: '#2B80F0' }}>Our Journey</p>
            <h2 className="" style={{ color: '#FFFFFF' }}>How We Got Here</h2>
          </FadeIn>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(to bottom, #2B80F0, rgba(255,255,255,0.1), transparent)' }} />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <FadeIn key={m.year} delay={i * 0.08}>
                  <div className="relative flex gap-8 pl-16">
                    <div className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 text-white"
                      style={{ background: '#2B80F0', boxShadow: '0 4px 14px rgba(43,128,240,0.3)' }}>
                      {m.year.slice(2)}
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold" style={{ color: '#2B80F0' }}>{m.year}</span>
                        <h3 className="font-bold" style={{ color: '#FFFFFF' }}>{m.event}</h3>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{m.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-24" style={{ background: '#0B1628', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-xs font-normal uppercase tracking-[0.25em] mb-3" style={{ color: '#2B80F0' }}>The People</p>
            <h2 className="" style={{ color: '#FFFFFF' }}>
              Meet the{' '}
              <span style={{ color: '#2B80F0' }}>Leadership</span>
            </h2>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map(member => (
              <StaggerItem key={member.name}>
                <div className="group p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1.5 h-full"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${member.color}40`;
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-lg font-black group-hover:scale-110 transition-transform"
                    style={{ background: `${member.color}15`, border: `1px solid ${member.color}25`, color: member.color }}>
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#FFFFFF' }}>{member.name}</h3>
                  <p className="text-sm font-medium mb-1" style={{ color: '#2B80F0' }}>{member.role}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{member.specialty}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 relative overflow-hidden" style={{ background: '#07111F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(43,128,240,0.15), transparent 65%)' }} />
        <FadeIn className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className=" mb-4" style={{ color: '#FFFFFF' }}>
            Ready to Grow{' '}
            <span style={{ color: '#2B80F0' }}>With Us</span>?
          </h2>
          <p className="mb-10 text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Whether you&apos;re a startup or an enterprise, we&apos;re the growth partner you&apos;ve been looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-bold text-sm text-white transition-all hover:brightness-95 active:scale-95"
              style={{ background: '#2B80F0', boxShadow: '0 4px 20px rgba(43,128,240,0.3)' }}>
              Start the Conversation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/services"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-bold text-sm transition-all hover:bg-black/5"
              style={{ border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.08)' }}>
              Explore Services
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
