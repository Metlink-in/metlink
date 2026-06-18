import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

// Lists the service-card images that actually exist in /public/cards, so the
// frontend only loads real files (no 404 probing). Drop a file in and it appears
// on the next page load.
export async function GET() {
  const base = path.join(process.cwd(), 'public', 'cards');
  const map: Record<string, string> = {};
  try {
    for (const ind of fs.readdirSync(base)) {
      const dir = path.join(base, ind);
      let stat: fs.Stats;
      try { stat = fs.statSync(dir); } catch { continue; }
      if (!stat.isDirectory()) continue;
      for (const file of fs.readdirSync(dir)) {
        if (!/\.(jpe?g|png|webp|gif|avif)$/i.test(file)) continue;
        const slug = file.replace(/\.[^.]+$/, '');
        map[`${ind}/${slug}`] = `/cards/${ind}/${file}`;
      }
    }
  } catch {
    // folder may not exist — return empty map
  }
  return NextResponse.json({ map });
}
