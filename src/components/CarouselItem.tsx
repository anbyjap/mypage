import React from "react";
import { NewlineText } from "./NewLineText";
import { CarouselItemProps } from "../types";
import { SkillsIcon } from "./SkillsIcon";

interface NewCarouselItemProps extends CarouselItemProps {
  onExpand: () => void;
  expanded: boolean;
  hidden: boolean;
  expandedItemIndex: null | number;
}

const CarouselItem: React.FC<NewCarouselItemProps> = (props) => {
  if (props.hidden) return null;

  return (
    <div
      onClick={props.onExpand}
      className={`
        col-span-6 sm:col-span-3
        bg-white rounded overflow-hidden cursor-pointer
        max-w-sm hover:shadow-card
        ${props.expanded ? "ring-4 ring-blue-300" : ""}
      `}
    >
      <div className="flex h-full flex-col justify-between">
        <img
          src={props.imgSrc}
          alt={props.name}
          className="sm:h-[50px] md:h-[200px] object-contain flex flex-col justify-between flex-grow"
        />
        <div className="p-3 max-h-[150px] sm:h-[20px] md:h-[50px]">
          <h5 className="text-xl font-semibold truncate">{props.name}</h5>
          {/* <div className="flex flex-wrap gap-sm:block">
            {props.skills.map((skillName) => (
              <SkillsIcon key={skillName} name={skillName} />
            ))}
          </div> */}
          {props.expanded && (
            <div className="mt-4">
              <div className="flex items-center justify-between pb-2 border-b">
                <div className="flex flex-wrap gap-2">
                  {props.skills.map((skillName) => (
                    <SkillsIcon key={skillName} name={skillName} />
                  ))}
                </div>
                <span className="text-xl">&darr;</span>
              </div>
              <div className="mt-2">
                <NewlineText text={props.description} />
              </div>
              {props.link !== "" && (
                <div className="flex justify-end mt-4">
                  <a
                    href={props.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    ⇒Go and see it
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
