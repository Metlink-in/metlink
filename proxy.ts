import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET = new TextEncoder().encode('ml-admin-secret-2025-jb-metlink');
const COOKIE = 'ml_admin_token';

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === '/api/admin/auth/login') return NextResponse.next();

  const token = req.cookies.get(COOKIE)?.value;

  if (!token) {
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.redirect(new URL('/admin', req.url));
  }

  try {
    await jwtVerify(token, SECRET);
    return NextResponse.next();
  } catch {
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.redirect(new URL('/admin', req.url));
  }
}

export const config = {
  matcher: ['/admin/dashboard/:path*', '/api/admin/:path*'],
};
