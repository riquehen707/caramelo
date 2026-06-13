# Etapa 7 - Produto e carrinho

## Objetivo

Refinar a experiencia de compra sem trocar a arquitetura commerce existente. A pagina de produto continua indexavel e o checkout temporario segue pelo carrinho com WhatsApp, preservando caminho para Shopify, Mercado Pago ou Stripe no futuro.

## O que mudou

- Pagina de produto reorganizada com galeria editorial a esquerda e painel de compra a direita.
- Galeria passou a usar molduras de produto neutras, thumbnails estaveis e informacao auxiliar discreta.
- Painel de compra ganhou metadados curtos, seletores mais consistentes, controle de quantidade e microcopy sobre revisao no carrinho.
- Detalhes do produto foram transformados em uma ficha limpa, sem excesso de cards artificiais.
- Item do carrinho foi redesenhado com thumbnail neutro, preco, quantidade e acao de remover mais claros.
- Drawer do carrinho ganhou cabecalho editorial, resumo visual, estado vazio e CTA de WhatsApp mais profissional.
- Pagina `/carrinho` ganhou estrutura de revisao real, resumo sticky e explicacao curta do fluxo manual.

## Decisoes de UI

- Mantive fundo off-white e paineis creme para dar continuidade aos tokens da etapa 3.
- Usei caramelo como acento de acao e grafite para contraste.
- Evitei gradientes, formas abstratas e composicoes carnavalescas.
- Mantive botao principal da pagina de produto como "Adicionar ao carrinho".
- Mantive "Finalizar pelo WhatsApp" apenas no carrinho e drawer.

## Fluxo preservado

1. Usuario escolhe produto.
2. Seleciona tamanho, cor e quantidade.
3. Adiciona ao carrinho.
4. Revisa itens no drawer ou em `/carrinho`.
5. Finaliza pelo WhatsApp com mensagem gerada automaticamente.

## Arquivos principais

- `src/app/produtos/[slug]/page.tsx`
- `src/components/product/ProductGallery.tsx`
- `src/components/product/ProductInfo.tsx`
- `src/components/product/ProductDetails.tsx`
- `src/components/product/ColorSelector.tsx`
- `src/components/product/SizeSelector.tsx`
- `src/components/cart/CartItem.tsx`
- `src/components/cart/CartDrawer.tsx`
- `src/components/cart/CartPage.tsx`
