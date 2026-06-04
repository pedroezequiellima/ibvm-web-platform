'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import clientPromise from '@/lib/mongodb';

const galeriaSchema = z.object({
  titulo: z.string().min(3, 'Título deve ter pelo menos 3 caracteres').max(100, 'Título muito longo'),
  categoria: z.enum(['Cultos', 'Missões', 'Jovens', 'Eventos']),
  imagemUrl: z.string().url('URL da imagem inválida'),
});

async function createGaleriaEntry(formData: FormData) {
  const data = {
    titulo: formData.get('titulo')?.toString().trim() ?? '',
    categoria: formData.get('categoria')?.toString() ?? '',
    imagemUrl: formData.get('imagemUrl')?.toString().trim() ?? '',
  };

  const parsed = galeriaSchema.parse(data);

  const client = await clientPromise;
  const dbName = process.env.MONGODB_DB_NAME ?? 'ibvm_db';
  const db = client.db(dbName);

  const doc = {
    titulo: parsed.titulo,
    categoria: parsed.categoria,
    url: parsed.imagemUrl,
    data: new Date(),
  };

  const result = await db.collection('fotos').insertOne(doc);

  if (!result.acknowledged) {
    throw new Error('Falha ao inserir documento no MongoDB.');
  }

  revalidatePath('/galeria');

  return { success: true };
}

export async function galeriaAction(formData: FormData): Promise<void> {
  await createGaleriaEntry(formData);
}
