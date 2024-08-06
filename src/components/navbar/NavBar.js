// you can import images individually or you can use the absolute path
// when i tried the absolute path, it didnt work
import linkedin from '../../assets/Linkedin.svg';
import github from '../../assets/Github.svg';
import behance from '../../assets/Behance.svg';

import { useState, createContext } from 'react';
import { HamburgerMenu } from '../hamburger/Hamburger';

import linkgif from '../../assets/Linkedin.gif';
import gitgif from '../../assets/Github.gif';
import behgif from '../../assets/Behance.gif';
import drgif from '../../assets/Dribble.gif';

import dribbble from '../../assets/Dribble.svg';
import upwork from '../../assets/upwork.svg';
import ham from '../../assets/hamburger.svg';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCode, faScrewdriverWrench, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const HamContext = createContext();

export const NavBar = () => {

  const [isHamOpen, setHamOpen] = useState(false);
  const toggleMenu = () => {
    setHamOpen(prevState => ! prevState);
    console.log("toggle");
    console.log(isHamOpen);
  };

  return (
    <div className="navBar">
        <span className="social-nav">
          <a href ="https://www.linkedin.com/in/fatmaatta/" target="_blank" className="link-nav"><img src={linkedin} className="nav-icons nav-icons-logo" id='li' /></a>
          <a href ="https://github.com/FatmaAtta" target="_blank" className="link-nav"><img src={github} className="nav-icons nav-icons-logo" id='gh' /></a>
          <a href ="https://www.behance.net/fatmaatta_" target="_blank" className="link-nav"><img src={behance} className="nav-icons nav-icons-logo" id='bh' /></a>
          <a href ="https://dribbble.com/FatmaAtta" target="_blank" className="link-nav"><img src={dribbble} className="nav-icons nav-icons-logo" id='db' /></a>
          {/* <a href ="https://www.upwork.com/freelancers/~01b76ac6bd7c24c57b" target="_blank" className="link-nav"><img src={upwork} className="nav-icons" /></a> */}
        </span>

        <span className="anchor-nav">
          <a href="#home" className="link-nav">
            <span className="text-nav">Home</span>
            {/* <FontAwesomeIcon icon={faHouse} title="Home" className="anchor-icon-nav nav-icons" /> */}
          </a>
          <a href="#skills" className="link-nav">
            <span className="text-nav">Skills</span>
            {/* <FontAwesomeIcon icon={faScrewdriverWrench} title="Skills" className="anchor-icon-nav nav-icons" /> */}
          </a>
          <a href="#projects" className="link-nav">
            <span className="text-nav">Projects</span>
            {/* <FontAwesomeIcon icon={faCode} title="Projects" className="anchor-icon-nav nav-icons" /> */}
          </a>
          <a href="#contact" className="link-nav">
            <span className="text-nav">Contact Me</span>
            {/* <FontAwesomeIcon icon={faEnvelope} title="Projects" className="anchor-icon-nav nav-icons" /> */}
          </a>
        </span>
        <span className="connect-nav">
          <a href ="https://www.upwork.com/freelancers/~01b76ac6bd7c24c57b" target="_blank" className="link-nav">
            <span className="connect-text-nav text-nav">
              Let's Connect
            </span>
          </a>
          <a href ="https://www.upwork.com/freelancers/~01b76ac6bd7c24c57b" target="_blank" className="link-nav">
            <img src={upwork} className="nav-icons upwork" />
          </a>
        </span>
        <span className='ham'  >
          <img src={ham} className='nav-icons ham' onClick={toggleMenu} />
        </span>
    </div>
  );

}

