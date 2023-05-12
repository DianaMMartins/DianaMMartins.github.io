import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";

const linksData = [
  { path: "/about-me", label: "About me" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/contacts", label: "Contacts" },
];

export const Navbar = () => {
  const [navLinks, setNavLinks] = useState([...linksData]);

  const handleClick = (currentPath) => {
    if (currentPath === "/") {
      setNavLinks([...linksData]);
    } else {
      const newLinksData = linksData.filter(
        (link) => link.path !== currentPath
      );
      newLinksData.unshift({ path: "/", label: "Home" });
      setNavLinks(newLinksData);
    }
  };

  return (
    <section className="navbar">
      {navLinks.map((link) => (
        <Link key={link.path} to={link.path} onClick={() => handleClick(link.path)}>
          <p>{link.label}</p>
        </Link>
      ))}
    </section>
  );
};
