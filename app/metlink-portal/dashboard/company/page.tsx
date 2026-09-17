'use client';
import SectionEditor from '../_components/SectionEditor';
import { inp, label, card, field } from '../_components/styles';

interface Company {
  aboutTitle: string; para1: string; para2: string; para3: string;
  mission: string; vision: string; approach: string; promise: string;
}

export default function CompanyEditor() {
  return (
    <SectionEditor
      section="company"
      title="Company / About"
      description="About section text — paragraphs, mission, vision, approach, promise."
      renderForm={(data, setData) => {
        const d = (data ?? {}) as Company;
        const set = (key: keyof Company, val: string) => setData({ ...d, [key]: val });
        const ta = { ...inp, resize: 'vertical' as const, minHeight: 80, fontFamily: 'inherit' };

        return (
          <div style={card}>
            <div style={field}><label style={label}>About Title</label><input style={inp} value={d.aboutTitle ?? ''} onChange={e => set('aboutTitle', e.target.value)} /></div>
            <div style={field}><label style={label}>Paragraph 1</label><textarea style={ta} value={d.para1 ?? ''} onChange={e => set('para1', e.target.value)} /></div>
            <div style={field}><label style={label}>Paragraph 2</label><textarea style={ta} value={d.para2 ?? ''} onChange={e => set('para2', e.target.value)} /></div>
            <div style={field}><label style={label}>Paragraph 3</label><textarea style={ta} value={d.para3 ?? ''} onChange={e => set('para3', e.target.value)} /></div>
            <div style={field}><label style={label}>Mission Statement</label><textarea style={ta} value={d.mission ?? ''} onChange={e => set('mission', e.target.value)} /></div>
            <div style={field}><label style={label}>Vision Statement</label><textarea style={ta} value={d.vision ?? ''} onChange={e => set('vision', e.target.value)} /></div>
            <div style={field}><label style={label}>Approach</label><textarea style={ta} value={d.approach ?? ''} onChange={e => set('approach', e.target.value)} /></div>
            <div style={field}><label style={label}>Promise</label><textarea style={ta} value={d.promise ?? ''} onChange={e => set('promise', e.target.value)} /></div>
          </div>
        );
      }}
    />
  );
}
