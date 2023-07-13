import React from 'react';
import '../styles/HomePage.css';
import hero from '../assets/hero.jpg';
import SkillImg from '../assets/Skills.jpg';
import Typed from 'react-typed';
import { useSpring, animated, config } from 'react-spring';

const HomePage = () => {
  const textAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    delay: 500,
    config: config.default,
  });

  const heroAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    delay: 500,
    config: config.default,
  });

  const skillsAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    delay: 500,
    config: config.default,
  });

  return (
    <>
      <main className="main">
        <animated.div className="text" style={textAnimation}>
          <h2 className="intro">Hello👋🏻 I am,</h2>
          <h1 className="main-text">
            {
              <Typed
                strings={['Saurabh Khatmode', 'React JS Developer', 'MERN Stack Developer']}
                typeSpeed={150}
                backSpeed={100}
                loop
              />
            }
          </h1>
          <div className="btn">
            <a href="resume.pdf" download="Saurabh Khatmode Resume.pdf">
              <button className="button">Download Resume</button>
            </a>
          </div>
        </animated.div>
        <animated.div className="hero" style={heroAnimation}>
          <img src={hero} alt="hero" className="hero-img" />
        </animated.div>
      </main>

      <main className="main fd">
        <animated.div className="hero" style={skillsAnimation}>
          <img src={SkillImg} alt="hero" className="skill-img simg" />
        </animated.div>
        <animated.div className="skills" style={skillsAnimation}>
          <h2 className="text head">Skills</h2>
          <ul className="skill-list">
            <li>
              JavaScript <i className="fa-brands fa-square-js" style={{ color: '#f0db4f' }}></i>
            </li>
            <li>
              React JS <i className="fa-brands fa-react" style={{ color: '#61dbfb' }}></i>
            </li>
            <li>
              Node JS <i className="fa-brands fa-node" style={{ color: '#339933' }}></i>
            </li>
            <li>
              Express JS <i className="fa-brands fa-node-js" style={{ color: '#000000' }}></i>
            </li>
            <li>
              MongoDB <i className="fa-solid fa-database" style={{ color: '#4DB33D' }}></i>
            </li>
            <li>
              Git <i className="fa-brands fa-github"></i>
            </li>
          </ul>
        </animated.div>
      </main>
    </>
  );
};

export default HomePage;
