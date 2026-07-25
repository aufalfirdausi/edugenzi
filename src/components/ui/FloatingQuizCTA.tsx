"use client";

import { useState } from "react";
import Link from "next/link";
import { Lightbulb, X } from "lucide-react";

export function FloatingQuizCTA() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        <Link
          href="/quiz"
          className="flex items-center gap-3 bg-[var(--brand)] text-white w-80 h-20 px-5 rounded-xl shadow-2xl transition-transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(103,157,65,0.4)]"
        >
          <div className="bg-white/20 p-2 rounded-full">
            <Lightbulb className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-sm">
            Bingung pilih kelas? Temukan potensi Anak di sini 💡
          </span>
        </Link>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-white/70 hover:text-white hover:bg-white/20 rounded-full transition-colors"
          aria-label="Tutup rekomendasi kuis"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
