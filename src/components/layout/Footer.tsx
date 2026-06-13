import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandStamp } from "@/components/ui/BrandStamp";
import { Container } from "@/components/ui/Container";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={`${styles.root} overflow-hidden border-t border-white/10 bg-surface-dark text-[#f7eedc]`}>
      <Container className="py-10 lg:py-14">
        <div className="grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-end">
          <div>
            <BrandStamp tone="dark">Brasil de rua</BrandStamp>
            <Link
              href="/"
              className="mt-4 block text-5xl font-black leading-none tracking-normal text-[#fff8ea] sm:text-7xl"
            >
              Caramelo
            </Link>
          </div>

          <p className="max-w-md text-base font-black leading-7 text-[#e7d7c5] md:justify-self-end md:text-right">
            Loja de camisetas. Pedido direto pelo WhatsApp.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/12 pt-6 text-sm font-semibold text-[#d6c8b8] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4">
            <FooterLink href="/produtos">Produtos</FooterLink>
            <FooterLink href="/#marca">Manifesto</FooterLink>
            <FooterLink href="/carrinho">Carrinho</FooterLink>
          </div>
          <span className="text-xs uppercase tracking-[0.12em] text-[#b9aa9a]">
            Rua, futebol, cultura popular
          </span>
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
