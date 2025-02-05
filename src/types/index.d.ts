import {icons} from "../icons/icons";

export type Name = keyof typeof icons;

interface CarouselItemProps {
  name: string;
  skills: Array<Name>;
  description: string;
  imgSrc: string;
  projectScreenshots?: string[];
  link: string;
}

export type { CarouselItemProps };
