import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <SectionHeading
            className="lg:col-span-4"
            eyebrow="Cara Belajar"
            title="Alur belajar yang jelas, progres yang terlihat"
            description="Supaya orang tua tahu persis apa yang akan dijalani anak, dari awal konsultasi sampai punya karya sendiri."
          />

          <div className="grid gap-4 lg:col-span-8">
            {steps.map((s) => {
              return (
                <Card key={s.n} className="p-5 sm:p-6" color="amber">
                  <div className="flex items-start gap-4">
                    <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[var(--border)] font-[var(--font-display)] text-2xl text-[var(--ink)] ring-1 ring-[var(--border)]">
                      {s.n}
                    </div>
                    <div>
                      <div className="text-base font-semibold text-[var(--ink)]">{s.title}</div>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{s.desc}</p>
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

