# X1 Mario Kart Live Experience

Portal comercial interativo do mídia kit 2026 da X1 Mario Kart Live Experience. O site transforma o material oficial em uma apresentação web responsiva, acessível e publicável como site estático.

## Stack

- React
- TypeScript
- Vite
- CSS nativo

## Requisitos

- Node.js 20 ou superior
- npm 10 ou superior

## Execução local

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Gere a versão de produção:

```bash
npm run build
```

Valide os tipos:

```bash
npm run typecheck
```

Visualize o build localmente:

```bash
npm run preview
```

## Materiais de referência

- PDF oficial: `docs/reference/midiakit_x1_mario_kart_live_v2.pdf`
- Fotografias originais: `public/assets/images/experience/202605-brasilia-game-festival/`
- Imagens otimizadas para o portal: `public/assets/images/experience/brasilia-game-festival/`
- Conteúdo e contatos centralizados: `src/data/content.ts`

## Publicação

O build é gerado em `dist/` e não exige backend. O projeto pode ser publicado diretamente em serviços como Cloudflare Pages, Vercel ou GitHub Pages.

### Cloudflare Pages

- Comando de build: `npm run build`
- Diretório de saída: `dist`
- Versão recomendada do Node.js: 20 ou superior

### Vercel

Importe o repositório, selecione Vite como framework e mantenha `npm run build` e `dist` como comando e diretório de saída.

### GitHub Pages

O `vite.config.ts` usa `base: './'`, mantendo os assets relativos e permitindo publicar o conteúdo de `dist/` em um subdiretório. Configure uma ação para executar `npm install`, `npm run build` e publicar `dist/`.

## Caminho base

A configuração relativa atual atende hospedagens estáticas e subdiretórios. Caso a plataforma exija uma raiz absoluta, altere `base` em `vite.config.ts` e mantenha os assets referenciados por `import.meta.env.BASE_URL`.
