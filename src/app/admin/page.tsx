'use client';

import { useState, type ChangeEvent } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/lib/firebase/client';
import { galeriaAction } from '@/app/actions/galeria';
import { LogoutButton } from '@/components/LogoutButton';

export default function AdminPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];

    if (!file) {
      setPreviewUrl(null);
      return;
    }

    const fileUrl = URL.createObjectURL(file);
    setPreviewUrl((current) => {
      if (current) {
        URL.revokeObjectURL(current);
      }
      return fileUrl;
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    setFeedback(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const file = formData.get('imagemFile');

    if (!(file instanceof File)) {
      setFeedback({ type: 'error', message: 'Por favor, selecione um arquivo de imagem.' });
      setIsSubmitting(false);
      return;
    }

    try {
      const storageRef = ref(storage, `galeria/${Date.now()}-${file.name}`);
      await uploadBytes(storageRef, file);
      const imagemUrl = await getDownloadURL(storageRef);

      const payload = new FormData();
      payload.append('titulo', formData.get('titulo')?.toString() ?? '');
      payload.append('categoria', formData.get('categoria')?.toString() ?? '');
      payload.append('imagemUrl', imagemUrl);

      await galeriaAction(payload);

      form.reset();
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
      setPreviewUrl(null);
      setFeedback({ type: 'success', message: 'Imagem enviada com sucesso e salva na galeria.' });
    } catch (error) {
      console.error('Erro ao salvar galeria:', error);
      setFeedback({
        type: 'error',
        message: 'Não foi possível enviar a imagem. Tente novamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-10">
      <section className="mx-auto max-w-4xl rounded-3xl border border-slate-700 bg-slate-900/95 p-10 shadow-xl shadow-slate-950/20">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Painel Administrativo</p>
            <h1 className="mt-3 text-4xl font-semibold">Nova foto para a Galeria</h1>
            <p className="mt-2 max-w-2xl text-slate-400">
              Use o upload para enviar imagens diretamente ao Firebase Storage e atualizar a galeria.
            </p>
          </div>

          <LogoutButton />
        </header>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Título</span>
              <input
                name="titulo"
                type="text"
                required
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
                placeholder="Ex: Culto de Ação de Graças"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Categoria</span>
              <select
                name="categoria"
                required
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
                defaultValue="Cultos"
              >
                <option value="Cultos">Cultos</option>
                <option value="Missões">Missões</option>
                <option value="Jovens">Jovens</option>
                <option value="Eventos">Eventos</option>
              </select>
            </label>
          </div>

          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-200">Arquivo da imagem</span>
            <input
              name="imagemFile"
              type="file"
              accept="image/*"
              required
              onChange={handleFileChange}
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition file:mr-4 file:rounded-full file:border-0 file:bg-slate-800 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-slate-100 focus:border-sky-400"
            />
          </label>

          {previewUrl ? (
            <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-950/90 p-4">
              <p className="text-sm font-medium text-slate-200">Pré-visualização</p>
              <img
                src={previewUrl}
                alt="Prévia da imagem selecionada"
                className="mt-3 h-auto w-full rounded-3xl object-cover border border-slate-700"
              />
            </div>
          ) : null}

          <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5 text-sm text-slate-400">
            <p className="font-medium text-slate-100">Fluxo seguro</p>
            <ul className="mt-3 space-y-2">
              <li>• O upload vai para Firebase Storage antes de enviar os dados ao servidor.</li>
              <li>• A URL de download é anexada ao FormData e enviada à Server Action.</li>
              <li>• O servidor valida o cookie de sessão e salva apenas campos confiáveis.</li>
            </ul>
          </div>

          {feedback ? (
            <div
              className={`rounded-3xl border p-4 text-sm ${
                feedback.type === 'success'
                  ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300'
                  : 'border-rose-500 bg-rose-500/10 text-rose-300'
              }`}
            >
              {feedback.message}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full justify-center rounded-2xl bg-sky-500 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Enviando foto...' : 'Salvar na Galeria'}
          </button>
        </form>
      </section>
    </main>
  );
}
