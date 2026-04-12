'use client';

import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

const categories = ['All', 'AI & Automation', 'Digital Marketing', 'Creative Media', 'Software Development'];

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#080808' }}>

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(212,168,67,0.06), transparent 70%)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.2)', color: '#D4A843' }}>
            Insights & Ideas
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#F5EDD8] mb-6 leading-tight">
            The MetLink{' '}
            <span style={{ background: 'linear-gradient(135deg, #F0C855, #D4A843, #A37820)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Blog</span>
          </h1>
          <p className="text-xl text-[#9A8F7A] max-w-3xl mx-auto">
            Actionable insights on AI, marketing, software, and creative strategy — from the team that builds it every day.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-5 sticky top-16 z-40" style={{ background: 'rgba(6,6,6,0.95)', borderTop: '1px solid rgba(212,168,67,0.06)', borderBottom: '1px solid rgba(212,168,67,0.06)', backdropFilter: 'blur(16px)' }}>
        <div className="max-w-7xl mx-auto px-4 flex gap-3 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button key={cat} className="flex-shrink-0 px-5 py-2 rounded-xl text-sm font-medium transition-all"
              style={cat === 'All'
                ? { background: 'rgba(212,168,67,0.12)', border: '1px solid rgba(212,168,67,0.35)', color: '#D4A843' }
                : { border: '1px solid rgba(255,255,255,0.06)', color: '#6A5F4A' }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="py-14" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-6">Featured Article</p>
          <Link href={`/blog/${featured.slug}`}
            className="group grid lg:grid-cols-5 gap-8 p-8 rounded-3xl transition-all duration-300 overflow-hidden relative hover:-translate-y-1"
            style={{ background: '#0C0C0C', border: '1px solid rgba(212,168,67,0.12)' }}>

            <div className={`lg:col-span-2 h-56 lg:h-auto rounded-2xl bg-gradient-to-br ${featured.gradientFrom} ${featured.gradientTo} relative overflow-hidden flex-shrink-0`}>
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative h-full flex flex-col justify-between p-6">
                <span className="self-start px-3 py-1 rounded-full text-xs font-semibold bg-black/40 text-[#F5EDD8]">{featured.category}</span>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{featured.authorEmoji}</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{featured.author}</p>
                    <p className="text-white/60 text-xs">{featured.authorRole}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 relative z-10 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">{featured.category}</span>
                <span className="text-xs text-[#6A5F4A] flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
                <span className="text-xs text-[#6A5F4A]">{featured.date}</span>
              </div>
              <h2 className="text-3xl font-black text-[#F5EDD8] mb-4 leading-tight group-hover:text-amber-300 transition-colors">{featured.title}</h2>
              <p className="text-[#9A8F7A] leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featured.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs"
                    style={{ border: '1px solid rgba(212,168,67,0.12)', color: '#7A6F5A' }}>{tag}</span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 group-hover:gap-3 transition-all">
                Read Full Article <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="py-8 pb-24" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-[#6A5F4A] uppercase tracking-[0.2em] mb-8">Latest Articles</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{ background: '#0C0C0C', border: '1px solid rgba(212,168,67,0.08)' }}>
                <div className={`h-40 bg-gradient-to-br ${post.gradientFrom} ${post.gradientTo} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-3 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/40 text-[#F5EDD8] backdrop-blur-sm">{post.category}</span>
                  </div>
                  <div className="absolute top-4 right-4 text-3xl">{post.authorEmoji}</div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-amber-400">{post.category}</span>
                    <span className="text-xs text-[#6A5F4A] flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#F5EDD8] mb-3 leading-snug group-hover:text-amber-300 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-[#7A6F5A] line-clamp-3 flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(212,168,67,0.06)' }}>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{post.authorEmoji}</span>
                      <div>
                        <p className="text-xs font-semibold text-[#C8B99A]">{post.author}</p>
                        <p className="text-xs text-[#4A4030]">{post.date}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-amber-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24" style={{ background: '#060606', borderTop: '1px solid rgba(212,168,67,0.08)' }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">Never Miss an Insight</p>
          <h2 className="text-4xl font-black text-[#F5EDD8] mb-4">Subscribe to the Newsletter</h2>
          <p className="text-[#9A8F7A] mb-8">Get our best articles on AI, marketing, and software — once a month, no spam.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-xl text-sm text-[#F5EDD8] placeholder:text-[#4A4030] focus:outline-none"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,168,67,0.15)' }} />
            <button type="submit" className="px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #D4A843, #A37820)', color: '#080808' }}>Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
