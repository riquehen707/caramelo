import type { CommerceProvider } from "./provider";

// Futuro Shopify:
// mapear a lista simples de imagens da Shopify para os tipos internos
// front, back, print-detail, model e duo antes de retornar Product.
export const shopifyProvider: CommerceProvider = {
  async getProducts() {
    return [];
  },

  async getProductBySlug() {
    return null;
  },
};
