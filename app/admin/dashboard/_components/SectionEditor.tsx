'use client';
import { useEffect, useState } from 'react';
import { defaults } from '@/lib/default-data';

interface Props {
  section: string;
  title: string;
  description?: string;
  renderForm: (data: unknown, setData: (d: unknown) => void) => React.ReactNode;
}

export default function SectionEditor({ section, title, description, renderForm }: Props) {
  const [data, setData]     = useState<unknown>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving]   = useState(false);
  const [toast, setToast]     = useState('');

  useEffect(() => {
    fetch(`/api/admin/content/${section}`)
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.text(); })
      .then(text => {
        if (!text) { setData(defaults[section] ?? null); setLoading(false); return; }
        const res = JSON.parse(text);
        // Use fetched data if it exists, otherwise fall back to static defaults
        setData(res.data ?? defaults[section] ?? null);
        setLoading(false);
      })
      .catch(() => {
        setData(defaults[section] ?? null);
        setLoading(false);
      });
  }, [section]);

  async function save() {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/content/${section}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setToast(res.ok ? 'Saved successfully!' : 'Save failed. Try again.');
    } catch {
      setToast('Save failed. Try again.');
    }
    setSaving(false);
    setTimeout(() => setToast(''), 3000);
  }

  const toastOk = toast.includes('success');

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <div>
          <h1 style={{ color: '#fff', fontSize: 22, fontWeight: 700, margin: 0 }}>{title}</h1>
          {description && <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 4 }}>{description}</p>}
        </div>
        <button
          onClick={save}
          disabled={saving || loading}
          style={{ background: '#2B80F0', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 24px', fontSize: 14, fontWeight: 600, cursor: (saving || loading) ? 'not-allowed' : 'pointer', opacity: (saving || loading) ? 0.7 : 1 }}
        >
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
      </div>

      {toast && (
        <div style={{
          background: toastOk ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)',
          border: `1px solid ${toastOk ? 'rgba(16,185,129,0.4)' : 'rgba(239,68,68,0.4)'}`,
          color: toastOk ? '#10B981' : '#EF4444',
          borderRadius: 10, padding: '10px 16px', fontSize: 13, marginBottom: 20,
        }}>
          {toast}
        </div>
      )}

      {loading
        ? <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, marginTop: 40, textAlign: 'center' }}>Loading…</div>
        : renderForm(data, setData)
      }
    </div>
  );
}
