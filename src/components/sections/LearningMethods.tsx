import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ButtonLink } from "@/components/ui/Button";

const methods = [
  {
    title: "Kelas Online",
    desc: "Belajar dari mana saja. Cocok untuk anak yang suka fleksibilitas dan kenyamanan di rumah.",
    waLink: "https://wa.me/6281366660885?text=Halo%20Edugenzi,%20saya%20tertarik%20dengan%20Kelas%20Online."
  },
  {
    title: "Kelas Offline",
    desc: "Tatap muka langsung dengan fasilitas lengkap. Anak bisa lebih fokus berinteraksi dan berkolaborasi dengan instruktur.",
    waLink: "https://wa.me/6281366660885?text=Halo%20Edugenzi,%20saya%20tertarik%20dengan%20Kelas%20Offline."
  }
];

export function LearningMethods() {
  return (
    <section className="mt-24 lg:mt-32">
      <Container>
        <div className="flex flex-col gap-10">
          <ScrollReveal direction="left">
            <SectionHeading
              eyebrow="Metode Pembelajaran"
              color="green"
              title="Pilih Metode Pembelajaran yang Cocok untuk Anak"
              description="Kami menyediakan pilihan metode pembelajaran agar anak bisa belajar dengan maksimal sesuai gaya dan kebutuhan mereka."
            />
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto w-full">
            {methods.map((method, idx) => (
              <ScrollReveal 
                key={method.title} 
                direction="up"
                delay={idx * 100}
                className="h-full"
              >
                <Card className="flex flex-col h-full p-6 sm:p-7" color="green">
                  <div className="flex flex-col flex-grow">
                    <div className="mb-6">
                      <h3 className="font-[var(--font-display)] text-xl font-bold tracking-tight text-[var(--ink)]">
                        {method.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                        {method.desc}
                      </p>
                    </div>

                    <div className="mt-auto pt-5 border-t border-[var(--border)]/50">
                      <ButtonLink
                        href={method.waLink}
                        external
                        variant="secondary"
                        size="sm"
                        className="w-full text-center justify-center"
                      >
                        Tanya via WhatsApp
                      </ButtonLink>
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
