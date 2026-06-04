import Link from "next/link";

const gcsDisponiveis = [
  { nome: "Vila Marcela", slug: "gc-vila-marcela" },
  { nome: "Loteamento Recife", slug: "gc-loteamento-recife" },
  { nome: "Dom Avelar", slug: "gc-dom-avelar" },
  { nome: "Padre Cícero", slug: "gc-padre-cicero" },
];

export default function Footer() {
  return (
    // Fundo Marrom Profundo para contraste absoluto, mantendo a harmonia terrosa
    <footer className="relative bg-[#2C211A] pt-24 pb-12 px-6 border-t border-[#3A2E24] text-[#E8E1D5] overflow-hidden">
      
      {/* Detalhes geométricos no fundo com opacidade bem sutil adaptada para o fundo escuro */}
      <div className="absolute -left-20 -bottom-20 text-[#A98054] text-[25rem] font-serif font-black select-none opacity-5 leading-none pointer-events-none hidden md:block">
        (
      </div>
      <div className="absolute right-0 top-10 text-[#A98054] text-[15rem] font-black select-none opacity-[0.02] leading-none pointer-events-none hidden lg:block">
        )
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10 relative z-10">
        
        {/* Coluna 1: Símbolo do Peixe e Identidade */}
        <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left pr-6">
          
          {/* Símbolo do Peixe Cristão (Ictis) em SVG Minimalista */}
          <div className="text-[#A98054] mb-6 transition-transform duration-500 hover:scale-110">
            <svg 
              className="w-16 h-16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {/* Desenho orgânico e elegante do peixe */}
              <path d="M2 12c4-4 11-4 15 0 2 2 3.5 3 5 3-1.5 0-3-1-5-3-4-4-11-4-15 0z" />
              <path d="M2 12c4 4 11 4 15 0 2-2 3.5-3 5-3-1.5 0-3 1-5 3-4 4-11 4-15 0z" />
            </svg>
          </div>

          <h2 className="text-2xl font-serif font-bold text-[#F4F0EA] tracking-tight">
            Igreja Batista <br /> <span className="text-[#A98054] italic font-normal">de Vila Marcela</span>
          </h2>
          <p className="mt-5 text-[#C4B3A5] text-sm leading-relaxed max-w-sm">
            Caminhando em Fé, Comunhão e Serviço, <br />
            levando a Palavra até os confins de Petrolina.
          </p>
        </div>

        {/* Coluna 2: Acessos Rápidos */}
        <div className="text-center md:text-left">
          {/* Nova tipografia: Serif, Italic e Dourado Luminoso */}
          <h3 className="text-lg font-serif italic font-bold text-[#A98054] tracking-wide mb-6">
            Acessos Rápidos
          </h3>
          <ul className="space-y-4 text-base font-medium text-[#C4B3A5]">
            <li><Link href="/" className="hover:text-[#F4F0EA] transition-colors">Início</Link></li>
            <li><Link href="/sobre" className="hover:text-[#F4F0EA] transition-colors">Nossa Fé</Link></li>
            <li><Link href="/grupos" className="hover:text-[#F4F0EA] transition-colors">Grupos de Conexão</Link></li>
            <li><Link href="/galeria" className="hover:text-[#F4F0EA] transition-colors">Galeria de Mídias</Link></li>
            <li><Link href="/contato" className="hover:text-[#F4F0EA] transition-colors">Contato</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Nossos GCs */}
        <div className="text-center md:text-left">
          {/* Nova tipografia aplicada */}
          <h3 className="text-lg font-serif italic font-bold text-[#A98054] tracking-wide mb-6">
            Nossos GCs
          </h3>
          <ul className="space-y-4 text-base font-medium text-[#C4B3A5]">
            {gcsDisponiveis.map(gc => (
              <li key={gc.slug}>
                <Link href={`/gc/${gc.slug}`} className="hover:text-[#F4F0EA] transition-colors">
                  GC {gc.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 4: Informações */}
        <div className="text-center md:text-left pr-4">
          {/* Nova tipografia aplicada */}
          <h3 className="text-lg font-serif italic font-bold text-[#A98054] tracking-wide mb-6">
            Informações
          </h3>
          <ul className="space-y-5 text-sm text-[#C4B3A5] font-medium">
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <svg className="w-5 h-5 text-[#A98054] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>Vila Marcela, Petrolina-PE</span>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <svg className="w-5 h-5 text-[#A98054] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span>+55 87 3860-1234</span>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <svg className="w-5 h-5 text-[#A98054] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span>contato@ibvm.org.br</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra Inferior: Copyright e Área Exclusiva */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-[#3A2E24] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#8C7A6B] font-serif italic text-center md:text-left">
          <p>© {new Date().getFullYear()} Igreja Batista de Vila Marcela. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-6">
            {/* Link para o Portal do Administrador */}
            <Link 
              href="/admin" 
              className="flex items-center gap-2 group text-[#5C4A3D] hover:text-[#F4F0EA] transition-colors"
              title="Acesso Restrito à Liderança"
            >
              <svg className="w-4 h-4 text-[#A98054] group-hover:text-[#F4F0EA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
              <span className="text-xs font-bold uppercase tracking-widest text-[#A98054]/60 group-hover:text-[#F4F0EA] transition-colors">
                Área Exclusiva
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}