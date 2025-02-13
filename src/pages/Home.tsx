import React, { useState } from "react";
// import { Profile } from "./Profile";
// import { Projects } from "./Projects";
import { projects } from "../data/projects";
import CarouselItem from "../components/CarouselItem";

import { Name } from "../types";
import { SkillsIcon } from "../components/SkillsIcon";
import { NewlineText } from "../components/NewLineText";

interface Skill {
  name: Name;
  size: number;
  experience: string;
}

const skills: Skill[] = [
  { name: "React", size: 50, experience: "2 years" },
  { name: "TypeScript", size: 50, experience: "1.5 years" },
  { name: "Python", size: 50, experience: "4 years" },
  { name: "Docker", size: 50, experience: "2 year" },
  { name: "Mysql", size: 50, experience: "2 years" },
  { name: "PostgreSQL", size: 50, experience: "1 years" },
];

const tabs = [
  {
    icon: "aaa",
    label: "Profile",
  },
  {
    icon: "aaa",
    label: "Projects",
  },
  {
    icon: "aaa",
    label: "About",
  },
];

export const Home: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [hoveredSkillName, setHoveredSkillName] = useState<string>("");
  const [expandedItemIndex, setExpandedItemIndex] = useState<null | number>(
    null,
  );

  const toggleExpand = (index: number | null) => {
    setExpandedItemIndex(expandedItemIndex === index ? null : index);
  };

  return (
    <div className="w-full h-screen">
      <header className="sticky top-0 z-10 w-full h-[50px]">
        <nav className="flex justify-between w-full h-full bg-gray-200">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setTabIndex(index)}
              className={`flex items-center justify-center p-4 w-full bg-second cursor-pointer ${
                tabIndex === index
                  ? "text-accent"
                  : "text-font hover:bg-blue-200 "
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="overflow-auto bg-main grid grid-cols-12 gap-4 p-4">
        {/* profile */}
        <div className="col-span-12 w-full h-full flex flex-col justify-center items-center animate-fadeInUp">
          <div className="flex items-center justify-center">
            <div className="relative w-[200%] overflow-hidden">
              <div className="absolute left-0 w-[200%] flex items-center justify-around h-20 animate-scroll">
                {skills.map((skill, index) => (
                  <button
                    key={`first-${index}`}
                    className="bg-transparent border border-transparent flex flex-col justify-center items-center w-[30rem] transform transition-transform hover:scale-110"
                    onMouseEnter={() => setHoveredSkillName(`${skill.name}-1`)}
                    onMouseLeave={() => setHoveredSkillName("")}
                  >
                    {hoveredSkillName === `${skill.name}-1` && (
                      <span className="mt-1 text-accent text-sm">
                        {skill.experience}
                      </span>
                    )}
                  </button>
                ))}
                {skills.map((skill, index) => (
                  <button
                    key={`second-${index}`}
                    className="bg-transparent border border-transparent flex flex-col justify-center items-center w-[30rem] transform transition-transform hover:scale-110"
                    onMouseEnter={() => setHoveredSkillName(`${skill.name}-2`)}
                    onMouseLeave={() => setHoveredSkillName("")}
                  >
                    {hoveredSkillName === `${skill.name}-2` && (
                      <span className="mt-1 text-accent text-sm">
                        {skill.experience}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="text-font">
            <h1 className="text-3xl font-bold text-font">
              Hello! I'm{" "}
              <span className="text-accent">Full Stack Web Developer</span>
            </h1>
            <h3 className="text-xl mt-2">with 2+ years experience</h3>
            <div className="flex w-fit mt-4 space-x-4">
              <button className="bg-transparent border-0 cursor-pointer overflow-hidden outline-none p-0">
                <a
                  href="mailto:haruru898@gmail.com"
                  className="hover:text-gray-300"
                >
                  Email
                </a>
              </button>
              <button className="bg-transparent border-0 cursor-pointer overflow-hidden outline-none p-0">
                <a
                  href="https://github.com/anbyjap"
                  className="hover:text-gray-300"
                >
                  GitHub
                </a>
              </button>
              <button className="bg-transparent border-0 cursor-pointer overflow-hidden outline-none p-0">
                <a
                  href="https://www.linkedin.com/in/haruki-ambai-76a66025b/"
                  className="hover:text-gray-300"
                >
                  LinkedIn
                </a>
              </button>
            </div>
          </div>
        </div>{" "}
        {/* projects */}
        <h1 className="col-span-12 text-3xl text-font font-bold">
          Projects
        </h1>
        {/* <div className="animate-fadeInUp overflow-y-auto mb-8"> */}
        {projects.map((project, i) => (
          <CarouselItem
            key={i}
            name={project.name}
            description={project.description}
            skills={project.skills}
            imgSrc={project.imgSrc}
            link={project.link}
            expanded={i === expandedItemIndex}
            expandedItemIndex={expandedItemIndex}
            hidden={expandedItemIndex !== null && i !== expandedItemIndex}
            onExpand={() => toggleExpand(i)}
          />
        ))}
        {/* </div> */}
        {expandedItemIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => toggleExpand(null)}
          >
            <div
              className="relative bg-white p-6 max-w-4xl w-1/2 h-[80%] overflow-y-auto rounded shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {projects[expandedItemIndex]?.projectScreenshots?.map(
                  (screenshot, index) => (
                    <div key={index}>
                      <img
                        className="w-full h-auto object-contain"
                        src={screenshot}
                        alt={`Screenshot ${index}`}
                      />
                    </div>
                  ),
                )}
              </div>

              <div className="bg-white mt-4">
                <h2 className="text-2xl font-bold">
                  {projects[expandedItemIndex].name}
                </h2>
                <div>
                  <h2 className="flex space-x-2">
                    {projects[expandedItemIndex].skills.map((skillName) => (
                      <SkillsIcon key={skillName} name={skillName} />
                    ))}
                  </h2>
                  <p className="mt-2">
                    <NewlineText
                      text={projects[expandedItemIndex].description}
                    />
                  </p>
                </div>
                {projects[expandedItemIndex].link !== "" && (
                  <div className="flex justify-end mt-4">
                    <a
                      href={projects[expandedItemIndex].link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      ⇒Go and see it
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
