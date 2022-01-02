import { TradeGroup, OptionType, Trade } from './chart.models';

export interface ChartPoints {
  points: [number, number][];
}

function getTradePLAtExpiry(underLyingPrice: number, trade: Trade): number {
  const isCall = trade.optionType === 'C';
  const isOverStrikePrice = trade.strikePrice < underLyingPrice;
  const tradeAbsPrice = Math.abs(trade.tradePrice);

  const isFixed =
    (isCall && !isOverStrikePrice) || (!isCall && isOverStrikePrice);

  if (isFixed) {
    return -trade.position * tradeAbsPrice * 100;
  } else {
    return (
      trade.position *
      (-1 * tradeAbsPrice * 100 +
        (trade.strikePrice - underLyingPrice) *
          100 *
          (trade.optionType === 'C' ? -1 : 1))
    );
  }
}

function getGroupPLAtExpiry(
  underLyingPrice: number,
  tradeGroup: TradeGroup
): number {
  return tradeGroup.trades.reduce(
    (sum, trade) => sum + getTradePLAtExpiry(underLyingPrice, trade),
    0
  );
}

export const ChartService = {
  getGroupPLAtExpiry,
  getTradePLAtExpiry,
};
