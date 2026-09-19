import React from "react";
import { interpolate } from "remotion";
import { DialogueLine, FruitId } from "./types";
import { FRUIT_NAMES } from "./dialogue";

export const Caption: React.FC<{
  frame: number;
  line: DialogueLine | null;
}> = ({ frame, line }) => {
  if (!line) return null;

  const local = frame - line.startFrame;
  const duration = line.endFrame - line.startFrame;
  const words = line.text.split(" ");
  const revealedCount = Math.max(
    1,
    Math.round(
      interpolate(local, [0, duration * 0.85], [0, words.length], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
    ),
  );

  const pop = interpolate(local, [0, 10], [0.7, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    local,
    [duration - 8, duration],
    [1, 0.85],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 140,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 14,
        padding: "0 60px",
        transform: `scale(${pop})`,
        opacity: fadeOut,
      }}
    >
      <div
        style={{
          background: line.color,
          color: "#fff",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: 900,
          fontSize: 32,
          padding: "8px 28px",
          borderRadius: 999,
          letterSpacing: 2,
          boxShadow: "0 6px 14px rgba(0,0,0,0.35)",
          border: "3px solid rgba(255,255,255,0.7)",
        }}
      >
        {FRUIT_NAMES[line.fruit as FruitId]}
      </div>
      <div
        style={{
          width: "100%",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: 800,
          fontSize: 46,
          lineHeight: 1.25,
          textAlign: "center",
          color: "#fff",
          textShadow:
            "0 3px 0 rgba(0,0,0,0.55), 0 0 24px rgba(0,0,0,0.35)",
          WebkitTextStroke: "2px rgba(0,0,0,0.55)",
        }}
      >
        {words.map((w, i) => (
          <span
            key={i}
            style={{
              opacity: i < revealedCount ? 1 : 0.35,
              color: i < revealedCount ? "#fff" : "#ffffffaa",
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </div>
    </div>
  );
};
