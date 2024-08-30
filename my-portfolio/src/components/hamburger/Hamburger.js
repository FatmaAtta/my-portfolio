import '../navbar/navbar.css';
import './hamburger.css';
import upwork from '../../assets/upwork.svg';
import cross from '../../assets/cross.svg';
import ham from '../../assets/hamburger.svg';
import { HamContext } from './HamProvider';
import { useState, createContext, useContext } from 'react';
export const HamburgerMenu = () => {
    const {toggleMenu} = useContext(HamContext);
    const hamToggle = () => {
      toggleMenu();
    }
    const {isHamOpen} = useContext(HamContext) 
    const hamIcon = isHamOpen? cross: ham;
    return(
        <div className={`hamburger-menu ${isHamOpen ? 'ham-open' : 'ham-closed'}`}>
            {/* <img src={hamIcon} className= "ham-icon" onClick={hamToggle} /> */}
            <a href="" onClick={hamToggle}><div className='link-nav'>Home</div></a>
            <a href="" onClick={hamToggle}><div className='link-nav'>Skills</div></a>
            <a href="" onClick={hamToggle}><div className='link-nav'>Projects</div></a>
            <a href="" onClick={hamToggle}><div className='link-nav'>Contact Me</div></a>
        </div>
    );

};