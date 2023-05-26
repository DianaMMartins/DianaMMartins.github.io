export const ProjectCard = ({ project }) => {
  const { name, description, icon, source } = project;

  return (
    <section className="project">
      <article className="project-card">
        <section className="content">
          <h3>{name}</h3>

          <p>{description}</p>
          <section className="links">
            <a id="banner" target="_blank" rel="noreferrer" href={source}>
              Source
            </a>
            <a id="banner" target="_blank" rel="noreferrer" href={project.link}>
              Hosted
            </a>
          </section>
        </section>

        <img src={require(`../../data/images${icon[0]}`)} alt={name} />
      </article>
    </section>
  );
};
