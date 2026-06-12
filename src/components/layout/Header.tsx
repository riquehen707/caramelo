"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { CartDrawer } from "@/components/cart/CartDrawer";

const navItems = [
  { href: "/produtos", label: "Produtos" },
  { href: "/#marca", label: "Sobre" },
  { href: "/carrinho", label: "Carrinho" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-[#f3eadc]/92 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] w-full max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="group flex items-baseline gap-3 text-2xl font-black leading-none text-foreground"
        >
          <span>Caramelo</span>
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.16em] text-caramelo md:inline">
            Brasil de rua
          </span>
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-semibold text-foreground/70 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CartDrawer />
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((current) => !current)}
            className="grid size-11 place-items-center border border-foreground/15 bg-surface text-foreground md:hidden"
          >
            <Menu size={19} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav className="grid gap-1 border-t border-foreground/10 bg-background px-5 py-3 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="px-1 py-3 text-sm font-semibold text-foreground/75"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
