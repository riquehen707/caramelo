import type { Metadata } from "next";
import { commerce } from "@/lib/commerce";
import { BrandManifesto } from "@/components/home/BrandManifesto";
import { BrandSnapshot } from "@/components/home/BrandSnapshot";
import { CollectionStrip } from "@/components/home/CollectionStrip";
import { EditorialBanner } from "@/components/home/EditorialBanner";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";

export const metadata: Metadata = {
  title: "Caramelo | Camisetas brasileiras sem fantasia",
  description:
    "Loja de camisetas brasileiras inspiradas na rua, futebol, cultura popular e identidade nacional.",
};

export default async function Home() {
  const products = await commerce.getProducts();
  const featuredProducts = products.slice(0, 4);

  return (
    <main>
      <HeroSection
        primaryProduct={products[0]}
        secondaryProduct={products[1]}
      />
      <BrandSnapshot products={products} />
      <BrandManifesto />
      <CollectionStrip />
      <FeaturedProducts products={featuredProducts} />
      <TrustBar />
      <EditorialBanner product={products[2] ?? products[0]} />
    </main>
  );
}
