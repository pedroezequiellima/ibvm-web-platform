'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { adminAuth, adminDb, FIREBASE_SESSION_COOKIE_NAME } from '@/lib/firebase/admin';
import { Timestamp } from 'firebase-admin/firestore';

const galeriaSchema = z.object({
  titulo: z.string().min(3, 'Título deve ter pelo menos 3 caracteres').max(100, 'Título muito longo'),
  categoria: z.enum(['Cultos', 'Missões', 'Jovens', 'Eventos']),
  imagemUrl: z.string().url('URL da imagem inválida'),
});

async function createGaleriaEntry(formData: FormData) {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(FIREBASE_SESSION_COOKIE_NAME)?.value;

  if (!sessionCookie) {
    throw new Error('Sessão não encontrada. Faça login novamente.');
  }

  let decodedToken;
  try {
    decodedToken = await adminAuth.verifySessionCookie(sessionCookie, true);
  } catch (error) {
    console.error('Falha na verificação do cookie de sessão:', error);
    throw new Error('Sessão inválida ou expirada. Faça login novamente.');
  }

  if (!decodedToken.uid) {
    throw new Error('Usuário não autorizado.');
  }

  const data = {
    titulo: formData.get('titulo')?.toString().trim() ?? '',
    categoria: formData.get('categoria')?.toString() ?? '',
    imagemUrl: formData.get('imagemUrl')?.toString().trim() ?? '',
  };

  const parsed = galeriaSchema.parse(data);

  await adminDb.collection('galeria').add({
    titulo: parsed.titulo,
    categoria: parsed.categoria,
    imagemUrl: parsed.imagemUrl,
    createdAt: Timestamp.now(),
    createdBy: decodedToken.uid,
  });

  revalidatePath('/galeria');

  return { success: true };
}

export async function galeriaAction(formData: FormData): Promise<void> {
  await createGaleriaEntry(formData);
}
