import './banner.css';
import female from '../../assets/female-astr.svg';
import arrow from '../../assets/arrow.svg';


export const Banner = () => {
    return(
    <section className="banner" id="home">
        <span className="left-col">
            <span className="welcome">Welcome to my portfolio.</span>
            <span className="animated-text">Hi! I'm Fatma Atta, a Mobile and Web App Developer</span>
            <p className="summary">Passionate and driven Mobile and Web App Developer with a strong foundation in computer science. Dedicated to creating seamless, user-friendly applications and innovative digital solutions. Explore my portfolio to see my journey and the projects I’ve developed.</p>
            <a href="https://www.upwork.com/freelancers/~01b76ac6bd7c24c57b" target="_blank" className="connect">
                <span className="connect-text">Let's Connect</span>
                <img src={arrow} className='arrow' />
            </a>
        </span>
        <span className="right-col">
            <img src={female} className='astronaut' />
        </span>
    </section>
    )
}
{/* <a href="https://www.vecteezy.com/free-vector/astronaut">Astronaut Vectors by Vecteezy</a> */}