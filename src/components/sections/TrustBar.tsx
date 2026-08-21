import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { links } from "@/lib/links";

export function TrustBar() {
  return (
    <section className="mt-20 pb-10">
      <Container>
        <ScrollReveal direction="up">
          {/* Main Container */}
          <div className="flex flex-col md:flex-row items-stretch drop-shadow-xl">

            {/* Left Teal Area */}
            <div className="flex-1 bg-[#FEA82F] rounded-[2rem] md:rounded-r-none p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-6 md:gap-10 relative overflow-hidden">
              {/* Noise Texture (Optional, simulates the paper/grainy look in the image) */}
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

              {/* Left Content Area */}
              <div className="flex flex-col items-center md:items-start z-10 gap-6 md:gap-8">
                {/* Huge Text */}
                <div className="font-[var(--font-display)] font-extrabold tracking-tighter shrink-0 text-center md:text-left">
                  <span className="text-[#F5F1E6] text-4xl md:text-5xl lg:text-6xl drop-shadow-sm">Daftar Kelas Online <br /> sekarang</span>
                </div>
                
                {/* CTA Button */}
                <Link
                  href={links.consultation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold rounded-full bg-white text-[#FEA82F] hover:bg-orange-50 hover:scale-105 transition-all shadow-lg"
                >
                  Konsultasi via WhatsApp
                </Link>
              </div>
            </div>

            {/* Right Cream Area (Overlaps slightly on desktop) */}
            <div className="bg-[#F5F1E6] rounded-[2rem] md:-ml-12 z-10 p-8 md:p-10 lg:p-12 flex flex-col justify-center min-w-[300px] md:w-[380px] lg:w-[420px] relative shadow-[-10px_0_30px_rgba(0,0,0,0.1)]">
              {/* Arrow Icon Link */}
              <Link 
                href={links.consultation}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-8 right-8 md:top-10 md:right-10 text-[#FEA82F] hover:scale-110 hover:text-orange-500 transition-all cursor-pointer"
                aria-label="Konsultasi via WhatsApp"
              >
                <ArrowUpRight size={40} strokeWidth={2.5} />
              </Link>

              {/* Right Text */}
              <p className="text-[#FEA82F] text-2xl md:text-3xl font-bold leading-[1.1] tracking-tight mt-12 mb-4">
                Ambil langkah pertama menuju masa depan, <br />Dengan mendaftar di Edugenzi Academy
              </p>
            </div>

          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

