import React from 'react'
import '../styles/HomePage.css'
import hero from "../assets/hero.jpg"
import SkillImg from '../assets/Skills.jpg'
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
                "MERN Stack Developer",
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
            <li>JavaScript <i className="fa-brands fa-square-js" style={{ color: "#f0db4f" }}></i></li>
            <li>React JS <i className="fa-brands fa-react" style={{ color: "#61dbfb" }}></i></li>
            <li>Node JS <i className="fa-brands fa-node" style={{ color: "#339933" }} ></i></li>
            <li>Express JS <i className="fa-brands fa-node-js" style={{ color: "#000000" }}></i></li>
            <li>MongoDB <i className="fa-solid fa-database" style={{ color: "#4DB33D" }}></i></li>

            <li>Git <i className="fa-brands fa-github" ></i></li>
            {/* <li>CSS <i className="fa-brands fa-css3-alt css" style={{ color: "#264de4" }}></i></li>
            <li>HTML <i className="fa-brands fa-html5 html" style={{ color: "#f06529" }}></i></li> */}
          </ul>
        </div>

      </main>
    </>
  )
}

export default HomePage
