import { NextResponse, type NextRequest } from 'next/server';
import { decodeProtectedHeader, importSPKI, jwtVerify } from 'jose';

const SESSION_COOKIE_NAME = process.env.FIREBASE_SESSION_COOKIE_NAME ?? 'session';
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
const FIREBASE_PUBLIC_KEYS_URL = 'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com';

let cachedKeys: Record<string, string> | null = null;
let cacheExpiresAt = 0;

async function getFirebasePublicKeys() {
  const now = Date.now();
  if (cachedKeys && cacheExpiresAt > now) {
    return cachedKeys;
  }

  const response = await fetch(FIREBASE_PUBLIC_KEYS_URL, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Falha ao buscar chaves públicas do Firebase.');
  }

  cachedKeys = await response.json();
  const cacheControl = response.headers.get('cache-control') ?? '';
  const maxAgeMatch = cacheControl.match(/max-age=(\d+)/);
  cacheExpiresAt = now + (maxAgeMatch ? Number(maxAgeMatch[1]) * 1000 : 60 * 60 * 1000);
  return cachedKeys;
}

async function verifyFirebaseSessionCookie(sessionCookie: string) {
  if (!PROJECT_ID) {
    throw new Error('FIREBASE_PROJECT_ID não definido no middleware.');
  }

  const publicKeys = await getFirebasePublicKeys();
  if (!publicKeys) {
    return false;
  }

  const header = decodeProtectedHeader(sessionCookie);
  if (!header.kid) {
    return false;
  }

  const pem = publicKeys[header.kid];
  if (!pem) {
    return false;
  }

  const key = await importSPKI(pem, 'RS256');

  try {
    const { payload } = await jwtVerify(sessionCookie, key, {
      issuer: `https://securetoken.google.com/${PROJECT_ID}`,
      audience: PROJECT_ID,
    });

    return typeof payload === 'object' && payload.sub && payload.exp && payload.auth_time;
  } catch {
    return false;
  }
}

export async function middleware(req: NextRequest) {
  const cookieValue = req.cookies.get(SESSION_COOKIE_NAME)?.value;

  if (!cookieValue) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  const validSession = await verifyFirebaseSessionCookie(cookieValue);
  if (!validSession) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
