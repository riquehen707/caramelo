"use client";

import { useState } from "react";
import { AlertCircle, Check, Minus, Plus, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/commerce/types";
import { BrandStamp } from "@/components/ui/BrandStamp";
import { Button } from "@/components/ui/Button";
import { CommercePanel } from "@/components/ui/CommercePanel";
import { Price } from "@/components/ui/Price";
import { useCartStore } from "@/store/cart-store";
import { ColorSelector } from "./ColorSelector";
import { ProductTrustInfo } from "./ProductTrustInfo";
import { SizeSelector } from "./SizeSelector";
import styles from "./ProductInfo.module.scss";

type ProductInfoProps = {
  product: Product;
};

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const [messageTone, setMessageTone] = useState<"success" | "error">(
    "success",
  );
  const addProduct = useCartStore((state) => state.addProduct);
  const openCart = useCartStore((state) => state.openCart);

  function handleAddToCart() {
    if (!product.availableForSale) return;

    if (product.sizes?.length && !selectedSize) {
      setMessageTone("error");
      setMessage("Escolha um tamanho.");
      return;
    }

    addProduct(product, {
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
    setMessageTone("success");
    setMessage("Produto adicionado ao carrinho.");
    openCart();
  }

  return (
    <CommercePanel className={`${styles.root} grid gap-7 p-5 lg:sticky lg:top-24 lg:p-7`}>
      <div className="grid gap-4 border-b border-foreground/12 pb-6">
        {product.collection ? (
          <BrandStamp>{product.collection}</BrandStamp>
        ) : null}
        <h1 className="max-w-xl text-4xl font-bold leading-none text-foreground sm:text-5xl">
          {product.name}
        </h1>
        <Price
          price={product.price}
          compareAtPrice={product.compareAtPrice}
          currency={product.currency}
          size="lg"
        />
      </div>

      <p className="text-body max-w-xl">Descrição breve do produto.</p>

      <div className="grid grid-cols-3 gap-2 border-y-2 border-foreground py-4 text-sm">
        <div>
          <p className="text-label text-caramelo">Base</p>
          <p className="mt-1 font-semibold text-foreground">{product.category}</p>
        </div>
        <div>
          <p className="text-label text-caramelo">Linha</p>
          <p className="mt-1 font-semibold text-foreground">
            {product.collection ?? "Caramelo"}
          </p>
        </div>
        <div>
          <p className="text-label text-caramelo">Pedido</p>
          <p className="mt-1 font-semibold text-foreground">WhatsApp</p>
        </div>
      </div>

      {product.colors?.length ? (
        <ColorSelector
          colors={product.colors}
          selectedColor={selectedColor}
          onChange={setSelectedColor}
        />
      ) : null}

      {product.sizes?.length ? (
        <SizeSelector
          sizes={product.sizes}
          selectedSize={selectedSize}
          onChange={setSelectedSize}
        />
      ) : null}

      <div className="grid gap-3">
        <span className="text-label text-muted">Quantidade</span>
        <div className="inline-flex h-12 w-fit items-center rounded-[var(--radius-control)] border-2 border-foreground bg-background shadow-[var(--shadow-soft)]">
          <button
            type="button"
            aria-label="Diminuir quantidade"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
            className="grid size-12 place-items-center text-foreground"
          >
            <Minus size={16} />
          </button>
          <span className="min-w-10 text-center text-sm font-semibold">
            {quantity}
          </span>
          <button
            type="button"
            aria-label="Aumentar quantidade"
            onClick={() => setQuantity((current) => current + 1)}
            className="grid size-12 place-items-center text-foreground"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className="grid gap-3">
        <Button
          type="button"
          onClick={handleAddToCart}
          disabled={!product.availableForSale}
          size="lg"
          className="w-full"
          leftIcon={<ShoppingBag size={20} strokeWidth={2.5} />}
        >
          Adicionar ao carrinho
        </Button>
        {message ? (
          <p
            className={
              messageTone === "success"
                ? "inline-flex items-center gap-2 text-sm font-medium text-brasil-green"
                : "text-error inline-flex items-center gap-2"
            }
          >
            {messageTone === "success" ? (
              <Check size={17} strokeWidth={2.5} />
            ) : (
              <AlertCircle size={17} strokeWidth={2.5} />
            )}
            {message}
          </p>
        ) : null}
        <p className="text-small">
          {product.availableForSale
            ? "Revise tamanho, cor e quantidade antes do WhatsApp."
            : "Produto esgotado."}
        </p>
      </div>

      <ProductTrustInfo />
    </CommercePanel>
  );
}
