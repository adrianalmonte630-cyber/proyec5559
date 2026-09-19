import { DialogueLine } from "./types";

export const FRUIT_NAMES: Record<DialogueLine["fruit"], string> = {
  platano: "PLÁTANO",
  mango: "MANGO",
  pina: "PIÑA",
  china: "CHINA",
  aguacate: "AGUACATE",
};

export const FRUIT_COLORS: Record<DialogueLine["fruit"], string> = {
  platano: "#e0b400",
  mango: "#f0942f",
  pina: "#c98a20",
  china: "#f5941f",
  aguacate: "#4c7a2b",
};

export const INTRO_END = 60;
export const LAUGH_START = 720;
export const LAUGH_END = 810;
export const OUTRO_END = 900;

export const DIALOGUE: DialogueLine[] = [
  {
    fruit: "platano",
    text: "¡Pero ven acá! ¿Y es verdad que yo nací pa' que me frían? ¡Coño, denme un break!",
    color: FRUIT_COLORS.platano,
    startFrame: 60,
    endFrame: 195,
    expression: "angry",
  },
  {
    fruit: "mango",
    text: "Jajajaja, cállate tú. A mí me esperan en la nevera y cuando estoy maduro me comen de una vez.",
    color: FRUIT_COLORS.mango,
    startFrame: 195,
    endFrame: 330,
    expression: "laughing",
  },
  {
    fruit: "pina",
    text: "Ustedes sí hablan disparate. A mí es que me tienen de relajo, hay que buscar hasta un cuchillo grande pa' pelarme.",
    color: FRUIT_COLORS.pina,
    startFrame: 330,
    endFrame: 480,
    expression: "smirk",
  },
  {
    fruit: "china",
    text: "Muchachos, tranquilos. Por lo menos a mí me exprimen y me convierten en juguito. ¡Yo soy una estrella!",
    color: FRUIT_COLORS.china,
    startFrame: 480,
    endFrame: 615,
    expression: "calm",
  },
  {
    fruit: "aguacate",
    text: "¿Estrella tú? A mí me ponen al lado de un mangú y desaparezco en cinco minutos.",
    color: FRUIT_COLORS.aguacate,
    startFrame: 615,
    endFrame: 720,
    expression: "smirk",
  },
];
