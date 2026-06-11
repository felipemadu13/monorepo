
#### **Estudo de Caso:** 
Uso de múltiplas bibliotecas de componentes (UI) para versionamento e empacotamento de componentes em monorepo.

#### **Objetivo:**
Demonstrar a habilidade de gerenciar o ciclo de vida e versionamento de pacotes compartilhados dentro de um monorepo, publicando diferentes versões (`1.0.0` e `2.0.0`) da biblioteca de componentes `@monorepo/ui`.

---
## 1. Publicação de Pacotes no Registro Local (Verdaccio)

O Verdaccio é um registry privado leve para pacotes npm que permite armazenar e distribuir dependências localmente. Ele funciona como um proxy do npm oficial, oferecendo mais controle, segurança e velocidade no gerenciamento de pacotes.

---
## 2. O Problema de Resolução do Vite (Deduplicação de Módulos)

#### O Problema:
Mesmo com `@monorepo/suporte` apontando explicitamente para `@monorepo/ui: 1.0.0` em seu `package.json`, a tabela exibida no navegador no painel de suporte continha o filtro de busca e a etiqueta da versão `2.0.0`.
#### A Causa:
O Vite é executado na raiz do aplicativo host (`apps/hub`). Quando encontra múltiplos pacotes importando a mesma dependência (neste caso, `@monorepo/ui`), o bundler por padrão realiza a **deduplicação (deduplication)** de pacotes para otimizar o tamanho final do código. Como o `hub` também dependia diretamente de `@monorepo/ui: workspace:*` (v2.0.0), o Vite resolveu todos os imports do projeto para a v2.0.0 local.


  ---
## 3. Empacotamento Independente dos Módulos

Decidimos evoluir para a arquitetura definitiva de produção: **fazer com que cada módulo compile e empacote sua própria versão da UI**.
### Como Funciona:

1. Adicionamos arquivos `vite.config.ts` em `packages/rh` e `packages/suporte` definindo-os como bibliotecas (`build.lib`).

2. Configuramos os bundlers para **não colocar o `@monorepo/ui` como dependência externa**.

3. Ao rodar `pnpm build`, o código compilado final de cada módulo (`dist/index.js`) incorpora fisicamente a sua respectiva versão do `@monorepo/ui` (com e sem filtro de busca).

4. O campo `"main"` no `package.json` de cada módulo passou a apontar para `./dist/index.js` (o código compilado auto-suficiente), isolando totalmente as dependências em runtime.
  ---

## 4. Prós e Contras
### Benefícios (Prós) 

**Autonomia de Equipe**: Equipes podem atualizar a versão da UI e fazer deploy de seus módulos de forma totalmente independente. 

**Risco Zero de Regressão**: Alterações na UI em um módulo nunca quebrarão as telas de outro módulo.

**Migrações Graduais**: Permite atualizar grandes sistemas de forma fragmentada e segura, tela por tela. 

### Malefícios (Contras)

 **Aumento do Bundle**: Código duplicado de diferentes versões da UI carregado no navegador do usuário final. 

**Inconsistência Visual**: Diferentes versões dos componentes no navegador quebram a coesão de design. 

**Risco de Conflito de Estilos**: Folhas de CSS global de diferentes versões da UI podem colidir na tela.