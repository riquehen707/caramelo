import type { Metadata } from "next";
import { CartPage } from "@/components/cart/CartPage";

export const metadata: Metadata = {
  title: "Carrinho",
  description:
    "Revise suas camisetas Caramelo antes de fechar a compra.",
};

export default function CartRoute() {
  return <CartPage />;
}
