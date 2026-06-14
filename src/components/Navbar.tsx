"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  // Constante para verificar se é a rota principal
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { 
      name: 'A IGREJA', 
      href: '#', 
      dropdown: [
        { 
          title: 'Ministérios', 
          basePath: '/igreja/ministerios',
          items: ['Oração', 'Infantil', 'Adolescentes', 'Jovens', 'Evangelístico', 'Transmissão', 'Ajuda', 'Diaconal', 'Pastoral'] 
        },
        { 
          title: 'Discipulado', 
          basePath: '/igreja/discipulado',
          items: ['O que é o batismo', 'Imersão', 'Ordenança'] 
        },
        { 
          title: 'Grupos de Conexão', 
          basePath: '/igreja/grupos',
          items: ['GC Loteamento Recife', 'GC Vila Marcela', 'GC Dom Avelar', 'GC Padre Cícero'] 
        },
        { 
          title: 'Doutrinas', 
          basePath: '/igreja/doutrinas',
          items: ['Nossas Crenças'] 
        },
      ]
    },
    { name: 'MENSAGENS', href: '/mensagens' },
    { name: 'EVENTOS', href: '/eventos' },
    { name: 'GALERIA', href: '/galeria' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 flex items-center ${
          isHome 
            ? (isScrolled ? 'bg-[#FCF9F6]/90 backdrop-blur-md shadow-md py-3' : 'bg-[#ffffff] py-4') 
            : 'bg-[#FCF9F6] shadow-md py-3'
        }`}
      >
        {/* 1. LADO ESQUERDO: LOGO (Largura fixa para não empurrar o centro) */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-xl">
              <Image src="/logoIBVM.jpg" alt="Logo IBVM" fill className="object-cover" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-[#533928] font-bold text-base md:text-lg leading-tight tracking-tighter group-hover:text-[#B5A478] transition-colors">
                IGREJA BATISTA
              </span>
              <span className="text-[#50351f] text-[10px] md:text-xs font-medium tracking-[0.2em]">
                VILA MARCELA
              </span>
            </div>
          </Link>
        </div>

        {/* 2. CENTRO: LINKS (Ficam centralizados perfeitamente) */}
        <div className="hidden md:flex flex-[2] justify-center">
          <ul className="flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <button className="flex items-center gap-1 text-sm font-medium text-[#8C7A6B] group-hover:text-[#3D2B1F] transition-colors py-2">
                      {link.name}
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {/* Dropdowns permanecem os mesmos */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white shadow-xl border border-[#F0E6D2] rounded-xl py-3 min-w-[220px] flex flex-col">
                        {link.dropdown.map((section) => (
                          <div key={section.title} className="relative group/submenu px-2">
                            <div className="flex items-center justify-between text-[#8C7A6B] hover:text-[#3D2B1F] hover:bg-[#FCF9F6] px-3 py-2 rounded-md text-sm cursor-pointer transition-all">
                              <span>{section.title}</span>
                              <svg className="w-3 h-3 -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                            {/* Submenu à direita */}
                            <div className="absolute left-full top-0 ml-1 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200">
                              <ul className="bg-white shadow-2xl border border-[#F0E6D2] rounded-xl py-2 min-w-[200px] flex flex-col">
                                {section.items.map((item) => (
                                  <li key={item}>
                                    <Link 
                                      href={`${section.basePath}/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, '-')}`} 
                                      className="block text-[#8C7A6B] hover:text-[#3D2B1F] hover:bg-[#FCF9F6] px-4 py-2 text-sm transition-all"
                                    >
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link href={link.href} className={`text-sm font-medium transition-all duration-200 py-2 ${pathname === link.href ? 'text-[#3D2B1F] border-b-2 border-[#B5A478]' : 'text-[#8C7A6B] hover:text-[#3D2B1F]'}`}>
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* 3. LADO DIREITO: BOTÃO DÍZIMO (Alinhado à direita) */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <Link href="/dizimo" className={`hidden md:block px-8 py-2 border-2 border-[#B5A478] rounded-full font-medium text-sm transition-all duration-300 ${isScrolled || !isHome ? 'bg-[#B5A478] text-white' : 'text-[#3D2B1F] hover:bg-[#B5A478] hover:text-white'}`}>
            Ofertas
          </Link>

          {/* BOTÃO MOBILE */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 z-[110]"
          >
            <div className={`w-6 h-0.5 bg-[#3D2B1F] transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-[#3D2B1F] ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-[#3D2B1F] transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* MENU MOBILE (SIDEBAR) */}
      <div className={`fixed inset-0 bg-[#3D2B1F]/20 backdrop-blur-sm z-[105] transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsOpen(false)} />

      <div className={`fixed right-0 top-0 h-full w-[85%] max-w-[320px] bg-[#fffbf6] z-[106] shadow-2xl transition-transform duration-500 p-8 pt-24 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <li key={link.name} className="border-b border-[#F0E6D2] pb-4">
              {link.dropdown ? (
                <div>
                  <button 
                    onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                    className="flex items-center justify-between w-full text-lg font-bold text-[#3D2B1F]"
                  >
                    {link.name}
                    <svg className={`w-5 h-5 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${openDropdown === link.name ? 'max-h-[1000px] mt-4' : 'max-h-0'}`}>
                    {link.dropdown.map((section) => (
                      <div key={section.title} className="mb-4 pl-4">
                        <span className="block text-[10px] font-black text-[#B5A478] uppercase tracking-widest mb-2">
                          {section.title}
                        </span>
                        <ul className="flex flex-col gap-3">
                          {section.items.map((item) => (
                            <li key={item}>
                              <Link 
                                href={`${section.basePath}/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, '-')}`}
                                onClick={() => setIsOpen(false)}
                                className="text-sm font-medium text-[#8C7A6B] hover:text-[#3D2B1F]"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-[#3D2B1F] block"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
          
          <Link 
            href="/dizimo" 
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-[#3D2B1F] text-white text-center py-4 rounded-xl font-bold shadow-lg shadow-[#3D2B1F]/20"
          >
            Ofertas
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;