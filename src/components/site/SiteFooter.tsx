import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { links } from "@/lib/links";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[rgba(16,20,24,0.10)] bg-[rgba(255,255,255,0.55)]">
      <Container className="grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="text-lg font-semibold text-[var(--ink)]">Edugenzi</div>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-[var(--muted)]">
            Belajar interaktif dan menyenangkan untuk SD–SMP–SMA. Membangun keterampilan
            digital untuk masa depan: Coding & AI, Desain Grafis & 3D, Robotika & IoT, dan
            Public Speaking.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <ButtonLink href={links.consultation} external size="sm">
              WhatsApp Konsultasi
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-2 text-sm text-[var(--muted)] md:col-span-3">
          <div className="font-semibold text-[var(--ink)]">Program</div>
          <Link className="hover:text-[var(--ink)]" href="/programs/coding-ai">
            Coding & AI
          </Link>
          <Link className="hover:text-[var(--ink)]" href="/programs/graphic-design-3d">
            Desain Grafis & 3D
          </Link>
          <Link className="hover:text-[var(--ink)]" href="/programs/robotics-iot">
            Robotika & IoT
          </Link>
          <Link className="hover:text-[var(--ink)]" href="/programs/public-speaking">
            Public Speaking
          </Link>
        </div>

        <div className="grid gap-2 text-sm text-[var(--muted)] md:col-span-4">
          <div className="font-semibold text-[var(--ink)]">Kontak</div>
          <p className="leading-relaxed">
            Samping DIY Lingke, Jl. Teuku Nyak Arief, Jeulingke, Kec. Syiah Kuala, Kota Banda
            Aceh, Aceh 23126
          </p>
          <a className="hover:text-[var(--ink)]" href={links.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp: {links.whatsappNumberDisplay}
          </a>
          <a className="hover:text-[var(--ink)]" href={links.instagram} target="_blank" rel="noreferrer">
            Instagram: @edugenzi
          </a>
        </div>
      </Container>

      <div className="border-t border-[rgba(16,20,24,0.08)] py-6">
        <Container className="flex flex-col gap-2 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Edugenzi. All rights reserved.</p>
          <p>Website prototype redesign (Next.js) for Edugenzi.</p>
        </Container>
      </div>
    </footer>
  );
}
