# Automação de Testes de API – Cypress (REST)

Projeto de **automação de testes funcionais de API REST**, desenvolvido com **Cypress**, com o objetivo de validar regras de negócio relacionadas a **contas, transações financeiras e cálculo de saldo**.

Os testes são executados em nível funcional, utilizando requisições HTTP diretas (`GET`, `POST`, `PUT`, `DELETE`), garantindo a integridade dos dados e o correto comportamento da API.

---

## 🎯 Objetivo do Projeto

- Demonstrar habilidades em **testes automatizados de API**
- Validar fluxos críticos de negócio via API REST
- Garantir regras como:
  - Criação e atualização de contas
  - Prevenção de duplicidade
  - Criação e exclusão de transações
  - Cálculo correto de saldo
- Aplicar boas práticas de automação com Cypress

---

## 🧪 Cenários de Teste Automatizados

Os testes cobrem os seguintes cenários funcionais:

- ✅ Criar conta via API
- ✅ Atualizar dados de uma conta existente
- ❌ Impedir criação de conta com nome duplicado
- ✅ Criar transação financeira
- ✅ Validar cálculo de saldo
- ✅ Atualizar transação e recalcular saldo
- ✅ Remover transação

---

## 🛠️ Tecnologias e Ferramentas

- Cypress
- JavaScript
- API REST
- Day.js (manipulação de datas)
- Node.js
- Mocha / Chai (assertions)

---

## 🔐 Autenticação e Setup

- Autenticação realizada via **token JWT**
- O token é obtido automaticamente antes da execução dos testes
- Ambiente é resetado antes de cada cenário para garantir independência dos testes

```javascript
before(() => {
  cy.getToken('usuario', 'senha')
})

beforeEach(() => {
  cy.resetRest()
})
▶️ Como Executar os Testes
Clonar este repositório

Instalar as dependências:

bash
Copiar código
npm install
Configurar a URL base da API no cypress.json ou cypress.config.js

Executar os testes:

bash
Copiar código
npx cypress open
ou

bash
Copiar código
npx cypress run
📐 Estratégia de Testes
Testes em nível funcional

Uso de requisições diretas via cy.request

Validação de:

Status HTTP

Estrutura do response

Regras de negócio

Uso de alias para reaproveitamento de respostas

Manipulação de datas com Day.js

Execução independente e controlada dos cenários

⚠️ Observações Importantes
Projeto desenvolvido para fins educacionais e portfólio

Os dados utilizadosreas usado são de teste

O código pode ser evoluído com:

Contratos de API (Schema Validation)

Relatórios customizados

Execução em CI/CD

Parametrização de ambientes

👤 Autor
Wagner Fontes
QA | Automação de Testes de API, Web e Mobile
