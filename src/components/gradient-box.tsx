import  { FC } from "react";

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
  const { from, to, via, direction, thirdColor } = GradientProps;
  const gradientDirection = direction === "r" ? "r" : "b";
  const gradientClass = thirdColor
    ? `from-${from} via-${via} to-${to}`
    : `from-${from} to-${to}`;

  const fullClassName = `h-[300px] w-[300px] bg-gradient-to-${gradientDirection} ${gradientClass}`;

  console.log(fullClassName);

  return <div className={fullClassName}>Gradient Box</div>;
};

export default GradientBox;
