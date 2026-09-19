import React from "react";
import { Face } from "../Face";
import { Arms } from "../Arms";
import { Expression } from "../types";
import { idleSway, talkBounce } from "../animation";

export const Mango: React.FC<{
  frame: number;
  talking: boolean;
  expression: Expression;
}> = ({ frame, talking, expression }) => {
  const bounce = talkBounce(frame, talking, 3);
  const sway = idleSway(frame, 1);

  return (
    <g transform={`translate(0 ${bounce + sway}) rotate(${sway})`}>
      <defs>
        <radialGradient id="mango-body" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#ffd97a" />
          <stop offset="45%" stopColor="#f6a93b" />
          <stop offset="80%" stopColor="#e2632f" />
          <stop offset="100%" stopColor="#b03d24" />
        </radialGradient>
      </defs>

      <ellipse cx={0} cy={118} rx={78} ry={16} fill="#000" opacity={0.18} />

      <path
        d="M 0 -110
           C 55 -105 85 -50 78 10
           C 72 65 40 118 -5 118
           C -55 118 -85 60 -80 0
           C -75 -55 -45 -114 0 -110 Z"
        fill="url(#mango-body)"
        stroke="#8f3a1e"
        strokeWidth={3}
      />

      <ellipse cx={-28} cy={-45} rx={20} ry={30} fill="#fff" opacity={0.18} />

      <path
        d="M -6 -108 C -2 -118 6 -118 8 -108"
        fill="none"
        stroke="#4a7a2c"
        strokeWidth={6}
        strokeLinecap="round"
      />

      <g transform="translate(0 5)">
        <Face frame={frame} expression={expression} talking={talking} />
      </g>

      <Arms
        leftX={-78}
        leftY={35}
        rightX={78}
        rightY={35}
        color="#f0942f"
        frame={frame}
        talking={talking}
      />
    </g>
  );
};
