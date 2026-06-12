import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main>
      <Container className="grid min-h-[60vh] place-items-center py-16 text-center">
        <div className="max-w-md">
          <p className="text-label text-caramelo">Caramelo</p>
          <h1 className="mt-4 text-4xl font-bold leading-none text-foreground">
            Produto não encontrado.
          </h1>
          <p className="text-subtitle mt-4">
            Essa peça não está disponível agora. Volte para a coleção e escolha
            outra camiseta.
          </p>
          <Button href="/produtos" variant="dark" className="mt-7">
            Voltar para produtos
          </Button>
        </div>
      </Container>
    </main>
  );
}
