import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    n: "1",
    title: "Kenali minat & tujuan",
    desc: "Mulai dari konsultasi agar orang tua dan anak paham jalur yang paling cocok.",
  },
  {
    n: "2",
    title: "Mulai dari level yang tepat",
    desc: "Materi disesuaikan dengan usia dan pengalaman, baik untuk pemula maupun yang sudah pernah belajar.",
  },
  {
    n: "3",
    title: "Belajar lewat proyek",
    desc: "Setiap pertemuan ada praktik, agar konsep cepat dipahami dan anak punya karya nyata.",
  },
  {
    n: "4",
    title: "Portofolio & presentasi",
    desc: "Anak mempresentasikan hasil karyanya di akhir program, sebagai bukti nyata perkembangan belajarnya.",
  },
] as const;

export function LearningJourney() {
  return (
    <section id="journey" className="mt-16 scroll-mt-24 sm:mt-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <ScrollReveal direction="left">
              <SectionHeading
                eyebrow="Cara Belajar"
                color="green"
                title="Alur belajar yang jelas, progres yang terlihat"
                description="Supaya orang tua tahu persis apa yang akan dijalani anak, dari awal konsultasi sampai punya karya sendiri."
              />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-8">
            {steps.map((s, idx) => {
              return (
                <ScrollReveal key={s.n} direction={idx % 2 === 0 ? "left" : "right"} delay={idx * 100}>
                  <Card className="p-3 sm:p-6 h-full" color="green">
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                      <div className="grid size-9 sm:size-12 shrink-0 place-items-center rounded-xl sm:rounded-2xl bg-[var(--border)] font-[var(--font-display)] text-xs sm:text-base md:text-lg lg:text-xl text-[var(--ink)] ring-1 ring-[var(--border)]">
                        {s.n}
                      </div>
                      <div>
                        <div className="text-xs sm:text-base md:text-lg lg:text-xl font-semibold text-[var(--ink)] leading-tight">{s.title}</div>
                        <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-sm md:text-base lg:text-lg leading-relaxed text-[var(--muted)]">{s.desc}</p>
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
