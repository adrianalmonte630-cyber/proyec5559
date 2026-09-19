import { Composition } from "remotion";
import { FrutasDominicanas } from "./FrutasDominicanas";

export const MyComposition = () => {
  return (
    <Composition
      id="FrutasDominicanas"
      component={FrutasDominicanas}
      durationInFrames={900}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
