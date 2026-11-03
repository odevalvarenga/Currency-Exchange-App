COMPONENTS — Currency Exchange App

1. Visão geral

A aplicação será organizada em componentes reutilizáveis, hooks personalizados, serviços de API, utilitários e constantes.

O objetivo é separar a interface visual da lógica de negócio e do acesso aos dados externos.

2. Estrutura de pastas proposta

```text
src/
├── assets/
├── components/
│   ├── Header/
│   ├── CurrencyConverter/
│   ├── CurrencySelect/
│   ├── ConversionResult/
│   ├── PeriodSelector/
│   ├── HistoryChart/
│   ├── HistoryTable/
│   ├── HistoryFilters/
│   ├── Loading/
│   └── ErrorMessage/
├── hooks/
│   ├── useCurrencies.js
│   ├── useExchangeRate.js
│   └── useHistoricalRates.js
├── services/
│   └── frankfurterService.js
├── utils/
│   ├── currencyFormatter.js
│   ├── dateFormatter.js
│   └── exportCSV.js
├── constants/
│   └── periods.js
├── App.jsx
├── App.module.css
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
| App | Organizar a estrutura principal e compartilhar estados necessários. |
| Header | Apresentar a identidade visual e navegação. |
| CurrencyConverter | Organizar os campos e ações de conversão. |
| CurrencySelect | Permitir selecionar as moedas. |
| ConversionResult | Apresentar o valor convertido, taxa e data. |
| PeriodSelector | Permitir selecionar o período histórico. |
| HistoryChart | Exibir a evolução histórica das cotações. |
| HistoryTable | Exibir os registros históricos. |
| HistoryFilters | Filtrar e ordenar os registros. |
| Loading | Apresentar o estado de carregamento. |
| ErrorMessage | Apresentar mensagens de erro. |

4. Hooks personalizados

| Hook | Responsabilidade |
|---|---|
| useCurrencies | Consultar e disponibilizar as moedas. |
| useExchangeRate | Consultar e controlar a taxa de conversão. |
| useHistoricalRates | Consultar e controlar os dados históricos. |

Os hooks deverão utilizar useState e useEffect quando necessário, mantendo a lógica de consulta separada da interface.

5. Serviços

# frankfurterService.js

Centralizará as requisições HTTP para a API Frankfurter.

Responsabilidades:
- Consultar moedas disponíveis.
- Consultar taxas de câmbio.
- Consultar histórico de cotações.
- Tratar respostas e erros da API.

6. Utilitários

| Arquivo | Responsabilidade |
|---|---|
| currencyFormatter.js | Formatar valores monetários. |
| dateFormatter.js | Formatar datas. |
| exportCSV.js | Gerar e baixar arquivos CSV. |

7. Gerenciamento de estados

O estado compartilhado deverá permanecer no componente mais próximo que tenha necessidade de controlar ou distribuir aquela informação.

O App será responsável por coordenar os estados compartilhados entre conversor, histórico e tabela quando necessário.

Serão utilizados:
- useState para valores, moedas, filtros e períodos.
- useEffect para sincronização e consultas à API.
- Props para comunicação entre componentes.
- Custom Hooks para reutilização da lógica.

8. Integração entre as camadas

```text
App
├── Header
├── CurrencyConverter
│   ├── CurrencySelect
│   └── ConversionResult
├── PeriodSelector
├── HistoryChart
└── HistoryTable
    └── HistoryFilters

Hooks
   ↓
Services
   ↓
Frankfurter API

Utils
   ├── Formatação
   ├── Datas
   └── Exportação CSV
```

9. Padrões de desenvolvimento

- Utilizar componentes funcionais.
- Utilizar JSX.
- Organizar estilos com CSS Modules.
- Evitar duplicação de lógica.
- Manter nomes claros e responsabilidades específicas.
- Tratar loading, erro e ausência de dados.
- Utilizar commits pequenos e semânticos.

10. Observação

A arquitetura poderá evoluir conforme as funcionalidades forem implementadas, mantendo responsabilidades claras e respeitando os requisitos do projeto.
