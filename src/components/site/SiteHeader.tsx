"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { links } from "@/lib/links";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Program", href: "/#program" },
  { label: "Cara Belajar", href: "/#journey" },
  { label: "Karya Siswa", href: "/#projects" },
  { label: "FAQ", href: "/#faq" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Temukan Minat & Bakat Anak", href: "/quiz" },
] as const;

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(16,20,24,0.08)] bg-[rgba(251,251,247,0.75)] backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-3 relative z-50">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="grid size-9 place-items-center rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--border)] shadow-[var(--shadow-sm)] overflow-hidden">
            <span className="flex items-center justify-center" aria-hidden>
              <Image src="/favicon.png" alt="Edugenzi logo" width={24} height={24} />
            </span>
          </span>
          <span className="text-[var(--brand)]">
            Edu<span className="text-[var(--brand-3)]">genzi</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-sm font-semibold text-[var(--muted)] md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[var(--ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ButtonLink
              href={links.consultation}
              external
              variant="primary"
              size="sm"
            >
              Chat via WhatsApp
            </ButtonLink>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-center min-h-[48px] min-w-[48px]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full h-[calc(100vh-64px)] bg-white border-t border-[rgba(16,20,24,0.08)] flex flex-col md:hidden z-40 overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col px-6 py-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-5 text-lg font-semibold text-slate-800 border-b border-slate-100 last:border-0 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="px-6 pb-12 mt-auto">
            <ButtonLink
              href={links.consultation}
              external
              variant="primary"
              size="lg"
              className="w-full shadow-md font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Chat via WhatsApp
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
