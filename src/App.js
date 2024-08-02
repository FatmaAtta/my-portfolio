import './App.css';
import { NavBar } from './components/navbar/NavBar';
import { Banner } from './components/banner/Banner';
import { Skills } from './components/skills/Skills';

function App() {
  return (
    <>
      {/* <div className='banner-img'> */}
          <NavBar />
          <Banner />
      {/* </div> */}
      {/* <div className='gradient'> */}
          <Skills />
      {/* </div> */}
    </>
      
  );
}

export default App;
