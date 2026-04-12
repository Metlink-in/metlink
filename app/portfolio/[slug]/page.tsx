import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, ArrowRight, CheckCircle, Calendar, User, Code2 } from 'lucide-react';
import { getProjectBySlug, projects } from '@/lib/portfolio-data';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} opacity-5`} />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-foreground/40 mb-10 flex-wrap">
            <Link href="/" className="hover:text-foreground/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/portfolio" className="hover:text-foreground/70 transition-colors">Portfolio</Link>
            <ChevronRight className="w-3 h-3" />
            <span className={project.colorClass}>{project.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold border ${project.colorClass} border-current/20 bg-current/5 mb-6`}>
                {project.category}
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-foreground mb-5 leading-tight">
                {project.title}
              </h1>
              <p className={`text-xl font-semibold ${project.colorClass} mb-6`}>{project.tagline}</p>
              <p className="text-lg text-foreground/55 leading-relaxed mb-8">{project.description}</p>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} text-white hover:opacity-90 transition-opacity shadow-xl`}
              >
                Build Something Similar <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Project visual */}
            <div className="animate-slideInRight">
              <div className={`relative h-72 rounded-2xl bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} overflow-hidden shadow-2xl`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative h-full flex flex-col justify-between p-8">
                  <div className="flex gap-1.5">
                    {['#FF5F57', '#FFBD2E', '#28C840'].map((c) => (
                      <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-2 font-mono">// {project.category}</p>
                    <p className="text-2xl font-black text-white">{project.title}</p>
                  </div>
                </div>
              </div>

              {/* Project details card */}
              <div className="mt-5 p-6 rounded-2xl border border-white/10 bg-white/[0.02] grid grid-cols-3 gap-4">
                <div className="text-center">
                  <User className={`w-5 h-5 ${project.colorClass} mx-auto mb-2`} />
                  <p className="text-xs text-foreground/40 mb-1">Client</p>
                  <p className="text-sm font-semibold text-foreground">{project.client}</p>
                </div>
                <div className="text-center border-x border-white/5">
                  <Calendar className={`w-5 h-5 ${project.colorClass} mx-auto mb-2`} />
                  <p className="text-xs text-foreground/40 mb-1">Date</p>
                  <p className="text-sm font-semibold text-foreground">{project.date}</p>
                </div>
                <div className="text-center">
                  <Code2 className={`w-5 h-5 ${project.colorClass} mx-auto mb-2`} />
                  <p className="text-xs text-foreground/40 mb-1">Stack</p>
                  <p className="text-sm font-semibold text-foreground">{project.tech.length} techs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="p-8 rounded-2xl border border-red-500/10 bg-red-500/[0.03]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <span className="text-lg">🔍</span>
                </div>
                <h2 className="text-2xl font-black text-foreground">The Challenge</h2>
              </div>
              <p className="text-foreground/60 leading-relaxed">{project.problem}</p>
            </div>
            <div className={`p-8 rounded-2xl border bg-gradient-to-br ${project.gradientFrom}/5 ${project.gradientTo}/5`}
              style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center`}>
                  <span className="text-lg">💡</span>
                </div>
                <h2 className="text-2xl font-black text-foreground">Our Solution</h2>
              </div>
              <p className="text-foreground/60 leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className={`text-xs font-bold uppercase tracking-widest ${project.colorClass} mb-2`}>Outcomes</p>
            <h2 className="text-4xl font-black text-foreground">Results Delivered</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {project.results.map((result, i) => (
              <div
                key={result}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] text-center hover:border-white/10 transition-all"
                style={{ animation: `slideInUp 0.5s ease-out ${i * 0.1}s both` }}
              >
                <CheckCircle className={`w-6 h-6 ${project.colorClass} mx-auto mb-3`} />
                <p className={`text-lg font-black ${project.colorClass} mb-1`}>
                  {result.split(' ').slice(0, 2).join(' ')}
                </p>
                <p className="text-xs text-foreground/50">{result.split(' ').slice(2).join(' ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-foreground mb-8 text-center">Technology Used</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className={`px-5 py-2.5 rounded-xl border text-sm font-semibold ${project.colorClass} border-current/20 bg-current/5`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related projects */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-foreground mb-8">More Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}`}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-white/15 transition-all hover:-translate-y-1"
              >
                <div className={`h-32 bg-gradient-to-br ${p.gradientFrom} ${p.gradientTo} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-3 left-4">
                    <p className="text-white font-bold text-sm">{p.title}</p>
                    <p className="text-white/60 text-xs">{p.tagline}</p>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-xs text-foreground/40">{p.category}</span>
                  <ArrowRight className={`w-4 h-4 ${p.colorClass} group-hover:translate-x-1 transition-transform`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-950/50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-foreground mb-4">Let's Build Your Success Story</h2>
          <p className="text-foreground/50 mb-8 text-lg">
            Ready to create results like these? Our team is ready to build something extraordinary for you.
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
