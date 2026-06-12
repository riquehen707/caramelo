import type { Product } from "@/lib/commerce/types";
import { Grid } from "@/components/ui/Grid";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <Grid columns="products">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </Grid>
  );
}
