import Image from "next/image";
import type { Product } from "@/lib/commerce/types";
import {
  getProductSlotImage,
  PRODUCT_IMAGE_SLOTS,
} from "@/lib/product-images";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import styles from "./ProductImageSlotsPreview.module.scss";

type ProductImageSlotsPreviewProps = {
  product: Product;
};

export function ProductImageSlotsPreview({
  product,
}: ProductImageSlotsPreviewProps) {
  return (
    <div className={`${styles.root} grid gap-4 md:grid-cols-2 xl:grid-cols-5`}>
      {PRODUCT_IMAGE_SLOTS.map((slot) => {
        const image = getProductSlotImage(product, slot.type);
        const isPresent = !image.isPlaceholder;

        return (
          <Card key={slot.type} className="overflow-hidden bg-surface">
            <div className="relative aspect-[4/5] bg-[#e7dccb]">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                sizes="(min-width: 1280px) 20vw, (min-width: 768px) 50vw, 100vw"
                className="object-contain p-4"
                unoptimized={image.isPlaceholder || image.url.endsWith(".svg")}
              />
            </div>
            <div className="grid gap-3 border-t border-border p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-foreground">
                    {slot.label}
                  </h3>
                  <p className="text-support mt-1">{slot.requirement}</p>
                </div>
                <Badge variant={isPresent ? "green" : "muted"}>
                  {isPresent ? "Presente" : "Pendente"}
                </Badge>
              </div>
              <p className="text-small">{slot.description}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
