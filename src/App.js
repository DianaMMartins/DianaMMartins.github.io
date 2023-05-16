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
import { Home } from "./components/pages/Home";
// import { ProjectCard } from "./components/pages/ProjectCard";

function App() {
  return (
    <section className="app">
      <SidebarLeft />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/projects/:project_name" element={<ProjectCard />} /> */}
        <Route path="/skills" element={<Skills />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <SidebarRight />
      <Footer />
    </section>
  );
}

export default App;
