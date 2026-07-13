import { cn } from "@/lib/cn";

export type EyebrowColor = "cream" | "green" | "yellow" | "purple";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  color = "purple",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  color?: EyebrowColor;
  className?: string;
}) {
  const colorStyles = {
    purple: {
      container: "bg-[rgba(109,40,217,0.12)] text-[var(--brand-2)] ring-[rgba(109,40,217,0.2)]",
      dot: "bg-[var(--brand-2)]"
    },
    green: {
      container: "bg-[rgba(103,157,65,0.12)] text-[var(--brand)] ring-[rgba(103,157,65,0.2)]",
      dot: "bg-[var(--brand)]"
    },
    yellow: {
      container: "bg-[rgba(255,176,0,0.12)] text-[var(--brand-3)] ring-[rgba(255,176,0,0.2)]",
      dot: "bg-[var(--brand-3)]"
    },
    cream: {
      container: "bg-[var(--border)] text-[var(--ink)] ring-[var(--border)]",
      dot: "bg-[var(--ink)]"
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
        <div className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1", selectedColor.container)}>
          <span
            aria-hidden
            className={cn("size-1.5 rounded-full", selectedColor.dot)}
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
