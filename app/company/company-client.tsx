'use client';

import React from 'react';
import { SectionBackdrop } from '@/components/section-backdrop';
import Link from 'next/link';
import { ArrowRight, Target, Eye, Heart, Globe, Award, Clock, BarChart2, Shield } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';
import { Breadcrumbs } from '@/components/breadcrumbs';

const valueIcons = [Target, Eye, Heart, Globe, Award, Clock];
// A small rotating palette so cards read as distinct, not one monochrome wall of blue.
const PALETTE = ['#2B80F0', '#8B5CF6', '#06B6D4', '#F59E0B', '#EC4899', '#10B981'];
const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Company', path: '/company' },
];

interface Props {
  company: Record<string, string>;
  valuesList: { title: string; desc: string }[];
  teamList: { name: string; role: string; specialty: string; initials: string; color: string; image?: string }[];
  milestonesList: { year: string; event: string; desc: string }[];
  statsList: string[][];
}

export default function CompanyClient({ company, valuesList, teamList, milestonesList, statsList }: Props) {
  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#07111F' }}>

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden"
        style={{ background: '#07111F' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(43,128,240,0.18) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Breadcrumbs items={crumbs} center />
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
              An AI-first marketing and development agency, founded on the belief that every business deserves access to world-class technology, creativity, and strategic thinking.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://www.metlinkai.com/contact"
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
      <section className="relative overflow-hidden isolate" style={{ background: '#0B1628', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <SectionBackdrop behind />
        <StaggerChildren className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {statsList.map(([v, l]) => (
            <StaggerItem key={l}>
              <p className="text-4xl font-black mb-1 gradient-text-cyan">{v}</p>
              <p className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(255,255,255,0.4)' }}>{l}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 relative overflow-hidden isolate" style={{ background: '#07111F' }}>
        <SectionBackdrop behind />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-xs font-normal uppercase tracking-[0.25em] mb-3" style={{ color: '#2B80F0' }}>Who We Are</p>
              <h2 className=" mb-6" style={{ color: '#FFFFFF' }}>
                About{' '}
                <span style={{ color: '#2B80F0' }}>MetLink</span>
              </h2>
              <div className="space-y-4 leading-relaxed text-base" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <p>{company.para1 || "MetLink was founded with a single conviction: that the gap between ambitious businesses and world-class digital execution doesn't have to exist."}</p>
                <p>{company.para2 || "We're a full-service AI marketing and development agency, combining the strategic horsepower of a top-tier marketing firm with the technical depth of a software studio. We don't do cookie-cutter. Every engagement is custom-built around your goals."}</p>
                <p>{company.para3 || "From brand identity to machine learning systems, from performance ads to enterprise software, we handle the full stack of what it takes to grow a modern digital business."}</p>
              </div>
            </FadeIn>
            <StaggerChildren className="grid grid-cols-2 gap-4">
              {[
                { Icon: Target,    title: 'Our Mission',  desc: company.mission  || 'To empower businesses with AI-powered marketing and technology that creates lasting competitive advantages.', color: '#2B80F0' },
                { Icon: Eye,       title: 'Our Vision',   desc: company.vision   || 'To become the most trusted AI marketing and development partner for ambitious businesses worldwide.', color: '#8B5CF6' },
                { Icon: BarChart2, title: 'Our Approach', desc: company.approach || 'Data-first strategy, creative excellence, and ruthless focus on metrics that actually move the needle.', color: '#06B6D4' },
                { Icon: Shield,    title: 'Our Promise',  desc: company.promise  || 'Transparent pricing, honest communication, and zero-compromise quality on every single project.', color: '#F59E0B' },
              ].map(item => (
                <StaggerItem key={item.title}>
                  <div className="p-6 rounded-2xl transition-all hover:-translate-y-1 cursor-default h-full"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = `${item.color}4D`}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: `${item.color}1F`, border: `1px solid ${item.color}33` }}>
                      <item.Icon className="w-4.5 h-4.5" style={{ color: item.color }} />
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
      <section className="py-16 sm:py-24 relative overflow-hidden isolate" style={{ background: '#0B1628' }}>
        <SectionBackdrop behind />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-xs font-normal uppercase tracking-[0.25em] mb-3" style={{ color: '#2B80F0' }}>Our Differentiators</p>
            <h2 className="" style={{ color: '#FFFFFF' }}>
              Why Choose{' '}
              <span style={{ color: '#2B80F0' }}>MetLink</span>?
            </h2>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valuesList.map((v, vIdx) => {
              const Icon = valueIcons[vIdx % valueIcons.length];
              const color = PALETTE[vIdx % PALETTE.length];
              return (
                <StaggerItem key={v.title}>
                  <div className="group p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 h-full"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${color}4D`;
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px ${color}1A`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                      style={{ background: `${color}26`, border: `1px solid ${color}4D` }}>
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <h3 className="font-bold mb-2 transition-colors" style={{ color: '#FFFFFF' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = color; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#FFFFFF'; }}>{v.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{v.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Journey / Milestones */}
      {milestonesList.length > 0 && (
        <section className="py-16 sm:py-24 relative overflow-hidden isolate" style={{ background: '#07111F' }}>
          <SectionBackdrop behind />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <p className="text-xs font-normal uppercase tracking-[0.25em] mb-3" style={{ color: '#2B80F0' }}>Our Journey</p>
              <h2 style={{ color: '#FFFFFF' }}>
                Milestones Along the{' '}
                <span style={{ color: '#2B80F0' }}>Way</span>
              </h2>
            </FadeIn>

            <div className="relative">
              {/* Center line (desktop) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.14) 8%, rgba(255,255,255,0.14) 92%, transparent)' }} />
              {/* Left line (mobile) */}
              <div className="md:hidden absolute left-[15px] top-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.14) 8%, rgba(255,255,255,0.14) 92%, transparent)' }} />

              <StaggerChildren className="space-y-8 md:space-y-4">
                {milestonesList.map((m, i) => {
                  const color = PALETTE[i % PALETTE.length];
                  const onRight = i % 2 === 1;
                  const card = (
                    <div className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <p className="text-xs font-black uppercase tracking-[0.2em] mb-2" style={{ color }}>{m.year}</p>
                      <h3 className="font-bold mb-1.5" style={{ color: '#FFFFFF' }}>{m.event}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{m.desc}</p>
                    </div>
                  );
                  return (
                    <StaggerItem key={m.year + m.event}>
                      {/* Mobile: single-column list with a left rail */}
                      <div className="md:hidden relative flex items-start gap-5 pl-10">
                        <div className="absolute left-[7px] top-1.5 w-4 h-4 rounded-full shrink-0 z-10"
                          style={{ background: color, boxShadow: `0 0 0 4px ${color}26, 0 0 20px ${color}80` }} />
                        <div className="flex-1">{card}</div>
                      </div>
                      {/* Desktop: 3-column grid, alternating sides, dot always centered */}
                      <div className="hidden md:grid grid-cols-[1fr_2rem_1fr] items-start gap-0">
                        <div>{!onRight && card}</div>
                        <div className="flex justify-center pt-1.5">
                          <div className="w-4 h-4 rounded-full shrink-0 z-10"
                            style={{ background: color, boxShadow: `0 0 0 4px ${color}26, 0 0 20px ${color}80` }} />
                        </div>
                        <div>{onRight && card}</div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerChildren>
            </div>
          </div>
        </section>
      )}

      {/* Team */}
      <section className="py-16 sm:py-24 relative overflow-hidden isolate" style={{ background: '#0B1628', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <SectionBackdrop behind />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-xs font-normal uppercase tracking-[0.25em] mb-3" style={{ color: '#2B80F0' }}>The People</p>
            <h2 className="" style={{ color: '#FFFFFF' }}>
              Meet the{' '}
              <span style={{ color: '#2B80F0' }}>Leadership</span>
            </h2>
          </FadeIn>
          <StaggerChildren className="flex flex-wrap justify-center gap-6">
            {teamList.map(member => (
              <StaggerItem key={member.name}>
                <div className="group relative p-8 sm:p-10 rounded-3xl text-center transition-all duration-300 hover:-translate-y-2 w-[300px] overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${member.color}50`;
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)';
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px ${member.color}20`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}>
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${member.color}, transparent)` }} />
                  {/* Hover glow */}
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle, ${member.color}22, transparent 70%)`, filter: 'blur(30px)' }} />

                  {/* Avatar with gradient ring */}
                  <div className="relative w-24 h-24 mx-auto mb-5 rounded-full p-[2px] group-hover:scale-105 transition-transform duration-300"
                    style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}30)` }}>
                    <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center text-xl font-black"
                      style={{ background: '#0B1628', color: member.color }}>
                      <span>{member.initials}</span>
                      {member.image && (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={member.image} alt={member.name}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{ objectPosition: 'center top' }}
                          onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                      )}
                    </div>
                  </div>

                  <h3 className="font-bold text-lg mb-1.5 relative" style={{ color: '#FFFFFF' }}>{member.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3 relative" style={{ color: member.color }}>{member.role}</p>
                  <div className="w-10 h-px mx-auto mb-3" style={{ background: 'rgba(255,255,255,0.12)' }} />
                  <p className="text-xs leading-relaxed relative" style={{ color: 'rgba(255,255,255,0.45)' }}>{member.specialty}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 relative overflow-hidden isolate" style={{ background: '#07111F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <SectionBackdrop behind />
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
            <Link href="https://www.metlinkai.com/contact"
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
