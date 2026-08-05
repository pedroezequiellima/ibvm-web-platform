import { notFound } from "next/navigation";
import Link from "next/link";
import { Target, Eye, Heart, Compass, Clock, BookOpen, ShieldCheck } from "lucide-react";

// Abas de navegação interna
const menuAbas = [
  { label: 'Sobre Nós', slug: 'sobre-nos' },
  { label: 'Nossa História', slug: 'nossa-historia' },
  { label: 'Nossa Missão', slug: 'nossa-missao' },
  { label: 'Nossa Visão', slug: 'nossa-visao' },
  { label: 'Nossos Valores', slug: 'nossos-valores' },
];

export default async function SobrePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Lista de todos os slugs que a Navbar consegue gerar
  const sobreValidos = [
    "sobre-nos", "sobre", 
    "nossa-historia", "historia", 
    "nossa-missao", "missao", 
    "nossa-visao", "visao", 
    "nossos-valores", "valores"
  ];

  if (!sobreValidos.includes(slug)) {
    notFound();
  }

  // Renderiza o conteúdo exato baseado no slug da URL
  const renderConteudo = () => {
    switch (slug) {
      case "sobre-nos":
      case "sobre":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-[#3D2B1F] text-[#B5A478] p-3 rounded-2xl">
                <Compass size={28} />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B5A478]">
                  Marco Zero — Entender para Pertencer
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#3D2B1F]">
                  Conhecendo Quem Somos
                </h2>
              </div>
            </div>
            
            <p className="text-[#533928] text-lg leading-relaxed">
              A Igreja Batista Vila Marcela é uma comunidade de fé comprometida com a proclamação fiel do Evangelho, o discipulado transformador e a edificação de famílias para a glória de Deus.
            </p>
            <p className="text-[#533928] text-lg leading-relaxed">
              Acreditamos que a igreja local não é apenas um lugar de ajuntamiento, mas uma família onde vidas são acolhidas, cuidadas e capacitadas para impactar o nosso bairro e o mundo.
            </p>

            <div className="p-6 rounded-2xl bg-[#FCF9F6] border border-[#F0E6D2] border-l-4 border-l-[#B5A478] italic font-serif text-[#3D2B1F] text-lg">
              "Uma família para pertencer, crescer e servir."
            </div>
          </div>
        );

      case "nossa-historia":
      case "historia":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-[#3D2B1F] text-[#B5A478] p-3 rounded-2xl">
                <Clock size={28} />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B5A478]">
                  Um legado de graça e fidelidade
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#3D2B1F]">
                  Nossa História
                </h2>
              </div>
            </div>

            <p className="text-[#533928] text-lg leading-relaxed">
              A história da Igreja Batista Vila Marcela é marcada pelo cuidado gracioso de Deus em cada etapa de sua caminhada. Desde a sua fundação, o Senhor levantou servos e servas dedicados a semear o Evangelho no bairro e na região.
            </p>
            <p className="text-[#533928] text-lg leading-relaxed">
              Ao longo dos anos, mantivemos viva a paixão pelas Escrituras e pelo serviço à comunidade, consolidando uma igreja com raízes reformadas, fervor espiritual e profundo amor ao próximo.
            </p>

            <div className="p-6 rounded-2xl bg-[#FCF9F6] border border-[#F0E6D2] border-l-4 border-l-[#B5A478] italic font-serif text-[#3D2B1F] text-lg">
              "Ebenezer: Até aqui nos ajudou o Senhor."
            </div>
          </div>
        );

      case "nossa-missao":
      case "missao":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-[#3D2B1F] text-[#B5A478] p-3 rounded-2xl">
                <Target size={28} />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B5A478]">
                  O que fazemos
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#3D2B1F]">
                  Nossa Missão
                </h2>
              </div>
            </div>

            <p className="text-[#3D2B1F] text-xl font-serif italic leading-relaxed bg-[#FCF9F6] p-6 rounded-2xl border border-[#F0E6D2]">
              "Proclamar o evangelho de Jesus Cristo, fazendo discípulos, cuidando de pessoas e edificando famílias, para a glória de Deus."[cite: 2]
            </p>

            <div className="pt-4 border-t border-[#F0E6D2] space-y-3 text-xs font-mono font-bold text-[#8C7A6B]">
              <div className="flex items-center gap-2">
                <BookOpen size={16} className="text-[#B5A478]" />
                <span>Mateus 28:19-20 — Ide e fazei discípulos[cite: 2]</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={16} className="text-[#B5A478]" />
                <span>Atos 2:42 — Vida em comunhão, ensino e oração[cite: 2]</span>
              </div>
            </div>
          </div>
        );

      case "nossa-visao":
      case "visao":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-[#3D2B1F] text-[#B5A478] p-3 rounded-2xl">
                <Eye size={28} />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B5A478]">
                  Onde queremos chegar
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#3D2B1F]">
                  Nossa Visão
                </h2>
              </div>
            </div>

            <p className="text-[#3D2B1F] text-xl font-serif italic leading-relaxed bg-[#FCF9F6] p-6 rounded-2xl border border-[#F0E6D2]">
              "Ser uma igreja relevante, saudável e cheia do Espírito, que transforma vidas, impacta o bairro e alcança nações através do amor e da Palavra."[cite: 2]
            </p>

            <div className="p-6 rounded-2xl bg-[#3D2B1F] text-white flex items-center gap-3">
              <ShieldCheck className="text-[#B5A478]" size={24} />
              <p className="text-sm text-gray-300">
                Transformação local com alcance global e fidelidade à Palavra.
              </p>
            </div>
          </div>
        );

      case "nossos-valores":
      case "valores":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-[#3D2B1F] text-[#B5A478] p-3 rounded-2xl">
                <Heart size={28} />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B5A478]">
                  Nossa Cultura
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#3D2B1F]">
                  Nossos Valores
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { t: "Centralidade na Palavra", d: "A Bíblia como nossa única regra de fé e prática." },
                { t: "Vida de Oração", d: "Dependência diária e constante do Senhor." },
                { t: "Comunhão é Cuidado", d: "Relacionamentos intencionais e acolhimento mútuo." },
                { t: "Famílias Restauradas", d: "Fortalecimento e edificação dos lares para Deus." },
                { t: "Evangelismo e Missões", d: "Paixão por proclamar o evangelho aos perdidos." },
                { t: "Serviço com Excelência", d: "Dedicação máxima em tudo para honrar a Cristo." }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FCF9F6] border border-[#F0E6D2]">
                  <h3 className="font-bold text-[#3D2B1F] text-base mb-1">{item.t}</h3>
                  <p className="text-xs text-[#8C7A6B]">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen bg-[#FCF9F6] pt-36 pb-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* CABEÇALHO */}
        <div className="text-center mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B5A478]">
            Institucional IBVM
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#3D2B1F] italic mt-2">
            Sobre Nós
          </h1>
        </div>

        {/* SUB-MENU (ABAS) */}
        <nav className="flex items-center justify-center gap-2 overflow-x-auto py-2 mb-10 border-b border-[#F0E6D2] no-scrollbar">
          {menuAbas.map((aba) => {
            const isActive = slug === aba.slug || (slug === 'sobre' && aba.slug === 'sobre-nos');

            return (
              <Link
                key={aba.slug}
                href={`/igreja/sobre/${aba.slug}`}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-[#3D2B1F] text-[#B5A478] shadow-md'
                    : 'text-[#8C7A6B] hover:text-[#3D2B1F] hover:bg-[#3D2B1F]/5'
                }`}
              >
                {aba.label}
              </Link>
            );
          })}
        </nav>

        {/* CONTEÚDO PRINCIPAL DA PÁGINA */}
        <div className="bg-white/90 backdrop-blur-sm border border-[#F0E6D2] p-8 md:p-12 rounded-[2.5rem] shadow-sm relative overflow-hidden">
          {renderConteudo()}
        </div>

      </div>
    </main>
  );
}