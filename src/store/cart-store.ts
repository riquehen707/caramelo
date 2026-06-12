import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product, ProductImage } from "@/lib/commerce/types";
import { getProductMainImage } from "@/lib/product-images";

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  price: number;
  currency: "BRL";
  image: ProductImage;
  selectedSize?: string;
  selectedColor?: string;
  quantity: number;
  availableForSale: boolean;
};

type AddItemInput = Omit<CartItem, "quantity"> & {
  quantity?: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: AddItemInput) => void;
  addProduct: (
    product: Product,
    options?: { size?: string; color?: string; quantity?: number },
  ) => void;
  removeItem: (
    productId: string,
    selectedSize?: string,
    selectedColor?: string,
  ) => void;
  removeProduct: (
    productId: string,
    selectedSize?: string,
    selectedColor?: string,
  ) => void;
  updateQuantity: (
    productId: string,
    selectedSize: string | undefined,
    selectedColor: string | undefined,
    quantity: number,
  ) => void;
  increaseQuantity: (
    productId: string,
    selectedSize?: string,
    selectedColor?: string,
  ) => void;
  decreaseQuantity: (
    productId: string,
    selectedSize?: string,
    selectedColor?: string,
  ) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getTotalItems: () => number;
  getItemCount: () => number;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
};

function isSameItem(
  item: CartItem,
  productId: string,
  selectedSize?: string,
  selectedColor?: string,
) {
  return (
    item.productId === productId &&
    item.selectedSize === selectedSize &&
    item.selectedColor === selectedColor
  );
}

function toCartItem(product: Product, options?: { size?: string; color?: string; quantity?: number }): CartItem {
  return {
    productId: product.id,
    slug: product.slug,
    name: product.name,
    price: product.price,
    currency: product.currency,
    image: getProductMainImage(product),
    selectedSize: options?.size,
    selectedColor: options?.color,
    quantity: options?.quantity ?? 1,
    availableForSale: product.availableForSale,
  };
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem(item) {
        const quantity = item.quantity ?? 1;

        set((state) => {
          const existingItem = state.items.find((cartItem) =>
            isSameItem(
              cartItem,
              item.productId,
              item.selectedSize,
              item.selectedColor,
            ),
          );

          if (existingItem) {
            return {
              items: state.items.map((cartItem) =>
                isSameItem(
                  cartItem,
                  item.productId,
                  item.selectedSize,
                  item.selectedColor,
                )
                  ? { ...cartItem, quantity: cartItem.quantity + quantity }
                  : cartItem,
              ),
            };
          }

          return {
            items: [...state.items, { ...item, quantity }],
          };
        });
      },

      addProduct(product, options) {
        get().addItem(toCartItem(product, options));
      },

      removeItem(productId, selectedSize, selectedColor) {
        set((state) => ({
          items: state.items.filter(
            (item) => !isSameItem(item, productId, selectedSize, selectedColor),
          ),
        }));
      },

      removeProduct(productId, selectedSize, selectedColor) {
        get().removeItem(productId, selectedSize, selectedColor);
      },

      updateQuantity(productId, selectedSize, selectedColor, quantity) {
        if (quantity <= 0) {
          get().removeItem(productId, selectedSize, selectedColor);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            isSameItem(item, productId, selectedSize, selectedColor)
              ? { ...item, quantity }
              : item,
          ),
        }));
      },

      increaseQuantity(productId, selectedSize, selectedColor) {
        const item = get().items.find((cartItem) =>
          isSameItem(cartItem, productId, selectedSize, selectedColor),
        );

        if (!item) return;

        get().updateQuantity(
          productId,
          selectedSize,
          selectedColor,
          item.quantity + 1,
        );
      },

      decreaseQuantity(productId, selectedSize, selectedColor) {
        const item = get().items.find((cartItem) =>
          isSameItem(cartItem, productId, selectedSize, selectedColor),
        );

        if (!item) return;

        get().updateQuantity(
          productId,
          selectedSize,
          selectedColor,
          item.quantity - 1,
        );
      },

      clearCart() {
        set({ items: [] });
      },

      getSubtotal() {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        );
      },

      getTotalItems() {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getItemCount() {
        return get().getTotalItems();
      },

      openCart() {
        set({ isOpen: true });
      },

      closeCart() {
        set({ isOpen: false });
      },

      toggleCart() {
        set((state) => ({ isOpen: !state.isOpen }));
      },
    }),
    {
      name: "caramelo-cart",
      version: 2,
      partialize: (state) => ({ items: state.items }),
      migrate: (persistedState) => {
        const state = persistedState as { items?: unknown[] };

        const items = Array.isArray(state.items)
          ? state.items
              .map((item) => {
                const maybeItem = item as Partial<CartItem> & {
                  product?: Product;
                  size?: string;
                  color?: string;
                };

                if (maybeItem.product) {
                  return toCartItem(maybeItem.product, {
                    size: maybeItem.size,
                    color: maybeItem.color,
                    quantity: maybeItem.quantity,
                  });
                }

                return maybeItem.productId ? (maybeItem as CartItem) : null;
              })
              .filter((item): item is CartItem => Boolean(item))
          : [];

        return { items };
      },
    },
  ),
);
