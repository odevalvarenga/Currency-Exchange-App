**FUNCTION TESTS — HERMES | Currency Exchange App**

**1. Objetivo**

Este documento registra os testes funcionais realizados no HERMES — Currency Exchange App, com o objetivo de verificar o funcionamento dos recursos implementados e validar a experiência de utilização da aplicação.

**2. Ambiente de testes**

- **Aplicação:** HERMES — Currency Exchange App.
- **Tecnologia:** React, JavaScript e Vite.
- **API:** Frankfurter.
- **Navegador:** Google Chrome.
- **Ambiente:** Aplicação executada localmente.
- **Interface:** Desktop e dispositivos móveis.

**3. Testes do conversor de moedas**

**Teste 01 — Conversão USD para BRL**

- **Objetivo:** Verificar a conversão de dólar para real.
- **Entrada:** USD → BRL, valor 100.
- **Resultado:** Conversão realizada corretamente.
- **Situação:** Aprovado.

**Teste 02 — Conversão EUR para USD**

- **Objetivo:** Verificar a conversão de euro para dólar.
- **Entrada:** EUR → USD, valor 50.
- **Resultado:** Conversão realizada corretamente.
- **Situação:** Aprovado.

**Teste 03 — Conversão GBP para BRL**

- **Objetivo:** Verificar a conversão de libra para real.
- **Entrada:** GBP → BRL, valor 200.
- **Resultado:** Conversão realizada corretamente.
- **Situação:** Aprovado.

**Teste 04 — Conversão JPY para BRL**

- **Objetivo:** Verificar a conversão de iene para real.
- **Entrada:** JPY → BRL, valor 1000.
- **Resultado:** Conversão realizada corretamente.
- **Situação:** Aprovado.

**Teste 05 — Conversão BRL para EUR**

- **Objetivo:** Verificar a conversão de real para euro.
- **Entrada:** BRL → EUR, valor 500.
- **Resultado:** Conversão realizada corretamente.
- **Situação:** Aprovado.

**Teste 06 — Inversão de moedas**

- **Objetivo:** Verificar a funcionalidade de inversão das moedas de origem e destino.
- **Resultado:** As moedas foram invertidas corretamente.
- **Situação:** Aprovado.

**Teste 07 — Validação de valores inválidos**

- **Objetivo:** Verificar o comportamento do conversor diante de entradas inválidas.
- **Entradas testadas:** Campo vazio, zero, valores negativos e letras.
- **Resultado:** As entradas inválidas foram tratadas corretamente.
- **Situação:** Aprovado.

**4. Testes do histórico de cotações**

**Teste 08 — Consulta dos períodos históricos**

- **Objetivo:** Verificar a consulta de dados históricos em diferentes períodos.
- **Períodos testados:**
  - 7 dias;
  - 15 dias;
  - 30 dias;
  - 3 meses;
  - 6 meses;
  - 1 ano;
  - 5 anos;
  - 10 anos.
- **Resultado:** Os períodos foram consultados e apresentados corretamente.
- **Situação:** Aprovado.

**Teste 09 — Atualização do gráfico**

- **Objetivo:** Verificar a atualização do gráfico conforme a seleção de moedas e períodos.
- **Resultado:** O gráfico apresentou os dados históricos correspondentes às seleções.
- **Situação:** Aprovado.

**5. Testes da tabela e filtros**

**Teste 10 — Exibição dos registros**

- **Objetivo:** Verificar a apresentação dos registros históricos na tabela.
- **Resultado:** Os registros foram apresentados corretamente.
- **Situação:** Aprovado.

**Teste 11 — Filtros por data e cotação**

- **Objetivo:** Verificar a aplicação dos filtros disponíveis na tabela.
- **Resultado:** Os filtros foram utilizados corretamente.
- **Situação:** Aprovado.

**Teste 12 — Combinação e limpeza de filtros**

- **Objetivo:** Verificar a utilização simultânea dos filtros e a funcionalidade de limpeza.
- **Resultado:** Os filtros funcionaram e puderam ser removidos corretamente.
- **Situação:** Aprovado.

**Teste 13 — Ordenação dos registros**

- **Objetivo:** Verificar a ordenação por data e cotação.
- **Resultado:** A ordenação foi realizada corretamente.
- **Situação:** Aprovado.

**6. Testes de exportação CSV**

**Teste 14 — Exportação dos registros**

- **Objetivo:** Verificar a geração e o download do arquivo CSV.
- **Resultado:** O arquivo foi gerado e baixado corretamente.
- **Validação:** Arquivo com quatro colunas, cabeçalhos e 31 registros no teste realizado.
- **Situação:** Aprovado.

**Teste 15 — Exportação considerando os filtros**

- **Objetivo:** Verificar se a exportação considera os registros filtrados.
- **Resultado:** A implementação utiliza os registros resultantes dos filtros para gerar o CSV.
- **Situação:** Implementado.

**Teste 16 — Bloqueio de exportação vazia**

- **Objetivo:** Impedir a exportação quando não existem registros disponíveis.
- **Resultado:** O botão de exportação permanece desabilitado quando não há registros filtrados.
- **Situação:** Implementado.

**7. Testes de interface e responsividade**

**Teste 17 — Interface desktop**

- **Objetivo:** Verificar a apresentação da aplicação em telas de computador.
- **Resultado:** Layout apresentado corretamente.
- **Situação:** Aprovado.

**Teste 18 — Interface mobile**

- **Objetivo:** Verificar a adaptação da interface para dispositivos móveis.
- **Dispositivo simulado:** iPhone SE, utilizando o modo responsivo do Google Chrome.
- **Resultado:** Layout adaptado à largura da tela.
- **Situação:** Aprovado.

**8. Considerações finais**

Os testes funcionais realizados permitiram verificar os principais recursos do HERMES, incluindo conversão de moedas, consulta histórica, visualização gráfica, filtros, ordenação e exportação de dados.

Os resultados demonstram que as funcionalidades principais foram implementadas e apresentaram o comportamento esperado durante os testes realizados.

A validação final da aplicação também deverá considerar os estados de carregamento, erro e ausência de dados, além da execução do build de produção.