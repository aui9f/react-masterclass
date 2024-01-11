const BASE_URL = "https://api.coinpaprika.com/v1";

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((res) => {
    return res.json();
  });
}
export function fetchCoin(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((res) => {
    return res.json();
  });
}

export function fetchTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((res) => res.json());
}
