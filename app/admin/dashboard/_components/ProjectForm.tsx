'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { inp, label, card, row, field } from './styles';

interface ProjectData {
  slug: string; title: string; category: string; client: string; date: string;
  tech: string; tagline: string; description: string; problem: string;
  solution: string; results: string; gradientFrom: string; gradientTo: string;
  published: boolean;
}

const empty: ProjectData = {
  slug: '', title: '', category: '', client: '', date: '',
  tech: '', tagline: '', description: '', problem: '',
  solution: '', results: '', gradientFrom: '#2B80F0', gradientTo: '#0EA5E9',
  published: true,
};

interface Props { initial?: Partial<ProjectData> & { _id?: string }; isNew?: boolean; }

export default function ProjectForm({ initial, isNew }: Props) {
  const router = useRouter();
  const [d, setD] = useState<ProjectData>({ ...empty, ...initial, tech: Array.isArray((initial as { tech?: unknown })?.tech) ? ((initial as { tech?: string[] })?.tech ?? []).join(', ') : ((initial as { tech?: string })?.tech ?? ''), results: Array.isArray((initial as { results?: unknown })?.results) ? ((initial as { results?: string[] })?.results ?? []).join('\n') : ((initial as { results?: string })?.results ?? '') });
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');

  const set = (k: keyof ProjectData, v: string | boolean) => setD(prev => ({ ...prev, [k]: v }));

  async function save() {
    setSaving(true);
    const payload = {
      ...d,
      tech: d.tech.split(',').map(s => s.trim()).filter(Boolean),
      results: d.results.split('\n').map(s => s.trim()).filter(Boolean),
    };
    const url = isNew ? '/api/admin/portfolio' : `/api/admin/portfolio/${(initial as { _id?: string })?._id}`;
    const method = isNew ? 'POST' : 'PUT';
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    setSaving(false);
    if (res.ok) {
      setToast('Saved!');
      setTimeout(() => router.push('/admin/dashboard/portfolio'), 800);
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
        <h1 style={{ color: '#fff', fontSize: 22, fontWeight: 700, margin: 0 }}>{isNew ? 'New Project' : 'Edit Project'}</h1>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', borderRadius: 10, padding: '10px 18px', fontSize: 14, cursor: 'pointer' }}>Cancel</button>
          <button onClick={save} disabled={saving} style={{ background: '#2B80F0', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 24px', fontSize: 14, fontWeight: 600, cursor: saving ? 'not-allowed' : 'pointer', opacity: saving ? 0.7 : 1 }}>{saving ? 'Saving…' : 'Save Project'}</button>
        </div>
      </div>
      {toast && <div style={{ background: toast === 'Saved!' ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)', border: `1px solid ${toast === 'Saved!' ? 'rgba(16,185,129,0.4)' : 'rgba(239,68,68,0.4)'}`, color: toast === 'Saved!' ? '#10B981' : '#EF4444', borderRadius: 10, padding: '10px 16px', fontSize: 13, marginBottom: 16 }}>{toast}</div>}

      <div style={card}>
        <div style={row}>
          <div><label style={label}>Title</label><input style={inp} value={d.title} onChange={e => set('title', e.target.value)} /></div>
          <div><label style={label}>Slug (URL)</label><input style={inp} value={d.slug} onChange={e => set('slug', e.target.value)} placeholder="my-project-name" /></div>
        </div>
        <div style={row}>
          <div><label style={label}>Category</label><input style={inp} value={d.category} onChange={e => set('category', e.target.value)} /></div>
          <div><label style={label}>Client</label><input style={inp} value={d.client} onChange={e => set('client', e.target.value)} /></div>
        </div>
        <div style={row}>
          <div><label style={label}>Date</label><input style={inp} value={d.date} onChange={e => set('date', e.target.value)} placeholder="Q1 2025" /></div>
          <div><label style={label}>Tech Stack (comma-separated)</label><input style={inp} value={d.tech} onChange={e => set('tech', e.target.value)} placeholder="React, Node.js, MongoDB" /></div>
        </div>
        <div style={field}><label style={label}>Tagline</label><input style={inp} value={d.tagline} onChange={e => set('tagline', e.target.value)} /></div>
        <div style={field}><label style={label}>Description</label><textarea style={ta} value={d.description} onChange={e => set('description', e.target.value)} /></div>
        <div style={field}><label style={label}>Problem</label><textarea style={ta} value={d.problem} onChange={e => set('problem', e.target.value)} /></div>
        <div style={field}><label style={label}>Solution</label><textarea style={ta} value={d.solution} onChange={e => set('solution', e.target.value)} /></div>
        <div style={field}><label style={label}>Results (one per line)</label><textarea style={{ ...ta, minHeight: 100 }} value={d.results} onChange={e => set('results', e.target.value)} placeholder="65% drop in support tickets&#10;4× ROAS in 90 days" /></div>
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
