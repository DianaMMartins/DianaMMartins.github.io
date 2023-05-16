import projects from "../../data/projects.json";

export const Projects = () => {
  return (
    <section className="page scrollbox">
      <h2>My projects</h2>
      <section className="scrollbox-inner">
        {projects.map((project) => {
          return (
            <article className="project-card">
              <a
                className="project-link"
                target="_blank"
                rel="noreferrer"
                href={project.link}
              >
                <article className="project-link">
                  <img
                    src={require(`../../data/images${project.icon[0]}`)}
                    alt={project.name}
                    width="300"
                  />
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <p>{project.type}</p>
                </article>
              </a>
              <a
                className="project-code"
                target="_blank"
                rel="noreferrer"
                href={project.source}
              >
                Project github
              </a>
            </article>
          );
        })}
      </section>
    </section>
  );
};
