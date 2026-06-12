import type { CommerceProvider } from "./provider";
import { localProvider } from "./local-provider";
import { shopifyProvider } from "./shopify-provider";

const providers: Record<string, CommerceProvider> = {
  local: localProvider,
  shopify: shopifyProvider,
};

const selectedProvider = process.env.COMMERCE_PROVIDER ?? "local";

export const commerce = providers[selectedProvider] ?? localProvider;

export type { Product } from "./types";
