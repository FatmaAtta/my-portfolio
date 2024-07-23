import "./skills.css"
import { Skill } from './Skill';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import js from '../../assets/js.svg';
import python from '../../assets/python.svg';
import django from '../../assets/django.svg';
import react from '../../assets/react.svg';
import firebase from '../../assets/firebase.svg';
import flutter from '../../assets/flutter.svg';
import dart from '../../assets/dart.svg';
import sql from '../../assets/sql-server.svg';
import cpp from '../../assets/cpp.svg';
import java from '../../assets/java.svg';
import kotlin from '../../assets/kotlin.svg';


const skills=[
    {langName:'HTML', imgSrc: html, id:1},
    {langName:'CSS', imgSrc: css, id:2},
    {langName:'JS', imgSrc: js, id:3},
    {langName:'Python', imgSrc: python, id:4},
    {langName:'Django', imgSrc: django, id:5},
    {langName:'React', imgSrc: react, id:6},
    {langName:'Java', imgSrc: java, id:8},
    {langName:'sqlServer', imgSrc: sql, id:13},
    {langName:'C++', imgSrc: cpp, id:7},
    {langName:'Kotlin', imgSrc: kotlin, id:9},
    {langName:'Dart', imgSrc: dart, id:10},
    {langName:'Flutter', imgSrc: flutter, id:11},
    {langName:'Firebase', imgSrc: firebase, id:12},
]

const skillsMap = skills.map(skill =>
    <Skill 
        logo={skill.imgSrc}
        key={skill.id}
        langName={skill.langName}
    />
);

export const Skills = () => {
    return(
        <div className="skills-container">
            <span className="title">Skills</span>
            <div className="skills-flex">
                {skillsMap}
            </div>
        </div>
    );
}