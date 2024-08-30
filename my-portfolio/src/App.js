import './App.css';
import { NavBar } from './components/navbar/NavBar';
import { Banner } from './components/banner/Banner';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { HamProvider } from './components/hamburger/HamProvider';
import { HamWrapper } from './components/hamburger/HamWrapper';

// tarakseet??

function App() {
  return (
    <>
      <HamProvider>
        <HamWrapper />
          <NavBar />
          <Banner />
          <Skills />
          <Projects />
      </HamProvider>

    </>
      
  );
}

export default App;
