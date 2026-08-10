import { NextRequest, NextResponse } from "next/server";
import { jwtVerify, createRemoteJWKSet, type JWTVerifyOptions } from "jose";



/**
 * CONFIGURAÇÕES
 */
const SESSION_COOKIE_NAME =
  process.env.NEXT_PUBLIC_FIREBASE_SESSION_COOKIE_NAME || "ibvm-auth-cookie";

const FIREBASE_PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "";

// ✅ Adicionada a lista de emails permitidos (Whitelist)
const ALLOWED_EMAILS = [
  "pedroezequiel.limaf@gmail.com",
  "igrejabatistavilamarcela@gmail.com",
];

// JWKS remoto do Firebase/Google
const FIREBASE_JWKS_URL =
  "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com";

const JWKS = createRemoteJWKSet(new URL(FIREBASE_JWKS_URL));

function getVerifyOptions(): JWTVerifyOptions {
  const issuer = `https://securetoken.google.com/${FIREBASE_PROJECT_ID}`;
  return {
    issuer,
    audience: FIREBASE_PROJECT_ID,
  };
}

function redirectToLoginWithCallback(req: NextRequest): NextResponse {
  const loginUrl = new URL("/login", req.url);
  const callback = req.nextUrl.pathname + req.nextUrl.search;
  loginUrl.searchParams.set("callbackUrl", callback);
  return NextResponse.redirect(loginUrl);
}

function unauthorizedApiResponse(): NextResponse {
  return NextResponse.json(
    { error: "Unauthorized", message: "Autenticação necessária ou sem permissão." },
    { status: 401 }
  );
}

async function verifySessionCookie(token: string) {
  if (!FIREBASE_PROJECT_ID) {
    throw new Error(
      "FIREBASE_PROJECT_ID não configurado. Defina a variável de ambiente NEXT_PUBLIC_FIREBASE_PROJECT_ID."
    );
  }
  const opts = getVerifyOptions();
  // jwtVerify retorna o header e o payload (que contém os dados do usuário, incluindo o email)
  const { payload } = await jwtVerify(token, JWKS, opts);
  return payload;
}

/**
 * Middleware Principal
 */
export async function proxy(req: NextRequest) {
  try {
    // 1) Verificar presença do cookie
    const cookie = req.cookies.get(SESSION_COOKIE_NAME);
    const sessionToken = cookie?.value;

    if (!sessionToken) {
      if (req.nextUrl.pathname.startsWith("/api/")) {
        return unauthorizedApiResponse();
      }
      return redirectToLoginWithCallback(req);
    }

    // 2) Validação do JWT com Firebase JWKS e verificação de Email
    try {
      const payload = await verifySessionCookie(sessionToken);
      
      // ✅ Extrai o email do payload do token do Firebase
      const userEmail = payload.email as string | undefined;

      // ✅ Verifica se o email existe e se está na nossa lista de permitidos
      if (!userEmail || !ALLOWED_EMAILS.includes(userEmail)) {
        console.log(`Acesso bloqueado no middleware para o email: ${userEmail || 'desconhecido'}`);
        
        if (req.nextUrl.pathname.startsWith("/api/")) {
          return unauthorizedApiResponse();
        }
        
        // Se o email não for um dos dois, joga de volta pro login
        return redirectToLoginWithCallback(req); 
      }

      // Se passou por tudo, libera o acesso!
      return NextResponse.next();
      
    } catch (verifyErr) {
      if (req.nextUrl.pathname.startsWith("/api/")) {
        return unauthorizedApiResponse();
      }
      return redirectToLoginWithCallback(req);
    }
  } catch (err) {
    if (req.nextUrl.pathname.startsWith("/api/")) {
      return unauthorizedApiResponse();
    }
    return redirectToLoginWithCallback(req);
  }
}

/**
 * Rotas que passarão pelo Middleware
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