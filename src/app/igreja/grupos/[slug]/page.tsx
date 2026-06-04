import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// 1. Interfaces para organizar os dados
interface Lideranca {
  nome: string;
  foto: string;
}

interface GrupoConexao {
  bairro: string;
  dia: string;
  hora: string;
  enderecoResumido: string;
  versiculo: string;
  referencia: string;
  descricao: string;
  fotoBanner: string;
  corDestaque: string; // Ex: "[#A98054]" (Dourado), "[#C2A88D]" (Terracota)
  lideres: Lideranca;
  viceLideres: Lideranca;
}

// 2. Banco de dados simulado (Refinado com cores sutis)
const gcData: Record<string, GrupoConexao> = {
  "gc-loteamento-recife": {
    bairro: "Loteamento Recife",
    dia: "Quarta-feira",
    hora: "19:30",
    enderecoResumido: "Bairro Loteamento Recife",
    versiculo: "A tua palavra é lâmpada que ilumina os meus passos e luz que clareia o meu caminho.",
    referencia: "Salmos 119:105",
    descricao: "O GC Loteamento Recife é uma extensão da nossa família espiritual. Mais do que uma reunião, é um lar onde compartilhamos nossas alegrias, choramos as dores uns dos outros e mergulhamos juntos na Palavra de Deus. Se você busca conexões reais e crescimento espiritual, seu lugar é aqui.",
    fotoBanner: "/FamiliaIbvm.jpg",
    corDestaque: "[#A98054]", // Dourado suave
    lideres: { nome: "João e Maria", foto: "/lideresacao.jpg" },
    viceLideres: { nome: "Carlos e Sara", foto: "/lideresacao.jpg" }
  },
  "gc-vila-marcela": {
    bairro: "Vila Marcela",
    dia: "Terça-feira",
    hora: "20:00",
    enderecoResumido: "Região da Vila Marcela",
    versiculo: "E perseveravam na doutrina dos apóstolos, e na comunhão, e no partir do pão, e nas orações.",
    referencia: "Atos 2:42",
    descricao: "No coração da Vila Marcela, somos uma comunidade viva que busca viver os princípios da igreja de Atos. Nossos encontros são um oásis no meio da semana: um tempo para parar, abrir as Escrituras, orar com fervor e experimentar o amor de Cristo na prática.",
    fotoBanner: "/FamiliaIbvm.jpg",
    corDestaque: "[#C2A88D]", // Terracota suave
    lideres: { nome: "Pedro e Ana", foto: "/lideresacao.jpg" },
    viceLideres: { nome: "Tiago e Rute", foto: "/lideresacao.jpg" }
  },
  // Adicione outros GCs mantendo a estrutura...
};

export default async function GCPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gc = gcData[slug];

  if (!gc) return notFound();

  // Define a cor de destaque dinâmica para a seção de CTA
  const dynamicColor = gc.corDestaque.replace("[", "").replace("]", "");

  return (
    // Fundo creme editorial em toda a página (Inspirado na sua imagem)
    <main className="min-h-screen bg-[#F4F0EA] pb-24 text-[#3A2E24]">
      
      {/* 1. HERO BANNER (Mantido dinâmico e elegante) */}
      <section className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        <Image src={gc.fotoBanner} alt={`Grupo de Conexão ${gc.bairro}`} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
        
        <div className="relative z-10 text-center px-6 mt-16">
          <span className="text-sm md:text-base font-bold text-white/90 uppercase tracking-[0.25em] mb-4 block drop-shadow-md">
            Grupo de Conexão
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tight leading-tight drop-shadow-lg">
            GC {gc.bairro}
          </h1>
          <div className={`h-1.5 w-24 mx-auto mt-8 bg-[#A98054] rounded-full`}></div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CONTEÚDO INTEGRADO AO FUNDO (Sem Boxes) */}
      {/* ========================================================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-16 lg:gap-24 relative">
        
        {/* Detalhe Dourado no Fundo (Curva/Forma - Inspirado na imagem) */}
        <div className="absolute -right-20 top-20 text-[#A98054] text-[30rem] font-black select-none opacity-10 leading-none pointer-events-none hidden lg:block">
          )
        </div>

        {/* Coluna da Esquerda (Base Bíblica e Visão) */}
        <div className="lg:col-span-7 flex flex-col justify-center relative z-10">
          
          {/* Título Grande Inspirado na Referência */}
          <h2 className="font-serif text-5xl md:text-6xl font-black mb-12 leading-[0.95] tracking-tight">
            A Palavra <br /> 
            <span className="text-[#A98054] italic font-normal">no Centro</span>
          </h2>

          {/* Versículo Citação (Direto no fundo) */}
          <p className="text-2xl md:text-3xl font-serif italicleading-relaxed mb-6">
            {gc.versiculo}
          </p>
          <footer className="text-sm font-bold text-[#A98054] uppercase tracking-widest mb-16">
            — {gc.referencia}
          </footer>

          <h3 className="text-2xl md:text-3xl font-serif mb-6 drop-shadow-sm">Nossa Visão</h3>
          <p className="text-lg md:text-xl text-[#5C4A3D] leading-relaxed max-w-2xl">
            {gc.descricao}
          </p>
        </div>

        {/* Coluna da Direita (Dados Práticos) */}
        <div className="lg:col-span-5 flex flex-col gap-12 justify-center pt-16 lg:pt-0">
          
          <div className="flex items-start gap-6 group">
            <div className={`w-14 h-14 rounded-full bg-[#EFE8DD] flex items-center justify-center text-[#A98054] group-hover:bg-[#A98054] group-hover:text-white transition-all duration-300 shadow-sm shrink-0`}>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <p className="text-sm text-[#A98054] font-bold uppercase tracking-wider mb-2">Dia e Horário</p>
              <p className="text-3xl font-serif font-bold leading-tight">{gc.dia}</p>
              <p className="text-[#5C4A3D] text-lg font-medium mt-1">Sempre às {gc.hora}</p>
            </div>
          </div>

          <div className="w-16 h-0.5 bg-[#D4C3A3] ml-20 hidden lg:block"></div>

          <div className="flex items-start gap-6 group">
            <div className={`w-14 h-14 rounded-full bg-[#EFE8DD] flex items-center justify-center text-[#A98054] group-hover:bg-[#A98054] group-hover:text-white transition-all duration-300 shadow-sm shrink-0`}>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <div>
              <p className="text-sm text-[#A98054] font-bold uppercase tracking-wider mb-2">Região do Encontro</p>
              <p className="text-3xl font-serif font-bold leading-tight">{gc.enderecoResumido}</p>
              <p className="text-[#8C7A6B] mt-3 italic max-w-sm">Para preservar a segurança, o endereço exato é compartilhado após o contato.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIDERANÇA (Integrado - Sem container retangular branco) */}
      <section className="border-t-2 border-[#E8E1D5]/60 py-24 relative overflow-hidden">
        {/* Detalhe Curvo de Destaque no Fundo (Inspirado nas letras grandes) */}
        <div className="absolute -left-32 -bottom-20 text-[#C4A173] text-[25rem] font-black select-none opacity-10 leading-none pointer-events-none hidden lg:block">
          U
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-5xl font-serif mb-4 tracking-tight">Nossa Liderança</h2>
            <p className="text-[#8C7A6B] text-lg font-serif italic">Amigos dispostos a caminhar com você e sua família.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 max-w-4xl mx-auto">
            {/* Casal Líder (Estilo Álbum Retrato - Sem container) */}
            <div className="flex flex-col items-center group">
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-6 rounded-3xl group-hover:-translate-y-2 transition-transform duration-500 hover:shadow-2xl">
                <Image src={gc.lideres.foto} alt={gc.lideres.nome} fill className="object-cover" />
              </div>
              <h3 className="text-3xl font-serif font-bold">{gc.lideres.nome}</h3>
              <p className="text-[#A98054] font-bold mt-2 uppercase tracking-[0.2em] text-sm">Líderes de GC</p>
            </div>

            {/* Casal Vice-Líder */}
            <div className="flex flex-col items-center group">
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-6 rounded-3xl group-hover:-translate-y-2 transition-transform duration-500 hover:shadow-2xl">
                <Image src={gc.viceLideres.foto} alt={gc.viceLideres.nome} fill className="object-cover" />
              </div>
              <h3 className="text-3xl font-serif font-bold">{gc.viceLideres.nome}</h3>
              <p className="text-[#A98054] font-bold mt-2 uppercase tracking-[0.2em] text-sm">Vice-Líderes</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MENSAGEM CONVIDATIVA (CTA) (Mais limpo e integrado) */}
      <section className="max-w-5xl mx-auto px-6 mt-20 relative">
        
        <div className="text-center py-16 px-10 relative overflow-hidden">
          {/* Elemento Geométrico Sutil no CTA (Sem box escuro) */}
          <div className="absolute inset-0 text-[35rem] font-black select-none leading-none -top-40 opacity-[0.03] pointer-events-none" style={{ color: dynamicColor }}>
            (
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 tracking-tight">Faça parte desta família!</h2>
            <p className="text-[#5C4A3D] text-lg md:text-xl mb-12 max-w-2xl mx-auto font-serif italic">
              Não fomos chamados para caminhar sozinhos. Estamos te esperando de braços abertos para o nosso próximo encontro.
            </p>
            <Link 
              href="https://wa.me/5587999999999" 
              target="_blank"
              className="inline-block bg-[#A98054] text-white font-bold tracking-wide text-lg px-12 py-5 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Falar com a Liderança
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}