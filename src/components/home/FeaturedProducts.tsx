import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/commerce/types";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type FeaturedProductsProps = {
  products: Product[];
};

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  if (!products.length) return null;

  return (
    <section id="colecao" className="border-b border-foreground/10 bg-surface">
      <Container className="grid gap-10 py-16 md:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-label text-caramelo">Coleção Brasil Caramelo</p>
            <h2 className="mt-4 max-w-3xl text-section-title text-foreground">
              Peças para entrar na rotina.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-foreground/68">
            Camisetas com cor, estampa e leitura de marca. O Brasil aparece no
            repertório, não no exagero.
          </p>
        </div>
        <ProductGrid products={products} />
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
