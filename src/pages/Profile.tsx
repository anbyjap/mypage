import React, { useState } from "react";
import selfPhoto from "../images/faceimage.png";
import { Name } from "../types";

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

export const Profile: React.FC = () => {
  const [hoveredSkillName, setHoveredSkillName] = useState<string>("");

  return (
    <div className="w-full flex flex-col sm:flex-row items-center text-gray-900">
      <div className="w-full h-full flex items-center justify-center">
        <img alt="Profile" src={selfPhoto} />
      </div>

      <div className="w-full h-full flex flex-col justify-center items-center animate-fadeInUp p-4">
        <div className="flex items-center justify-center min-h-[10vh]">
          <div className="relative w-[200%] h-20 overflow-hidden">
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
          <h1 className="text-3xl font-bold text-font mt-4">
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
    </div>
  );
};

export default Profile;
