import React from "react";
import { Face } from "../Face";
import { Arms } from "../Arms";
import { Expression } from "../types";
import { idleSway, talkBounce } from "../animation";

export const Aguacate: React.FC<{
  frame: number;
  talking: boolean;
  expression: Expression;
}> = ({ frame, talking, expression }) => {
  const bounce = talkBounce(frame, talking, 3);
  const sway = idleSway(frame, 4);

  return (
    <g transform={`translate(0 ${bounce + sway})`}>
      <defs>
        <radialGradient id="aguacate-body" cx="40%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#7fae4a" />
          <stop offset="55%" stopColor="#4c7a2b" />
          <stop offset="100%" stopColor="#2f5218" />
        </radialGradient>
      </defs>

      <ellipse cx={0} cy={130} rx={76} ry={16} fill="#000" opacity={0.18} />

      <path
        d="M 0 -100
           C 45 -98 62 -50 55 -5
           C 50 40 45 90 0 130
           C -45 90 -50 40 -55 -5
           C -62 -50 -45 -98 0 -100 Z"
        fill="url(#aguacate-body)"
        stroke="#233f13"
        strokeWidth={3}
      />

      {[
        [-20, -60],
        [15, -70],
        [30, -20],
        [-30, 10],
        [10, 60],
        [-15, 90],
      ].map(([dx, dy], i) => (
        <ellipse
          key={i}
          cx={dx}
          cy={dy}
          rx={7}
          ry={5}
          fill="#3d6a22"
          opacity={0.5}
        />
      ))}

      <rect x={-5} y={-108} width={10} height={14} rx={3} fill="#6b4423" />

      <g transform="translate(0 -10)">
        <Face frame={frame} expression={expression} talking={talking} />
      </g>

      <Arms
        leftX={-72}
        leftY={30}
        rightX={72}
        rightY={30}
        color="#5a8a35"
        frame={frame}
        talking={talking}
      />
    </g>
  );
};
