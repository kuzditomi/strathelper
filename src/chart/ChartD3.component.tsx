import React, { useEffect, useRef } from 'react';
import { TradeGroup } from './chart.models';

import * as d3 from 'd3';
import { ChartService } from './chart.service';
import { ProfitPath } from './ProfitPath.component';
import { XAxis } from './XAxis.component';
import { YAxis } from './YAxis.component';


const getBoundaries = (tradeGroup: TradeGroup) => {
    let from = 0;
    let to = 0;

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

export const ExpiryChartD3: React.FC<{ chartData: TradeGroup }> = ({ chartData }) => {
    const svgWidth = 600;
    const svgHeight = 400;

    const [from, to] = getBoundaries(chartData);

    const getProfit = (x: number) => ChartService.getGroupPLAtExpiry(x, chartData);
    let data: Array<[number, number]> = [];

    const d = (Math.abs(to - from) / svgWidth) || 100; // approx. 1 per pixel
    for (let x = from; x <= to; x += d) {
        data.push([x, getProfit(x)]);
    }
    const x = d3.scaleLinear()
        .domain([from, to])
        .range([0, svgWidth]);

    const maxValue = data.reduce((max, d) => Math.max(max, Math.abs(d[1])), 0) * 1.2;
    const y = d3.scaleLinear()
        .domain([-maxValue, maxValue])
        .range([svgHeight, 0]);

    return (
        <svg width={svgWidth} height={svgHeight} >
            <ProfitPath data={data} xScale={x} yScale={y} />
            <XAxis data={data} xScale={x} svgHeight={svgHeight} />
            <YAxis data={data} yScale={y} />
        </svg>
    )
}