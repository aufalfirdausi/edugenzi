import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const props = [
  {
    title: "Instruktur Berpengalaman",
    desc: "Bukan cuma jago teknologi — tim kami paham cara mengajar anak & remaja dengan sabar dan menyenangkan.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    )
  },
  {
    title: "Belajar Lewat Proyek Nyata",
    desc: "Setiap pertemuan menghasilkan karya, bukan cuma latihan soal di buku.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /></svg>
    )
  },
  {
    title: "Kurikulum yang Terstruktur",
    desc: "Materi disusun bertahap dari dasar sampai mahir, disesuaikan usia dan kecepatan belajar.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
    )
  },
  {
    title: "Kreativitas & Rasa Percaya Diri",
    desc: "Anak dilatih berani mencoba, berani salah, dan berani tampil menunjukkan karyanya.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M3 5h4" /><path d="M19 17v4" /><path d="M17 19h4" /></svg>
    )
  },
  {
    title: "Fasilitas Belajar yang Nyaman",
    desc: "Ruang kelas didesain interaktif supaya anak betah dan fokus belajar.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>
    )
  },
] as const;

export function ValueProps() {
  return (
    <section className="mt-24 lg:mt-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <ScrollReveal direction="left">
              <SectionHeading
                eyebrow="Mengapa Edugenzi"
                color="yellow"
                title="Bukan sekedar kursus. Tapi ruang tumbuh untuk berkarya dan percaya diri"
                titleClassName="text-[#ffb000]"
                description="Kami percaya setiap anak punya potensi yang berbeda. Lewat pendekatan Care, Practice, EAC, dan Digital Portfolio, Edugenzi mendampingi siswa belajar sesuai ritmenya masing-masing — dengan orang tua tetap terlibat di setiap langkah."
              />
            </ScrollReveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {props.map((p, idx) => (
              <ScrollReveal
                key={p.title}
                direction={idx % 2 === 0 ? "left" : "right"}
                className={idx === 4 ? "sm:col-span-2" : ""}
                delay={idx * 100}
              >
                <Card className="relative overflow-hidden p-5 sm:p-6 h-full" color="amber">
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
                      className="mt-1 grid size-11 shrink-0 place-items-center rounded-2xl bg-[var(--border)] ring-1 ring-[var(--border)] text-[var(--ink)]"
                      aria-hidden
                    >
                      {p.icon}
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
