import { cn } from "@/lib/cn";

export type CardColor = "cream" | "purple" | "green" | "amber";

export function Card({
  className,
  children,
  color = "cream",
}: {
  className?: string;
  children: React.ReactNode;
  color?: CardColor;
}) {
  const colorStyles = {
    cream: {
      bgClass: "bg-[var(--bg)]",
      style: {},
    },
    purple: {
      bgClass: "bg-[var(--brand-2)]",
      style: {
        "--ink": "#fff7ea",
        "--muted": "rgba(255, 247, 234, 0.7)",
        "--border": "rgba(255, 247, 234, 0.15)",
      },
    },
    green: {
      bgClass: "bg-[var(--brand)]",
      style: {
        "--ink": "#fff7ea",
        "--muted": "rgba(255, 247, 234, 0.75)",
        "--border": "rgba(255, 247, 234, 0.2)",
      },
    },
    amber: {
      bgClass: "bg-[var(--brand-3)]",
      style: {
        "--ink": "#2e053d",
        "--muted": "rgba(79, 25, 100, 0.8)",
        "--border": "rgba(79, 25, 100, 0.15)",
      },
    },
  };

  const selected = colorStyles[color] || colorStyles.cream;

  return (
    <div
      className={cn(
        "rounded-[var(--radius)] ring-1 ring-[var(--border)] shadow-[var(--shadow-sm)] transition-all duration-200",
        selected.bgClass,
        className
      )}
      style={selected.style as React.CSSProperties}
    >
      {children}
    </div>
  );
}
