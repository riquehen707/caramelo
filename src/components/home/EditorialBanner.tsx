import Image from "next/image";
import type { Product } from "@/lib/commerce/types";
import { getProductMainImage } from "@/lib/product-images";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type EditorialBannerProps = {
  product?: Product;
};

export function EditorialBanner({ product }: EditorialBannerProps) {
  const image = product ? getProductMainImage(product) : null;

  return (
    <section className="bg-background">
      <Container className="py-16 md:py-24">
        <div className="grid overflow-hidden border border-foreground/15 bg-surface lg:grid-cols-[1fr_0.78fr]">
          <div className="flex flex-col justify-between gap-12 p-6 md:p-10 lg:p-12">
            <div>
              <p className="text-label text-caramelo">Compra simples</p>
              <h2 className="mt-5 max-w-3xl text-section-title text-foreground">
                Vista o Brasil sem cair no óbvio.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-foreground/68">
                Escolha a peça, revise tamanho e cor no carrinho e finalize o
                pedido direto pelo WhatsApp.
              </p>
            </div>
            <div>
              <Button href="/produtos" variant="dark" size="lg">
                Explorar coleção
              </Button>
            </div>
          </div>

          <div className="relative min-h-[420px] border-t border-foreground/15 bg-[#e4d7c5] lg:border-l lg:border-t-0">
            {image ? (
              <Image
                src={image.url}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain p-8 md:p-12"
                unoptimized={image.isPlaceholder || image.url.endsWith(".svg")}
              />
            ) : (
              <div className="grid h-full place-items-center p-8 text-center text-small">
                Produto da próxima coleção
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
