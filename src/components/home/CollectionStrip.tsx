import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const collections = [
  {
    title: "Rua",
    description: "Placa, calçada, bar, ônibus e rotina brasileira.",
    accent: "bg-caramelo",
    motion: "md:translate-y-8 md:-rotate-2",
  },
  {
    title: "Futebol",
    description: "Arquibancada e pelada de bairro sem virar uniforme.",
    accent: "bg-brasil-blue",
    motion: "md:-translate-y-2 md:rotate-1",
  },
  {
    title: "Humor",
    description: "Frase curta, ironia seca e símbolo popular.",
    accent: "bg-brasil-yellow",
    motion: "md:translate-y-12 md:rotate-2",
  },
  {
    title: "Caramelo",
    description: "O vira-lata como código de marca, não personagem.",
    accent: "bg-brasil-green",
    motion: "md:translate-y-3 md:-rotate-1",
  },
];

export function CollectionStrip() {
  return (
    <section className="overflow-hidden border-b border-foreground/10 bg-background">
      <Container className="py-14 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_1fr]">
          <div>
            <p className="text-label text-caramelo">Referências</p>
            <h2 className="mt-4 max-w-sm text-4xl font-bold leading-none text-foreground md:text-5xl">
              Brasil urbano, sem caricatura.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4 md:pb-12">
            {collections.map((collection) => (
              <Link
                key={collection.title}
                href="/produtos"
                className={`group editorial-card flex min-h-72 flex-col justify-between border border-foreground/12 bg-surface p-5 transition duration-500 hover:-translate-y-1 hover:rotate-0 ${collection.motion}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`block h-12 w-12 rounded-[8px] ${collection.accent}`}
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
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
