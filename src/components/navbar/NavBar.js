// you can import images individually or you can use the absolute path
// when i tried the absolute path, it didnt work
import linkedin from '../../assets/Linkedin.svg'
import github from '../../assets/Github.svg'
import behance from '../../assets/Behance.svg'
import dribbble from '../../assets/Dribble.svg'
import upwork from '../../assets/upwork.svg'


export const NavBar = () => {
  return (
    <div classname="navBar">
        <span classname="social-nav">
          <a href ="https://www.linkedin.com/in/fatmaatta/" target="_blank"><img src={linkedin} /></a>
          <a href ="https://github.com/FatmaAtta" target="_blank"><img src={github} /></a>
          <a href ="https://www.behance.net/fatmaatta_" target="_blank"><img src={behance} /></a>
          <a href ="https://github.com/FatmaAtta" target="_blank"><img src={dribbble} /></a>
        </span>
        <span classname="anchor-nav">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </span>
        <span classname="connect-nav">
          <a href ="https://www.upwork.com/freelancers/~01b76ac6bd7c24c57b" target="_blank">
            <span>
              Let's Connect
            </span>
            <img src={upwork} />
          </a>
        </span>
    </div>
  );
}