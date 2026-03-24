"use client";

import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  /** "default" = bg-background | "muted" = slightly lighter | "dark" = deepest */
  variant?: "default" | "muted" | "dark";
  /** Vertical padding size */
  spacing?: "sm" | "md" | "lg";
  topBorder?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<string, string> = {
  default: "bg-background",
  muted:   "bg-[#050d1a]",
  dark:    "bg-[#020810]",
};

const spacingStyles: Record<string, string> = {
  sm: "py-12",
  md: "py-16 md:py-20",
  lg: "py-20 md:py-28",
};

/**
 * Universal Section wrapper.
 * Eliminates repeated `py-16 border-t border-white/5 bg-background`
 * copied across every section file.
 */
export function Section({
  id,
  variant = "default",
  spacing = "md",
  topBorder = true,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        variantStyles[variant],
        spacingStyles[spacing],
        topBorder && "border-t border-white/5",
        className
      )}
    >
      {children}
    </section>
  );
}
