import type { Metadata } from "next";
import Image from "next/image";
import { commerce } from "@/lib/commerce";
import { getProductMainImage } from "@/lib/product-images";
import { Container } from "@/components/ui/Container";
import { ProductGrid } from "@/components/product/ProductGrid";

export const metadata: Metadata = {
  title: "Coleção Brasil Caramelo",
  description:
    "Conheça camisetas com estética brasileira, visual urbano e referências do Brasil real.",
};

export default async function ProductsPage() {
  const products = await commerce.getProducts();
  const leadProduct = products[0];
  const leadImage = leadProduct ? getProductMainImage(leadProduct) : null;

  return (
    <main>
      <section className="relative overflow-hidden border-b border-foreground/10 bg-background">
        <Container className="grid gap-10 py-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-center lg:py-20">
          <div className="relative z-10">
            <p className="text-label text-caramelo">Coleção Brasil Caramelo</p>
            <h1 className="mt-5 max-w-3xl text-display text-foreground">
              Camisetas em linha.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-foreground/68">
              Peças inspiradas no Brasil real: rua, futebol, humor e cultura
              popular.
            </p>
          </div>

          <div className="relative min-h-[520px]">
            <div className="absolute right-8 top-0 h-72 w-[62%] rotate-3 rounded-[8px] bg-caramelo/20" />
            <div className="editorial-card absolute left-0 top-10 w-[64%] -rotate-3 border border-foreground/12 bg-surface p-5 md:w-[46%]">
              <p className="text-label text-caramelo">Catálogo</p>
              <p className="mt-16 max-w-sm text-3xl font-semibold leading-tight text-foreground">
                Produto em primeiro plano. Identidade no detalhe.
              </p>
            </div>
            {leadImage ? (
              <div className="editorial-card absolute bottom-0 right-0 w-[72%] rotate-2 overflow-hidden border border-foreground/12 bg-[#e8dccb] md:w-[54%]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={leadImage.url}
                    alt={leadImage.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 34vw, 90vw"
                    className="object-contain p-8"
                    unoptimized={
                      leadImage.isPlaceholder || leadImage.url.endsWith(".svg")
                    }
                  />
                </div>
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="grid gap-10 py-14 md:py-24">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-label text-caramelo">Todos os produtos</p>
              <h2 className="mt-3 text-4xl font-black text-foreground">
                {products.length} peças disponíveis
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-foreground/62">
              Escolha pela cor, pela referência ou pelo que combina com sua
              rotina.
            </p>
          </div>

          {products.length ? (
            <ProductGrid products={products} />
          ) : (
            <div className="soft-corner border border-foreground/15 bg-background p-8 text-center">
              <p className="text-state">Nenhum produto encontrado.</p>
              <p className="text-small mt-2">
                Tente outra categoria ou volte para a coleção completa.
              </p>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
