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
                <img
                  src={require(`../../data/images/svgSkills${imageObj.url}`)}
                  alt={imageObj.name}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};
