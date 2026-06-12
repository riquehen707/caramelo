"use client";

import { useState } from "react";
import { AlertCircle, Check, Minus, Plus, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/commerce/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Price } from "@/components/ui/Price";
import { useCartStore } from "@/store/cart-store";
import { ColorSelector } from "./ColorSelector";
import { ProductTrustInfo } from "./ProductTrustInfo";
import { SizeSelector } from "./SizeSelector";

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
    <div className="editorial-card grid gap-8 border border-foreground/12 bg-surface p-5 lg:sticky lg:top-24 lg:p-7">
      <div className="grid gap-4 border-b border-foreground/12 pb-6">
        {product.collection ? (
          <Badge variant="caramelo">{product.collection}</Badge>
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

      <p className="text-body max-w-xl">{product.description}</p>

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
        <div className="inline-flex h-12 w-fit items-center border border-foreground/15 bg-background">
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
            ? "Escolha tamanho e cor para fechar a peça."
            : "Produto esgotado."}
        </p>
      </div>

      <ProductTrustInfo />
    </div>
  );
}
