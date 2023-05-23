import { ReactComponent as Linkedin } from "../../data/images/linkedin.svg";
import { ReactComponent as Github } from "../../data/images/github.svg";
import { ReactComponent as Email } from "../../data/images/email.svg";

export const Contacts = () => {
  return (
    <section className="contacts page">
      <h2>Contact me</h2>
      <section className="scrollbox">
        <section className="scrollbox-inner" id="contacts">
          <a
            id="contact-link"
            className="link-card"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/DianaMMartins"
          >
            <p>Github</p> <Github />
          </a>
          <a
            id="contact-link"
            className="link-card"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/diana-martins/"
          >
            <p>Linkedin</p>
            <Linkedin />
          </a>
          <a
            id="contact-link"
            className="link-card"
            target="_blank"
            rel="noreferrer"
            href="mailto:dian_marq_mart@hotmail.com"
          >
            <p>Email</p>
            <Email />
          </a>
        </section>
      </section>
    </section>
  );
};
