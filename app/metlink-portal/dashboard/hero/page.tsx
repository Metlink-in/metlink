'use client';
import SectionEditor from '../_components/SectionEditor';
import { inp, label, card, row, field } from '../_components/styles';

interface Hero {
  badge: string; headline1: string; headline2: string; headline3: string; subheadline: string;
  cta1Text: string; cta1Href: string; cta2Text: string; cta2Href: string;
  stat1Value: string; stat1Label: string;
  stat2Value: string; stat2Label: string;
  stat3Value: string; stat3Label: string;
  stat4Value: string; stat4Label: string;
}

export default function HeroEditor() {
  return (
    <SectionEditor
      section="hero"
      title="Hero Section"
      description="Main landing hero — headline, subheadline, CTA buttons and stats."
      renderForm={(data, setData) => {
        const d = (data ?? {}) as Hero;
        const set = (key: keyof Hero, val: string) => setData({ ...d, [key]: val });

        return (
          <div style={card}>
            <div style={field}><label style={label}>Badge Text</label><input style={inp} value={d.badge ?? ''} onChange={e => set('badge', e.target.value)} /></div>
            <div style={row}>
              <div><label style={label}>Headline Line 1</label><input style={inp} value={d.headline1 ?? ''} onChange={e => set('headline1', e.target.value)} /></div>
              <div><label style={label}>Headline Line 2 (gradient)</label><input style={inp} value={d.headline2 ?? ''} onChange={e => set('headline2', e.target.value)} /></div>
            </div>
            <div style={field}><label style={label}>Headline Line 3</label><input style={inp} value={d.headline3 ?? ''} onChange={e => set('headline3', e.target.value)} /></div>
            <div style={field}><label style={label}>Subheadline</label><textarea style={{ ...inp, resize: 'vertical', minHeight: 80, fontFamily: 'inherit' }} value={d.subheadline ?? ''} onChange={e => set('subheadline', e.target.value)} /></div>
            <div style={row}>
              <div><label style={label}>CTA 1 Text</label><input style={inp} value={d.cta1Text ?? ''} onChange={e => set('cta1Text', e.target.value)} /></div>
              <div><label style={label}>CTA 1 Link</label><input style={inp} value={d.cta1Href ?? ''} onChange={e => set('cta1Href', e.target.value)} /></div>
            </div>
            <div style={row}>
              <div><label style={label}>CTA 2 Text</label><input style={inp} value={d.cta2Text ?? ''} onChange={e => set('cta2Text', e.target.value)} /></div>
              <div><label style={label}>CTA 2 Link</label><input style={inp} value={d.cta2Href ?? ''} onChange={e => set('cta2Href', e.target.value)} /></div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, margin: '8px 0 12px' }}>Stats</p>
            <div style={row}>
              <div><label style={label}>Stat 1 Value</label><input style={inp} value={d.stat1Value ?? ''} onChange={e => set('stat1Value', e.target.value)} /></div>
              <div><label style={label}>Stat 1 Label</label><input style={inp} value={d.stat1Label ?? ''} onChange={e => set('stat1Label', e.target.value)} /></div>
            </div>
            <div style={row}>
              <div><label style={label}>Stat 2 Value</label><input style={inp} value={d.stat2Value ?? ''} onChange={e => set('stat2Value', e.target.value)} /></div>
              <div><label style={label}>Stat 2 Label</label><input style={inp} value={d.stat2Label ?? ''} onChange={e => set('stat2Label', e.target.value)} /></div>
            </div>
            <div style={row}>
              <div><label style={label}>Stat 3 Value</label><input style={inp} value={d.stat3Value ?? ''} onChange={e => set('stat3Value', e.target.value)} /></div>
              <div><label style={label}>Stat 3 Label</label><input style={inp} value={d.stat3Label ?? ''} onChange={e => set('stat3Label', e.target.value)} /></div>
            </div>
            <div style={row}>
              <div><label style={label}>Stat 4 Value</label><input style={inp} value={d.stat4Value ?? ''} onChange={e => set('stat4Value', e.target.value)} /></div>
              <div><label style={label}>Stat 4 Label</label><input style={inp} value={d.stat4Label ?? ''} onChange={e => set('stat4Label', e.target.value)} /></div>
            </div>
          </div>
        );
      }}
    />
  );
}
