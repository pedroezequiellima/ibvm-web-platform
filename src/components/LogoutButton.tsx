'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase/client';

export function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleLogout() {
    setIsLoading(true);

    try {
      await signOut(auth);

      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Falha ao limpar sessão no servidor: ${response.status} ${response.statusText} - ${errorText}`);
      }

      router.replace('/login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      setIsLoading(false);
      alert(`Não foi possível fazer logout. Motivo: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={isLoading}
      className="inline-flex items-center justify-center rounded-2xl border border-[#D9C7B2] bg-transparent px-5 py-3 text-sm font-semibold text-[#5c4938] transition hover:bg-[#FCF9F6] hover:border-[#BFA88A] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isLoading ? 'Saindo...' : 'Logout'}
    </button>
  );
}
