"use client";

import clsx from "clsx";
import styles from "./SizeSelector.module.scss";

type SizeSelectorProps = {
  sizes: string[];
  selectedSize?: string;
  onChange: (size: string) => void;
};

export function SizeSelector({
  sizes,
  selectedSize,
  onChange,
}: SizeSelectorProps) {
  return (
    <div className={`${styles.root} grid gap-3`}>
      <div className="flex items-center justify-between gap-4">
        <span className="text-label text-muted">Escolha o tamanho</span>
        <button
          type="button"
          className="text-sm font-medium text-caramelo underline-offset-4 hover:underline"
        >
          Guia de tamanhos
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => onChange(size)}
            aria-pressed={selectedSize === size}
            className={clsx(
              "h-12 rounded-[var(--radius-control)] border-2 text-sm font-black transition",
              selectedSize === size
                ? "border-foreground bg-surface-dark text-white shadow-[var(--shadow-soft)]"
                : "border-foreground bg-background text-foreground hover:bg-surface-muted",
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
