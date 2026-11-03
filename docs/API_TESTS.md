**API TESTS — HERMES | Currency Exchange App**

**1. Objetivo**

Este documento registra os testes realizados com a API Frankfurter, utilizada no projeto HERMES — Currency Exchange App para consultar moedas e cotações cambiais.

Os testes foram realizados com o objetivo de verificar os principais endpoints utilizados pela aplicação e observar o comportamento da API em diferentes situações.

**2. Informações da API**

- **Nome:** Frankfurter API
- **Documentação:** https://frankfurter.dev/
- **URL base:** https://api.frankfurter.dev/v2
- **Método de comunicação:** HTTP
- **Formato das respostas:** JSON
- **Autenticação:** Não exige chave de API.

**3. Ferramenta utilizada**

Os testes foram realizados utilizando o Postman, por meio de uma Collection chamada:

`Currency Exchange App — Frankfurter API`

A variável `base_url` foi configurada com o endereço:

`https://api.frankfurter.dev/v2`

**4. Casos de teste**

**Teste 01 — Listar moedas disponíveis**

- **Método:** GET
- **Endpoint:** `/currencies`
- **Objetivo:** Consultar as moedas disponibilizadas pela API.
- **Resultado observado:** HTTP 200 OK.
- **Situação:** Aprovado.

**Teste 02 — Consultar cotação USD para BRL**

- **Método:** GET
- **Endpoint:** `/rate/USD/BRL`
- **Objetivo:** Consultar a cotação do dólar americano em relação ao real brasileiro.
- **Resultado:** Requisição executada no Postman.
- **Situação:** Executado.

**Teste 03 — Consultar cotação EUR para USD**

- **Método:** GET
- **Endpoint:** `/rate/EUR/USD`
- **Objetivo:** Consultar a cotação do euro em relação ao dólar americano.
- **Resultado:** Requisição executada no Postman.
- **Situação:** Executado.

**Teste 04 — Consultar cotação histórica**

- **Método:** GET
- **Endpoint:** `/rates?date=2026-10-01&base=USD&quotes=BRL`
- **Objetivo:** Consultar a cotação histórica do dólar para o real em uma data específica.
- **Resultado:** Requisição executada no Postman.
- **Situação:** Executado.

**Teste 05 — Consultar série histórica**

- **Método:** GET
- **Endpoint:** `/rates?from=2026-10-01&to=2026-10-15&base=USD&quotes=BRL`
- **Objetivo:** Consultar a evolução da cotação USD/BRL durante um intervalo de datas.
- **Resultado observado:** HTTP 200 OK.
- **Situação:** Aprovado.

**Teste 06 — Testar moeda inválida**

- **Método:** GET
- **Endpoint:** `/rate/ABC/BRL`
- **Objetivo:** Verificar o tratamento de códigos de moeda inválidos.
- **Resultado observado:** HTTP 422 Unprocessable Entity.
- **Mensagem retornada:** `invalid currency: ABC`.
- **Situação:** Aprovado. A API identificou e rejeitou a moeda inválida.

**5. Resumo dos resultados**

| Teste | Descrição | Resultado |
|---|---|---|
| 01 | Listar moedas | Aprovado |
| 02 | Cotação USD/BRL | Executado |
| 03 | Cotação EUR/USD | Executado |
| 04 | Cotação histórica | Executado |
| 05 | Série histórica | Aprovado |
| 06 | Moeda inválida | Aprovado |

Os testes 02, 03 e 04 foram executados, mas seus códigos HTTP individuais não foram registrados nesta documentação.

**6. Considerações finais**

Os testes permitiram verificar os principais recursos da API Frankfurter necessários ao desenvolvimento do HERMES, incluindo consulta de moedas, cotações atuais, dados históricos e tratamento de entradas inválidas.

A API não realiza diretamente a conversão de valores monetários. Por isso, a aplicação obtém a taxa cambial e calcula o resultado por meio da multiplicação do valor informado pela cotação retornada.

Essa abordagem permite que a aplicação utilize os dados disponibilizados pela API para realizar os cálculos e apresentar os resultados ao usuário.

**7. Arquivo da Collection**

A Collection utilizada nos testes está prevista no diretório:

`postman/currency-exchange-collection.json`

O arquivo permite importar as requisições no Postman e reproduzir os testes. Ao importar a Collection, pode ser necessário preencher a variável `base_url` com:

`https://api.frankfurter.dev/v2`