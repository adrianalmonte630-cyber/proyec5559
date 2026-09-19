import { interpolate } from "remotion";

export const talkBounce = (frame: number, talking: boolean, amount = 5) => {
  if (!talking) return 0;
  return Math.sin(frame * 1.7) * amount;
};

export const talkTilt = (frame: number, talking: boolean, amount = 3) => {
  if (!talking) return 0;
  return Math.sin(frame * 0.85) * amount;
};

export const idleSway = (frame: number, phase = 0) =>
  Math.sin(frame / 40 + phase) * 1.5;

export const popIn = (frame: number, delay: number) =>
  interpolate(frame - delay, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
