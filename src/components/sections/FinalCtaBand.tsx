import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { links } from "@/lib/links";

export function FinalCtaBand() {
  return (
    <section className="mt-16 sm:mt-20">
      <Container>
        <Card className="relative overflow-hidden p-6 sm:p-10" color="purple">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_30%,rgba(79,25,100,0.15),transparent_60%)]"
            aria-hidden
          />
          <div className="relative grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h3 className="font-[var(--font-display)] text-3xl tracking-tight text-[var(--ink)]">
                Siap konsultasi sekarang?
              </h3>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                Semua CTA pendaftaran kami sederhanakan menjadi satu jalur: konsultasi via WhatsApp untuk bantu memilih
                program yang paling tepat untuk anak Anda.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-5 lg:justify-end">
              <ButtonLink href={links.consultation} external size="lg">
                WhatsApp Konsultasi
                <span aria-hidden>→</span>
              </ButtonLink>
              <p className="text-sm text-[var(--muted)] lg:text-right">{links.whatsappNumberDisplay}</p>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
