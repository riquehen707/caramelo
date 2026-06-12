import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface-dark text-background">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.35fr_0.8fr_0.9fr] lg:py-16">
        <div>
          <Link href="/" className="text-5xl font-black leading-none">
            Caramelo
          </Link>
          <p className="mt-5 max-w-md text-base leading-7 text-[#d6c8b8]">
            Camisetas brasileiras para rua, arquibancada e rotina. Identidade
            nacional sem fantasia.
          </p>
        </div>
        <div>
          <h2 className="text-label text-[#c58a54]">Loja</h2>
          <div className="mt-4 grid gap-3 text-sm text-[#d6c8b8]">
            <Link href="/produtos" className="hover:text-white">
              Produtos
            </Link>
            <Link href="/#marca" className="hover:text-white">
              Sobre
            </Link>
            <Link href="/carrinho" className="hover:text-white">
              Carrinho
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-label text-[#c58a54]">Brasil Caramelo</h2>
          <p className="text-small mt-4 text-[#d6c8b8]">
            Pedido manual pelo WhatsApp no MVP, com estrutura pronta para
            checkout futuro.
          </p>
        </div>
      </Container>
    </footer>
  );
}
