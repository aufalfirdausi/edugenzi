import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

const items = [
  { title: "Usia 7–17", desc: "SD–SMP–SMA" },
  { title: "Project-Based", desc: "Belajar lewat karya" },
  { title: "Online & Offline", desc: "Banda Aceh + remote" },
  { title: "Trial Class", desc: "Coba dulu, gratis" },
] as const;

export function TrustBar() {
  return (
    <section className="mt-10">
      <Container>
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
      </Container>
    </section>
  );
}

