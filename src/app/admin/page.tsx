'use client';

import { useState, type FormEvent } from 'react';
import { galeriaAction } from '@/app/actions/galeria';
import { LogoutButton } from '@/components/LogoutButton';

function obterLinkDiretoDrive(url: string) {
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return url;
}

export default function AdminPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [linkDrive, setLinkDrive] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    setFeedback(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const titulo = formData.get('titulo')?.toString().trim() ?? '';
    const categoria = formData.get('categoria')?.toString() ?? '';
    const linkDriveValue = formData.get('linkDrive')?.toString().trim() ?? '';

    if (!linkDriveValue) {
      setFeedback({ type: 'error', message: 'Por favor, insira o link do Google Drive.' });
      setIsSubmitting(false);
      return;
    }

    const urlFinal = obterLinkDiretoDrive(linkDriveValue);

    try {
      const payload = new FormData();
      payload.append('titulo', titulo);
      payload.append('categoria', categoria);
      payload.append('imagemUrl', urlFinal);

      await galeriaAction(payload);

      form.reset();
      setLinkDrive('');
      setFeedback({ type: 'success', message: 'Link enviado com sucesso e salvo na galeria.' });
    } catch (error) {
      console.error('Erro ao salvar galeria:', error);
      alert(`Não foi possível enviar o link. Motivo: ${error instanceof Error ? error.message : String(error)}`);
      setFeedback({ type: 'error', message: 'Não foi possível enviar o link. Tente novamente.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#FCF9F6] text-[#3D2B1F] px-4 pt-32 pb-20">
      <section className="mx-auto max-w-3xl bg-white rounded-4xl border border-[#EBE5DB] p-8 md:p-12 shadow-md">
        <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between mb-10 pb-8 border-b border-[#EBE5DB]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B5A478] mb-2">Painel Administrativo</p>
            <h1 className="text-3xl md:text-4xl font-serif text-[#3D2B1F] leading-tight">Nova foto para a Galeria</h1>
            <p className="mt-3 text-[#8C7A6B] text-sm max-w-lg">
              Preencha os detalhes e insira o link do Google Drive para atualizar automaticamente a galeria da igreja.
            </p>
          </div>

          <div className="shrink-0">
            <LogoutButton />
          </div>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-bold text-[#3D2B1F]">Título da Imagem</span>
              <input
                name="titulo"
                type="text"
                required
                className="w-full rounded-2xl border border-[#EBE5DB] bg-[#FCF9F6] px-4 py-3.5 text-[#3D2B1F] placeholder:text-[#B5A478] outline-none transition focus:border-[#5c4938] focus:ring-1 focus:ring-[#5c4938]"
                placeholder="Ex: Culto de Ação de Graças"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-bold text-[#3D2B1F]">Categoria</span>
              <select
                name="categoria"
                required
                className="w-full rounded-2xl border border-[#EBE5DB] bg-[#FCF9F6] px-4 py-3.5 text-[#3D2B1F] outline-none transition focus:border-[#5c4938] focus:ring-1 focus:ring-[#5c4938]"
                defaultValue="Cultos"
              >
                <option value="Cultos">Cultos</option>
                <option value="Missões">Missões</option>
                <option value="Jovens">Jovens</option>
                <option value="Eventos">Eventos</option>
                <option value="Historia">História</option>
              </select>
            </label>
          </div>

          <div className="flex flex-col gap-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-bold text-[#3D2B1F]">Link de Compartilhamento do Google Drive (Imagens/Vídeos)</span>
              <input
                name="linkDrive"
                type="url"
                required
                value={linkDrive}
                onChange={(event) => setLinkDrive(event.target.value)}
                className="w-full rounded-2xl border border-[#EBE5DB] bg-[#FCF9F6] px-4 py-3.5 text-[#3D2B1F] placeholder:text-[#B5A478] outline-none transition focus:border-[#5c4938] focus:ring-1 focus:ring-[#5c4938]"
                placeholder="https://drive.google.com/file/d/ID_DO_ARQUIVO/view?usp=sharing"
              />
            </label>
            <p className="text-xs text-[#8C7A6B] mt-1 pl-2">
              Cole o link público do Google Drive. Nós vamos converter para o link direto de visualização automaticamente.
            </p>
          </div>

          {feedback ? (
            <div
              className={`rounded-2xl border p-4 text-sm font-medium flex items-center gap-3 ${
                feedback.type === 'success'
                  ? 'border-green-200 bg-green-50 text-green-800'
                  : 'border-red-200 bg-red-50 text-red-800'
              }`}
            >
              {feedback.type === 'success' ? '✅' : '⚠️'} {feedback.message}
            </div>
          ) : null}

          <div className="pt-4 border-t border-[#EBE5DB]">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#5c4938] px-8 py-4 text-base font-bold tracking-wide text-white transition-all duration-300 hover:bg-[#3D2B1F] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-none"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando link...
                </span>
              ) : (
                'Salvar na Galeria'
              )}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
