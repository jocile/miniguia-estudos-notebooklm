# Configuração de Deploy para o GitHub Pages

Esta documentação descreve todas as etapas e modificações necessárias que foram feitas para habilitar o deploy automático da aplicação Next.js (pasta `web`) no GitHub Pages usando o repositório como servidor (`https://jocil.github.io/miniguia-estudos-notebooklm/`).

## 1. Ajustes no Next.js (`web/next.config.ts`)

Para hospedar o Next.js no GitHub Pages, o framework precisa criar arquivos estáticos puros e reconhecer qual é o subdiretório em que está sendo servido. Fizemos as seguintes modificações em `web/next.config.ts`:

- **Static HTML Export**: Definimos `output: "export"` para fazer com que o Next.js gere arquivos HTML/CSS/JS estáticos na pasta `out/`, eliminando a necessidade de um servidor Node.js.
- **Imagens Não Otimizadas**: Configuração de `images: { unoptimized: true }`. A otimização padrão de imagens do Next.js exige um servidor, o que causaria quebra em provedores estáticos.
- **Configuração Dinâmica de Base Path**: O GitHub Pages utiliza o nome do repositório na URL final. Configuramos `basePath` dinamicamente: se o código roda no GitHub Actions (via `process.env.GITHUB_ACTIONS`), apontamos para `"/miniguia-estudos-notebooklm"`. Assim o site funciona na nuvem e o `npm run dev` local não para de funcionar na raiz (`/`).

**Código Configurado:**
```typescript
import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? "/miniguia-estudos-notebooklm" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

## 2. GitHub Actions Workflow (`.github/workflows/deploy.yml`)

Para automatizar a exportação e a publicação sempre que houver modificações na branch `main`, construímos uma pipeline do GitHub Actions seguindo as orientações oficiais do GitHub e do Next.js. O fluxo executa as seguintes etapas:

- **Configuração de Ambiente**: Checkout do repositório e uso do `actions/setup-node@v4` apontando para a pasta `web/package-lock.json`.
- **Compatibilidade Node.js Actions**: Inclusão explícita de `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true` no bloco `env`. Isso se tornou necessário porque o GitHub iniciou a depreciação do Node 20 para as Actions, forçando o uso do Node 24 para evitar avisos e quebras futuras.
- **Configuração do Pages**: Inclusão de `actions/configure-pages@v4` com o parâmetro `enablement: true`. Esse parâmetro tenta habilitar diretamente a configuração do repo para o Pages, evitando falhas inicias por falta de configuração.
- **Build Estático e Upload**: Instala as dependências (`npm ci`), faz o *build* e faz upload da pasta final (`./web/out`) via `actions/upload-pages-artifact@v3`.
- **Deploy**: O último *job* sobe os artefatos na nuvem do GitHub executando o `actions/deploy-pages@v4`.

## 3. Configuração Necessária na Interface do GitHub

Apesar do parâmetro `enablement: true` auxiliar, eventualmente a política organizacional do repositório pode bloquear a autorização automática do GitHub Actions para infraestrutura de deploy do Pages.

Sempre que a aplicação for montada pela primeira vez, convém validar a configuração indo até os ajustes manuais:

1. Acesse **Settings** (Configurações) no repositório no GitHub.
2. Na lateral esquerda, clique em **Pages**.
3. Em *Build and deployment*, no campo **Source** (Origem), altere de "Deploy from a branch" para **GitHub Actions**.

## 4. O Sistema de Rotas Interno (Link genérico do Next.js)

O Front-End precisava ser nativamente desenhado usando os componentes do Next.js para usufruir da configuração sem dor de cabeça. 

Como as páginas (`page.tsx` e `layout.tsx`) usavam a tag `<Link href="...">` nativa da biblioteca `next/link` em vez de tags `<a>` normais, o Next.js injetou automaticamente a configuração de subdiretório em todas as referências para outras rotas e assets (deixando todos os *hrefs* como `/miniguia-estudos-notebooklm/slug` no código da nuvem), tornando a infraestrutura do GitHub totalmente transparente para o código React.
