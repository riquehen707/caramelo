import type { Metadata } from "next";
import Image from "next/image";
import { commerce } from "@/lib/commerce";
import { getProductMainImage } from "@/lib/product-images";
import { BrandStamp } from "@/components/ui/BrandStamp";
import { Container } from "@/components/ui/Container";
import { EditorialFrame } from "@/components/ui/EditorialFrame";
import { ProductFrame } from "@/components/ui/ProductFrame";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ProductGrid } from "@/components/product/ProductGrid";

export const metadata: Metadata = {
  title: "Coleção Brasil Caramelo",
  description:
    "Conheça camisetas com estética brasileira, visual urbano e referências do Brasil real.",
};

const catalogNotes = [
  "Camisetas",
  "Drop 01",
  "Pedido pelo WhatsApp",
];

export default async function ProductsPage() {
  const products = await commerce.getProducts();
  const leadProduct = products[0];
  const leadImage = leadProduct ? getProductMainImage(leadProduct) : null;

  return (
    <main>
      <section className="relative overflow-hidden border-b border-foreground/10 bg-background">
        <Container className="grid gap-10 py-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:py-20">
          <div className="relative z-10">
            <BrandStamp>Coleção Brasil Caramelo</BrandStamp>
            <h1 className="mt-5 max-w-3xl text-display text-foreground">
              Camisetas em linha.
            </h1>
            <p className="mt-6 max-w-md text-lg font-semibold leading-7 text-foreground">
              Rua, futebol, humor e camiseta pronta para pedido.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {catalogNotes.map((note) => (
                <BrandStamp key={note}>{note}</BrandStamp>
              ))}
            </div>
          </div>

          <div className="relative grid gap-4 md:min-h-[520px]">
            <div className="absolute right-8 top-0 hidden h-72 w-[62%] rotate-3 rounded-[var(--radius-brand)] border-2 border-foreground bg-caramelo md:block" />
            <EditorialFrame
              tilt="left"
              className="z-10 w-full p-5 md:absolute md:left-0 md:top-10 md:w-[46%]"
            >
              <BrandStamp>Catálogo</BrandStamp>
              <p className="mt-16 max-w-sm text-3xl font-black leading-tight text-foreground">
                Catalogo direto. Produto em primeiro plano.
              </p>
            </EditorialFrame>
            {leadImage ? (
              <ProductFrame
                tilt="right"
                className="relative z-20 min-h-[420px] w-full justify-self-end md:absolute md:bottom-0 md:right-0 md:w-[54%]"
              >
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
              </ProductFrame>
            ) : null}
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="grid gap-10 py-14 md:py-24">
          <SectionIntro
            eyebrow="Todos os produtos"
            title={`${products.length} peças disponíveis`}
            description={
              <>
                Texto curto da seção.
              </>
            }
            align="between"
          />

          {products.length ? (
            <ProductGrid products={products} variant="catalog" />
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
