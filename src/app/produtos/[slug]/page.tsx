import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { commerce } from "@/lib/commerce";
import { BrandStamp } from "@/components/ui/BrandStamp";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
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
      <Container className="grid gap-10 py-8 md:py-12 lg:gap-14">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-muted">
          <Link href="/produtos" className="font-semibold text-caramelo hover:underline">
            Produtos
          </Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(380px,0.72fr)] lg:items-start">
          <ProductGallery product={product} priority />
          <ProductInfo product={product} />
        </section>

        <ProductDetails product={product} />

        {relatedProducts.length ? (
          <section className="grid gap-8 border-t border-foreground/10 pt-10">
            <SectionIntro
              eyebrow="Também na coleção"
              title="Mais peças na mesma linha"
              description="Compare cores e referências sem sair do catálogo Caramelo."
              align="between"
            />
            <ProductGrid products={relatedProducts} variant="catalog" />
          </section>
        ) : (
          <div className="flex items-center gap-3 border-t border-foreground/10 pt-8">
            <BrandStamp>Caramelo</BrandStamp>
            <p className="text-small">Produto único nesta linha.</p>
          </div>
        )}
      </Container>
    </main>
  );
}
