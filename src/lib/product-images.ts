import type {
  Product,
  ProductImage,
  ProductImageType,
} from "@/lib/commerce/types";

export const PRODUCT_IMAGE_ORDER = [
  "front",
  "back",
  "print-detail",
  "model",
  "duo",
  "placeholder",
] as const satisfies readonly ProductImageType[];

export const PRODUCT_IMAGE_SLOTS = [
  {
    type: "front",
    label: "Frente",
    requirement: "Obrigatória",
    description:
      "Imagem principal da frente da camiseta. Usada como capa do produto.",
  },
  {
    type: "back",
    label: "Costas",
    requirement: "Recomendada",
    description: "Mostra a parte traseira da peça.",
  },
  {
    type: "print-detail",
    label: "Detalhe da estampa",
    requirement: "Recomendada",
    description: "Close da arte ou estampa principal.",
  },
  {
    type: "model",
    label: "Mockup com modelo",
    requirement: "Opcional",
    description:
      "Mostra a peça em uso para dar noção de caimento e contexto.",
  },
  {
    type: "duo",
    label: "Frente + costas",
    requirement: "Opcional",
    description:
      "Composição comparativa mostrando frente e costas da camiseta.",
  },
] as const satisfies readonly {
  type: Exclude<ProductImageType, "placeholder">;
  label: string;
  requirement: string;
  description: string;
}[];

const fallbackImage: ProductImage = {
  type: "placeholder",
  url: "/products/placeholders/camiseta-caramelo-front.svg",
  alt: "Mockup frontal de camiseta Caramelo em fundo neutro",
  isPlaceholder: true,
};

const typePlaceholders: Record<ProductImageType, ProductImage> = {
  front: {
    type: "front",
    url: "/products/placeholders/camiseta-caramelo-front.svg",
    alt: "Placeholder de imagem frontal de camiseta Caramelo",
    isPlaceholder: true,
  },
  back: {
    type: "back",
    url: "/products/placeholders/camiseta-caramelo-back-preta.svg",
    alt: "Placeholder de imagem traseira de camiseta Caramelo",
    isPlaceholder: true,
  },
  "print-detail": {
    type: "print-detail",
    url: "/products/placeholders/camiseta-caramelo-front.svg",
    alt: "Placeholder de detalhe de estampa de camiseta Caramelo",
    isPlaceholder: true,
  },
  model: {
    type: "model",
    url: "/products/placeholders/camiseta-caramelo-front.svg",
    alt: "Placeholder de mockup com modelo de camiseta Caramelo",
    isPlaceholder: true,
  },
  duo: {
    type: "duo",
    url: "/products/placeholders/camiseta-caramelo-front.svg",
    alt: "Placeholder de composição frente e costas de camiseta Caramelo",
    isPlaceholder: true,
  },
  placeholder: fallbackImage,
};

const colorFallbacks: Record<string, ProductImage> = {
  amarelo: {
    type: "front",
    url: "/products/placeholders/camiseta-caramelo-front-amarela.svg",
    alt: "Mockup frontal da camiseta Caramelo amarela",
    isPlaceholder: true,
  },
  preto: {
    type: "front",
    url: "/products/placeholders/camiseta-caramelo-front-preta.svg",
    alt: "Mockup frontal da camiseta Caramelo preta",
    isPlaceholder: true,
  },
  verde: {
    type: "front",
    url: "/products/placeholders/camiseta-caramelo-front-verde.svg",
    alt: "Mockup frontal da camiseta Caramelo verde",
    isPlaceholder: true,
  },
  azul: {
    type: "front",
    url: "/products/placeholders/camiseta-caramelo-front-azul.svg",
    alt: "Mockup frontal da camiseta Caramelo azul",
    isPlaceholder: true,
  },
};

export function sortProductImages(images: ProductImage[]) {
  return [...images].sort((firstImage, secondImage) => {
    const firstIndex = PRODUCT_IMAGE_ORDER.indexOf(firstImage.type);
    const secondIndex = PRODUCT_IMAGE_ORDER.indexOf(secondImage.type);

    return firstIndex - secondIndex;
  });
}

export function getProductImagePlaceholder(
  type: ProductImageType | "generic" = "placeholder",
): ProductImage {
  if (type === "generic") return fallbackImage;

  return typePlaceholders[type] ?? fallbackImage;
}

export function getProductImageByType(
  product: Product,
  type: ProductImageType,
) {
  return product.images.find((image) => image.type === type) ?? null;
}

export function getProductPlaceholderImage(product: Product): ProductImage {
  const colorKey = product.colors?.[0]?.toLowerCase() ?? "";

  return (
    Object.entries(colorFallbacks).find(([color]) =>
      colorKey.includes(color),
    )?.[1] ?? fallbackImage
  );
}

export function getProductMainImage(product: Product): ProductImage {
  const frontRealImage = product.images.find(
    (image) => image.type === "front" && !image.isPlaceholder,
  );

  if (frontRealImage) return frontRealImage;

  const frontPlaceholder = product.images.find(
    (image) => image.type === "front" && image.isPlaceholder,
  );

  if (frontPlaceholder) return frontPlaceholder;

  const firstRealImage = sortProductImages(product.images).find(
    (image) => !image.isPlaceholder,
  );

  return firstRealImage ?? getProductPlaceholderImage(product);
}

export function getPublicProductGalleryImages(product: Product): ProductImage[] {
  const mainImage = getProductMainImage(product);
  const realImages = sortProductImages(product.images).filter(
    (image) => !image.isPlaceholder,
  );

  if (realImages.length) {
    return [
      mainImage,
      ...realImages.filter((image) => image.url !== mainImage.url),
    ];
  }

  return [mainImage];
}

export function getProductSlotImage(
  product: Product,
  type: Exclude<ProductImageType, "placeholder">,
): ProductImage {
  return (
    product.images.find((image) => image.type === type) ??
    getProductImagePlaceholder(type)
  );
}
