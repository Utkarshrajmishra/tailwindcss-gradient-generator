import Select from "react-select";
import { FC } from "react";
import { Styles } from "../constants/styles";

type Options = {
  label: string;
  value: string;
};

interface DropDownProps {
  options: Options[];
}

const DropDown: FC<DropDownProps> = ({ options }) => {
  return (
    <>
      <Select styles={Styles} options={options} />
    </>
  );
};

export default DropDown;
