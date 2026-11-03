import { useState, useEffect } from 'react';
import styles from './CurrencyConverter.module.css';
import {
  getRate,
  getCurrencies,
} from '../services/frankfurterService';

// Lista de segurança caso a API esteja indisponível
const fallbackCurrencies = [
  { iso_code: 'USD', name: 'Dólar americano' },
  { iso_code: 'BRL', name: 'Real brasileiro' },
  { iso_code: 'EUR', name: 'Euro' },
  { iso_code: 'GBP', name: 'Libra esterlina' },
  { iso_code: 'JPY', name: 'Iene japonês' },
];

export default function CurrencyConverter() {
  const [amount, setAmount] = useState('100');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('BRL');

  const [currencies, setCurrencies] = useState(fallbackCurrencies);
  const [loadingCurrencies, setLoadingCurrencies] = useState(true);
  const [currenciesError, setCurrenciesError] = useState('');

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Carregar moedas disponíveis na API
  useEffect(() => {
    async function loadCurrencies() {
      try {
        setLoadingCurrencies(true);
        setCurrenciesError('');

        const data = await getCurrencies();

        const sortedCurrencies = [...data].sort((a, b) =>
          a.iso_code.localeCompare(b.iso_code)
        );

        setCurrencies(sortedCurrencies);
      } catch (err) {
        setCurrenciesError(
          'Não foi possível atualizar a lista de moedas. Exibindo lista de segurança.'
        );
      } finally {
        setLoadingCurrencies(false);
      }
    }

    loadCurrencies();
  }, []);

  function handleSwap() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult(null);
    setError('');
  }

  async function handleConvert(event) {
    event.preventDefault();

    const numericAmount = Number(amount);

    if (!amount || !Number.isFinite(numericAmount) || numericAmount <= 0) {
      setError('Informe um valor maior que zero.');
      setResult(null);
      return;
    }

    try {
      setLoading(true);
      setError('');
      setResult(null);

      const quotation = await getRate(fromCurrency, toCurrency);

      const convertedAmount = numericAmount * quotation.rate;

      setResult({
        amount: numericAmount,
        convertedAmount,
        rate: quotation.rate,
        date: quotation.date,
        fromCurrency,
        toCurrency,
      });
    } catch (err) {
      setError(err.message || 'Não foi possível consultar a cotação.');
    } finally {
      setLoading(false);
    }
  }

  function formatCurrency(value, currency) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency,
    }).format(value);
  }

  function formatDate(date) {
    if (!date) return '';

    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }

  return (
    <section id="converter" className={styles.converter}>
      <div className={styles.heading}>
        <span>CONVERSOR DE MOEDAS</span>
        <h2>Faça sua conversão</h2>
        <p>Consulte cotações de moedas de forma simples.</p>
      </div>

      {loadingCurrencies && (
        <p aria-live="polite">Carregando moedas disponíveis...</p>
      )}

      {currenciesError && (
        <p role="status">{currenciesError}</p>
      )}

      <form onSubmit={handleConvert}>
        <div className={styles.fields}>
          <label className={styles.field}>
            <span>Moeda de origem</span>
            <select
              value={fromCurrency}
              disabled={loadingCurrencies}
              onChange={(event) => {
                setFromCurrency(event.target.value);
                setResult(null);
                setError('');
              }}
            >
              {currencies.map((currency) => (
                <option
                  key={currency.iso_code}
                  value={currency.iso_code}
                >
                  {currency.iso_code} — {currency.name}
                </option>
              ))}
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
              disabled={loadingCurrencies}
              onChange={(event) => {
                setToCurrency(event.target.value);
                setResult(null);
                setError('');
              }}
            >
              {currencies.map((currency) => (
                <option
                  key={currency.iso_code}
                  value={currency.iso_code}
                >
                  {currency.iso_code} — {currency.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className={styles.amountField}>
          <span>Valor para converter</span>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(event) => {
              setAmount(event.target.value);
              setResult(null);
              setError('');
            }}
            placeholder="Digite um valor"
          />
        </label>

        <button
          className={styles.convertButton}
          type="submit"
          disabled={loading || loadingCurrencies}
        >
          {loading ? 'Consultando cotação...' : 'Consultar cotação'}
        </button>
      </form>

      {error && (
        <div className={styles.result} role="alert">
          <span>ERRO NA CONVERSÃO</span>
          <h3>{error}</h3>
        </div>
      )}

      {loading && (
        <div className={styles.result} aria-live="polite">
          <h3>Buscando cotação atual...</h3>
          <p>Aguarde enquanto consultamos a Frankfurter API.</p>
        </div>
      )}

      {result && (
        <div className={styles.result} aria-live="polite">
          <span>RESULTADO DA CONVERSÃO</span>

          <h3>
            {formatCurrency(result.convertedAmount, result.toCurrency)}
          </h3>

          <p>
            {formatCurrency(result.amount, result.fromCurrency)}
            {' = '}
            {formatCurrency(result.convertedAmount, result.toCurrency)}
          </p>

          <p>
            Taxa: 1 {result.fromCurrency} ={' '}
            {result.rate.toLocaleString('pt-BR', {
              maximumFractionDigits: 6,
            })}{' '}
            {result.toCurrency}
          </p>

          <p>Data da cotação: {formatDate(result.date)}</p>
        </div>
      )}
    </section>
  );
}
