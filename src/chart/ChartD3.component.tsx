import React, { useEffect, useRef } from 'react';
import { TradeGroup } from './chart.models';

import * as d3 from 'd3';
import { ChartService } from './chart.service';
import { ProfitPath } from './ProfitPath.component';
import { XAxis } from './XAxis.component';
import { YAxis } from './YAxis.component';
import { PLIndicator } from './PLIndicator.component';


const getBoundaries = (tradeGroup: TradeGroup) => {
    let from = 0;
    let to = 0;

    if (tradeGroup.trades.length > 1) {
        const middlePoint = tradeGroup.trades.reduce((sum, t) => sum + t.strikePrice, 0) / tradeGroup.trades.length;
        const strikes = tradeGroup.trades.map(t => t.strikePrice);
        const min = Math.min(...strikes)
        const max = Math.max(...strikes)

        from = Math.max(min - ((middlePoint - min) / 2),0);
        to = max + ((max - middlePoint) / 2);
    } else {
        const distance = Math.abs(tradeGroup.trades[0].tradePrice * 100)
        from = Math.max(tradeGroup.trades[0].strikePrice - 2 * distance,0)
        to = tradeGroup.trades[0].strikePrice + 2 * distance;
    }

    return [from, to];
}

export const ExpiryChartD3: React.FC<{ chartData: TradeGroup }> = ({ chartData }) => {
    const svgWidth = 600;
    const svgHeight = 400;

    const svgRef = useRef<SVGSVGElement>(null);

    const [from, to] = getBoundaries(chartData);

    const getProfit = (x: number) => ChartService.getGroupPLAtExpiry(x, chartData);
    let data: Array<[number, number]> = [];

    const d = (Math.abs(to - from) / svgWidth) || 100; // approx. 1 per pixel
    for (let x = from; x <= to; x += d) {
        data.push([x, getProfit(x)]);
    }
    const xScale = d3.scaleLinear()
        .domain([from, to])
        .range([0, svgWidth]);

    const maxValue = data.reduce((max, d) => Math.max(max, Math.abs(d[1])), 0) * 1.2;
    const yScale = d3.scaleLinear()
        .domain([-maxValue, maxValue])
        .range([svgHeight, 0]);

    const baseD3Props = {xScale, yScale, data};

    return (
        <svg width={svgWidth} height={svgHeight} ref={svgRef}>
            <ProfitPath {...baseD3Props}/>
            <XAxis {...baseD3Props} svgHeight={svgHeight} />
            <YAxis {...baseD3Props} />
            <PLIndicator {...baseD3Props} svgRef={svgRef} />
        </svg>
    )
}