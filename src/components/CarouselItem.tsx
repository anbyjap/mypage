import React, { useState } from "react";
import { NewlineText } from "./NewLineText";
import { CarouselItemProps } from "../types";
import { SkillsIcon } from "./SkillsIcon";

interface NewCarouselItemProps extends CarouselItemProps {
  onExpand: () => void;
  expanded: boolean;
  hidden: boolean;
  expandedItemIndex: null | number;
  windowWidth: number;
}

const CarouselItem: React.FC<NewCarouselItemProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (props.hidden) return null;

  return (
    <div
      onClick={props.onExpand}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        bg-white rounded shadow overflow-hidden cursor-pointer transition-transform 
        duration-300 transform ${isHovered ? "scale-105" : ""}
        ${props.expanded ? "ring-4 ring-blue-300" : ""}
        mb-4
      `}
    >
      <img
        src={props.imgSrc}
        alt={props.name}
        className="w-full h-[140px] p-4 pt-0 object-contain"
      />

      <div className="p-4">
        <h5 className="text-xl font-semibold mb-2">{props.name}</h5>

        {props.windowWidth > 768 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {props.skills.map((skillName) => (
              <SkillsIcon key={skillName} name={skillName} />
            ))}
          </div>
        )}

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
  );
};

export default CarouselItem;
