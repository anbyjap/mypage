import React from "react";
import { CarouselItemProps } from "../types";
import { SkillsIcon } from "./SkillsIcon";
import { NewlineText } from "./NewLineText";

interface ProjectModalProps {
    project: CarouselItemProps;
    onCloseModal: () => void;
}

export const ProjectModal:React.FC<ProjectModalProps> = ({project, onCloseModal}) => {
    return (
        <div className="fixed z-20 inset-0 bg-gray-500 bg-opacity-75">
            <div 
                className="fixed inset-0 flex items-center justify-center"
            >
                <div 
                    onClick={() => onCloseModal()} 
                    className="fixed flex justify-center items-center inset-0 transition-opacity"
                >
                    <div 
                        onClick={e => e.stopPropagation()}
                        className="flex flex-col bg-second w-[90%] h-2/3 sm:h-fit sm:w-2/3 p-3"
                    >
                        <div
                            className="sticky top-0 z-30 flex items-center justify-between p-2 border-b border-accent"
                        >
                            <div className="flex flex-wrap gap-2">
                                {project.skills.map((skillName) => (
                                    <SkillsIcon key={skillName} name={skillName} />
                                ))}
                            </div>
                            <span className="text-xl text-font">&darr;</span>
                        </div>
                        <div className="overflow-y-auto py-2">
                            <NewlineText text={project.description} />
                            {project.link !== "" && (
                            <div className="flex justify-end mt-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-accent hover:underline"
                                >
                                    ⇒Go and see it
                                </a>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}