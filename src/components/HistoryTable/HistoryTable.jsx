
import { useMemo, useState } from 'react';
import styles from './HistoryTable.module.css';

export default function HistoryTable({ data = [], base = 'USD', quote = 'BRL' }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [minRate, setMinRate] = useState('');
  const [maxRate, setMaxRate] = useState('');
  const [sortBy, setSortBy] = useState('date-desc');

  const filteredData = useMemo(() => {
    let result = data.filter((item) => {
      const matchesStart = !startDate || item.date >= startDate;
      const matchesEnd = !endDate || item.date <= endDate;

      const matchesMin =
        minRate === '' || item.rate >= Number(minRate);

      const matchesMax =
        maxRate === '' || item.rate <= Number(maxRate);

      return matchesStart && matchesEnd && matchesMin && matchesMax;
    });

    result.sort((a, b) => {
      switch (sortBy) {
        case 'date-asc':
          return a.date.localeCompare(b.date);

        case 'rate-asc':
          return a.rate - b.rate;

        case 'rate-desc':
          return b.rate - a.rate;

        default:
          return b.date.localeCompare(a.date);
      }
    });

    return result;
  }, [data, startDate, endDate, minRate, maxRate, sortBy]);

  function clearFilters() {
    setStartDate('');
    setEndDate('');
    setMinRate('');
    setMaxRate('');
    setSortBy('date-desc');
  }

  function formatDate(date) {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }

  function formatRate(rate) {
    return Number(rate).toLocaleString('pt-BR', {
      minimumFractionDigits: 4,
      maximumFractionDigits: 6,
    });
  }

  
function exportCSV() {
  if (filteredData.length === 0) {
    return;
  }

  const headers = [
    'Data',
    'Moeda de origem',
    'Moeda de destino',
    'Cotacao',
  ];

  const rows = filteredData.map((item) => [
    item.date,
    item.base,
    item.quote,
    item.rate,
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map((row) => row.join(',')),
  ].join('\n');

  const blob = new Blob(
    ['\uFEFF' + csvContent],
    { type: 'text/csv;charset=utf-8;' }
  );

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  const today = new Date().toISOString().slice(0, 10);

  link.href = url;
  link.download = `cotacoes-${base}-${quote}-${today}.csv`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}

  return (
    <section className={styles.container} id="table">
      <div className={styles.heading}>
        <span>DADOS CAMBIAIS</span>
        <h2>Tabela de cotações</h2>
        <p>
          Consulte, filtre e organize o histórico de {base} para {quote}.
        </p>
      </div>

      <div className={styles.filters}>
        <label>
          <span>Data inicial</span>
          <input
            type="date"
            value={startDate}
            max={endDate || undefined}
            onChange={(event) => setStartDate(event.target.value)}
          />
        </label>

        <label>
          <span>Data final</span>
          <input
            type="date"
            value={endDate}
            min={startDate || undefined}
            onChange={(event) => setEndDate(event.target.value)}
          />
        </label>

        <label>
          <span>Cotação mínima</span>
          <input
            type="number"
            min="0"
            step="0.0001"
            placeholder="Ex.: 5.00"
            value={minRate}
            onChange={(event) => setMinRate(event.target.value)}
          />
        </label>

        <label>
          <span>Cotação máxima</span>
          <input
            type="number"
            min="0"
            step="0.0001"
            placeholder="Ex.: 6.00"
            value={maxRate}
            onChange={(event) => setMaxRate(event.target.value)}
          />
        </label>
      </div>

      <div className={styles.actions}>
        <label className={styles.sortField}>
          <span>Ordenar por</span>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="date-desc">Data: mais recente</option>
            <option value="date-asc">Data: mais antiga</option>
            <option value="rate-asc">Cotação: menor valor</option>
            <option value="rate-desc">Cotação: maior valor</option>
          </select>
        </label>

        
<div className={styles.buttons}>
  <button
    type="button"
    className={styles.exportButton}
    onClick={exportCSV}
    disabled={filteredData.length === 0}
  >
    Exportar CSV
  </button>

  <button
    type="button"
    className={styles.clearButton}
    onClick={clearFilters}
  >
    Limpar filtros
  </button>
</div>

      </div>

      <div className={styles.count}>
        Exibindo <strong>{filteredData.length}</strong> de{' '}
        <strong>{data.length}</strong> registros.
      </div>

      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Moeda de origem</th>
              <th>Moeda de destino</th>
              <th>Cotação</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item) => (
              <tr key={`${item.date}-${item.base}-${item.quote}`}>
                <td>{formatDate(item.date)}</td>
                <td>{item.base}</td>
                <td>{item.quote}</td>
                <td>{formatRate(item.rate)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredData.length === 0 && (
          <div className={styles.empty}>
            Nenhum registro encontrado com os filtros selecionados.
          </div>
        )}
      </div>
    </section>
  );
}
