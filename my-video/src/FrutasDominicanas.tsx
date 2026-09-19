import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Kitchen } from "./scene/Kitchen";
import { Caption } from "./scene/Caption";
import { Platano } from "./scene/fruits/Platano";
import { Mango } from "./scene/fruits/Mango";
import { Pina } from "./scene/fruits/Pina";
import { China } from "./scene/fruits/China";
import { Aguacate } from "./scene/fruits/Aguacate";
import { DIALOGUE, INTRO_END, LAUGH_START, LAUGH_END, OUTRO_END } from "./scene/dialogue";
import { DialogueLine, FruitId, Expression } from "./scene/types";

const STAGE_X: Record<FruitId, number> = {
  platano: 150,
  mango: 360,
  pina: 550,
  china: 750,
  aguacate: 940,
};

const STAGE_Y: Record<FruitId, number> = {
  platano: 1350,
  mango: 1330,
  pina: 1320,
  china: 1310,
  aguacate: 1330,
};

const FRUIT_SCALE: Record<FruitId, number> = {
  platano: 0.95,
  mango: 1,
  pina: 1,
  china: 0.95,
  aguacate: 1,
};

const getActiveLine = (frame: number): DialogueLine | null => {
  return (
    DIALOGUE.find((l) => frame >= l.startFrame && frame < l.endFrame) ?? null
  );
};

const CameraStage: React.FC<{ frame: number; children: React.ReactNode }> = ({
  frame,
  children,
}) => {
  const active = getActiveLine(frame);
  const laughing = frame >= LAUGH_START && frame < LAUGH_END;

  let targetX = 540;
  let zoom = 1;

  if (active) {
    targetX = STAGE_X[active.fruit];
    const local = frame - active.startFrame;
    const easeIn = interpolate(local, [0, 12], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    zoom = interpolate(easeIn, [0, 1], [1, 1.22]);
  } else if (laughing) {
    zoom = interpolate(frame, [LAUGH_START, LAUGH_START + 15], [1, 1.08], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }

  const dx = (540 - targetX) * (zoom - 1);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        transform: `scale(${zoom}) translateX(${dx / zoom}px)`,
        transformOrigin: "50% 68%",
      }}
    >
      {children}
    </div>
  );
};

const FruitOnStage: React.FC<{
  id: FruitId;
  frame: number;
  active: DialogueLine | null;
  laughing: boolean;
}> = ({ id, frame, active, laughing }) => {
  const talking = laughing ? true : active?.fruit === id;
  const expression: Expression = laughing
    ? "laughing"
    : active
      ? active.fruit === id
        ? active.expression
        : "neutral"
      : "neutral";

  const dim = active && active.fruit !== id ? 0.72 : 1;

  const Comp = {
    platano: Platano,
    mango: Mango,
    pina: Pina,
    china: China,
    aguacate: Aguacate,
  }[id];

  return (
    <g
      transform={`translate(${STAGE_X[id]} ${STAGE_Y[id]}) scale(${FRUIT_SCALE[id]})`}
      opacity={dim}
    >
      <Comp frame={frame} talking={!!talking} expression={expression} />
    </g>
  );
};

const IntroTitle: React.FC<{ frame: number }> = ({ frame }) => {
  const opacity = interpolate(frame, [0, 15, 45, 60], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 1080,
      }}
    >
      <div
        style={{
          opacity,
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: 900,
          fontSize: 44,
          color: "#fff",
          textAlign: "center",
          textShadow: "0 4px 10px rgba(0,0,0,0.5)",
          background: "rgba(0,0,0,0.28)",
          padding: "18px 34px",
          borderRadius: 20,
          margin: "0 50px",
        }}
      >
        Una cocina dominicana, un sábado por la tarde...
      </div>
    </AbsoluteFill>
  );
};

const OutroTitle: React.FC<{ frame: number }> = ({ frame }) => {
  const opacity = interpolate(
    frame,
    [LAUGH_END, LAUGH_END + 20, OUTRO_END - 10, OUTRO_END],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          opacity,
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: 900,
          fontSize: 56,
          color: "#fff",
          textAlign: "center",
          textShadow: "0 4px 12px rgba(0,0,0,0.55)",
          background: "rgba(0,0,0,0.35)",
          padding: "24px 40px",
          borderRadius: 24,
        }}
      >
        🍌🥭🍍🍊🥑 ¡COMEDIA DE COCINA DOMINICANA!
      </div>
    </AbsoluteFill>
  );
};

export const FrutasDominicanas: React.FC = () => {
  const frame = useCurrentFrame();
  const active = getActiveLine(frame);
  const laughing = frame >= LAUGH_START && frame < LAUGH_END;

  const vignette = interpolate(
    frame,
    [0, 10, OUTRO_END - 10, OUTRO_END],
    [1, 0, 0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill style={{ background: "#1a0f05" }}>
      <CameraStage frame={frame}>
        <AbsoluteFill>
          <Kitchen />
          <svg
            viewBox="0 0 1080 1920"
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <FruitOnStage id="platano" frame={frame} active={active} laughing={laughing} />
            <FruitOnStage id="mango" frame={frame} active={active} laughing={laughing} />
            <FruitOnStage id="pina" frame={frame} active={active} laughing={laughing} />
            <FruitOnStage id="china" frame={frame} active={active} laughing={laughing} />
            <FruitOnStage id="aguacate" frame={frame} active={active} laughing={laughing} />
          </svg>
        </AbsoluteFill>
      </CameraStage>

      {frame < INTRO_END && <IntroTitle frame={frame} />}
      {frame >= LAUGH_END && <OutroTitle frame={frame} />}

      <Caption frame={frame} line={active} />

      {laughing && (
        <AbsoluteFill
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            paddingBottom: 140,
          }}
        >
          <div
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: 900,
              fontSize: 60,
              color: "#fff",
              textShadow: "0 3px 0 rgba(0,0,0,0.55)",
            }}
          >
            JAJAJAJAJA 😂
          </div>
        </AbsoluteFill>
      )}

      <AbsoluteFill
        style={{
          background: "black",
          opacity: vignette,
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
