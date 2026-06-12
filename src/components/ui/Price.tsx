import clsx from "clsx";
import { formatMoney } from "@/lib/format-money";

type PriceProps = {
  price: number;
  compareAtPrice?: number;
  currency?: "BRL";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeStyles = {
  sm: "text-sm",
  md: "text-price",
  lg: "text-xl font-semibold",
};

export function Price({
  price,
  compareAtPrice,
  currency = "BRL",
  size = "md",
  className,
}: PriceProps) {
  return (
    <span className={clsx("inline-flex flex-wrap items-baseline gap-2", className)}>
      <strong className={clsx("text-foreground", sizeStyles[size])}>
        {formatMoney(price, currency)}
      </strong>
      {compareAtPrice ? (
        <span className="text-sm text-muted line-through">
          {formatMoney(compareAtPrice, currency)}
        </span>
      ) : null}
    </span>
  );
}
