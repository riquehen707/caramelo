import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { EditorialFrame } from "@/components/ui/EditorialFrame";
import { SectionIntro } from "@/components/ui/SectionIntro";
import styles from "./CollectionStrip.module.scss";

const collections = [
  {
    title: "Rua",
    description: "Resumo curto da coleção.",
    accent: "bg-caramelo",
    tilt: "left" as const,
    offset: "md:translate-y-8",
  },
  {
    title: "Futebol",
    description: "Resumo curto da coleção.",
    accent: "bg-brasil-blue",
    tilt: "right" as const,
    offset: "md:-translate-y-2",
  },
  {
    title: "Humor",
    description: "Resumo curto da coleção.",
    accent: "bg-brasil-yellow",
    tilt: "right" as const,
    offset: "md:translate-y-12",
  },
  {
    title: "Caramelo",
    description: "Resumo curto da coleção.",
    accent: "bg-brasil-green",
    tilt: "left" as const,
    offset: "md:translate-y-3",
  },
];

export function CollectionStrip() {
  return (
    <section className={`${styles.root} overflow-hidden border-b border-foreground/10 bg-background`}>
      <Container className="py-14 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_1fr]">
          <SectionIntro
            eyebrow="Referências"
            title="Brasil urbano, sem caricatura."
            className="lg:max-w-sm"
          />
          <div className="grid gap-4 md:grid-cols-4 md:pb-12">
            {collections.map((collection) => (
              <Link key={collection.title} href="/produtos" className="group">
                <EditorialFrame
                  tilt={collection.tilt}
                  className={`flex min-h-72 flex-col justify-between p-5 transition duration-500 group-hover:-translate-y-1 group-hover:rotate-0 ${collection.offset}`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`block h-12 w-12 rounded-[var(--radius-brand)] border-2 border-foreground shadow-[3px_3px_0_var(--foreground)] ${collection.accent}`}
                    />
                    <ArrowUpRight
                      className="text-foreground/35 transition group-hover:text-caramelo"
                      size={18}
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-foreground">
                      {collection.title}
                    </h3>
                    <p className="text-small mt-4 max-w-[14rem]">
                      {collection.description}
                    </p>
                  </div>
                </EditorialFrame>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
