import React, { useRef, useState } from "react";
import { projects } from "../data/projects";
import CarouselItem from "../components/CarouselItem";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { ProjectModal } from "../components/ProjectModal";

export function scrollToElement(
  element: HTMLHeadingElement | null,
  behavior: ScrollBehavior = "smooth"
): void {
  if (!element) return;
  const elementY = element.getBoundingClientRect().top + window.pageYOffset;
  const targetPosition = elementY - 80;
  window.scrollTo({ top: targetPosition, behavior });
}

export const Home: React.FC = () => {
  const projectsRef = useRef<HTMLHeadingElement>(null);
  const aboutRef = useRef<HTMLHeadingElement>(null);
  const [expandedItemIndex, setExpandedItemIndex] = useState<null | number>(
    null,
  );

  const toggleExpand = (index: number | null) => {
    setExpandedItemIndex(expandedItemIndex === index ? null : index);
  };

  return (
    <div className="w-full h-svh bg-second">
      <body className="h-fit bg-second flex justify-center items-center p-4 sm:p-0">
        <div id="profile" className="sm:w-[80%] bg-second grid grid-cols-12 gap-4">
          <header className="sticky top-4 col-span-12 z-10 h-[50px] w-full bg-second border rounded-lg">
            <nav className="flex justify-between items-center w-full h-full">
              <button
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className="flex items-center justify-center p-4 w-full bg-transparent cursor-pointer text-font hover:opacity-70"
              >
                Profile
              </button>
              <div className="h-2/3 w-[1px] bg-font" />
              <button
                onClick={() => scrollToElement(projectsRef.current)}
                className="flex items-center justify-center p-4 w-full bg-transparent cursor-pointer text-font hover:opacity-70"
              >
                Projects
              </button>
              <div className="h-2/3 w-[1px] bg-font" />
              <button
                onClick={() => scrollToElement(aboutRef.current)}
                className="flex items-center justify-center p-4 w-full bg-transparent cursor-pointer text-font hover:opacity-70"
              >
                About
              </button>
            </nav>
          </header>

          {/* profile */}
          <div className="col-span-12 h-[400px] sm:h-[700px] w-full flex items-center animate-fadeInUp">
            <div className="text-font">
              <h1 className="text-3xl font-bold text-font">
                Hello! I'm{" "}
                <span className="text-accent">Full Stack Web Developer</span>
              </h1>
              <h3 className="text-xl mt-2">with 2+ years experience</h3>
              <div className="flex w-fit mt-4 space-x-4">
                <button className="text-left text-font  bg-transparent border-0 cursor-pointer outline-none p-0">
                  <a
                    href="mailto:haruru898@gmail.com"
                    className="hover:text-gray-300"
                  >
                    <FaMailBulk size={25} />
                  </a>
                </button>
                <button className=" text-left text-font bg-transparent border-0 cursor-pointer outline-none p-0">
                  <a
                    href="https://github.com/anbyjap"
                    className="hover:text-gray-300"
                  >
                    <FaGithub size={25} />
                  </a>
                </button>
                <button className="text-left text-font bg-transparent border-0 cursor-pointer outline-none p-0">
                  <a
                    href="https://www.linkedin.com/in/haruki-ambai-76a66025b/"
                    className="hover:text-gray-300"
                  >
                    <FaLinkedin size={25} />
                  </a>
                </button>
              </div>

            </div>
          </div>
          {/* projects */}
          <h1 ref={projectsRef} className="col-span-12 text-3xl text-font font-bold">
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
          {/* About */}
          <h1 ref={aboutRef} className="col-span-12 text-3xl text-font font-bold">
            About
          </h1>
          <ol className="col-span-12 relative border-s border-main ">
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-fontSub">April 2019 - March 2022</time>
                <h3 className="text-lg font-semibold text-font">The University of Aizu</h3>
                <p className="mb-4 text-base font-normal text-font">Bachelor of Computer Science </p>
                <a 
                  href="https://u-aizu.ac.jp/en/"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-font bg-main rounded-lg hover:shadow-lg"
                >  
                  Learn more
                  <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-fontSub">Janualy 2021 - Current</time>
                <h3 className="text-lg font-semibold text-font">Web Developer in Aizulab</h3>
                <p className="text-base font-normal text-font">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-fontSub">Janualy 2025 - Current</time>
                <h3 className="text-lg font-semibold text-font">Volunteer as Web developer in Murphy charitable foundation Uganda</h3>
                <p className="mb-4 text-base font-normal text-font">Contributing to development of the loan app for women in Uganda to borrow money from government through this app.</p>
                <a
                  href="https://murphycharity.org/"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-font bg-main rounded-lg hover:shadow-lg"
                >
                  Learn more
                  <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
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
