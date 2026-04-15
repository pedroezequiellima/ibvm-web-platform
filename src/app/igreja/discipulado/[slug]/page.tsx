export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Limpa o nome para exibição (ex: o-que-e-o-batismo vira O QUE E O BATISMO)
  const titulo = slug.replace(/-/g, ' ').toUpperCase();

  return (
    <main className="min-h-screen pt-40 px-10 bg-[#fffbf6]">
      <h1 className="text-3xl font-bold text-[#3D2B1F]">{titulo}</h1>
      <p className="mt-4 text-[#8C7A6B]">Página em desenvolvimento.</p>
    </main>
  );
}