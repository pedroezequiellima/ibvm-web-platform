import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const SESSION_COOKIE_NAME = process.env.FIREBASE_SESSION_COOKIE_NAME ?? 'ibvm-auth-cookie';

export async function POST(request: Request) {
  const body = await request.json();
  const idToken = typeof body?.idToken === 'string' ? body.idToken : null;

  if (!idToken) {
    return NextResponse.json({ success: false, error: 'idToken is required' }, { status: 400 });
  }

  const cookieStore = await cookies();
  cookieStore.set({
    name: SESSION_COOKIE_NAME,
    value: idToken,
    httpOnly: true,
    secure: true,
    path: '/',
    sameSite: 'strict',
  });

  return NextResponse.json({ success: true });
}
