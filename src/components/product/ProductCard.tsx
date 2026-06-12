import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import type { Product } from "@/lib/commerce/types";
import { getProductMainImage } from "@/lib/product-images";
import { getColorSwatch } from "@/lib/product-style";
import { Price } from "@/components/ui/Price";

type ProductCardProps = {
  product: Product;
  index?: number;
};

const cardMotion = [
  "-rotate-1",
  "rotate-1 md:translate-y-6",
  "md:-translate-y-2",
  "rotate-[0.7deg] md:translate-y-10",
];

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const mainImage = getProductMainImage(product);
  const isOnSale =
    typeof product.compareAtPrice === "number" &&
    product.compareAtPrice > product.price;

  return (
    <Link
      href={`/produtos/${product.slug}`}
      aria-label={`Ver produto ${product.name}`}
      className={clsx(
        "group grid gap-4 transition duration-500 hover:-translate-y-1 hover:rotate-0",
        cardMotion[index % cardMotion.length],
        !product.availableForSale && "opacity-70",
      )}
    >
      <div className="editorial-card relative overflow-hidden border border-foreground/12 bg-[#e8dccb]">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={mainImage.url}
            alt={mainImage.alt}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, (min-width: 520px) 50vw, 100vw"
            className="object-contain p-6 transition duration-500 group-hover:scale-[1.04]"
            unoptimized={mainImage.isPlaceholder || mainImage.url.endsWith(".svg")}
          />
        </div>
        <div className="absolute left-3 top-3 flex gap-2">
          {isOnSale ? (
            <span className="rounded-[6px] bg-surface px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-caramelo-dark">
              Promo
            </span>
          ) : null}
          {!product.availableForSale ? (
            <span className="rounded-[6px] bg-surface-dark px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white">
              Esgotado
            </span>
          ) : null}
        </div>
      </div>

      <div className="grid gap-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-label text-caramelo">
              {product.collection ?? product.category}
            </p>
            <h3 className="mt-2 text-base font-semibold leading-snug text-foreground">
              {product.name}
            </h3>
          </div>
          <Price
            price={product.price}
            compareAtPrice={product.compareAtPrice}
            currency={product.currency}
            className="justify-end text-right"
          />
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-foreground/10 pt-3">
          {product.colors?.length ? (
            <div className="flex gap-1.5">
              {product.colors.slice(0, 4).map((color) => (
                <span
                  key={color}
                  title={color}
                  className="size-3 rounded-full border border-foreground/20"
                  style={{ backgroundColor: getColorSwatch(color) }}
                />
              ))}
            </div>
          ) : (
            <span />
          )}
          <span className="text-sm font-semibold text-foreground/70 underline-offset-4 transition group-hover:text-caramelo group-hover:underline">
            {product.availableForSale ? "Ver produto" : "Indisponível"}
          </span>
        </div>
      </div>
    </Link>
  );
}
