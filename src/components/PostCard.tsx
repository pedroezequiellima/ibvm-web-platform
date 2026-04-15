// src/components/PostCard.tsx

export default function PostCard() {
  return (
    <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:scale-100 cursor-pointer border border-gray-100">
      {/* Imagem do Card */ }
      <div className="h-48 w-full bg-linear-to-r from-blue-400 to-purple-500" />

      {/* Conteúdo */}
      <div className="p-6">
        <span className="text-xs font-bold uppercase text-blue-600">Tecnologia</span>
        <h2 className="mt-2 text-xl font-semibold text-gray-800">
          Como configurar o Next.js em 2026
        </h2>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          Aprenda as melhores práticas para organizar seu projeto e usar Tailwind CSS de forma eficiente.
        </p>
        
        <div className="mt-5 flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-200" />
          <span className="text-sm font-medium text-gray-700">Seu Nome</span>
        </div>
      </div>
    </div>
  )
}