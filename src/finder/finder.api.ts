const baseURL =
  import.meta.env.VITE_API_ENV == 'local'
    ? 'http://localhost:3001'
    : 'https://kuzditomi-strathelper.herokuapp.com';

interface OptionChain {
  callExpDateMap: Record<string, string>;
  putExpDateMap: Record<string, string>;
}

export async function getData(ticker: string) {
  const price = `${baseURL}/price?ticker=${ticker}`;
  const res = await fetch(price);
  const chain = (await res.json()) as OptionChain;

  return chain;
}
