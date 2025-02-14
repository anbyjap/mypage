import { icons } from "../icons/icons";
import { Name } from "../types/index";

type Props = {
  name: Name;
  size?: number;
};

const DEFAULT_SIZE = 30;

export const SkillsIcon = ({ name, size = DEFAULT_SIZE }: Props) => {
  const SvgComponent = icons[name];

  return (
    <SvgComponent
      style={{
        height: `${size}px`,
        width: `${size}px`,
        borderRadius: `${size - 20}px`,
        padding: "3px",
      }}
    />
  );
};
