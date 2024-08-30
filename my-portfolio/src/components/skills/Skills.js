import "./skills.css";
import "./slider.css";
import { Navigation, Pagination, Scrollbar, A11y, Keyboard, Mousewheel, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Skill } from './Skill';
import html from '../../assets/html.svg';
import next from '../../assets/next.svg';
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
    <SwiperSlide>
        <Skill 
            logo={skill.imgSrc}
            key={skill.id}
            langName={skill.langName}
        />
    </SwiperSlide>
);

export const Skills = () => {

    return(
        <div className="skills-container" id="skills">
            <h1 className="title">Skills</h1>
            <Swiper 
                modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard, Mousewheel, Autoplay]}
                spaceBetween={-100}
                loop={true}
                mousewheel={true}
                grabCursor={true}
                autoplay={{
                    delay:2000,
                    disableOnInteraction:false,
                }}
                breakpoints={{
                    320: {
                      slidesPerView: 1,
                      slidesPerGroup: 1,
                    },
                    480: {
                      slidesPerView: 2,
                      slidesPerGroup: 2,
                    },
                    640: {
                      slidesPerView: 3,
                      slidesPerGroup: 3,
                    },
                    769: {
                      slidesPerView: 4,
                      slidesPerGroup: 4,
                    //   spaceBetween={-50},
                    },
                    1100: {
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                    },
                  }}
                navigation={{ nextEl:'.custom-next', prevEl: '.custom-prev'}}
                keyboard={{enabled: true,}}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
            >
            <img src={next} className="custom-prev" /> 
            <div className="skills-map">
                {skillsMap}
            </div>
            <img src={next} className="custom-next" /> 
            </Swiper>
        </div>
    );
}