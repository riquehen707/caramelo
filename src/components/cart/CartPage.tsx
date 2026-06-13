"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle, ShieldCheck } from "lucide-react";
import { CartItem } from "./CartItem";
import { BrandStamp } from "@/components/ui/BrandStamp";
import { Button } from "@/components/ui/Button";
import { CommercePanel } from "@/components/ui/CommercePanel";
import { Container } from "@/components/ui/Container";
import { Price } from "@/components/ui/Price";
import { useCartStore } from "@/store/cart-store";
import {
  createWhatsAppOrderLink,
  isWhatsAppOrderEnabled,
} from "@/lib/whatsapp";
import styles from "./CartPage.module.scss";

export function CartPage() {
  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore((state) => state.getSubtotal());
  const totalItems = useCartStore((state) => state.getTotalItems());
  const clearCart = useCartStore((state) => state.clearCart);
  const whatsappOrderLink = createWhatsAppOrderLink(items, subtotal);
  const hasWhatsAppNumber = isWhatsAppOrderEnabled();
  const canFinishByWhatsApp = items.length > 0 && hasWhatsAppNumber;

  return (
    <main className={`${styles.root} bg-background`}>
      <Container className="grid gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_390px] lg:py-16">
        <section className="grid gap-7">
          <div className="border-b border-foreground/15 pb-7">
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--caramelo-dark)] underline-offset-4 hover:underline"
            >
              <ArrowLeft size={17} />
              Continuar comprando
            </Link>
            <div className="mt-6 max-w-2xl">
              <BrandStamp>Pedido Caramelo</BrandStamp>
              <h1 className="mt-4 text-section-title text-foreground">
                Revise seu carrinho
              </h1>
              <p className="mt-4 text-lg font-semibold leading-7 text-foreground">
                Confira tamanho, cor e quantidade. Finalize pelo WhatsApp.
              </p>
            </div>
          </div>

          <CommercePanel className="px-4 py-0 md:px-5">
            {items.length ? (
              items.map((item) => (
                <CartItem
                  key={`${item.productId}-${item.selectedSize ?? "default"}-${item.selectedColor ?? "default"}`}
                  item={item}
                />
              ))
            ) : (
              <div className="grid gap-4 py-16 text-center">
                <p className="text-2xl font-semibold tracking-tight text-foreground">
                  Seu carrinho está vazio.
                </p>
                <p className="mx-auto max-w-sm text-sm leading-6 text-muted">
                  Explore a coleção Brasil Caramelo e escolha sua próxima
                  camiseta.
                </p>
                <Button href="/produtos" variant="dark" className="mx-auto">
                  Ver produtos
                </Button>
              </div>
            )}
          </CommercePanel>
        </section>

        <CommercePanel as="aside" className="h-fit p-5 lg:sticky lg:top-24">
          <div className="border-b border-foreground/12 pb-5">
            <BrandStamp>Resumo do pedido</BrandStamp>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
              Finalização manual
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Sem pagamento online neste MVP.
            </p>
          </div>

          <div className="mt-5 grid gap-3 border-b border-foreground/12 pb-5">
            <div className="flex justify-between gap-4 text-sm">
              <span className="text-muted">Itens</span>
              <strong className="text-foreground">{totalItems}</strong>
            </div>
            <div className="flex justify-between gap-4 text-sm">
              <span className="text-muted">Subtotal</span>
              <Price price={subtotal} />
            </div>
            <div className="flex justify-between gap-4 text-sm">
              <span className="text-muted">Entrega</span>
              <strong className="text-right text-foreground">
                Calculada no WhatsApp
              </strong>
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            {canFinishByWhatsApp ? (
              <Button
                href={whatsappOrderLink}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<MessageCircle size={18} />}
              >
                Finalizar pelo WhatsApp
              </Button>
            ) : (
              <Button
                type="button"
                disabled
                leftIcon={<MessageCircle size={18} />}
              >
                Finalizar pelo WhatsApp
              </Button>
            )}
            {items.length ? (
              <Button
                type="button"
                onClick={clearCart}
                variant="outline"
                size="sm"
              >
                Limpar carrinho
              </Button>
            ) : null}
          </div>

          <p className="mt-5 flex items-start gap-2 text-sm leading-6 text-muted">
            <ShieldCheck
              className="mt-0.5 shrink-0 text-[var(--caramelo)]"
              size={18}
            />
            Você será direcionado para o WhatsApp para confirmar
            disponibilidade, frete e pagamento.
          </p>
          {!hasWhatsAppNumber ? (
            <p className="mt-3 text-xs font-semibold text-[#9a3f2b]">
              WhatsApp da loja ainda não configurado.
            </p>
          ) : null}
        </CommercePanel>
      </Container>
    </main>
  );
}
