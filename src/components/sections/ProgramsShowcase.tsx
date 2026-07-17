import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { programs } from "@/content/programs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Palette, Code, Bot, Mic } from "lucide-react";

const programIcons: Record<string, React.ReactNode> = {
  "graphic-design-3d": <Palette className="size-7" />,
  "coding-ai": <Code className="size-7" />,
  "robotics-iot": <Bot className="size-7" />,
  "public-speaking": <Mic className="size-7" />,
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

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p, idx) => (
              <ScrollReveal 
                key={p.slug} 
                direction="up"
                delay={idx * 100}
                className="h-full"
              >
                <Card className="group flex flex-col h-full p-6 sm:p-7" color="amber">
                  <div className="mb-6 inline-flex items-center justify-center size-14 rounded-2xl bg-amber-50 text-amber-600 ring-1 ring-amber-100 transition-colors group-hover:bg-amber-100">
                    {programIcons[p.slug]}
                  </div>

                  <div className="flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="font-[var(--font-display)] text-xl tracking-tight text-[var(--ink)]">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] line-clamp-4">
                        {p.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-5 border-t border-[var(--border)]/50 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/programs/${p.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:underline"
                      >
                        Lihat detail <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

