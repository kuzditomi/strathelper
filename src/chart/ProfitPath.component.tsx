import React, { useEffect, useRef } from "react"
import * as d3 from 'd3';


interface ProfitPathProps {
    data: Array<[number, number]>;
    xScale: d3.ScaleLinear<number, number, number>;
    yScale: d3.ScaleLinear<number, number, number>;
}

export const ProfitPath: React.FC<ProfitPathProps> = ({ data, xScale, yScale }) => {
    const pathRef = useRef(null);

    useEffect(() => {
        if (!pathRef.current) {
            return;
        }

        const line = d3.line()
            .x(d => xScale(d[0]))
            .y(d => yScale(d[1]))
            .curve(d3.curveCardinal);

        d3.select(pathRef.current)
            .transition()
            .attr('d', line(data));
    }, [data]);

    return (
        <path
            ref={pathRef}
            transform="translate(5,0)"
            fill="none"
            stroke="blue"
            strokeWidth={2}
        />
    );
}