'use client';
import { useRef, useState } from 'react';
import { inp, label, card } from './styles';

interface Field {
  key: string;
  label: string;
  multiline?: boolean;
  half?: boolean;
}

interface Props {
  items: Record<string, string>[];
  onChange: (items: Record<string, string>[]) => void;
  fields: Field[];
  addLabel?: string;
  defaultItem?: Record<string, string>;
}

function LogoField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
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
    } catch {
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input
          style={{ ...inp, flex: 1 }}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="https://... or upload below"
        />
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          style={{
            background: 'rgba(43,128,240,0.12)',
            border: '1px solid rgba(43,128,240,0.3)',
            color: '#2B80F0',
            borderRadius: 8,
            padding: '7px 14px',
            fontSize: 12,
            cursor: uploading ? 'not-allowed' : 'pointer',
            whiteSpace: 'nowrap',
            opacity: uploading ? 0.6 : 1,
          }}
        >
          {uploading ? 'Uploading…' : '📁 Upload'}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/png,image/jpeg,image/svg+xml,image/webp,image/gif"
          style={{ display: 'none' }}
          onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); e.target.value = ''; }}
        />
      </div>
      {value && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
          <img
            src={value}
            alt="preview"
            style={{ width: 40, height: 40, objectFit: 'contain', borderRadius: 8, background: 'rgba(255,255,255,0.06)', padding: 4 }}
          />
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>preview</span>
        </div>
      )}
    </div>
  );
}

export default function ArrayEditor({ items = [], onChange, fields, addLabel = 'Add Item', defaultItem }: Props) {
  const def = defaultItem ?? Object.fromEntries(fields.map(f => [f.key, '']));

  function update(i: number, key: string, val: string) {
    const next = items.map((item, idx) => idx === i ? { ...item, [key]: val } : item);
    onChange(next);
  }

  function remove(i: number) {
    onChange(items.filter((_, idx) => idx !== i));
  }

  function add() {
    onChange([...items, { ...def }]);
  }

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} style={{ ...card, position: 'relative', marginBottom: 12 }}>
          <button onClick={() => remove(i)} style={{ position: 'absolute', top: 12, right: 14, background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', color: '#EF4444', borderRadius: 6, padding: '2px 10px', fontSize: 12, cursor: 'pointer' }}>
            Remove
          </button>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {fields.map(f => (
              <div key={f.key} style={{ flex: f.half ? '0 0 calc(50% - 6px)' : '1 1 100%', minWidth: 0 }}>
                <label style={label}>{f.label}</label>
                {f.key === 'logo' ? (
                  <LogoField value={item[f.key] ?? ''} onChange={v => update(i, f.key, v)} />
                ) : f.multiline ? (
                  <textarea style={{ ...inp, resize: 'vertical', minHeight: 72, fontFamily: 'inherit' }} value={item[f.key] ?? ''} onChange={e => update(i, f.key, e.target.value)} />
                ) : (
                  <input style={inp} value={item[f.key] ?? ''} onChange={e => update(i, f.key, e.target.value)} />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={add} style={{ marginTop: 4, background: 'rgba(43,128,240,0.12)', border: '1px solid rgba(43,128,240,0.3)', color: '#2B80F0', borderRadius: 10, padding: '9px 20px', fontSize: 13, cursor: 'pointer' }}>
        + {addLabel}
      </button>
    </div>
  );
}
