import type { LucideIcon } from "lucide-react";
import styles from "./TrustList.module.scss";

type TrustListItem = {
  icon: LucideIcon;
  label: string;
  text?: string;
};

type TrustListProps = {
  items: TrustListItem[];
  compact?: boolean;
};

export function TrustList({ items, compact = false }: TrustListProps) {
  return (
    <div className={`${styles.root} grid gap-3 text-sm text-[#4b4239]`}>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.label} className="flex items-start gap-3">
            <Icon className="mt-0.5 shrink-0 text-caramelo" size={18} />
            <div>
              <p className="font-semibold text-foreground">{item.label}</p>
              {!compact && item.text ? (
                <p className="text-small mt-1">{item.text}</p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
