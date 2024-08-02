import PropTypes from 'prop-types';
import "./skills.css"

export const Skill = ({logo, langName}) => {
    return(
            <img src={logo} alt={langName} className='skill-logo' />
    );
}