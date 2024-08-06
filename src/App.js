import './App.css';
import { NavBar } from './components/navbar/NavBar';
import { Banner } from './components/banner/Banner';
import { Skills } from './components/skills/Skills';
import { HamProvider } from './components/hamburger/HamProvider';

function App() {
  return (
    <>
      <HamProvider>
          <NavBar />
          <Banner />
          <Skills />
      </HamProvider>
    </>
      
  );
}

export default App;
