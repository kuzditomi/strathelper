import { OptionType, Trade } from '../chart/chart.models';
import { TMock } from './tmock';

const baseURL =
  import.meta.env.VITE_API_ENV == 'local'
    ? 'http://localhost:3001'
    : 'https://kuzditomi-strathelper.herokuapp.com';


type OptionResult = {
  mark: number;
}

export interface OptionChainResult {
  symbol: string;
  callExpDateMap: Record<string, Record<string, OptionResult[]>>;
  putExpDateMap: Record<string, Record<string, OptionResult[]>>;
}

export async function getData(ticker: string): Promise<OptionChainResult> {
  console.log({ ticker })
  // const price = `${baseURL}/price?ticker=${ticker}`;
  // const res = await fetch(price);
  // const chain = (await res.json()) as OptionChainResult;


  const chain = TMock as unknown as OptionChainResult;
  return chain;
}


export const getExpiries = (optionChain: OptionChainResult): string[] => Object.keys(optionChain.callExpDateMap);

export const getStrikePrices = (optionChain: OptionChainResult, expiry: string): string[] => Object.keys(optionChain.callExpDateMap[expiry]);

export const getTrade = (optionChain: OptionChainResult, expiry: string, strikePrice: string, optionType: OptionType, amount: number): Trade => {
  const table = optionType == 'C' ? optionChain.callExpDateMap : optionChain.putExpDateMap;
  const tradePrice = table[expiry][strikePrice][0].mark;

  return {
    underlying: optionChain.symbol,
    position: amount,
    expiration: new Date(expiry.split(':')[0]),
    optionType,
    strikePrice: Number(strikePrice),
    tradePrice: tradePrice // 
  }
}
