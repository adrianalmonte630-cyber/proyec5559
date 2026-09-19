import React from "react";
import { Face } from "../Face";
import { Arms } from "../Arms";
import { Expression } from "../types";
import { talkTilt } from "../animation";

export const Platano: React.FC<{
  frame: number;
  talking: boolean;
  expression: Expression;
}> = ({ frame, talking, expression }) => {
  const tilt = talkTilt(frame, talking, 4);

  return (
    <g transform={`rotate(${-18 + tilt})`}>
      <defs>
        <linearGradient id="platano-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f7e07a" />
          <stop offset="55%" stopColor="#f4d13a" />
          <stop offset="100%" stopColor="#d9a92a" />
        </linearGradient>
      </defs>

      <ellipse cx={0} cy={150} rx={70} ry={16} fill="#000" opacity={0.18} />

      <path
        d="M -30 150
           C -55 90 -50 -20 5 -95
           C 20 -118 45 -122 55 -108
           C 63 -96 55 -80 42 -70
           C 62 -30 60 60 25 120
           C 10 145 -15 150 -30 150 Z"
        fill="url(#platano-body)"
        stroke="#a97e1d"
        strokeWidth={3}
      />

      <path
        d="M -18 130 C -40 80 -36 -10 12 -85"
        fill="none"
        stroke="#c79a2b"
        strokeWidth={3}
        opacity={0.7}
      />

      <path
        d="M 42 -70 C 55 -80 63 -96 55 -108 C 62 -100 66 -88 60 -76 C 55 -68 48 -66 42 -70 Z"
        fill="#6b4423"
      />
      <ellipse cx={-26} cy={140} rx={10} ry={8} fill="#6b4423" />

      <g transform="translate(-5 30) rotate(-8)">
        <Face frame={frame} expression={expression} talking={talking} />
      </g>

      <Arms
        leftX={-48}
        leftY={95}
        rightX={40}
        rightY={-35}
        color="#e8c545"
        frame={frame}
        talking={talking}
      />
    </g>
  );
};
