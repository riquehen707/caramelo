import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./BrandStamp.module.scss";

type BrandStampProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  tone?: "caramelo" | "dark" | "light";
};

const toneStyles = {
  caramelo: "brand-stamp",
  dark: "brand-stamp border-[#fff8ea] bg-brick text-[#fff8ea] shadow-[2px_2px_0_#fff8ea]",
  light: "brand-stamp border-foreground bg-[#fff8ea] text-foreground",
};

export function BrandStamp({
  children,
  tone = "caramelo",
  className,
  ...props
}: BrandStampProps) {
  return (
    <span className={clsx(styles.root, toneStyles[tone], className)} {...props}>
      {children}
    </span>
  );
}
