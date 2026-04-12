'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/portfolio-data';

export default function PortfolioPage() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-sm font-medium mb-6">
            Our Work
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight">
            Built to{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Perform
            </span>
          </h1>
          <p className="text-xl text-foreground/50 max-w-3xl mx-auto mb-10">
            Real projects. Real results. Explore our portfolio of AI systems, software solutions, marketing campaigns, and brand transformations.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {['All', 'Software + AI', 'Digital Marketing', 'Creative Media', 'Business Automation'].map((filter) => (
              <button
                key={filter}
                className={`px-5 py-2 rounded-xl border text-sm font-medium transition-all ${
                  filter === 'All'
                    ? 'border-blue-500/50 bg-blue-500/10 text-blue-400'
                    : 'border-white/10 text-foreground/50 hover:border-white/20 hover:text-foreground'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-white/15 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
                style={{ animation: `slideInUp 0.5s ease-out ${i * 0.1}s both` }}
              >
                {/* Project visual */}
                <div className={`h-48 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <span className={`self-start px-3 py-1 rounded-full text-xs font-semibold bg-black/30 text-white backdrop-blur-sm`}>
                      {project.category}
                    </span>
                    <div>
                      <h3 className="text-xl font-black text-white leading-tight">{project.title}</h3>
                      <p className="text-white/70 text-sm mt-1">{project.tagline}</p>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm">
                      <ExternalLink className="w-4 h-4" /> View Case Study
                    </div>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-foreground/40">{project.client}</span>
                    <span className="text-xs text-foreground/40">{project.date}</span>
                  </div>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.results.slice(0, 2).map((r) => (
                      <div key={r} className="px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5">
                        <p className={`text-xs font-bold ${project.colorClass}`}>{r.split(' ').slice(0, 2).join(' ')}</p>
                        <p className="text-xs text-foreground/40 truncate">{r.split(' ').slice(2).join(' ')}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-xs bg-white/5 text-foreground/50 border border-white/5">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-xs bg-white/5 text-foreground/40">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16 bg-zinc-950/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '$10M+', label: 'Revenue Generated' },
              { value: '80+', label: 'Happy Clients' },
              { value: '98%', label: 'Satisfaction Rate' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-foreground/40 mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-foreground mb-4">
            Want Results Like These?
          </h2>
          <p className="text-foreground/50 mb-8 text-lg">
            Let's discuss your project and build the next success story together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:opacity-90 transition-opacity shadow-xl shadow-blue-600/20"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
