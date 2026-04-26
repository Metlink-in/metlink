'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/portfolio-data';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/fade-in';

const filters = ['All', 'Software + AI', 'Digital Marketing', 'Creative Media', 'Business Automation'];

export default function PortfolioPage() {
  return (
    <div className="w-full overflow-x-hidden relative" style={{ background: '#030712' }}>

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-30 animate-blob"
            style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.2) 0%, rgba(6,182,212,0.1) 50%, transparent 70%)', filter: 'blur(60px)' }} />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(6,182,212,0.4) 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.25em] mb-8"
              style={{ background: 'rgba(6,182,212,0.05)', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
              Our Work
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black text-[#E2E8F0] mb-6 leading-tight">
              Built to <span className="gradient-text-cyan">Perform</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto mb-10">
              Real projects. Real results. Explore our portfolio of AI systems, software solutions, marketing campaigns, and brand transformations.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-3 justify-center">
              {filters.map((filter, i) => (
                <button key={filter}
                  className="px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.15em] transition-all hover:scale-105"
                  style={i === 0
                    ? { background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.3)', color: '#06B6D4' }
                    : { background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(30,41,59,0.8)', color: '#64748B' }}>
                  {filter}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-10 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <StaggerItem key={project.slug}>
                <Link href={`/portfolio/${project.slug}`}
                  className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col h-full"
                  style={{ background: '#0F172A', border: '1px solid rgba(30,41,59,0.8)' }}>

                  {/* Project visual */}
                  <div className={`h-44 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} relative overflow-hidden flex-shrink-0`}>
                    <div className="absolute inset-0 bg-[#030712]/30" />
                    <div className="absolute inset-0 flex flex-col justify-between p-5">
                      <span className="self-start px-3 py-1 rounded-full text-xs font-semibold bg-[#030712]/40 text-[#E2E8F0] backdrop-blur-sm">
                        {project.category}
                      </span>
                      <div>
                        <h3 className="text-lg font-black text-white leading-tight">{project.title}</h3>
                        <p className="text-white/60 text-sm mt-0.5">{project.tagline}</p>
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: 'rgba(0,0,0,0.55)' }}>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold animate-fadeInScale"
                        style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', color: '#030712' }}>
                        <ExternalLink className="w-4 h-4" /> View Case Study
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-[#64748B]">{project.client}</span>
                      <span className="text-xs text-[#64748B]">{project.date}</span>
                    </div>
                    <p className="text-sm text-[#64748B] leading-relaxed mb-4 line-clamp-2 flex-1">{project.description}</p>

                    {/* Results chips */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      {project.results.slice(0, 2).map((r) => (
                        <div key={r} className="px-4 py-3 rounded-xl border transition-all group-hover:border-[#06B6D4]/20"
                          style={{ background: '#030712', borderColor: 'rgba(30,41,59,0.8)' }}>
                          <p className={`text-sm font-black ${project.colorClass} mb-0.5 tracking-tight`}>{r.split(' ').slice(0,2).join(' ')}</p>
                          <p className="text-[10px] text-[#64748B] font-medium uppercase tracking-widest">{r.split(' ').slice(2).join(' ')}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1E293B]/50">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider"
                          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: '#64748B' }}>
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-[9px] font-black text-[#475569]">+{project.tech.length - 3}</span>
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
      <section style={{ background: '#030712', borderTop: '1px solid rgba(30,41,59,0.6)', borderBottom: '1px solid rgba(30,41,59,0.6)' }}>
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(6,182,212,0.3), rgba(139,92,246,0.3), transparent)' }} />
        <StaggerChildren className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[['150+','Projects Delivered'],['$10M+','Revenue Generated'],['80+','Happy Clients'],['98%','Satisfaction Rate']].map(([v, l]) => (
            <StaggerItem key={l}>
              <p className="text-4xl font-black mb-1 gradient-text-cyan">{v}</p>
              <p className="text-xs text-[#475569] mt-1 uppercase tracking-widest font-bold">{l}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(6,182,212,0.3), rgba(139,92,246,0.3), transparent)' }} />
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#030712' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(6,182,212,0.06), rgba(139,92,246,0.04), transparent 70%)' }} />
        <FadeIn className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-[#E2E8F0] mb-4">
            Want Results Like <span className="gradient-text-cyan">These</span>?
          </h2>
          <p className="text-[#64748B] mb-10 text-lg">Let&apos;s discuss your project and build the next success story together.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl font-bold hover:brightness-110 transition-all active:scale-95"
            style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', color: '#030712', boxShadow: '0 0 40px rgba(6,182,212,0.2)' }}>
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
