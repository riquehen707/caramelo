import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { Container } from "./Container";
import styles from "./Section.module.scss";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  contained?: boolean;
  tone?: "default" | "surface" | "dark" | "muted";
};

const toneStyles = {
  default: "bg-background text-foreground",
  surface: "bg-surface text-foreground",
  dark: "bg-surface-dark text-white",
  muted: "bg-[#eee5d6] text-foreground",
};

export function Section({
  className,
  children,
  contained = true,
  tone = "default",
  ...props
}: SectionProps) {
  return (
    <section className={clsx(styles.root, "border-b border-border", toneStyles[tone], className)} {...props}>
      {contained ? <Container className="py-14 sm:py-16">{children}</Container> : children}
    </section>
  );
}
