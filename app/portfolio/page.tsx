'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/portfolio-data';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';

const filters = ['All', 'Software + AI', 'Digital Marketing', 'Creative Media', 'Business Automation'];

export default function PortfolioPage() {
  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#050505' }}>

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden"
        style={{ background: '#050505' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(43,128,240,0.18) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.25em] mb-8"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#2B80F0',  }}>
              Our Work
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-black mb-6 leading-tight" style={{ color: '#FFFFFF' }}>
              Built to{' '}
              <em style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: '#2B80F0' }}>Perform</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base sm:text-xl max-w-3xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Real projects. Real results. Explore our portfolio of AI systems, software solutions, marketing campaigns, and brand transformations.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-3 justify-center">
              {filters.map((filter, i) => (
                <button key={filter}
                  className="px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.15em] transition-all hover:scale-105"
                  style={i === 0
                    ? { background: 'rgba(43,128,240,0.15)', border: '1px solid rgba(43,128,240,0.3)', color: '#2B80F0' }
                    : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.4)' }}>
                  {filter}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-12 pb-24" style={{ background: '#050505' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map(project => (
              <StaggerItem key={project.slug}>
                <Link href={`/portfolio/${project.slug}`}
                  className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.4)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)'}>

                  {/* Project visual */}
                  <div className={`h-44 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} relative overflow-hidden flex-shrink-0`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex flex-col justify-between p-5">
                      <span className="self-start px-3 py-1 rounded-full text-xs font-semibold bg-black/25 text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                      <div>
                        <h3 className="text-lg font-black text-white leading-tight">{project.title}</h3>
                        <p className="text-white/70 text-sm mt-0.5">{project.tagline}</p>
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: 'rgba(0,0,0,0.6)' }}>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold animate-fadeInScale bg-white"
                        style={{ color: '#2B80F0' }}>
                        <ExternalLink className="w-4 h-4" /> View Case Study
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{project.client}</span>
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{project.date}</span>
                    </div>
                    <p className="text-sm leading-relaxed mb-4 line-clamp-2 flex-1" style={{ color: 'rgba(255,255,255,0.6)' }}>{project.description}</p>

                    {/* Results chips */}
                    <div className="grid grid-cols-2 gap-2.5 mb-5">
                      {project.results.slice(0, 2).map(r => (
                        <div key={r} className="px-3.5 py-2.5 rounded-xl"
                          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                          <p className={`text-sm font-black ${project.colorClass} mb-0 tracking-tight`}>{r.split(' ').slice(0,2).join(' ')}</p>
                          <p className="text-[10px] font-medium uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>{r.split(' ').slice(2).join(' ')}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider"
                          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.4)' }}>
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-[9px] font-black" style={{ color: 'rgba(255,255,255,0.4)' }}>+{project.tech.length - 3}</span>
                      )}
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ background: '#0A0A0A', borderTop: '1px solid rgba(255,255,255,0.12)', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
        <StaggerChildren className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[['150+','Projects Delivered'],['$10M+','Revenue Generated'],['80+','Happy Clients'],['98%','Satisfaction Rate']].map(([v, l]) => (
            <StaggerItem key={l}>
              <p className="text-4xl font-black mb-1 gradient-text-cyan">{v}</p>
              <p className="text-xs mt-1 uppercase tracking-widest font-bold" style={{ color: 'rgba(255,255,255,0.4)' }}>{l}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 relative overflow-hidden" style={{ background: '#050505' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(43,128,240,0.15), transparent 65%)' }} />
        <FadeIn className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-black mb-4" style={{ color: '#FFFFFF' }}>
            Want Results Like{' '}
            <em style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: '#2B80F0' }}>These</em>?
          </h2>
          <p className="mb-10 text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Let&apos;s discuss your project and build the next success story together.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-sm text-white transition-all hover:brightness-95 active:scale-95"
            style={{ background: '#2B80F0', boxShadow: '0 4px 20px rgba(43,128,240,0.3)' }}>
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
