import Header from './components/Header.jsx';
import CurrencyConverter from './components/CurrencyConverter.jsx';
import HistorySection from './components/HistorySection.jsx';

export default function App() {
  return (
    <>
      <Header />

      <main>
        <section style={{ textAlign: 'center', padding: '48px 20px 0' }}>
          <h1>Câmbio de Moedas</h1>
          <p>Consulte cotações e acompanhe o mercado de moedas.</p>
        </section>

        <CurrencyConverter />

        <HistorySection />
      </main>
    </>
  );
}
