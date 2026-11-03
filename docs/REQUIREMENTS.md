# REQUIREMENTS — HERMES | Currency Exchange App

## 1. Contexto do projeto

O HERMES — Currency Exchange App é uma aplicação web de página única (SPA), desenvolvida em React e JavaScript, destinada à consulta de taxas de câmbio, conversão de valores e análise histórica de moedas.

A aplicação utiliza a API Frankfurter para obter taxas de câmbio e informações históricas, centralizando em uma única interface funcionalidades que normalmente exigiriam consultas em diferentes sites e planilhas.

## 2. Público-alvo

Pessoas que precisam consultar cotações, converter valores entre moedas e acompanhar a variação histórica das taxas de câmbio.

Exemplos:
- Pessoas que acompanham moedas estrangeiras.
- Usuários que precisam realizar conversões para planejamento financeiro.
- Pessoas que desejam consultar e comparar cotações em diferentes períodos.

## 3. Objetivo

Desenvolver uma aplicação React que permita selecionar moedas, informar valores, realizar conversões utilizando taxas obtidas pela API Frankfurter, consultar o histórico de cotações, visualizar os dados em gráficos e tabelas, aplicar filtros e exportar os resultados em CSV.

## 4. Escopo do projeto

### 4.1 Funcionalidades incluídas

- Seleção de moeda de origem e destino.
- Entrada de valor para conversão.
- Exibição do valor convertido.
- Exibição da taxa e da data efetiva da cotação.
- Inversão das moedas selecionadas.
- Consulta de histórico de cotações.
- Seleção de períodos de análise.
- Visualização dos dados em gráfico.
- Visualização dos dados em tabela.
- Filtros por data e cotação.
- Ordenação por data e cotação.
- Exportação dos registros filtrados em CSV.
- Tratamento de carregamento, erros e ausência de dados.

### 4.2 Funcionalidades fora do escopo

- Autenticação de usuários.
- Cadastro de usuários.
- Back-end próprio.
- Banco de dados.
- Pagamentos.
- Compra ou venda real de moedas.

## 5. Requisitos funcionais

| ID | Requisito |
|---|---|
| RF01 | Permitir selecionar a moeda de origem. |
| RF02 | Permitir selecionar a moeda de destino. |
| RF03 | Permitir informar o valor que será convertido. |
| RF04 | Calcular e apresentar o valor convertido utilizando a taxa obtida na API. |
| RF05 | Exibir a taxa utilizada e a data efetiva da cotação. |
| RF06 | Permitir inverter as moedas de origem e destino. |
| RF07 | Consultar dados históricos do par de moedas selecionado. |
| RF08 | Permitir selecionar os períodos de 7 dias, 15 dias, 30 dias, 3 meses, 6 meses, 1 ano, 5 anos e 10 anos. |
| RF09 | Atualizar o histórico e o gráfico quando o par de moedas ou o período for alterado. |
| RF10 | Apresentar os dados históricos em uma tabela. |
| RF11 | Permitir filtrar os registros por intervalo de datas. |
| RF12 | Permitir filtrar os registros por cotação mínima e máxima. |
| RF13 | Permitir combinar filtros e limpar os filtros aplicados. |
| RF14 | Permitir ordenar os registros por data e cotação. |
| RF15 | Exibir a quantidade de registros encontrados. |
| RF16 | Exportar em CSV somente os registros resultantes dos filtros. |
| RF17 | Impedir a exportação quando não houver registros. |
| RF18 | Apresentar estados de carregamento, erro e ausência de dados. |

## 6. Requisitos não funcionais

| ID | Requisito |
|---|---|
| RNF01 | A aplicação deverá ser desenvolvida em React com JavaScript e JSX. |
| RNF02 | O projeto deverá utilizar Vite para desenvolvimento e build. |
| RNF03 | Os estilos deverão ser organizados com CSS Modules. |
| RNF04 | O consumo da API deverá utilizar Fetch e async/await. |
| RNF05 | A aplicação deverá utilizar componentes reutilizáveis e comunicação por props. |
| RNF06 | O gerenciamento dos estados deverá utilizar Hooks do React. |
| RNF07 | A aplicação deverá possuir layout responsivo para desktop e dispositivos móveis. |
| RNF08 | A interface deverá apresentar mensagens compreensíveis em situações de erro. |
| RNF09 | O código deverá manter responsabilidades organizadas entre componentes, hooks, serviços, utilitários e constantes. |
| RNF10 | O projeto deverá possuir documentação de instalação, execução, arquitetura e testes. |
| RNF11 | O código deverá ser versionado no Git e disponibilizado em repositório público no GitHub. |

## 7. Regras de negócio

| ID | Regra |
|---|---|
| RN01 | A conversão deverá utilizar a taxa obtida pela API Frankfurter. |
| RN02 | O cálculo do valor convertido deverá ser realizado pela aplicação a partir da taxa consultada. |
| RN03 | A inversão deverá trocar as moedas de origem e destino. |
| RN04 | A alteração do par de moedas deverá atualizar os dados apresentados. |
| RN05 | A alteração do período deverá atualizar a consulta histórica e o gráfico. |
| RN06 | Os filtros deverão atuar sobre os registros históricos disponíveis. |
| RN07 | A combinação de filtros deverá considerar simultaneamente todos os critérios selecionados. |
| RN08 | A exportação CSV deverá considerar somente os registros filtrados. |
| RN09 | A exportação deverá ser bloqueada quando o resultado filtrado estiver vazio. |
| RN10 | Valores de entrada inválidos não deverão gerar uma conversão válida. |

### 7.1 Decisões de implementação propostas

- O valor informado deverá ser numérico e maior que zero.
- Os campos de cotação mínima e máxima deverão aceitar somente valores numéricos válidos.
- A cotação mínima não poderá ser superior à cotação máxima.
- A data inicial não poderá ser posterior à data final.
- A interface deverá informar quando não houver cotação disponível para a consulta solicitada.

## 8. Critérios de aceite

O projeto será considerado funcional quando atender aos seguintes critérios:

- [ ] O usuário conseguir selecionar duas moedas.
- [ ] O usuário conseguir informar um valor e visualizar sua conversão.
- [ ] A taxa e a data efetiva da cotação forem apresentadas.
- [ ] A inversão das moedas funcionar corretamente.
- [ ] A alteração do par atualizar os dados.
- [ ] Todos os oito períodos históricos estiverem disponíveis.
- [ ] O gráfico apresentar dados históricos reais.
- [ ] A tabela apresentar data, moedas e cotação.
- [ ] Os filtros individuais e combinados funcionarem.
- [ ] A limpeza dos filtros restaurar os registros.
- [ ] A ordenação por data e cotação funcionar.
- [ ] A quantidade de registros encontrados for exibida.
- [ ] O CSV incluir cabeçalhos e somente os registros filtrados.
- [ ] A exportação vazia for impedida.
- [ ] Entradas inválidas forem tratadas.
- [ ] Os estados de carregamento, erro e ausência de dados forem apresentados.
- [ ] A aplicação funcionar em desktop e celular.
- [ ] O projeto puder ser instalado e executado seguindo o README.

## 9. Tecnologias utilizadas

- React
- JavaScript
- JSX
- Vite
- CSS Modules
- Fetch API
- React Hooks
- Custom Hooks
- Frankfurter API
- Recharts
- Postman
- Git e GitHub

## 10. Documentação relacionada

- `README.md` — apresentação, instalação e execução do projeto.
- `docs/COMPONENTS.md` — arquitetura e responsabilidades dos componentes.
- `docs/FIGMA.md` — documentação visual e prototipação.
- `docs/API_TESTS.md` — testes de integração com a API.
- `docs/FUNCTION_TESTS.md` — testes funcionais.
- `docs/AI_USAGE.md` — registro da utilização de inteligência artificial.
- `postman/currency-exchange-collection.json` — coleção de requisições da API.