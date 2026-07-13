import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  { value: "12–18", label: "Rentang usia siswa" },
  { value: "4", label: "Program utama" },
  { value: "12–24x", label: "Pertemuan per program" },
  { value: "90 mnt", label: "Durasi per sesi" },
] as const;

export function StatsBand() {
  return (
    <section className="mt-16 sm:mt-20">
      <Container>
        <Card className="relative overflow-hidden !rounded-none !rounded-tr-[120px]" color="green">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_450px_at_10%_10%,rgba(103,157,65,0.18),transparent_60%),radial-gradient(900px_450px_at_90%_30%,rgba(43,122,75,0.12),transparent_60%)]"
            aria-hidden
          />
          <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-12 lg:items-center">
            <SectionHeading
              className="lg:col-span-4"
              eyebrow="Sekilas Tentang Edugenzi"
              color="green"
              title="Belajar yang Terstruktur, Hasil yang Terlihat"
              description="Struktur belajar Edugenzi dirancang supaya progres anak jelas dari awal sampai akhir program."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-[var(--border)] p-5 ring-1 ring-[var(--border)]">
                  <div className="font-[var(--font-display)] text-3xl tracking-tight text-[var(--ink)]">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-[var(--muted)]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}

