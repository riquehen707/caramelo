import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
      <Container className="py-10 md:py-20">
        <CommercePanel className="grid overflow-hidden bg-surface lg:grid-cols-[1fr_0.72fr]">
          <div className="flex flex-col justify-center p-5 md:p-10 lg:p-12">
            <BrandStamp>Compra simples</BrandStamp>
            <h2 className="mt-4 max-w-3xl text-section-title text-foreground">
              Vista o Brasil sem cair no óbvio.
            </h2>
            <p className="mt-4 max-w-xl text-base font-semibold leading-7 text-muted md:text-lg">
              Escolha a camiseta, revise o carrinho e finalize pelo WhatsApp.
            </p>
            <Button
              href="/produtos"
              variant="dark"
              size="lg"
              className="mt-6 w-full sm:w-fit"
              rightIcon={<ArrowRight size={18} />}
            >
              Ver coleção agora
            </Button>
          </div>

          <div className="border-t border-foreground/12 p-4 lg:border-l lg:border-t-0">
            {image ? (
              <ProductFrame className="relative min-h-[300px] md:min-h-[420px]">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="object-contain p-6 md:p-10"
                  unoptimized={image.isPlaceholder || image.url.endsWith(".svg")}
                />
              </ProductFrame>
            ) : null}
          </div>
        </CommercePanel>
      </Container>
    </section>
  );
}
