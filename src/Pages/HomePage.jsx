import React from 'react'
import hero from "../assets/hero.jpg"
import SkillImg from '../assets/Skills.jpg'
import '../styles/HomePage.css'
import Typed from "react-typed";
const HomePage = () => {

  return (
    <>
      <main className='main'>
        <div className="text">
          <h2 className='intro'>Hello👋🏻 I am,</h2>
          <h1 className='main-text'>
            {<Typed
              strings={[
                "Saurabh Khatmode",
                "React JS Developer",
                "Front-End Developer",
                "Aspiring MERN Stack Developer"
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop

            />

            }
          </h1>
          <div className="btn">
            <a href="resume.pdf" download="Saurabh Khatmode Resume.pdf"><button className='button'>
              Download Resume
            </button></a>
          </div>
        </div>
        <div className="hero">
          <img src={hero} alt="hero" className='hero-img' />
        </div>
      </main>

      <main className="main fd">
        <div className="hero">
          <img src={SkillImg} alt="hero" className='skill-img simg' />
        </div>
        <div className="skills ">
          <h2 className='text head'>Skills</h2>
          <ul className='skill-list'>
            <li>React JS <i className="fa-brands fa-react react"></i></li>
            <li>JavaScript <i className="fa-brands fa-square-js js"></i></li>
            <li>MongoDB <i className="fa-solid fa-database db"></i></li>
            <li>Bootstrap <i className="fa-brands fa-bootstrap bootstrap"></i></li>
            <li>Github <i className="fa-brands fa-github"></i></li>
            <li>CSS <i className="fa-brands fa-css3-alt css"></i></li>
            <li>HTML <i className="fa-brands fa-html5 html"></i></li>
          </ul>
        </div>

      </main>
    </>
  )
}

export default HomePage
