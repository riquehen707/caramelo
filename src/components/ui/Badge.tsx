import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Badge.module.scss";

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
  default: "border-foreground bg-surface text-foreground",
  caramelo: "border-foreground bg-caramelo text-white",
  dark: "border-foreground bg-surface-dark text-white",
  yellow: "border-foreground bg-brasil-yellow text-foreground",
  green: "border-foreground bg-brasil-green text-white",
  blue: "border-foreground bg-brasil-blue text-white",
  muted: "border-foreground bg-transparent text-foreground",
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
        styles.root,
        "inline-flex w-fit items-center rounded-[var(--radius-control)] border px-2.5 py-1 text-label shadow-[2px_2px_0_var(--foreground)]",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
