"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Price } from "@/components/ui/Price";
import { useCartStore, type CartItem as CartLine } from "@/store/cart-store";
import styles from "./CartItem.module.scss";

type CartItemProps = {
  item: CartLine;
};

export function CartItem({ item }: CartItemProps) {
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const options = [
    item.selectedSize ? `Tamanho ${item.selectedSize}` : null,
    item.selectedColor ? `Cor ${item.selectedColor}` : null,
  ].filter(Boolean);

  return (
    <article className={`${styles.root} grid grid-cols-[88px_1fr] gap-4 border-b border-foreground/10 py-5 last:border-b-0 sm:grid-cols-[104px_1fr]`}>
      <Link
        href={`/produtos/${item.slug}`}
        className="relative aspect-square overflow-hidden rounded-[var(--radius-control)] border border-foreground/12 bg-[var(--surface-muted)]"
      >
        <Image
          src={item.image.url}
          alt={item.image.alt}
          fill
          sizes="104px"
          className="object-contain p-3"
          unoptimized={item.image.isPlaceholder || item.image.url.endsWith(".svg")}
        />
      </Link>

      <div className="min-w-0 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link
              href={`/produtos/${item.slug}`}
              className="block text-sm font-semibold leading-snug text-foreground transition hover:text-[var(--caramelo)]"
            >
              {item.name}
            </Link>
            {options.length > 0 ? (
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {options.join(" / ")}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            aria-label={`Remover ${item.name} do carrinho`}
            onClick={() =>
              removeItem(item.productId, item.selectedSize, item.selectedColor)
            }
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-control)] border border-foreground/10 text-muted transition hover:border-[var(--caramelo)] hover:text-[var(--caramelo)]"
          >
            <Trash2 className="h-4 w-4" aria-hidden />
          </button>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex h-10 items-center rounded-[var(--radius-control)] border border-foreground/12 bg-[var(--surface)]">
            <button
              type="button"
              aria-label={`Diminuir quantidade de ${item.name}`}
              onClick={() =>
                decreaseQuantity(
                  item.productId,
                  item.selectedSize,
                  item.selectedColor,
                )
              }
              className="inline-flex h-10 w-10 items-center justify-center text-muted transition hover:text-foreground"
            >
              <Minus className="h-4 w-4" aria-hidden />
            </button>
            <span className="w-8 text-center text-sm font-semibold">
              {item.quantity}
            </span>
            <button
              type="button"
              aria-label={`Aumentar quantidade de ${item.name}`}
              onClick={() =>
                increaseQuantity(
                  item.productId,
                  item.selectedSize,
                  item.selectedColor,
                )
              }
              className="inline-flex h-10 w-10 items-center justify-center text-muted transition hover:text-foreground"
            >
              <Plus className="h-4 w-4" aria-hidden />
            </button>
          </div>

          <Price
            price={item.price * item.quantity}
            currency={item.currency}
            className="text-base font-semibold"
          />
        </div>
      </div>
    </article>
  );
}
