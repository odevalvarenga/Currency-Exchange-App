import { useEffect, useState } from 'react';
import { getHistoricalRates } from '../services/frankfurterService';

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

export default function useCurrencyHistory(period, base, quote) {
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
          setError(
            'Escolha moedas diferentes para consultar o histórico.'
          );
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

  return { history, loading, error };
}