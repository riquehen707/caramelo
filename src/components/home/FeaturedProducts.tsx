import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/commerce/types";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import styles from "./FeaturedProducts.module.scss";

type FeaturedProductsProps = {
  products: Product[];
};

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  if (!products.length) return null;

  return (
    <section id="colecao" className={`${styles.root} border-b border-foreground/10 bg-surface`}>
      <Container className="grid gap-7 py-10 md:gap-10 md:py-20">
        <SectionIntro
          eyebrow="Coleção Brasil Caramelo"
          title="Peças para entrar na rotina."
          description={
            <>
              Camisetas diretas, com produto no centro e pedido simples.
            </>
          }
          align="between"
        />
        <ProductGrid products={products} variant="catalog" />
        <div className="flex justify-center">
          <Button
            href="/produtos"
            variant="dark"
            rightIcon={<ArrowRight size={17} />}
          >
            Ver todos os produtos
          </Button>
        </div>
      </Container>
    </section>
  );
}
