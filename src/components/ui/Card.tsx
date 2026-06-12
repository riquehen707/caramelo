import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  interactive?: boolean;
};

export function Card({
  className,
  children,
  interactive = false,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        "border border-border bg-surface",
        interactive &&
          "transition duration-300 hover:-translate-y-1 hover:border-caramelo hover:shadow-[0_24px_50px_rgba(42,36,30,0.14)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
