import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { commerce } from "@/lib/commerce";
import { Container } from "@/components/ui/Container";
import { ProductDetails } from "@/components/product/ProductDetails";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductInfo } from "@/components/product/ProductInfo";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const products = await commerce.getProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await commerce.getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produto não encontrado",
      description:
        "Volte para a coleção Brasil Caramelo e escolha outra camiseta.",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Caramelo`,
      description: product.description,
      type: "website",
      images: product.images.map((image) => ({
        url: image.url,
        alt: image.alt,
      })),
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const [product, products] = await Promise.all([
    commerce.getProductBySlug(slug),
    commerce.getProducts(),
  ]);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => {
      if (item.id === product.id) return false;

      return (
        item.collection === product.collection || item.category === product.category
      );
    })
    .slice(0, 4);

  return (
    <main className="bg-background">
      <Container className="grid gap-14 py-10 md:py-14">
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.72fr)] lg:items-start">
          <ProductGallery product={product} priority />
          <ProductInfo product={product} />
        </section>

        <ProductDetails product={product} />

        {relatedProducts.length ? (
          <section className="grid gap-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-label text-caramelo">Também na coleção</p>
                <h2 className="mt-3 text-4xl font-bold text-foreground">
                  Mais peças na mesma linha
                </h2>
              </div>
            </div>
            <ProductGrid products={relatedProducts} />
          </section>
        ) : null}
      </Container>
    </main>
  );
}
