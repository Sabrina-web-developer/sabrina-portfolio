import React from 'react'
// import './SkillSwiper.css'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import {Autoplay, Navigation} from 'swiper'
// import {FaReact,FaHtml5,FaCss3,FaPhp} from 'react-icons/fa'
// import{TbBrandJavascript} from 'react-icons/tb'
import Marquee from "react-fast-marquee"
import skillImg from '../skillImg'
import './Skills.css'
// import 'swiper/css';
const skillsData = [
    'AWS',
    'Azure',
    'CSS',
    'Git',
    'HTML',
    'JAVASCRIPT',
    'Materialui',
    'microsoftoffice',
    'mongoDB',
    'Photoshop',
    'Php',
    'React',
    'Tailwind',
]
const Skills = () => {
    
  return (

<div className="skillsContainer">
    <div className="skill--scroll">
        <h2>Skills</h2>
        <Marquee 
            gradient={false} 
            speed={80} 
            pauseOnHover={true}
            pauseOnClick={true} 
            delay={0}
            play={true} 
            direction="left"
        >
            {skillsData.map((skill, id) => (
                <div className="skill--box" key={id} >
                    <img src={skillImg(skill)} alt={skill} />
                    <h3 >
                        {skill}
                    </h3>
                </div>
            ))}
        </Marquee>
    </div>
</div>
  )
}

export default Skills
