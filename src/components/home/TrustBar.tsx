import { MessageCircle, PackageCheck, RefreshCw, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import styles from "./TrustBar.module.scss";

const trustItems = [
  {
    icon: MessageCircle,
    label: "Pedido pelo WhatsApp",
    text: "Confirmação manual de disponibilidade e frete.",
  },
  {
    icon: PackageCheck,
    label: "Envio para o Brasil",
    text: "Entrega combinada no fechamento do pedido.",
  },
  {
    icon: RefreshCw,
    label: "Troca fácil",
    text: "Atendimento direto se precisar ajustar a peça.",
  },
  {
    icon: ShieldCheck,
    label: "Checkout futuro",
    text: "Base pronta para uma etapa automatizada.",
  },
];

export function TrustBar() {
  return (
    <section className={`${styles.root} border-b border-foreground/10 bg-background`}>
      <Container className="py-9 md:py-14">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-[var(--radius-brand)] border border-foreground/15 bg-surface p-4 shadow-[var(--shadow-soft)]"
              >
                <Icon className="text-caramelo-dark" size={20} aria-hidden />
                <h3 className="mt-3 text-sm font-black leading-tight text-foreground">
                  {item.label}
                </h3>
                <p className="mt-2 text-xs font-semibold leading-5 text-muted">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
