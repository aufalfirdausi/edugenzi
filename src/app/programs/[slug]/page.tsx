import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Card, type CardColor } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { links } from "@/lib/links";
import { programBySlug, programs, type Program } from "@/content/programs";

type Props = {
  params: Promise<{ slug: Program["slug"] }>;
};

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = programBySlug[slug];
  if (!program) return {};

  return {
    title: program.title,
    description: program.description,
  };
}

function BulletCard({ title, items, color = "cream" }: { title: string; items: string[]; color?: CardColor }) {
  return (
    <Card className="p-5 sm:p-6" color={color}>
      <div className="text-base font-semibold text-[var(--ink)]">{title}</div>
      <ul className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--ink)]" aria-hidden />
            {it}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = programBySlug[slug];
  if (!program) return notFound();

  return (
    <div className="pb-16">
      <section className="pt-10 sm:pt-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(16,20,24,0.06)] px-3 py-1 text-xs font-semibold text-[var(--muted)] ring-1 ring-[rgba(16,20,24,0.08)]">
                <span className="size-1.5 rounded-full bg-[var(--brand)]" aria-hidden />
                Program Edugenzi
              </div>
              <h1 className="mt-4 font-[var(--font-display)] text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
                {program.title}
              </h1>
              <p className="mt-3 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                {program.tagline}
              </p>
              <p className="mt-4 max-w-prose text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                {program.description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={links.consultation} external size="lg">
                  Konsultasi via WhatsApp
                  <span aria-hidden>→</span>
                </ButtonLink>
              </div>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Chat langsung ke <span className="font-semibold text-[var(--ink)]">{links.whatsappNumberDisplay}</span>
              </p>
            </div>

            <div className="lg:col-span-5">
              <Card className="relative overflow-hidden">
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_450px_at_20%_10%,rgba(79,25,100,0.14),transparent_60%)]"
                  aria-hidden
                />
                <div className="relative p-6">
                  <div className="text-sm font-semibold text-[var(--ink)]">Contoh output belajar</div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    Gunakan ini sebagai tempat menampilkan karya siswa nyata (foto/screenshot) untuk meningkatkan trust
                    dan conversion.
                  </p>

                  <div className="mt-5 grid gap-3">
                    {program.projectIdeas.map((idea) => (
                      <div
                        key={idea}
                        className="rounded-2xl bg-[rgba(255,255,255,0.70)] p-4 text-sm text-[var(--muted)] ring-1 ring-[rgba(16,20,24,0.08)]"
                      >
                        <div className="text-xs font-semibold text-[var(--muted)]">Proyek</div>
                        <div className="mt-1 font-semibold text-[var(--ink)]">{idea}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-14 sm:mt-16">
        <Container>
          <SectionHeading
            eyebrow="Ringkasan program"
            title="Yang akan didapat anak dari program ini"
            description="Susunan ini dibuat untuk membantu orang tua menilai kecocokan program dengan cepat."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-12">
            <div className="grid gap-4 lg:col-span-7">
              <BulletCard title="Outcome" items={program.outcomes} />
              <BulletCard title="Highlight pembelajaran" items={program.highlights} />
            </div>
            <div className="lg:col-span-5">
              <BulletCard title="Cocok untuk" items={program.whoFor} />
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-16 sm:mt-20">
        <Container>
          <Card className="p-6 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <h2 className="font-[var(--font-display)] text-3xl tracking-tight text-[var(--ink)]">
                  Masih ragu? Konsultasi dulu biar jelas.
                </h2>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  Konsultasi membantu menentukan level, jadwal, dan program yang paling sesuai dengan minat anak.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:col-span-5 lg:justify-end">
                <ButtonLink href={links.consultation} external size="lg">
                  Konsultasi via WhatsApp
                  <span aria-hidden>→</span>
                </ButtonLink>
                <p className="text-sm text-[var(--muted)] lg:text-right">{links.whatsappNumberDisplay}</p>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
