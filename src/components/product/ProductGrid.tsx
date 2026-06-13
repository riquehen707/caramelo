import type { Product } from "@/lib/commerce/types";
import clsx from "clsx";
import { Grid } from "@/components/ui/Grid";
import { ProductCard } from "./ProductCard";
import styles from "./ProductGrid.module.scss";

type ProductGridProps = {
  products: Product[];
  variant?: "catalog" | "editorial";
  className?: string;
};

export function ProductGrid({
  products,
  variant = "catalog",
  className,
}: ProductGridProps) {
  return (
    <Grid columns="products" className={clsx(styles.root, className)}>
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          index={index}
          variant={variant}
        />
      ))}
    </Grid>
  );
}
