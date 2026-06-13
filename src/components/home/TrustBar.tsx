import { MessageCircle, PackageCheck, RefreshCw, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TrustList } from "@/components/ui/TrustList";
import styles from "./TrustBar.module.scss";

const trustItems = [
  {
    icon: MessageCircle,
    label: "Pedido pelo WhatsApp",
    text: "Confirmação manual de disponibilidade, frete e pagamento.",
  },
  {
    icon: PackageCheck,
    label: "Envio para o Brasil",
    text: "Entrega combinada no fechamento do pedido.",
  },
  {
    icon: RefreshCw,
    label: "Troca fácil",
    text: "Atendimento direto caso precise ajustar a peça.",
  },
  {
    icon: ShieldCheck,
    label: "Checkout futuro",
    text: "Base pronta para Shopify, Stripe ou Mercado Pago.",
  },
];

export function TrustBar() {
  return (
    <section className={`${styles.root} border-b border-foreground/10 bg-background`}>
      <Container className="py-12 md:py-16">
        <div className="grid gap-5 md:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="rounded-[var(--radius-brand)] border-2 border-foreground bg-surface p-5 shadow-[var(--shadow-soft)]"
            >
              <TrustList items={[item]} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
