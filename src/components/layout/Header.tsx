"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CartDrawer } from "@/components/cart/CartDrawer";
import styles from "./Header.module.scss";

const navItems = [
  { href: "/produtos", label: "Produtos" },
  { href: "/#marca", label: "Sobre" },
  { href: "/carrinho", label: "Carrinho" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className={`${styles.root} sticky top-0 z-40 border-b border-foreground/15 bg-surface/95 backdrop-blur`}>
      <div className="mx-auto flex h-16 w-full max-w-[1480px] items-center justify-between gap-3 px-4 sm:h-[72px] sm:px-8 lg:px-12">
        <Link
          href="/"
          aria-label="Ir para a home da Caramelo"
          className="flex min-w-0 items-center gap-2 text-xl font-black leading-none text-foreground sm:gap-3 sm:text-2xl"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-[var(--radius-control)] bg-surface-dark text-[0.7rem] font-bold uppercase tracking-[0.08em] text-surface sm:size-10">
            CA
          </span>
          <span className="truncate">Caramelo</span>
          <span className="hidden border-l border-border pl-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-caramelo md:inline">
            Brasil de rua
          </span>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 text-sm font-semibold text-muted md:flex"
        >
          {navItems.map((item) => (
            <HeaderLink
              key={item.href}
              href={item.href}
              active={isActivePath(pathname, item.href)}
            >
              {item.label}
            </HeaderLink>
          ))}
        </nav>

        <div className="shrink-0">
          <CartDrawer />
        </div>
      </div>
    </header>
  );
}

function HeaderLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={
        active
          ? "text-foreground underline decoration-[var(--caramelo)] decoration-2 underline-offset-8"
          : "transition hover:text-foreground"
      }
    >
      {children}
    </Link>
  );
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.includes("#")) return false;

  return pathname === href || pathname.startsWith(`${href}/`);
}
