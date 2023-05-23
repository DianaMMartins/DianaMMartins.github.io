import { ReactComponent as Linkedin } from "../data/images/linkedin.svg";
import { ReactComponent as Github } from "../data/images/github.svg";

export const Footer = () => {
  return (
    <section className="footer">
      <section className="socials">
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
      </section>
      <section className="copyrights">
        <p>Made with ❤ by Diana Martins © 2023</p>
      </section>
    </section>
  );
};
