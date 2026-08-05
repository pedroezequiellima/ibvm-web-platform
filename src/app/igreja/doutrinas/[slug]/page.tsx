'use client'

import { useState } from 'react'
import { BookOpen, ChevronDown, ShieldCheck, Scroll, Sparkles } from 'lucide-react'

interface Doutrina {
  numero: number
  titulo: string
  subtitulo?: string
  conteudo: string[]
  citacao?: {
    texto: string
    autor: string
  }
  versiculos: string
}

const credoDoutrinario: Doutrina[] = [
  {
    numero: 1,
    titulo: "DAS SAGRADAS ESCRITURAS",
    conteudo: [
      "Cremos que toda a Escritura (Antigo e Novo Testamento) é a Palavra de Deus divinamente inspirada, verbalmente e plenamente, sendo infalível em seus escritos originais.",
      "A Bíblia possibilita o conhecimento de Deus e de Sua vontade, apresenta o caminho da salvação e é a nossa única regra de fé, conduta e prática cristã."
    ],
    citacao: {
      texto: "As Escrituras nos mostram o caminho de Deus com clareza infalível.",
      autor: "João Calvino"
    },
    versiculos: "2 Tm 3:16-17; 2 Pe 1:20-21; Sl 119:105"
  },
  {
    numero: 2,
    titulo: "DE DEUS",
    conteudo: [
      "Cremos em um único Deus vivo e verdadeiro, eterno, onipotente, soberano, onisciente e imutável, que subsiste em três Pessoas distintas: Pai, Filho e Espírito Santo, iguais em essência e glória."
    ],
    citacao: {
      texto: "Deus é um espírito infinito, eterno e imutável em seu ser, sabedoria, poder, santidade, justiça, bondade e verdade.",
      autor: "Catecismo de Westminster"
    },
    versiculos: "Dt 6:4; Is 45:5-7; Mt 28:19; 1Co 8:5-6; 1 Jo 5:7"
  },
  {
    numero: 3,
    titulo: "DE JESUS CRISTO",
    conteudo: [
      "Cremos que Jesus Cristo é o Verbo eterno de Deus, a segunda Pessoa da Trindade, que se fez carne.",
      "Concebido do Espírito Santo, nascido da virgem Maria, viveu vida sem pecado, morreu pelos nossos pecados, ressuscitou corporalmente e voltará em glória para julgar vivos e mortos."
    ],
    citacao: {
      texto: "Cristo é perfeito em sua divindade e perfeito em sua humanidade, verdadeiramente homem e verdadeiramente Deus.",
      autor: "Concílio de Calcedônia"
    },
    versiculos: "Jo 1:1-14; Rm 4:25; Hb 7:26; At 1:11"
  },
  {
    numero: 4,
    titulo: "DO ESPÍRITO SANTO",
    conteudo: [
      "Cremos que o Espírito Santo é a terceira Pessoa da Trindade, Deus onipotente, onisciente, onipresente e eterno. Agente da regeneração, santificação, consolação e capacitação espiritual do crente.",
      "Ele habita permanentemente em cada salvo, concedendo dons para a edificação do corpo de Cristo."
    ],
    citacao: {
      texto: "Sem o Espírito Santo, não há fé, esperança ou amor.",
      autor: "João Calvino"
    },
    versiculos: "Jo 14:16-17; Tt 3:5; 1Co 6:19-20; Ef 1:13-14"
  },
  {
    numero: 5,
    titulo: "DOS DONS ESPIRITUAIS",
    conteudo: [
      "Cremos que os dons espirituais são capacitações concedidas pelo Espírito Santo aos crentes para o serviço no Corpo de Cristo. Os dons devem ser exercidos com zelo, amor e ordem, sempre sujeitos à autoridade da Palavra de Deus.",
      "Cremos que os dons extraordinários (como línguas, curas e profecias revelacionais) foram sinais apostólicos mais evidentes na época dos apóstolos; para serem considerados válidos hoje, precisam estar de acordo com as Escrituras.",
      "No entanto, dons de ensino, serviço, exortação, generosidade, administração e misericórdia permanecem vigentes e são úteis para a edificação da igreja."
    ],
    citacao: {
      texto: "A finalidade dos dons é glorificar a Deus e edificar os santos.",
      autor: "B.B. Warfield"
    },
    versiculos: "Rm 12:6-8; 1Co 12-14; Ef 4:11-12; 1Pe 4:10-11"
  },
  {
    numero: 6,
    titulo: "DO HOMEM E DO PECADO",
    conteudo: [
      "Cremos que o homem foi criado à imagem de Deus, mas, por sua transgressão, caiu da graça original, tornando-se moralmente corrompido e espiritualmente morto. Todos os homens são pecadores, tanto pela transgressão de Adão quanto por suas próprias experiências pessoais, sendo totalmente depravados e destituídos da glória de Deus.",
      "Fora da graça de Deus, o homem está completamente perdido, e a ira de Deus permanece sobre ele. Somente por meio da obra expiatória e redentora de Jesus Cristo, e do arrependimento dos seus pecados, pode ser restaurado a Deus."
    ],
    citacao: {
      texto: "O homem no estado de inocência foi feito à imagem e semelhança de Deus, mas por causa do pecado essa imagem foi desfigurada e ele se tornou sujeito à morte espiritual e física.",
      autor: "John Gill"
    },
    versiculos: "Gn 1:26-27; Rm 3:23; Ef 2:1-3; Sl 51:5"
  },
  {
    numero: 7,
    titulo: "DA SALVAÇÃO",
    conteudo: [
      "Cremos que a salvação é, do começo ao fim, obra da graça de Deus operada pela Santíssima Trindade e é recebida mediante arrependimento e fé no sacrifício expiatório de Cristo. Essa salvação é eterna, segura e transformadora."
    ],
    citacao: {
      texto: "A salvação é obra do Senhor. Desde o primeiro desejo por Deus até a fé viva em Cristo, tudo é efetuado pelo Espírito Santo.",
      autor: "Charles Spurgeon"
    },
    versiculos: "Ef 2:8-10; Tt 3:5-7; Jo 10:28-29; 2Co 5:17"
  },
  {
    numero: 8,
    titulo: "DA IGREJA",
    conteudo: [
      "Cremos que a Igreja verdadeira é composta por todos os salvos em todas as épocas. A igreja local, como a Igreja Batista de Vila Marcela, é uma expressão visível do corpo de Cristo, autônoma e sob o senhorio de Cristo, dedicada à pregação, à adoração, à edificação e à evangelização.",
      "Este corpo de Cristo consiste de duas partes: (1) A Igreja Universal (katholikós), composta por todos os salvos com relacionamento pessoal com Cristo; e (2) A Igreja local (institucional)."
    ],
    citacao: {
      texto: "A Igreja é a Noiva de Cristo, amá-la é obedecer ao Senhor.",
      autor: "Charles Spurgeon"
    },
    versiculos: "At 2:41-47; Cl 1:18; 1Tm 3:15; Mt 18:17-20; 1Pe 2:5"
  },
  {
    numero: 9,
    titulo: "DAS ORDENANÇAS",
    conteudo: [
      "Cremos que o Senhor Jesus Cristo instituiu duas ordenanças para a igreja local:",
      "1) O Batismo, por imersão, reservado aos crentes como testemunho público de sua fé.",
      "2) A Ceia do Senhor, como memorial da morte de Cristo, celebrada com reverência, até que Ele venha."
    ],
    citacao: {
      texto: "Nenhuma criança deve ser batizada, pois o batismo pertence aos crentes que professam fé... A Ceia pertence à Igreja visível e deve ser observada em reverência, amor e ordem.",
      autor: "Benjamin Keach & John Gill"
    },
    versiculos: "Mt 28:19; Rm 6:3-4; 1Co 11:23-29"
  },
  {
    numero: 10,
    titulo: "DO GOVERNO CIVIL",
    conteudo: [
      "Cremos que toda autoridade é instituída por Deus para o bem da ordem social. Devemos honrar e obedecer às autoridades, exceto quando ordenarem o que contraria a Palavra de Deus."
    ],
    citacao: {
      texto: "Devemos honrar as autoridades, pagar os impostos e orar pelos governantes — Mas jamais comprometer a verdade para agradar a César.",
      autor: "Charles Spurgeon"
    },
    versiculos: "Rm 13:1-7; At 5:29; 1Tm 2:2-3; 1Pe 2:13-17"
  },
  {
    numero: 11,
    titulo: "DAS ÚLTIMAS COISAS (ESCATOLOGIA)",
    conteudo: [
      "Cremos na iminente e visível volta de Cristo, na ressurreição dos mortos, no juízo final, na vida eterna dos salvos e na condenação eterna dos não regenerados.",
      "Cremos que a igreja será arrebatada antes da grande tribulação (Pré-tribulacionismo), em um milênio literal sobre a terra onde Cristo reinará por mil anos (Pré-milenismo), e que os capítulos 1-3 de Apocalipse já se cumpriram, mas os capítulos 4-22 ainda vão se cumprir (Futurismo)."
    ],
    versiculos: "Apocalipse 1-22; 1Th 4:16-17; Mt 24"
  },
  {
    numero: 12,
    titulo: "DOS DEVERES DOS MEMBROS",
    conteudo: [
      "Cremos que cada membro da IBVM tem os seguintes deveres:",
      "• Crescer espiritualmente, pela leitura da Palavra, oração, comunhão e vida santa;",
      "• Amar e servir a igreja local, exercendo seus dons espirituais com humildade e zelo;",
      "• Manter fidelidade doutrinária, defendendo a verdade do evangelho com mansidão;",
      "• Sustentar a igreja, com sua presença, talentos, recursos e oração;",
      "• Evangelizar, vivendo e proclamando o evangelho de Cristo no mundo;",
      "• Submeter-se à liderança pastoral, conforme o ensino das Escrituras;",
      "• Viver em comunhão e disciplina, mantendo a paz e exortando uns aos outros em amor."
    ],
    citacao: {
      texto: "A igreja não é um hotel para visitantes, mas uma casa para servos.",
      autor: "Charles H. Spurgeon"
    },
    versiculos: "Hb 10:24-25; 1Co 16:2; 1Pe 4:10; Hb 13:17; Mt 28:19-20"
  }
]

export default function DoutrinasPage() {
  const [itemAberto, setItemAberto] = useState<number | null>(1) // O primeiro item fica aberto por padrão

  const toggleAccordion = (numero: number) => {
    setItemAberto(itemAberto === numero ? null : numero)
  }

  return (
    <div className="relative min-h-screen bg-[#FCF9F6] py-20 px-4 md:px-8 overflow-hidden">
      
      {/* Background Decorativo Dourado/Papel */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#B5A47810_1px,transparent_1px),linear-gradient(to_bottom,#B5A47810_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        <div className="absolute top-10 right-10 opacity-5 text-[#B5A478]">
          <Scroll size={320} strokeWidth={0.5} />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* CABEÇALHO */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#3D2B1F]/5 px-4 py-2 rounded-full mb-4">
            <ShieldCheck className="text-[#B5A478]" size={20} />
            <span className="text-xs font-bold uppercase tracking-widest text-[#3D2B1F]">
              Fé Histórica & Doutrinária
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif text-[#3D2B1F] italic tracking-tight mb-4">
            Credo <span className="font-sans not-italic font-light text-[#8C7A6B]">Doutrinário</span>
          </h1>
          
          <p className="text-[#8C7A6B] max-w-xl mx-auto text-base md:text-lg">
            A fundação de nossa fé e prática cristã na Igreja Batista Vila Marcela.
          </p>
        </div>

        {/* ACCORDION DE DOUTRINAS */}
        <div className="space-y-4 mb-16">
          {credoDoutrinario.map((item) => {
            const isOpen = itemAberto === item.numero

            return (
              <div 
                key={item.numero}
                className="bg-white/90 backdrop-blur-sm border border-[#F0E6D2] rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {/* Botão do Título */}
                <button
                  onClick={() => toggleAccordion(item.numero)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3D2B1F] text-[#B5A478] font-bold text-sm">
                      {item.numero}
                    </span>
                    <h3 className="font-bold text-lg md:text-xl text-[#3D2B1F] tracking-tight">
                      {item.titulo}
                    </h3>
                  </div>
                  <ChevronDown 
                    size={22} 
                    className={`text-[#B5A478] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Conteúdo Expansível */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#F0E6D2]/60 bg-[#FCF9F6]/40">
                    
                    {/* Parágrafos de Conteúdo */}
                    <div className="space-y-3 text-[#533928] leading-relaxed mb-6">
                      {item.conteudo.map((paragrafo, idx) => (
                        <p key={idx}>{paragrafo}</p>
                      ))}
                    </div>

                    {/* Citação Histórica se Existir */}
                    {item.citacao && (
                      <blockquote className="my-4 p-4 rounded-xl bg-[#3D2B1F]/5 border-l-4 border-[#B5A478] italic text-sm text-[#3D2B1F]">
                        "{item.citacao.texto}"
                        <footer className="mt-1 font-sans not-italic font-bold text-xs uppercase tracking-wider text-[#B5A478]">
                          — {item.citacao.autor}
                        </footer>
                      </blockquote>
                    )}

                    {/* Referências Bíblicas */}
                    <div className="flex items-center gap-2 pt-2 text-xs font-mono font-bold text-[#8C7A6B]">
                      <BookOpen size={16} className="text-[#B5A478]" />
                      <span>{item.versiculos}</span>
                    </div>

                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CONCLUSÃO DO MARCO ZERO */}
        <div className="bg-[#3D2B1F] text-white p-8 rounded-3xl shadow-xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B5A478]/10 rounded-bl-full" />
          <Sparkles className="mx-auto text-[#B5A478] mb-4" size={32} />
          <h4 className="text-xl font-serif italic mb-3 text-[#B5A478]">
            Conclusão do Nosso Credo
          </h4>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            "A Igreja Batista Vila Marcela subscreve este credo como expressão de sua fé histórica, bíblica e reformada. Nele não está contida toda a verdade revelada, mas o suficiente para nos conduzir em unidade, santidade e fidelidade até a gloriosa vinda de Nosso Senhor e Salvador Jesus Cristo."
          </p>
        </div>

      </div>
    </div>
  )
}