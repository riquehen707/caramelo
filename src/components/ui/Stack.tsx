import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Stack.module.scss";

type StackProps = HTMLAttributes<HTMLDivElement> & {
  gap?: "sm" | "md" | "lg" | "xl";
  children: ReactNode;
};

const gapStyles = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-10",
};

export function Stack({ gap = "md", className, children, ...props }: StackProps) {
  return (
    <div className={clsx(styles.root, "grid", gapStyles[gap], className)} {...props}>
      {children}
    </div>
  );
}
