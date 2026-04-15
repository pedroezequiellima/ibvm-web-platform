import { notFound } from "next/navigation";

// Simulação de dados dos GCs
const gcData: Record<string, { bairro: string; dia: string; hora: string; lider: string }> = {
  "gc-loteamento-recife": { bairro: "Loteamento Recife", dia: "Quarta-feira", hora: "19:30", lider: "João e Maria" },
  "gc-vila-marcela": { bairro: "Vila Marcela", dia: "Terça-feira", hora: "20:00", lider: "Pedro e Ana" },
  "gc-dom-avelar": { bairro: "Dom Avelar", dia: "Quinta-feira", hora: "19:30", lider: "Lucas" },
  "gc-padre-cicero": { bairro: "Padre Cícero", dia: "Sexta-feira", hora: "20:00", lider: "Marcos" },
};

export default async function GCPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gc = gcData[slug];

  if (!gc) return notFound();

  return (
    
    <main>
      <div className="max-w-3xl mx-auto border-l-4 border-[#B5A478] pl-6">
        <span className="text-sm font-bold text-[#B5A478] uppercase tracking-widest">Grupo de Conexão</span>
        <h1 className="text-4xl font-bold mt-2 italic">{gc.bairro}</h1>
        
        <div className="mt-8 grid grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-sm border border-[#F0E6D2]">
          <div>
            <p className="text-xs text-[#8C7A6B] font-bold uppercase">Líderes</p>
            <p className="text-lg font-medium">{gc.lider}</p>
          </div>
          <div>
            <p className="text-xs text-[#8C7A6B] font-bold uppercase">Quando</p>
            <p className="text-lg font-medium">{gc.dia} às {gc.hora}</p>
          </div>
        </div>
      </div>
</main>
  );
}