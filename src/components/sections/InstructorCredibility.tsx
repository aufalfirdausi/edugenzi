import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const instructors = [
  {
    name: "Instruktur Teknologi",
    role: "Coding • AI • Robotics",
    desc: "Mengajar dengan pendekatan praktis dan fokus pada problem solving.",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Instruktur Kreatif",
    role: "Design • 3D • Visual",
    desc: "Membantu anak membangun taste visual dan portofolio karya.",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Instruktur Komunikasi",
    role: "Public Speaking",
    desc: "Latih struktur pesan, kepercayaan diri, dan tampil yang meyakinkan.",
    image: "https://i.pravatar.cc/150?img=8",
  },
] as const;

export function InstructorCredibility() {
  return (
    <section className="mt-16 sm:mt-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            className="lg:col-span-5"
            eyebrow="Tim Pengajar"
            title="Instruktur yang mendampingi dengan arah yang jelas"
            description="Tim pengajar Edugenzi dipilih bukan hanya karena jago teknologi, tapi karena paham cara mengajar anak & remaja."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            {instructors.map((i) => {
              return (
                <Card key={i.name} className="p-5 sm:p-6" color="amber">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-base font-semibold text-[var(--ink)]">{i.name}</div>
                      <div className="mt-1 text-xs font-semibold text-[var(--muted)] opacity-90">
                        {i.role}
                      </div>
                    </div>
                    <img
                      src={i.image}
                      alt={i.name}
                      className="size-11 shrink-0 rounded-2xl object-cover ring-1 ring-[var(--border)]"
                    />
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

