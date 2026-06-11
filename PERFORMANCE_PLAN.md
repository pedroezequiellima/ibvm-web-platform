# 📋 Plano de Performance e Gestão de Mídias (IBVM)

Este documento centraliza as decisões de arquitetura e boas práticas para manter a plataforma da igreja leve, rápida e barata de hospedar.

---

## 1. Tratamento de Vídeos (.mp4)

* **Problema:** Armazenar vídeos na pasta `public` infla o tamanho do repositório Git, torna o deploy na Vercel lento e consome banda cara de servidor.
* **Solução:** **NENHUM** vídeo será hospedado localmente no código.
* **Estratégia:**
  * **Vídeos de Fundo (Ex: Hero Background):** Serão hospedados em uma CDN externa gratuita (Recomendado: **Cloudinary**). No código, utilizaremos apenas a tag `<video src="https://res.cloudinary.com/.../video.mp4">`.
  * **Transmissões e Cultos:** Continuar utilizando estritamente a incorporação de links do **YouTube**.
  * **Evitar:** Google Drive para streaming direto, devido a limites de acessos simultâneos e carregamento lento.

---

## 2. Tratamento de Fotos Estáticas (Imagens do Layout)

* **Problema:** Arquivos `.jpg` e `.png` contêm metadados pesados e compressão ineficiente para a web moderna.
* **Solução:** Migrar todas as imagens fixas locais para o formato `.webp`.
* **Estratégia:**
  1. Utilizar a ferramenta gratuita **Squoosh.app** (do Google) para converter imagens atuais da pasta `public` para `.webp` (redução de até 70% do peso sem perda visível de qualidade).
  2. Utilizar obrigatoriamente o componente `<Image />` do Next.js no frontend, garantindo que o servidor faça a entrega responsiva de acordo com o tamanho da tela do dispositivo.

---

## 3. Tratamento de Mídias Dinâmicas (Eventos e Galeria via Painel Admin)

* **Problema:** Administradores fazendo upload de fotos pesadas direto da câmera do celular.
* **Solução:** Armazenamento desacoplado (Cloud Storage).
* **Estratégia:**
  * O painel de administração fará o envio do arquivo de imagem direto para o SDK do **Cloudinary** ou **Firebase Storage**.
  * O serviço de armazenamento devolverá uma URL de texto segura.
  * O **MongoDB** salvará exclusivamente a string dessa URL no documento do evento ou foto (`imagemUrl: "https://..."`), deixando o banco de dados leve e escalável.

---

##  Próximos Passos na Execução:
- [ ] Criar conta gratuita no Cloudinary.
- [ ] Limpar arquivos pesados do diretório `/public`.
- [ ] Converter mídias fixas restantes para `.webp`.