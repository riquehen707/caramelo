import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import styles from "./CollectionStrip.module.scss";

const identities = [
  {
    title: "Brasil urbano",
    description: "Rua, banca, arquibancada e rotina.",
    accent: "bg-caramelo",
  },
  {
    title: "Futebol",
    description: "Referência de domingo, sem uniforme.",
    accent: "bg-brasil-blue",
  },
  {
    title: "Humor",
    description: "Seco, direto e fácil de vestir.",
    accent: "bg-brasil-yellow",
  },
  {
    title: "Caramelo",
    description: "Grafite, creme e calor brasileiro.",
    accent: "bg-brasil-green",
  },
];

export function CollectionStrip() {
  return (
    <section className={`${styles.root} border-b border-foreground/10 bg-background`}>
      <Container className="grid gap-6 py-9 md:grid-cols-[0.38fr_1fr] md:items-start md:gap-10 md:py-16">
        <SectionIntro
          eyebrow="Identidade"
          title="Brasil urbano, sem caricatura."
          className="md:max-w-sm"
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {identities.map((item) => (
            <Link
              key={item.title}
              href="/produtos"
              className="group rounded-[var(--radius-brand)] border border-foreground/15 bg-surface p-4 text-foreground shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:border-foreground"
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`block size-7 rounded-[var(--radius-control)] border border-foreground/30 ${item.accent}`}
                />
                <ArrowUpRight
                  className="text-caramelo-dark transition group-hover:text-foreground"
                  size={16}
                />
              </div>
              <h3 className="mt-4 text-base font-black leading-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-xs font-semibold leading-5 text-muted">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
