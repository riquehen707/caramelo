import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import type { Product } from "@/lib/commerce/types";
import { getProductMainImage } from "@/lib/product-images";
import { getColorSwatch } from "@/lib/product-style";
import { BrandStamp } from "@/components/ui/BrandStamp";
import { Price } from "@/components/ui/Price";
import styles from "./ProductCard.module.scss";

type ProductCardProps = {
  product: Product;
  index?: number;
  variant?: "catalog" | "editorial";
};

export function ProductCard({
  product,
  variant = "catalog",
}: ProductCardProps) {
  const image = getProductMainImage(product);
  const isOnSale =
    typeof product.compareAtPrice === "number" &&
    product.compareAtPrice > product.price;

  return (
    <Link
      href={`/produtos/${product.slug}`}
      aria-label={`Ver produto ${product.name}`}
      className={clsx(
        styles.root,
        "group block rounded-[var(--radius-brand)] border border-border bg-surface transition duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]",
        !product.availableForSale && "opacity-70",
      )}
    >
      <div className="relative border-b border-border bg-surface-muted">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, (min-width: 520px) 50vw, 100vw"
            className={clsx(
              "object-contain transition duration-500 group-hover:scale-[1.03]",
              variant === "editorial" ? "p-6" : "p-7",
            )}
            unoptimized={image.isPlaceholder || image.url.endsWith(".svg")}
          />
        </div>

        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {isOnSale ? <BrandStamp>Promo</BrandStamp> : null}
          {!product.availableForSale ? (
            <span className="rounded-[var(--radius-control)] bg-surface-dark px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-surface">
              Esgotado
            </span>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 p-4">
        <div className="grid gap-3">
          <div className="flex items-center justify-between gap-3">
            <BrandStamp>{product.collection ?? product.category}</BrandStamp>
            <ColorDots colors={product.colors ?? []} />
          </div>

          <div className="grid gap-2">
            <h3 className="text-product-name text-foreground">
              {product.name}
            </h3>
            {variant === "catalog" ? (
              <p className="text-small">{product.category}</p>
            ) : null}
          </div>
        </div>

        <div className="flex items-end justify-between gap-4 border-t border-border pt-4">
          <Price
            price={product.price}
            compareAtPrice={product.compareAtPrice}
            currency={product.currency}
            className="min-w-0"
          />
          <span className="shrink-0 text-sm font-semibold text-caramelo-dark underline-offset-4 transition group-hover:text-caramelo group-hover:underline">
            {product.availableForSale ? "Ver produto" : "Indisponível"}
          </span>
        </div>
      </div>
    </Link>
  );
}

function ColorDots({ colors }: { colors: string[] }) {
  if (!colors.length) return null;

  return (
    <div className="flex items-center gap-1.5" aria-label="Cores disponíveis">
      {colors.slice(0, 4).map((color) => (
        <span
          key={color}
          title={color}
          className="size-3 rounded-full border border-foreground/20"
          style={{ backgroundColor: getColorSwatch(color) }}
        />
      ))}
    </div>
  );
}
