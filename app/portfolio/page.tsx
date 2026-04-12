'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/portfolio-data';

const filters = ['All', 'Software + AI', 'Digital Marketing', 'Creative Media', 'Business Automation'];

export default function PortfolioPage() {
  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#000000' }}>

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, #1A1A1A, transparent 70%)' }} />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: 'linear-gradient(#1A1A1A 1px,transparent 1px),linear-gradient(90deg,#1A1A1A 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: '#1A1A1A', border: '1px solid #1A1A1A', color: '#FACC15', letterSpacing: '0.08em' }}>
            Our Work
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#FFFFFF] mb-6 leading-tight">
            Built to{' '}
            <span style={{ color: '#FACC15' }}>
              Perform
            </span>
          </h1>
          <p className="text-xl text-[#A3A3A3] max-w-3xl mx-auto mb-10">
            Real projects. Real results. Explore our portfolio of AI systems, software solutions, marketing campaigns, and brand transformations.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button key={filter}
                className="px-5 py-2 rounded-xl text-sm font-medium transition-all"
                style={filter === 'All'
                  ? { background: '#1A1A1A', border: '1px solid #1A1A1A', color: '#FACC15' }
                  : { background: 'transparent', border: '1px solid rgba(255,255,255,0.07)', color: '#525252' }}>
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-10 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <Link key={project.slug} href={`/portfolio/${project.slug}`}
                className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
                style={{ background: '#0A0A0A', border: '1px solid #1A1A1A', boxShadow: "none" }}>

                {/* Project visual */}
                <div className={`h-44 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} relative overflow-hidden flex-shrink-0`}>
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex flex-col justify-between p-5">
                    <span className="self-start px-3 py-1 rounded-full text-xs font-semibold bg-black/40 text-[#FFFFFF] backdrop-blur-sm">
                      {project.category}
                    </span>
                    <div>
                      <h3 className="text-lg font-black text-white leading-tight">{project.title}</h3>
                      <p className="text-white/60 text-sm mt-0.5">{project.tagline}</p>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'rgba(0,0,0,0.5)' }}>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
                      style={{ background: '#FACC15', color: '#000000' }}>
                      <ExternalLink className="w-4 h-4" /> View Case Study
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-[#525252]">{project.client}</span>
                    <span className="text-xs text-[#525252]">{project.date}</span>
                  </div>
                  <p className="text-sm text-[#737373] leading-relaxed mb-4 line-clamp-2 flex-1">{project.description}</p>

                  {/* Results chips */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.results.slice(0, 2).map((r) => (
                      <div key={r} className="px-3 py-2 rounded-lg"
                        style={{ background: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                        <p className={`text-xs font-bold ${project.colorClass}`}>{r.split(' ').slice(0,2).join(' ')}</p>
                        <p className="text-xs text-[#404040] truncate">{r.split(' ').slice(2).join(' ')}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-xs"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: '#5A5045' }}>
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-xs" style={{ color: '#404040' }}>+{project.tech.length - 4}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-14" style={{ background: '#000000', borderTop: '1px solid #1A1A1A', borderBottom: '1px solid #1A1A1A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[['150+','Projects Delivered'],['$10M+','Revenue Generated'],['80+','Happy Clients'],['98%','Satisfaction Rate']].map(([v,l]) => (
            <div key={l}>
              <p className="text-4xl font-black" style={{ color: '#FACC15' }}>{v}</p>
              <p className="text-xs text-[#404040] mt-1 uppercase tracking-wider">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: '#000000' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-[#FFFFFF] mb-4">Want Results Like These?</h2>
          <p className="text-[#A3A3A3] mb-8 text-lg">Let's discuss your project and build the next success story together.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-xl"
            style={{ background: '#FACC15', color: '#000000', boxShadow: "none" }}>
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
