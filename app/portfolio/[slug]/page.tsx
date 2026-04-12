import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, ArrowRight, CheckCircle, Code2, Play } from 'lucide-react';
import { getProjectBySlug, projects } from '@/lib/portfolio-data';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // Find related projects (filter by category, exclude current, take 2)
  const relatedProjects = projects.filter((p) => p.slug !== slug && p.category === project.category).slice(0, 2);
  const fallbackProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);
  const displayedRelated = relatedProjects.length > 0 ? relatedProjects : fallbackProjects;

  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#080808' }}>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.06]" style={{ background: `linear-gradient(135deg, #000, #D4A843)` }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, #D4A843, transparent)' }} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs text-[#6A5F4A] mb-8 overflow-x-auto whitespace-nowrap pb-2">
            <Link href="/" className="hover:text-[#F5EDD8] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/portfolio" className="hover:text-[#F5EDD8] transition-colors">Portfolio</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-amber-400 font-medium">{project.title}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-[#F5EDD8] mb-6 leading-tight">{project.title}</h1>
          <p className="text-xl text-[#9A8F7A] mb-10 max-w-3xl leading-relaxed">{project.description}</p>

          <div className="grid sm:grid-cols-3 gap-4 pt-8" style={{ borderTop: '1px solid rgba(212,168,67,0.1)' }}>
            <div>
              <p className="text-xs text-[#6A5F4A] uppercase tracking-wider mb-1">Client</p>
              <p className="font-bold text-[#F5EDD8]">{project.client}</p>
            </div>
            <div>
              <p className="text-xs text-[#6A5F4A] uppercase tracking-wider mb-1">Category</p>
              <p className="font-bold text-[#F5EDD8]">{project.category}</p>
            </div>
            <div>
              <p className="text-xs text-[#6A5F4A] uppercase tracking-wider mb-1">Date Completed</p>
              <p className="font-bold text-amber-400">{project.date}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="py-20" style={{ background: '#060606', borderTop: '1px solid rgba(212,168,67,0.08)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16">

            {/* Left: Challenge & Solution */}
            <div className="md:col-span-2 space-y-16">
              <div>
                <h2 className="text-3xl font-black text-[#F5EDD8] mb-6">The Challenge</h2>
                <div className="p-8 rounded-3xl" style={{ background: '#080808', border: '1px solid rgba(212,168,67,0.08)' }}>
                  <p className="text-[#9A8F7A] leading-relaxed text-lg">{project.problem}</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black text-[#F5EDD8] mb-6">Our Solution</h2>
                <div className="p-8 rounded-3xl" style={{ background: 'rgba(212,168,67,0.03)', border: '1px solid rgba(212,168,67,0.15)' }}>
                  <p className="text-[#C8B99A] leading-relaxed text-lg">{project.solution}</p>
                </div>
              </div>
            </div>

            {/* Right: Results & Tech */}
            <div className="space-y-12">
              <div>
                <h3 className="text-lg font-bold text-[#F5EDD8] mb-5 flex items-center gap-2">
                  <span className="text-amber-400"><Play className="w-4 h-4 fill-current content-end shrink-0" /></span> Key Results
                </h3>
                <div className="space-y-3">
                  {project.results.map((res) => (
                    <div key={res} className="p-4 rounded-xl flex items-start gap-3"
                      style={{ background: '#080808', border: '1px solid rgba(212,168,67,0.08)' }}>
                      <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <p className="text-sm font-semibold text-[#F5EDD8]">{res}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#F5EDD8] mb-5 flex items-center gap-2">
                  <span className="text-amber-400"><Code2 className="w-4 h-4 fill-current shrink-0" /></span> Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,168,67,0.12)', color: '#D4A843' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: '#080808', borderTop: '1px solid rgba(212,168,67,0.08)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-[#F5EDD8] mb-4">Let's build your success story</h2>
          <p className="text-[#9A8F7A] mb-8 text-lg">We deliver measurable impact through AI, code, and creative strategy.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-xl"
            style={{ background: 'linear-gradient(135deg, #D4A843, #A37820)', color: '#080808', boxShadow: '0 8px 32px rgba(212,168,67,0.25)' }}>
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
