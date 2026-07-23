import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { links } from "@/lib/links";

const nav = [
  { label: "Program", href: "/#program" },
  { label: "Cara Belajar", href: "/#journey" },
  { label: "Karya Siswa", href: "/#projects" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "FAQ", href: "/#faq" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(16,20,24,0.08)] bg-[rgba(251,251,247,0.75)] backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
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

        <nav className="hidden items-center gap-6 text-sm font-semibold text-[var(--muted)] md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[var(--ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={links.consultation}
            external
            variant="primary"
            size="sm"
          >
            Chat via WhatsApp
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
