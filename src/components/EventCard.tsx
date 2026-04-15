'use client'
import Image from 'next/image'
import Link from 'next/link'

// Definimos as propriedades que o card pode receber
interface EventCardProps {
  titulo: string;
  imagem: string; // Caminho da imagem (ex: /foto-evento.jpg)
  diaMes: string; // Ex: "15-18"
  mesAno: string; // Ex: "Nov." ou "Nov. 2024"
  local: string;  // Ex: "Sítio Ebenézer"
  descricao: string; // Ex: "Quatro dias de oração, louvor..."
  linkInscricao: string; // Para onde o botão vai
}

export default function EventCard({
  titulo,
  imagem,
  diaMes,
  mesAno,
  local,
  descricao,
  linkInscricao
}: EventCardProps) {
  return (
    <div className="relative bg-white rounded-3xl shadow-lg border border-gray-100 p-4 max-w-[380px] group transition-all hover:shadow-2xl hover:border-[#B5A478]/30">
      
      {/* --- TAG DE DATA (Canto Superior Esquerdo - Igual image_2.png) --- */}
      <div className="absolute top-0 left-5 z-20 bg-[#3D2B1F] text-white p-3 rounded-b-xl text-center shadow-md">
        <span className="block text-xs font-light opacity-80">Data:</span>
        <span className="block text-2xl font-bold leading-none">{diaMes}</span>
        <span className="block text-sm font-medium">{mesAno}</span>
      </div>

      {/* --- CONTAINER DA IMAGEM --- */}
      <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 z-10">
        <Image 
          src={imagem} 
          alt={`Imagem do evento ${titulo}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay sutil para garantir leitura se a tag sobrepuser */}
        <div className="absolute inset-0 bg-black/10 z-0" />
      </div>

      {/* --- CONTEÚDO DO TEXTO --- */}
      <div className="space-y-4 px-1">
        <h3 className="text-[#3D2B1F] text-2xl font-bold font-serif leading-tight">
          {titulo}
        </h3>

        <div className="space-y-2 text-[#6F5F53]">
          <p className="text-base">
            <span className="font-semibold text-[#3D2B1F]">Data:</span> {diaMes} {mesAno}
          </p>
          <p className="text-base">
            <span className="font-semibold text-[#3D2B1F]">Local:</span> {local}
          </p>
          <p className="text-sm leading-relaxed opacity-90 pt-1">
            {descricao}
          </p>
        </div>

        
      </div>
    </div>
  )
}