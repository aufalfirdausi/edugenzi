import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { links } from "@/lib/links";

export function FinalCtaBand() {
  return (
    <section className="mt-12 sm:mt-16">
      <Container>
        <Card className="relative overflow-hidden p-5 sm:p-10" color="purple">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_30%,rgba(79,25,100,0.15),transparent_60%)]" aria-hidden />
          
          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-6">
            <div className="flex-1">
              <h3 className="font-[var(--font-display)] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tight text-[var(--ink)]">
                Siap konsultasi sekarang?
              </h3>
              <p className="mt-2 sm:mt-3 max-w-prose text-[11px] sm:text-sm md:text-base lg:text-lg leading-relaxed text-[var(--muted)]">
                Semua CTA pendaftaran kami sederhanakan menjadi satu jalur: konsultasi via WhatsApp untuk bantu memilih program yang paling tepat untuk anak Anda.
              </p>
            </div>
            
            <div className="flex flex-col gap-2.5 sm:gap-3 shrink-0 sm:items-end w-full sm:w-auto">
              <ButtonLink href={links.consultation} external size="lg" className="w-full sm:w-auto justify-center">
                WhatsApp Konsultasi
                <span aria-hidden>→</span>
              </ButtonLink>
              <p className="text-xs sm:text-sm text-[var(--muted)] text-center sm:text-right w-full">
                {links.whatsappNumberDisplay}
              </p>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
