import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const instructors = [
  {
    name: "Instruktur Teknologi",
    role: "Coding • AI • Robotics",
    desc: "Mengajar dengan pendekatan praktis dan fokus pada problem solving.",
  },
  {
    name: "Instruktur Kreatif",
    role: "Design • 3D • Visual",
    desc: "Membantu anak membangun taste visual dan portofolio karya.",
  },
  {
    name: "Instruktur Komunikasi",
    role: "Public Speaking",
    desc: "Latih struktur pesan, kepercayaan diri, dan tampil yang meyakinkan.",
  },
] as const;

export function InstructorCredibility() {
  return (
    <section className="mt-16 sm:mt-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            className="lg:col-span-5"
            eyebrow="Credibility"
            title="Instruktur yang mendampingi dengan arah yang jelas"
            description="Tambahkan profil instruktur nyata (foto + pengalaman singkat) untuk trust yang lebih kuat."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            {instructors.map((i, idx) => {
              const colors = ["cream", "purple", "green", "amber"] as const;
              const color = colors[idx % colors.length];
              return (
                <Card key={i.name} className="p-5 sm:p-6" color={color}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-base font-semibold text-[var(--ink)]">{i.name}</div>
                      <div className="mt-1 text-xs font-semibold text-[var(--muted)] opacity-90">
                        {i.role}
                      </div>
                    </div>
                    <div
                      className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[var(--border)] ring-1 ring-[var(--border)]"
                      aria-hidden
                    >
                      <span className="text-[var(--ink)]">★</span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{i.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

