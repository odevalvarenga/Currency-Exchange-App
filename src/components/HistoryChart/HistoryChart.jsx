
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

import styles from './HistoryChart.module.css';

export default function HistoryChart({
  data = [],
  base = 'USD',
  quote = 'BRL',
  loading = false,
  error = '',
}) {
  const chartData = data.map((item) => ({
    date: item.date,
    rate: item.rate,
  }));

  function formatDate(date) {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }

  function formatRate(value) {
    return Number(value).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    });
  }

  return (
    <section className={styles.container} id="history">
      <div className={styles.heading}>
        <div>
          <span>ANÁLISE CAMBIAL</span>
          <h2>Histórico de cotações</h2>
          <p>
            Evolução da cotação de {base} para {quote}.
          </p>
        </div>
      </div>

      {loading && (
        <div className={styles.message}>
          Carregando histórico de cotações...
        </div>
      )}

      {!loading && error && (
        <div className={styles.message} role="alert">
          {error}
        </div>
      )}

      {!loading && !error && chartData.length === 0 && (
        <div className={styles.message}>
          Nenhum dado histórico disponível para o período selecionado.
        </div>
      )}

      {!loading && !error && chartData.length > 0 && (
        <div className={styles.chart}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e9e3" />

              <XAxis
                dataKey="date"
                tickFormatter={formatDate}
                minTickGap={25}
                tick={{ fill: '#64736a', fontSize: 11 }}
              />

              <YAxis
                domain={['auto', 'auto']}
                tickFormatter={formatRate}
                width={75}
                tick={{ fill: '#64736a', fontSize: 11 }}
              />

              <Tooltip
                labelFormatter={(label) => `Data: ${formatDate(label)}`}
                formatter={(value) => [
                  `${formatRate(value)} ${quote}`,
                  `1 ${base}`,
                ]}
              />

              <Line
                type="monotone"
                dataKey="rate"
                name="Cotação"
                stroke="#006437"
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 5, fill: '#008b50' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {!loading && !error && chartData.length > 0 && (
        <p className={styles.footer}>
          Fonte: Frankfurter API · {chartData.length} registros históricos.
        </p>
      )}
    </section>
  );
}
