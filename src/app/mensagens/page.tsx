'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// 1. Interface de Dados do Vídeo
interface Mensagem {
  id: string;
  titulo: string;
  playlist: string;
  pregador: string;
  data: string;
  thumbnail: string;
  url: string; // Link do vídeo no YouTube
}

// 2. Banco de Dados Simulado (Dados Reais/Teste misturados conforme seu envio)
const mensagensData: Mensagem[] = [
  {
    id: '1',
    titulo: 'O Poder da Graça que Transforma',
    playlist: 'Cultos de Domingo',
    pregador: 'Pr. Presidente',
    data: '17 Mai 2026',
    // DICA: Mudei para caminhos sem '/public' para o Next.js ler correto
    thumbnail: "/pastor.jpg", 
    url: 'https://youtube.com', 
  },
  {
    id: '2',
    titulo: 'Como Vencer as Tempestades da Vida',
    playlist: 'Série: Esperança',
    pregador: 'Pr. João',
    data: '14 Mai 2026',
    thumbnail: '/pastor.jpg', 
    url: 'https://youtube.com',
  },
  {
    id: '3',
    titulo: 'Estudo Bíblico: O Livro de Atos',
    playlist: 'Estudos Bíblicos',
    pregador: 'Pr. Presidente',
    data: '10 Mai 2026',
    thumbnail: '/pastor.jpg', 
    url: 'https://youtube.com',
  },
  {
    id: '4',
    titulo: 'A Importância da Comunhão no GC',
    playlist: 'Cultos de Domingo',
    pregador: 'Liderança',
    data: '07 Mai 2026',
    // Usando link real do YT que funcionou
    thumbnail: 'https://i.ytimg.com/vi/0sWdPt_A2SQ/maxresdefault.jpg', 
    url: 'https://youtu.be/0sWdPt_A2SQ',
  },
   {
    id: '5',
    titulo: 'Vivendo em União - Salmo 133',
    playlist: 'Série: Vida em Comunhão',
    pregador: 'Pr. João',
    data: '03 Mai 2026',
    thumbnail: '/pastor.jpg', 
    url: 'https://youtube.com',
  },
];

// Símbolos SVG para o fundo (embutidos para performance e manipulação de cor)
const SimbolosFundo = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
    {/* Cruz Gigante - Topo Esquerda */}
    <svg className="absolute -left-20 -top-20 w-[600px] h-[600px] text-[#A98054]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11 2h2v7h7v2h-7v11h-2v-11h-7v-2h7z"/>
    </svg>
    
    {/* Peixe (Ictis) - Centro Direita */}
    <svg className="absolute right-[-100px] top-1/3 w-[500px] h-[500px] text-[#A98054]" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24">
      <path d="M2 12c4-4 11-4 15 0 2 2 3.5 3 5 3-1.5 0-3-1-5-3-4-4-11-4-15 0z" />
      <path d="M2 12c4 4 11 4 15 0 2-2 3.5-3 5-3-1.5 0-3 1-5 3-4 4-11 4-15 0z" />
    </svg>

    {/* Bíblia Aberta - Inferior Esquerda */}
    <svg className="absolute -left-10 bottom-[-50px] w-[450px] h-[450px] text-[#A98054]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0-2.5h7v1.5h-7zM22 19c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14zM20 5c0-.55-.45-1-1-1h-1v15c0 .55.45 1 1 1s1-.45 1-1V5zM16 5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V5z"/>
    </svg>
  </div>
);

export default function MensagensPage() {
  const [busca, setBusca] = useState('');
  const [playlistAtiva, setPlaylistAtiva] = useState('Todas');

  // Lógica para gerar a lista única de playlists dinamicamente
  const playlists = useMemo(() => {
    // Pega todas as playlists, remove duplicatas com Set, e ordena
    const listaUnica = Array.from(new Set(mensagensData.map(m => m.playlist))).sort();
    return ['Todas', ...listaUnica];
  }, []);

  // Lógica combinada: Filtra por Playlist E depois por Busca de Texto
  const mensagensFiltradas = mensagensData
    .filter(msg => playlistAtiva === 'Todas' || msg.playlist === playlistAtiva)
    .filter((msg) =>
      msg.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      msg.pregador.toLowerCase().includes(busca.toLowerCase())
    );

  return (
    <main className="min-h-screen bg-[#FDFCFB] pb-24 text-[#3A2E24]">
      
      {/* 1. HERO IMPONENTE (Dark/Cinematic Mode) */}
      <section className="relative w-full pt-40 pb-32 px-6 bg-[#2C211A] overflow-hidden rounded-b-[3rem] shadow-xl transition-all duration-500">
        
        {/* Efeito de Fundo existente: Ícone de Play Gigante */}
        <div className="absolute right-[-10%] top-10 text-[#A98054] text-[40rem] select-none opacity-5 leading-none pointer-events-none">
          ▶
        </div>
        
        {/* Efeito de Gradiente Radial para dar volume */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#A98054]/20 via-transparent to-transparent"></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <span className="text-sm md:text-base font-bold text-[#A98054] uppercase tracking-[0.3em] mb-4 block drop-shadow-md">
            Acervo Digital
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#F4F0EA] tracking-tight leading-tight drop-shadow-lg mb-6">
            Nossas Mensagens
          </h1>
          <p className="text-[#C4B3A5] text-lg md:text-xl max-w-2xl mx-auto font-serif italic mb-8">
            Acompanhe nossas transmissões ao vivo. Estamos online todas as quintas e domingos para compartilhar a Palavra com você, onde quer que esteja.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="https://youtube.com/c/SEU_CANAL_AQUI" 
              target="_blank"
              className="flex items-center gap-3 bg-[#A98054] text-white font-bold tracking-wide px-8 py-4 rounded-full hover:bg-[#8B6741] hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
              Acessar Canal do YouTube
            </Link>
          </div>
        </div>
      </section>

      {/* 2. BARRA DE PESQUISA (Flutuando sobre a divisão) */}
      <section className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white p-4 rounded-full shadow-xl border border-[#E8E1D5] flex items-center gap-4 focus-within:ring-2 focus-within:ring-[#A98054] transition-all">
          <div className="pl-4 text-[#A98054]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input 
            type="text" 
            placeholder="Pesquise por título, série ou pregador..." 
            className="w-full bg-transparent border-none outline-none text-[#3A2E24] placeholder:text-[#8C7A6B] text-lg italic font-serif py-2 pr-6"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEÇÃO DE CONTEÚDO COM NOVO FUNDO VISUAL E FILTRO DE PLAYLIST */}
      {/* ============================================================ */}
      <section className="relative max-w-6xl mx-auto px-6 py-20 min-h-[500px]">
        
        {/* NOVO FUNDO VISUAL: Bíblia, Peixe e Cruz com efeito lindo */}
        <SimbolosFundo />

        {/* 3. FILTRO DE PLAYLISTS (Abas Dinâmicas) */}
        <div className="relative z-10 mb-12 pb-4 border-b border-[#E8E1D5]">
          <div className="flex items-center gap-3 mb-6">
             <div className="w-10 h-10 rounded-xl bg-[#EFE8DD] flex items-center justify-center text-[#A98054]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
             </div>
             <h2 className="text-sm font-bold text-[#A98054] uppercase tracking-[0.2em]">
                Explorar Séries e Playlists
             </h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {playlists.map(playlist => (
              <button
                key={playlist}
                onClick={() => setPlaylistAtiva(playlist)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  playlistAtiva === playlist
                    ? 'bg-[#A98054] text-white shadow-md'
                    : 'bg-white text-[#5C4A3D] hover:bg-[#EFE8DD] border border-[#E8E1D5]'
                }`}
              >
                {playlist}
              </button>
            ))}
          </div>
        </div>

        {/* 4. GRID DE VÍDEOS (Mantido o efeito Premium) */}
        <div className="flex items-center justify-between mb-10 relative z-10">
          <h3 className="text-3xl font-serif font-bold text-[#3A2E24]">
            {busca !== '' || playlistAtiva !== 'Todas' ? 'Mensagens Filtradas' : 'Últimas Mensagens'}
          </h3>
          <span className="text-[#8C7A6B] font-bold text-sm uppercase tracking-widest bg-white border border-[#E8E1D5] px-4 py-1.5 rounded-full shadow-sm">
            {mensagensFiltradas.length} vídeos encontrados
          </span>
        </div>

        {mensagensFiltradas.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
            {mensagensFiltradas.map((msg) => (
              <Link key={msg.id} href={msg.url} target="_blank" className="group flex flex-col transition-all duration-300">
                
                {/* Thumbnail com Efeito Hover */}
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-5 border-4 border-white shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 bg-black">
                  <Image 
                    src={msg.thumbnail} 
                    alt={msg.titulo} 
                    fill 
                    className="object-cover opacity-95 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  
                  {/* Ícone de Play Centralizado */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-75 group-hover:scale-100">
                    <div className="w-16 h-16 bg-[#A98054] rounded-full flex items-center justify-center text-white shadow-xl">
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                    </div>
                  </div>

                  {/* Badge da Playlist (Invisível no hover para limpar visual) */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider border border-white/10 group-hover:opacity-0 transition-opacity">
                    {msg.playlist}
                  </div>
                </div>

                {/* Informações do Vídeo */}
                <div className="px-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#A98054] mb-2 uppercase tracking-widest">
                    <span>{msg.data}</span>
                    <span className="text-[#8C7A6B]">{msg.pregador}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#3A2E24] leading-snug group-hover:text-[#A98054] transition-colors line-clamp-2">
                    {msg.titulo}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-28 relative z-10 bg-white/40 backdrop-blur-sm rounded-3xl border border-[#E8E1D5]">
            <div className="text-[#A98054] mb-6">
              <svg className="w-20 h-20 mx-auto opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <h3 className="text-2xl font-serif text-[#3A2E24] mb-3">Nenhuma mensagem corresponde aos filtros</h3>
            <p className="text-[#8C7A6B] italic max-w-md mx-auto">Tente limpar a pesquisa ou selecionar Todas as playlists para ver todo o acervo.</p>
            {(busca || playlistAtiva !== 'Todas') && (
                <button 
                    onClick={() => { setBusca(''); setPlaylistAtiva('Todas'); }}
                    className="mt-8 text-sm font-bold text-[#A98054] underline hover:text-[#8B6741]"
                >
                    Limpar Filtros e Busca
                </button>
            )}
          </div>
        )}
      </section>
    </main>
  );
}