import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { links } from "@/lib/links";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-20">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Text Content (Moved to Right) */}
        <ScrollReveal direction="left" className="lg:col-span-6 order-2 lg:order-2">

          <div className="flex flex-col items-center gap-4 lg:items-start text-center lg:text-left">
            <h1 className=" mt-5 text-4xl font-extrabold text-[var(--brand)] tracking-tight sm:text-5xl drop-shadow-[0_4px_16px_rgba(255,255,255,1)]">
              Edu<span className="text-[var(--brand-3)]">genzi</span>{" "}
              <span className="font-[var(--font-display)] text-3xl leading-snug tracking-tight text-[var(--ink)] sm:text-4xl block mt-2">
                Belajar Sambil Berkarya: Coding, Desain, Robotik & Public Speaking
              </span>
            </h1>
          </div>

          <p className="mt-4 max-w-prose text-base leading-relaxed text-[var(--ink)] sm:text-lg text-center lg:text-left drop-shadow-[0_2px_12px_rgba(255,255,255,1)] font-medium">
            Edugenzi adalah tempat belajar teknologi yang dirancang lewat metode belajar sambil praktik. Setiap pertemuan, siswa membuat karya nyata — bukan sekadar mengerjakan soal — sehingga progres belajar langsung terlihat.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center justify-center lg:justify-start">
            <ButtonLink href={links.consultation} external size="lg" className="shadow-2xl">
              Konsultasi via WhatsApp
              <span aria-hidden>→</span>
            </ButtonLink>
          </div>
        </ScrollReveal>

        {/* Mascot Image (Moved to Left) */}
        <ScrollReveal direction="right" className="relative lg:col-span-6 order-1 lg:order-1">
          <div className="relative overflow-hidden rounded-[calc(var(--radius)+6px)] bg-white/40 backdrop-blur-md ring-1 ring-white/60 shadow-2xl">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_450px_at_20%_10%,rgba(34,197,94,0.15),transparent_55%),radial-gradient(700px_450px_at_80%_30%,rgba(109,40,217,0.12),transparent_55%),radial-gradient(600px_300px_at_60%_80%,rgba(234,179,8,0.10),transparent_55%)]"
              aria-hidden
            />
            <Image
              src="/mascot.jpg"
              alt="Edugenzi Mascot"
              width={800}
              height={600}
              priority
              className="relative w-full h-auto object-cover aspect-[4/3] mix-blend-multiply"
            />
          </div>

          <div
            className="pointer-events-none absolute -left-14 -top-14 hidden size-40 rounded-full bg-[var(--brand-2)] opacity-30 blur-[60px] lg:block motion-safe:animate-morph [animation-duration:12s]"
            aria-hidden
          />
        </ScrollReveal>
      </Container>
    </section>
  );
}
