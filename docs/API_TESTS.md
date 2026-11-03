Documentação dos Testes de API — Currency Exchange App

1. Objetivo

Este documento registra os testes realizados com a API Frankfurter, utilizada no projeto Currency Exchange App para consultar moedas e cotações cambiais.

2. Informações da API

- **Nome:** Frankfurter API
- **Documentação:** https://frankfurter.dev/
- **URL base:** https://api.frankfurter.dev/v2
- **Método de comunicação:** HTTP
- **Formato das respostas:** JSON
- **Autenticação:** Não exige chave de API.

3. Ferramenta utilizada

Os testes foram realizados utilizando o Postman, por meio de uma Collection chamada:

`Currency Exchange App — Frankfurter API`

A variável `base_url` foi configurada com o endereço da API.

4. Casos de teste

Teste 01 — Listar moedas disponíveis

- **Método:** GET
- **Endpoint:** `/currencies`
- **Objetivo:** Consultar as moedas disponibilizadas pela API.
- **Resultado observado:** HTTP 200 OK.
- **Situação:** Aprovado.

Teste 02 — Consultar cotação USD para BRL

- **Método:** GET
- **Endpoint:** `/rate/USD/BRL`
- **Objetivo:** Consultar a cotação do dólar americano em relação ao real brasileiro.
- **Resultado:** Requisição executada no Postman.

Teste 03 — Consultar cotação EUR para USD

- **Método:** GET
- **Endpoint:** `/rate/EUR/USD`
- **Objetivo:** Consultar a cotação do euro em relação ao dólar americano.
- **Resultado:** Requisição executada no Postman.

Teste 04 — Consultar cotação histórica

- **Método:** GET
- **Endpoint:** `/rates?date=2026-10-01&base=USD&quotes=BRL`
- **Objetivo:** Consultar a cotação histórica do dólar para o real em uma data específica.
- **Resultado:** Requisição executada no Postman.

Teste 05 — Consultar série histórica

- **Método:** GET
- **Endpoint:** `/rates?from=2026-10-01&to=2026-10-15&base=USD&quotes=BRL`
- **Objetivo:** Consultar a evolução da cotação USD/BRL durante um intervalo de datas.
- **Resultado observado:** HTTP 200 OK.
- **Situação:** Aprovado.

Teste 06 — Testar moeda inválida

- **Método:** GET
- **Endpoint:** `/rate/ABC/BRL`
- **Objetivo:** Verificar o tratamento de códigos de moeda inválidos.
- **Resultado observado:** HTTP 422 Unprocessable Entity.
- **Mensagem retornada:** `invalid currency: ABC`
- **Situação:** Aprovado — a API identificou e rejeitou a moeda inválida.

5. Considerações finais

Os testes permitiram verificar os principais recursos da API Frankfurter necessários ao desenvolvimento do Currency Exchange App, incluindo consulta de moedas, cotações atuais, dados históricos e tratamento de entradas inválidas.

A API não realiza diretamente a conversão de valores monetários. Por isso, a aplicação deverá obter a taxa cambial e calcular o resultado por meio da multiplicação do valor informado pela cotação retornada.

6. Arquivo da Collection

A Collection utilizada nos testes está disponível no diretório:

`postman/currency-exchange-collection.json`

Esse arquivo permite importar as requisições no Postman e reproduzir os testes.