import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={clsx("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", className)}
      {...props}
    >
      {children}
    </div>
  );
}
