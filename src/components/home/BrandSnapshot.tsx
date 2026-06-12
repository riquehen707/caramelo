import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/commerce/types";
import { getProductMainImage } from "@/lib/product-images";
import { Container } from "@/components/ui/Container";
import { Price } from "@/components/ui/Price";

type BrandSnapshotProps = {
  products: Product[];
};

const notes = [
  "Camiseta como peça central",
  "Streetwear brasileiro sem folclore",
  "Futebol e rua em doses certas",
];

export function BrandSnapshot({ products }: BrandSnapshotProps) {
  const previewProducts = products.slice(0, 3);
  const leadProduct = previewProducts[0];

  return (
    <section className="relative overflow-hidden border-b border-foreground/10 bg-surface">
      <Container className="grid gap-12 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-24">
        <div id="marca" className="relative z-10">
          <p className="text-label text-caramelo">Caramelo / contexto</p>
          <h2 className="mt-5 max-w-2xl text-section-title text-foreground">
            Marca de camiseta com repertório brasileiro.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/70">
            A Caramelo pega sinais do Brasil real, do bairro ao estádio, e
            transforma em roupa limpa, usável e comercial.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {notes.map((note) => (
              <span
                key={note}
                className="rounded-[8px] border border-foreground/12 bg-background px-4 py-3 text-sm font-semibold text-foreground shadow-sm"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[560px]">
          <div className="absolute left-8 top-8 h-80 w-72 -rotate-6 rounded-[8px] bg-caramelo/20" />
          {leadProduct ? <SnapshotFeature product={leadProduct} /> : null}
          <div className="absolute bottom-0 right-0 grid w-[72%] gap-4 sm:w-[58%]">
            {previewProducts.slice(1).map((product, index) => (
              <SnapshotMini
                key={product.id}
                product={product}
                tilt={index === 0 ? "rotate-2" : "-rotate-2"}
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
      className="group editorial-card absolute left-0 top-0 block w-[78%] rotate-[-2deg] overflow-hidden border border-foreground/12 bg-background transition duration-500 hover:rotate-0 sm:w-[64%]"
    >
      <div className="relative aspect-[4/5] bg-[#e6d9c7]">
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
          <p className="text-label text-caramelo">Peça guia</p>
          <h3 className="mt-2 text-xl font-semibold text-foreground">
            {product.name}
          </h3>
        </div>
        <Price price={product.price} currency={product.currency} />
      </div>
    </Link>
  );
}

function SnapshotMini({
  product,
  tilt,
}: {
  product: Product;
  tilt: string;
}) {
  const image = getProductMainImage(product);

  return (
    <Link
      href={`/produtos/${product.slug}`}
      className={`group editorial-card grid grid-cols-[112px_1fr] overflow-hidden border border-foreground/12 bg-background transition duration-500 hover:rotate-0 ${tilt}`}
    >
      <div className="relative aspect-square bg-[#e6d9c7]">
        <Image
          src={image.url}
          alt={image.alt}
          fill
          sizes="112px"
          className="object-contain p-4 transition duration-500 group-hover:scale-[1.04]"
          unoptimized={image.isPlaceholder || image.url.endsWith(".svg")}
        />
      </div>
      <div className="flex flex-col justify-between p-4">
        <p className="text-label text-caramelo">{product.collection}</p>
        <div>
          <h3 className="font-semibold leading-snug text-foreground">
            {product.name}
          </h3>
          <Price price={product.price} currency={product.currency} size="sm" />
        </div>
      </div>
    </Link>
  );
}
