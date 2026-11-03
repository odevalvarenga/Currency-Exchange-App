# HERMES — Currency Exchange App

Aplicação web para consulta e conversão de moedas, acompanhamento de cotações históricas e análise da variação cambial.

Desenvolvido com React e Vite, utilizando a API Frankfurter para obter dados atualizados de câmbio.

Sobre o projeto

O HERMES é uma Single Page Application (SPA) desenvolvida como projeto acadêmico, com o objetivo de aplicar conceitos de desenvolvimento frontend utilizando React.

A aplicação permite consultar taxas de câmbio entre diferentes moedas, acompanhar seu histórico e exportar os registros para análise.

Funcionalidades

 Conversor de moedas
- Seleção de moeda de origem e destino.
- Consulta de taxas de câmbio.
- Conversão automática do valor informado.
- Inversão das moedas selecionadas.
- Exibição da taxa utilizada e da data da cotação.
- Validação dos valores informados.

#Histórico de cotações
- Consulta de histórico por diferentes períodos:
  - 7 dias;
  - 15 dias;
  - 30 dias;
  - 3 meses;
  - 6 meses;
  - 1 ano;
  - 5 anos;
  - 10 anos.
- Seleção de moedas para análise.
- Gráfico dinâmico da evolução das cotações

Tabela e análise de dados
- Visualização dos registros históricos.
- Filtros por intervalo de datas.
- Filtros por cotação mínima e máxima.
- Ordenação por data e cotação.
- Limpeza dos filtros.
- Exibição da quantidade de registros.
- Exportação dos resultados filtrados em CSV.

Tecnologias utilizadas

- **React** — construção da interface e gerenciamento de estados.
- **JavaScript** — lógica e funcionalidades da aplicação.
- **Vite** — ambiente de desenvolvimento e build.
- **CSS Modules** — organização e isolamento dos estilos.
- **Recharts** — criação de gráficos.
- **Fetch API** — comunicação com serviços externos.
- **Frankfurter API** — consulta de moedas e taxas de câmbio.
- **Git e GitHub** — versionamento e hospedagem do código.
- **Postman** — testes das requisições da API.

API utilizada

O projeto utiliza a API pública Frankfurter, que disponibiliza dados de taxas de câmbio.

Documentação: https://frankfurter.dev/

Base URL:

```text
https://api.frankfurter.dev/v2
```

Principais consultas utilizadas:

| Endpoint | Descrição |
|---|---|
| `/currencies` | Lista moedas disponíveis. |
| `/rate/USD/BRL` | Consulta uma taxa de câmbio. |
| `/rates?from=2026-10-01&to=2026-10-15&base=USD&quotes=BRL` | Consulta uma série histórica. |

A conversão é calculada pela aplicação utilizando o valor informado multiplicado pela taxa retornada pela API.

Como executar o projeto

 Pré-requisitos

- Node.js instalado.
- npm instalado.
- Git instalado (opcional para clonar o repositório).

1. Clonar o repositório

```bash
git clone https://github.com/odevalvarenga/Currency-Exchange-App.git
```

2. Entrar na pasta

```bash
cd Currency-Exchange-App
```

3. Instalar as dependências

```bash
npm install
```

4. Executar o projeto

```bash
npm run dev
```

O Vite disponibilizará um endereço local no terminal, normalmente:

```text
http://localhost:5173
```

Abra o endereço no navegador.

5. Gerar build de produção

```bash
npm run build
```

Estrutura do projeto

```text
currency-exchange-app/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── HistoryChart/
│   │   ├── HistoryTable/
│   │   ├── PeriodSelector/
│   │   ├── CurrencyConverter.jsx
│   │   ├── Header.jsx
│   │   └── HistorySection.jsx
│   ├── hooks/
│   │   └── useCurrencyHistory.js
│   ├── services/
│   │   └── frankfurterService.js
│   ├── utils/
│   ├── constants/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── docs/
├── postman/
├── index.html
├── package.json
└── README.md
```

## Conceitos aplicados

Durante o desenvolvimento foram utilizados conceitos fundamentais do React:

- Componentização e reutilização de componentes.
- JSX e componentes funcionais.
- Props para comunicação entre componentes.
- useState para gerenciamento de estados.
- useEffect para sincronização e consultas assíncronas.
- Custom Hooks para separação da lógica de negócio.
- useMemo para otimização de filtros e ordenação.
- Fetch API com async/await.
- Organização de estilos com CSS Modules.

Testes

As requisições à API foram verificadas utilizando Postman.

Também foram realizados testes funcionais envolvendo:

- Conversão entre diferentes moedas.
- Validação dos valores informados.
- Inversão de moedas.
- Consulta de diferentes períodos históricos.
- Atualização do gráfico e da tabela.
- Filtros e ordenação.
- Exportação de arquivos CSV.
- Visualização em diferentes tamanhos de tela.

Os registros detalhados dos testes estão disponíveis na pasta `docs`.

Documentação

A documentação complementar do projeto está organizada na pasta `docs`, incluindo:

- `REQUIREMENTS.md` — requisitos funcionais e técnicos.
- `COMPONENTS.md` — arquitetura e responsabilidades dos componentes.
- `FIGMA.md` — documentação visual e prototipação.
- `API_TESTS.md` — testes de integração com a API.
- `FUNCTION_TESTS.md` — testes funcionais.
- `AI_USAGE.md` — registro da utilização de inteligência artificial.

A coleção de requisições do Postman está organizada na pasta `postman`.

Repositório

GitHub: https://github.com/odevalvarenga/Currency-Exchange-App

Projeto acadêmico

**HERMES — Currency Exchange App**

Projeto desenvolvido para aplicação prática dos conceitos de desenvolvimento de aplicações web com React.