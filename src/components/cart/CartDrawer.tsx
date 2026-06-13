"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { MessageCircle, ShoppingBag, X } from "lucide-react";
import { CartItem } from "./CartItem";
import { BrandStamp } from "@/components/ui/BrandStamp";
import { Button } from "@/components/ui/Button";
import { Price } from "@/components/ui/Price";
import { useCartStore } from "@/store/cart-store";
import {
  createWhatsAppOrderLink,
  isWhatsAppOrderEnabled,
} from "@/lib/whatsapp";
import styles from "./CartDrawer.module.scss";

export function CartDrawer() {
  const items = useCartStore((state) => state.items);
  const isOpen = useCartStore((state) => state.isOpen);
  const closeCart = useCartStore((state) => state.closeCart);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const subtotal = useCartStore((state) => state.getSubtotal());
  const totalItems = useCartStore((state) => state.getTotalItems());
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const visibleTotalItems = mounted ? totalItems : 0;
  const whatsappOrderLink = createWhatsAppOrderLink(items, subtotal);
  const hasWhatsAppNumber = isWhatsAppOrderEnabled();
  const canFinishByWhatsApp = items.length > 0 && hasWhatsAppNumber;

  return (
    <>
      <button
        type="button"
        aria-label="Abrir carrinho"
        onClick={toggleCart}
        className={`${styles.root} inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius-control)] border-2 border-foreground bg-surface px-3 text-sm font-black text-foreground shadow-[var(--shadow-soft)] transition hover:bg-background sm:px-4`}
      >
        <ShoppingBag className="h-4 w-4" aria-hidden />
        <span className="hidden sm:inline">Carrinho</span>
        {visibleTotalItems > 0 ? (
          <span className="grid min-w-5 place-items-center rounded-full bg-[var(--surface-dark)] px-1.5 text-xs font-semibold text-white">
            {visibleTotalItems}
          </span>
        ) : null}
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cart-drawer-title"
        >
          <button
            type="button"
            aria-label="Fechar carrinho"
            className="absolute inset-0 bg-[var(--surface-dark)]/72"
            onClick={closeCart}
          />
          <aside className="absolute right-0 top-0 flex h-dvh w-full max-w-[460px] flex-col overflow-hidden border-l-2 border-foreground bg-surface shadow-[var(--shadow-editorial)]">
            <div className="flex items-start justify-between gap-5 border-b-2 border-foreground p-5 sm:p-6">
              <div>
                <BrandStamp>Carrinho</BrandStamp>
                <h2
                  id="cart-drawer-title"
                  className="mt-3 text-3xl font-black tracking-tight text-foreground"
                >
                  Carrinho
                </h2>
              </div>
              <button
                type="button"
                aria-label="Fechar carrinho"
                onClick={closeCart}
                className="grid size-10 shrink-0 place-items-center rounded-[var(--radius-control)] border border-foreground/15 bg-surface text-foreground transition hover:border-[var(--caramelo)] hover:text-[var(--caramelo)]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 sm:px-6">
              {items.length ? (
                items.map((item) => (
                  <CartItem
                    key={`${item.productId}-${item.selectedSize ?? "default"}-${item.selectedColor ?? "default"}`}
                    item={item}
                  />
                ))
              ) : (
                <div className="grid h-full place-items-center py-16 text-center">
                  <div className="max-w-xs">
                    <p className="text-2xl font-semibold tracking-tight text-foreground">
                      Seu carrinho está vazio.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      Escolha uma camiseta da coleção Brasil Caramelo.
                    </p>
                    <Button
                      href="/produtos"
                      variant="dark"
                      className="mt-6"
                      onClick={closeCart}
                    >
                      Ver produtos
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <div className="grid gap-4 border-t-2 border-foreground bg-[var(--surface)] p-5 sm:p-6">
              <div className="flex items-center justify-between text-base">
                <span className="font-black uppercase tracking-[0.04em] text-muted">
                  Subtotal
                </span>
                <Price price={subtotal} size="lg" />
              </div>
              {canFinishByWhatsApp ? (
                <Button
                  href={whatsappOrderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  leftIcon={<MessageCircle size={18} />}
                  onClick={closeCart}
                >
                  Finalizar pelo WhatsApp
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="primary"
                  disabled
                  leftIcon={<MessageCircle size={18} />}
                >
                  Finalizar pelo WhatsApp
                </Button>
              )}
              <p className="text-sm leading-6 text-muted">
                Você será direcionado para o WhatsApp para confirmar
                disponibilidade, frete e pagamento.
              </p>
              {!hasWhatsAppNumber ? (
                <p className="text-xs font-semibold text-[#9a3f2b]">
                  WhatsApp da loja ainda não configurado.
                </p>
              ) : null}
              <Link
                href="/produtos"
                onClick={closeCart}
                className="text-center text-sm font-semibold text-[var(--caramelo-dark)] underline-offset-4 hover:underline"
              >
                Continuar comprando
              </Link>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
