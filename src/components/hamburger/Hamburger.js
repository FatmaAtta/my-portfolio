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
        <div className="hamburger-menu">
            <img src={hamIcon} className= {`ham-icon {isHamOpen ? 'ham-open' : 'ham-closed'}`} onClick={hamToggle} />
            <a href="" onClick={hamToggle}><div className='ham-link'>Home</div></a>
            <a href="" onClick={hamToggle}><div className='ham-link'>Skills</div></a>
            <a href="" onClick={hamToggle}><div className='ham-link'>Projects</div></a>
            <a href="" onClick={hamToggle}><div className='ham-link'>Contact Me</div></a>
        </div>
    );

};