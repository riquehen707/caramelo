# Catalogo e cards - Etapa 6

## Objetivo

Refinar `/produtos`, `ProductGrid` e `ProductCard` para equilibrar energia editorial com clareza de ecommerce.

## Decisao principal

O catalogo deve ser mais estavel que a home.

Na home, cards podem ter movimento editorial sutil. No catalogo, o usuario precisa comparar produtos rapidamente por imagem, nome, preco e cores.

## Arquivos trabalhados

- `src/app/produtos/page.tsx`
- `src/components/product/ProductGrid.tsx`
- `src/components/product/ProductCard.tsx`
- `src/components/home/FeaturedProducts.tsx`

## Mudancas

### Pagina `/produtos`

- Capa editorial refeita com `BrandStamp`, `EditorialFrame` e `ProductFrame`.
- Mantem texto curto e comercial.
- Grade principal usa variante `catalog`.
- Conteudo segue renderizado como Server Component e indexavel.

### `ProductGrid`

- Recebe `variant`.
- Variantes:
  - `catalog`: padrao estavel para comparacao.
  - `editorial`: movimento sutil para areas de marca/home.

### `ProductCard`

- Recebe `variant`.
- Na variante `catalog`:
  - sem rotacao por padrao;
  - imagem maior e mais estavel;
  - categoria visivel;
  - numero de cores visivel;
  - foco em nome, preco e link de produto.
- Na variante `editorial`:
  - mantem pequenas variacoes de posicao;
  - preserva leitura comercial.

### Home

- `FeaturedProducts` passa a usar `variant="editorial"`.

## Regras de uso

- Usar `variant="catalog"` em paginas de listagem.
- Usar `variant="editorial"` apenas em secoes de marca ou destaque.
- Nao usar rotacao quando a prioridade for comparacao de produto.
- Preco e nome devem permanecer alinhados e legiveis.

## Proxima etapa recomendada

Etapa 7: Pagina de produto e carrinho.

Objetivo: refinar galeria, ficha de compra, selecao de variantes, carrinho lateral e finalizacao por WhatsApp.
