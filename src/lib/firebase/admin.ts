import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!projectId || !clientEmail || !privateKey) {
  throw new Error(
    'Firebase Admin config inválida. Defina FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL e FIREBASE_PRIVATE_KEY.'
  );
}

if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });
}


const adminAuth = getAuth();
const adminDb = getFirestore();
const FIREBASE_SESSION_COOKIE_NAME = process.env.FIREBASE_SESSION_COOKIE_NAME ?? 'session';
const FIREBASE_SESSION_COOKIE_MAX_AGE = Number(process.env.FIREBASE_SESSION_COOKIE_MAX_AGE ?? 60 * 60 * 24 * 5); // 5 dias

export { adminAuth, adminDb, FIREBASE_SESSION_COOKIE_NAME, FIREBASE_SESSION_COOKIE_MAX_AGE };
