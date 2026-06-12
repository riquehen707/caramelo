"use client";

import clsx from "clsx";

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
    <div className="grid gap-3">
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
              "h-12 rounded-[6px] border text-sm font-semibold transition",
              selectedSize === size
                ? "border-surface-dark bg-surface-dark text-white"
                : "border-foreground/15 bg-background text-foreground hover:border-caramelo",
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
