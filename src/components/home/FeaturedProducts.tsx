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
      <Container className="grid gap-10 py-16 md:py-24">
        <SectionIntro
          eyebrow="Coleção Brasil Caramelo"
          title="Peças para entrar na rotina."
          description={
            <>
              Texto curto da seção.
            </>
          }
          align="between"
        />
        <ProductGrid products={products} variant="editorial" />
        <div className="flex justify-center">
          <Button
            href="/produtos"
            variant="outline"
            rightIcon={<ArrowRight size={17} />}
          >
            Ver todos os produtos
          </Button>
        </div>
      </Container>
    </section>
  );
}
