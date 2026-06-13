import { BrandStamp } from "@/components/ui/BrandStamp";
import { Container } from "@/components/ui/Container";
import styles from "./BrandManifesto.module.scss";

export function BrandManifesto() {
  return (
    <section
      id="marca"
      className={`${styles.root} border-b border-white/10 bg-surface-dark`}
    >
      <Container className="py-10 text-[#f7eedc] md:py-16">
        <div className="grid gap-5 md:grid-cols-[0.42fr_1fr] md:items-end">
          <div>
            <BrandStamp tone="dark">Manifesto</BrandStamp>
            <h2 className="mt-4 text-4xl font-black leading-none md:text-6xl">
              Brasil real.
            </h2>
          </div>
          <div>
            <p className="max-w-[21rem] break-words text-2xl font-black leading-tight md:max-w-3xl md:text-5xl">
              Marca de camiseta com repertório brasileiro. Sem caricatura.
            </p>
            <p className="mt-4 max-w-[21rem] text-sm font-semibold leading-6 text-[#f7eedc] md:max-w-2xl md:text-lg">
              Referências de rua, futebol, humor seco e rotina brasileira em
              peças simples de usar.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
