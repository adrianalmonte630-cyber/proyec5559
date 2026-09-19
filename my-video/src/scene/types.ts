export type Expression =
  | "angry"
  | "laughing"
  | "smirk"
  | "calm"
  | "shocked"
  | "neutral";

export type FruitId = "platano" | "mango" | "pina" | "china" | "aguacate";

export type DialogueLine = {
  fruit: FruitId;
  text: string;
  color: string;
  startFrame: number;
  endFrame: number;
  expression: Expression;
};
