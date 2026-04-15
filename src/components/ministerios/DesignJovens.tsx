'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Flame, MapPin, Clock, Instagram, ArrowRight } from 'lucide-react'

export default function DesignJovens() {
  return (
    <div className="w-full bg-[#0A0A0A] text-white min-h-screen">
      
      {/* --- HERO SECTION: Impacto Visual --- */}
      <section className="relative w-full h-[98vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Imagem de Fundo com bg de fallback caso a imagem falhe */}
        <div className="absolute inset-0 z-0 bg-neutral-700">
          <Image 
            src="/adolescentes/TeensChacara.jpg" 
            alt="Rede Jovem IBVM"
            fill
            className="object-cover opacity-10000 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#0A0A0A]/60 to-[#0A0A0A] z-10" />
        </div>

        {/* TEXTO PRINCIPAL - Ajustado: removido mt-20, adicionado mb-12 para dar espaço aos cards */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6 text-[#F97316]">
            <Flame size={18} className="animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-white">Geração Eleita</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#8C7A6B]">
            Vila Jovem
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-[#B5A478]">
            Mais que um grupo, um movimento.
          </p>
        </div>
      </section>

      {/* --- INFOS E PROPÓSITO --- */}
      {/* Ajustado: Margem negativa reduzida para -mt-16 (desktop) para não bater no texto */}
      <section className="relative z-30 px-6 lg:px-20 -mt-16 md:-mt-24 max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          
          {/* Card 1: Visão */}
          <div className="bg-[#141414]/80 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-white">Nossa Visão</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Despertar uma geração apaixonada por Jesus, que vive a palavra na prática e transforma a realidade de Petrolina através do amor e da verdade.
            </p>
          </div>

          {/* Card 2: Encontros (Destaque Central) */}
          <div className="bg-gradient-to-br from-[#3D2B1F] to-[#1a120c] p-8 rounded-[2rem] border border-[#B5A478]/30 shadow-2xl transform md:-translate-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
              <Clock size={80} color="#B5A478" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-[#B5A478]">Nossos Encontros</h3>
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-3 text-white">
                <Clock size={20} className="text-[#F97316]" />
                <span className="font-mono text-lg">Sábados, 19:30h</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={20} className="text-[#F97316]" />
                <span className="text-sm">Templo IBVM</span>
              </div>
            </div>
          </div>

          {/* Card 3: Conexão */}
          <div className="bg-[#141414]/80 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors flex flex-col h-full justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Fique Conectado</h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-6">
                Acompanhe nossos devocionais, fotos dos cultos e eventos no Instagram.
              </p>
            </div>
            <Link 
              href="https://instagram.com/vilajovem.ibvm" 
              target="_blank"
              className="inline-flex items-center justify-between bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-[#F97316] hover:text-white transition-all mt-auto"
            >
              <span className="flex items-center gap-2"><Instagram size={18} /> @vilajovem.ibvm</span>
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* --- GALERIA GRID ASSIMÉTRICO --- */}
      <section className="px-6 lg:px-20 max-w-7xl mx-auto pb-32">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl font-bold uppercase tracking-tight">Vida em <span className="text-[#B5A478]">Comunhão</span></h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
          {/* Adicionei bg-neutral-900 para que fique um quadrado escuro caso a foto não exista */}
          <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group bg-neutral-900">
            <Image src="/adolescentes/TeensChacara.jpg" alt="Culto Jovem" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden group bg-neutral-900">
            <Image src="/adolescentes/TeensChacara.jpg" alt="Comunhão" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="relative rounded-3xl overflow-hidden group bg-neutral-900">
            <Image src="/adolescentes/TeensChacara.jpg" alt="Louvor" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          
          <div className="col-span-2 relative rounded-3xl overflow-hidden group bg-neutral-900">
            <Image src="/adolescentes/TeensChacara.jpg" alt="Retiro" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

    </div>
  )
}