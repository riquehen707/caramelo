# Home completa - Etapa 5

## Objetivo

Aplicar a direcao visual da Caramelo na home completa, usando os tokens e componentes base criados na Etapa 3.

## Arquivos trabalhados

- `src/components/home/HeroSection.tsx`
- `src/components/home/BrandSnapshot.tsx`
- `src/components/home/CollectionStrip.tsx`
- `src/components/home/FeaturedProducts.tsx`
- `src/components/home/BrandManifesto.tsx`
- `src/components/home/TrustBar.tsx`
- `src/components/home/EditorialBanner.tsx`

## Principais mudancas

### Hero

- Mantem produto dominante e composicao editorial.
- Usa `BrandStamp`, `ProductFrame` e `MarqueeStrip`.
- Reduz risco mobile ao deixar produtos em fluxo normal no mobile e sobrepostos apenas em telas maiores.

### Contexto de marca

- Usa produto como evidencia visual.
- Troca tags soltas por `BrandStamp`.
- Usa `ProductFrame` para manter consistencia nos mockups.

### Referencias

- Usa `SectionIntro` e `EditorialFrame`.
- Mantem energia e variacao visual sem transformar tudo em grade quadrada.

### Produtos em destaque

- Usa `SectionIntro`.
- Mantem foco comercial: colecao, produto, preco e CTA.

### Manifesto

- Usa `street-texture` e `BrandStamp`.
- Mantem o bloco escuro como momento de marca.

### Confianca

- Usa `TrustList`.
- Mantem informacoes comerciais claras: WhatsApp, envio, troca e checkout futuro.

### CTA final

- Usa `CommercePanel`, `ProductFrame` e `BrandStamp`.
- Foca em compra simples e finalizacao pelo WhatsApp.

## Validacao

- `npm run lint` passou.
- `npm run build` passou.
- Rotas locais testadas com 200:
  - `/`
  - `/produtos`
  - `/produtos/camiseta-caramelo-brasil-preta`
  - `/carrinho`

## Proxima etapa recomendada

Etapa 6: Catalogo e cards.

Objetivo: refinar `/produtos`, `ProductGrid` e `ProductCard` para equilibrar energia editorial com comparacao clara de ecommerce.
