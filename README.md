# 📚 Miniguia de Estudos: Desenvolvimento Agêntico e Orquestração de IA

![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![AI](https://img.shields.io/badge/Artificial%20Intelligence-blue?style=for-the-badge)

## 📖 Descrição

O assunto de interesse deste caderno temático foca nas novas metodologias de engenharia de software na era da Inteligência Artificial Generativa e abordagens agênticas. O estudo concentra-se em como estruturar o contexto fornecido a agentes de IA para desenvolver sistemas complexos de forma escalável e sem retrabalho, abordando **SDD (Spec-Driven Development)**, **PRD (Product Requirement Document)** e **Documentação Semântica**.

**Objetivos de Estudo:**

- Compreender como o PRD evoluiu na era da IA e sua utilidade como um artefato restritivo.
- Entender a Documentação Semântica (`DESIGN.md`) como "Fonte da Verdade" estética.
- Explorar o framework *Spec-Driven Development (SDD)* e seu fluxo contínuo de otimização de contexto (RPI).
- Aprender técnicas de Engenharia de Contexto para mitigar alucinações.

## 🚀 Instalação e Uso

Como este projeto é um repositório voltado para conhecimento textual, não há necessidade de instalações complexas. Mantenha os arquivos organizados e clone-os para o seu ambiente local de estudos.

**Comando de Instalação (Clone):**

```bash
git clone https://github.com/SEU_USUARIO/miniguia-estudos-notebooklm.git
cd miniguia-estudos-notebooklm
```

**Exemplo de Uso Recomendado:**
Você pode fornecer os arquivos `.md` contidos aqui a LLMs (como NotebookLM, ChatGPT ou via agentes na IDE, como Gemini / VSCode) e utilizar os prompts no final deste documento para orquestrar fluxos e geração de código baseados nas abordagens de SDD detalhadas.

## 📂 Estrutura de Pastas e Arquivos

```text
📦 miniguia-estudos-notebooklm
 ┣ 📜 Documentação Semântica.md
 ┣ 📜 Glossario.md
 ┣ 📜 Metodologia-sdd.md
 ┣ 📜 Product Requirement Document.md
 ┣ 📜 README.md
 ┣ 📜 Recursos-PRD.md
 ┗ 📜 Spec Driven Development.md
```

## 🔗 Links e Conteúdo do Repositório

As seguintes fontes em formato Markdown formam a base de conhecimento deste repositório. Clique nelas para acessar os conteúdos integrais:

1. 📄 **[Product Requirement Document](./Product%20Requirement%20Document.md)**  
   *Descrição:* Explora o PRD como um "cérebro" dinâmico e focado no "o que" desenvolver contra aumento de escopo para as IAs.
2. 📄 **[Documentação Semântica](./Documenta%C3%A7%C3%A3o%20Sem%C3%A2ntica.md)**  
   *Descrição:* Aborda como traduzir intenções visuais para que a IA atue esteticamente compreendendo referências.
3. 📄 **[Spec Driven Development](./Spec%20Driven%20Development.md)**  
   *Descrição:* Detalha o framework SDD para escalar softwares construídos com inteligência paralela.
4. 📄 **[Glossário](./Glossario.md)**  
   *Descrição:* Definições dos principais conceitos, como RPI, MCP, Subagentes e "Constituição" sistêmica.
5. 📄 **[Recursos - PRD](./Recursos-PRD.md)**  
   *Descrição:* Resursos e materiais visando dar apoio na formulação dos PRDs.
6. 📄 **[Metodologia SDD](./Metodologia-sdd.md)**  
   *Descrição:* Explicação detalhada sobre as fases, princípios e anti-padrões da metodologia Spec-Driven Development.

## ⚙️ Variáveis de Ambiente e Deploy

- **Variáveis de Ambiente (.env):** Nenhuma (N/A) – Este é um conjunto puramente estático de documentação Markdown.
- **Deploy:** Pode ser publicado com sistemas geradores de sites estáticos (como Docusaurus, MkDocs, GitHub Pages) que leiam fontes em Markdown, caso exista o interesse em disponibilizá-lo em portal web, ou mantê-lo integrado perfeitamente dentro da base do Github.

---

## 🛠️ Engenharia de Prompts e "Cicatrizes"

A iteração das pesquisas com esses documentos no NotebookLM resultou nos seguintes ajustes e lições de *troubleshooting* (cicatrizes).

### Pergunta Estratégica 1: O Papel Tradicional vs. O Papel Agêntico do PRD

- **Prompt Original Testado:** `Resuma o que é um PRD e como ele é feito de acordo com as fontes.`
- **Dificuldades:** O modelo inicialmente perdeu o contexto focado em IA, fornecendo definições comuns a equipes apenas de humanos.
- **Ajuste de Prompt:** `Com base EXCLUSIVAMENTE nos documentos anexados, pontue como a definição de Product Requirement Document (PRD) foi adaptada para o uso com Agentes de Inteligência Artificial. Por que a economia de tokens é citada na documentação?`
- **Resultados:** A restrição explícita ao texto-base ("EXCLUSIVAMENTE") ancorou a IA corretamente, passando a reconhecer o PRD como validador de código espaguete.

### Pergunta Estratégica 2: Integração de SDD Inserindo Identidade Visual

- **Prompt Original Testado:** `Como a metodologia do arquivo SDD funciona em sintonia com a construção de design front-end explicada no arquivo de Documentação Semântica?`
- **Dificuldades:** A IA retornou conceitos em formato de lista isolado sem cruzar a cronologia do framework SDD com a construção visual.
- **Ajuste de Prompt:** `Através do fluxo RPI mencionado na fonte de Spec Driven Development, em qual fase e de qual maneira a Documentação Semântica (DESIGN.md) atua como um limite (guardrail) estético para a codificação paralela de agentes?`

---

## 💡 Conjunto de Prompts Reutilizáveis

Os seguintes prompts foram polidos e podem ser aplicados em outras interações e sessões técnicas envolvendo IA e geração de sistemas de software:

**1. Para Quebra Replicável em Tasks (SDD):**  
> *“Aplique os princípios do Spec Driven Development baseando-se na regra de paralelização do texto fonte. Tenho a seguinte história de usuário em projeto: [INSERIR NECESSIDADE]. Decomponha esse pedido estruturando uma 'Task' clara, identificando arquivos de destino cruciais, pré-requisitos lógicos e a Definition of Done.”*

**2. Para Revisite e Criação de `DESIGN.md`:**  
> *“Dado a seguinte marcação HTML / classes Tailwind [INSERIR CLASSES], converta todos os valores unitários codificados em descrições morfológicas qualitativas no formato de Documentação Semântica (Atmosfera, Paleta Funcional, Elevações) para que meu agente de inteligência compreenda o referencial estético subjacente.”*

**3. Para Validação Prática de PRDs contra IAs:**  
> *“Aja como o orquestrador técnico de um projeto baseando-se na abordagem de checklist testável e artefatos, extraídos das regras de PRDs dinâmicos. Avalie a seguinte feature recentemente programada e me escreva as três perguntas objetivas para checar se algum item subjacente da especificação foi alucinado na execução.”*
