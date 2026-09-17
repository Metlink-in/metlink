'use client';
import SectionEditor from '../_components/SectionEditor';
import { inp, label, card, row, field } from '../_components/styles';

interface Contact {
  email: string; phone: string; location: string; responseTime: string;
  emailNote: string; phoneNote: string; locationNote: string;
}

export default function ContactEditor() {
  return (
    <SectionEditor
      section="contact"
      title="Contact Info"
      description="Email, phone, location and response time shown on the Contact page."
      renderForm={(data, setData) => {
        const d = (data ?? {}) as Contact;
        const set = (k: keyof Contact, v: string) => setData({ ...d, [k]: v });
        return (
          <div style={card}>
            <div style={row}>
              <div><label style={label}>Email</label><input style={inp} value={d.email ?? ''} onChange={e => set('email', e.target.value)} /></div>
              <div><label style={label}>Phone</label><input style={inp} value={d.phone ?? ''} onChange={e => set('phone', e.target.value)} /></div>
            </div>
            <div style={row}>
              <div><label style={label}>Location</label><input style={inp} value={d.location ?? ''} onChange={e => set('location', e.target.value)} /></div>
              <div><label style={label}>Response Time</label><input style={inp} value={d.responseTime ?? ''} onChange={e => set('responseTime', e.target.value)} /></div>
            </div>
            <div style={row}>
              <div><label style={label}>Email Note</label><input style={inp} value={d.emailNote ?? ''} onChange={e => set('emailNote', e.target.value)} /></div>
              <div><label style={label}>Phone Note</label><input style={inp} value={d.phoneNote ?? ''} onChange={e => set('phoneNote', e.target.value)} /></div>
            </div>
            <div style={field}><label style={label}>Location Note</label><input style={inp} value={d.locationNote ?? ''} onChange={e => set('locationNote', e.target.value)} /></div>
          </div>
        );
      }}
    />
  );
}
