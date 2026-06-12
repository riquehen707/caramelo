import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type BadgeVariant =
  | "default"
  | "caramelo"
  | "dark"
  | "yellow"
  | "green"
  | "blue"
  | "muted";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  children: ReactNode;
};

const variantStyles: Record<BadgeVariant, string> = {
  default: "border-border bg-surface/75 text-muted",
  caramelo: "border-caramelo/35 bg-caramelo/10 text-caramelo-dark",
  dark: "border-surface-dark bg-surface-dark text-white",
  yellow: "border-brasil-yellow/35 bg-brasil-yellow/10 text-[#7b5a18]",
  green: "border-brasil-green/35 bg-brasil-green/10 text-brasil-green",
  blue: "border-brasil-blue/35 bg-brasil-blue/10 text-brasil-blue",
  muted: "border-border bg-transparent text-muted",
};

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex w-fit items-center border px-2.5 py-1 text-label",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
