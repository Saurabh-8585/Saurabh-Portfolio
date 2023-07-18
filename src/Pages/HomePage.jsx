import React, { useEffect } from 'react';
import '../styles/HomePage.css';
import hero from '../assets/hero.jpg';
import SkillImg from '../assets/Skills.jpg';
import Typed from 'react-typed';
import { useSpring, animated, config } from 'react-spring';
import Section from '../components/Section';


const HomePage = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
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
      <main className="main" >
        <animated.div className="text" style={textAnimation}>
          <h2 className="intro">Hello👋🏻 I am,</h2>
          <h1 className="main-text">
            {
              <Typed
                strings={[
                  'Saurabh Khatmode',
                  'React JS Developer',
                  'MERN Stack Developer',
                ]}
                typeSpeed={150}
                backSpeed={100}
                loop
              />
            }
          </h1>
          <div className="btn">
            <a href='tel:+917020409952'>
              <button className="button">
                <i className="fas fa-phone"></i> Call Now
              </button>
            </a>
          </div>


        </animated.div>
        <animated.div className="hero" style={heroAnimation}>
          <img src={hero} alt="hero" className="hero-img" />
        </animated.div>

      </main>
      <Section />
      <main className="main fd">
        <animated.div className="hero" style={skillsAnimation}>
          <img src={SkillImg} alt="hero" className="skill-img simg" />
        </animated.div>
        <animated.div className="skills" style={skillsAnimation}>
          <h2 className="text head">Skills</h2>
          <ul className="skill-list">
            <li>
              JavaScript{' '}
              <i className="fa-brands fa-square-js" style={{ color: '#f0db4f' }}></i>
            </li>
            <li>
              React JS <i className="fa-brands fa-react" style={{ color: '#61dbfb' }}></i>
            </li>
            <li>
              Tailwind CSS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 73.29"
                className="tailwind-logo"
              >
                <path
                  fill="#38B2AC"
                  fillRule="evenodd"
                  d="M61.44,0Q36.87,0,30.72,24.43q9.22-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.26,6,6.08,13,13.11,28.22,13.11q24.57,0,30.72-24.43-9.21,12.22-21.5,9.16c-4.68-1.16-8-4.53-11.72-8.26C83.64,7,76.67,0,61.44,0ZM30.72,36.64Q6.15,36.64,0,61.07q9.23-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.27,6,6.07,13,13.11,28.22,13.11q24.57,0,30.72-24.43Q82.95,61.07,70.66,58c-4.68-1.16-8-4.53-11.72-8.26-6-6.08-13-13.12-28.22-13.12Z"
                />
              </svg>
            </li>
            <li>
              Node JS <i className="fa-brands fa-node" style={{ color: '#339933' }}></i>
            </li>
            <li>
              Express JS{' '}
              <i className="fa-brands fa-node-js" style={{ color: '#000000' }}></i>
            </li>
            <li>
              MongoDB{' '}
              <i className="fa-solid fa-database" style={{ color: '#4DB33D' }}></i>
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
