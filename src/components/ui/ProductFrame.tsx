import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./ProductFrame.module.scss";

type ProductFrameProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  interactive?: boolean;
  tilt?: "none" | "left" | "right";
};

const tiltStyles = {
  none: "",
  left: "-rotate-1",
  right: "rotate-1",
};

export function ProductFrame({
  children,
  interactive = false,
  tilt = "none",
  className,
  ...props
}: ProductFrameProps) {
  return (
    <div
      className={clsx(
        styles.root,
        "product-frame",
        tiltStyles[tilt],
        interactive && "transition duration-500 hover:-translate-y-1 hover:rotate-0",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
