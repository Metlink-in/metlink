'use client';
import SectionEditor from '../_components/SectionEditor';
import { inp, label, card, field } from '../_components/styles';

interface Footer { tagline: string; copyright: string; }

export default function FooterEditor() {
  return (
    <SectionEditor
      section="footer"
      title="Footer"
      description="Footer tagline and copyright text."
      renderForm={(data, setData) => {
        const d = (data ?? {}) as Footer;
        const set = (k: keyof Footer, v: string) => setData({ ...d, [k]: v });
        return (
          <div style={card}>
            <div style={field}><label style={label}>Tagline</label><textarea style={{ ...inp, resize: 'vertical' as const, minHeight: 72, fontFamily: 'inherit' }} value={d.tagline ?? ''} onChange={e => set('tagline', e.target.value)} /></div>
            <div style={field}><label style={label}>Copyright Text</label><input style={inp} value={d.copyright ?? ''} onChange={e => set('copyright', e.target.value)} /></div>
          </div>
        );
      }}
    />
  );
}
