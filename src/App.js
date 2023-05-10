import './App.css';
import { AboutMe } from './components/page/AboutMe';
import { SidebarLeft } from './components/sidebars/SidebarLeft';
import { SidebarRight } from './components/sidebars/SidebarRight';

export const App = () => {
  return (
    <div className="App">
    <SidebarLeft />
    <AboutMe />
    <SidebarRight />
    </div>
  );
}
