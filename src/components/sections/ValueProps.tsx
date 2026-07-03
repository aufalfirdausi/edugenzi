import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const props = [
  {
    title: "Instruktur Profesional",
    desc: "Didampingi pengajar profesional di bidang teknologi, desain, dan komunikasi.",
  },
  {
    title: "Metode Berbasis Project",
    desc: "Belajar sambil praktik nyata agar ilmu lebih mudah dipahami.",
  },
  {
    title: "Kurikulum Inovatif",
    desc: "Materi terkini seputar Coding, AI, Desain Grafis, 3D, Robotika, IoT, dan Public Speaking.",
  },
  {
    title: "Kreativitas & Karakter",
    desc: "Bukan hanya pintar teknologi, tapi juga percaya diri dan berani tampil.",
  },
  {
    title: "Fasilitas Modern",
    desc: "Ruang belajar dirancang untuk mendukung suasana interaktif dan menyenangkan.",
  },
] as const;

export function ValueProps() {
  return (
    <section className="mt-16 sm:mt-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <SectionHeading
            className="lg:col-span-4"
            eyebrow="Mengapa Edugenzi"
            title="Ruang tumbuh untuk skill digital & percaya diri"
            description="Kami percaya setiap anak punya potensi unik yang bisa berkembang maksimal dengan pendampingan yang tepat."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {props.map((p) => (
              <Card key={p.title} className="relative overflow-hidden p-5 sm:p-6" color="cream">
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(400px_200px_at_80%_20%,rgba(255,248,220,0.8),transparent_60%)]"
                  aria-hidden
                />
                <div className="relative flex items-start justify-between gap-3">
                  <div>
                    <div className="text-base font-semibold text-[var(--ink)]">
                      {p.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      {p.desc}
                    </p>
                  </div>
                  <div
                    className="mt-1 grid size-11 shrink-0 place-items-center rounded-2xl bg-[var(--border)] ring-1 ring-[var(--border)]"
                    aria-hidden
                  >
                    <div className="size-2.5 rounded-full bg-[var(--ink)]" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
