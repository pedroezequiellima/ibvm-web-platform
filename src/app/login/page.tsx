'use client';

import { useRouter } from 'next/navigation';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '@/lib/firebase/client';

export default function LoginPage() {
  const router = useRouter();

  async function handleGoogleSignIn() {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const idToken = await result.user.getIdToken();

      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idToken }),
      });

      if (!response.ok) {
        throw new Error('Falha ao autenticar. Tente novamente.');
      }

      router.replace('/admin');
    } catch (error) {
      console.error('Erro no login com Google:', error);
      alert('Não foi possível fazer login. Verifique a conexão e tente novamente.');
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
      <section className="w-full max-w-lg rounded-3xl border border-slate-700 bg-slate-900/95 p-10 shadow-xl shadow-slate-950/20">
        <h1 className="text-3xl font-semibold">Acesso Administrativo</h1>
        <p className="mt-3 text-slate-400">Use sua conta Google para acessar o painel seguro do IBVM.</p>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-100 px-5 py-4 text-slate-950 transition hover:bg-slate-200"
        >
          Entrar com Google
        </button>

        <div className="mt-8 rounded-2xl bg-slate-950/80 p-4 text-sm text-slate-400">
          <p className="font-medium text-slate-100">Segurança:</p>
          <ul className="mt-3 space-y-2">
            <li>• O token Firebase é enviado ao servidor.</li>
            <li>• O servidor cria um cookie HttpOnly de sessão.</li>
            <li>• O middleware protege `/admin`.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
