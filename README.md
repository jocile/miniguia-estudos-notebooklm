# 📚 Miniguia de Estudos: Desenvolvimento Agêntico e Orquestração de IA

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![AI](https://img.shields.io/badge/Artificial%20Intelligence-blue?style=for-the-badge)

## 📖 Descrição

O **Miniguia de Estudos** é um projeto interativo construído com Next.js que foca nas novas metodologias de engenharia de software na era da Inteligência Artificial Generativa. Seu principal objetivo é apresentar conceitos de **SDD (Spec-Driven Development)**, **PRD (Product Requirement Document)** e **Documentação Semântica**.

A plataforma em si foi projetada para atuar como um Web App fluído que consome, renderiza e formata arquivos Markdown diretamente, fornecendo um ambiente de estudos otimizado para desenvolvedores explorarem abordagens agênticas e engenharia de contexto.

## 🔗 Links e Conteúdo do Repositório

As seguintes fontes em formato Markdown formam a [base de conhecimento deste repositório](web/src/content/). Clique nelas para acessar os conteúdos integrais:

1. 📄 **[Product Requirement Document](web/src/content/Product%20Requirement%20Document.md)**  
   *Descrição:* Explora o PRD como um "cérebro" dinâmico e focado no "o que" desenvolver contra aumento de escopo para as IAs.
2. 📄 **[Documentação Semântica](web/src/content/Documenta%C3%A7%C3%A3o%20Sem%C3%A2ntica.md)**  
   *Descrição:* Aborda como traduzir intenções visuais para que a IA atue esteticamente compreendendo referências.
3. 📄 **[Spec Driven Development](web/src/content/Spec%20Driven%20Development.md)**  
   *Descrição:* Detalha o framework SDD para escalar softwares construídos com inteligência paralela.
4. 📄 **[Glossário](web/src/content/Glossario.md)**  
   *Descrição:* Definições dos principais conceitos, como RPI, MCP, Subagentes e "Constituição" sistêmica.
5. 📄 **[Recursos - PRD](web/src/content/Recursos-PRD.md)**  
   *Descrição:* Resursos e materiais visando dar apoio na formulação dos PRDs.
6. 📄 **[Metodologia SDD](web/src/content/Metodologia-sdd.md)**  
   *Descrição:* Explicação detalhada sobre as fases, princípios e anti-padrões da metodologia Spec-Driven Development.

## 🚀 Instalação e Uso

Para executar e ler o Miniguia localmente, você precisa ter o [Node.js](https://nodejs.org/) instalado. Recomendamos a utilização de um gerenciador de pacotes como `pnpm` ou `npm`.

**Comandos de Instalação e Execução local:**

```bash
# 1. Clone o repositório
git clone https://github.com/SEU_USUARIO/miniguia-estudos-notebooklm.git
cd miniguia-estudos-notebooklm

# 2. Navegue para o diretório do Web App
cd web

# 3. Instale as dependências
npm install
# ou pnpm install

# 4. Inicie o servidor em ambiente de desenvolvimento
npm run dev
# ou pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

**Adicionando novos módulos de estudo:**
Para adicionar ou editar conteúdos, basta modificar ou criar novos arquivos `.md` dentro do diretório `web/src/content/`. A aplicação lerá automaticamente as alterações e criará as rotas de forma dinâmica.

## 📂 Estrutura de Pastas e Arquivos

```text
📦 miniguia-estudos-notebooklm
 ┣ 📂 web                 # Aplicação principal em Next.js
 ┃ ┣ 📂 public/           # Arquivos estáticos e public assets
 ┃ ┣ 📂 src/
 ┃ ┃ ┣ 📂 app/            # Rotas do Next.js (App Router)
 ┃ ┃ ┃ ┣ 📜 globals.css   # Estilos globais e tokens dinâmicos com Tailwind
 ┃ ┃ ┃ ┣ 📜 layout.tsx    # Layout raiz estilizado da aplicação
 ┃ ┃ ┃ ┣ 📜 page.tsx      # Rota Principal (Grid de resumos / Menu)
 ┃ ┃ ┃ ┗ 📂 [slug]/       # Generador de rotas dinâmicas
 ┃ ┃ ┃   ┗ 📜 page.tsx    # Componente que renderiza cada Markdown
 ┃ ┃ ┣ 📂 content/        # Markdown: A "Fonte da Verdade" do miniguia
 ┃ ┃ ┃ ┣ 📜 Documentação Semântica.md
 ┃ ┃ ┃ ┣ 📜 Metodologia-sdd.md
 ┃ ┃ ┃ ┣ 📜 Product Requirement Document.md
 ┃ ┃ ┃ ┣ 📜 README.md     # Notas da documentação de estudo original
 ┃ ┃ ┃ ┣ 📜 Recursos-PRD.md
 ┃ ┃ ┃ ┗ 📜 Spec Driven Development.md
 ┃ ┃ ┗ 📂 lib/
 ┃ ┃   ┗ 📜 markdown.ts   # Utilitário que integra leitura do File System ao Next
 ┃ ┣ 📜 next.config.ts    # Configuração build system
 ┃ ┣ 📜 package.json      # Dependências do Web App
 ┃ ┗ 📜 tailwind.config.* # Configuração e plugins (v4 embutido)
 ┗ 📜 README.md           # Este documento raiz
```

## ⚙️ Variáveis de Ambiente

No momento, a execução desta documentação interativa em Next.js **não exige** nenhuma variável de ambiente (.env) para rodar ou instalar.
Todos os dados e arquivos markdown lidos pelo `src/lib/markdown.ts` operam na camada de server components utilizando o `fs` padrão do Node diretamente dos arquivos locais.

- **Variáveis de Ambiente `(.env)` necessárias:** Nenhuma (N/A).

## 🌍 Deploy

O Web App está configurado de forma estática e modular sob o Next.js 15 para rodar sem provisionamento de banco de dados, o que torna o processo de deploy trivial.

A forma mais simples de hospedar o projeto gratuitamente e para visualização aberta é através da plataforma [Vercel](https://vercel.com/):

1. Empurre o repositório (`git push`) para sua provedora Git favorita (ex: GitHub, GitLab, BitBucket).
2. Acesse a [Vercel](https://vercel.com/new).
3. Selecione "Import Project" apontando para o seu repositório.
4. Framework Preset: **Next.js**.
5. Root Directory: Preencha com a pasta **`web`**.
6. Clique em **Deploy**.

Uma vez publicado, atualizações na pasta `content` no repositório gerarão um novo deploy atualizado.

## Artefatos do Projeto

- [Implementation Plan](artifacts/implementation_plan.md)
- [Walkthrough](artifacts/walkthrough.md)

---

*Citação de Eng. de Prompts e Cicatrizes (vide `web/src/content/README.md`): Todas as lógicas agênticas de elaboração e design em repositórios com Inteligência Artificial abordados nas notas originais inspiraram esta conversão dinâmica da simples documentação em um portal moderno de estudos.*
