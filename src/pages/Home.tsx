import React, { useRef, useState } from "react";
import { projects } from "../data/projects";
import CarouselItem from "../components/CarouselItem";
import { FaGithub, FaLinkedin, FaMailBulk, FaCopy } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { ProjectModal } from "../components/ProjectModal";
import toast, { Toaster } from 'react-hot-toast';
import resumeFile from '../../public/Resume.pdf';
import { LearnMoreButton } from "../components/LearnMoreButton";

function scrollToElement(
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
    <div className="w-full h-svh bg-main">
      <body className="h-fit bg-main flex justify-center items-center p-4 sm:p-0">
        <Toaster />
        <div className="sm:w-[80%] bg-main grid grid-cols-12 gap-4">
          <header className="sticky top-4 col-span-12 z-10 h-[50px] w-full bg-main border rounded-lg">
            <nav className="flex justify-between items-center w-full h-full">
              <button
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className="flex items-center justify-center p-4 w-full bg-transparent cursor-pointer text-font hover:opacity-70 focus:opacity-100"
              >
                Profile
              </button>
              <div className="h-2/3 w-[1px] bg-font" />
              <button
                onClick={() => scrollToElement(projectsRef.current)}
                className="flex items-center justify-center p-4 w-full bg-transparent cursor-pointer text-font hover:opacity-70 focus:opacity-100"
              >
                Projects
              </button>
              <div className="h-2/3 w-[1px] bg-font" />
              <button
                onClick={() => scrollToElement(aboutRef.current)}
                className="flex items-center justify-center p-4 w-full bg-transparent cursor-pointer text-font hover:opacity-70 focus:opacity-100"
              >
                About
              </button>
            </nav>
          </header>

          {/* profile */}
          <div className="col-span-12 h-[400px] sm:h-[700px] w-full flex items-center animate-fadeInUp">
            <div className="text-font">
              <div className="flex justify-center flex-col h-32">
                <h1 className="text-3xl font-bold text-font">
                  Hello! I'm{" "}
                  <span className="text-accent">Full Stack Web Developer</span>
                </h1>
                <h3 className="text-xl text-fontSub">with 3+ years experience</h3>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex w-fit space-x-4">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("haruru898@gmail.com");
                      toast.custom(() => (
                        <div
                          className="animate-fadeInDown flex items-center justify-around  bg-main text-font border border-font px-6 py-4 shadow-md rounded-lg"
                        >
                          <FaCopy className="mr-2" />Email copied to clipbooard
                        </div>
                      ));
                    }}
                    className="text-font bg-transparent border-0 cursor-pointer outline-none p-0 hover:opacity-30"
                  >
                      <FaMailBulk size={25} />
                  </button>
                  <button className="text-font bg-transparent border-0 cursor-pointer outline-none p-0 hover:opacity-30 focus:opacity-100">
                    <a
                      href="https://github.com/anbyjap"
                      target="_blank"
                    >
                      <FaGithub size={25} />
                    </a>
                  </button>
                  <button className="text-font bg-transparent border-0 cursor-pointer outline-none p-0 hover:opacity-30 focus:opacity-100">
                    <a
                      href="https://www.linkedin.com/in/haruki-ambai-76a66025b/"
                      target="_blank"
                    >
                      <FaLinkedin size={25} />
                    </a>
                  </button>
                </div>
                <button
                  className="px-4 py-2 text-sm font-medium text-font bg-second rounded-lg hover:shadow-lg"
                >
                  <a className="flex items-center justify-around" href={resumeFile} download="haruki_ambai_resume">
                    <MdFileDownload size={15} className="mr-1" />
                    Download Resume
                  </a>
                </button>
              </div>

            </div>
          </div>
          {/* projects */}
          <h1 ref={projectsRef} className="col-span-12 text-3xl text-font font-bold my-5">
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
          <h1 ref={aboutRef} className="col-span-12 text-3xl text-font font-bold my-5">
            About
          </h1>
          <ol className="col-span-12 relative border-s border-second ml-2 mb-10">
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-fontSub">April 2019 - March 2022</time>
                <h3 className="text-lg font-semibold text-font">The University of Aizu</h3>
                <p className="mb-4 text-font">Bachelor of Computer Science </p>
                <LearnMoreButton link="https://u-aizu.ac.jp/en/" />
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-fontSub">Janualy 2021 - Current</time>
                <h3 className="text-lg font-semibold text-font">Web Developer in Aizulab</h3>
                <p className="text-font">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-fontSub">Janualy 2025 - Current</time>
                <h3 className="text-lg font-semibold text-font">Volunteer as Web developer in Murphy charitable foundation Uganda</h3>
                <p className="mb-4 text-font">Contributing to development of the loan app for women in Uganda to borrow money from government through this app.</p>
                <LearnMoreButton link="https://murphycharity.org/" />
            </li>
          </ol>
        </div>
      </body>
        <footer className="w-full h-[60px] bg-second text-font text-[10px] flex justify-center items-center">
          <p>© 2025 Haruki Ambai. All Rights Reserved.</p>
        </footer>
      {expandedItemIndex !== null && 
        <ProjectModal 
          project={projects[expandedItemIndex]}
          onCloseModal={() => setExpandedItemIndex(null)}
        />
      }
    </div>
  );
};
