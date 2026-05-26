'use client';
import { useEffect, useState } from 'react';
import { inp, label, card, row, field } from '../_components/styles';

interface SmtpCfg {
  host: string; port: string; secure: string;
  user: string; pass: string; to: string; hasPass?: boolean;
}

const empty: SmtpCfg = { host: '', port: '587', secure: 'false', user: '', pass: '', to: 'hello@metlink.in' };

export default function SmtpPage() {
  const [cfg, setCfg]         = useState<SmtpCfg>(empty);
  const [saving, setSaving]   = useState(false);
  const [testing, setTesting] = useState(false);
  const [testEmail, setTest]  = useState('');
  const [msg, setMsg]         = useState<{ type: 'ok' | 'err'; text: string } | null>(null);

  useEffect(() => {
    fetch('/api/admin/smtp').then(r => r.json()).then(d => {
      setCfg({ host: d.host, port: d.port, secure: d.secure, user: d.user, pass: '', to: d.to, hasPass: d.hasPass });
    });
  }, []);

  const set = (k: keyof SmtpCfg, v: string) => setCfg(p => ({ ...p, [k]: v }));

  async function save() {
    setSaving(true); setMsg(null);
    const res = await fetch('/api/admin/smtp', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(cfg) });
    const d = await res.json();
    setMsg(res.ok ? { type: 'ok', text: 'Saved successfully.' } : { type: 'err', text: d.error || 'Save failed.' });
    setSaving(false);
  }

  async function sendTest() {
    if (!testEmail) return;
    setTesting(true); setMsg(null);
    const res = await fetch('/api/admin/smtp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ testEmail }) });
    const d = await res.json();
    setMsg(res.ok ? { type: 'ok', text: `Test email sent to ${testEmail}!` } : { type: 'err', text: d.error || 'Test failed.' });
    setTesting(false);
  }

  const hd: React.CSSProperties = { color: '#fff', fontSize: 18, fontWeight: 700, marginBottom: 4 };
  const sub: React.CSSProperties = { color: 'rgba(255,255,255,0.4)', fontSize: 13, marginBottom: 24 };
  const sectionTitle: React.CSSProperties = { color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 };

  return (
    <div style={{ maxWidth: 680 }}>
      <div style={hd}>SMTP Settings</div>
      <div style={sub}>Configure outgoing email for contact form submissions.</div>

      {/* Server */}
      <div style={{ ...sectionTitle }}>Mail Server</div>
      <div style={card}>
        <div style={row}>
          <div style={{ flex: 2 }}>
            <label style={label}>SMTP Host</label>
            <input style={inp} value={cfg.host} onChange={e => set('host', e.target.value)}
              placeholder="smtp.gmail.com" />
          </div>
          <div style={{ flex: 1 }}>
            <label style={label}>Port</label>
            <input style={inp} value={cfg.port} onChange={e => set('port', e.target.value)}
              placeholder="587" />
          </div>
          <div style={{ flex: 1 }}>
            <label style={label}>Encryption</label>
            <select style={{ ...inp, cursor: 'pointer' }} value={cfg.secure} onChange={e => set('secure', e.target.value)}>
              <option value="false">STARTTLS (587)</option>
              <option value="true">SSL/TLS (465)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Credentials */}
      <div style={{ ...sectionTitle, marginTop: 20 }}>Credentials</div>
      <div style={card}>
        <div style={row}>
          <div>
            <label style={label}>Email / Username</label>
            <input style={inp} value={cfg.user} onChange={e => set('user', e.target.value)}
              placeholder="hello@metlink.in" />
          </div>
          <div>
            <label style={label}>App Password {cfg.hasPass && !cfg.pass && <span style={{ color: 'rgba(43,128,240,0.8)', fontStyle: 'italic', fontWeight: 400 }}>(saved — leave blank to keep)</span>}</label>
            <input style={inp} type="password" value={cfg.pass} onChange={e => set('pass', e.target.value)}
              placeholder={cfg.hasPass ? '••••••••••••••••' : 'Enter app password'} />
          </div>
        </div>
      </div>

      {/* Delivery */}
      <div style={{ ...sectionTitle, marginTop: 20 }}>Delivery</div>
      <div style={card}>
        <div style={field}>
          <label style={label}>Send Inquiries To (your inbox)</label>
          <input style={inp} value={cfg.to} onChange={e => set('to', e.target.value)}
            placeholder="hello@metlink.in" />
        </div>
      </div>

      {/* Hint */}
      <div style={{ background: 'rgba(43,128,240,0.08)', border: '1px solid rgba(43,128,240,0.2)', borderRadius: 10, padding: '12px 16px', marginTop: 16, fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
        <strong style={{ color: '#5FA8FF' }}>Gmail / Google Workspace:</strong> use <code style={{ background: 'rgba(255,255,255,0.07)', padding: '1px 5px', borderRadius: 4 }}>smtp.gmail.com</code>, port <code style={{ background: 'rgba(255,255,255,0.07)', padding: '1px 5px', borderRadius: 4 }}>587</code>, STARTTLS.
        The password must be a <strong style={{ color: 'rgba(255,255,255,0.75)' }}>16-character App Password</strong> (Google Account → Security → 2-Step Verification → App Passwords).<br />
        <strong style={{ color: '#5FA8FF' }}>Zoho Mail:</strong> host <code style={{ background: 'rgba(255,255,255,0.07)', padding: '1px 5px', borderRadius: 4 }}>smtp.zoho.in</code>, port <code style={{ background: 'rgba(255,255,255,0.07)', padding: '1px 5px', borderRadius: 4 }}>587</code>.
      </div>

      {/* Feedback */}
      {msg && (
        <div style={{ marginTop: 16, padding: '10px 16px', borderRadius: 10, fontSize: 13, fontWeight: 500,
          background: msg.type === 'ok' ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)',
          border: `1px solid ${msg.type === 'ok' ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'}`,
          color:  msg.type === 'ok' ? '#86EFAC' : '#FCA5A5' }}>
          {msg.text}
        </div>
      )}

      {/* Save */}
      <button onClick={save} disabled={saving} style={{ marginTop: 20, padding: '10px 28px', background: '#2B80F0', color: '#fff', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: saving ? 'not-allowed' : 'pointer', opacity: saving ? 0.7 : 1 }}>
        {saving ? 'Saving…' : 'Save Settings'}
      </button>

      {/* Test email */}
      <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ ...sectionTitle }}>Send Test Email</div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
          <div style={{ flex: 1 }}>
            <label style={label}>Recipient address</label>
            <input style={inp} type="email" value={testEmail} onChange={e => setTest(e.target.value)}
              placeholder="you@example.com" />
          </div>
          <button onClick={sendTest} disabled={testing || !testEmail} style={{ padding: '10px 22px', background: 'rgba(255,255,255,0.07)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, fontWeight: 600, fontSize: 13, cursor: testing || !testEmail ? 'not-allowed' : 'pointer', opacity: testing || !testEmail ? 0.5 : 1, whiteSpace: 'nowrap' }}>
            {testing ? 'Sending…' : 'Send Test'}
          </button>
        </div>
      </div>
    </div>
  );
}
