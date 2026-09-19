import React from "react";

export const Arms: React.FC<{
  leftX: number;
  leftY: number;
  rightX: number;
  rightY: number;
  color: string;
  frame: number;
  talking: boolean;
}> = ({ leftX, leftY, rightX, rightY, color, frame, talking }) => {
  const swing = talking
    ? Math.sin(frame * 1.7) * 20
    : Math.sin(frame / 30) * 4;

  return (
    <g>
      <g transform={`translate(${leftX} ${leftY}) rotate(${-34 + swing})`}>
        <rect x={-4} y={0} width={8} height={36} rx={4} fill={color} />
        <circle cx={0} cy={40} r={10} fill={color} stroke="#00000030" strokeWidth={2} />
      </g>
      <g transform={`translate(${rightX} ${rightY}) rotate(${34 - swing})`}>
        <rect x={-4} y={0} width={8} height={36} rx={4} fill={color} />
        <circle cx={0} cy={40} r={10} fill={color} stroke="#00000030" strokeWidth={2} />
      </g>
    </g>
  );
};
