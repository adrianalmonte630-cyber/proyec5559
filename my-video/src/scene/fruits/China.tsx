import React from "react";
import { Face } from "../Face";
import { Arms } from "../Arms";
import { Expression } from "../types";
import { idleSway, talkBounce } from "../animation";

export const China: React.FC<{
  frame: number;
  talking: boolean;
  expression: Expression;
}> = ({ frame, talking, expression }) => {
  const bounce = talkBounce(frame, talking, 3);
  const sway = idleSway(frame, 3);

  return (
    <g transform={`translate(0 ${bounce + sway}) rotate(${sway * 0.6})`}>
      <defs>
        <radialGradient id="china-body" cx="38%" cy="32%" r="72%">
          <stop offset="0%" stopColor="#ffc36b" />
          <stop offset="55%" stopColor="#f5941f" />
          <stop offset="100%" stopColor="#c96b0f" />
        </radialGradient>
      </defs>

      <ellipse cx={0} cy={92} rx={74} ry={16} fill="#000" opacity={0.18} />

      <circle
        cx={0}
        cy={5}
        r={88}
        fill="url(#china-body)"
        stroke="#a5590c"
        strokeWidth={3}
      />

      {[
        [-30, -40],
        [22, -15],
        [-10, 30],
        [40, 40],
        [-45, 10],
      ].map(([dx, dy], i) => (
        <ellipse
          key={i}
          cx={dx}
          cy={dy}
          rx={3.5}
          ry={3}
          fill="#c96b0f"
          opacity={0.5}
        />
      ))}

      <ellipse cx={-30} cy={-30} rx={22} ry={28} fill="#fff" opacity={0.16} />

      <path
        d="M -4 -85 C -14 -100 -6 -112 4 -110 C 14 -108 16 -96 8 -88"
        fill="#4c7a2b"
        stroke="#2f5218"
        strokeWidth={2}
      />
      <rect x={-3} y={-92} width={6} height={12} rx={2} fill="#6b4423" />

      <g transform="translate(0 10)">
        <Face frame={frame} expression={expression} talking={talking} />
      </g>

      <Arms
        leftX={-84}
        leftY={40}
        rightX={84}
        rightY={40}
        color="#f5941f"
        frame={frame}
        talking={talking}
      />
    </g>
  );
};
