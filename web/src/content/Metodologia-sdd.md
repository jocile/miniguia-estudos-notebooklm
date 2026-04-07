# Metodologia Spec-Driven Development (SDD)

O **Spec-Driven Development (SDD)** é uma metodologia voltada fundamentalmente para o desenvolvimento de software assistido por Inteligência Artificial (Desenvolvimento Agêntico). O SDD guia equipes ou desenvolvedores individuais através de fases de fluxo de trabalho altamente estruturadas para entregar software de alta qualidade, garantindo que as especificações ditem estritamente a fase de código e que os agentes de IA possuam um escopo testável e limpo para trabalhar.

## Visão Geral do Fluxo de Trabalho (Workflow)

```text
┌─────────┐   ┌─────────┐   ┌──────────┐   ┌──────────┐   ┌───────────┐   ┌──────────┐
│ Avaliar │ → │Especific│ → │ Pesquisar│ → │ Planejar │ → │Implementar│ → │ Validar  │
│(Assess) │   │(Specify)│   │(Research)│   │  (Plan)  │   │(Implement)│   │(Validate)│
└─────────┘   └─────────┘   └──────────┘   └──────────┘   └───────────┘   └──────────┘
     ↓             ↓              ↓             ↓               ↓              ↓
 Avaliado    Especificado    Pesquisado     Planejado    Implementando     Validado
```

*Nota: O Deploy e as Operações estruturais fazem parte de um "loop externo", lidado por pipelines de CI/CD externos, não sendo o foco matriz do workflow de entrega do SDD.*

---

## Fases do Fluxo de Trabalho

### 1. Avaliar (Assess)

**Objetivo**: Avaliar sistematicamente se aplicar o fluxo SDD completo é apropriado para uma nova demanda/feature.
**Critérios que exigem um SDD Completo**:

- Features complexas (com estimativa de desenvolvimento > 3 dias).
- Necessidade que abrange múltiplos stakeholders.
- Riscos que causam impacto arquitetural na base.
- Preocupações ou exigências sérias de segurança de sistema.
- Módulos que consumam ou forneçam integrações externas (APIs de terceiros).

### 2. Especificar (Specify)

**Objetivo**: Focar estritamente na criação ou evolução dos Requisitos (*PRD - Product Requirement Document*).
**Melhores Práticas**:

- Foque na definição sobre "o que" deve ser feito, e **não** "como" construir as peças técnicas neste momento.
- Inclua clareza sobre as personas usuárias atendidas pela sprint de trabalho.
- Defina o limite de escopo de Entrega de Maior Valor (MVP).
- Identifique de modo proativo e mapeie riscos, além de listar saídas de contenção.

### 3. Pesquisar (Research)

**Objetivo**: Realizar a pesquisa técnica do escopo tecnológico requerido, bem como as provas de conceito sistêmicas (RPI - Research).
**Atividades**:

- Disparo de prototipação ou validação técnica isolada (Spikes).
- Criação e validação de base e benchmarks de desempenho e velocidade para a feature.
- Avaliação extensiva das documentações de terceiros caso haja dependências necessárias.
- Análise de competitividade (se aplicável).

### 4. Planejar (Plan)

**Objetivo**: Gerar o design sistêmico validável da arquitetura e desenhar uma estrutura modular focada em paralelização nas IAs.
**Principais Entregáveis**:

- Modelos e diagramas arquiteturais.
- Contrato estrito de especificações de APIs.
- Desenhar as migrações, tipagens e modelagem dos Bancos de Dados locais.
- Detalhamento de pré-requisitos lógicos de infraestrutura de nuvem, local ou contêiner.

### 5. Implementar (Implement)

**Objetivo**: Executar literalmente o mapa estabelecido e codificar de modo atômico, alimentado-se da "Fonte da Verdade" do passo de planejamento.
**Melhores Práticas para Implementação Limpa**:

- Quebra real de tarefas e limite de código contínuo (Apenas 1 Task por PR - Pull Request).
- Embutir as ferramentas avaliativas diretas sem burlamentos: Testes automatizados passando (TDD / BDD).
- O desenvolvedor faz code-review dos agentes acionados e consolida na branch main.
- O código subido à base é estritamente livre de "Dívidas Técnicas" desnecessárias.

### 6. Validar (Validate)

**Objetivo**: Rodar ciclos paralelos ou automatizados de Controle de Qualidade (QA) e revisão em busca de *loops* vulneráveis (Segurança).
**Checklist de Entrega ("DoD")**:

- [ ] Todos os critérios de aceite apontados na especificação foram atendidos na execução prática?
- [ ] Cobertura de Testes engloba o limite recomendado (Exemplo de >= 80%)?
- [ ] Varreduras de vulnerabilidade aprovadas / *clean*?
- [ ] Pontuações estipuladas nos benchmarks atingidas minimamente de forma limpa?
- [ ] Manuais sistêmicos, registros de decisão (ADRs) documentados e atualizados na base para agentes do futuro?

---

## 🛠 Princípios Inegociáveis do SDD

1. **A Especificação em Primeiro Lugar:**
   É proibitivo escrever a primeira linha de código na aplicação principal sem ter uma arquitetura exigente e clara aprovada.
   Use *Critérios de Aceite* como "algemas geracionais" (contratos inquebráveis de testes e lógica a serem seguidos pela inteligência IA que for assumir o trabalho final de codificação).

2. **Entrega Incremental (Atômica):**
   Os blocos (componentes, funções, serviços) não são concebidos com gigantismo (evite escopo *Spaghetti*).
   Adote as automações CI/CD para testar implantações rapidamente diminuindo atritos.

3. **Qualidade By-Design e Test-Driven:**
   Uma inteligência não constrói a própria validação se ela está executando-a; crie abordagens orientadas por testes de sistema de imediato ou peça para um agente validador testar o agente codificador com abordagens seguras.

4. **Melhorias Constantes:**
   Injetar os *States* atualizados na base; documentar, via *State Memory*, o que falhou; retroalimentar os agentes e ajustar as metodologias de acordo com as diretrizes e regras mapeadas no arquivo de "Constituição" da estrutura técnica.

---

## 🛑 Anti-Padrões Comuns ("O que NÃO FAZER")

Trabalhando lado a lado de modelos robustos (RAG ou Contextos nativos), cometer as falhas abaixo trará um volume pernicioso de falhas (*bugs*, alucinações de arquivos ou caminhos fantasmas):

- **"Ignorar a Fase de Avaliação"**: Deixar de analisar se usar "SDD completo" onera a feature desnecessariamente.
- **"Especificação Frouxa"**: Criar um arquivo Markdown abstrato sem listagem processual, validação e verões e esperar que a IA adivinhe a hierarquia ou tom de negócios do software.
- **"Deploy Big Bang"**: Criar solicitações de PR (*Pull Requests*) envolvendo múltiplas integrações, misturando dependências lógicas variadas na mesma janela sem isolá-las.
- **"Testes para Depois"**: A IA e você testarão "manualmente" hoje ou criarão TDD depois de acabar a demanda na Sprint seguinte.
- **"A famosa Dívida de Doc"**: "Documentar tudo na sexta-feira", quebrando toda a governança do estado da RPI (Research, Plan, Implement), privando o orquestrador/IA ou companheiros remotos de ler o status exato atrelado às tarefas que acabaram de modificar na *main*.
