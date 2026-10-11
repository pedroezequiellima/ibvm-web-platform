// src/app/ministerios/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import DesignJovens from "@/components/ministerios/DesignJovens";
import { MINISTERIOS_DATA, isSlugMinisterio, type SlugMinisterio } from "@/data/ministerios";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * 🔒 SEGURANÇA & OTIMIZAÇÃO:
 * Pré-renderiza estaticamente apenas os slugs seguros e autorizados.
 * Qualquer tentativa de injection ou slug inexistente é rejeitada antes do processador.
 */
export async function generateStaticParams() {
  const slugs: SlugMinisterio[] = [
    "jovens",
    "oracao",
    "infantil",
    "adolescentes",
    "evangelistico",
    "transmissao",
    "ajuda",
    "diaconal",
    "pastoral",
  ];
  return slugs.map((slug) => ({ slug }));
}

/**
 * 🔒 METADATA DINÂMICA SEGURA:
 * Gera tags de SEO e título prevenindo injeções de cabeçalho.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isSlugMinisterio(slug)) {
    return { title: "Ministério não encontrado | IBVM" };
  }

  if (slug === "jovens") {
    return {
      title: "Ministério de Jovens | IBVM",
      description: "Comunidade jovem da Igreja Batista Vila Marcela.",
    };
  }

  const ministerio = MINISTERIOS_DATA[slug];
  return {
    title: `${ministerio.nome} | IBVM`,
    description: ministerio.resumo,
  };
}

export default async function MinisterioPage({ params }: PageProps) {
  const { slug } = await params;

  // 🔒 Validação restrita de tipos (Type-Guard)
  if (!isSlugMinisterio(slug)) {
    notFound();
  }

  // Rota especializada para jovens
  if (slug === "jovens") {
    return <DesignJovens />;
  }

  // Recupera os dados bíblicos imutáveis
  const ministerio = MINISTERIOS_DATA[slug];

  return (
    <main className="min-h-screen bg-[#FFFBF6] text-[#3D2B1F] pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-[#B5A478]/30">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Breadcrumb de Navegação */}
        <nav aria-label="Navegação" className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#8C7A6B]">
          <Link href="/" className="hover:text-[#3D2B1F] transition-colors">Início</Link>
          <span>/</span>
          <Link href="/#ministerios" className="hover:text-[#3D2B1F] transition-colors">Ministérios</Link>
          <span>/</span>
          <span className="text-[#B5A478]">{ministerio.nome}</span>
        </nav>

        {/* Cabeçalho do Ministério */}
        <header className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-[#F0E6D2] relative overflow-hidden">
          <div className="space-y-4 relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FAF4EA] text-[#B5A478] text-xs font-bold tracking-[0.25em] uppercase border border-[#F0E6D2]">
              Igreja Batista Vila Marcela
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3D2B1F] tracking-tight leading-tight">
              {ministerio.nome}
            </h1>
            <p className="text-lg md:text-xl text-[#8C7A6B] leading-relaxed max-w-2xl font-normal">
              {ministerio.resumo}
            </p>
          </div>
        </header>

        {/* Card Bíblico em Destaque */}
        <section aria-label="Fundamento Bíblico" className="bg-[#FAF4EA] border border-[#F0E6D2] rounded-[2.5rem] p-8 md:p-10 relative">
          <span className="text-6xl text-[#D8CCA8] font-serif absolute top-4 left-6 select-none opacity-40">“</span>
          <div className="relative z-10 pl-6 space-y-4">
            <p className="text-xl md:text-2xl font-serif italic text-[#3D2B1F] leading-relaxed">
              {ministerio.versiculoTexto}
            </p>
            <cite className="block text-sm md:text-base font-bold uppercase tracking-wider text-[#B5A478] not-italic">
              — {ministerio.versiculoReferencia}
            </cite>
          </div>
        </section>

        {/* Propósito e Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card: Propósito */}
          <section className="bg-white rounded-[2rem] p-8 border border-[#F0E6D2] shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#3D2B1F] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B5A478]"></span>
                Propósito
              </h2>
              <p className="text-[#8C7A6B] leading-relaxed text-sm md:text-base">
                {ministerio.proposito}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#F0E6D2]/60 text-xs text-[#8C7A6B]">
              <strong className="text-[#3D2B1F]">Público:</strong> {ministerio.publicoAlvo}
            </div>
          </section>

          {/* Card: Pilares de Atuação */}
          <section className="bg-white rounded-[2rem] p-8 border border-[#F0E6D2] shadow-sm">
            <h2 className="text-xl font-bold text-[#3D2B1F] flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B5A478]"></span>
              Frentes de Atuação
            </h2>
            <ul className="space-y-3.5">
              {ministerio.pilares.map((pilar, index) => (
                <li key={index} className="flex items-start gap-3 text-sm md:text-base text-[#6B5A4C]">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FAF4EA] text-[#B5A478] font-bold text-xs flex items-center justify-center border border-[#F0E6D2] mt-0.5">
                    {index + 1}
                  </span>
                  <span>{pilar}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Chamada para Ação / Comunhão */}
        <section className="text-center bg-white border border-[#F0E6D2] rounded-[2.5rem] p-8 md:p-12 shadow-sm space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3D2B1F]">
            Deseja servir ou participar deste ministério?
          </h2>
          <p className="text-[#8C7A6B] max-w-xl mx-auto text-base">
            Cada membro da igreja tem dons e talentos concedidos por Deus para a edificação do corpo de Cristo. Venha fazer parte!
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/#contato"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#3D2B1F] text-white font-semibold text-sm hover:bg-[#523A2A] transition-colors shadow-md"
            >
              Falar com a Liderança
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#FAF4EA] text-[#3D2B1F] font-semibold text-sm border border-[#F0E6D2] hover:bg-[#F3E8D3] transition-colors"
            >
              Voltar ao Início
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}