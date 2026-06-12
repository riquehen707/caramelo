import { products } from "@/data/products";
import type { CommerceProvider } from "./provider";

export const localProvider: CommerceProvider = {
  async getProducts() {
    return products;
  },

  async getProductBySlug(slug) {
    return products.find((product) => product.slug === slug) ?? null;
  },
};
