'use client';
import { useEffect, useState } from 'react';

/**
 * Small, self-contained show/hide switch for one homepage section. Stored
 * independently from the section's own content (in the 'sectionVisibility'
 * CMS section) so toggling it off never touches or deletes the actual data —
 * flip it back on any time and everything already entered is still there.
 */
export default function SectionToggle({ sectionKey, label }: { sectionKey: string; label: string }) {
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch('/api/admin/content/sectionVisibility')
      .then(r => r.json())
      .then(res => {
        const data = (res.data ?? {}) as Record<string, boolean>;
        setVisible(data[sectionKey] !== false);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [sectionKey]);

  async function toggle() {
    const next = !visible;
    setVisible(next);
    setSaving(true);
    try {
      const res = await fetch('/api/admin/content/sectionVisibility');
      const current = (await res.json()).data ?? {};
      await fetch('/api/admin/content/sectionVisibility', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...current, [sectionKey]: next }),
      });
    } catch {
      setVisible(!next); // revert on failure
    }
    setSaving(false);
  }

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 12, padding: '14px 18px', marginBottom: 20,
    }}>
      <div>
        <p style={{ color: '#fff', fontSize: 14, fontWeight: 600, margin: 0 }}>{label}</p>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, margin: '3px 0 0' }}>
          {loading ? 'Loading…' : visible ? 'Currently visible on the live site.' : 'Currently hidden — content is kept, just not shown.'}
        </p>
      </div>
      <button
        type="button"
        onClick={toggle}
        disabled={loading || saving}
        aria-pressed={visible}
        style={{
          width: 44, height: 26, borderRadius: 999, flexShrink: 0, position: 'relative',
          border: '1px solid ' + (visible ? 'rgba(43,128,240,0.5)' : 'rgba(255,255,255,0.15)'),
          background: visible ? '#2B80F0' : 'rgba(255,255,255,0.08)',
          cursor: (loading || saving) ? 'not-allowed' : 'pointer',
          opacity: (loading || saving) ? 0.6 : 1,
          transition: 'background 0.2s ease',
        }}
      >
        <span style={{
          position: 'absolute', top: 2, left: visible ? 20 : 2,
          width: 20, height: 20, borderRadius: '50%', background: '#fff',
          transition: 'left 0.2s ease',
        }} />
      </button>
    </div>
  );
}
