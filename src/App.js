import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AboutMe } from "./components/pages/AboutMe";
import { SidebarLeft } from "./components/sidebars/SidebarLeft";
import { SidebarRight } from "./components/sidebars/SidebarRight";
import "./App.css";
import { Contacts } from "./components/pages/Contacts";
import { Skills } from "./components/pages/Skills";
import { Projects } from "./components/pages/Projects";
import { Home } from "./components/Home/Home";

function App() {
  //know user window.location.pathname
  //send info to navbar and sidebars

  return (
    <sections className="app">
      <SidebarLeft />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
      <SidebarRight />
      <Footer />
    </sections>
  );
}

export default App;
