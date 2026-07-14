import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { programs } from "@/content/programs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

const programImages: Record<string, string> = {
  "coding-ai": "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
  "graphic-design-3d": "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
  "robotics-iot": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  "public-speaking": "https://images.unsplash.com/photo-1475721025599-fac923df24c5?q=80&w=800&auto=format&fit=crop"
};

export function ProgramsShowcase() {
  return (
    <section id="program" className="mt-24 scroll-mt-24 lg:mt-32">
      <Container>
        <div className="flex flex-col gap-10">
          <ScrollReveal direction="left">
            <SectionHeading
              eyebrow="Program pilihan"
              color="yellow"
              title="Pilih program sesuai minat & bakat"
              description="Setiap program dirancang lewat proyek nyata, supaya siswa tidak cuma paham konsep, tapi juga tahu cara memakainya."
            />
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {programs.map((p, idx) => {
              const colors = ["amber", "cream"] as const;
              const color = colors[idx % colors.length];
              
              const textColors = {
                amber: "text-amber-600",
                cream: "text-amber-700"
              };
              const accentText = textColors[color];

              return (
                <ScrollReveal 
                  key={p.slug} 
                  direction={idx % 2 === 0 ? "left" : "right"}
                  className="h-full"
                >
                  <Card className="group overflow-hidden flex flex-col h-full" color={color}>
                    {/* Media Header (Image) */}
                    <div className="relative h-48 sm:h-56 w-full overflow-hidden border-b border-[var(--border)]">
                      <Image 
                        src={programImages[p.slug]}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Content Body */}
                    <div className="flex flex-col flex-grow p-6 sm:p-7">
                      <div className="mb-4">
                        <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${accentText}`}>Program</div>
                        <h3 className="font-[var(--font-display)] text-2xl tracking-tight text-[var(--ink)]">
                          {p.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] line-clamp-3">
                          {p.description}
                        </p>
                      </div>

                      <div className="mt-auto pt-5 border-t border-[var(--border)]/50 flex flex-wrap items-center gap-3">
                        <Link
                          href={`/programs/${p.slug}`}
                          className={`inline-flex items-center gap-2 text-sm font-semibold hover:underline ${accentText}`}
                        >
                          Lihat detail program <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

