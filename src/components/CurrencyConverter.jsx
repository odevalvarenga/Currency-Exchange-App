
import { useState } from 'react';
import styles from './CurrencyConverter.module.css';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState('100');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('BRL');

  function handleSwap() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  function handleConvert(event) {
    event.preventDefault();
    alert('A integração com a API será implementada na próxima etapa.');
  }

  return (
    <section id="converter" className={styles.converter}>
      <div className={styles.heading}>
        <span>CONVERSOR DE MOEDAS</span>
        <h2>Faça sua conversão</h2>
        <p>Consulte cotações de moedas de forma simples.</p>
      </div>

      <form onSubmit={handleConvert}>
        <div className={styles.fields}>
          <label className={styles.field}>
            <span>Moeda de origem</span>
            <select
              value={fromCurrency}
              onChange={(event) => setFromCurrency(event.target.value)}
            >
              <option value="USD">USD — Dólar americano</option>
              <option value="BRL">BRL — Real brasileiro</option>
              <option value="EUR">EUR — Euro</option>
              <option value="GBP">GBP — Libra esterlina</option>
              <option value="JPY">JPY — Iene japonês</option>
            </select>
          </label>

          <button
            type="button"
            className={styles.swapButton}
            onClick={handleSwap}
            aria-label="Inverter moedas"
          >
            ⇄
          </button>

          <label className={styles.field}>
            <span>Moeda de destino</span>
            <select
              value={toCurrency}
              onChange={(event) => setToCurrency(event.target.value)}
            >
              <option value="USD">USD — Dólar americano</option>
              <option value="BRL">BRL — Real brasileiro</option>
              <option value="EUR">EUR — Euro</option>
              <option value="GBP">GBP — Libra esterlina</option>
              <option value="JPY">JPY — Iene japonês</option>
            </select>
          </label>
        </div>

        <label className={styles.amountField}>
          <span>Valor para converter</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Digite um valor"
          />
        </label>

        <button className={styles.convertButton} type="submit">
          Consultar cotação
        </button>
      </form>

      <div className={styles.result}>
        <span>RESULTADO DA CONVERSÃO</span>
        <h3>Aguardando cotação</h3>
        <p>A taxa e o valor convertido serão exibidos após a integração com a API.</p>
      </div>
    </section>
  );
}
