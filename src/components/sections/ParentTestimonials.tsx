import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/testimonials";

export function ParentTestimonials() {
  return (
    <section id="testimonials" className="mt-16 scroll-mt-24 sm:mt-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <SectionHeading
            className="lg:col-span-4"
            eyebrow="Social proof"
            title="Orang tua melihat progres lewat karya"
            description="Testimoni orang tua mengurangi keraguan dan mempercepat keputusan konsultasi."
          />

          <div className="grid gap-4 lg:col-span-8 md:grid-cols-3">
            {testimonials.map((t, idx) => {
              const colors = ["cream", "purple", "green", "amber"] as const;
              return (
                <Card key={t.quote} className="p-5 sm:p-6" color={colors[idx % colors.length]}>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">“{t.quote}”</p>
                  <div className="mt-5 border-t border-[rgba(16,20,24,0.08)] pt-4">
                    <div className="text-sm font-semibold text-[var(--ink)]">{t.name}</div>
                    <div className="text-xs text-[var(--muted)]">{t.relation}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

