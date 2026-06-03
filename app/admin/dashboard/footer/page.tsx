'use client';
import SectionEditor from '../_components/SectionEditor';
import { inp, label, card, field } from '../_components/styles';

interface FooterLink { label: string; href: string; }
interface FooterColumn { heading: string; links: FooterLink[]; }
interface Footer { tagline: string; copyright: string; columns: FooterColumn[]; }

const smallBtn: React.CSSProperties = {
  background: 'rgba(43,128,240,0.12)', border: '1px solid rgba(43,128,240,0.3)',
  color: '#5FA8FF', borderRadius: 8, padding: '6px 14px', fontSize: 12, cursor: 'pointer',
};
const delBtn: React.CSSProperties = {
  background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)',
  color: '#EF4444', borderRadius: 8, padding: '6px 12px', fontSize: 12, cursor: 'pointer',
};

export default function FooterEditor() {
  return (
    <SectionEditor
      section="footer"
      title="Footer"
      description="Footer tagline, copyright, and the link columns."
      renderForm={(data, setData) => {
        const d = { tagline: '', copyright: '', columns: [], ...(data ?? {}) } as Footer;
        const columns = Array.isArray(d.columns) ? d.columns : [];
        const set = (k: keyof Footer, v: unknown) => setData({ ...d, [k]: v });

        const setColumn = (ci: number, col: FooterColumn) =>
          set('columns', columns.map((c, i) => (i === ci ? col : c)));
        const addColumn = () =>
          set('columns', [...columns, { heading: 'New Column', links: [{ label: '', href: '' }] }]);
        const removeColumn = (ci: number) =>
          set('columns', columns.filter((_, i) => i !== ci));

        const setLink = (ci: number, li: number, link: FooterLink) =>
          setColumn(ci, { ...columns[ci], links: columns[ci].links.map((l, i) => (i === li ? link : l)) });
        const addLink = (ci: number) =>
          setColumn(ci, { ...columns[ci], links: [...columns[ci].links, { label: '', href: '' }] });
        const removeLink = (ci: number, li: number) =>
          setColumn(ci, { ...columns[ci], links: columns[ci].links.filter((_, i) => i !== li) });

        return (
          <>
            <div style={card}>
              <div style={field}><label style={label}>Tagline</label><textarea style={{ ...inp, resize: 'vertical' as const, minHeight: 72 }} value={d.tagline ?? ''} onChange={e => set('tagline', e.target.value)} /></div>
              <div style={field}><label style={label}>Copyright Text</label><input style={inp} value={d.copyright ?? ''} onChange={e => set('copyright', e.target.value)} /></div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 28, marginBottom: 4 }}>
              <h2 style={{ color: '#fff', fontSize: 16, fontWeight: 700, margin: 0 }}>Link Columns</h2>
              <button type="button" style={smallBtn} onClick={addColumn}>+ Add Column</button>
            </div>

            {columns.map((col, ci) => (
              <div key={ci} style={card}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end', marginBottom: 16 }}>
                  <div style={{ flex: 1 }}>
                    <label style={label}>Column Heading</label>
                    <input style={inp} value={col.heading ?? ''} onChange={e => setColumn(ci, { ...col, heading: e.target.value })} />
                  </div>
                  <button type="button" style={delBtn} onClick={() => removeColumn(ci)}>Delete Column</button>
                </div>

                {(col.links ?? []).map((lnk, li) => (
                  <div key={li} style={{ display: 'flex', gap: 10, marginBottom: 10, alignItems: 'center' }}>
                    <input style={{ ...inp, flex: 1 }} placeholder="Label" value={lnk.label ?? ''} onChange={e => setLink(ci, li, { ...lnk, label: e.target.value })} />
                    <input style={{ ...inp, flex: 1 }} placeholder="Link (e.g. /blog or https://…)" value={lnk.href ?? ''} onChange={e => setLink(ci, li, { ...lnk, href: e.target.value })} />
                    <button type="button" style={delBtn} onClick={() => removeLink(ci, li)}>✕</button>
                  </div>
                ))}
                <button type="button" style={smallBtn} onClick={() => addLink(ci)}>+ Add Link</button>
              </div>
            ))}
          </>
        );
      }}
    />
  );
}
