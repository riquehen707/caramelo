import { BrandStamp } from "@/components/ui/BrandStamp";
import { Container } from "@/components/ui/Container";
import styles from "./BrandManifesto.module.scss";

const values = ["Rua de bairro", "Futebol de domingo", "Humor seco"];

export function BrandManifesto() {
  return (
    <section id="marca" className={`${styles.root} street-texture border-b border-white/10`}>
      <Container className="py-16 text-background md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.34fr_1fr]">
          <div>
            <BrandStamp tone="dark">Manifesto</BrandStamp>
            <h2 className="mt-5 text-5xl font-black leading-none text-[#fff6e8] md:text-7xl">
              Brasil real.
            </h2>
          </div>
          <div>
            <p className="max-w-4xl text-4xl font-black leading-[1.05] text-[#f4ead8] md:text-6xl">
              Rua, futebol e humor seco em camiseta para usar.
            </p>
            <div className="mt-10 grid border-y border-white/15 sm:grid-cols-3">
              {values.map((value, index) => (
                <span
                  key={value}
                  className={
                    index === 1
                      ? "border-y border-white/15 py-5 text-sm font-semibold text-[#d8cabb] sm:border-x sm:border-y-0 sm:px-5"
                      : "py-5 text-sm font-semibold text-[#d8cabb] sm:px-5"
                  }
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
