'use client'
import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function HeroConditional() {
  const [isMobile, setIsMobile] = useState(false)

  // Detecta se a tela é mobile ao carregar e ao redimensionar
  useEffect(() => {
    const checkMobile = () => {
      // 768px é o breakpoint padrão 'md' do Tailwind
      setIsMobile(window.innerWidth < 768) 
    }

    checkMobile() // Checa ao carregar
    window.addEventListener('resize', checkMobile) // Checa ao mudar tamanho
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-black">
      
      {/* --- CAMADA 1: FUNDO DINÂMICO (VÍDEO OU IMAGEM) --- */}
      <div className="absolute inset-0 z-0">
        
        {isMobile ? (
          // --- VISUAL PARA MOBILE: IMAGEM FIXA (Sem cortes ruins) ---
          <Image
            src="/foto-mobile.jpg" // Nome exato na pasta public
            alt="Igreja Batista Vila Marcela"
            fill
            priority // Carrega essa imagem primeiro que tudo
            className="object-cover object-center scale-100" // scale-100 para não distorcer
          />
        ) : (
          // --- VISUAL PARA DESKTOP: VÍDEO EM LOOP ---
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video-igreja.mp4" type="video/mp4" />
          </video>
        )}

        {/* Overlay Inteligente: Mais escuro embaixo para dar leitura ao botão no mobile */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-black/20 md:bg-black/40" />
      </div>

      {/* --- CAMADA 2: CONTEÚDO (Adaptado para não cobrir o vídeo/imagem) --- */}
      <div className="relative z-20 container mx-auto px-6 h-full flex items-end pb-12 md:items-center md:pb-0">
        
        <div className="w-full md:max-w-3xl text-center md:text-left text-white">
          
          {/* Botões: Essenciais para conversão */}
          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-2 mt-100">
            <Link 
              href="/eventos"
              className="w-full md:w-auto bg-[#B5A478] text-[#2D241C] py-3 md:py-4 px-8 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#c9b88d] transition-all"
            >
              Eventos <ArrowRight size={18} />
            </Link>
            
            <button 
              onClick={() => window.open('https://youtube.com/@igrejabatistavilamarcela/live', '_blank')}
              className="w-full md:w-auto border border-white/50 bg-white/10 backdrop-blur-sm py-3 md:py-4 px-8 rounded-full font-bold flex items-center justify-center gap-2"
            >
              <Play size={18} fill="currentColor" /> Assistir Agora
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}