import type { Product } from "./types";

export type CommerceProvider = {
  getProducts: () => Promise<Product[]>;
  getProductBySlug: (slug: string) => Promise<Product | null>;
};
