import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/projects";

export function ProjectsShowcase() {
  return (
    <section id="projects" className="mt-16 scroll-mt-24 sm:mt-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            className="lg:col-span-5"
            eyebrow="Karya Siswa"
            color="yellow"
            title="Bukti belajar yang nyata: karya & proyek"
            description="Setiap karya di bawah ini dibuat langsung oleh siswa Edugenzi selama program berjalan."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {projects.map((p) => (
              <div 
                key={p.title} 
                className="rounded-[var(--radius)] bg-white p-5 sm:p-6 border-t-[3px] border-t-[var(--brand-3)] ring-1 ring-[var(--border)] shadow-[var(--shadow-sm)] transition-all duration-200"
              >
                <div className="text-xs font-semibold text-[var(--muted)]">{p.program}</div>
                <div className="mt-2 text-base font-semibold text-[var(--ink)]">{p.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--ink)] ring-1 ring-[var(--border)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

