export type ProductImageType =
  | "front"
  | "back"
  | "print-detail"
  | "model"
  | "duo"
  | "placeholder";

export type ProductImage = {
  type: ProductImageType;
  url: string;
  alt: string;
  isPlaceholder?: boolean;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  currency: "BRL";
  images: ProductImage[];
  category: string;
  collection?: string;
  colors?: string[];
  sizes?: string[];
  tags?: string[];
  availableForSale: boolean;
};
