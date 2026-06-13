"use client";

import clsx from "clsx";
import { getColorSwatch } from "@/lib/product-style";
import styles from "./ColorSelector.module.scss";

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
      <div className={`${styles.root} grid gap-3`}>
        <span className="text-label text-muted">Escolha a cor</span>
        <span className="inline-flex w-fit items-center gap-2 rounded-[var(--radius-control)] border-2 border-foreground bg-background px-3 py-2 text-sm font-semibold text-foreground shadow-[var(--shadow-soft)]">
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
    <div className={`${styles.root} grid gap-3`}>
      <span className="text-label text-muted">Escolha a cor</span>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => onChange(color)}
            aria-pressed={selectedColor === color}
            className={clsx(
              "inline-flex min-h-11 items-center gap-2 rounded-[var(--radius-control)] border-2 px-3 py-2 text-sm font-black transition",
              selectedColor === color
                ? "border-foreground bg-brasil-yellow text-foreground shadow-[var(--shadow-soft)]"
                : "border-foreground bg-background text-foreground hover:bg-surface-muted",
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
