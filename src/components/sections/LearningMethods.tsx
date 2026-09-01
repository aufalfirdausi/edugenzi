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
        <div className="flex flex-col gap-6 sm:gap-10">
          <ScrollReveal direction="left">
            <SectionHeading
              eyebrow="Metode Pembelajaran"
              color="green"
              title="Pilih Metode Pembelajaran yang Cocok untuk Anak"
              description="Kami menyediakan pilihan metode pembelajaran agar anak bisa belajar dengan maksimal sesuai gaya dan kebutuhan mereka."
            />
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-4xl mx-auto w-full">
            {methods.map((method, idx) => (
              <ScrollReveal
                key={method.title}
                direction="up"
                delay={idx * 100}
                className="h-full"
              >
                <Card className="flex flex-col h-full p-3 sm:p-7" color="green">
                  <div className="flex flex-col flex-grow">
                    <div className="mb-4 sm:mb-6">
                      <h3 className="font-[var(--font-display)] text-xs sm:text-base font-semibold tracking-tight text-[var(--ink)]">
                        {method.title}
                      </h3>
                      <p className="mt-1.5 sm:mt-3 text-[11px] sm:text-sm leading-relaxed text-[var(--muted)] line-clamp-3 sm:line-clamp-none">
                        {method.desc}
                      </p>
                    </div>

                    <div className="mt-auto pt-3 sm:pt-5 border-t border-[var(--border)]/50">
                      <ButtonLink
                        href={method.waLink}
                        external
                        variant="secondary"
                        size="sm"
                        className="w-full text-center justify-center text-[9px] sm:text-sm px-2 py-1.5 sm:px-4 sm:py-2"
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
