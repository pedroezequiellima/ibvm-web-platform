'use client'
import { Wind, Heart, MessageCircle, Phone, Image as ImageIcon } from 'lucide-react'
import Image from 'next/image'

// Link do WhatsApp da Igreja (Substitua pelo número real)
const WHATSAPP_LINK = "https://wa.me/5587900000000?text=Olá,%20gostaria%20de%20doar%20alimentos%20para%20a%20Ação%20Social%20da%20IBVM."

export default function OfertasPage() {
  return (
    <main className="w-full max-w-1440px mx-auto px-4 sm:px-8 md:px-12 lg:px-20 min-h-screen pt-32 pb-20">

      {/* CABEÇALHO DA PÁGINA */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h1 className="text-5xl font-serif italic text-[#3D2B1F] mb-6 uppercase tracking-tight">
          Nossas <span className="text-[#B5A478]">Campanhas</span>
        </h1>
        <p className="text-[#8C7A6B] text-lg leading-relaxed">
          Juntos podemos mais. Suas ofertas e doações são fundamentais para o avanço do Reino e o cuidado com o próximo na Vila Marcela.
        </p>
      </div>

      <div className="space-y-24">

        {/* --- CAMPANHA 1: CLIMATIZAÇÃO --- */}
        <section className="bg-[#FCF9F6] p-10 rounded-[3rem] border border-[#F0E6D2] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Wind size={120} color="#3D2B1F" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
            {/* Texto */}
            <div className="md:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#FCF9F6] rounded-2xl text-[#B5A478]">
                </div>
                <h2 className="text-3xl font-bold text-[#3D2B1F] uppercase tracking-tight">Campanha da Climatização</h2>
              </div>
              <p className="text-[#8C7A6B] leading-relaxed">
                Nossos cultos de louvor e adoração merecem o conforto de um ambiente climatizado. Estamos em campanha para a aquisição e instalação de novos ares-condicionados para o templo. Sua oferta especial trará mais conforto e dignidade para nossa congregação.
              </p>
              
              {/* ESPAÇO PARA DADOS BANCÁRIOS / PIX */}
              <div className="bg-[#FCF9F6] p-6 rounded-2xl border border-[#F0E6D2] space-y-3">
                <p className="text-sm font-sans text-[#3D2B1F] uppercase">Conta para Oferta (PIX):</p>
                <div className="flex items-center gap-3 text-[#3D2B1F] font-mono text-xl font-bold bg-white p-4 rounded-xl shadow-inner break-all">
                  26.242.258/0001-98
                </div>
                <p className="text-xs font-roboto text-[#8C7A6B]">Identifique sua transferência como: &quot;Campanha Climatização&quot;.</p>
              </div>
            </div>

            {/* ESPAÇO PARA O BANNER DA IMAGEM */}
            <div className="md:col-span-5 relative aspect-16/10 bg-gray-100 rounded-[2rem] overflow-hidden group cursor-pointer border-4 border-white shadow-lg">
              {/* REMOVA ESTE PLACEHOLDER E USE O Image DO NEXT.JS QUANDO TIVER O BANNER */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[#8C7A6B]/50 gap-2">
                <ImageIcon size={48} />
                <span className="text-sm">Clique para ver o Banner</span>
              </div>
               <Image src="/clima.png" alt="Banner Climatização" fill className="object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all" />
            </div>
          </div>
        </section>


        {/* --- CAMPANHA 2: DOAÇÃO DE ALIMENTOS --- */}
        <section className="bg-[#FCF9F6] p-10 rounded-[3rem] border border-[#F0E6D2] relative -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-20">
          <div className="px-4 sm:px-8 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
           
           {/* ESPAÇO PARA FOTO ESTILOSA (Esquerda) */}
        <div className="md:col-span-5 relative aspect-square bg-white rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white group">
  
           {/* IMAGEM CORRIGIDA: 
            - h-full e w-full garantem o preenchimento.
            - object-cover evita que a foto fique "esticada".
            - group-hover dá o efeito de movimento ao passar o mouse.
            */}
        <Image src="/lideresAção.jpg" alt="Ação Social IBVM" fill className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"/>

        {/* Overlay de gradiente para dar profundidade (Z-index 10) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 pointer-events-none" />
        </div>

            {/* Texto e Ação (Direita) */}
            <div className="md:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white rounded-2xl text-[#3D2B1F] shadow-inner">
                   <Heart size={28} />
                </div>
                <h2 className="text-3xl font-bold text-[#3D2B1F] uppercase tracking-tight">Doação de Alimentos (Ação Social)</h2>
              </div>
              <p className="text-[#8C7A6B] leading-relaxed">
                A IBVM tem o compromisso de cuidar da comunidade. Arrecadamos alimentos não perecíveis para a formação de cestas básicas que são distribuídas às famílias em situação de vulnerabilidade na Vila Marcela. Sua doação é um ato de amor em ação.
              </p>
              
              <div className="space-y-4">
                <p className="text-sm font-bold text-[#3D2B1F]">Onde entregar?</p>
                <p className="text-[#8C7A6B] text-sm">No templo, durante os cultos ou diretamente no balcão da Ação Social.</p>
              </div>

              {/* Botão de Contato Rápido para Doação */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-sm flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-all shadow-lg hover:-translate-y-1">
                {/* O seu SVG do WhatsApp */}
                <svg className="w-6 h-6 fill-white" viewBox="0 0 360 362">
                  <path d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z" />
                </svg>AGENDAR COLETA
                </button>
                <div className="flex items-center gap-3 text-[#064E3B] font-mono text-lg p-4 bg-[#ECFDF5] border border-[#A7F3D0] rounded-full shadow-inner">
                <Phone size={18} className="text-[#059669]" /> (87) 9 9994-0313
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}