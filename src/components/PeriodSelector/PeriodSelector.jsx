
import styles from './PeriodSelector.module.css';

const periods = [
  { label: '7 dias', value: '7' },
  { label: '15 dias', value: '15' },
  { label: '30 dias', value: '30' },
  { label: '3 meses', value: '3m' },
  { label: '6 meses', value: '6m' },
  { label: '1 ano', value: '1y' },
  { label: '5 anos', value: '5y' },
  { label: '10 anos', value: '10y' },
];

export default function PeriodSelector({ value, onChange }) {
  return (
    <div className={styles.container}>
      <span className={styles.label}>Período:</span>

      <div className={styles.options}>
        {periods.map((period) => (
          <button
            key={period.value}
            type="button"
            className={
              value === period.value
                ? styles.active
                : styles.option
            }
            onClick={() => onChange(period.value)}
            aria-pressed={value === period.value}
          >
            {period.label}
          </button>
        ))}
      </div>
    </div>
  );
}
