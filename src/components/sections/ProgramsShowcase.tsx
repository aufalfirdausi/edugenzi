import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { programs } from "@/content/programs";

export function ProgramsShowcase() {
  return (
    <section id="program" className="mt-16 scroll-mt-24 sm:mt-20">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Program pilihan"
            title="Pilih program sesuai minat & bakat"
            description="Setiap program dirancang untuk mengembangkan kemampuan masa depan melalui pembelajaran yang seru dan berbasis proyek."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {programs.map((p, idx) => {
              const colors = ["cream", "purple", "green", "amber"] as const;
              const color = colors[idx % colors.length];
              return (
                <Card key={p.slug} className="group overflow-hidden" color={color}>
                  <div className="p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold text-[var(--muted)]">Program</div>
                        <h3 className="mt-2 font-[var(--font-display)] text-2xl tracking-tight text-[var(--ink)]">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{p.description}</p>
                      </div>
                      <div
                        className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[var(--border)] ring-1 ring-[var(--border)]"
                        aria-hidden
                      >
                        <span className="text-[var(--ink)]">↗</span>
                      </div>
                    </div>

                    <ul className="mt-5 grid gap-2 text-sm text-[var(--muted)] sm:grid-cols-2">
                      {p.highlights.slice(0, 4).map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--ink)]" aria-hidden />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/programs/${p.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] hover:underline"
                      >
                        Lihat detail program <span aria-hidden>→</span>
                      </Link>
                      <span className="text-xs text-[var(--muted)]">•</span>
                      <span className="text-xs text-[var(--muted)]">{p.tagline}</span>
                    </div>
                  </div>
                  <div
                    className="h-1 w-full bg-[linear-gradient(90deg,var(--ink),transparent)] opacity-25"
                    aria-hidden
                  />
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

