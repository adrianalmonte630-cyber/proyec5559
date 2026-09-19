import React from "react";
import { Face } from "../Face";
import { Arms } from "../Arms";
import { Expression } from "../types";
import { idleSway, talkBounce } from "../animation";

const diagLines = (count: number, spacing: number, rotate: number) => {
  const lines = [];
  for (let i = -count; i <= count; i++) {
    lines.push(
      <line
        key={`${rotate}-${i}`}
        x1={-90}
        y1={i * spacing}
        x2={90}
        y2={i * spacing}
        stroke="#8a5a1c"
        strokeWidth={2.5}
        opacity={0.45}
        transform={`rotate(${rotate})`}
      />,
    );
  }
  return lines;
};

export const Pina: React.FC<{
  frame: number;
  talking: boolean;
  expression: Expression;
}> = ({ frame, talking, expression }) => {
  const bounce = talkBounce(frame, talking, 3);
  const sway = idleSway(frame, 2);

  return (
    <g transform={`translate(0 ${bounce + sway})`}>
      <defs>
        <linearGradient id="pina-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7d874" />
          <stop offset="60%" stopColor="#eab53a" />
          <stop offset="100%" stopColor="#c98a20" />
        </linearGradient>
        <clipPath id="pina-clip">
          <ellipse cx={0} cy={30} rx={72} ry={100} />
        </clipPath>
      </defs>

      <ellipse cx={0} cy={128} rx={78} ry={16} fill="#000" opacity={0.18} />

      {/* leaves */}
      {[-40, -20, 0, 20, 40].map((angle) => (
        <path
          key={angle}
          d="M 0 -70 C -14 -140 -6 -190 0 -210 C 6 -190 14 -140 0 -70 Z"
          fill="#4c7a2b"
          stroke="#2f5218"
          strokeWidth={2}
          transform={`rotate(${angle})`}
        />
      ))}

      <ellipse
        cx={0}
        cy={30}
        rx={72}
        ry={100}
        fill="url(#pina-body)"
        stroke="#a06c1c"
        strokeWidth={3}
      />

      <g clipPath="url(#pina-clip)">
        {diagLines(6, 26, 35)}
        {diagLines(6, 26, -35)}
      </g>

      <g transform="translate(0 30)">
        <Face frame={frame} expression={expression} talking={talking} eyeSpacing={22} />
      </g>

      <Arms
        leftX={-80}
        leftY={50}
        rightX={80}
        rightY={50}
        color="#eab53a"
        frame={frame}
        talking={talking}
      />
    </g>
  );
};
