import { useState } from "react";
import projects from "../../data/projects.json";
import { ReactComponent as Arrow } from "../../data/images/arrow.svg";
import { ProjectCard } from "../cards/ProjectCard";

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(true);
  const style = { opacity: isVisible ? 1 : 0 };

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    bottom ? setIsVisible(false) : setIsVisible(true);
  };

  let smoothScrollIntervalId;

  const handleHover = (e) => {
    const elementToScroll = e.target.parentNode.previousSibling;
    if (!elementToScroll) return;

    const elementScrollHeight = elementToScroll.scrollHeight;
    const scrollSpeed = 4; //(adjust this for scroll speed)

    clearInterval(smoothScrollIntervalId);

    smoothScrollIntervalId = setInterval(() => {
      const reachedScrollableBottom =
        elementToScroll.scrollTop + elementToScroll.offsetHeight ===
        elementScrollHeight;

      if (reachedScrollableBottom) {
        clearInterval(smoothScrollIntervalId);
      } else {
        const direction = 1; // -1 goes up
        elementToScroll.scrollTop += direction * scrollSpeed;
      }
    }, 30); //(adjust this for smoother or slower scrolling)
  };

  return (
    <section className="projects page">
      <section className="scrollbox" onScroll={handleScroll}>
        <h2>My projects</h2>
        <section className="scrollbox-inner" id="projects">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </section>
      </section>
      <section
        style={style}
        onMouseOver={handleHover}
        onMouseOut={() => {
          clearInterval(smoothScrollIntervalId);
        }}
        className="scroll"
      >
        <Arrow />
      </section>
    </section>
  );
};
