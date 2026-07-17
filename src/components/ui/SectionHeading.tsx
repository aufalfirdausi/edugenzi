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
      container: "bg-purple-100/80 text-purple-800 border border-purple-200/40",
      dot: "bg-purple-800"
    },
    green: {
      container: "bg-emerald-100/80 text-emerald-800 border border-emerald-200/40",
      dot: "bg-emerald-800"
    },
    yellow: {
      container: "bg-amber-100/80 text-amber-800 border border-amber-200/40",
      dot: "bg-amber-800"
    },
    cream: {
      container: "bg-amber-100/80 text-amber-800 border border-amber-200/40",
      dot: "bg-amber-800"
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
        <div className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold", selectedColor.container)}>
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
          titleClassName,
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
