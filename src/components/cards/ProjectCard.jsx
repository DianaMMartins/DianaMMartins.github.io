export const ProjectCard = ({ project }) => {
  const { name, description, icon, source } = project;

  return (
    <section className="project">
      <article className="project-card">
        <section className="content">
          <a target="_blank" rel="noreferrer" href={project.link}>
            <h3>{name}</h3>
          </a>
          <p>{description}</p>
          <a id="banner" target="_blank" rel="noreferrer" href={source}>
            Source
          </a>
        </section>

        <img src={require(`../../data/images${icon[0]}`)} alt={name} />
      </article>
    </section>
  );
};
