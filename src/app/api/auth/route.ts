import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // A MÁGICA ESTÁ AQUI: No Next.js moderno, precisamos do 'await'
    const cookieStore = await cookies();
    const cookieName = process.env.FIREBASE_SESSION_COOKIE_NAME || 'ibvm-auth-cookie';

    // Apaga o cookie do navegador
    cookieStore.delete(cookieName);

    return NextResponse.json({ success: true, message: 'Sessão encerrada com sucesso.' }, { status: 200 });
  } catch (error) {
    console.error('Erro interno ao fazer logout:', error);
    return NextResponse.json({ error: 'Falha ao limpar os cookies de sessão.' }, { status: 500 });
  }
}