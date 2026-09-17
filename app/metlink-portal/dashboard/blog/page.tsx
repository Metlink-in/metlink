'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { inp, card } from '../_components/styles';

interface Post { _id: string; title: string; category: string; author: string; date: string; published: boolean; }

const defaultCategories = ['AI & Automation', 'Digital Marketing', 'Creative Media', 'Software Development'];

function CategoriesManager() {
  const [cats, setCats]     = useState<string[]>(defaultCategories);
  const [input, setInput]   = useState('');
  const [saving, setSaving] = useState(false);
  const [toast, setToast]   = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch('/api/admin/content/blog-categories').then(r => r.json()).then(res => {
      if (Array.isArray(res.data) && res.data.length) setCats(res.data);
      setLoaded(true);
    }).catch(() => setLoaded(true));
  }, []);

  function add() {
    const v = input.trim();
    if (!v || cats.includes(v)) return;
    setCats(prev => [...prev, v]);
    setInput('');
  }

  function remove(cat: string) {
    setCats(prev => prev.filter(c => c !== cat));
  }

  async function save() {
    setSaving(true);
    try {
      const res = await fetch('/api/admin/content/blog-categories', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cats),
      });
      setToast(res.ok ? 'Categories saved!' : 'Save failed.');
    } catch { setToast('Save failed.'); }
    setSaving(false);
    setTimeout(() => setToast(''), 3000);
  }

  if (!loaded) return null;

  return (
    <div style={{ ...card, marginBottom: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div>
          <p style={{ color: '#fff', fontWeight: 700, fontSize: 15, margin: 0 }}>Blog Categories</p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, marginTop: 2 }}>These appear as filter tabs on the blog page.</p>
        </div>
        <button
          onClick={save}
          disabled={saving}
          style={{ background: '#2B80F0', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 18px', fontSize: 13, fontWeight: 600, cursor: saving ? 'not-allowed' : 'pointer', opacity: saving ? 0.7 : 1 }}>
          {saving ? 'Saving…' : 'Save'}
        </button>
      </div>

      {toast && (
        <div style={{
          background: toast.includes('saved') ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)',
          border: `1px solid ${toast.includes('saved') ? 'rgba(16,185,129,0.4)' : 'rgba(239,68,68,0.4)'}`,
          color: toast.includes('saved') ? '#10B981' : '#EF4444',
          borderRadius: 8, padding: '8px 14px', fontSize: 12, marginBottom: 12,
        }}>{toast}</div>
      )}

      {/* Current categories */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
        {cats.map(cat => (
          <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(43,128,240,0.12)', border: '1px solid rgba(43,128,240,0.3)', borderRadius: 20, padding: '5px 12px' }}>
            <span style={{ color: '#5FA8FF', fontSize: 13 }}>{cat}</span>
            <button
              onClick={() => remove(cat)}
              style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', fontSize: 14, lineHeight: 1, padding: 0 }}>
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Add new */}
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          style={{ ...inp, flex: 1 }}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); add(); } }}
          placeholder="New category name…"
        />
        <button
          onClick={add}
          style={{ background: 'rgba(43,128,240,0.15)', border: '1px solid rgba(43,128,240,0.3)', color: '#2B80F0', borderRadius: 8, padding: '0 18px', fontSize: 13, cursor: 'pointer', whiteSpace: 'nowrap' }}>
          + Add
        </button>
      </div>
    </div>
  );
}

export default function BlogList() {
  const [posts, setPosts]   = useState<Post[]>([]);
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
      <CategoriesManager />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <h1 style={{ color: '#fff', fontSize: 22, fontWeight: 700, margin: 0 }}>Blog Posts</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 4 }}>Manage blog posts and articles.</p>
        </div>
        <Link href="/metlink-portal/dashboard/blog/new">
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
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 2 }}>{p.category}{p.author ? ` · ${p.author}` : ''}{p.date ? ` · ${p.date}` : ''}</div>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <span style={{ fontSize: 11, padding: '3px 8px', borderRadius: 6, background: p.published ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.06)', color: p.published ? '#10B981' : 'rgba(255,255,255,0.4)', border: `1px solid ${p.published ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.1)'}` }}>
                  {p.published ? 'Published' : 'Draft'}
                </span>
                <Link href={`/metlink-portal/dashboard/blog/${p._id}`}>
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
