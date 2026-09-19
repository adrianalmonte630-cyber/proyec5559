import React from "react";
import { interpolate } from "remotion";
import { Expression } from "./types";

const MOUTH_PATH: Record<Expression, string> = {
  calm: "M -18 4 Q 0 20 18 4 Q 0 11 -18 4 Z",
  neutral: "M -14 5 Q 0 9 14 5 Q 0 7 -14 5 Z",
  angry: "M -18 8 Q 0 -6 18 8 Q 0 3 -18 8 Z",
  laughing: "M -22 -2 Q 0 32 22 -2 Q 0 15 -22 -2 Z",
  smirk: "M -16 6 Q 4 -10 20 3 Q 4 -1 -16 6 Z",
  shocked: "M 0 4 m -13 0 a 13 13 0 1 0 26 0 a 13 13 0 1 0 -26 0",
};

const EYEBROW_ANGLE: Record<Expression, [number, number]> = {
  angry: [24, -24],
  neutral: [0, 0],
  laughing: [-12, 12],
  smirk: [-4, 16],
  shocked: [-20, 20],
  calm: [-6, 6],
};

const EYEBROW_LIFT: Record<Expression, number> = {
  angry: -2,
  neutral: 0,
  laughing: -6,
  smirk: -4,
  shocked: -9,
  calm: -2,
};

export const Face: React.FC<{
  frame: number;
  expression: Expression;
  talking: boolean;
  eyeSpacing?: number;
  scale?: number;
}> = ({ frame, expression, talking, eyeSpacing = 24, scale = 1 }) => {
  const mouthScaleY = talking
    ? interpolate(Math.sin(frame * 1.7), [-1, 1], [0.5, 1.4])
    : 1 + Math.sin(frame / 20) * 0.04;

  const blinkCycle = frame % 140;
  const blinking = blinkCycle > 132 && blinkCycle < 138;
  const eyeRy = blinking ? 1 : 10;

  const gazeX = Math.sin(frame / 45) * 1.5;

  const [browLeftAngle, browRightAngle] = EYEBROW_ANGLE[expression];
  const browLift = EYEBROW_LIFT[expression];

  return (
    <g transform={`scale(${scale})`}>
      {[-eyeSpacing, eyeSpacing].map((ex, i) => (
        <g key={i} transform={`translate(${ex} 0)`}>
          <ellipse
            cx={0}
            cy={0}
            rx={10}
            ry={eyeRy}
            fill="#fdfaf3"
            stroke="#241008"
            strokeWidth={1.5}
          />
          {!blinking && (
            <circle cx={gazeX} cy={1} r={4.2} fill="#1c0e08" />
          )}
          <rect
            x={-11}
            y={-19 + browLift}
            width={22}
            height={5}
            rx={2.5}
            fill="#241008"
            transform={`rotate(${i === 0 ? browLeftAngle : browRightAngle} 0 ${
              -19 + browLift
            })`}
          />
        </g>
      ))}
      <g transform="translate(0 22)">
        <path
          d={MOUTH_PATH[expression]}
          fill="#3a1210"
          stroke="#1c0705"
          strokeWidth={1}
          style={{
            transform: `scaleY(${mouthScaleY})`,
            transformOrigin: "0px 4px",
          }}
        />
      </g>
    </g>
  );
};
