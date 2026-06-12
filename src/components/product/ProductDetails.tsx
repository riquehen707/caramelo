import type { Product } from "@/lib/commerce/types";

type ProductDetailsProps = {
  product: Product;
};

export function ProductDetails({ product }: ProductDetailsProps) {
  const details = [
    "Modelagem regular para vestir no dia a dia.",
    "Base casual pensada para rua, rotina e arquibancada.",
    product.images.some((image) => image.type === "back")
      ? "Frente e costas ajudam a ler a arte da peça."
      : "Visual frontal preparado para mostrar a arte da peça.",
    `${product.collection ?? product.category}: Brasil no detalhe, não no clichê.`,
  ];

  return (
    <section className="grid gap-6 border-y border-foreground/15 py-8 lg:grid-cols-[0.32fr_1fr]">
      <div>
        <p className="text-label text-caramelo">Ficha da peça</p>
        <h2 className="mt-3 text-3xl font-bold text-foreground">Detalhes</h2>
      </div>
      <div className="grid gap-px overflow-hidden border border-foreground/15 bg-foreground/15 md:grid-cols-2">
        {details.map((detail) => (
          <div key={detail} className="bg-surface p-5">
            <p className="text-sm leading-6 text-[#4b4239]">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
