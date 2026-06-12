import type { CartItem } from "@/store/cart-store";
import { formatMoney } from "@/lib/format-money";

function getWhatsAppPhone() {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";
}

export function isWhatsAppOrderEnabled() {
  return Boolean(getWhatsAppPhone());
}

export function createWhatsAppOrderLink(items: CartItem[], subtotal: number) {
  const phone = getWhatsAppPhone();

  if (!phone || !items.length) {
    return "#";
  }

  const message = [
    "Olá! Quero fazer um pedido na Caramelo:",
    "",
    ...items.map((item, index) =>
      [
        `${index + 1}. ${item.name}`,
        `   Tamanho: ${item.selectedSize ?? "Não informado"}`,
        `   Cor: ${item.selectedColor ?? "Não informada"}`,
        `   Quantidade: ${item.quantity}`,
        `   Preço: ${formatMoney(item.price * item.quantity, item.currency)}`,
      ].join("\n"),
    ),
    "",
    `Subtotal: ${formatMoney(subtotal)}`,
    "",
    "Pode me ajudar a finalizar?",
  ].join("\n");

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
