import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { AboutMe } from './components/pages/AboutMe';
import { SidebarLeft } from './components/sidebars/SidebarLeft';
import { SidebarRight } from './components/sidebars/SidebarRight';
import './App.css';
import { Contacts } from './components/pages/Contacs';
import { Skills } from './components/pages/Skills';
import { Projects } from './components/pages/Projects';

function App() {
//know user window.location.pathname
//send info to navbar and sidebars

  return (
    <div className="App">
    <SidebarLeft />
    <Navbar />
    <AboutMe />
    <Footer />
    <SidebarRight />
  <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='about-me' element={<AboutMe />} />
    <Route path='projects' element={<Projects />} />
    <Route path='skills' element={<Skills />} />
    <Route path='contacts' element={<Contacts />} />

  </Routes>
    </div>
  );
}

export default App;