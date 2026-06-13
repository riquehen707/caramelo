import Image from "next/image";
import type { Product } from "@/lib/commerce/types";
import {
  getProductMainImage,
  getPublicProductGalleryImages,
} from "@/lib/product-images";
import { BrandStamp } from "@/components/ui/BrandStamp";
import { ProductFrame } from "@/components/ui/ProductFrame";
import styles from "./ProductGallery.module.scss";

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
    <div className={`${styles.root} grid gap-5`}>
      <ProductFrame className="relative">
        <div className="absolute left-5 top-5 z-10">
          <BrandStamp>{product.collection ?? "Caramelo"}</BrandStamp>
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
          <span className="absolute bottom-5 left-5 z-10">
            <BrandStamp>Mockup temporário</BrandStamp>
          </span>
        ) : null}
      </ProductFrame>

      <div className="grid gap-4 sm:grid-cols-3">
        {galleryImages.slice(0, 3).map((image) => (
          <ProductFrame key={`${image.type}-${image.url}`} className="relative aspect-[4/5]">
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 18vw, 33vw"
              className="object-contain p-5"
              unoptimized={image.isPlaceholder || image.url.endsWith(".svg")}
            />
          </ProductFrame>
        ))}
        <div className="commerce-panel flex min-h-40 flex-col justify-between p-4">
          <BrandStamp>{product.category}</BrandStamp>
          <span className="text-small">
            Imagens do produto.
          </span>
        </div>
      </div>
    </div>
  );
}
