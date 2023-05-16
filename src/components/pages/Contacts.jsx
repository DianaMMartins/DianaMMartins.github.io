import { ReactComponent as Linkedin } from "../../data/images/linkedin.svg";
import { ReactComponent as Github } from "../../data/images/github.svg";

export const Contacts = () => {
  return (
    <section className="page scrollbox">
      <h2>Contact me</h2>
      <section className="scrollbox-inner" >

      <a
        className="link-card"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/DianaMMartins"
      >
       <Github />
      </a>
      <a
        className="link-card"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/diana-martins/"
      >
        <Linkedin />
      </a>
      <a
        className="link-card"
        target="_blank"
        rel="noreferrer"
        href="mailto:dian_marq_mart@hotmail.com"
      >
        Send me an email
      </a>
      <a
        className="link-card"
        target="_blank"
        rel="noreferrer"
        href="https://northcoders.com/projects/apr-2023/dashing-dragons"
      >
        See my final project from Northcoders
      </a>
      </section>

    </section>
  );
};
