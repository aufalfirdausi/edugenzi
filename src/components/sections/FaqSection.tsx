import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/content/faqs";

export function FaqSection() {
  return (
    <section id="faq" className="mt-16 scroll-mt-24 sm:mt-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <SectionHeading
            className="lg:col-span-4"
            eyebrow="FAQ"
            title="Pertanyaan yang sering ditanyakan"
            description="Rangkuman pertanyaan umum seputar program Edugenzi. Jika butuh jawaban spesifik, konsultasi dulu."
          />

          <div className="grid gap-3 lg:col-span-8">
            {faqs.map((item, idx) => {
              const colors = ["cream", "purple", "green", "amber"] as const;
              const color = colors[idx % colors.length];
              return (
                <Card key={item.q} className="overflow-hidden" color={color}>
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left sm:p-6">
                      <span className="text-sm font-semibold text-[var(--ink)] sm:text-base">{item.q}</span>
                      <span
                        className="grid size-9 place-items-center rounded-2xl bg-[var(--border)] text-[var(--ink)] ring-1 ring-[var(--border)] transition group-open:rotate-45"
                        aria-hidden
                      >
                        +
                      </span>
                    </summary>
                    <div className="border-t border-[var(--border)] p-5 pt-4 text-sm leading-relaxed text-[var(--muted)] sm:p-6 sm:pt-5">
                      {item.a}
                    </div>
                  </details>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

