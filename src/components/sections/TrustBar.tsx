import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { links } from "@/lib/links";

export function TrustBar() {
  return (
    <section className="mt-20 pb-10 overflow-hidden">
      <Container className="min-w-0">
        <ScrollReveal direction="up">
          <div className="flex flex-row items-stretch drop-shadow-xl min-w-0">

            {/* Left Teal Area */}
            <div className="flex-1 bg-[#FEA82F] rounded-[2rem] sm:rounded-r-none p-3.5 sm:p-8 lg:p-16 flex flex-col justify-center items-start gap-3 sm:gap-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

              <div className="flex flex-col items-start z-10 gap-3 sm:gap-8 w-full">
                <div className="font-[var(--font-display)] tracking-tighter shrink-0 text-left">
                  <span className="text-[#F5F1E6] text-lg sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl font-bold drop-shadow-sm leading-tight">
                    Daftar Kelas Online <br className="hidden sm:block" /> sekarang
                  </span>
                </div>

                <Link
                  href={links.consultation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 sm:px-8 py-2 sm:py-3.5 text-[10px] sm:text-base font-bold rounded-full bg-white text-[#FEA82F] hover:bg-orange-50 hover:scale-105 transition-all shadow-lg w-fit"
                >
                  Konsultasi via WhatsApp
                </Link>
              </div>
            </div>

            {/* Right Cream Area */}
            <div className="bg-[#F5F1E6] rounded-[2rem] -ml-6 sm:-ml-12 z-10 p-3 sm:p-6 lg:p-12 flex flex-col justify-center w-[45%] sm:w-[380px] lg:w-[420px] relative shadow-[-10px_0_30px_rgba(0,0,0,0.1)]">
              <Link
                href={links.consultation}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 sm:top-10 sm:right-10 text-[#FEA82F] hover:scale-110 hover:text-orange-500 transition-all cursor-pointer"
                aria-label="Konsultasi via WhatsApp"
              >
                <ArrowUpRight className="size-4 sm:size-10" strokeWidth={2.5} />
              </Link>
              <p className="text-[#FEA82F] text-xs sm:text-base md:text-lg lg:text-3xl font-bold leading-[1.1] tracking-tight mt-5 sm:mt-12 mb-1 sm:mb-4 pr-3 sm:pr-10">
                Ambil langkah pertama menuju masa depan, <br className="hidden sm:block" />Dengan mendaftar di Edugenzi Academy
              </p>
            </div>

          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
