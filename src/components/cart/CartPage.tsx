"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle, ShieldCheck } from "lucide-react";
import { CartItem } from "./CartItem";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Price } from "@/components/ui/Price";
import { useCartStore } from "@/store/cart-store";
import {
  createWhatsAppOrderLink,
  isWhatsAppOrderEnabled,
} from "@/lib/whatsapp";

export function CartPage() {
  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore((state) => state.getSubtotal());
  const totalItems = useCartStore((state) => state.getTotalItems());
  const clearCart = useCartStore((state) => state.clearCart);
  const whatsappOrderLink = createWhatsAppOrderLink(items, subtotal);
  const hasWhatsAppNumber = isWhatsAppOrderEnabled();
  const canFinishByWhatsApp = items.length > 0 && hasWhatsAppNumber;

  return (
    <main className="bg-background">
      <Container className="grid gap-8 py-10 lg:grid-cols-[1fr_380px] lg:py-16">
        <section className="grid gap-7">
          <div className="border-b border-foreground/15 pb-6">
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-caramelo hover:underline"
            >
              <ArrowLeft size={17} />
              Continuar comprando
            </Link>
            <h1 className="mt-5 text-section-title text-foreground">
              Carrinho
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-foreground/68">
              Revise tamanho, cor e quantidade antes de finalizar o pedido
              manualmente.
            </p>
          </div>

          <div className="border border-foreground/15 bg-surface px-4 md:px-5">
            {items.length ? (
              items.map((item) => (
                <CartItem
                  key={`${item.productId}-${item.selectedSize ?? "default"}-${item.selectedColor ?? "default"}`}
                  item={item}
                />
              ))
            ) : (
              <div className="grid gap-4 py-16 text-center">
                <p className="text-2xl font-bold text-foreground">
                  Seu carrinho está vazio.
                </p>
                <p className="text-small mx-auto max-w-sm">
                  Explore a coleção Brasil Caramelo e escolha sua próxima
                  camiseta.
                </p>
                <Button href="/produtos" variant="dark" className="mx-auto">
                  Ver produtos
                </Button>
              </div>
            )}
          </div>
        </section>

        <aside className="h-fit border border-foreground/15 bg-surface p-5 lg:sticky lg:top-24">
          <div className="border-b border-foreground/12 pb-5">
            <p className="text-label text-caramelo">Resumo do pedido</p>
            <h2 className="mt-3 text-2xl font-bold text-foreground">
              Finalização manual
            </h2>
          </div>
          <div className="mt-5 grid gap-3 border-b border-foreground/12 pb-5">
            <div className="flex justify-between text-sm">
              <span className="text-muted">Itens</span>
              <strong className="text-foreground">{totalItems}</strong>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted">Subtotal</span>
              <Price price={subtotal} />
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted">Entrega</span>
              <strong className="text-foreground">Calculada no WhatsApp</strong>
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
              <Button type="button" onClick={clearCart} variant="outline" size="sm">
                Limpar carrinho
              </Button>
            ) : null}
          </div>
          <p className="text-small mt-5 flex items-start gap-2">
            <ShieldCheck className="mt-0.5 shrink-0 text-caramelo" size={18} />
            Você será direcionado para o WhatsApp para confirmar disponibilidade,
            frete e pagamento.
          </p>
          {!hasWhatsAppNumber ? (
            <p className="text-support mt-3 text-[#9a3f2b]">
              WhatsApp da loja ainda não configurado.
            </p>
          ) : null}
        </aside>
      </Container>
    </main>
  );
}
