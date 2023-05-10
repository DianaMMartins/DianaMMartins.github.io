import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { AboutMe } from './components/pages/AboutMe';
import { SidebarLeft } from './components/sidebars/SidebarLeft';
import { SidebarRight } from './components/sidebars/SidebarRight';

function App() {
  return (
    <div className="App">
    <SidebarLeft />
    <Navbar />
    <AboutMe />
    <Footer />
    <SidebarRight />
    </div>
  );
}

export default App;