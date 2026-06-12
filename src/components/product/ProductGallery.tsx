import Image from "next/image";
import type { Product } from "@/lib/commerce/types";
import {
  getProductMainImage,
  getPublicProductGalleryImages,
} from "@/lib/product-images";

type ProductGalleryProps = {
  product: Product;
  priority?: boolean;
};

export function ProductGallery({
  product,
  priority = false,
}: ProductGalleryProps) {
  const mainImage = getProductMainImage(product);
  const galleryImages = getPublicProductGalleryImages(product);

  return (
    <div className="grid gap-5">
      <div className="editorial-card relative overflow-hidden border border-foreground/12 bg-[#e7dccb]">
        <div className="absolute left-5 top-5 rounded-[8px] bg-surface px-3 py-2 text-label text-caramelo">
          Caramelo
        </div>
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={mainImage.url}
            alt={mainImage.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-contain p-8 sm:p-12"
            unoptimized={mainImage.isPlaceholder || mainImage.url.endsWith(".svg")}
          />
        </div>
        {mainImage.isPlaceholder ? (
          <span className="absolute bottom-5 left-5 rounded-[6px] bg-surface px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted">
            Mockup temporário
          </span>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {galleryImages.slice(0, 3).map((image, index) => (
          <div
            key={`${image.type}-${image.url}`}
            className={`editorial-card relative aspect-[4/5] overflow-hidden border border-foreground/12 bg-[#e7dccb] ${
              index === 1 ? "sm:translate-y-5 sm:rotate-1" : "sm:-rotate-1"
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 18vw, 33vw"
              className="object-contain p-5"
              unoptimized={image.isPlaceholder || image.url.endsWith(".svg")}
            />
          </div>
        ))}
        <div className="editorial-card flex min-h-40 rotate-1 flex-col justify-between border border-foreground/12 bg-surface p-4">
          <p className="text-label text-caramelo">
            {product.collection ?? "Caramelo"}
          </p>
          <span className="text-small">
            Frente, costas e detalhes preparados para avaliar a peça sem ruído.
          </span>
        </div>
      </div>
    </div>
  );
}
