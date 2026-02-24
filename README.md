# Figma2Code Workshop

Workshop hands-on para converter designs Figma em codigo Angular usando GitHub Copilot com um agente especializado e um design system pre-configurado.

## Pre-requisitos

- [Node.js](https://nodejs.org/) (v18+)
- [VS Code](https://code.visualstudio.com/) com a extensao [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- Conta GitHub com acesso ao Copilot
- (Opcional) Figma dev seat para aceder ao MCP diretamente

## Instrucoes

### 1. Clonar o repositorio

```bash
git clone <repo-url>
cd codefast
```

### 2. Abrir o design no Figma

Abre o design que vamos implementar neste workshop:

https://www.figma.com/design/fCPnZSMZKrypLopv3OuHyH/Sem-t%C3%ADtulo?node-id=0-1&t=dcc1dA7v4AyLWPy0-1

Explora as diferentes seccoes do design (Hero, Trending, Colors, Testimonial, Service, Blog) para entenderes a estrutura visual antes de comecar a gerar codigo.

### 3. Instalar as dependencias

```bash
npm install
```

Depois de instalar, podes confirmar que o projeto compila corretamente:

```bash
npx ng build
```

E arrancar o servidor de desenvolvimento:

```bash
npx ng serve
```

A aplicacao fica disponivel em `http://localhost:4200/`.

### 4. Configurar o Figma MCP no VS Code (requer dev seat)

> **Nota:** Este passo so e necessario se tiveres uma dev seat no Figma. Se nao tiveres, avanca para o Passo 5 e usa a opcao sem MCP.

O Figma MCP permite que o Copilot va buscar informacao do design (estrutura, estilos, imagens) diretamente ao Figma. Para configurar:

1. Abre o VS Code e vai a **Settings** (`Cmd+,` / `Ctrl+,`)
2. Procura por `mcp` nas definicoes
3. Adiciona a configuracao do servidor MCP do Figma no ficheiro `.vscode/mcp.json`:

```json
{
  "servers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/figma-mcp-server@latest"],
      "env": {
        "FIGMA_API_KEY": "<a-tua-figma-api-key>"
      }
    }
  }
}
```

4. Para obter a API key do Figma: vai a [Figma > Account Settings > Personal Access Tokens](https://www.figma.com/developers/api#access-tokens) e cria um novo token
5. Reinicia o VS Code para ativar o servidor MCP

### 5. Gerar a pagina usando o Copilot com o agente

O projeto inclui um agente especializado (`@figma2code`) e duas prompt templates conforme o teu cenario.

#### Opcao A — Com Figma MCP (dev seat)

Se configuraste o MCP no passo anterior, usa a prompt template que vai buscar o design diretamente ao Figma:

1. No Copilot Chat, escreve `@figma2code` para ativar o agente
2. Usa a prompt template `.github/prompts/figma-mcp.prompt.md`
3. Quando pedido, fornece o URL do Figma:
   ```
   https://www.figma.com/design/fCPnZSMZKrypLopv3OuHyH/Sem-t%C3%ADtulo?node-id=0-1&t=dcc1dA7v4AyLWPy0-1
   ```
4. O Copilot vai buscar os dados do design via MCP, mapear para os componentes do design system e gerar o codigo Angular

#### Opcao B — Sem Figma MCP (sem dev seat)

Se nao tens dev seat, o repositorio ja inclui ficheiros com o output do Figma MCP pre-exportado na pasta `figma-context/`:

1. No Copilot Chat, escreve `@figma2code` para ativar o agente
2. Usa a prompt template `.github/prompts/figma-context.prompt.md`
3. O Copilot vai ler os ficheiros de contexto locais e gerar o codigo Angular da mesma forma

### Resultado esperado

Apos a geracao, o Copilot vai:
- Criar/atualizar os ficheiros em `src/app/features/home/` (`.ts`, `.html`, `.scss`)
- Usar os componentes do design system existentes (`app-hero-banner`, `app-overlay-card`, `app-product-grid`, etc.)
- Executar `npx ng build` para confirmar que nao ha erros de compilacao

Podes verificar o resultado visual em `http://localhost:4200/`.

## Estrutura do Projeto

```
figma2code-workshop/
├── .github/
│   ├── agents/
│   │   └── figma2code.agent.md     # Agente Copilot com design system completo
│   └── prompts/
│       ├── figma-mcp.prompt.md     # Template para usar com Figma MCP
│       └── figma-context.prompt.md # Template para usar com ficheiros locais
├── figma-context/                  # Output MCP pre-exportado (fallback)
├── src/
│   ├── app/
│   │   ├── features/home/          # Pagina principal (destino da geracao)
│   │   └── shared/components/      # Design system (16 componentes)
│   └── styles/
│       ├── _variables.scss         # Design tokens
│       └── _mixins.scss            # SCSS helpers
└── public/images/                  # Assets de imagem do Figma
```
