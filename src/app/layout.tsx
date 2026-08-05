import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IGREJA BATISTA DE VILA MARCELA",
  description: "O AMOR DE CRISTO TRANSFORMANDO VIDAS"
};


//O layout.tsx é como a moldura de um quadro ou a estrutura de uma casa.
// No Next.js (App Router), ele é o arquivo responsável por definir tudo o que deve ser persistente e compartilhado entre todas as páginas do seu site.

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fffbf6]`}
      >
        <Navbar />

        {/* O container principal que torna tudo responsivo */}
          {children}
        

        <Footer />
      </body>
    </html>
  );
}
