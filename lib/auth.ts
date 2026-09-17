import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`${name} env var is not set`);
  return v;
}

const SECRET = new TextEncoder().encode(requireEnv('ADMIN_JWT_SECRET'));
const COOKIE = 'ml_admin_token';

export const ADMIN_EMAIL    = requireEnv('ADMIN_EMAIL');
export const ADMIN_PASSWORD = requireEnv('ADMIN_PASSWORD');

export async function signToken(payload: Record<string, unknown>) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(SECRET);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload;
  } catch {
    return null;
  }
}

export async function getSession() {
  const store = await cookies();
  const token = store.get(COOKIE)?.value;
  if (!token) return null;
  return verifyToken(token);
}

export { COOKIE };
