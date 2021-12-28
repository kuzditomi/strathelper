import React from "react";
import { TradeGroup, Trade } from './chart.models';
import { Chart } from "react-google-charts";
import ChartService from "./chart.service";

export interface ChartProps {
    chartData: TradeGroup;
    showMainStrategyOnly?: boolean;
}

export const OptionExpiryChart: React.FC<ChartProps> = ({ chartData, showMainStrategyOnly = true }) => {
    const isStrategy = chartData.trades.length > 1;

    const getHeaderFromTrade = (trade: Trade) => `${trade.underlying} ${trade.strikePrice}`;

    const getBoundaries = () => {
        let from = 0;
        let to = 0;
        const tradeGroup = chartData;

        if (tradeGroup.trades.length > 1) {
            const middlePoint = tradeGroup.trades.reduce((sum, t) => sum + t.strikePrice, 0) / tradeGroup.trades.length;
            const strikes = tradeGroup.trades.map(t => t.strikePrice);
            const min = Math.min(...strikes)
            const max = Math.max(...strikes)

            from = min - ((middlePoint - min) / 2);
            to = max + ((max - middlePoint) / 2);
        } else {
            const distance = Math.abs(tradeGroup.trades[0].tradePrice * 100)
            from = tradeGroup.trades[0].strikePrice - 2 * distance;
            to = tradeGroup.trades[0].strikePrice + 2 * distance;

        }

        return [from, to];
    }

    const getChartPoints = () => {
        const [from, to] = getBoundaries();
        const points: number[][] = [];


        for (let x = from; x <= to; x += 0.01) {
            const valuesForX = chartData.trades.map(t => ChartService.getTradePLAtExpiry(x, t));
            const strategyValue = ChartService.getGroupPLAtExpiry(x, chartData);

            if (showMainStrategyOnly) {
                points.push([x, strategyValue]);
            } else if (isStrategy) {
                points.push([x, ...valuesForX, strategyValue]);
            } else {
                points.push([x, ...valuesForX]);
            }
        }

        return points;
    }

    const getHeaders = () => {
        const headers = ['x'];

        if (showMainStrategyOnly) {
            headers.push(chartData.trades[0].underlying);
        } else {
            headers.push(...chartData.trades.map(getHeaderFromTrade));
            if (isStrategy) {
                headers.push('Trade');
            }
        }

        return headers;
    }

    const getSeriesOptions = () => {
        if (showMainStrategyOnly) {
            return {};
        } else {
            let i = 0;
            return chartData.trades.reduce((options, _) => {
                options[i++] = {
                    lineDashStyle: [2, 2]
                };
                return options;
            }, {} as { [key: number]: any });
        }
    }

    return <Chart
        width="100%"
        height="300px"
        chartType="LineChart"
        data={
            [
                getHeaders(),
                ...getChartPoints()
            ]}
        options={{
            hAxis: {
                title: 'Underlying price',
            },
            vAxis: {
                title: 'P/L',
            },
            series: getSeriesOptions()
        }}
    />;
};
