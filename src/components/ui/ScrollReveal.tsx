"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "none";
  className?: string;
  delay?: number;
}

export function ScrollReveal({
  children,
  direction = "up",
  className,
  delay = 0,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const directionClasses = {
    up: "translate-y-12",
    left: "-translate-x-12",
    right: "translate-x-12",
    none: "",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-500 ease-out",
        "will-change-transform",
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${directionClasses[direction]}`,
        className
      )}
      style={{ transitionDelay: `${delay}ms`, willChange: "transform, opacity" }}
    >
      {children}
    </div>
  );
}
