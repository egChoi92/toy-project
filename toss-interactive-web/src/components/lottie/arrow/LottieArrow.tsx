import { CSSProperties, FC } from "react";
import Lottie from "react-lottie";
import * as animationData from "./lottie-arrow.json";

interface LottieArrow {
  style: CSSProperties;
}

const LottieArrow: FC<LottieArrow> = ({ style }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={style}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default LottieArrow;
