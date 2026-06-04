import clientPromise from '@/lib/mongodb';
import GaleriaClient from './GaleriaClient';

interface GaleriaItem {
  id: string;
  titulo: string;
  categoria: string;
  data: string;
  tipo: 'imagem' | 'video';
  url: string;
  descricao: string;
}

async function getGaleriaDados(): Promise<GaleriaItem[]> {
  const client = await clientPromise;
  const dbName = process.env.MONGODB_DB_NAME ?? 'ibvm_db';
  const db = client.db(dbName);

  const fotos = await db.collection('fotos').find().sort({ data: -1 }).toArray();

  return fotos.map((foto: any) => ({
    id: foto._id?.toString() ?? '',
    titulo: foto.titulo ?? '',
    categoria: foto.categoria ?? '',
    data: foto.data ? new Date(foto.data).toISOString() : new Date().toISOString(),
    tipo: foto.tipo === 'video' ? 'video' : 'imagem',
    url: foto.url ?? foto.imagemUrl ?? '',
    descricao: foto.descricao ?? '' ,
  }));
}

export default async function GaleriaPage() {
  const dadosDoMongo = await getGaleriaDados();

  return <GaleriaClient dados={dadosDoMongo} />;
}