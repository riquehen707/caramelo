"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Price } from "@/components/ui/Price";
import { useCartStore, type CartItem as CartLine } from "@/store/cart-store";

type CartItemProps = {
  item: CartLine;
};

export function CartItem({ item }: CartItemProps) {
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div className="grid grid-cols-[84px_1fr] gap-4 border-b border-foreground/10 py-5">
      <Link
        href={`/produtos/${item.slug}`}
        className="relative aspect-square overflow-hidden bg-[#e8dccb]"
      >
        <Image
          src={item.image.url}
          alt={item.image.alt}
          fill
          sizes="72px"
          className="object-contain p-3"
          unoptimized={item.image.isPlaceholder || item.image.url.endsWith(".svg")}
        />
      </Link>
      <div className="grid gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link
              href={`/produtos/${item.slug}`}
              className="font-semibold leading-tight text-foreground hover:underline"
            >
              {item.name}
            </Link>
            <p className="text-small mt-1">
              {[item.selectedSize ? `Tamanho ${item.selectedSize}` : null, item.selectedColor].filter(Boolean).join(" / ") ||
                "Sem variante"}
            </p>
          </div>
          <button
            type="button"
            aria-label={`Remover ${item.name}`}
            onClick={() =>
              removeItem(item.productId, item.selectedSize, item.selectedColor)
            }
            className="grid size-9 shrink-0 place-items-center border border-foreground/15 text-muted transition hover:border-caramelo hover:text-foreground"
          >
            <Trash2 size={16} />
            <span className="sr-only">Remover</span>
          </button>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex h-10 items-center border border-foreground/15 bg-background">
            <button
              type="button"
              aria-label="Diminuir quantidade"
              onClick={() =>
                decreaseQuantity(item.productId, item.selectedSize, item.selectedColor)
              }
              className="grid size-10 place-items-center text-foreground"
            >
              <Minus size={15} />
            </button>
            <span className="min-w-8 text-center text-sm font-semibold">
              {item.quantity}
            </span>
            <button
              type="button"
              aria-label="Aumentar quantidade"
              onClick={() =>
                increaseQuantity(item.productId, item.selectedSize, item.selectedColor)
              }
              className="grid size-10 place-items-center text-foreground"
            >
              <Plus size={15} />
            </button>
          </div>
          <Price price={item.price * item.quantity} currency={item.currency} />
        </div>
      </div>
    </div>
  );
}
