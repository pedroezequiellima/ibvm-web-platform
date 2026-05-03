'use client';

import { useState } from 'react';
import Image from 'next/image';
import { galeriaDados } from '@/data/DadosGaleria';

export default function GaleriaPage() {
  // Estado para controlar qual filtro está ativo no momento
  const [filtroAtivo, setFiltroAtivo] = useState('Todos');

  // Lista das categorias para gerar os botões automaticamente
  const categorias = ['Todos', 'Cultos', 'Missões', 'Jovens', 'Eventos', 'Historia'] as const; // Usamos "as const" para garantir que o tipo seja literal e não string genérica

  // Lógica de Filtragem: 
  // Se for "Todos", mostra tudo. Se não, filtra pela categoria selecionada.
  // Depois, ordena da mais recente para a mais antiga.
  const midiasFiltradas = galeriaDados
    .filter((item) => filtroAtivo === 'Todos' || item.categoria === filtroAtivo)
    .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());

  return (
    <main className="min-h-screen bg-[#FCF9F6] pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* --- CABEÇALHO (Fiel ao seu Design) --- */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-5xl md:text-7xl font-serif text-[#3D2B1F] mb-6 tracking-tight leading-tight">
            Nossa História <br /> em Imagens
          </h1>
          <p className="text-lg text-[#533928] leading-relaxed">
            Uma jornada visual através dos momentos sagrados, celebrações vibrantes e o serviço dedicado da Igreja Batista de Vila Marcela. Cada fragmento conta uma história de fé e comunidade.
          </p>
        </div>

        {/* --- SISTEMA DE FILTROS (Botões Pílula) --- */}
        <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-[#EBE5DB]">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setFiltroAtivo(categoria)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filtroAtivo === categoria
                  ? 'bg-[#5c4938] text-white shadow-md' // Estilo Ativo (Marrom Escuro)
                  : 'bg-[#EBE5DB] text-[#533928] hover:bg-[#DED7CB]' // Estilo Inativo (Cinza Claro)
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* --- GRID DE RESULTADOS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {midiasFiltradas.length > 0 ? (
            midiasFiltradas.map((item) => (
              <div key={item.id} className="group relative bg-white `rounded-[2rem]` overflow-hidden shadow-sm border border-[#F0E6D2] hover:shadow-lg transition-shadow duration-300">
                
                {/* Área da Mídia */}
                <div className="relative h-64 w-full bg-[#FCF9F6]">
                  {item.tipo === 'imagem' ? (
                    <Image 
                      src={item.url} 
                      alt={item.titulo}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <iframe 
                      className="w-full h-full"
                      src={item.url}
                      title={item.titulo}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                  
                  {/* Etiqueta da categoria flutuante na foto */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#5c4938] uppercase tracking-wider">
                    {item.categoria}
                  </div>
                </div>

                {/* Área do Texto */}
                <div className="p-6">
                  <div className="text-xs font-bold text-[#B5A478] mb-2 uppercase tracking-wider">
                    {new Date(item.data).toLocaleDateString('pt-BR')}
                  </div>
                  <h3 className="text-xl font-bold text-[#3D2B1F] mb-2">{item.titulo}</h3>
                  <p className="text-sm text-[#8C7A6B] line-clamp-2">{item.descricao}</p>
                </div>
              </div>
            ))
          ) : (
            /* Mensagem caso uma categoria não tenha fotos ainda */
            <div className="col-span-full py-12 text-center text-[#8C7A6B]">
              <p className="text-lg">Ainda não temos registros para esta categoria.</p>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}