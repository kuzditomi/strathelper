import { TMock } from './tmock';
const baseURL =
  import.meta.env.VITE_API_ENV == 'local'
    ? 'http://localhost:3001'
    : 'https://kuzditomi-strathelper.herokuapp.com';

interface OptionChainResult {
  callExpDateMap: Record<string, string>;
  putExpDateMap: Record<string, string>;
}

export interface TickerData {
  expiries: string[];
  prices: Record<string, number[]>;
}

export async function getData(ticker: string): Promise<TickerData> {
  const price = `${baseURL}/price?ticker=${ticker}`;
  const res = await fetch(price);
  const chain = (await res.json()) as OptionChainResult;

  // const chain = TMock as unknown as OptionChainResult;

  const expiries = Object.keys(chain.callExpDateMap).map(
    (t) => t.split(':')[0]
  );
  const prices = Object.keys(chain.callExpDateMap).reduce(
    (priceList, expiry) => {
      priceList[expiry.split(':')[0]] = Object.keys(
        chain.callExpDateMap[expiry]
      ).map((s) => Number(s));

      return priceList;
    },
    {} as Record<string, number[]>
  );

  return {
    expiries,
    prices,
  };
}
