export type OptionType = 'C' | 'P';

export interface Trade {
    underlying: string;
    position: number;
    expiration: Date;
    optionType: OptionType;
    strikePrice: number;
    tradePrice: number; // signed with positions sign
}

export interface TradeGroup {
    underlying: string;
    expiration: Date;
    trades: Trade[];
}