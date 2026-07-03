import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(109,40,217,0.12)] px-3 py-1 text-xs font-semibold text-[var(--brand-2)] ring-1 ring-[rgba(109,40,217,0.2)]">
          <span
            aria-hidden
            className="size-1.5 rounded-full bg-[var(--brand-2)]"
          />
          {eyebrow}
        </div>
      ) : null}

      <h2
        className={cn(
          "mt-4 font-[var(--font-display)] text-3xl leading-[1.05] tracking-tight text-[var(--ink)] sm:text-4xl",
          align === "center" ? "text-balance" : "text-pretty",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
