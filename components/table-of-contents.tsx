export interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

/** Auto-generated table of contents, built from a post's own H2/H3 headings. */
export function TableOfContents({ headings }: { headings: TocHeading[] }) {
  if (headings.length < 2) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-2xl p-6 mb-12"
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
        On This Page
      </p>
      <ul className="space-y-2.5">
        {headings.map((h) => (
          <li key={h.id} style={{ marginLeft: h.level === 3 ? 16 : 0 }}>
            <a
              href={`#${h.id}`}
              className="text-sm leading-snug transition-colors hover:text-[#2B80F0]"
              style={{ color: h.level === 3 ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.75)' }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
