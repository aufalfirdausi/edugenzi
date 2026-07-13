import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { links } from "@/lib/links";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-20">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Text Content (Moved to Right) */}
        <div className="lg:col-span-6 order-2 lg:order-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(16,20,24,0.06)] px-3 py-1 text-xs font-semibold text-[var(--muted)] ring-1 ring-[rgba(16,20,24,0.08)]">
            <span
              className="size-1.5 rounded-full bg-[var(--brand)]"
              aria-hidden
            />
            Kursus Teknologi & Kreativitas (Usia 12-18 tahun)
          </div>

          <div className="flex flex-col items-center gap-4 lg:items-start text-center lg:text-left">
            <h1 className=" mt-5 text-4xl font-extrabold text-[var(--brand)] tracking-tight sm:text-5xl">
              Edu<span className="text-[var(--brand-3)]">genzi</span>{" "}
              <span className="font-[var(--font-display)] text-3xl leading-[1.02] tracking-tight text-[var(--ink)] sm:text-4xl block mt-2">
                Belajar Sambil Berkarya: Coding, Desain, Robotik & Public Speaking
              </span>
            </h1>
          </div>

          <p className="mt-4 max-w-prose text-base leading-relaxed text-[var(--ink)] sm:text-lg text-center lg:text-left">
            Edugenzi adalah tempat belajar teknologi yang dirancang lewat metode belajar sambil praktik. Setiap pertemuan, siswa membuat karya nyata — bukan sekadar mengerjakan soal — sehingga progres belajar langsung terlihat.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center justify-center lg:justify-start">
            <ButtonLink href={links.consultation} external size="lg">
              Konsultasi via WhatsApp
              <span aria-hidden>→</span>
            </ButtonLink>
          </div>

          <p className="mt-3 text-sm text-[var(--muted)] text-center lg:text-left">
            WhatsApp konsultasi:{" "}
            <span className="font-semibold text-[var(--ink)]">
              {links.whatsappNumberDisplay}
            </span>
          </p>
        </div>

        {/* Mascot Image (Moved to Left) */}
        <div className="relative lg:col-span-6 animate-float order-1 lg:order-1">
          <div className="relative overflow-hidden rounded-[calc(var(--radius)+6px)] bg-white/40 backdrop-blur-md ring-1 ring-white/60 shadow-2xl">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_450px_at_20%_10%,rgba(34,197,94,0.15),transparent_55%),radial-gradient(700px_450px_at_80%_30%,rgba(109,40,217,0.12),transparent_55%),radial-gradient(600px_300px_at_60%_80%,rgba(234,179,8,0.10),transparent_55%)]"
              aria-hidden
            />
            <img
              src="/mascot.jpg"
              alt="Edugenzi Mascot"
              className="relative w-full object-cover aspect-[4/3] mix-blend-multiply"
            />
          </div>

          <div
            className="pointer-events-none absolute -left-14 -top-14 hidden size-40 rounded-full bg-[var(--brand-2)] opacity-30 blur-[60px] lg:block animate-morph"
            style={{ animationDuration: '12s' }}
            aria-hidden
          />
        </div>
      </Container>
    </section>
  );
}
