import React, { useEffect, useRef } from "react"
import * as d3 from 'd3';

interface XAxisProps {
    data: Array<[number, number]>;
    xScale: d3.ScaleLinear<number, number, number>;
    svgHeight: number;
}

export const XAxis: React.FC<XAxisProps> = ({ data, xScale, svgHeight }) => {
    const gRef = useRef(null);

    useEffect(() => {
        if (!gRef.current) {
            return;
        }

        const xAxis = d3.axisBottom(xScale);
        d3.select(gRef.current)
            .transition()
            .call(xAxis as any);

    }, [data]);

    return (
        <g
            ref={gRef}
            transform={`translate(50, ${svgHeight / 2})`}
        />
    );
}