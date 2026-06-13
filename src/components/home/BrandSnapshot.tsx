import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/commerce/types";
import { getProductMainImage } from "@/lib/product-images";
import { BrandStamp } from "@/components/ui/BrandStamp";
import { Container } from "@/components/ui/Container";
import { Price } from "@/components/ui/Price";
import { ProductFrame } from "@/components/ui/ProductFrame";
import styles from "./BrandSnapshot.module.scss";

type BrandSnapshotProps = {
  products: Product[];
};

const notes = [
  "Rua",
  "Futebol",
  "Humor seco",
];

export function BrandSnapshot({ products }: BrandSnapshotProps) {
  const previewProducts = products.slice(0, 3);
  const leadProduct = previewProducts[0];

  return (
    <section className={`${styles.root} relative overflow-hidden border-b border-foreground/10 bg-surface`}>
      <Container className="grid gap-12 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-24">
        <div id="marca" className="relative z-10">
          <BrandStamp>Caramelo / contexto</BrandStamp>
          <h2 className="mt-5 max-w-2xl text-section-title text-foreground">
            Marca de camiseta com repertório brasileiro.
          </h2>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-7 text-foreground">
            Texto curto da seção.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {notes.map((note) => (
              <BrandStamp key={note}>{note}</BrandStamp>
            ))}
          </div>
        </div>

        <div className="relative min-h-[560px]">
          <div className="absolute left-8 top-8 h-80 w-72 -rotate-6 rounded-[var(--radius-brand)] border-2 border-foreground bg-caramelo" />
          {leadProduct ? <SnapshotFeature product={leadProduct} /> : null}
          <div className="absolute bottom-0 right-0 grid w-[72%] gap-4 sm:w-[58%]">
            {previewProducts.slice(1).map((product, index) => (
              <SnapshotMini
                key={product.id}
                product={product}
                tilt={index === 0 ? "right" : "left"}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function SnapshotFeature({ product }: { product: Product }) {
  const image = getProductMainImage(product);

  return (
    <Link
      href={`/produtos/${product.slug}`}
      className="group absolute left-0 top-0 block w-[78%] sm:w-[64%]"
    >
      <ProductFrame interactive tilt="left" className="bg-background">
        <div className="relative aspect-[4/5]">
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 36vw, 90vw"
            className="object-contain p-8 transition duration-500 group-hover:scale-[1.035]"
            unoptimized={image.isPlaceholder || image.url.endsWith(".svg")}
          />
        </div>
        <div className="flex items-end justify-between gap-4 bg-surface p-5">
          <div>
            <BrandStamp>Peça guia</BrandStamp>
            <h3 className="mt-2 text-xl font-semibold text-foreground">
              {product.name}
            </h3>
          </div>
          <Price price={product.price} currency={product.currency} />
        </div>
      </ProductFrame>
    </Link>
  );
}

function SnapshotMini({
  product,
  tilt,
}: {
  product: Product;
  tilt: "left" | "right";
}) {
  const image = getProductMainImage(product);

  return (
    <Link href={`/produtos/${product.slug}`} className="group block">
      <ProductFrame
        interactive
        tilt={tilt}
        className="grid grid-cols-[112px_1fr] bg-background"
      >
        <div className="relative aspect-square">
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="112px"
            className="object-contain p-4 transition duration-500 group-hover:scale-[1.04]"
            unoptimized={image.isPlaceholder || image.url.endsWith(".svg")}
          />
        </div>
        <div className="flex flex-col justify-between bg-surface p-4">
          <BrandStamp>{product.collection}</BrandStamp>
          <div>
            <h3 className="font-semibold leading-snug text-foreground">
              {product.name}
            </h3>
            <Price price={product.price} currency={product.currency} size="sm" />
          </div>
        </div>
      </ProductFrame>
    </Link>
  );
}
