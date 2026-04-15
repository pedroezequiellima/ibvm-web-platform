import { notFound } from "next/navigation";
import DesignJovens from "@/components/ministerios/DesignJovens";

// O "export default" é o que o Next.js procura! Não pode faltar.
export default async function MinisterioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const ministeriosValidos = [
    "oracao", "infantil", "adolescentes", "jovens", 
    "evangelistico", "transmissao", "ajuda", "diaconal", "pastoral"
  ];

  if (!ministeriosValidos.includes(slug)) {
    notFound();
  }

  switch (slug) {
    case "jovens":
      return <DesignJovens />;

    default:
      return (
        <main className="min-h-screen bg-[#fffbf6] flex items-center justify-center pt-32 pb-20 px-8">
          <div className="text-center space-y-6 max-w-2xl mx-auto bg-white p-12 rounded-[3rem] shadow-xl border border-[#F0E6D2]">
            <span className="text-[#B5A478] font-bold tracking-[0.3em] uppercase text-xs">
              Ministério
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#3D2B1F] capitalize italic">
              {slug.replace(/-/g, ' ')}
            </h1>
            <p className="text-[#8C7A6B] text-lg">
              A página com o design exclusivo deste ministério está sendo desenvolvida e estará disponível em breve!
            </p>
          </div>
        </main>
      );
  }
}