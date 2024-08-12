import '../navbar/navbar.css';
import './hamburger.css';
import upwork from '../../assets/upwork.svg';

export const HamburgerMenu = () => {
    return(
        <div className="hamburger-menu">
            <a href=""><div className='ham-link'>Home</div></a>
            <a href=""><div className='ham-link'>Skills</div></a>
            <a href=""><div className='ham-link'>Projects</div></a>
            <a href=""><div className='ham-link'>Contact Me</div></a>
        </div>
    );

};