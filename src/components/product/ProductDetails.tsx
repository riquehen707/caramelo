import type { Product } from "@/lib/commerce/types";
import { BrandStamp } from "@/components/ui/BrandStamp";
import styles from "./ProductDetails.module.scss";

type ProductDetailsProps = {
  product: Product;
};

export function ProductDetails({ product }: ProductDetailsProps) {
  const details = [
    "Detalhe breve do produto.",
    "Informacao curta de modelagem.",
    product.images.some((image) => image.type === "back")
      ? "Frente e costas disponiveis."
      : "Imagem frontal disponivel.",
    `${product.collection ?? product.category}: resumo curto da linha.`,
  ];

  return (
    <section className={`${styles.root} grid gap-6 border-y-2 border-foreground py-8 lg:grid-cols-[0.32fr_1fr]`}>
      <div>
        <BrandStamp>Ficha da peça</BrandStamp>
        <h2 className="mt-3 text-3xl font-black text-foreground">Detalhes</h2>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {details.map((detail) => (
          <div key={detail} className="commerce-panel p-5">
            <p className="text-sm leading-6 text-[#4b4239]">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
