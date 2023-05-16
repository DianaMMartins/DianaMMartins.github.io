import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
// import "../Styles/Components/Navbar.scss";

const linksData = [
  { path: "/about-me", label: "About me" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/contacts", label: "Contacts" },
];

const createLinkData = (currentPath) => {
  if (currentPath === "/") {
    return [...linksData];
  } else {
    const newLinksData = linksData.filter((link) => link.path !== currentPath);
    newLinksData.unshift({ path: "/", label: "Home" });
    return newLinksData;
  }
};

export const Navbar = () => {
  const currentPath = useLocation().pathname;
  const [navLinks, setNavLinks] = useState(createLinkData(currentPath));

  const handleClick = (currentPath) => {
    setNavLinks(createLinkData(currentPath));
  };

  return (
    <section className="navbar">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          onClick={() => handleClick(link.path)}
        >
          <p className="navbar-title">{link.label}</p>
        </Link>
      ))}
    </section>
  );
};
