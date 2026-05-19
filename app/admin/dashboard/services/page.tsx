'use client';
import { useEffect, useState } from 'react';
import { serviceCategories } from '@/lib/services-data';
import { inp, label, card, field } from '../_components/styles';

export default function ServicesEditor() {
  const [json, setJson] = useState('');
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState('');
  const [jsonError, setJsonError] = useState('');

  useEffect(() => {
    fetch('/api/admin/content/services')
      .then(r => r.json())
      .then(res => {
        const data = res.data ?? serviceCategories;
        setJson(JSON.stringify(data, null, 2));
        setLoading(false);
      });
  }, []);

  function handleChange(val: string) {
    setJson(val);
    try { JSON.parse(val); setJsonError(''); } catch { setJsonError('Invalid JSON'); }
  }

  async function save() {
    if (jsonError) return;
    try {
      const parsed = JSON.parse(json);
      setSaving(true);
      const res = await fetch('/api/admin/content/services', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed),
      });
      setSaving(false);
      setToast(res.ok ? 'Saved successfully!' : 'Save failed.');
      setTimeout(() => setToast(''), 3000);
    } catch {
      setJsonError('Invalid JSON — cannot save.');
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <div>
          <h1 style={{ color: '#fff', fontSize: 22, fontWeight: 700, margin: 0 }}>Services</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 4 }}>Edit service categories and individual services. Changes take effect live.</p>
        </div>
        <button onClick={save} disabled={saving || loading || !!jsonError} style={{ background: '#2B80F0', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 24px', fontSize: 14, fontWeight: 600, cursor: saving ? 'not-allowed' : 'pointer', opacity: saving || !!jsonError ? 0.6 : 1 }}>
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
      </div>

      {toast && <div style={{ background: toast.includes('success') ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)', border: `1px solid ${toast.includes('success') ? 'rgba(16,185,129,0.4)' : 'rgba(239,68,68,0.4)'}`, color: toast.includes('success') ? '#10B981' : '#EF4444', borderRadius: 10, padding: '10px 16px', fontSize: 13, marginBottom: 20 }}>{toast}</div>}

      <div style={card}>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginBottom: 12 }}>Edit as JSON. Structure: array of service categories, each with a <code style={{ color: '#2B80F0' }}>services</code> array.</p>
        {jsonError && <p style={{ color: '#EF4444', fontSize: 12, marginBottom: 8 }}>{jsonError}</p>}
        <div style={field}>
          <label style={label}>Services JSON</label>
          {loading
            ? <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>Loading…</div>
            : <textarea
                value={json}
                onChange={e => handleChange(e.target.value)}
                style={{ ...inp, resize: 'vertical', minHeight: 480, fontFamily: 'monospace', fontSize: 12 }}
              />
          }
        </div>
      </div>
    </div>
  );
}
