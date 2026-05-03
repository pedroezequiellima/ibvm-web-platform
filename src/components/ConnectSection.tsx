'use client'
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

const ministerios = [
  { id: 1, nome: 'IBVM Vila Marcela', imagem: '/exemplo.jpg', instagram: 'https://www.instagram.com/igrejabatistavilamarcela/' },
  { id: 2, nome: 'Vila Jovem', imagem: '/adolescentes/TeensChacara2.jpg', instagram: 'https://www.instagram.com/vilajovem.ibvm/' },
  { id: 3, nome: 'Vila Teens', imagem: '/adolescentes/TeensChacara.jpg', instagram: 'https://www.instagram.com/vilateensibvm/' },
  { id: 4, nome: 'Vila Kids', imagem: '/infantil/MuitaCria.jpg', instagram: 'https://www.instagram.com/igrejabatistavilamarcela/' },
  { id: 5, nome: 'Igreja', imagem: '/IBVM.jpg', instagram: 'https://www.instagram.com/igrejabatistavilamarcela/' },
  { id: 6, nome: 'Rede de Casais', imagem: '/VilaA2.jpg', instagram: 'https://www.instagram.com/stories/highlights/17846562494657598/' },
];

export default function ConnectSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Título Adaptado ao Estilo da Home */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif italic text-[#3D2B1F] mb-4 uppercase tracking-tight">
            Conecte-se <span className="text-[#B5A478]">Conosco</span>
          </h2>
          <div className="w-20 h-1 bg-[#B5A478] mx-auto"></div>
          <p className="mt-4 text-[#8C7A6B]">Acompanhe o dia a dia de nossos ministérios no Instagram.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministerios.map((min) => (
            <Link 
              key={min.id} 
              href={min.instagram} 
              target="_blank" 
              className="group relative block aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-lg border-4 border-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image
                src={min.imagem}
                alt={min.nome}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay de Gradiente - Usando o Marrom da Paleta */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

              {/* Conteúdo Inferior */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex items-center gap-4">
                {/* Ícone com Cor da Paleta */}
                <div className="w-12 h-12 rounded-full bg-[#B5A478] flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                  <FaInstagram className="w-6 h-6 text-white" />
                </div>

                <div>
                  <p className="text-white font-bold text-xl leading-tight">
                    {min.nome}
                  </p>
                  <p className="text-[#B5A478] text-sm font-medium">
                    @ibvm_oficial
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}