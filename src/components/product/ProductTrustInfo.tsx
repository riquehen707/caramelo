import { MessageCircle, PackageCheck, RefreshCw, ShieldCheck } from "lucide-react";
import { TrustList } from "@/components/ui/TrustList";
import styles from "./ProductTrustInfo.module.scss";

const trustItems = [
  {
    icon: PackageCheck,
    label: "Envio para todo o Brasil",
  },
  {
    icon: RefreshCw,
    label: "Troca fácil",
  },
  {
    icon: ShieldCheck,
    label: "Pagamento seguro combinado no atendimento",
  },
  {
    icon: MessageCircle,
    label: "Finalização manual pelo WhatsApp",
  },
];

export function ProductTrustInfo() {
  return (
    <div className={`${styles.root} border-t-2 border-foreground pt-5`}>
      <TrustList items={trustItems} compact />
    </div>
  );
}
