 COMPONENTS — HERMES | Currency Exchange App

1. Visão geral

A aplicação HERMES foi organizada utilizando componentes reutilizáveis, hooks personalizados e serviços de API.

O objetivo é separar a interface visual da lógica de negócio e do acesso aos dados externos, facilitando a manutenção, reutilização e evolução do projeto.

A aplicação utiliza React, JSX, CSS Modules e a API Frankfurter para consultar cotações e dados históricos de moedas.

2. Estrutura de pastas

Estrutura atual do projeto:

```text
src/
├── assets/
├── components/
│   ├── PeriodSelector/
│   │   └── PeriodSelector.jsx
│   │   └── PeriodSelector.module.css
│   ├── HistoryChart/
│   │   └── HistoryChart.jsx
│   │   └── HistoryChart.module.css
│   ├── HistoryTable/
│   │   └── HistoryTable.jsx
│   │   └── HistoryTable.module.css
│   ├── CurrencyConverter.jsx
│   ├── CurrencyConverter.module.css
│   ├── Header.jsx
│   ├── Header.module.css
│   ├── HistorySection.jsx
│   └── HistorySection.module.css
├── hooks/
│   └── useCurrencyHistory.js
├── services/
│   └── frankfurterService.js
├── utils/
├── constants/
├── App.jsx
├── App.css
├── index.css
└── main.jsx

docs/
├── REQUIREMENTS.md
├── COMPONENTS.md
├── FIGMA.md
├── API_TESTS.md
├── FUNCTION_TESTS.md
└── AI_USAGE.md

postman/
└── currency-exchange-collection.json
```

3. Responsabilidade dos componentes

| Componente | Responsabilidade |
|---|---|
| App | Organizar a estrutura principal da aplicação. |
| Header | Apresentar a identidade visual HERMES e a navegação. |
| CurrencyConverter | Controlar os campos e as ações de conversão de moedas. |
| HistorySection | Organizar os controles, o gráfico e a tabela do histórico. |
| PeriodSelector | Permitir selecionar o período de consulta histórica. |
| HistoryChart | Exibir graficamente a evolução das cotações. |
| HistoryTable | Exibir os registros históricos, filtros, ordenação e exportação CSV. |

### Componentes principais

**Header**

Apresenta a identidade visual do HERMES e os links de navegação para as seções da aplicação.

**CurrencyConverter**

Permite selecionar as moedas de origem e destino, informar o valor desejado, inverter as moedas e consultar a cotação.

Também apresenta o resultado da conversão, a taxa utilizada e a data da cotação.

**HistorySection**

Coordena a seleção das moedas e do período histórico. Utiliza o hook personalizado para obter os dados e distribui as informações para o gráfico e a tabela.

**PeriodSelector**

Disponibiliza os períodos de consulta: 7 dias, 15 dias, 30 dias, 3 meses, 6 meses, 1 ano, 5 anos e 10 anos.

**HistoryChart**

Apresenta os dados históricos em um gráfico de linha, utilizando a biblioteca Recharts.

**HistoryTable**

Apresenta as cotações em formato tabular e permite:
- Filtrar por intervalo de datas.
- Definir cotação mínima e máxima.
- Ordenar por data e cotação.
- Limpar os filtros.
- Visualizar a quantidade de registros.
- Exportar os resultados filtrados em CSV.

4. Hooks personalizados

useCurrencyHistory.js

Hook personalizado implementado para centralizar a lógica de consulta do histórico de cotações.

Responsabilidades:
- Consultar os dados históricos na API Frankfurter.
- Controlar o estado de carregamento.
- Armazenar os registros retornados.
- Tratar erros durante as requisições.
- Atualizar os dados quando as moedas ou o período forem alterados.
- Evitar atualizações de estado após a limpeza do efeito.

O hook utiliza:
- `useState` para controlar os dados, carregamento e erros.
- `useEffect` para executar e sincronizar as consultas à API.

O `HistorySection` consome o hook e recebe os estados `history`, `loading` e `error`, mantendo a interface separada da lógica de consulta.

5. Serviços

frankfurterService.js

Centraliza as requisições HTTP realizadas para a API Frankfurter.

Responsabilidades:
- Consultar as moedas disponíveis.
- Consultar taxas de câmbio.
- Consultar uma cotação histórica.
- Consultar séries históricas de cotações.
- Tratar respostas e erros da API.

A conversão é calculada pela aplicação utilizando o valor informado multiplicado pela taxa retornada pela API.

6. Gerenciamento de estados

O gerenciamento de estados é realizado com os recursos nativos do React.

São utilizados:

| Recurso | Aplicação |
|---|---|
| useState | Controlar valores, moedas, períodos, filtros e resultados. |
| useEffect | Executar consultas à API e sincronizar informações. |
| Props | Compartilhar dados e estados entre componentes. |
| Custom Hooks | Separar e reutilizar a lógica de consulta do histórico. |
| useMemo | Otimizar a filtragem e ordenação dos registros da tabela. |

Cada componente mantém os estados necessários para sua responsabilidade, evitando centralização desnecessária.

7. Integração entre as camadas

O fluxo de integração da aplicação funciona da seguinte maneira:

```text
App
├── Header
├── CurrencyConverter
└── HistorySection
    ├── PeriodSelector
    ├── HistoryChart
    └── HistoryTable

HistorySection
      ↓
useCurrencyHistory
      ↓
frankfurterService
      ↓
Frankfurter API

HistoryTable
      ↓
Filtros e ordenação
      ↓
Exportação CSV
```

O fluxo permite separar a apresentação visual, o gerenciamento de estados e o acesso aos dados externos.

8. Padrões de desenvolvimento

Durante o desenvolvimento, foram adotados os seguintes padrões:

- Utilização de componentes funcionais.
- Organização da interface com JSX.
- Separação dos estilos utilizando CSS Modules.
- Utilização de props para comunicação entre componentes.
- Gerenciamento de estados com React Hooks.
- Criação de Custom Hook para consulta do histórico.
- Centralização das requisições HTTP em um serviço.
- Utilização de async/await para operações assíncronas.
- Tratamento de estados de carregamento e erro.
- Organização do código para facilitar manutenção e reutilização.
- Utilização de commits semânticos no Git.

9. Evolução da arquitetura

A arquitetura foi desenvolvida de forma incremental, acompanhando a implementação das funcionalidades.

A estrutura inicialmente planejada foi ajustada durante o desenvolvimento para refletir as necessidades reais da aplicação.

A separação entre componentes, hooks e serviços permite adicionar novas funcionalidades sem concentrar toda a lógica em um único arquivo.