import { NextResponse } from 'next/server';
import { FIREBASE_SESSION_COOKIE_NAME } from '@/lib/firebase/admin';

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set({
    name: FIREBASE_SESSION_COOKIE_NAME,
    value: '',
    path: '/',
    maxAge: 0,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });
  return response;
}
