import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Card.module.scss";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  interactive?: boolean;
  tone?: "default" | "editorial" | "commerce";
};

export function Card({
  className,
  children,
  interactive = false,
  tone = "default",
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        styles.root,
        tone === "default" && "rounded-[var(--radius-brand)] border-2 border-foreground bg-surface shadow-[var(--shadow-soft)]",
        tone === "editorial" && "editorial-card border-2 border-foreground bg-surface",
        tone === "commerce" && "commerce-panel",
        interactive &&
          "transition duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
