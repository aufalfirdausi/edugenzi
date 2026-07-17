import { Metadata } from "next";
import { OrganicBackground } from "@/components/ui/OrganicBackground";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kenali lebih dekat Edugenzi, visi, misi, dan cerita di balik berdirinya lembaga kursus teknologi untuk anak dan remaja di Banda Aceh.",
};

export default function TentangKamiPage() {
  return (
    <div className="pb-16 relative">
      <OrganicBackground />
      
      {/* Hero / Core Story */}
      <section className="pt-24 lg:pt-32 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal direction="up">
              <h1 className="font-[var(--font-display)] text-4xl leading-tight tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl mb-6">
                Membangun Generasi <br className="hidden sm:block" />
                <span className="text-[var(--brand)]">Kreatif & Percaya Diri</span>
              </h1>
              <p className="text-lg leading-relaxed text-[var(--muted)] mb-8">
                Edugenzi lahir dari sebuah keresahan: banyak anak menghabiskan waktunya di depan layar hanya sebagai penikmat pasif. Kami percaya bahwa setiap anak memiliki potensi untuk menjadi pencipta — membuat karya, menyelesaikan masalah, dan mengekspresikan diri melalui teknologi.
              </p>
              <p className="text-lg leading-relaxed text-[var(--muted)]">
                Lebih dari sekadar tempat les coding atau desain, Edugenzi adalah ruang aman bagi anak-anak untuk mengeksplorasi minat mereka, membuat kesalahan, belajar dari kegagalan, dan akhirnya membangun rasa percaya diri yang akan berguna seumur hidup.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Visi & Misi */}
      <section className="py-16">
        <Container>
          <div className="mb-12">
            <ScrollReveal direction="left">
              <SectionHeading 
                eyebrow="Tujuan Kami"
                color="yellow"
                title="Visi & Misi Edugenzi"
                align="center"
              />
            </ScrollReveal>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <ScrollReveal direction="up" delay={100} className="h-full">
              <Card className="flex flex-col h-full p-8" color="cream">
                <h3 className="font-[var(--font-display)] text-2xl font-bold tracking-tight text-[var(--ink)] mb-4 text-center">
                  Visi
                </h3>
                <p className="text-base leading-relaxed text-[var(--muted)] text-center flex-grow">
                  Menjadi ekosistem pendidikan teknologi terbaik di Aceh yang mencetak generasi muda yang kreatif, inovatif, dan siap menghadapi tantangan masa depan.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200} className="h-full">
              <Card className="flex flex-col h-full p-8" color="amber">
                <h3 className="font-[var(--font-display)] text-2xl font-bold tracking-tight text-[var(--ink)] mb-4 text-center">
                  Misi
                </h3>
                <ul className="text-base leading-relaxed text-[var(--muted)] space-y-3 flex-grow list-disc list-outside pl-5">
                  <li>Menyediakan kurikulum berbasis proyek (Project-Based Learning) yang relevan dengan perkembangan industri.</li>
                  <li>Menciptakan lingkungan belajar yang menyenangkan, kolaboratif, dan suportif.</li>
                  <li>Mengembangkan bukan hanya hard skills (coding, desain) tetapi juga soft skills (komunikasi, problem solving).</li>
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
