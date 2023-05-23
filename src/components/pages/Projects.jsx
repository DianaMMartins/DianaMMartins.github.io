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
      <Arrow style={style} />
    </section>
  );
};
