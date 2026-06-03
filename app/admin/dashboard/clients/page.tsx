'use client';
import { useEffect, useRef, useState } from 'react';
import { card } from '../_components/styles';

interface Client { logo: string; name: string; industry: string; color: string; }

function LogoUpload({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  async function handleFile(file: File) {
    setUploading(true);
    try {
      const form = new FormData();
      form.append('file', file);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: form });
      const json = await res.json();
      if (json.url) onChange(json.url);
    } catch { alert('Upload failed'); }
    finally { setUploading(false); }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      {value ? (
        <div style={{
          width: '100%', height: 100, borderRadius: 12,
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <img src={value} alt="logo" style={{ maxHeight: 72, maxWidth: '80%', objectFit: 'contain' }} />
        </div>
      ) : (
        <div
          onClick={() => fileRef.current?.click()}
          style={{
            width: '100%', height: 100, borderRadius: 12, cursor: 'pointer',
            background: 'rgba(43,128,240,0.06)', border: '2px dashed rgba(43,128,240,0.3)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
          <span style={{ fontSize: 24 }}>🖼️</span>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>Click to upload logo</span>
        </div>
      )}
      <div style={{ display: 'flex', gap: 8, width: '100%' }}>
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          style={{
            flex: 1, background: 'rgba(43,128,240,0.15)', border: '1px solid rgba(43,128,240,0.35)',
            color: '#5FA8FF', borderRadius: 8, padding: '8px 0', fontSize: 13,
            cursor: uploading ? 'not-allowed' : 'pointer', opacity: uploading ? 0.6 : 1,
          }}>
          {uploading ? 'Uploading…' : value ? '🔄 Replace' : '📁 Upload'}
        </button>
        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            style={{
              background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)',
              color: '#EF4444', borderRadius: 8, padding: '8px 14px', fontSize: 13, cursor: 'pointer',
            }}>
            ✕
          </button>
        )}
      </div>
      <input
        ref={fileRef} type="file"
        accept="image/png,image/jpeg,image/svg+xml,image/webp,image/gif"
        style={{ display: 'none' }}
        onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); e.target.value = ''; }}
      />
    </div>
  );
}

export default function ClientsEditor() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving]   = useState(false);
  const [toast, setToast]     = useState('');

  useEffect(() => {
    fetch('/api/admin/content/clients').then(r => r.json()).then(res => {
      const data = Array.isArray(res.data) ? res.data : [];
      setClients(data.length ? data : [{ logo: '', name: '', industry: '', color: '#2B80F0' }]);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  function updateLogo(i: number, logo: string) {
    setClients(prev => prev.map((c, idx) => idx === i ? { ...c, logo } : c));
  }

  function updateField(i: number, field: keyof Client, val: string) {
    setClients(prev => prev.map((c, idx) => idx === i ? { ...c, [field]: val } : c));
  }

  function addSlot() {
    setClients(prev => [...prev, { logo: '', name: '', industry: '', color: '#2B80F0' }]);
  }

  function removeSlot(i: number) {
    setClients(prev => prev.filter((_, idx) => idx !== i));
  }

  async function save() {
    setSaving(true);
    // Drop slots that have neither a logo nor a name — they render blank on the site.
    const cleaned = clients.filter(c => c.logo.trim() || c.name.trim());
    try {
      const res = await fetch('/api/admin/content/clients', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cleaned),
      });
      setToast(res.ok ? 'Saved!' : 'Save failed.');
    } catch { setToast('Save failed.'); }
    setSaving(false);
    setTimeout(() => setToast(''), 3000);
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <div>
          <h1 style={{ color: '#fff', fontSize: 22, fontWeight: 700, margin: 0 }}>Client Logos</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 4 }}>Add client names and logos shown in the marquee strip. If no logo is uploaded, the name is shown instead.</p>
        </div>
        <button
          onClick={save}
          disabled={saving || loading}
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16, marginBottom: 16 }}>
            {clients.map((c, i) => (
              <div key={i} style={{ ...card, position: 'relative', padding: 16 }}>
                <button
                  onClick={() => removeSlot(i)}
                  style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', color: '#EF4444', borderRadius: 6, padding: '2px 8px', fontSize: 11, cursor: 'pointer' }}>
                  ✕
                </button>
                <LogoUpload value={c.logo} onChange={v => updateLogo(i, v)} />
                <input
                  type="text"
                  value={c.name}
                  onChange={e => updateField(i, 'name', e.target.value)}
                  placeholder="Client name"
                  style={{
                    width: '100%', marginTop: 12, boxSizing: 'border-box',
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 8, padding: '8px 10px', fontSize: 13, color: '#fff',
                  }}
                />
                <input
                  type="text"
                  value={c.industry}
                  onChange={e => updateField(i, 'industry', e.target.value)}
                  placeholder="Industry (optional)"
                  style={{
                    width: '100%', marginTop: 8, boxSizing: 'border-box',
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 8, padding: '8px 10px', fontSize: 13, color: 'rgba(255,255,255,0.7)',
                  }}
                />
              </div>
            ))}
          </div>
          <button
            onClick={addSlot}
            style={{ background: 'rgba(43,128,240,0.12)', border: '1px solid rgba(43,128,240,0.3)', color: '#2B80F0', borderRadius: 10, padding: '10px 24px', fontSize: 13, cursor: 'pointer' }}>
            + Add Logo
          </button>
        </>
      )}
    </div>
  );
}
