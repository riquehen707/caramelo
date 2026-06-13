import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/commerce/types";
import { getProductMainImage } from "@/lib/product-images";
import { BrandStamp } from "@/components/ui/BrandStamp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Price } from "@/components/ui/Price";
import { ProductFrame } from "@/components/ui/ProductFrame";
import styles from "./BrandSnapshot.module.scss";

type BrandSnapshotProps = {
  products: Product[];
};

export function BrandSnapshot({ products }: BrandSnapshotProps) {
  const product = products[0];

  if (!product) return null;

  const image = getProductMainImage(product);

  return (
    <section className={`${styles.root} border-b border-foreground/10 bg-background`}>
      <Container className="grid gap-5 py-8 md:grid-cols-[0.9fr_1fr] md:items-center md:gap-10 md:py-16">
        <Link
          href={`/produtos/${product.slug}`}
          aria-label={`Ver produto ${product.name}`}
          className="group block"
        >
          <ProductFrame interactive className="bg-surface">
            <div className="relative aspect-[4/5] max-h-[520px] w-full overflow-hidden">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                priority
                sizes="(min-width: 768px) 42vw, 92vw"
                className="object-contain p-6 transition duration-500 group-hover:scale-[1.03] sm:p-8"
                unoptimized={image.isPlaceholder || image.url.endsWith(".svg")}
              />
            </div>
          </ProductFrame>
        </Link>

        <div className="rounded-[var(--radius-brand)] border border-border bg-surface p-5 shadow-[var(--shadow-soft)] md:p-7">
          <BrandStamp>Produto em destaque</BrandStamp>
          <h2 className="mt-4 break-words text-2xl font-black leading-tight text-foreground md:text-4xl">
            {product.name}
          </h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-muted md:text-base">
            Camiseta com identidade brasileira, feita para entrar na rotina sem
            virar fantasia.
          </p>
          <div className="mt-5 flex flex-col items-start gap-2 border-y border-border py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <Price
              price={product.price}
              compareAtPrice={product.compareAtPrice}
              currency={product.currency}
              size="lg"
            />
            <span className="text-label text-caramelo-dark">
              {product.availableForSale ? "Disponível" : "Esgotado"}
            </span>
          </div>
          <Button
            href={`/produtos/${product.slug}`}
            variant="dark"
            size="lg"
            className="mt-5 w-full"
            rightIcon={<ArrowRight size={18} />}
          >
            Ver produto
          </Button>
        </div>
      </Container>
    </section>
  );
}
