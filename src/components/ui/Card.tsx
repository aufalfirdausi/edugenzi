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
    cream: "hover:border-amber-300",
    purple: "hover:border-purple-400",
    green: "hover:border-emerald-500",
    amber: "hover:border-amber-300",
  };

  const hoverAccent = hoverStyles[color] || hoverStyles.cream;

  return (
    <div
      className={cn(
        "rounded-[var(--radius)] bg-white border border-slate-200/60 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1",
        hoverAccent,
        className
      )}
    >
      {children}
    </div>
  );
}
