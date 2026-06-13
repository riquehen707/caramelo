import type { ReactNode } from "react";
import clsx from "clsx";
import { BrandStamp } from "./BrandStamp";
import styles from "./SectionHeader.module.scss";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "between" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        styles.root,
        "gap-5",
        align === "between" && "grid md:grid-cols-[1fr_0.75fr] md:items-end",
        align === "center" && "mx-auto grid max-w-3xl justify-items-center text-center",
        align === "left" && "grid max-w-3xl",
        className,
      )}
    >
      <div>
        {eyebrow ? <BrandStamp>{eyebrow}</BrandStamp> : null}
        <h2 className="mt-4 text-section-title text-foreground">{title}</h2>
      </div>
      {description ? <p className="text-subtitle max-w-2xl">{description}</p> : null}
    </div>
  );
}
