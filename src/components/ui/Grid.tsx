import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type GridProps = HTMLAttributes<HTMLDivElement> & {
  columns?: "two" | "three" | "four" | "products";
  children: ReactNode;
};

const columnStyles = {
  two: "grid-cols-1 md:grid-cols-2",
  three: "grid-cols-1 md:grid-cols-3",
  four: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  products:
    "grid-cols-1 gap-x-5 gap-y-12 min-[520px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
};

export function Grid({
  columns = "two",
  className,
  children,
  ...props
}: GridProps) {
  return (
    <div className={clsx("grid gap-5", columnStyles[columns], className)} {...props}>
      {children}
    </div>
  );
}
