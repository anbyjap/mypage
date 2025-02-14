import { icons } from "../icons";
import { Name } from "../types/index";

type Props = {
  name: Name;
  size?: number;
  font_color?: string;
};

const DEFAULT_SIZE = 30;
const DEFAULT_FONT_COLOR = 'font';

export const SkillsIcon = ({ name, size = DEFAULT_SIZE, font_color = DEFAULT_FONT_COLOR }: Props) => {
  const SkillIcon = icons[name];
  console.log(size);
  return (
    <SkillIcon
      size={size}
      className={`h-[${size}px] w-[${size}px] rounded-lg text-${font_color}`}
    />
  );
};
