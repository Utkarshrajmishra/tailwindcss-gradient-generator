import React, { FC } from "react";

interface Gradient {
  from: string;
  to: string;
  via?: string;
  direction: string;
  thirdColor: boolean;
}

interface Props {
  GradientProps: Gradient;
}

const GradientBox: FC<Props> = ({ GradientProps }) => {
  const {
    from = "cyan-500",
    to = "pink-500",
    via = "purple-500",
    direction = "r",
    thirdColor = false,
  } = GradientProps;

  return (
    <div
      className={`h-[300px] w-[300px] bg-gradient-to-${direction} ${
        thirdColor
          ? `from-${from} via-${via} to-${to}`
          : `from-${from} to-${to}`
      }`}
    ></div>
  );
};

export default GradientBox;
