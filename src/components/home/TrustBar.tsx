import { MessageCircle, PackageCheck, RefreshCw, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const trustItems = [
  {
    icon: MessageCircle,
    title: "Pedido pelo WhatsApp",
    text: "Confirmação manual de disponibilidade, frete e pagamento.",
  },
  {
    icon: PackageCheck,
    title: "Envio para o Brasil",
    text: "Entrega combinada no fechamento do pedido.",
  },
  {
    icon: RefreshCw,
    title: "Troca fácil",
    text: "Atendimento direto caso precise ajustar a peça.",
  },
  {
    icon: ShieldCheck,
    title: "Checkout futuro",
    text: "Base pronta para Shopify, Stripe ou Mercado Pago.",
  },
];

export function TrustBar() {
  return (
    <section className="border-b border-foreground/10 bg-background">
      <Container className="py-12 md:py-16">
        <div className="grid border-y border-foreground/15 md:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={
                  index === 0
                    ? "py-5 md:pr-5"
                    : "border-t border-foreground/15 py-5 md:border-l md:border-t-0 md:px-5"
                }
              >
                <Icon className="text-caramelo" size={21} strokeWidth={2.2} />
                <h3 className="mt-5 font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-small mt-2">{item.text}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
