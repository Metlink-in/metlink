import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Clock, ArrowRight } from 'lucide-react';
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
    <div className="w-full overflow-x-hidden" style={{ background: '#000000' }}>

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-br ${post.gradientFrom} ${post.gradientTo} opacity-10`} />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: 'linear-gradient(#1A1A1A 1px,transparent 1px),linear-gradient(90deg,#1A1A1A 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#525252] mb-8">
            <Link href="/" className="hover:text-[#FFFFFF] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-[#FFFFFF] transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-amber-400 font-medium">{post.category}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold"
              style={{ background: '#1A1A1A', border: '1px solid #1A1A1A', color: '#FACC15' }}>
              {post.category}
            </span>
            <span className="text-[#A3A3A3] text-sm flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
            <span className="text-[#A3A3A3] text-sm">{post.date}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#FFFFFF] mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-[#A3A3A3] leading-relaxed mb-10">{post.excerpt}</p>

          <div className="inline-flex items-center gap-4 p-5 rounded-2xl" style={{ background: '#0A0A0A', border: '1px solid #1A1A1A' }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg shrink-0"
              style={{ background: '#FACC15' }}>
              {post.authorEmoji}
            </div>
            <div>
              <p className="font-bold text-[#FFFFFF] mb-0.5">{post.author}</p>
              <p className="text-xs text-[#525252] uppercase tracking-wider">{post.authorRole} · MetLink</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="py-16" style={{ background: '#000000', borderTop: '1px solid #1A1A1A' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            {paragraphs.map((block, i) => {
              if (block.startsWith('## ')) {
                return <h2 key={i} className="text-3xl font-black text-[#FFFFFF] mt-12 mb-5 leading-tight">{block.replace('## ', '')}</h2>;
              }
              if (block.startsWith('### ')) {
                return <h3 key={i} className="text-xl font-bold text-[#FFFFFF] mt-8 mb-4">{block.replace('### ', '')}</h3>;
              }
              if (block.startsWith('- ')) {
                const items = block.split('\n').filter((l) => l.startsWith('- '));
                return (
                  <ul key={i} className="space-y-3 my-6 pl-2">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-[#A3A3A3] leading-relaxed">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#FACC15' }} />
                        <span dangerouslySetInnerHTML={{ __html: item.replace('- ', '').replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#FFFFFF] font-bold">$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.trim()) {
                return (
                  <p key={i} className="text-[#A3A3A3] leading-relaxed my-6 text-lg"
                    dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#FFFFFF] font-bold">$1</strong>') }} />
                );
              }
              return null;
            })}
          </div>

          {/* Tags */}
          <div className="mt-16 pt-8" style={{ borderTop: '1px solid #1A1A1A' }}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#525252] mb-4">Tags</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: '#1A1A1A', border: '1px solid #1A1A1A', color: '#FACC15' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author bio */}
          <div className="mt-12 p-8 rounded-3xl flex gap-6 items-start" style={{ background: '#0A0A0A', border: '1px solid #1A1A1A' }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-xl flex-shrink-0"
              style={{ background: '#FACC15' }}>
              {post.authorEmoji}
            </div>
            <div>
              <p className="font-black text-[#FFFFFF] text-xl mb-1">{post.author}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">{post.authorRole} at MetLink</p>
              <p className="text-sm text-[#737373] leading-relaxed">
                Expert at MetLink specializing in {post.category.toLowerCase()}. Helping businesses grow through data, technology, and creative strategy.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      {relatedPosts.length > 0 && (
        <section className="py-24" style={{ background: '#000000', borderTop: '1px solid #1A1A1A' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-[#FFFFFF] mb-10 text-center">Continue Reading</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`}
                  className="group rounded-2xl overflow-hidden flex transition-all duration-300 hover:-translate-y-1"
                  style={{ background: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                  <div className="w-2 flex-shrink-0" style={{ background: '#FACC15' }} />
                  <div className="p-6 flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">{p.category}</span>
                    <h3 className="font-bold text-[#FFFFFF] mt-2 mb-3 leading-snug group-hover:text-amber-300 transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#737373] leading-relaxed mb-4 line-clamp-2">{p.excerpt}</p>
                    <span className="text-xs font-semibold text-[#A3A3A3]">{p.readTime} · {p.date}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/blog"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all hover:bg-white/5"
                style={{ border: '1px solid #1A1A1A', color: '#E5E5E5' }}>
                View All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
