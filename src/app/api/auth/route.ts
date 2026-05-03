import { NextResponse } from 'next/server';
import { adminAuth, FIREBASE_SESSION_COOKIE_NAME, FIREBASE_SESSION_COOKIE_MAX_AGE } from '@/lib/firebase/admin';

export async function POST(request: Request) {
  const body = await request.json();
  const idToken = typeof body?.idToken === 'string' ? body.idToken : null;

  if (!idToken) {
    return NextResponse.json({ error: 'ID token inválido.' }, { status: 400 });
  }

  const sessionCookieMaxAge = FIREBASE_SESSION_COOKIE_MAX_AGE * 1000;

  try {
    const sessionCookie = await adminAuth.createSessionCookie(idToken, {
      expiresIn: sessionCookieMaxAge,
    });

    const response = NextResponse.json({ success: true });

    response.cookies.set({
      name: FIREBASE_SESSION_COOKIE_NAME,
      value: sessionCookie,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'strict',
      maxAge: FIREBASE_SESSION_COOKIE_MAX_AGE,
    });

    return response;
  } catch (error) {
    console.error('Erro criando cookie de sessão:', error);
    return NextResponse.json({ error: 'Falha ao criar sessão segura.' }, { status: 401 });
  }
}
