import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { links } from "@/lib/links";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ConsultationCTA() {
  return (
    <section className="mt-16 sm:mt-24 lg:mt-32">
      <Container>
        <ScrollReveal direction="up">
          <Card className="relative overflow-hidden !rounded-none !rounded-tr-[80px] sm:!rounded-tr-[120px]" color="purple">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_30%,rgba(109,40,217,0.12),transparent_60%)]" aria-hidden />
            
            <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-5 sm:p-10">
              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[var(--brand-2)]/10 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs md:text-sm font-semibold text-[var(--brand-2)] border border-[var(--brand-2)]/40 w-fit">
                  <span className="size-1.5 rounded-full bg-[var(--brand-2)]" aria-hidden />
                  Konsultasi untuk orang tua
                </div>
                <h3 className="mt-3 sm:mt-4 font-[var(--font-display)] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tight text-[var(--ink)]">
                  Bingung pilih program yang cocok?
                </h3>
                <p className="mt-2 sm:mt-3 max-w-prose text-[11px] sm:text-sm md:text-base lg:text-lg leading-relaxed text-[var(--muted)]">
                  Kami siap mendampingi orang tua memilih program belajar yang sesuai kebutuhan dan minat anak. Mulai dari level yang tepat supaya anak nyaman dan progresnya konsisten.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 sm:gap-3 shrink-0 sm:items-end w-full sm:w-auto">
                <ButtonLink href={links.consultation} external size="lg" className="w-full sm:w-auto justify-center">
                  Konsultasi via WhatsApp
                  <span aria-hidden>→</span>
                </ButtonLink>
                <p className="text-xs sm:text-sm text-[var(--muted)] text-center sm:text-right w-full">
                  Chat langsung ke <span className="font-semibold text-[var(--ink)]">{links.whatsappNumberDisplay}</span>
                </p>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </Container>
    </section>
  );
}
