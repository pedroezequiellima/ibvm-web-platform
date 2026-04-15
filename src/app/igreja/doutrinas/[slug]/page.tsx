export default async function DoutrinasPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const titulo = slug.replace(/-/g, ' ').toUpperCase();

  return (
    <main className="min-h-screen pt-40 px-8 bg-[#3D2B1F] text-[#FCF9F6]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 border-b border-[#B5A478] pb-4">
          Nossas <span className="text-[#B5A478]">Crenças</span>
        </h1>
        
        <article className="prose prose-invert lg:prose-xl">
          <h2 className="text-[#B5A478] text-2xl font-bold uppercase tracking-tight">{titulo}</h2>
          <p className="text-[#8C7A6B] mt-6 leading-relaxed">
            Aqui você encontrará os fundamentos bíblicos que regem a nossa fé e prática como Igreja Batista Vila Marcela. 
            Acreditamos que a Bíblia é a nossa única regra de fé e conduta.
          </p>
          <div className="mt-12 p-6 bg-[#B5A478]/10 rounded-xl border border-[#B5A478]/20 italic">
            Lâmpada para os meus pés é tua palavra, e luz para o meu caminho. - Salmos 119:105
          </div>
        </article>
      </div>
    </main>
  );
}