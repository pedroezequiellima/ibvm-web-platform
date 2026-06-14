// middleware.ts
// Runtime: Edge
// Protege rotas administrativas usando verificação JWT (Firebase session cookie)
// Instruções:
// - Substitua SESSION_COOKIE_NAME pelo nome exato do cookie HttpOnly criado no servidor.
// - Defina a variável de ambiente FIREBASE_PROJECT_ID com seu projectId do Firebase.
// - Este middleware usa `jose` para validação de JWT contra o JWKS público do Firebase.
//   Instale: `npm install jose` ou `yarn add jose`.

import { NextRequest, NextResponse } from "next/server";
import { jwtVerify, createRemoteJWKSet, type JWTVerifyOptions } from "jose";

export const runtime = "edge";

/**
 * CONFIGURAÇÕES — personalize antes de colar:
 *
 * - SESSION_COOKIE_NAME: coloque aqui o nome exato do cookie HttpOnly que sua aplicação escreve no login.
 * - FIREBASE_PROJECT_ID: variável de ambiente (process.env.FIREBASE_PROJECT_ID) com o projectId do Firebase.
 */
const SESSION_COOKIE_NAME = process.env.NEXT_PUBLIC_FIREBASE_SESSION_COOKIE_NAME || ""; // <-- substitua por ex: '__session' ou 'session'
const FIREBASE_PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || ""; // <-- certifique-se de definir esta env var

// JWKS remoto do Firebase/Google para tokens emitidos por securetoken@system.gserviceaccount.com
const FIREBASE_JWKS_URL =
  "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com";

// Criamos o Remote JWK Set (usa fetch internamente). Declarado no topo para caching entre invocações.
const JWKS = createRemoteJWKSet(new URL(FIREBASE_JWKS_URL));

// Validações recomendadas para tokens do Firebase:
function getVerifyOptions(): JWTVerifyOptions {
  const issuer = `https://securetoken.google.com/${FIREBASE_PROJECT_ID}`;
  return {
    issuer,
    audience: FIREBASE_PROJECT_ID,
  };
}

/**
 * Helper para construir resposta de redirect para páginas, preservando callbackUrl.
 */
function redirectToLoginWithCallback(req: NextRequest): NextResponse {
  const loginUrl = new URL("/login", req.url);
  const callback = req.nextUrl.pathname + req.nextUrl.search;
  loginUrl.searchParams.set("callbackUrl", callback);
  return NextResponse.redirect(loginUrl);
}

/**
 * Helper para resposta de API não autorizada (JSON 401).
 */
function unauthorizedApiResponse(): NextResponse {
  return NextResponse.json(
    { error: "Unauthorized", message: "Autenticação necessária." },
    { status: 401 }
  );
}

/**
 * Verifica o cookie de sessão Firebase (JWT-like) usando jose + JWKS remoto.
 * - Retorna o payload validado em caso de sucesso.
 * - Lança em caso de falha.
 */
async function verifySessionCookie(token: string) {
  if (!FIREBASE_PROJECT_ID) {
    throw new Error(
      "FIREBASE_PROJECT_ID não configurado. Defina a variável de ambiente FIREBASE_PROJECT_ID."
    );
  }
  const opts = getVerifyOptions();
  const { payload } = await jwtVerify(token, JWKS, opts);
  return payload;
}

/**
 * Middleware principal: roda apenas nas rotas configuradas no `config.matcher` abaixo.
 */
export async function middleware(req: NextRequest) {
  try {
    // 1) Verificar presença do cookie
    const cookie = req.cookies.get(SESSION_COOKIE_NAME);
    const sessionToken = cookie?.value;

    if (!sessionToken) {
      // Sem cookie -> não autenticado
      if (req.nextUrl.pathname.startsWith("/api/")) {
        return unauthorizedApiResponse();
      }
      return redirectToLoginWithCallback(req);
    }

    // 2) Verificação otimizada no Edge: usamos jose + JWKS remoto (não usa Firebase Admin)
    try {
      await verifySessionCookie(sessionToken);
      return NextResponse.next();
    } catch (verifyErr) {
      if (req.nextUrl.pathname.startsWith("/api/")) {
        return unauthorizedApiResponse();
      }
      return redirectToLoginWithCallback(req);
    }
  } catch (err) {
    // Em caso de erro inesperado: falhar fechado (deny)
    if (req.nextUrl.pathname.startsWith("/api/")) {
      return unauthorizedApiResponse();
    }
    return redirectToLoginWithCallback(req);
  }
}

/**
 * Matcher do Middleware
 *
 * - Rigorosamente lista as rotas administrativas a proteger.
 * - Não incluímos _next/static, _next/image ou arquivos públicos, mantendo o middleware fora de assets.
 */
export const config = {
  matcher: [
    "/admin",
    "/admin/:path*",
    "/eventos/admin",
    "/eventos/admin/:path*",
    "/galeria/admin",
    "/galeria/admin/:path*",
    "/api/admin/:path*",
  ],
};
