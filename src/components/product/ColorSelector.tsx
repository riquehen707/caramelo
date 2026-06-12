"use client";

import clsx from "clsx";
import { getColorSwatch } from "@/lib/product-style";

type ColorSelectorProps = {
  colors: string[];
  selectedColor?: string;
  onChange: (color: string) => void;
};

export function ColorSelector({
  colors,
  selectedColor,
  onChange,
}: ColorSelectorProps) {
  if (colors.length === 1) {
    return (
      <div className="grid gap-3">
        <span className="text-label text-muted">Escolha a cor</span>
        <span className="inline-flex w-fit items-center gap-2 rounded-[6px] border border-foreground/15 bg-background px-3 py-2 text-sm text-foreground">
          <span
            className="size-3 rounded-full border border-border"
            style={{ backgroundColor: getColorSwatch(colors[0]) }}
          />
          {colors[0]}
        </span>
      </div>
    );
  }

  return (
    <div className="grid gap-3">
      <span className="text-label text-muted">Escolha a cor</span>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => onChange(color)}
            aria-pressed={selectedColor === color}
            className={clsx(
              "inline-flex items-center gap-2 rounded-[6px] border px-3 py-2 text-sm font-medium transition",
              selectedColor === color
                ? "border-caramelo bg-caramelo/10 text-caramelo-dark"
                : "border-foreground/15 bg-background text-foreground hover:border-caramelo",
            )}
          >
            <span
              className="size-3 rounded-full border border-border"
              style={{ backgroundColor: getColorSwatch(color) }}
            />
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}
