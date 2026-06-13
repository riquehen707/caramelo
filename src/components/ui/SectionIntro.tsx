import type { ReactNode } from "react";
import clsx from "clsx";
import { BrandStamp } from "./BrandStamp";
import styles from "./SectionIntro.module.scss";

type SectionIntroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "between" | "center";
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionIntroProps) {
  return (
    <div
      className={clsx(
        styles.root,
        "gap-5",
        align === "between" && "grid md:grid-cols-[1fr_0.72fr] md:items-end",
        align === "center" && "mx-auto grid max-w-3xl justify-items-center text-center",
        align === "left" && "grid max-w-3xl",
        className,
      )}
    >
      <div>
        {eyebrow ? <BrandStamp>{eyebrow}</BrandStamp> : null}
        <h2 className="mt-4 max-w-[22rem] break-words text-section-title text-foreground md:max-w-none">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-[21rem] text-lg font-semibold leading-7 text-foreground md:max-w-2xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
