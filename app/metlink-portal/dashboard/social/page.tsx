'use client';
import SectionEditor from '../_components/SectionEditor';
import { inp, label, card, field } from '../_components/styles';

interface Social { twitter: string; linkedin: string; github: string; instagram: string; }

export default function SocialEditor() {
  return (
    <SectionEditor
      section="social"
      title="Social Links"
      description="Links to social media profiles shown in header and footer."
      renderForm={(data, setData) => {
        const d = (data ?? {}) as Social;
        const set = (k: keyof Social, v: string) => setData({ ...d, [k]: v });
        return (
          <div style={card}>
            <div style={field}><label style={label}>Twitter / X URL</label><input style={inp} value={d.twitter ?? ''} onChange={e => set('twitter', e.target.value)} /></div>
            <div style={field}><label style={label}>LinkedIn URL</label><input style={inp} value={d.linkedin ?? ''} onChange={e => set('linkedin', e.target.value)} /></div>
            <div style={field}><label style={label}>GitHub URL</label><input style={inp} value={d.github ?? ''} onChange={e => set('github', e.target.value)} /></div>
            <div style={field}><label style={label}>Instagram URL</label><input style={inp} value={d.instagram ?? ''} onChange={e => set('instagram', e.target.value)} /></div>
          </div>
        );
      }}
    />
  );
}
