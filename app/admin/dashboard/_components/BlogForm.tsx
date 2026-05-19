'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { inp, label, card, row, field } from './styles';

interface PostData {
  slug: string; title: string; excerpt: string; content: string;
  author: string; authorRole: string; date: string; readTime: string;
  category: string; tags: string; gradientFrom: string; gradientTo: string;
  published: boolean;
}

const empty: PostData = {
  slug: '', title: '', excerpt: '', content: '',
  author: 'Jitesh Bawaskar', authorRole: 'Founder', date: '', readTime: '5 min read',
  category: '', tags: '', gradientFrom: '#2B80F0', gradientTo: '#0EA5E9',
  published: true,
};

interface Props { initial?: Partial<PostData> & { _id?: string }; isNew?: boolean; }

export default function BlogForm({ initial, isNew }: Props) {
  const router = useRouter();
  const [d, setD] = useState<PostData>({
    ...empty,
    ...initial,
    tags: Array.isArray((initial as { tags?: unknown })?.tags) ? ((initial as { tags?: string[] })?.tags ?? []).join(', ') : ((initial as { tags?: string })?.tags ?? ''),
  });
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');

  const set = (k: keyof PostData, v: string | boolean) => setD(prev => ({ ...prev, [k]: v }));

  async function save() {
    setSaving(true);
    const payload = { ...d, tags: d.tags.split(',').map(s => s.trim()).filter(Boolean) };
    const url = isNew ? '/api/admin/blog' : `/api/admin/blog/${(initial as { _id?: string })?._id}`;
    const method = isNew ? 'POST' : 'PUT';
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    setSaving(false);
    if (res.ok) {
      setToast('Saved!');
      setTimeout(() => router.push('/admin/dashboard/blog'), 800);
    } else {
      const err = await res.json();
      setToast(err.message ?? 'Save failed.');
      setTimeout(() => setToast(''), 3000);
    }
  }

  const ta = { ...inp, resize: 'vertical' as const, minHeight: 80, fontFamily: 'inherit' };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <h1 style={{ color: '#fff', fontSize: 22, fontWeight: 700, margin: 0 }}>{isNew ? 'New Post' : 'Edit Post'}</h1>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', borderRadius: 10, padding: '10px 18px', fontSize: 14, cursor: 'pointer' }}>Cancel</button>
          <button onClick={save} disabled={saving} style={{ background: '#2B80F0', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 24px', fontSize: 14, fontWeight: 600, cursor: saving ? 'not-allowed' : 'pointer', opacity: saving ? 0.7 : 1 }}>{saving ? 'Saving…' : 'Save Post'}</button>
        </div>
      </div>
      {toast && <div style={{ background: toast === 'Saved!' ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)', border: `1px solid ${toast === 'Saved!' ? 'rgba(16,185,129,0.4)' : 'rgba(239,68,68,0.4)'}`, color: toast === 'Saved!' ? '#10B981' : '#EF4444', borderRadius: 10, padding: '10px 16px', fontSize: 13, marginBottom: 16 }}>{toast}</div>}

      <div style={card}>
        <div style={row}>
          <div><label style={label}>Title</label><input style={inp} value={d.title} onChange={e => set('title', e.target.value)} /></div>
          <div><label style={label}>Slug (URL)</label><input style={inp} value={d.slug} onChange={e => set('slug', e.target.value)} placeholder="my-blog-post" /></div>
        </div>
        <div style={field}><label style={label}>Excerpt / Summary</label><textarea style={ta} value={d.excerpt} onChange={e => set('excerpt', e.target.value)} /></div>
        <div style={field}><label style={label}>Full Content (Markdown or plain text)</label><textarea style={{ ...ta, minHeight: 320 }} value={d.content} onChange={e => set('content', e.target.value)} /></div>
        <div style={row}>
          <div><label style={label}>Author</label><input style={inp} value={d.author} onChange={e => set('author', e.target.value)} /></div>
          <div><label style={label}>Author Role</label><input style={inp} value={d.authorRole} onChange={e => set('authorRole', e.target.value)} /></div>
        </div>
        <div style={row}>
          <div><label style={label}>Date</label><input style={inp} value={d.date} onChange={e => set('date', e.target.value)} placeholder="May 2025" /></div>
          <div><label style={label}>Read Time</label><input style={inp} value={d.readTime} onChange={e => set('readTime', e.target.value)} placeholder="5 min read" /></div>
        </div>
        <div style={row}>
          <div><label style={label}>Category</label><input style={inp} value={d.category} onChange={e => set('category', e.target.value)} /></div>
          <div><label style={label}>Tags (comma-separated)</label><input style={inp} value={d.tags} onChange={e => set('tags', e.target.value)} placeholder="AI, Marketing, SEO" /></div>
        </div>
        <div style={row}>
          <div><label style={label}>Gradient From (hex)</label><input style={inp} value={d.gradientFrom} onChange={e => set('gradientFrom', e.target.value)} /></div>
          <div><label style={label}>Gradient To (hex)</label><input style={inp} value={d.gradientTo} onChange={e => set('gradientTo', e.target.value)} /></div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
          <input type="checkbox" id="pub" checked={d.published} onChange={e => set('published', e.target.checked)} style={{ width: 16, height: 16, cursor: 'pointer' }} />
          <label htmlFor="pub" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, cursor: 'pointer' }}>Published (visible on public site)</label>
        </div>
      </div>
    </div>
  );
}
