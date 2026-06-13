# Direcao visual - Etapa 2

## Objetivo

Definir a direcao visual da Caramelo antes de continuar alterando componentes.

A loja deve parecer uma marca brasileira real de camisetas/streetwear, com energia urbana, repertorio popular e leitura comercial. O resultado nao deve parecer landing page generica, loja infantil, carnaval visual ou template de IA.

## Conceito central

**Brasil de rua, sem fantasia.**

A Caramelo vende camisetas brasileiras com linguagem de marca. O Brasil aparece como repertorio visual: rua, futebol, humor seco, cor de cidade, placa, etiqueta, arquibancada, calcada, boteco, varal, embalagem, tecido e codigo popular.

O vira-lata caramelo entra como simbolo cultural e atitude, nao como mascote desenhado ou elemento infantil.

## Personalidade da marca

### Como deve parecer

- Urbana
- Seca
- Brasileira
- Comercial
- Editorial
- Popular sem caricatura
- Simples, mas com intencao
- Streetwear de camiseta, nao moda de luxo distante

### Como nao deve parecer

- Carnaval
- Mascote infantil
- Loja de souvenir
- Template de IA
- SaaS com camiseta
- Editorial fashion frio demais
- E-commerce basico com grid quadrado
- Marca patriotica literal em verde/amarelo/azul

## Territorio visual

### Referencias culturais permitidas

- Placa de rua
- Numero de camisa
- Etiqueta de roupa
- Recibo, comanda ou nota simples
- Campinho e arquibancada
- Calcada, muro, cimento, sombra dura
- Embalagem postal
- Foto de camiseta pendurada, dobrada ou em corpo
- Tipografia de sinalizacao popular, mas com controle
- Selo pequeno, etiqueta e micrografismo

### Referencias culturais proibidas ou muito limitadas

- Bandeira do Brasil em area grande
- Araras, coqueiros, praia generica ou carnaval
- Mascote de cachorro cartoon
- Bola de futebol gigante
- Blocos chapados verde/amarelo/azul
- Gradiente tropical
- Grafismos abstratos sem funcao
- Excesso de stamps e textos em uppercase

## Paleta recomendada

### Base

| Papel | Cor | Uso |
| --- | --- | --- |
| Fundo principal | `#F2E8D8` | base quente, papel, loja |
| Superficie clara | `#FFF8EE` | cards, fichas, areas de compra |
| Superficie areia | `#E5D7C3` | fundos de produto |
| Texto principal | `#15120F` | titulos, nav, precos |
| Grafite quente | `#27211B` | secoes escuras, contraste |

### Marca

| Papel | Cor | Uso |
| --- | --- | --- |
| Caramelo principal | `#A26332` | CTA, etiquetas, detalhes |
| Caramelo escuro | `#6B3F1E` | hover, texto de destaque |
| Caramelo claro | `#D7AD7A` | selos, fundo sutil, detalhes |

### Acentos brasileiros discretos

| Papel | Cor | Uso |
| --- | --- | --- |
| Amarelo queimado | `#C99A35` | detalhe, nao bloco grande |
| Verde arquibancada | `#2F5A42` | selo, micrografismo, detalhe |
| Azul jogo | `#344F73` | detalhe secundario |
| Vermelho tijolo | `#9B3F2D` | erro, alerta, detalhe raro |

### Regras de uso de cor

- Off-white e grafite devem carregar a loja.
- Caramelo deve ser a cor de marca principal.
- Verde, amarelo e azul devem aparecer como detalhe pequeno.
- Nunca usar verde/amarelo/azul como trio dominante.
- Fundo de produto deve ser neutro e quente.
- Fundo escuro deve ser usado para momentos de marca, nao em todas as secoes.

## Tipografia

### Recomendacao atual

Manter Geist por enquanto para evitar nova dependencia e manter estabilidade.

### Ajuste necessario

Criar contraste tipografico por funcao:

- **Hero e manifesto:** peso alto, frases curtas, max-width agressivo.
- **Produto:** nome claro, preco forte, informacao pequena bem organizada.
- **Labels:** uppercase apenas em pequenas etiquetas.
- **Texto editorial:** frases medias, ritmo seco, sem paragrafo longo.
- **Carrinho:** leitura utilitaria, sem dramaticidade.

### Possivel evolucao futura

Se a marca precisar de mais personalidade depois da Etapa 3, considerar uma fonte display para titulos. Exemplos de direcao, nao decisao final:

- grotesca condensada
- display pesada com cara de cartaz
- sans mais humana e menos SaaS

Nao trocar fonte antes de resolver produto, composicao e tokens.

## Sistema de composicao

### Principio

Usar composicao editorial com produto dominante, mas preservar clareza comercial.

### Regras

- Uma secao por pagina pode ter composicao mais solta.
- As demais devem ser mais limpas para o usuario descansar.
- Rotacao deve ser usada como destaque, nao em todos os cards.
- Cards de produto podem ter variacao sutil, mas nome/preco precisam alinhar visualmente.
- Sobreposicao deve envolver produto ou etiqueta, nunca decoracao vazia.
- Elementos diagonais devem ter funcao editorial, nao enfeite.

### Onde usar movimento visual

- Hero
- Um bloco de marca
- Capa do catalogo
- Galeria de produto

### Onde manter estabilidade

- Header
- Navegacao
- Grid principal do catalogo
- Selecao de tamanho/cor
- Carrinho
- CTA de compra

## Produto e imagem

### Problema atual

Os placeholders SVG ainda fazem a loja parecer prototipo.

### Direcao recomendada

Cada produto deve ter no minimo:

1. Frente da camiseta em mockup realista
2. Costas da camiseta
3. Detalhe da estampa ou tecido
4. Opcional: camiseta em corpo ou contexto urbano

### Estilo das imagens

- Fundo quente e neutro
- Sombra realista
- Camiseta com caimento natural
- Estampa legivel
- Nada de boneco/cartoon
- Nada de composicao com formas abstratas
- Produto grande, respirado e inspecionavel

### Se nao houver foto real

Usar mockup realista gerado ou produzido, nao SVG geometrico.

## UI por pagina

### Home

Objetivo: comunicar marca e levar para colecao.

Prioridades:

- Hero com produto dominante.
- Texto curto e memoravel.
- CTA claro para colecao.
- Uma secao forte de manifesto.
- Uma grade de produtos limpa.
- Um fechamento comercial simples.

Evitar:

- Muitas secoes explicando a marca.
- Cards de referencia competindo com produtos.
- Rotacao em excesso.

### Produtos

Objetivo: vender camiseta.

Prioridades:

- Catalogo rapido.
- Imagem grande.
- Nome, preco e cores claras.
- Pouco texto.
- Filtro/categorias somente quando houver volume real.

Evitar:

- Capa de catalogo mais forte que os produtos.
- Cards com movimento que atrapalhe comparacao.
- Tags demais.

### Produto individual

Objetivo: converter.

Prioridades:

- Galeria grande.
- Nome e preco claros.
- Tamanho/cor sem confusao.
- Botao "Adicionar ao carrinho" dominante.
- Informacoes de confianca abaixo.

Evitar:

- Manifesto nesta pagina.
- Decoracao competindo com compra.
- Scroll excessivo antes da compra.

### Carrinho

Objetivo: revisar e finalizar pelo WhatsApp.

Prioridades:

- Itens claros.
- Subtotal visivel.
- Microcopy curta.
- CTA de WhatsApp forte.
- Aparencia segura e simples.

Evitar:

- Visual editorial demais.
- Sombra/rotacao em itens.
- Texto longo sobre checkout futuro.

## Mobile-first

### Regra principal

No mobile, clareza vence composicao.

### Regras

- Hero deve mostrar headline, CTA e produto sem exigir muito scroll.
- Reduzir rotacoes no mobile.
- Evitar elementos absolutos que criem altura vazia.
- Produto deve ocupar largura generosa.
- CTAs devem ser visiveis e confortaveis.
- Carrinho deve ser direto.

### O que testar

- 390px de largura
- 430px de largura
- primeira dobra da home
- pagina de produto ate o botao de carrinho
- carrinho com 1 e 2 produtos

## Tom de voz

### Voz da marca

Curta, seca, urbana, brasileira.

### Bons exemplos

- Camisetas brasileiras sem fantasia.
- Brasil de rua, sem souvenir.
- Produto primeiro. Identidade no detalhe.
- Rua, futebol e cultura popular em peca de rotina.
- Finalize pelo WhatsApp e confirme frete e pagamento.

### Evitar

- Textos longos demais.
- Explicacao de conceito em toda secao.
- Excesso de "premium", "exclusivo", "autentico".
- Piada forcada.
- Patriotismo literal.

## Componentes visuais a criar na Etapa 3

Para sair da repeticao de classes Tailwind longas, criar ou consolidar:

- `EditorialFrame`
- `ProductFrame`
- `BrandStamp`
- `SectionIntro`
- `MarqueeStrip`
- `CommercePanel`
- `TrustList`

Esses componentes devem receber variantes, nao estilos improvisados em cada pagina.

## Regras de acabamento

- Radius padrao: 6px ou 8px.
- Sem cards dentro de cards.
- Sombra apenas para produto/editorial, nao para toda superficie.
- Borda fina e quente.
- Textura global deve ser quase invisivel.
- Acento colorido deve ter funcao.
- Texto renderizado deve estar sem encoding quebrado.

## Criterios de sucesso

A direcao visual sera considerada aplicada quando:

- A primeira dobra parecer loja de moda, nao landing page.
- O usuario entender em 5 segundos que vende camisetas brasileiras.
- O produto parecer fisico e desejavel.
- A marca tiver codigo visual alem da cor caramelo.
- A pagina de produto priorizar compra.
- O carrinho parecer confiavel.
- Mobile estiver mais claro que decorativo.
- Nao houver textos com encoding quebrado.

## Decisao tecnica

Manter Tailwind como base.

Usar:

- Tailwind para layout, espacamento, responsividade e estados.
- `globals.css` para tokens e helpers visuais.
- Componentes UI para padroes reutilizaveis.
- `module.scss` apenas se surgir efeito visual complexo e isolado.

Nao migrar para SCSS agora.

## Proxima etapa

Etapa 3 deve transformar esta direcao em design tokens reais e componentes base:

- revisar `globals.css`
- corrigir encoding dos textos visiveis
- consolidar radius/sombra/borda
- criar componentes editoriais reutilizaveis
- reduzir classes improvisadas nos componentes de pagina
