import { Container } from "@/components/ui/Container";

const values = ["Rua de bairro", "Futebol de domingo", "Humor seco"];

export function BrandManifesto() {
  return (
    <section id="marca" className="border-b border-white/10 bg-surface-dark">
      <Container className="py-16 text-background md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.34fr_1fr]">
          <div>
            <p className="text-label text-[#c58a54]">Manifesto</p>
            <h2 className="mt-5 text-5xl font-black leading-none md:text-7xl">
              Brasil real.
            </h2>
          </div>
          <div>
            <p className="max-w-5xl text-4xl font-semibold leading-[1.05] text-[#f4ead8] md:text-6xl">
              Não é fantasia, não é souvenir, não é bloco colorido. É camiseta
              para usar, com sinal de rua, futebol e cultura popular no ponto
              certo.
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
