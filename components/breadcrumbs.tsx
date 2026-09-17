import Link from 'next/link';
import { Fragment } from 'react';
import { ChevronRight } from 'lucide-react';

export interface CrumbItem {
  name: string;
  path: string;
}

/**
 * Shared visible breadcrumb trail — same markup/classes already used by the
 * detail-page templates, so it matches the BreadcrumbList JSON-LD exactly
 * (callers should build `items` from the same list passed to breadcrumbSchema()).
 */
export function Breadcrumbs({
  items,
  accent = '#2B80F0',
  center = false,
  wrap = true,
}: {
  items: CrumbItem[];
  accent?: string;
  center?: boolean;
  /** Set false for the horizontal-scroll variant (long trails on narrow layouts) instead of wrapping. */
  wrap?: boolean;
}) {
  // Wrapped lines stay left-aligned within their own box (never centered per-line —
  // that's what produced the jagged, independently-centered rows). The box itself
  // is centered as a single unit when `center` is requested.
  const rowLayout = wrap
    ? ['flex', 'flex-wrap', 'items-center', 'gap-2']
    : ['flex', 'items-center', 'gap-2', 'overflow-x-auto', 'whitespace-nowrap', 'pb-2'];
  const row = (
    <div className={[...rowLayout, 'text-xs'].join(' ')} style={{ color: 'rgba(255,255,255,0.4)' }}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <Fragment key={item.path}>
            {isLast ? (
              <span style={{ color: accent }}>{item.name}</span>
            ) : (
              <span className="inline-flex items-center gap-2 shrink-0">
                <Link href={item.path} className="hover:text-[#2B80F0] transition-colors">
                  {item.name}
                </Link>
                <ChevronRight className="w-3 h-3 shrink-0" />
              </span>
            )}
          </Fragment>
        );
      })}
    </div>
  );

  if (!center) return <div className="mb-8">{row}</div>;
  return <div className="flex justify-center mb-8">{row}</div>;
}
