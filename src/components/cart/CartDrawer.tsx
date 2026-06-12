"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { MessageCircle, X } from "lucide-react";
import { CartItem } from "./CartItem";
import { Button } from "@/components/ui/Button";
import { Price } from "@/components/ui/Price";
import { useCartStore } from "@/store/cart-store";
import {
  createWhatsAppOrderLink,
  isWhatsAppOrderEnabled,
} from "@/lib/whatsapp";

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
        className="inline-flex h-11 items-center justify-center gap-2 border border-foreground/15 bg-surface px-4 text-sm font-semibold text-foreground transition hover:border-caramelo"
      >
        Carrinho
        {visibleTotalItems > 0 ? (
          <span className="grid min-w-5 place-items-center bg-surface-dark px-1.5 text-xs font-semibold text-white">
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
            className="absolute inset-0 bg-surface-dark/55"
            onClick={closeCart}
          />
          <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background shadow-2xl">
            <div className="flex items-start justify-between border-b border-foreground/12 p-5">
              <div>
                <p className="text-label text-caramelo">Caramelo</p>
                <h2
                  id="cart-drawer-title"
                  className="mt-2 text-3xl font-bold text-foreground"
                >
                  Carrinho
                </h2>
              </div>
              <button
                type="button"
                aria-label="Fechar carrinho"
                onClick={closeCart}
                className="grid size-10 place-items-center border border-foreground/15 bg-surface text-foreground"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5">
              {items.length ? (
                items.map((item) => (
                  <CartItem
                    key={`${item.productId}-${item.selectedSize ?? "default"}-${item.selectedColor ?? "default"}`}
                    item={item}
                  />
                ))
              ) : (
                <div className="grid h-full place-items-center py-16 text-center">
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      Seu carrinho está vazio.
                    </p>
                    <p className="text-small mt-2">
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

            <div className="grid gap-4 border-t border-foreground/12 p-5">
              <div className="flex items-center justify-between text-base">
                <span className="font-medium text-muted">Subtotal</span>
                <Price price={subtotal} size="lg" />
              </div>
              <Button href="/carrinho" onClick={closeCart} variant="dark">
                Revisar carrinho
              </Button>
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
              <p className="text-small">
                Você será direcionado para o WhatsApp para confirmar
                disponibilidade, frete e pagamento.
              </p>
              {!hasWhatsAppNumber ? (
                <p className="text-support text-[#9a3f2b]">
                  WhatsApp da loja ainda não configurado.
                </p>
              ) : null}
              <Link
                href="/produtos"
                onClick={closeCart}
                className="text-center text-sm font-semibold text-caramelo underline-offset-4 hover:underline"
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
