import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { links } from "@/lib/links";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 sm:pt-12 lg:pt-20">
      <Container className="grid grid-cols-12 items-center gap-3 sm:gap-8 lg:gap-12">
        
        {/* Text Content */}
        <ScrollReveal direction="left" className="col-span-7 lg:col-span-6 order-1 flex flex-col z-10">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[var(--brand)] tracking-tight drop-shadow-[0_4px_16px_rgba(255,255,255,1)]">
              Edu<span className="text-[var(--brand-3)]">genzi</span>{" "}
              <span className="font-[var(--font-display)] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-snug tracking-tight text-[var(--ink)] block mt-1 sm:mt-2">
                Belajar Sambil Berkarya: Coding, Desain, Robotik & Public Speaking
              </span>
            </h1>
          </div>

          <p className="mt-2 sm:mt-4 text-[11px] sm:text-sm md:text-base lg:text-lg leading-snug text-[var(--ink)] drop-shadow-[0_2px_12px_rgba(255,255,255,1)] font-medium line-clamp-3 sm:line-clamp-none pr-1 lg:pr-0">
            Edugenzi adalah tempat belajar teknologi yang dirancang lewat metode belajar sambil praktik. Setiap pertemuan, siswa membuat karya nyata — bukan sekadar mengerjakan soal — sehingga progres belajar langsung terlihat.
          </p>

          <div className="mt-3 sm:mt-7 flex flex-row items-center justify-start w-full gap-3">
            <ButtonLink href={links.consultation} external size="sm" className="shadow-xl sm:shadow-2xl sm:text-base text-[10px] px-3 py-1.5 sm:px-6 sm:py-3 w-fit">
              Konsultasi via WhatsApp
              <span aria-hidden>→</span>
            </ButtonLink>
          </div>
        </ScrollReveal>

        {/* Mascot Image */}
        <ScrollReveal direction="right" className="relative col-span-5 lg:col-span-6 order-2 w-full mx-auto">
          <div className="relative overflow-hidden rounded-[calc(var(--radius)+6px)] bg-white/40 backdrop-blur-md ring-1 ring-white/60 shadow-lg sm:shadow-2xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_450px_at_20%_10%,rgba(34,197,94,0.15),transparent_55%),radial-gradient(700px_450px_at_80%_30%,rgba(109,40,217,0.12),transparent_55%),radial-gradient(600px_300px_at_60%_80%,rgba(234,179,8,0.10),transparent_55%)]" aria-hidden />
            <Image
              src="/hero-section.png"
              alt="Edugenzi Student"
              width={13250}
              height={8850}
              priority
              className="relative w-full h-auto object-contain mix-blend-multiply"
            />
          </div>
          <div className="pointer-events-none absolute -left-6 -top-6 hidden size-24 sm:size-40 rounded-full bg-[var(--brand-2)] opacity-30 blur-[40px] lg:block motion-safe:animate-morph [animation-duration:12s]" aria-hidden />
        </ScrollReveal>
        
      </Container>
    </section>
  );
}
