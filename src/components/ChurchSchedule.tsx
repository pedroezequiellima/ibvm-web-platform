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
    <section className="py-20 bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {horarios.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-between p-6 rounded-2xl border transition-all duration-300
                ${item.destaque 
                  ? 'bg-[#3D2B1F] border-[#3D2B1F] text-white shadow-xl scale-[1.02] z-10' 
                  : 'bg-[#FCF9F6] border-[#F0E6D2] hover:border-[#B5A478]'}
              `}
            >
              <div>
                <span className={`text-xs font-black uppercase tracking-widest mb-1 block ${item.destaque ? 'text-[#B5A478]' : 'text-[#B5A478]'}`}>
                  {item.dia}
                </span>
                <h3 className="font-bold text-lg leading-tight">{item.evento}</h3>
              </div>
              
              <div className="flex items-center gap-2 font-mono font-bold text-xl ml-4 whitespace-nowrap">
                <Clock size={18} className={item.destaque ? 'text-[#B5A478]' : 'text-[#3D2B1F]'} />
                {item.hora}
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
    </section>
  )
}