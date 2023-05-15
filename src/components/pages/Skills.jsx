import svgs from "../../data/skills.json";

export const Skills = () => {
  return (
    <section className="page scrollbox">
      <h2>Skills</h2>
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
  );
};
