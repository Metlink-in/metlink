'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Post { _id: string; title: string; category: string; author: string; date: string; published: boolean; }

export default function BlogList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    const res = await fetch('/api/admin/blog');
    setPosts(await res.json());
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function del(id: string) {
    if (!confirm('Delete this post?')) return;
    await fetch(`/api/admin/blog/${id}`, { method: 'DELETE' });
    load();
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <h1 style={{ color: '#fff', fontSize: 22, fontWeight: 700, margin: 0 }}>Blog</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 4 }}>Manage blog posts and articles.</p>
        </div>
        <Link href="/admin/dashboard/blog/new">
          <button style={{ background: '#2B80F0', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 20px', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
            + New Post
          </button>
        </Link>
      </div>

      {loading ? (
        <div style={{ color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginTop: 60 }}>Loading…</div>
      ) : posts.length === 0 ? (
        <div style={{ color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginTop: 60, fontSize: 15 }}>No posts yet. Write your first article!</div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {posts.map(p => (
            <div key={p._id} style={{ background: '#0D1B2E', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ color: '#fff', fontSize: 15, fontWeight: 600 }}>{p.title || 'Untitled'}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 2 }}>{p.category} {p.author ? `· ${p.author}` : ''} {p.date ? `· ${p.date}` : ''}</div>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <span style={{ fontSize: 11, padding: '3px 8px', borderRadius: 6, background: p.published ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.06)', color: p.published ? '#10B981' : 'rgba(255,255,255,0.4)', border: `1px solid ${p.published ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.1)'}` }}>
                  {p.published ? 'Published' : 'Draft'}
                </span>
                <Link href={`/admin/dashboard/blog/${p._id}`}>
                  <button style={{ background: 'rgba(43,128,240,0.12)', border: '1px solid rgba(43,128,240,0.25)', color: '#2B80F0', borderRadius: 8, padding: '6px 14px', fontSize: 12, cursor: 'pointer' }}>Edit</button>
                </Link>
                <button onClick={() => del(p._id)} style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', color: '#EF4444', borderRadius: 8, padding: '6px 14px', fontSize: 12, cursor: 'pointer' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
