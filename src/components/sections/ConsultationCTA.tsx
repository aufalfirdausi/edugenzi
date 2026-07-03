import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { links } from "@/lib/links";

export function ConsultationCTA() {
  return (
    <section className="mt-16 sm:mt-20">
      <Container>
        <Card className="relative overflow-hidden" color="amber">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_30%,rgba(255,176,0,0.12),transparent_60%)]"
            aria-hidden
          />
          <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--ink)] ring-1 ring-[var(--border)]">
                <span
                  className="size-1.5 rounded-full bg-[var(--ink)]"
                  aria-hidden
                />
                Konsultasi untuk orang tua
              </div>
              <h3 className="mt-4 font-[var(--font-display)] text-3xl tracking-tight text-[var(--ink)]">
                Bingung pilih program yang cocok?
              </h3>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                Kami siap mendampingi orang tua memilih program belajar yang
                sesuai kebutuhan dan minat anak. Mulai dari level yang tepat
                supaya anak nyaman dan progresnya konsisten.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-5 lg:justify-end">
              <ButtonLink href={links.consultation} external size="lg">
                Konsultasi via WhatsApp
                <span aria-hidden>→</span>
              </ButtonLink>
              <p className="text-sm text-[var(--muted)] lg:text-right">
                Chat langsung ke{" "}
                <span className="font-semibold text-[var(--ink)]">
                  {links.whatsappNumberDisplay}
                </span>
              </p>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
