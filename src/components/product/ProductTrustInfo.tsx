import { MessageCircle, PackageCheck, RefreshCw, ShieldCheck } from "lucide-react";

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
    <div className="grid gap-3 border-t border-foreground/12 pt-5 text-sm text-[#4b4239]">
      {trustItems.map((item) => {
        const Icon = item.icon;

        return (
          <p key={item.label} className="flex items-center gap-3">
            <Icon className="text-caramelo" size={18} strokeWidth={2.2} />
            {item.label}
          </p>
        );
      })}
    </div>
  );
}
