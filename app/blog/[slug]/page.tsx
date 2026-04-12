import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Clock, ArrowRight, User } from 'lucide-react';
import { getPostBySlug, blogPosts } from '@/lib/blog-data';

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);
  const fallback = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);
  const relatedPosts = related.length >= 2 ? related : fallback;

  const paragraphs = post.content.split('\n\n');

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-28 bg-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-br ${post.gradientFrom} ${post.gradientTo} opacity-[0.06]`} />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-foreground/40 mb-8 flex-wrap">
            <Link href="/" className="hover:text-foreground/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-foreground/70 transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className={post.colorClass}>{post.category}</span>
          </div>

          {/* Category & meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${post.colorClass} border-current/20 bg-current/5`}>
              {post.category}
            </span>
            <span className="text-foreground/40 text-sm flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
            <span className="text-foreground/40 text-sm">{post.date}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed mb-10">{post.excerpt}</p>

          {/* Author */}
          <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] w-fit">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.gradientFrom} ${post.gradientTo} flex items-center justify-center text-2xl shadow-lg`}>
              {post.authorEmoji}
            </div>
            <div>
              <p className="font-bold text-foreground">{post.author}</p>
              <p className="text-sm text-foreground/50">{post.authorRole} · MetLink</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="py-16 bg-zinc-950/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            {paragraphs.map((block, i) => {
              if (block.startsWith('## ')) {
                return (
                  <h2 key={i} className="text-2xl font-black text-foreground mt-12 mb-4 leading-tight">
                    {block.replace('## ', '')}
                  </h2>
                );
              }
              if (block.startsWith('### ')) {
                return (
                  <h3 key={i} className="text-xl font-bold text-foreground mt-8 mb-3">
                    {block.replace('### ', '')}
                  </h3>
                );
              }
              if (block.startsWith('- ')) {
                const items = block.split('\n').filter((l) => l.startsWith('- '));
                return (
                  <ul key={i} className="space-y-2 my-4 pl-2">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-foreground/70 leading-relaxed">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${post.gradientFrom} ${post.gradientTo}`} />
                        <span dangerouslySetInnerHTML={{ __html: item.replace('- ', '').replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.trim()) {
                return (
                  <p key={i} className="text-foreground/65 leading-relaxed my-5"
                    dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>') }}
                  />
                );
              }
              return null;
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-white/5">
            <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-4">Tags</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className={`px-4 py-1.5 rounded-full text-sm font-medium border ${post.colorClass} border-current/20 bg-current/5`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author bio */}
          <div className="mt-10 p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex gap-6 items-start">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${post.gradientFrom} ${post.gradientTo} flex items-center justify-center text-3xl shadow-xl flex-shrink-0`}>
              {post.authorEmoji}
            </div>
            <div>
              <p className="font-black text-foreground text-lg mb-1">{post.author}</p>
              <p className={`text-sm font-medium ${post.colorClass} mb-3`}>{post.authorRole} at MetLink</p>
              <p className="text-sm text-foreground/50 leading-relaxed">
                Expert at MetLink specializing in {post.category.toLowerCase()}. Helping businesses grow through data, technology, and creative strategy.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-foreground mb-8">Continue Reading</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`}
                  className="group rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-white/15 hover:-translate-y-1 transition-all duration-300 flex"
                >
                  <div className={`w-2 flex-shrink-0 bg-gradient-to-b ${p.gradientFrom} ${p.gradientTo}`} />
                  <div className="p-6 flex-1">
                    <span className={`text-xs font-bold ${p.colorClass} uppercase tracking-wider`}>{p.category}</span>
                    <h3 className="font-bold text-foreground mt-2 mb-2 leading-snug group-hover:text-blue-300 transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-foreground/50 line-clamp-2 mb-4">{p.excerpt}</p>
                    <span className={`text-xs font-semibold ${p.colorClass} flex items-center gap-1`}>
                      {p.readTime} · {p.date}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/blog"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-white/10 text-foreground/70 hover:text-foreground hover:border-white/20 hover:bg-white/5 transition-all font-medium"
              >
                View All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-zinc-950/50 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-foreground mb-4">
            Ready to Put This Into Practice?
          </h2>
          <p className="text-foreground/50 mb-8">
            Our team can implement these strategies for your business — backed by data and measured by results.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:opacity-90 transition-opacity shadow-xl shadow-blue-600/20"
          >
            Talk to Our Experts <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
