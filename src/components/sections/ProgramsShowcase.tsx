import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { programs } from "@/content/programs";
const programImages: Record<string, string> = {
  "coding-ai": "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
  "graphic-design-3d": "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
  "robotics-iot": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  "public-speaking": "https://images.unsplash.com/photo-1475721025599-fac923df24c5?q=80&w=800&auto=format&fit=crop"
};

export function ProgramsShowcase() {
  return (
    <section id="program" className="mt-16 scroll-mt-24 sm:mt-20">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Program pilihan"
            color="green"
            title="Pilih program sesuai minat & bakat"
            description="Setiap program dirancang lewat proyek nyata, supaya siswa tidak cuma paham konsep, tapi juga tahu cara memakainya."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {programs.map((p, idx) => {
              const colors = ["green", "purple", "amber", "cream"] as const;
              const color = colors[idx % colors.length];
              
              // Helper to map color to actual tailwind text classes for accents
              const textColors = {
                green: "text-[var(--brand)]",
                purple: "text-[var(--brand-2)]",
                amber: "text-[var(--brand-3)]",
                cream: "text-[var(--ink)]"
              };
              const accentText = textColors[color];
              const bgColors = {
                green: "bg-[var(--brand)]/10",
                purple: "bg-[var(--brand-2)]/10",
                amber: "bg-[var(--brand-3)]/10",
                cream: "bg-black/5"
              };
              const accentBg = bgColors[color];

              return (
                <Card key={p.slug} className="group overflow-hidden flex flex-col h-full" color={color}>
                  {/* Media Header (Image) */}
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden border-b border-[var(--border)]">
                    <img 
                      src={programImages[p.slug]} 
                      alt={p.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

