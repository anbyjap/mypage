import React from "react";
import { CarouselItemProps } from "../types";

interface NewCarouselItemProps extends CarouselItemProps {
  onExpand: () => void;
}

const CarouselItem: React.FC<NewCarouselItemProps> = (props) => {
  return (
    <div
      onClick={props.onExpand}
      className={`
        col-span-6 sm:col-span-3
        bg-white rounded overflow-hidden cursor-pointer
        max-w-sm hover:shadow-card
      `}
    >
      <div className="flex flex-col justify-between">
        <img
          src={props.imgSrc}
          alt={props.name}
          className="object-scale-down flex flex-col justify-between flex-grow"
        />
        <div className="p-3">
          <h5 className="text-xl font-semibold truncate">{props.name}</h5>
          {/* <div className="flex flex-wrap gap-sm:block">
            {props.skills.map((skillName) => (
              <SkillsIcon key={skillName} name={skillName} />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
