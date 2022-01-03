import React, { RefObject, useEffect, useRef, useState } from "react"
import * as d3 from 'd3';

interface XAxisProps {
    data: Array<[number, number]>;
    svgRef: RefObject<SVGSVGElement>;
    xScale: d3.ScaleLinear<number, number, number>;
    yScale: d3.ScaleLinear<number, number, number>;
}

export const PLIndicator: React.FC<XAxisProps> = ({ svgRef, data, xScale, yScale }) => {
    const gRef = useRef(null);
    const lineRef = useRef(null);
    const circleRef = useRef(null);
    const bubbleRectRef = useRef(null);
    const textRef = useRef<SVGTextElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // TODO: handle unsubscription
        
        if (!svgRef.current) {
            return;
        }

        const line = d3.select(lineRef.current);
        const circle = d3.select(circleRef.current);
        const text = d3.select(textRef.current);
        const bubbleRect = d3.select(bubbleRectRef.current);

        var bisect = d3.bisector((d: any) => d[0]).left;

        d3.select(svgRef.current)
            .on('mouseenter', () => {
                setIsVisible(true);
            })
            .on('mouseleave', () => {
                setIsVisible(false);
            })
            .on('mousemove', (evt) => {
                const x0 = xScale.invert(d3.pointer(evt)[0]);
                const i = bisect(data, x0, 1);

                const [x, y] = [xScale(data[i][0]), yScale(data[i][1])];

                line.attr('x1', x).attr('x2', x)
                circle.attr('cx', x).attr('cy', y);
                text
                    .attr('x', x).attr('y', y)
                    .attr('fill', data[i][1] > 0 ? 'lime' : 'red')
                    .text(`$${Math.floor(data[i][1])}`)

                const textWidth = textRef.current!.getBBox();
                bubbleRect
                    .attr('x', x).attr('y', y)
                    .attr('width', textWidth.width + 10)
                    .attr('height', textWidth.height + 10)
                    .attr('transform', `translate(${-(textWidth.width + 10) / 2}, ${-(textWidth.height + 10 + 10)})`);
            });
    }, [])

    if (!svgRef.current) {
        return null;
    }

    return (
        <g
            ref={gRef}
            visibility={isVisible ? 'visible' : 'hidden'}

        >
            <line ref={lineRef}
                stroke="grey"
                strokeWidth={1}
                y1={0}
                y2={svgRef.current.clientHeight}
            />
            <circle ref={circleRef}
                stroke="black"
                strokeWidth={2}
                fill="white"
                r={3}
            >
            </circle>
            <rect ref={bubbleRectRef}
                fill="black"
            >
            </rect>
            <text ref={textRef}
                transform="translate(0,-20)"
                textAnchor="middle"
                fill="white"
            />
        </g>
    );
}