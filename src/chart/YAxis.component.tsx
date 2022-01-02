import React, { useEffect, useRef } from "react"
import * as d3 from 'd3';

interface YAxisProps {
    data: Array<[number, number]>;
    yScale: d3.ScaleLinear<number, number, number>;
}

export const YAxis: React.FC<YAxisProps> = ({ data, yScale }) => {
    const gRef = useRef(null);

    useEffect(() => {
        if (!gRef.current) {
            return;
        }

        const yAxis = d3.axisLeft(yScale);
        d3.select(gRef.current)
            .transition()
            .call(yAxis as any);
    }, [data]);

    return (
        <g
            ref={gRef}
            transform="translate(50,0)"
        />
    );
}