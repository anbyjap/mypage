import React, { useState } from "react";
import { Profile } from "./Profile";
import { Projects } from "./Projects";

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

  return (
    <div className="w-full flex flex-col h-screen">
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

      <main className="flex-1 p-4 overflow-auto bg-main">
        <Profile />
        <Projects />
      </main>
    </div>
  );
};
