# Diagnostico visual - Etapa 1

## Objetivo

Diagnosticar por que a loja Caramelo ainda nao parece uma marca de moda/streetwear brasileira madura, mesmo depois das primeiras tentativas de redesign.

Esta etapa nao altera a UI. Ela define o que precisa ser corrigido nas proximas etapas.

## Diagnostico geral

A interface atual ja saiu do visual mais generico inicial, mas ainda nao tem uma direcao visual suficientemente forte e consistente. O resultado mistura intencao editorial com execucao ainda instavel: ha sobreposicoes e rotacoes, mas elas parecem adicionadas por cima de uma estrutura de ecommerce padrao, nao nascidas de um sistema visual de marca.

O principal problema nao e Tailwind, Next.js ou a arquitetura. O problema e de direcao visual, ritmo, produto e coerencia.

## Problemas principais

### 1. Identidade visual ainda indefinida

A loja quer comunicar streetwear brasileiro, futebol, rua, cultura popular e vira-lata caramelo, mas esses elementos ainda aparecem mais no texto do que no visual.

Problemas:

- A marca nao tem um codigo visual proprietario forte.
- O caramelo aparece como cor, mas nao como linguagem.
- Futebol e Brasil urbano aparecem como palavras, nao como textura, composicao, fotografia, grafismo ou detalhes.
- A loja ainda depende muito dos mockups de camiseta para carregar a identidade.

Risco:

- A interface pode continuar parecendo uma composicao estetica generica com temas brasileiros, nao uma marca real.

### 2. Composicao com movimento, mas sem sistema

A versao atual usa rotacao, sobreposicao e sombras para fugir do quadrado. Isso melhora o impacto, mas ainda falta regra.

Problemas:

- Rotacoes aparecem em varios lugares sem hierarquia clara.
- Alguns cards parecem desalinhados por efeito, nao por composicao editorial.
- As secoes ainda sao organizadas em blocos previsiveis.
- O hero tem mais impacto, mas a estrutura ainda depende de elementos absolutos que podem ficar fragil no mobile.

Risco:

- A UI pode parecer "baguncada artificial" em vez de "editorial intencional".

### 3. Produto ainda nao parece real o suficiente

As camisetas usam placeholders SVG. Mesmo mais discretos, ainda denunciam que a loja nao tem fotografia ou mockups profissionais.

Problemas:

- Falta fotografia ou mockup realista.
- Falta contexto de uso: corpo, rua, detalhe de estampa, tecido, etiqueta, embalagem.
- Os cards tem boa informacao, mas pouca sensacao de produto fisico.
- A pagina de produto nao cria desejo suficiente.

Risco:

- O usuario entende o que esta sendo vendido, mas nao sente confianca ou desejo de compra.

### 4. Paleta boa, mas pouco tensionada

A base off-white, preto e caramelo esta correta. Mas a aplicacao ainda fica muito proxima de uma paleta neutra continua.

Problemas:

- Poucos pontos de contraste realmente memoraveis.
- O dark section funciona, mas nao cria uma assinatura visual unica.
- Acentos verde, azul e amarelo ainda aparecem como blocos pequenos, nao como detalhes culturais bem resolvidos.
- Falta uma cor secundaria operacional para chamadas comerciais.

Risco:

- A loja fica sofisticada, mas sem energia suficiente para streetwear.

### 5. Tipografia forte, mas pouco editorial

Geist e uma escolha segura, mas a marca pede mais personalidade.

Problemas:

- A tipografia e limpa, mas ainda muito SaaS/Vercel em alguns pontos.
- Os titulos grandes tem impacto, mas pouca identidade brasileira/streetwear.
- Falta contraste entre voz editorial, preco, ficha tecnica e navegacao.
- Labels em uppercase aparecem bastante e podem reforcar sensacao de template.

Risco:

- A loja fica profissional, mas nao memoravel.

### 6. Hierarquia comercial precisa ficar mais clara

O fluxo existe: produto, tamanho, cor, carrinho e WhatsApp. Mas a interface ainda mistura manifesto e compra sem sempre priorizar o proximo passo.

Problemas:

- O hero compete entre manifesto, produto e decoracao.
- Cards tem movimento, mas precisam preservar leitura rapida de produto/preco.
- Pagina de produto precisa tornar "Adicionar ao carrinho" mais inevitavel.
- Carrinho esta funcional, mas visualmente ainda parece utilitario.

Risco:

- A marca melhora, mas a conversao nao acompanha.

### 7. Mobile precisa ser tratado como primeira experiencia

A estrutura usa responsividade, mas varias composicoes editoriais foram pensadas primeiro para desktop.

Problemas:

- Elementos absolutos no hero e no catalogo podem gerar alturas excessivas no mobile.
- Rotacoes e sobreposicoes podem reduzir area util em telas pequenas.
- A primeira dobra mobile precisa responder em segundos: o que vende, por que existe, onde comprar.
- Cards com deslocamento vertical devem ser neutralizados ou reduzidos no mobile.

Risco:

- A loja pode parecer mais interessante no desktop e mais confusa no celular.

### 8. Qualidade percebida e acabamento

Ainda ha sinais de acabamento incompleto.

Problemas:

- Alguns textos aparecem com encoding quebrado no terminal, como `peca`, `colecao`, `nao`.
- Existem classes e componentes visuais que cresceram por tentativa, nao por sistema.
- Falta criterio consistente para radius, sombra, borda e fundos.
- Falta uma revisao de copy final com voz de marca.

Risco:

- Mesmo com boa composicao, pequenos sinais de improviso reduzem confianca.

## Prioridades para a proxima etapa

### Prioridade 1 - Direcao visual

Antes de continuar mexendo nos componentes, definir um sistema visual claro:

- Qual e o codigo grafico da Caramelo?
- O que representa futebol sem virar uniforme?
- O que representa vira-lata caramelo sem virar mascote infantil?
- Que tipo de textura, foto, etiqueta, selo ou grafismo pode aparecer?
- Qual deve ser a energia: seca, popular, urbana, ironica, premium?

### Prioridade 2 - Produto real

Sem imagens melhores, a loja sempre vai parecer parcialmente prototipo.

Recomendacao:

- Criar mockups de camiseta mais realistas.
- Incluir pelo menos 3 tipos de imagem por produto:
  - frente
  - costas
  - detalhe/uso/contexto

### Prioridade 3 - Sistema de composicao

Definir regras para:

- quando usar rotacao
- quando usar cards retos
- quando usar fundo escuro
- quando usar selo/etiqueta
- quando usar acento colorido
- quando usar sombra

### Prioridade 4 - Mobile

Revisar home, catalogo, produto e carrinho primeiro em mobile.

## Criterios de sucesso da Etapa 2

A proxima etapa deve terminar com uma direcao visual documentada, incluindo:

- paleta refinada
- tipografia recomendada
- referencias visuais
- regras de composicao
- tratamento de produto
- regras de motion/rotacao
- tom de voz
- exemplos do que evitar

## Decisao recomendada

Nao migrar para SCSS agora.

Manter Tailwind para layout e componentes, mas criar um sistema visual mais claro em:

- `src/app/globals.css`
- componentes base em `src/components/ui`
- componentes editoriais reutilizaveis

Usar `module.scss` apenas se a Etapa 2 definir efeitos visuais complexos que fiquem ruins no JSX.
