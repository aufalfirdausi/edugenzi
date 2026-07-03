import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { links } from "@/lib/links";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-20">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="relative lg:col-span-6">
          <div className="relative overflow-hidden rounded-[calc(var(--radius)+6px)] bg-[var(--surface)] ring-1 ring-[rgba(16,20,24,0.10)] shadow-[var(--shadow-md)]">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_450px_at_20%_10%,rgba(34,197,94,0.20),transparent_55%),radial-gradient(700px_450px_at_80%_30%,rgba(109,40,217,0.16),transparent_55%),radial-gradient(600px_300px_at_60%_80%,rgba(234,179,8,0.12),transparent_55%)]"
              aria-hidden
            />
            <img
              // src="/hero-edugenzi.jpg"
              src="hero.png"
              alt="Edugenzi Hero"
              className="relative w-full object-cover aspect-[4/3]"
            />
          </div>

          <div
            className="pointer-events-none absolute -left-14 -top-14 hidden size-40 rounded-full bg-[rgba(109,40,217,0.18)] blur-2xl lg:block"
            aria-hidden
          />
        </div>

        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(16,20,24,0.06)] px-3 py-1 text-xs font-semibold text-[var(--muted)] ring-1 ring-[rgba(16,20,24,0.08)]">
            <span
              className="size-1.5 rounded-full bg-[var(--brand)]"
              aria-hidden
            />
            Kursus STEAM untuk usia 7–17 tahun
          </div>

          <div className="flex flex-col items-center gap-4">
            <h1 className=" mt-5 text-4xl font-extrabold text-[var(--brand)] tracking-tight sm:text-5xl">
              Edu<span className="text-[var(--brand-3)]">genzi</span>{" "}
              <span className="font-[var(--font-display)] text-3xl leading-[1.02] tracking-tight text-[var(--ink)] sm:text-4xl">
                Belajar Asyik, Cerdas Berkembang
              </span>
            </h1>
          </div>

          <p className="mt-4 max-w-prose text-base leading-relaxed text-black sm:text-lg">
            Edugenzi adalah ruang belajar yang interaktif dan menyenangkan. Anak
            belajar lewat proyek nyata, dibimbing instruktur profesional, dan
            progresnya terlihat lewat karya.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={links.consultation} external size="lg">
              Konsultasi via WhatsApp
              <span aria-hidden>→</span>
            </ButtonLink>
          </div>

          <p className="mt-3 text-sm text-[var(--muted)]">
            WhatsApp konsultasi:{" "}
            <span className="font-semibold text-[var(--ink)]">
              {links.whatsappNumberDisplay}
            </span>
          </p>

          <ul className="mt-8 grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2">
            <li className="flex items-start gap-2">
              <span
                className="mt-1 size-2 rounded-full bg-[var(--ink)]"
                aria-hidden
              />
              Project-Based Learning (praktik setiap pertemuan)
            </li>
            <li className="flex items-start gap-2">
              <span
                className="mt-1 size-2 rounded-full bg-[var(--ink)]"
                aria-hidden
              />
              Offline Banda Aceh & kelas online interaktif
            </li>
            <li className="flex items-start gap-2">
              <span
                className="mt-1 size-2 rounded-full bg-[var(--ink)]"
                aria-hidden
              />
              Materi relevan: Coding, AI, Desain, 3D, Robotika, IoT
            </li>
            <li className="flex items-start gap-2">
              <span
                className="mt-1 size-2 rounded-full bg-[var(--ink)]"
                aria-hidden
              />
              Sertifikat kompetensi setelah selesai program
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
