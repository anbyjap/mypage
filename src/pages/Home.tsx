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
    <div className="w-full h-svh bg-second">
      <header className="sticky top-0 z-10 w-full h-[50px]">
        <nav className="flex justify-between w-full h-full bg-gray-200">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setTabIndex(index)}
              className={`flex items-center justify-center p-4 w-full bg-main cursor-pointer ${
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

      <body className="h-fit bg-second flex justify-center items-center">
        <div className="h-fit sm:w-[80%] bg-second grid grid-cols-12 gap-4 p-4">
          {/* profile */}
          <div className="col-span-12 w-full h-full flex flex-col justify-center items-center animate-fadeInUp">
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
          {/* Education */}
          <h1 className="col-span-12 text-3xl text-font font-bold">
            About
          </h1>
          <ol className="col-span-12 relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-font dark:text-gray-500">April 2019 - March 2022</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">The University of Aizu</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-font">Bachelor of Computer Science </p>
                <a href="https://u-aizu.ac.jp/en/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-font dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg></a>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-font dark:text-gray-500">Janualy 2021 - Current</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Web Developer in Aizulab</h3>
                <p className="text-base font-normal text-gray-500 dark:text-font">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-font dark:text-gray-500">Janualy 2025 - Current</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Volunteer as Web developer in Murphy charitable foundation Uganda</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-font">Contributing to development of the loan app for women in Uganda to borrow money from government through this app.</p>
                <a href="https://murphycharity.org/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg></a>
            </li>
                </ol>
        </div>


      </body>
      {expandedItemIndex !== null && 
        <ProjectModal 
          project={projects[expandedItemIndex]}
          onCloseModal={() => setExpandedItemIndex(null)}
        />
      }
    </div>
  );
};
