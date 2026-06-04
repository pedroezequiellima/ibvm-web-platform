import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Por favor, defina a variável MONGODB_URI no seu arquivo .env.local');
}

const uri = process.env.MONGODB_URI;
const options = {}; // Deixamos limpo aqui para evitar conflitos de versão de API estável

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // No modo desenvolvimento, usamos uma variável global para não estourar o limite de conexões do MongoDB Atlas ao salvar arquivos
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // Em produção (Vercel), cria uma conexão isolada por requisição
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;