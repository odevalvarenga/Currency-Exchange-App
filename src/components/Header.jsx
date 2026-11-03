
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          HERMES
          <span>CURRENCY EXCHANGE</span>
        </a>

        <nav className={styles.navigation} aria-label="Navegação principal">
          <a href="#converter">Conversor</a>
          <a href="#history">Histórico</a>
          <a href="#table">Cotações</a>
        </nav>

        <span className={styles.language}>PT-BR</span>
      </div>
    </header>
  );
}
