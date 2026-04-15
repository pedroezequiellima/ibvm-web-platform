'use client'
import { Youtube } from 'lucide-react'

export default function LiveFloat() {
  return (
    <div className="fixed right-6 bottom-8 z-50 flex flex-col gap-3">
      {/* Botão de Live Principal */}
      <a
        href="https://www.youtube.com/@igrejabatistavilamarcela/live" // Substitua pelo seu link
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-red-600 text-white px-5 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform group"
      >
        <span className="font-bold text-sm hidden group-hover:block">ASSISTIR LIVE</span>
        <div className="relative flex">
            <Youtube size={24} />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
        </div>
      </a>
    </div>
  )
}