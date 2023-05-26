import svgs from "../../data/skills.json";

export const Skills = () => {
  return (
    <section className="skills page">
      <h2>Skills</h2>
      <section className="scrollbox">
        <ul className="scrollbox-inner">
          {svgs.map((imageObj) => {
            return (
              <li key={imageObj.name}>
                <a target="_blank" rel="noreferrer" href={imageObj.link}>
                  <img
                    src={require(`../../data/images/svgSkills${imageObj.url}`)}
                    alt={imageObj.name}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};
