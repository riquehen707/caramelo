import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./CommercePanel.module.scss";

type CommercePanelProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: "aside" | "section" | "div";
};

export function CommercePanel({
  children,
  as = "div",
  className,
  ...props
}: CommercePanelProps) {
  const Component = as;

  return (
    <Component className={clsx(styles.root, "commerce-panel", className)} {...props}>
      {children}
    </Component>
  );
}
