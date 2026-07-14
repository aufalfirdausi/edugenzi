import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

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
    <section className="mt-24 lg:mt-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <SectionHeading
                eyebrow="Tim Pengajar"
                color="yellow"
                title="Instruktur yang mendampingi dengan arah yang jelas"
                description="Tim pengajar Edugenzi dipilih bukan hanya karena jago teknologi, tapi karena paham cara mengajar anak & remaja."
              />
            </ScrollReveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            {instructors.map((i, idx) => {
              return (
                <ScrollReveal 
                  key={i.name} 
                  direction={idx % 2 === 0 ? "left" : "right"}
                  delay={idx * 100}
                >
                  <Card className="p-5 sm:p-6" color="amber">
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
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

