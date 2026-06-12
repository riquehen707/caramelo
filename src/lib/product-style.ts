import type { Product } from "./commerce/types";

type ProductStyle = {
  fabric: string;
  rib: string;
  ink: string;
  backdrop: string;
};

const styles: Record<string, ProductStyle> = {
  "camiseta-caramelo-brasil-amarela": {
    fabric: "#d9a441",
    rib: "#bd8530",
    ink: "#2b2118",
    backdrop: "#ebe1cf",
  },
  "camiseta-caramelo-brasil-preta": {
    fabric: "#1b1a18",
    rib: "#302c27",
    ink: "#f2eadc",
    backdrop: "#dfd4c2",
  },
  "camiseta-caramelo-brasil-verde": {
    fabric: "#315f43",
    rib: "#254b35",
    ink: "#f4ead8",
    backdrop: "#e5ddcf",
  },
  "camiseta-caramelo-futebol-azul": {
    fabric: "#334b6f",
    rib: "#263a56",
    ink: "#f1e2bd",
    backdrop: "#e7dfd2",
  },
};

export function getProductStyle(product: Product): ProductStyle {
  return (
    styles[product.slug] ?? {
      fabric: "#8a5a35",
      rib: "#6f472a",
      ink: "#f7efe3",
      backdrop: "#e8dfd1",
    }
  );
}

export function getColorSwatch(color: string) {
  const normalized = color.toLowerCase();

  if (normalized.includes("amarelo")) return "#d9a441";
  if (normalized.includes("preto")) return "#191817";
  if (normalized.includes("verde")) return "#315f43";
  if (normalized.includes("azul")) return "#334b6f";
  if (normalized.includes("branco")) return "#f7f2e8";

  return "#8a5a35";
}
