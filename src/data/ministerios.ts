// src/data/ministerios.ts

export interface MinisterioInfo {
  nome: string;
  resumo: string;
  versiculoTexto: string;
  versiculoReferencia: string;
  proposito: string;
  pilares: string[];
  publicoAlvo: string;
}

export const MINISTERIOS_DATA = Object.freeze({
  oracao: {
    nome: "Ministério de Oração e Intercessão",
    resumo: "Clamando pela igreja, pelas famílias, pelos enfermos e pelo avanço do Evangelho.",
    versiculoTexto: "Orai sem cessar. Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.",
    versiculoReferencia: "1 Tessalonicenses 5:17-18",
    proposito: "Sustentar a vida espiritual da igreja e interceder pelas causas do Reino através de uma vida devocional contínua.",
    pilares: ["Vigílias e Relógio de Oração", "Visitas a Enfermos", "Discipulado de Oração"],
    publicoAlvo: "Toda a membresia com coração intercessor",
  },
  infantil: {
    nome: "Ministério Infantil (Cordeirinhos de Cristo)",
    resumo: "Ensinando o amor de Jesus às crianças desde a primeira infância com alegria e dedicação bíblica.",
    versiculoTexto: "Ensina a criança no caminho em que deve andar, e até quando envelhecer não se desviará dele.",
    versiculoReferencia: "Provérbios 22:6",
    proposito: "Construir alicerces espirituais sólidos nos corações dos pequenos através de histórias bíblicas e comunhão.",
    pilares: ["Escola Bíblica Dominical", "Culto Infantil Temático", "Acolhimento Familiar"],
    publicoAlvo: "Crianças de 0 a 11 anos e educadores",
  },
  adolescentes: {
    nome: "Ministério de Adolescentes",
    resumo: "Guiando adolescentes a firmarem sua identidade em Cristo diante dos desafios da juventude.",
    versiculoTexto: "Ninguém despreze a tua mocidade; mas sê o exemplo dos fiéis, na palavra, no trato, no amor, no espírito, na fé, na pureza.",
    versiculoReferencia: "1 Timóteo 4:12",
    proposito: "Fortalecer a fé na fase de transição para a maturidade através de estudos bíblicos contextualizados e mentoria cristã.",
    pilares: ["Pequenos Grupos (PGs)", "Dinâmicas e Acampamentos", "Discipulado Prático"],
    publicoAlvo: "Adolescentes de 12 a 17 anos",
  },
  evangelistico: {
    nome: "Ministério Evangelístico e Missões",
    resumo: "Levando as Boas Novas de salvação para além das quatro paredes do templo.",
    versiculoTexto: "E disse-lhes: Ide por todo o mundo, pregai o evangelho a toda criatura.",
    versiculoReferencia: "Marcos 16:15",
    proposito: "Pregar o Evangelho no bairro e alcançar pessoas que ainda não conhecem a graça redentora de Jesus.",
    pilares: ["Evangelismo Urbano", "Distribuição de Alimentos e Apoio", "Apoio Missionário"],
    publicoAlvo: "Evangelistas e toda a congregação mobilizada",
  },
  transmissao: {
    nome: "Ministério de Transmissão e Mídia",
    resumo: "Utilizando a tecnologia, áudio e vídeo como instrumentos para amplificar a mensagem da Cruz.",
    versiculoTexto: "De sorte que a fé é pelo ouvir, e o ouvir pela palavra de Deus.",
    versiculoReferencia: "Romanos 10:17",
    proposito: "Garantir que a mensagem do Evangelho alcance lares, hospitais e cidades distantes com excelência técnica.",
    pilares: ["Live Streams e Gravações", "Sonorização e Iluminação", "Comunicação Digital e Telão"],
    publicoAlvo: "Irmãos com dedicação técnica, áudio e mídia",
  },
  ajuda: {
    nome: "Ministério de Ação Social e Ajuda Fraterna",
    resumo: "Manifestando o amor de Deus através do cuidado prático aos necessitados e acolhimento comunitário.",
    versiculoTexto: "Assim também a fé, se não tiver as obras, é morta em si mesma.",
    versiculoReferencia: "Tiago 2:17",
    proposito: "Assistir famílias da congregação e da comunidade local em situação de vulnerabilidade com compaixão e dignidade.",
    pilares: ["Cestas Básicas Mensais", "Varal Solidário", "Capacitação Comunitária"],
    publicoAlvo: "Toda a igreja e voluntários sociais",
  },
  diaconal: {
    nome: "Corpo Diaconal",
    resumo: "Servindo a mesa do Senhor e a igreja local com zelo, reverência e ordem.",
    versiculoTexto: "Porque os que servirem bem como diáconos adquirirão para si uma boa posição e muita confiança na fé que há em Cristo Jesus.",
    versiculoReferencia: "1 Timóteo 3:13",
    proposito: "Garantir o bom andamento dos cultos, suporte aos membros, assistência na Ceia do Senhor e manutenção da ordem.",
    pilares: ["Recepção e Hospitalidade", "Ministração da Ceia do Senhor", "Segurança e Apoio no Templo"],
    publicoAlvo: "Diáconos e diaconisas consagrados",
  },
  pastoral: {
    nome: "Ministério Pastoral e Aconselhamento",
    resumo: "Cuidado espiritual, oração, proclamação expositiva da Palavra e apascentamento do rebanho.",
    versiculoTexto: "Apascentai o rebanho de Deus, que está entre vós, tendo cuidado dele, não por força, mas voluntariamente; nem por torpe ganância, mas de boa vontade.",
    versiculoReferencia: "1 Pedro 5:2",
    proposito: "Liderar a congregação segundo as Escrituras, promovendo o crescimento na graça e no conhecimento de Cristo.",
    pilares: ["Aconselhamento Bíblico", "Pregação e Ensino Teológico", "Visitação e Cuidado Pastoral"],
    publicoAlvo: "Pastores, presbíteros e liderança eclesiástica",
  },
} as const);

export type SlugMinisterio = keyof typeof MINISTERIOS_DATA | "jovens";

export function isSlugMinisterio(slug: string): slug is SlugMinisterio {
  return slug === "jovens" || Object.prototype.hasOwnProperty.call(MINISTERIOS_DATA, slug);
}