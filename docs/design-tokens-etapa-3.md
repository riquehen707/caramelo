# Design tokens e componentes base - Etapa 3

## Objetivo

Transformar a direcao visual da Etapa 2 em base tecnica reutilizavel.

## Tokens atualizados

Arquivo principal:

- `src/app/globals.css`

Tokens consolidados:

- cores base: background, surface, surface-muted, surface-dark
- cores de marca: caramelo, caramelo-dark, caramelo-light
- acentos: brasil-yellow, brasil-green, brasil-blue, brick
- radius: `--radius-brand`, `--radius-control`
- sombras: `--shadow-editorial`, `--shadow-product`, `--shadow-soft`

Helpers visuais:

- `.editorial-card`
- `.product-frame`
- `.commerce-panel`
- `.brand-stamp`
- `.marquee-strip`
- `.street-texture`
- `.soft-corner`

## Componentes criados

### `BrandStamp`

Uso para etiquetas pequenas de marca, colecao e status.

Arquivo:

- `src/components/ui/BrandStamp.tsx`

### `EditorialFrame`

Uso para superficies editoriais com sombra, borda e tilt controlado.

Arquivo:

- `src/components/ui/EditorialFrame.tsx`

### `ProductFrame`

Uso para molduras de produto e mockup.

Arquivo:

- `src/components/ui/ProductFrame.tsx`

### `SectionIntro`

Uso para cabecalhos de secao com etiqueta, titulo e texto.

Arquivo:

- `src/components/ui/SectionIntro.tsx`

### `MarqueeStrip`

Uso para faixas curtas de marca/repertorio.

Arquivo:

- `src/components/ui/MarqueeStrip.tsx`

### `CommercePanel`

Uso para superficies comerciais, como ficha de produto e resumo de carrinho.

Arquivo:

- `src/components/ui/CommercePanel.tsx`

### `TrustList`

Uso para listas de confianca com icones.

Arquivo:

- `src/components/ui/TrustList.tsx`

## Componentes ajustados

- `Button`
- `Badge`
- `Card`
- `SectionHeader`
- `HeroSection`
- `ProductCard`
- `ProductGallery`
- `ProductInfo`
- `ProductTrustInfo`

## Regras de uso

- Produto deve usar `ProductFrame`.
- Ficha de compra e resumo devem usar `CommercePanel`.
- Etiquetas pequenas devem usar `BrandStamp`.
- Movimento visual deve ficar concentrado em componentes editoriais.
- Carrinho e compra devem priorizar estabilidade.
- Novos estilos recorrentes devem virar componente ou helper global antes de serem repetidos.

## Proxima etapa

Etapa 4 deve aplicar esses componentes de forma mais ampla:

- home completa
- pagina de produtos
- carrinho
- limpeza de classes duplicadas
- revisao mobile-first
