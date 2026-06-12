import type { Product } from "@/lib/commerce/types";

export const products: Product[] = [
  {
    id: "prod-caramelo-brasil-amarela",
    slug: "camiseta-caramelo-brasil-amarela",
    name: "Camiseta Caramelo Brasil Amarela",
    description:
      "Camiseta amarela da coleção Brasil Caramelo. Rua, arquibancada e domingo de sol em uma peça direta, brasileira e sem cara de souvenir.",
    price: 8990,
    compareAtPrice: 10990,
    currency: "BRL",
    images: [
      {
        type: "front",
        url: "/products/placeholders/camiseta-caramelo-front-amarela.svg",
        alt: "Frente da Camiseta Caramelo Brasil Amarela",
        isPlaceholder: true,
      },
      {
        type: "back",
        url: "/products/placeholders/camiseta-caramelo-back-amarela.svg",
        alt: "Costas da Camiseta Caramelo Brasil Amarela",
        isPlaceholder: true,
      },
    ],
    category: "Camisetas",
    collection: "Brasil Caramelo",
    colors: ["Amarelo", "Preto", "Verde"],
    sizes: ["P", "M", "G", "GG"],
    tags: ["brasil", "futebol", "rua"],
    availableForSale: true,
  },
  {
    id: "prod-caramelo-brasil-preta",
    slug: "camiseta-caramelo-brasil-preta",
    name: "Camiseta Caramelo Brasil Preta",
    description:
      "Base preta, grafismo forte e identidade brasileira sem caricatura. Uma camiseta urbana para vestir Brasil com humor seco e presença limpa.",
    price: 8990,
    currency: "BRL",
    images: [
      {
        type: "front",
        url: "/products/placeholders/camiseta-caramelo-front-preta.svg",
        alt: "Frente da Camiseta Caramelo Brasil Preta",
        isPlaceholder: true,
      },
      {
        type: "back",
        url: "/products/placeholders/camiseta-caramelo-back-preta.svg",
        alt: "Costas da Camiseta Caramelo Brasil Preta",
        isPlaceholder: true,
      },
    ],
    category: "Camisetas",
    collection: "Brasil Caramelo",
    colors: ["Preto", "Amarelo"],
    sizes: ["P", "M", "G", "GG"],
    tags: ["streetwear", "brasil", "cultura-popular"],
    availableForSale: true,
  },
  {
    id: "prod-caramelo-brasil-verde",
    slug: "camiseta-caramelo-brasil-verde",
    name: "Camiseta Caramelo Brasil Verde",
    description:
      "Verde profundo com referência de calçada, bar, campinho e cidade grande. Visual casual, identidade popular e leitura limpa.",
    price: 8990,
    compareAtPrice: 9990,
    currency: "BRL",
    images: [
      {
        type: "front",
        url: "/products/placeholders/camiseta-caramelo-front-verde.svg",
        alt: "Frente da Camiseta Caramelo Brasil Verde",
        isPlaceholder: true,
      },
      {
        type: "back",
        url: "/products/placeholders/camiseta-caramelo-back-verde.svg",
        alt: "Costas da Camiseta Caramelo Brasil Verde",
        isPlaceholder: true,
      },
    ],
    category: "Camisetas",
    collection: "Brasil Caramelo",
    colors: ["Verde", "Branco"],
    sizes: ["P", "M", "G", "GG"],
    tags: ["brasil", "urbano", "caramelo"],
    availableForSale: true,
  },
  {
    id: "prod-caramelo-futebol-azul",
    slug: "camiseta-caramelo-futebol-azul",
    name: "Camiseta Caramelo Futebol Azul",
    description:
      "Azul de jogo grande, inspirado em torcida, pelada de bairro e cultura de arquibancada. Futebol no repertório, sem parecer uniforme.",
    price: 9490,
    currency: "BRL",
    images: [
      {
        type: "front",
        url: "/products/placeholders/camiseta-caramelo-front-azul.svg",
        alt: "Frente da Camiseta Caramelo Futebol Azul",
        isPlaceholder: true,
      },
      {
        type: "back",
        url: "/products/placeholders/camiseta-caramelo-back-azul.svg",
        alt: "Costas da Camiseta Caramelo Futebol Azul",
        isPlaceholder: true,
      },
    ],
    category: "Camisetas",
    collection: "Brasil Caramelo",
    colors: ["Azul", "Amarelo"],
    sizes: ["P", "M", "G", "GG", "XG"],
    tags: ["futebol", "brasil", "arquibancada"],
    availableForSale: true,
  },
];
