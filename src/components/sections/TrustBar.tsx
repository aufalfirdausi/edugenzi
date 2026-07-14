import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const items = [
  { title: "Usia 12–18 tahun", desc: "Jenjang SMP-SMA" },
  { title: "Belajar Lewat Karya", desc: "Praktik tiap pertemuan" },
  { title: "Tatap Muka di Banda Aceh", desc: "Kelas online bertahap hadir" },
  { title: "Konsultasi Gratis", desc: "Tanya dulu sebelum daftar" },
] as const;

export function TrustBar() {
  return (
    <section className="mt-10">
      <Container>
        <ScrollReveal direction="up">
          <Card className="overflow-hidden" color="cream">
            <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((it, idx) => (
                <div
                  key={it.title}
                  className={[
                    "p-5 sm:p-6",
                    idx !== 0 ? "border-t border-[var(--border)] sm:border-t-0 sm:border-l" : "",
                  ].join(" ")}
                >
                  <div className="text-sm font-semibold text-[var(--ink)]">{it.title}</div>
                  <div className="mt-1 text-sm text-[var(--muted)]">{it.desc}</div>
                </div>
              ))}
            </div>
          </Card>
        </ScrollReveal>
      </Container>
    </section>
  );
}

