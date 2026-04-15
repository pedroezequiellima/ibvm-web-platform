import LiveFloat from "@/components/LiveFloat";
import HeroConditional from "@/components/HeroConditional"; 
import EventsAndLive from "@/components/EventsAndLive";
import ChurchSchedule from "@/components/ChurchSchedule";
import ConnectSection from "@/components/ConnectSection";
import Image from "next/image";

export const metadata = {
  title: "IGREJA BATISTA DE VILA MARCELA",
  description: "IBVM - O AMOR DE CRISTO TRANSFORMANDO VIDAS",
}


export default function Home() {
  return (
    <main className="w-full  {max-width: 1440px;} mx-auto px-4 sm:px-8 md:px-12 lg:px-20 min-h-screen pt-28 md:pt-40 pb-10">
      <LiveFloat />
    <div className="flex flex-col gap-20">
      
      {/* SEÇÃO 1: HERO (Ocupa a largura total) */}
      {/* Usamos margens negativas para ignorar o padding do layout.tsx apenas aqui */}
      <section className="-mx-4 sm:-mx-8 md:-mx-12 lg:-mx-20 -mt-28 md:-mt-40">
        <HeroConditional/>
      </section>

      {/* SEÇÃO 2: BOAS VINDAS (Texto e Imagem) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-bold italic text-[#3D2B1F] mb-6 uppercase tracking-tight">
              Uma família para <span className="text-[#B5A478]">pertencer</span>
            </h2>
            <p className="text-[#8C7A6B] text-lg leading-relaxed mb-8">
              Seja bem-vindo à Igreja Batista Vila Marcela. Nossa missão é amar a Deus, servir ao próximo e transformar vidas através do Evangelho.
            </p>
            <button className="bg-[#3D2B1F] text-[#fffbf6] px-8 py-3 rounded-full font-bold hover:bg-[#B5A478] transition-all">
              CONHEÇA NOSSA HISTÓRIA
            </button>
          </div>
          {/* Você pode adicionar uma imagem aqui na order-1 para o desktop futuramente */}
          {/* --- LADO DIREITO: IMAGEM (md:order-2) --- */}
           <div className="order-1 md:order-2 relative aspect-16/10 w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
           {/* Lembre-se de importar o componente Image do next/image no topo do arquivo */}
           <Image 
            src="/Familiaibvm.jpg" 
            alt="Igreja Batista Vila Marcela"
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
    />
    {/* Overlay decorativo */}
     <div className="absolute inset-0 bg-[#3D2B1F]/5 pointer-events-none group-hover:bg-transparent transition-all z-20" />
     </div>
        </section>

        {/* SEÇÃO 3: EVENTOS E LIVE (YouTube + EventCards) */}
        {/* Usamos margens negativas aqui também caso o EventsAndLive tenha fundo colorido e você queira que ele encoste nas bordas da tela */}
        <section className="-mx-4 sm:-mx-8 md:-mx-12 lg:-mx-20 bg-[#FCF9F6] py-16 md:py-24">
          <div className="px-4 sm:px-8 md:px-12 lg:px-20">
             <EventsAndLive />
          </div>
        </section>

        {/* SEÇÃO 4: CAMPAINHAS */}
        <ConnectSection />

        {/* SEÇÃO 5: HORÁRIOS (Nova) */}
        <ChurchSchedule />

    </div>
    </main>

  )
}
