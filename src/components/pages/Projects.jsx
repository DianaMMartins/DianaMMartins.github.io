import { useState } from "react";
import projects from "../../data/projects.json";
import { ProjectCard } from "../cards/ProjectCard";
import {
  isScrollOnElemAtBottomFn,
  ScrollDownArrow,
} from "../utils/ScrollDownArrow";

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScrollVisibility = (e) => {
    setIsVisible(!isScrollOnElemAtBottomFn(e));
  };

  return (
    <section className="projects page">
      <section
        className="scrollbox"
        onScroll={(e) => handleScrollVisibility(e.target)}
      >
        <h2>My projects</h2>
        <section className="scrollbox-inner" id="projects">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </section>
      </section>
      <ScrollDownArrow isVisible={isVisible} />
    </section>
  );
};
