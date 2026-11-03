const API_URL = 'https://api.frankfurter.dev/v2';

// Função auxiliar para realizar requisições
async function request(endpoint) {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    let message = `Erro na API: HTTP ${response.status}`;

    try {
      const errorData = await response.json();
      message = errorData.message || message;
    } catch {
      // Mantém a mensagem padrão caso a resposta não seja JSON.
    }

    throw new Error(message);
  }

  return response.json();
}

// Consultar todas as moedas disponíveis
export async function getCurrencies() {
  return request('/currencies');
}

// Consultar cotação entre duas moedas
export async function getRate(base, quote) {
  if (!base || !quote) {
    throw new Error('Selecione as duas moedas.');
  }

  if (base === quote) {
    return {
      date: new Date().toISOString().slice(0, 10),
      base,
      quote,
      rate: 1,
    };
  }

  return request(`/rate/${base}/${quote}`);
}

// Consultar cotação em uma data específica
export async function getHistoricalRate(base, quote, date) {
  const params = new URLSearchParams({
    date,
    base,
    quotes: quote,
  });

  return request(`/rates?${params.toString()}`);
}

// Consultar série histórica por intervalo
export async function getHistoricalRates(base, quote, from, to) {
  const params = new URLSearchParams({
    from,
    to,
    base,
    quotes: quote,
  });

  return request(`/rates?${params.toString()}`);
}
