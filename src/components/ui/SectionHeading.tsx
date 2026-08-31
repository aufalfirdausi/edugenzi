import { cn } from "@/lib/cn";

export type EyebrowColor = "cream" | "green" | "yellow" | "purple";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  color = "purple",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  color?: EyebrowColor;
  className?: string;
  titleClassName?: string;
}) {
  const colorStyles = {
    purple: {
      container: "bg-[var(--brand-2)]/10 text-[var(--brand-2)] border border-[var(--brand-2)]/40",
      dot: "bg-[var(--brand-2)]"
    },
    green: {
      container: "bg-[var(--brand)]/10 text-[var(--brand)] border border-[var(--brand)]/40",
      dot: "bg-[var(--brand)]"
    },
    yellow: {
      container: "bg-[var(--brand-3)]/10 text-[var(--brand-3)] border border-[var(--brand-3)]/40",
      dot: "bg-[var(--brand-3)]"
    },
    cream: {
      container: "bg-[var(--brand-3)]/10 text-[var(--brand-3)] border border-[var(--brand-3)]/40",
      dot: "bg-[var(--brand-3)]"
    }
  };
  const selectedColor = colorStyles[color] || colorStyles.purple;

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <div className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] sm:text-xs md:text-sm font-semibold", selectedColor.container)}>
          <span
            aria-hidden
            className={cn("size-1.5 rounded-full", selectedColor.dot)}
          />
          {eyebrow}
        </div>
      ) : null}

      <h2
        className={cn(
          "mt-4 font-[var(--font-display)] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-[1.05] tracking-tight text-[var(--ink)]",
          align === "center" ? "text-balance" : "text-pretty",
          titleClassName,
        )}
      >
        {title}
      </h2>

      {description ? (
        <p className="mt-3 text-[11px] sm:text-sm md:text-base lg:text-lg leading-relaxed text-[var(--muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
