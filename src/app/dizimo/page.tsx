'use client'

import { useState } from 'react'
import { Heart, Copy, QrCode, Landmark, CheckCircle2, BookOpen } from 'lucide-react'

export default function Ofertas() {
  const [copiedPix, setCopiedPix] = useState(false)

  const pixKey = "CNPJ: 00.000.000/0000-00" // Substitua pela chave PIX real da igreja

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey)
    setCopiedPix(true)
    setTimeout(() => setCopiedPix(false), 3000)
  }

  return (
    <div className="relative min-h-screen bg-[#FCF9F6] py-20 px-4 md:px-8 overflow-hidden">
      
      {/* --- BACKGROUND DECORATIVO (NOVIDADE) --- */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Linhas de Grade Douradas Sutis */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#B5A47815_1px,transparent_1px),linear-gradient(to_bottom,#B5A47815_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Brilho Superior */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#B5A478]/10 via-[#FCF9F6]/0 to-transparent"></div>

        {/* Cruz Minimalista (Marca d'água Topo Direita) */}
        <div className="absolute top-20 right-[-10%] md:right-10 opacity-[0.08] text-[#B5A478] transform rotate-12 transition-transform duration-1000 hover:rotate-0">
          <svg width="240" height="320" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M5 8h14" />
          </svg>
        </div>

        {/* Bíblia Aberta (Marca d'água Base Esquerda) */}
        <div className="absolute bottom-20 left-[-10%] md:left-10 opacity-[0.06] text-[#B5A478] transform -rotate-12 transition-transform duration-1000 hover:rotate-0">
          <BookOpen size={280} strokeWidth={0.5} />
        </div>
      </div>
      {/* --- FIM DO BACKGROUND --- */}

      {/* CONTEÚDO PRINCIPAL (Envolvido em z-10 para ficar acima do fundo) */}
      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* --- CABEÇALHO E VERSÍCULO --- */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-[#3D2B1F]/5 p-4 rounded-full backdrop-blur-sm">
              <Heart className="text-[#B5A478]" size={40} strokeWidth={1.5} />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif text-[#3D2B1F] italic tracking-tight mb-6 relative inline-block">
            Adoração através da <span className="font-sans not-italic font-light text-[#8C7A6B]">Generosidade</span>
          </h1>

          {/* Citação Bíblica em Destaque */}
          <blockquote className="relative max-w-2xl mx-auto p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-[#F0E6D2] shadow-sm">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FCF9F6] px-4 text-[#B5A478] font-serif text-4xl">
              "
            </div>
            <p className="text-lg md:text-xl text-[#533928] leading-relaxed font-serif italic mb-4">
              Cada um contribua segundo propôs no seu coração; não com tristeza, ou por necessidade; porque Deus ama ao que dá com alegria.
            </p>
            <footer className="text-sm font-sans font-bold tracking-widest uppercase text-[#B5A478]">
              2 Coríntios 9:7
            </footer>
          </blockquote>
        </div>

        {/* --- OPÇÕES DE CONTRIBUIÇÃO --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          
          {/* Card PIX */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-[2rem] border border-[#F0E6D2] shadow-xl shadow-[#3D2B1F]/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#B5A478]/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
            
            <div className="flex items-center gap-3 mb-6">
              <QrCode className="text-[#B5A478]" size={28} />
              <h3 className="text-2xl font-bold text-[#3D2B1F]">PIX</h3>
            </div>
            
            <p className="text-[#8C7A6B] mb-6 line-clamp-2">
              A forma mais rápida e prática de contribuir. Escaneie o QR Code ou copie a chave abaixo.
            </p>

            <div className="bg-[#FCF9F6] p-4 rounded-xl border border-[#F0E6D2] flex items-center justify-between gap-4 mb-4">
              <span className="font-mono text-sm md:text-base font-medium text-[#533928] truncate">
                {pixKey}
              </span>
              <button 
                onClick={handleCopyPix}
                className="p-2 hover:bg-[#EAE2D6] rounded-lg transition-colors flex-shrink-0"
                title="Copiar Chave PIX"
              >
                {copiedPix ? (
                  <CheckCircle2 className="text-green-600" size={20} />
                ) : (
                  <Copy className="text-[#B5A478]" size={20} />
                )}
              </button>
            </div>
            
            {copiedPix && (
              <p className="text-xs text-green-600 font-medium text-center animate-pulse">
                Chave PIX copiada com sucesso!
              </p>
            )}
          </div>

          {/* Card Transferência Bancária */}
          <div className="bg-[#3D2B1F]/95 backdrop-blur-sm p-8 rounded-[2rem] shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-0" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Landmark className="text-[#B5A478]" size={28} />
                <h3 className="text-2xl font-bold">Conta Bancária</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Para transferências via TED, DOC ou depósitos direto na conta da igreja.
              </p>

              <div className="space-y-3 text-sm font-mono bg-white/5 p-5 rounded-xl border border-white/10">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Banco</span>
                  <span className="font-semibold">000 - Nome do Banco</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Agência</span>
                  <span className="font-semibold">0000</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Conta</span>
                  <span className="font-semibold">00000-0</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-gray-400">Favorecido</span>
                  <span className="font-semibold truncate max-w-[120px]">Igreja Batista Vila Marcela</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --- MENSAGEM FINAL --- */}
        <div className="mt-16 text-center text-[#8C7A6B] max-w-xl mx-auto">
          <p>
            Sua fidelidade e generosidade permitem que a obra do Senhor continue avançando, abençoando vidas e transformando nossa comunidade.
          </p>
          <p className="mt-2 font-bold text-[#3D2B1F]">
            Muito obrigado por fazer parte disso!
          </p>
        </div>

      </div>
    </div>
  )
}