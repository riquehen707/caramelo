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

const mobileNavItems = navItems.filter((item) => item.href !== "/carrinho");

export function Header() {
  const pathname = usePathname();

  return (
    <header className={`${styles.root} sticky top-0 z-40 border-b border-border bg-surface/95`}>
      <div className="mx-auto flex h-[72px] w-full max-w-[1480px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          aria-label="Ir para a home da Caramelo"
          className="flex min-w-0 items-center gap-3 text-2xl font-black leading-none text-foreground"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-[var(--radius-control)] bg-surface-dark text-[0.72rem] font-bold uppercase tracking-[0.08em] text-surface">
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

      <nav
        aria-label="Navegação mobile"
        className="grid grid-cols-2 border-t border-border bg-surface md:hidden"
      >
        {mobileNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="border-r border-border px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.08em] text-foreground last:border-r-0"
          >
            {item.label}
          </Link>
        ))}
      </nav>
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
