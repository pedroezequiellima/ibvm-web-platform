'use client'
import { Clock, CalendarDays, Navigation } from 'lucide-react'

export default function ChurchSchedule() {
  const horarios = [
    { dia: "Domingo", evento: "Escola Bíblica Dominical", hora: "09:00h", destaque: false },
    { dia: "Domingo", evento: "Culto de Louvor e Adoração", hora: "18:30h", destaque: true },
    { dia: "Terça-feira", evento: "Grupo de Conexão", hora: "20:00h", destaque: false },
    { dia: "Quarta-feira", evento: "Culto da Alvorada", hora: "05:30h", destaque: false },
    { dia: "Quinta-feira", evento: "Quinta da Palavra", hora: "20:00h", destaque: true },
    { dia: "Sexta-feira", evento: "Culto de Oração", hora: "20:00h", destaque: false },
  ]

  return (
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* --- AGENDA DE CULTOS (TOPO) --- */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CalendarDays className="text-[#B5A478]" size={32} />
            <h2 className="text-4xl font-serif italic text-[#3D2B1F]">Nossa Agenda</h2>
          </div>
          <div className="w-20 h-1 bg-[#B5A478] mx-auto mb-4"></div>
          <p className="text-[#8C7A6B] max-w-md mx-auto">
            Escolha um momento para estar conosco. Você e sua família são nossos convidados especiais.
          </p>
        </div>

        {/* --- DESIGN IMPONENTE INSPIRADO NA IMAGEM DE REFERÊNCIA --- */}
        <div className="flex flex-col space-y-0 mb-20 max-w-3xl mx-auto">
          {horarios.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row md:items-start justify-between py-8 border-b border-[#F0E6D2] transition-all duration-300
                ${item.destaque ? 'bg-[#3D2B1F]/5 px-6 rounded-2xl border-b-transparent my-2' : 'hover:bg-[#FCF9F6]/80 px-2'}
              `}
            >
              {/* Dia da Semana - Grande, Peso Máximo e Caixa Alta igual ao encarte */}
              <div className="md:w-1/3 mb-2 md:mb-0">
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#3D2B1F]">
                  {item.dia.replace("-feira", "")}
                </h3>
              </div>
              
              {/* Informações do Culto - Corrido e elegante como o texto descritivo da imagem */}
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4 md:pl-6">
                <div className="flex items-baseline gap-2 font-serif italic text-lg md:text-xl text-[#533928]">
                  <span className="font-sans not-italic font-medium text-base md:text-lg text-[#8C7A6B] min-w-[70px]">
                    {item.hora}
                  </span>
                  <span className="text-[#8C7A6B]">—</span>
                  <span className="font-sans not-italic font-semibold text-[#3D2B1F]">
                    {item.evento}
                  </span>
                </div>

                {/* Ícone ou Badge Indicador Minimalista */}
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#B5A478]">
                  <Clock size={16} className="text-[#B5A478]" />
                  {item.destaque && (
                    <span className="bg-[#3D2B1F] text-white text-[10px] px-2 py-0.5 rounded font-sans tracking-normal font-medium">
                      Destaque
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- MAPA E LOCALIZAÇÃO (EMBAIXO) --- */}
        {/* Container do Mapa Responsivo */}
    <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white ring-1 ring-[#F0E6D2] group">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.4354228464645!2d-40.47883538521532!3d-9.358034793294156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x77377e6262be1381%3A0x8493766325076557!2sIGREJA%20BATISTA%20VILA!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr" 
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
  
  {/* Overlay para facilitar o scroll na página em desktop */}
     <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:bg-transparent transition-all" />
     </div>

{/* Botão de Ação Atualizado com Link Direto */}
      <div className="flex justify-center mt-10">
        <button 
          onClick={() => window.open('https://maps.app.goo.gl/3UuD5Z3m7Uu9X6Q88', '_blank')}
          className="flex items-center gap-3 bg-[#3D2B1F] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#B5A478] transition-all shadow-lg hover:-translate-y-1"
           >
          <Navigation size={20} />
          ABRIR NO GOOGLE MAPS
        </button>
      </div>
    </div>
  )
}