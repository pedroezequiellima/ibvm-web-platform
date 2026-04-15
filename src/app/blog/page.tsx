//blog page aqui é onde vamos mostrar os posts do blog, usando o componente PostCard que criamos para cada post.
import LiveFloat from "@/components/LiveFloat";
import PostCard from "@/components/PostCard";
import EventCard from "@/components/EventCard";

export const metadata = {
  title: "Blog - IGREJA BATISTA DE VILA MARCELA",
  description: "Fique por dentro das últimas notícias, eventos e reflexões da IBVM. Nosso blog é o espaço onde compartilhamos histórias inspiradoras, mensagens edificantes e informações relevantes para a nossa comunidade. Acompanhe-nos para se manter conectado e informado sobre tudo o que acontece na nossa igreja.",
}

export default function blog_page() {
    return (

      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-24">
        <h1 className="mb-10 text-4xl font-bold text-gray-900">Meu Blog</h1>
        {/* Aqui usamos o componente que criamos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PostCard />
          <PostCard />
          <PostCard />
          <br />
          <EventCard 
            titulo="GC - Grupo de Conexão"
            imagem="/pastor.jpg" // Foto do pastor que você enviou
            diaMes="25"
            mesAno="Dez. 2024"
            local="Igreja Batista de Vila Marcela"
            descricao="Um tempo precioso de aprendizado e edificação para o seu lar com nosso pastor."
            linkInscricao="https://forms.gle/exemploInscricao" // Pode ser um link externo!
            ></EventCard>
          
          <LiveFloat />
        </div>

      </main>
      
    )
}