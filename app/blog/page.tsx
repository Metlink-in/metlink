'use client';

import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

const categories = ['All', 'AI & Automation', 'Digital Marketing', 'Creative Media', 'Software Development'];

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="w-full overflow-x-hidden relative" style={{ background: '#030712' }}>

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6,182,212,0.06) 0%, rgba(139,92,246,0.04) 50%, transparent 100%)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: '#1E293B', border: '1px solid #1E293B', color: '#06B6D4' }}>
            Insights & Ideas
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#E2E8F0] mb-6 leading-tight">
            The MetLink{' '}
            <span style={{ color: '#06B6D4' }}>Blog</span>
          </h1>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Actionable insights on AI, marketing, software, and creative strategy — from the team that builds it every day.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-5 sticky top-16 z-40" style={{ background: 'rgba(6,6,6,0.95)', borderTop: '1px solid #1E293B', borderBottom: '1px solid #1E293B', backdropFilter: 'blur(16px)' }}>
        <div className="max-w-7xl mx-auto px-4 flex gap-3 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button key={cat} className="flex-shrink-0 px-5 py-2 rounded-xl text-sm font-medium transition-all"
              style={cat === 'All'
                ? { background: '#1E293B', border: '1px solid #1E293B', color: '#06B6D4' }
                : { border: '1px solid rgba(255,255,255,0.06)', color: '#64748B' }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="py-14" style={{ background: '#030712' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#06B6D4] mb-6">Featured Article</p>
          <Link href={`/blog/${featured.slug}`}
            className="group grid lg:grid-cols-5 gap-8 p-8 rounded-3xl transition-all duration-300 overflow-hidden relative hover:-translate-y-1"
            style={{ background: '#0F172A', border: '1px solid #1E293B' }}>

            <div className={`lg:col-span-2 h-56 lg:h-auto rounded-2xl bg-gradient-to-br ${featured.gradientFrom} ${featured.gradientTo} relative overflow-hidden flex-shrink-0`}>
              <div className="absolute inset-0 bg-[#030712]/30" />
              <div className="relative h-full flex flex-col justify-between p-6">
                <span className="self-start px-3 py-1 rounded-full text-xs font-semibold bg-[#030712]/40 text-[#E2E8F0]">{featured.category}</span>
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">{featured.category}</span>
                <span className="text-xs text-[#64748B] flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
                <span className="text-xs text-[#64748B]">{featured.date}</span>
              </div>
              <h2 className="text-3xl font-black text-[#E2E8F0] mb-4 leading-tight group-hover:text-[#06B6D4] transition-colors">{featured.title}</h2>
              <p className="text-[#64748B] leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featured.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs"
                    style={{ border: '1px solid #1E293B', color: '#64748B' }}>{tag}</span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#06B6D4] group-hover:gap-3 transition-all">
                Read Full Article <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="py-8 pb-24" style={{ background: '#030712' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-[#64748B] uppercase tracking-[0.2em] mb-8">Latest Articles</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{ background: '#0F172A', border: '1px solid #1E293B' }}>
                <div className={`h-40 bg-gradient-to-br ${post.gradientFrom} ${post.gradientTo} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[#030712]/30" />
                  <div className="absolute bottom-3 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#030712]/40 text-[#E2E8F0] backdrop-blur-sm">{post.category}</span>
                  </div>
                  <div className="absolute top-4 right-4 text-3xl">{post.authorEmoji}</div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-[#06B6D4]">{post.category}</span>
                    <span className="text-xs text-[#64748B] flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#E2E8F0] mb-3 leading-snug group-hover:text-[#06B6D4] transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-[#64748B] line-clamp-3 flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid #1E293B' }}>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{post.authorEmoji}</span>
                      <div>
                        <p className="text-xs font-semibold text-[#E2E8F0]">{post.author}</p>
                        <p className="text-xs text-[#1E293B]">{post.date}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-[#06B6D4] flex items-center gap-1 group-hover:gap-2 transition-all">
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
      <section className="py-24 sm:py-32" style={{ background: '#030712', borderTop: '1px solid #1E293B' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#06B6D4] mb-4">Never Miss an Insight</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">Subscribe to the <span className="text-[#06B6D4]">Insights</span></h2>
          <p className="text-[#64748B] mb-12 text-lg font-medium">Get our best articles on AI, marketing, and software — once a month.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input type="email" placeholder="your@email.com"
              className="flex-1 px-6 py-4 rounded-2xl text-sm text-white placeholder:text-white/10 focus:outline-none transition-all focus:border-[#06B6D4]/50"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B' }} />
            <button type="submit" className="px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#06B6D4]/10"
              style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', color: '#030712' }}>Subscribe</button>
          </form>
          <p className="text-[10px] text-[#64748B]/30 mt-8 font-black uppercase tracking-widest">No Spam &bull; Monthly Recap &bull; Unsubscribe Anytime</p>
        </div>
      </section>
    </div>
  );
}
