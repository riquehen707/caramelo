import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./EditorialFrame.module.scss";

type EditorialFrameProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tone?: "light" | "dark" | "product";
  tilt?: "none" | "left" | "right";
};

const toneStyles = {
  light: "editorial-card border-2 border-foreground bg-surface",
  dark: "editorial-card border-2 border-foreground bg-surface-dark text-background",
  product: "product-frame",
};

const tiltStyles = {
  none: "",
  left: "-rotate-2 transition duration-500 hover:rotate-0",
  right: "rotate-2 transition duration-500 hover:rotate-0",
};

export function EditorialFrame({
  children,
  tone = "light",
  tilt = "none",
  className,
  ...props
}: EditorialFrameProps) {
  return (
    <div className={clsx(styles.root, toneStyles[tone], tiltStyles[tilt], className)} {...props}>
      {children}
    </div>
  );
}
