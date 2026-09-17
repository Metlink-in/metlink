'use client';
import { useEffect, useRef, useState } from 'react';
import { inp, textarea, label, card, field } from '../_components/styles';

interface Item { name: string; image: string }
interface Section { name: string; items: Item[] }
interface Content { title: string; subtitle: string; videos: string[]; sections: Section[] }

const EMPTY: Content = { title: '', subtitle: '', videos: [], sections: [] };

function ImageUpload({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  async function handleFile(file: File) {
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
      const json = await res.json();
      if (json.url) onChange(json.url); else alert(json.error || 'Upload failed');
    } catch { alert('Upload failed'); }
    finally { setUploading(false); }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div
        onClick={() => fileRef.current?.click()}
        style={{
          width: '100%', height: 90, borderRadius: 10, cursor: 'pointer', overflow: 'hidden',
          background: 'rgba(43,128,240,0.06)', border: value ? '1px solid rgba(255,255,255,0.1)' : '2px dashed rgba(43,128,240,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
        {value
          ? <img src={value} alt="tile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>{uploading ? 'Uploading…' : '🖼️ Click to upload'}</span>}
      </div>
      {value && (
        <button type="button" onClick={() => onChange('')}
          style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)', color: '#EF4444', borderRadius: 8, padding: '5px 0', fontSize: 12, cursor: 'pointer' }}>
          Remove image
        </button>
      )}
      <input ref={fileRef} type="file" accept="image/png,image/jpeg,image/svg+xml,image/webp,image/gif"
        style={{ display: 'none' }}
        onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); e.target.value = ''; }} />
    </div>
  );
}

export default function AutomationEditor() {
  const [c, setC] = useState<Content>(EMPTY);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');

  useEffect(() => {
    fetch('/api/admin/content/automation-first').then(r => r.json()).then(res => {
      if (res.data) setC({ ...EMPTY, ...res.data });
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const upd = (patch: Partial<Content>) => setC(p => ({ ...p, ...patch }));

  // Videos
  const setVideo = (i: number, v: string) => upd({ videos: c.videos.map((x, idx) => idx === i ? v : x) });
  const addVideo = () => upd({ videos: [...c.videos, ''] });
  const delVideo = (i: number) => upd({ videos: c.videos.filter((_, idx) => idx !== i) });

  // Sections
  const setSection = (i: number, patch: Partial<Section>) =>
    upd({ sections: c.sections.map((s, idx) => idx === i ? { ...s, ...patch } : s) });
  const addSection = () => upd({ sections: [...c.sections, { name: 'New Section', items: [] }] });
  const delSection = (i: number) => upd({ sections: c.sections.filter((_, idx) => idx !== i) });

  // Items
  const setItem = (si: number, ii: number, patch: Partial<Item>) =>
    setSection(si, { items: c.sections[si].items.map((it, idx) => idx === ii ? { ...it, ...patch } : it) });
  const addItem = (si: number) => setSection(si, { items: [...c.sections[si].items, { name: '', image: '' }] });
  const delItem = (si: number, ii: number) => setSection(si, { items: c.sections[si].items.filter((_, idx) => idx !== ii) });

  async function save() {
    setSaving(true);
    try {
      const res = await fetch('/api/admin/content/automation-first', {
        method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(c),
      });
      setToast(res.ok ? 'Saved!' : 'Save failed.');
    } catch { setToast('Save failed.'); }
    setSaving(false);
    setTimeout(() => setToast(''), 3000);
  }

  const btn = (bg: string, bd: string, col: string): React.CSSProperties =>
    ({ background: bg, border: `1px solid ${bd}`, color: col, borderRadius: 8, padding: '7px 14px', fontSize: 13, cursor: 'pointer' });

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <div>
          <h1 style={{ color: '#fff', fontSize: 22, fontWeight: 700, margin: 0 }}>Automation First</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 4 }}>Edit the Automation First page: heading, looping videos, and the tile sections.</p>
        </div>
        <button onClick={save} disabled={saving || loading}
          style={{ background: '#2B80F0', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 24px', fontSize: 14, fontWeight: 600, cursor: saving ? 'not-allowed' : 'pointer', opacity: saving ? 0.7 : 1 }}>
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
      </div>

      {toast && (
        <div style={{
          background: toast.includes('Saved') ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)',
          border: `1px solid ${toast.includes('Saved') ? 'rgba(16,185,129,0.4)' : 'rgba(239,68,68,0.4)'}`,
          color: toast.includes('Saved') ? '#10B981' : '#EF4444',
          borderRadius: 10, padding: '10px 16px', fontSize: 13, marginBottom: 20,
        }}>{toast}</div>
      )}

      {loading ? (
        <div style={{ color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginTop: 40 }}>Loading…</div>
      ) : (
        <>
          {/* Heading */}
          <div style={card}>
            <div style={field}>
              <label style={label}>Title</label>
              <input style={inp} value={c.title} onChange={e => upd({ title: e.target.value })} placeholder="Automation Services" />
            </div>
            <div style={field}>
              <label style={label}>Subtitle</label>
              <textarea style={textarea} value={c.subtitle} onChange={e => upd({ subtitle: e.target.value })} />
            </div>
          </div>

          {/* Videos */}
          <div style={card}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <h2 style={{ color: '#fff', fontSize: 16, fontWeight: 600, margin: 0 }}>Looping Videos</h2>
              <button onClick={addVideo} style={btn('rgba(43,128,240,0.12)', 'rgba(43,128,240,0.3)', '#5FA8FF')}>+ Add Video</button>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginBottom: 12 }}>Played one after another in an infinite loop. Use a path under <code style={{ color: '#5FA8FF' }}>/public</code> (e.g. <code style={{ color: '#5FA8FF' }}>/hero/hero.mp4</code>).</p>
            {c.videos.map((v, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <input style={inp} value={v} onChange={e => setVideo(i, e.target.value)} placeholder="/hero/hero.mp4" />
                <button onClick={() => delVideo(i)} style={btn('rgba(239,68,68,0.12)', 'rgba(239,68,68,0.3)', '#EF4444')}>✕</button>
              </div>
            ))}
          </div>

          {/* Sections */}
          {c.sections.map((sec, si) => (
            <div key={si} style={card}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 14 }}>
                <input style={{ ...inp, fontWeight: 600 }} value={sec.name} onChange={e => setSection(si, { name: e.target.value })} placeholder="Industry / section name" />
                <button onClick={() => delSection(si)} style={btn('rgba(239,68,68,0.12)', 'rgba(239,68,68,0.3)', '#EF4444')}>Delete section</button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 14 }}>
                {sec.items.map((it, ii) => (
                  <div key={ii} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 12 }}>
                    <ImageUpload value={it.image} onChange={v => setItem(si, ii, { image: v })} />
                    <input style={{ ...inp, marginTop: 8 }} value={it.name} onChange={e => setItem(si, ii, { name: e.target.value })} placeholder="Tile name" />
                    <button onClick={() => delItem(si, ii)} style={{ ...btn('rgba(239,68,68,0.1)', 'rgba(239,68,68,0.25)', '#EF4444'), width: '100%', marginTop: 8 }}>Remove tile</button>
                  </div>
                ))}
              </div>
              <button onClick={() => addItem(si)} style={{ ...btn('rgba(43,128,240,0.12)', 'rgba(43,128,240,0.3)', '#5FA8FF'), marginTop: 14 }}>+ Add Tile</button>
            </div>
          ))}

          <button onClick={addSection} style={{ ...btn('rgba(43,128,240,0.12)', 'rgba(43,128,240,0.3)', '#5FA8FF'), marginTop: 20 }}>+ Add Section</button>
        </>
      )}
    </div>
  );
}
