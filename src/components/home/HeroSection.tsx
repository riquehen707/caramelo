import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/commerce/types";
import { getProductMainImage } from "@/lib/product-images";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Price } from "@/components/ui/Price";

type HeroSectionProps = {
  primaryProduct?: Product;
  secondaryProduct?: Product;
};

const stamps = ["Rua", "Futebol", "Cultura popular", "Caramelo"];

export function HeroSection({
  primaryProduct,
  secondaryProduct,
}: HeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-surface-dark text-background">
      <div className="absolute inset-x-0 top-0 h-28 bg-[#251b13]" />
      <Container className="relative grid min-h-[calc(100vh-76px)] gap-10 py-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-center lg:py-12">
        <div className="relative z-10">
          <p className="text-label text-[#d5a067]">Drop 01 / Brasil Caramelo</p>
          <h1 className="mt-6 max-w-[9.5ch] text-display text-[#fff6e8]">
            Camisetas brasileiras sem fantasia.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#d8cabb]">
            Rua, futebol e cultura popular em peças com identidade nacional e
            visual de marca.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href="/produtos"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight size={18} strokeWidth={2.4} />}
            >
              Ver coleção
            </Button>
            <Button
              href="#marca"
              variant="outline"
              size="lg"
              className="border-white/25 text-white hover:border-white hover:bg-white hover:text-surface-dark"
            >
              Conhecer a Caramelo
            </Button>
          </div>
        </div>

        <div className="relative min-h-[600px] lg:min-h-[720px]">
          <div className="absolute right-0 top-6 hidden h-[88%] w-[78%] rotate-2 rounded-[8px] bg-[#d6b083] opacity-90 lg:block" />
          <div className="absolute bottom-16 left-0 hidden h-28 w-64 -rotate-6 rounded-[8px] bg-brasil-green/75 lg:block" />

          {primaryProduct ? (
            <HeroProduct
              product={primaryProduct}
              className="absolute left-0 top-8 w-[78%] rotate-[-3deg] md:left-6 lg:left-10 lg:w-[62%]"
              featured
            />
          ) : null}

          {secondaryProduct ? (
            <HeroProduct
              product={secondaryProduct}
              className="absolute bottom-8 right-0 w-[58%] rotate-[4deg] md:w-[44%] lg:right-4"
            />
          ) : null}

          <div className="absolute right-4 top-12 hidden rounded-[8px] border border-white/18 bg-white/10 px-4 py-5 text-right backdrop-blur md:block">
            <p className="text-label text-[#d5a067]">Sem souvenir</p>
            <p className="mt-20 max-w-[13rem] text-2xl font-semibold leading-tight text-white">
              Brasil como repertório, não fantasia.
            </p>
          </div>
        </div>
      </Container>

      <div className="relative z-10 border-y border-white/10 bg-[#f3eadc] text-surface-dark">
        <Container className="flex flex-wrap items-center justify-between gap-3 py-4">
          {stamps.map((stamp, index) => (
            <span
              key={stamp}
              className="text-sm font-black uppercase tracking-[0.12em]"
            >
              {index > 0 ? <span className="mr-3 text-caramelo">/</span> : null}
              {stamp}
            </span>
          ))}
        </Container>
      </div>
    </section>
  );
}

function HeroProduct({
  product,
  featured = false,
  className,
}: {
  product: Product;
  featured?: boolean;
  className?: string;
}) {
  const image = getProductMainImage(product);

  return (
    <Link
      href={`/produtos/${product.slug}`}
      className={`group editorial-card block overflow-hidden border border-white/20 bg-[#e7dccb] text-foreground transition duration-500 hover:rotate-0 ${className ?? ""}`}
      aria-label={`Ver produto ${product.name}`}
    >
      <div className={featured ? "relative aspect-[4/5]" : "relative aspect-[4/5]"}>
        <Image
          src={image.url}
          alt={image.alt}
          fill
          priority={featured}
          sizes={featured ? "(min-width: 1024px) 46vw, 90vw" : "360px"}
          className="object-contain p-7 transition duration-500 group-hover:scale-[1.04] md:p-9"
          unoptimized={image.isPlaceholder || image.url.endsWith(".svg")}
        />
      </div>
      <div className="flex items-end justify-between gap-4 bg-surface p-4">
        <div>
          <p className="text-label text-caramelo">
            {featured ? "Peça principal" : "Também no drop"}
          </p>
          <h2 className="mt-1 max-w-72 text-base font-semibold leading-tight">
            {product.name}
          </h2>
        </div>
        {featured ? (
          <Price
            price={product.price}
            compareAtPrice={product.compareAtPrice}
            currency={product.currency}
          />
        ) : null}
      </div>
    </Link>
  );
}
