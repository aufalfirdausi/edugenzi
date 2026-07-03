import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-16">
      <div className="max-w-xl">
        <h1 className="font-[var(--font-display)] text-4xl tracking-tight text-[var(--ink)]">
          Halaman tidak ditemukan
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
          Maaf, halaman yang Anda cari tidak tersedia. Kembali ke beranda untuk melihat program Edugenzi.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" variant="primary" size="lg">
            Kembali ke beranda
          </ButtonLink>
          <Link href="/programs" className="self-center text-sm font-semibold text-[var(--muted)] hover:underline">
            Lihat semua program
          </Link>
        </div>
      </div>
    </Container>
  );
}

