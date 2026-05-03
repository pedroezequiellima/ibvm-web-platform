import Link from 'next/link';
import Image from 'next/image';
import { LogoutButton } from './LogoutButton';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const usefulLinks = [
    { name: 'Sobre Nós', href: '/' },
    { name: 'Ministérios', href: '/ministerios' },
    { name: 'Pedidos de Oração', href: '/oracao' },
    { name: 'Dízimo e Ofertas', href: '/dizimo' },
  ];

  return (
    <footer className="w-full bg-[#3D2B1F] text-[#FCF9F6] px-6 py-12 md:px-16 md:py-20 text-sm">
      <div className="max-w-7xl mx-auto">
        
        {/* GRID PRINCIPAL: Agora mantendo colunas horizontais desde o mobile */}
        {/* Usamos grid-cols-1 sm:grid-cols-3 ou direto grid-cols-3 dependendo do espaço */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12 text-left">
          
          {/* COLUNA 1: LOGO E MISSÃO */}
          <div className="flex flex-col items-start gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-xl border border-[#FCF9F6]/10">
                <Image 
                  src="/logoIBVM.jpg" 
                  alt="Logo IBVM"
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base md:text-lg leading-tight tracking-tighter">IBVM</span>
                <span className="text-[#A29487] text-[9px] md:text-[10px] font-medium tracking-widest uppercase">
                  Vila Marcela
                </span>
                <LogoutButton />
              </div>
            </Link>

            <p className="text-[#C4B7AB] italic leading-relaxed max-w-sm text-xs md:text-sm">
              &ldquo;Uma igreja comprometida com a fidelidade bíblica e a proclamação do evangelho de Cristo.&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <a href="https://instagram.com/igrejaibvm" target="_blank" className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-[#FCF9F6]/10 rounded-full hover:bg-[#FCF9F6] hover:text-[#3D2B1F] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://youtube.com/@igrejabatistavilamarcela" target="_blank" className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-[#FCF9F6]/10 rounded-full hover:bg-[#FCF9F6] hover:text-[#3D2B1F] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* COLUNA 2: LINKS ÚTEIS */}
          <div className="flex flex-col items-start gap-6">
            <h3 className="font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#A29487]">Links Úteis</h3>
            <ul className="flex flex-col gap-3 md:gap-4">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#C4B7AB] hover:text-[#FCF9F6] transition-colors text-xs md:text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 3: CONTATO */}
          <div className="flex flex-col items-start gap-6">
            <h3 className="font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#A29487]">Contato</h3>
            <ul className="flex flex-col gap-4 text-[#C4B7AB]">
              <li className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#A29487] mt-1 shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="text-xs md:text-sm">Vila Marcela, Petrolina/PE</span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#A29487] shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:contato@ibvm.com.br" className="hover:text-[#FCF9F6] text-xs md:text-sm truncate">contato@ibvm.com.br</a>
              </li>
              <li className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#A29487] shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:087988051846" className="hover:text-[#FCF9F6] text-xs md:text-sm">(87) 98805-1846</a>
              </li>
            </ul>
          </div>

        </div>

        {/* LINHA INFERIOR */}
        <div className="border-t border-[#FCF9F6]/10 mt-16 pt-8 flex flex-row justify-between items-center gap-4">
          <p className="text-[9px] md:text-xs text-[#A29487] tracking-widest uppercase">
            &copy; {currentYear} IBVM
          </p>
          
          <button className="flex items-center gap-2 px-3 py-1.5 border border-[#FCF9F6]/10 rounded-full text-[9px] md:text-[10px] text-[#A29487] uppercase tracking-widest hover:bg-[#FCF9F6]/5 transition-all">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            <span className="hidden xs:inline">Modo Escuro</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;