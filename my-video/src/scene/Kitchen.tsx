import React from "react";
import { AbsoluteFill } from "remotion";

export const Kitchen: React.FC = () => {
  return (
    <AbsoluteFill>
      <svg
        viewBox="0 0 1080 1920"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f2d9a0" />
            <stop offset="60%" stopColor="#e8c07f" />
            <stop offset="100%" stopColor="#d9a962" />
          </linearGradient>
          <radialGradient id="warmLight" cx="50%" cy="18%" r="65%">
            <stop offset="0%" stopColor="#fff3d0" stopOpacity={0.85} />
            <stop offset="100%" stopColor="#fff3d0" stopOpacity={0} />
          </radialGradient>
          <linearGradient id="tableWood" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b97a3d" />
            <stop offset="50%" stopColor="#9c5f2a" />
            <stop offset="100%" stopColor="#7a481d" />
          </linearGradient>
        </defs>

        <rect x={0} y={0} width={1080} height={1300} fill="url(#wall)" />

        {/* tile backsplash */}
        <g opacity={0.35}>
          {Array.from({ length: 14 }).map((_, col) =>
            Array.from({ length: 6 }).map((_, row) => (
              <rect
                key={`${col}-${row}`}
                x={col * 80}
                y={780 + row * 80}
                width={76}
                height={76}
                fill="none"
                stroke="#8a5a2c"
                strokeWidth={2}
              />
            )),
          )}
        </g>

        {/* window with warm afternoon light */}
        <rect x={70} y={110} width={300} height={380} rx={16} fill="#f7ecd0" stroke="#8a5a2c" strokeWidth={10} />
        <rect x={90} y={130} width={260} height={340} fill="#ffdf8f" />
        <rect x={90} y={130} width={260} height={340} fill="url(#warmLight)" />
        <line x1={220} y1={130} x2={220} y2={470} stroke="#8a5a2c" strokeWidth={8} />
        <line x1={90} y1={300} x2={350} y2={300} stroke="#8a5a2c" strokeWidth={8} />

        {/* hanging plantains decoration */}
        <path
          d="M 780 60 C 830 100 850 170 820 230 C 800 260 760 260 745 230 C 730 195 745 140 770 105"
          fill="#dfc04a"
          stroke="#a97e1d"
          strokeWidth={4}
        />
        <path
          d="M 850 70 C 895 115 905 180 875 235 C 855 260 820 255 810 225 C 800 190 815 140 840 110"
          fill="#e8cd5e"
          stroke="#a97e1d"
          strokeWidth={4}
        />

        {/* warm overall light wash */}
        <rect x={0} y={0} width={1080} height={1300} fill="url(#warmLight)" />

        {/* the table */}
        <rect x={-20} y={1260} width={1120} height={660} fill="url(#tableWood)" />
        <rect x={-20} y={1260} width={1120} height={26} fill="#d9a15a" opacity={0.6} />
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={i}
            x1={-20}
            y1={1320 + i * 55}
            x2={1100}
            y2={1310 + i * 55}
            stroke="#5c3813"
            strokeWidth={3}
            opacity={0.35}
          />
        ))}
      </svg>
    </AbsoluteFill>
  );
};
