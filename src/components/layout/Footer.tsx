import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandStamp } from "@/components/ui/BrandStamp";
import { Container } from "@/components/ui/Container";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={`${styles.root} overflow-hidden border-t border-white/10 bg-surface-dark text-background`}>
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-end">
          <div>
            <BrandStamp tone="dark">Brasil de rua / desde o MVP</BrandStamp>
            <Link
              href="/"
              className="mt-5 block text-[4.5rem] font-black leading-[0.85] tracking-normal text-[#fff6e8] sm:text-[6.5rem] lg:text-[8rem]"
            >
              Caramelo
            </Link>
          </div>

          <p className="max-w-xl text-xl font-black leading-8 text-[#e7d7c5] lg:justify-self-end">
            Loja de camisetas. Pedido direto pelo WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid gap-8 border-y border-white/12 py-8 md:grid-cols-[1fr_1fr_1.2fr]">
          <div>
            <h2 className="text-label text-[#d7ad7a]">Loja</h2>
            <div className="mt-4 grid gap-3 text-sm text-[#d6c8b8]">
              <FooterLink href="/produtos">Produtos</FooterLink>
              <FooterLink href="/#marca">Sobre</FooterLink>
              <FooterLink href="/carrinho">Carrinho</FooterLink>
            </div>
          </div>

          <div>
            <h2 className="text-label text-[#d7ad7a]">Pedido</h2>
            <div className="mt-4 grid gap-3 text-sm text-[#d6c8b8]">
              <span>Finalização pelo WhatsApp</span>
              <span>Frete combinado no atendimento</span>
              <span>Base pronta para checkout futuro</span>
            </div>
          </div>

          <div className="grid gap-3 md:justify-items-end md:text-right">
            <h2 className="text-label text-[#d7ad7a]">Código visual</h2>
            <p className="max-w-sm text-sm leading-6 text-[#d6c8b8]">
              Texto curto da seção.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#a99b8c] sm:flex-row sm:items-center sm:justify-between">
          <span>Caramelo Studio Commerce</span>
          <span>Rua, futebol, cultura popular</span>
        </div>
      </Container>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex w-fit items-center gap-1.5 transition hover:text-white"
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
    </Link>
  );
}
