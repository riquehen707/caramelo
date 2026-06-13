import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/commerce/types";
import { getProductMainImage } from "@/lib/product-images";
import { Button } from "@/components/ui/Button";
import { BrandStamp } from "@/components/ui/BrandStamp";
import { Container } from "@/components/ui/Container";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { Price } from "@/components/ui/Price";
import { ProductFrame } from "@/components/ui/ProductFrame";
import styles from "./HeroSection.module.scss";

type HeroSectionProps = {
  primaryProduct?: Product;
  secondaryProduct?: Product;
};

const stamps = ["Rua", "Futebol", "Humor", "Caramelo"];

export function HeroSection({
  primaryProduct,
  secondaryProduct,
}: HeroSectionProps) {
  return (
    <section className={`${styles.root} relative overflow-hidden border-b border-border bg-background`}>
      <Container className="grid gap-8 py-8 md:py-14 lg:min-h-[calc(100vh-76px)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-16">
        <div className="max-w-2xl">
          <BrandStamp>Drop 01 / Brasil Caramelo</BrandStamp>
          <h1 className="mt-6 text-display text-foreground">
            Camisetas brasileiras.
          </h1>
          <p className="mt-5 max-w-[21rem] text-lg font-semibold leading-7 text-foreground sm:max-w-xl">
            Peças com humor seco, Brasil de rua e acabamento feito sob demanda.
          </p>

          <div className="mt-7 grid w-full max-w-[22rem] gap-3 sm:flex sm:max-w-none sm:flex-row">
            <Button
              href="/produtos"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              rightIcon={<ArrowRight size={18} strokeWidth={2.4} />}
            >
              Ver coleção
            </Button>
            <Button
              href="#marca"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Conhecer manifesto
            </Button>
          </div>

          <div className="mt-7 hidden max-w-xl grid-cols-3 overflow-hidden rounded-[var(--radius-brand)] border border-border bg-surface sm:grid">
            <HeroNote label="Pedido" value="WhatsApp" />
            <HeroNote label="Base" value="Camiseta" />
            <HeroNote label="Drop" value="01" />
          </div>
        </div>

        <div className="relative hidden gap-4 md:grid md:grid-cols-[minmax(0,1fr)_minmax(180px,0.48fr)] md:items-end">
          {primaryProduct ? (
            <FeaturedHeroProduct product={primaryProduct} />
          ) : (
            <EmptyHeroProduct />
          )}

          {secondaryProduct ? (
            <MiniHeroProduct product={secondaryProduct} />
          ) : null}
        </div>
      </Container>

      <div className="hidden sm:block">
        <MarqueeStrip items={stamps} />
      </div>
    </section>
  );
}

function HeroNote({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-r border-border px-4 py-3 last:border-r-0">
      <p className="text-label text-caramelo">{label}</p>
      <p className="mt-1 text-sm font-semibold text-foreground">{value}</p>
    </div>
  );
}

function FeaturedHeroProduct({ product }: { product: Product }) {
  const image = getProductMainImage(product);

  return (
    <Link
      href={`/produtos/${product.slug}`}
      className="group block text-foreground"
      aria-label={`Ver produto ${product.name}`}
    >
      <ProductFrame interactive className="bg-surface">
        <div className="relative aspect-[4/5]">
          <Image
            src={image.url}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 92vw"
            className="object-contain p-8 transition duration-500 group-hover:scale-[1.035] md:p-10"
            unoptimized={image.isPlaceholder || image.url.endsWith(".svg")}
          />
        </div>
        <div className="flex items-end justify-between gap-4 border-t border-border bg-surface p-5">
          <div>
            <BrandStamp>Peça principal</BrandStamp>
            <h2 className="mt-2 max-w-sm text-lg font-semibold leading-tight text-foreground">
              {product.name}
            </h2>
          </div>
          <Price
            price={product.price}
            compareAtPrice={product.compareAtPrice}
            currency={product.currency}
          />
        </div>
      </ProductFrame>
    </Link>
  );
}

function MiniHeroProduct({ product }: { product: Product }) {
  const image = getProductMainImage(product);

  return (
    <Link
      href={`/produtos/${product.slug}`}
      className="group block text-foreground md:mb-8"
      aria-label={`Ver produto ${product.name}`}
    >
      <ProductFrame interactive className="bg-surface">
        <div className="relative aspect-[4/5]">
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 22vw, 70vw"
            className="object-contain p-6 transition duration-500 group-hover:scale-[1.035]"
            unoptimized={image.isPlaceholder || image.url.endsWith(".svg")}
          />
        </div>
        <div className="border-t border-border bg-surface p-4">
          <BrandStamp>Também no drop</BrandStamp>
          <h2 className="mt-2 text-sm font-semibold leading-tight text-foreground">
            {product.name}
          </h2>
        </div>
      </ProductFrame>
    </Link>
  );
}

function EmptyHeroProduct() {
  return (
    <div className="grid min-h-[420px] place-items-center rounded-[var(--radius-brand)] border border-border bg-surface p-8 text-center">
      <p className="text-small">Produto em destaque.</p>
    </div>
  );
}
