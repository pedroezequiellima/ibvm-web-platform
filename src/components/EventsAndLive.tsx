'use client'
import EventCard from './EventCard'
import { Play, Calendar, ExternalLink } from 'lucide-react'


export default function EventsAndLive() {
  // Dados dos eventos
  const proximosEventos = [
    {
      titulo: "Na Varanda com Jesus",
      imagem: "/adolescentes/TeensChacara.jpg",
      diaMes: "21",
      mesAno: "Mar",
      local: "Entrar em contato para local",
      descricao: "Encontro dos Adolescentes para um dia de comunhão, louvor e aprendizado na presença de Deus!",
      linkInscricao: "/eventos"
    },
    {
      titulo: "kids na Chácara",
      imagem: "/infantil/MuitaCria.jpg",
      diaMes: "25",
      mesAno: "Dez.",
      local: "Templo Central",
      descricao: "Fortalecendo os lares sob a luz da palavra de Deus com nosso pastor.",
      linkInscricao: "/eventos"
    },
    {
      titulo: "teste3",
      imagem: "/infantil/luan.jpg",
      diaMes: "25",
      mesAno: "Dez.",
      local: "Igreja Batista Vila Marcela",
      descricao: "Fortalecendo os lares sob a luz da palavra de Deus com nosso pastor.",
      linkInscricao: "/eventos"
    }
  ]

  return (
    <section className="py-20 bg-[#FCF9F6]">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* --- LADO ESQUERDO: EVENTOS (Ocupa 5 colunas no Desktop) --- */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-[#B5A478] p-2 rounded-lg text-white">
                  <Calendar size={24} />
                </div>
                <h2 className="text-3xl font-serif italic text-[#3D2B1F]">Agenda</h2>
              </div>
              <a href="/eventos" className="text-[#8C7A6B] text-sm hover:text-[#3D2B1F] underline font-medium">
                Ver todos
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
              {proximosEventos.map((evento, index) => (
                <div key={index} className="scale-95 hover:scale-100 transition-transform duration-300">
                   <EventCard {...evento} />
                </div>
              ))}
            </div>
          </div>

          {/* --- LADO DIREITO: VÍDEO DO YOUTUBE (Ocupa 7 colunas no Desktop) --- */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-[#3D2B1F] p-2 rounded-lg text-white">
                  <Play size={24} fill="currentColor" />
                </div>
                <h2 className="text-3xl font-serif italic text-[#3D2B1F]">Última Mensagem</h2>
              </div>

              {/* Player de Vídeo Responsivo (16:9) */}
              <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white bg-black group">
                 <iframe 
                    className="absolute inset-0 w-full h-full z-10"
                    src="https://www.youtube.com/embed/zfl8MzDFcWE?si=Zj4swsMB_VZf3qcm" 
                    title="Último Culto - IBVM"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
  
              {/* Overlay Sutil */}
              <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:bg-transparent transition-all z-20" />
              </div>

              {/* Card de Informação da Live/Mensagens */}
              <div className="mt-8 p-8 bg-white rounded-3xl border border-[#F0E6D2] shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   {/* CORREÇÃO: color="#3D2B1F" (Sintaxe correta para props de cor) */}
                   <Play size={80} color="#3D2B1F" />
                </div>
                
                <h4 className="text-[#3D2B1F] font-bold text-2xl mb-3">Acompanhe ao Vivo</h4>
                <p className="text-[#8C7A6B] text-base leading-relaxed max-w-md">
                  Seja edificado através das nossas mensagens. Todo domingo às 18h transmitimos nosso culto de celebração.
                </p>
                
                <div className="mt-6 flex flex-wrap gap-4">
                  <button 
                    onClick={() => window.open('https://www.youtube.com/channel/UCnhuoIbHpcjRrMV8JgHuNVw', '_blank')}
                    className="bg-[#3D2B1F] text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-[#B5A478] transition-all"
                  >
                    Abrir no YouTube <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}