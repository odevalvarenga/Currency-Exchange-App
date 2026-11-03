import { useState } from 'react';

import PeriodSelector from './PeriodSelector/PeriodSelector';
import HistoryChart from './HistoryChart/HistoryChart';
import HistoryTable from './HistoryTable/HistoryTable';

import useCurrencyHistory from '../hooks/useCurrencyHistory';

import styles from './HistorySection.module.css';

const currencies = ['USD', 'BRL', 'EUR', 'GBP', 'JPY'];

export default function HistorySection() {
  const [period, setPeriod] = useState('30');
  const [base, setBase] = useState('USD');
  const [quote, setQuote] = useState('BRL');

  const { history, loading, error } = useCurrencyHistory(
    period,
    base,
    quote
  );

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <span>ANÁLISE DO MERCADO</span>
        <h2>Histórico de cotações</h2>
        <p>
          Compare a evolução das taxas cambiais ao longo do tempo.
        </p>
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

      <HistoryTable
        data={history}
        base={base}
        quote={quote}
      />
    </section>
  );
}