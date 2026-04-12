'use client';

import Link from 'next/link';
import { ArrowRight, Clock, User } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

const categories = ['All', 'AI & Automation', 'Digital Marketing', 'Creative Media', 'Software Development'];

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm font-medium mb-6">
            Insights & Ideas
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight">
            The MetLink{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-foreground/50 max-w-3xl mx-auto">
            Actionable insights on AI, digital marketing, software development, and creative strategy — from the team that builds it every day.
          </p>
        </div>
      </section>

      {/* Category filters */}
      <section className="py-6 bg-zinc-950/50 border-y border-white/5 sticky top-16 z-40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`flex-shrink-0 px-5 py-2 rounded-xl border text-sm font-medium transition-all ${
                  cat === 'All'
                    ? 'border-blue-500/50 bg-blue-500/10 text-blue-400'
                    : 'border-white/10 text-foreground/50 hover:border-white/20 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">Featured Article</p>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid lg:grid-cols-5 gap-8 p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden relative"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${featured.gradientFrom} ${featured.gradientTo} opacity-0 group-hover:opacity-[0.03] transition-opacity`} />

            {/* Visual */}
            <div className={`lg:col-span-2 h-56 lg:h-auto rounded-2xl bg-gradient-to-br ${featured.gradientFrom} ${featured.gradientTo} relative overflow-hidden flex-shrink-0`}>
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative h-full flex flex-col justify-between p-6">
                <span className={`self-start px-3 py-1 rounded-full text-xs font-semibold bg-black/30 text-white`}>
                  {featured.category}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{featured.authorEmoji}</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{featured.author}</p>
                    <p className="text-white/60 text-xs">{featured.authorRole}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 relative z-10 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className={`text-xs font-bold uppercase tracking-wider ${featured.colorClass}`}>{featured.category}</span>
                <span className="text-xs text-foreground/40 flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
                <span className="text-xs text-foreground/40">{featured.date}</span>
              </div>
              <h2 className="text-3xl font-black text-foreground mb-4 leading-tight group-hover:text-blue-300 transition-colors">
                {featured.title}
              </h2>
              <p className="text-foreground/60 leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featured.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs border border-white/10 text-foreground/50">
                    {tag}
                  </span>
                ))}
              </div>
              <span className={`inline-flex items-center gap-2 text-sm font-semibold ${featured.colorClass} group-hover:gap-3 transition-all`}>
                Read Full Article <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* All posts grid */}
      <section className="py-8 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-8">Latest Articles</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-white/15 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 flex flex-col"
                style={{ animation: `slideInUp 0.5s ease-out ${i * 0.1}s both` }}
              >
                {/* Card top visual */}
                <div className={`h-40 bg-gradient-to-br ${post.gradientFrom} ${post.gradientTo} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-end p-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/30 text-white backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 text-3xl">{post.authorEmoji}</div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-bold ${post.colorClass}`}>{post.category}</span>
                    <span className="text-xs text-foreground/40 flex items-center gap-1">
                      <Clock className="w-3 h-3" />{post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-blue-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-foreground/50 leading-relaxed mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{post.authorEmoji}</span>
                      <div>
                        <p className="text-xs font-semibold text-foreground">{post.author}</p>
                        <p className="text-xs text-foreground/40">{post.date}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold ${post.colorClass} flex items-center gap-1 group-hover:gap-2 transition-all`}>
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
      <section className="py-24 bg-zinc-950/50 border-t border-white/5">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Never Miss an Insight</p>
          <h2 className="text-4xl font-black text-foreground mb-4">Subscribe to the Newsletter</h2>
          <p className="text-foreground/50 mb-8">
            Get our best articles on AI, marketing, and software delivered to your inbox — once a month, no spam.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
