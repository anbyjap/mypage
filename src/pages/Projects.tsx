import { useState, useEffect } from "react";
import { projects } from "../data/projects";
import CarouselItem from "../components/CarouselItem";

export const Projects = () => {
  const [expandedItemIndex, setExpandedItemIndex] = useState<null | number>(
    null,
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const toggleExpand = (index: number | null) => {
    if (windowWidth <= 768) return; // disable expansion on small screens
    setExpandedItemIndex(expandedItemIndex === index ? null : index);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>

      {/* Project grid/Carousel container */}
      <div className="project_wrapper animate-fadeInUp overflow-y-auto mb-8">
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
            windowWidth={windowWidth}
          />
        ))}
      </div>

      {/* Modal for expanded project */}
      {expandedItemIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => toggleExpand(null)}
        >
          <div
            className="relative bg-white p-6 max-w-4xl w-1/2 h-[80%] overflow-y-auto rounded shadow-lg"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
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
                    <p>{skillName}</p>
                    // <SkillsIcon key={skillName} name={skillName} />
                  ))}
                </h2>
                <p className="mt-2">
                  {/* <NewlineText text={projects[expandedItemIndex].description} /> */}
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
    </div>
  );
};
