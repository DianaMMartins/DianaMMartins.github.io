import { useState } from "react";
import svgs from "../../data/skills.json";
import {
  isScrollOnElemAtBottomFn,
  ScrollDownArrow,
} from "../utils/ScrollDownArrow";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollVisibility = (e) => {
    console.log(e, e.scrollHeight, e.scrollTop, e.clientHeight);
    setIsVisible(!isScrollOnElemAtBottomFn(e));
  };

  return (
    <section className="skills page">
      <section
        className="scrollbox"
        onScroll={(e) => handleScrollVisibility(e.target)}
      >
        <h2>Skills</h2>
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
      <ScrollDownArrow isVisible={isVisible} />
    </section>
  );
};
