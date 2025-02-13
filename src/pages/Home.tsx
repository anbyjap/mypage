import React, { useState } from "react";
import { projects } from "../data/projects";
import CarouselItem from "../components/CarouselItem";

import { Name } from "../types";
import { ProjectModal } from "../components/ProjectModal";

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
    <div className="w-full h-svh bg-main">
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

      <main className="grid grid-cols-12 gap-4 p-4">
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
        </div>
        {/* projects */}
        <h1 className="col-span-12 text-3xl text-font font-bold">
          Projects
        </h1>

        {projects.map((project, i) => (
          <CarouselItem
            key={i}
            name={project.name}
            description={project.description}
            skills={project.skills}
            imgSrc={project.imgSrc}
            link={project.link}
            onExpand={() => toggleExpand(i)}
          />
        ))}
      </main>
      {expandedItemIndex !== null && 
        <ProjectModal 
          project={projects[expandedItemIndex]}
          onCloseModal={() => setExpandedItemIndex(null)}
        />
      }
    </div>
  );
};
