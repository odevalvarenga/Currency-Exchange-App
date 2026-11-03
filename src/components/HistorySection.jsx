
import { useEffect, useState } from 'react';

import PeriodSelector from './PeriodSelector/PeriodSelector';
import HistoryChart from './HistoryChart/HistoryChart';

import { getHistoricalRates } from '../services/frankfurterService';

import styles from './HistorySection.module.css';

const periodOptions = {
  '7': { amount: 7, unit: 'days' },
  '15': { amount: 15, unit: 'days' },
  '30': { amount: 30, unit: 'days' },
  '3m': { amount: 3, unit: 'months' },
  '6m': { amount: 6, unit: 'months' },
  '1y': { amount: 1, unit: 'years' },
  '5y': { amount: 5, unit: 'years' },
  '10y': { amount: 10, unit: 'years' },
};

const currencies = ['USD', 'BRL', 'EUR', 'GBP', 'JPY'];

function formatDate(date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, '0'),
    String(date.getDate()).padStart(2, '0'),
  ].join('-');
}

function getDateRange(period) {
  const today = new Date();
  const startDate = new Date(today);
  const option = periodOptions[period];

  if (option.unit === 'days') {
    startDate.setDate(startDate.getDate() - option.amount);
  } else if (option.unit === 'months') {
    startDate.setMonth(startDate.getMonth() - option.amount);
  } else {
    startDate.setFullYear(startDate.getFullYear() - option.amount);
  }

  return {
    from: formatDate(startDate),
    to: formatDate(today),
  };
}

export default function HistorySection() {
  const [period, setPeriod] = useState('30');
  const [base, setBase] = useState('USD');
  const [quote, setQuote] = useState('BRL');

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    async function loadHistory() {
      try {
        setLoading(true);
        setError('');
        setHistory([]);

        if (base === quote) {
          setHistory([]);
          setError('Escolha moedas diferentes para consultar o histórico.');
          return;
        }

        const { from, to } = getDateRange(period);

        const data = await getHistoricalRates(
          base,
          quote,
          from,
          to
        );

        if (active) {
          setHistory(data);
        }
      } catch (err) {
        if (active) {
          setError(
            err.message || 'Não foi possível carregar o histórico.'
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadHistory();

    return () => {
      active = false;
    };
  }, [period, base, quote]);

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <span>ANÁLISE DO MERCADO</span>
        <h2>Histórico de cotações</h2>
        <p>Compare a evolução das taxas cambiais ao longo do tempo.</p>
      </div>

      <div className={styles.controls}>
        <label>
          <span>Moeda de origem</span>
          <select
            value={base}
            onChange={(event) => setBase(event.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Moeda de destino</span>
          <select
            value={quote}
            onChange={(event) => setQuote(event.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.period}>
        <PeriodSelector
          value={period}
          onChange={setPeriod}
        />
      </div>

      <HistoryChart
        data={history}
        base={base}
        quote={quote}
        loading={loading}
        error={error}
      />
    </section>
  );
}
