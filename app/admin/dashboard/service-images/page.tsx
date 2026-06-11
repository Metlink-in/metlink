'use client';
import { useEffect, useRef, useState } from 'react';
import { industries } from '@/lib/industries-data';

type ImageMap = Record<string, string>; // key: `${industrySlug}/${topicSlug}` -> data URL

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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div onClick={() => fileRef.current?.click()}
        style={{
          width: '100%', aspectRatio: '16/10', borderRadius: 8, cursor: 'pointer', overflow: 'hidden',
          background: 'rgba(43,128,240,0.06)', border: value ? '1px solid rgba(255,255,255,0.12)' : '2px dashed rgba(43,128,240,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
        {value
          ? <img src={value} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>{uploading ? 'Uploading…' : '🖼️ Upload'}</span>}
      </div>
      {value && (
        <button type="button" onClick={() => onChange('')}
          style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)', color: '#EF4444', borderRadius: 6, padding: '3px 0', fontSize: 11, cursor: 'pointer' }}>
          Remove
        </button>
      )}
      <input ref={fileRef} type="file" accept="image/png,image/jpeg,image/svg+xml,image/webp,image/gif"
        style={{ display: 'none' }}
        onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); e.target.value = ''; }} />
    </div>
  );
}

export default function ServiceImagesEditor() {
  const [map, setMap] = useState<ImageMap>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');
  const [open, setOpen] = useState<string | null>(industries[0]?.slug ?? null);

  useEffect(() => {
    fetch('/api/admin/content/automation-service-images').then(r => r.json()).then(res => {
      if (res.data && typeof res.data === 'object') setMap(res.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const setImg = (key: string, url: string) =>
    setMap(p => { const n = { ...p }; if (url) n[key] = url; else delete n[key]; return n; });

  async function save() {
    setSaving(true);
    try {
      const res = await fetch('/api/admin/content/automation-service-images', {
        method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(map),
      });
      setToast(res.ok ? 'Saved!' : 'Save failed.');
    } catch { setToast('Save failed.'); }
    setSaving(false);
    setTimeout(() => setToast(''), 3000);
  }

  const countFor = (slug: string) =>
    industries.find(i => i.slug === slug)?.topics.filter(t => map[`${slug}/${t.slug}`]).length ?? 0;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <div>
          <h1 style={{ color: '#fff', fontSize: 22, fontWeight: 700, margin: 0 }}>Service Card Images</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 4 }}>Upload an image for each service tile shown on the Automation First page. Services without an image show the default icon.</p>
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
        industries.map(ind => {
          const isOpen = open === ind.slug;
          return (
            <div key={ind.slug} style={{ background: '#0D1B2E', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, marginTop: 16, overflow: 'hidden' }}>
              <button onClick={() => setOpen(isOpen ? null : ind.slug)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', color: '#fff', padding: '16px 20px', cursor: 'pointer', fontSize: 16, fontWeight: 600 }}>
                <span>{ind.icon} {ind.name}</span>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{countFor(ind.slug)}/{ind.topics.length} images · {isOpen ? '▲' : '▼'}</span>
              </button>
              {isOpen && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 14, padding: '0 20px 20px' }}>
                  {ind.topics.map(tp => {
                    const key = `${ind.slug}/${tp.slug}`;
                    return (
                      <div key={tp.slug}>
                        <ImageUpload value={map[key] || ''} onChange={v => setImg(key, v)} />
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11, marginTop: 5, lineHeight: 1.3 }}>{tp.name}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
