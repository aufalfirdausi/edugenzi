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
  const hoverStyles = {
    cream: "hover:border-white/80 hover:shadow-[0_8px_30px_rgba(255,255,255,0.4)]",
    purple: "hover:border-[var(--brand-2)] hover:shadow-[0_8px_30px_rgba(79,25,100,0.15)]",
    green: "hover:border-[var(--brand)] hover:shadow-[0_8px_30px_rgba(103,157,65,0.15)]",
    amber: "hover:border-[var(--brand-3)] hover:shadow-[0_8px_30px_rgba(255,176,0,0.15)]",
  };

  const hoverAccent = hoverStyles[color] || hoverStyles.cream;
  const floatClass = color.length % 2 === 0 ? "animate-float" : "animate-float-reverse";

  return (
    <div
      className={cn(
        "rounded-[var(--radius)] bg-white/60 backdrop-blur-2xl border border-white/50 shadow-xl transition-all duration-300 group",
        hoverAccent,
        floatClass,
        className
      )}
    >
      {children}
    </div>
  );
}
