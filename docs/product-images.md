# Product image guidelines

Este documento define o padrão para imagens de produto da Caramelo.

## Estrutura recomendada

```txt
public/products/
  camiseta-amarela/
    front.webp
    back.webp
    detail.webp
    model.webp
    duo.webp

  camiseta-preta/
    front.webp
    back.webp
    detail.webp
    model.webp
    duo.webp
```

## Slots de imagem

A ordem visual padrão é:

1. `front`: frente da camiseta e imagem principal do produto.
2. `back`: costas da camiseta.
3. `print-detail`: detalhe da arte ou estampa.
4. `model`: mockup com modelo ou peça em uso.
5. `duo`: composição comparativa de frente e costas.

Não use `duo` como capa do card. A capa deve ser sempre a imagem `front`.

## Qualidade visual

- Proporção recomendada: 4:5.
- Tamanho ideal: 2000x2500px.
- Formato recomendado: WebP.
- Fundo neutro.
- Iluminação consistente.
- Camiseta bem centralizada.
- Mesma distância e enquadramento entre produtos.
- Evitar recortes que escondam gola, barra ou estampa principal.

## Placeholders

Enquanto as imagens reais não existirem, o frontend usa placeholders tipados via
`src/lib/product-images.ts`. Os placeholders atuais ficam em
`public/products/placeholders/`.

Quando houver assets finais, a pasta `public/placeholders/` pode receber os
arquivos globais abaixo:

```txt
public/placeholders/product-front.webp
public/placeholders/product-back.webp
public/placeholders/product-print-detail.webp
public/placeholders/product-model.webp
public/placeholders/product-duo.webp
public/placeholders/product-generic.webp
```

Não aponte dados públicos para arquivos que ainda não existem. Use
`getProductImagePlaceholder(type)` para fallback seguro.

## Shopify futura

Quando o `shopify-provider` for implementado, imagens retornadas em lista simples
devem ser mapeadas para os tipos internos:

- `front`
- `back`
- `print-detail`
- `model`
- `duo`

Esse mapeamento deve acontecer no provider, preservando o tipo `Product` interno.
