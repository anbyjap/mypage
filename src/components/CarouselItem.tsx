import React from "react";
import { CarouselItemProps } from "../types";
import { SkillsIcon } from "./SkillsIcon";

interface NewCarouselItemProps extends CarouselItemProps {
  onExpand: () => void;
}

const CarouselItem: React.FC<NewCarouselItemProps> = (props) => {
  return (
    <div 
      className="
        sm:h-[250px] sm:min-w-[250px] sm:max-w-[300px] sm:col-span-6
        md:col-span-4
        lg:col-span-3
        2xl:col-span-2
        col-span-6
        flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg hover:shadow-lg"
      onClick={props.onExpand}  
    >
      <div className="grow flex items-center bg-main m-2.5 overflow-hidden text-white rounded-md">
        <img
          src={props.imgSrc}
          alt={props.name}
        />
      </div>
      <div className="h-18">
        <div className="py-1 px-4">
          <div className="flex items-center">
            <h6 className="text-main text-xl font-semibold truncate">
              {props.name}
            </h6>
          </div>
        <div className="group my-1 inline-flex flex-wrap justify-center items-center gap-2">
          <div className="flex flex-wrap gap-sm:block">
            {props.skills.map((skillName) => (
              <SkillsIcon key={skillName} name={skillName} />
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>  
  );
};

export default CarouselItem;
