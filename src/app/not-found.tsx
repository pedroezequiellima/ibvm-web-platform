import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Imagem de Fundo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/404-jesus.jpg" 
          alt="Jesus andando sobre as águas"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay para melhorar a leitura se necessário */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Conteúdo Centralizado */}
      <div className="z-10 flex flex-col items-center px-4 text-center">
        <div className="max-w-md rounded-lg bg-stone-900/40 p-8 backdrop-blur-md border border-white/20 shadow-2xl">
          <h1 className="mb-2 text-6xl font-bold text-white">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-stone-100 uppercase tracking-widest">
            Página não encontrada
          </h2>
          
          <p className="mb-8 text-lg italic text-stone-200">
            `Mas lembre-se: Ele está sempre por perto.`
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="rounded-full bg-white px-8 py-3 text-sm font-bold uppercase tracking-tighter text-stone-900 transition-transform hover:scale-105 active:scale-95"
            >
              Voltar ao Início
            </Link>
            <button
              onClick={() => window.history.back()}
              className="rounded-full border border-white/50 px-8 py-3 text-sm font-bold uppercase tracking-tighter text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Tentar Novamente
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}