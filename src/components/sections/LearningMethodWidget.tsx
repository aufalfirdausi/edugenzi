import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

const methods = [
  { label: "Daftar Kelas Online", href: "https://wa.me/6281234567890" },
  { label: "Daftar Kelas Offline", href: "https://wa.me/6281366660885" },
  { label: "Daftar Kelas Private", href: "https://wa.me/6281366660885" },
];

export function LearningMethodWidget() {
  return (
    <section className="mt-8 sm:mt-12 mb-8 relative z-10">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-center p-2 sm:p-3 bg-white/90 backdrop-blur-xl rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-900/5 max-w-4xl mx-auto gap-2 sm:gap-3">
          {methods.map((method, idx) => (
            <a
              key={idx}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-1 w-full items-center justify-between sm:justify-center gap-3 text-center font-semibold rounded-[16px] transition-all duration-300 py-3 sm:py-4 px-5 bg-slate-50 text-slate-700 hover:bg-white hover:text-[var(--brand)] ring-1 ring-slate-900/5 hover:ring-[var(--brand)]/20 hover:shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:-translate-y-0.5"
            >
              <span>{method.label}</span>
              <span className="flex items-center justify-center size-7 rounded-full bg-slate-200/50 group-hover:bg-[var(--brand)]/10 text-slate-400 group-hover:text-[var(--brand)] transition-colors">
                <ArrowRight className="size-4" />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
