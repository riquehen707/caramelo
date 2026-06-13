import Image from "next/image";
import type { Product } from "@/lib/commerce/types";
import { getProductMainImage } from "@/lib/product-images";
import { BrandStamp } from "@/components/ui/BrandStamp";
import { Button } from "@/components/ui/Button";
import { CommercePanel } from "@/components/ui/CommercePanel";
import { Container } from "@/components/ui/Container";
import { ProductFrame } from "@/components/ui/ProductFrame";
import styles from "./EditorialBanner.module.scss";

type EditorialBannerProps = {
  product?: Product;
};

export function EditorialBanner({ product }: EditorialBannerProps) {
  const image = product ? getProductMainImage(product) : null;

  return (
    <section className={`${styles.root} bg-background`}>
      <Container className="py-16 md:py-24">
        <CommercePanel className="grid overflow-hidden lg:grid-cols-[1fr_0.78fr]">
          <div className="flex flex-col justify-between gap-12 p-6 md:p-10 lg:p-12">
            <div>
              <BrandStamp>Compra simples</BrandStamp>
              <h2 className="mt-5 max-w-3xl text-section-title text-foreground">
                Vista o Brasil sem cair no óbvio.
              </h2>
              <p className="mt-6 max-w-xl text-lg font-semibold leading-7 text-foreground">
                Escolha a peça, revise o carrinho e finalize pelo WhatsApp.
              </p>
            </div>
            <div>
              <Button href="/produtos" variant="dark" size="lg">
                Explorar coleção
              </Button>
            </div>
          </div>

          <div className="border-t border-foreground/12 p-5 lg:border-l lg:border-t-0">
            {image ? (
              <ProductFrame className="relative min-h-[420px]">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-contain p-8 md:p-12"
                  unoptimized={image.isPlaceholder || image.url.endsWith(".svg")}
                />
              </ProductFrame>
            ) : (
              <div className="grid min-h-[420px] place-items-center p-8 text-center text-small">
                Produto da próxima coleção
              </div>
            )}
          </div>
        </CommercePanel>
      </Container>
    </section>
  );
}
