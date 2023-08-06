import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/About.css';
import { useSpring, animated, config } from 'react-spring';
import AboutAnimation from '../assets/animations/AboutAnimation.json'

const About = ({ Lottie }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const aboutTextAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 500,
  });

  const aboutImageAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    delay: 500,
    config: config.default,
  });

  return (
    <>
      <div className="about" >
        <VerticalTimeline lineColor="#f06529" style={{ backgroundColor: '#f0f0f0' }}>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023 JAN - 2023 MAR"
            iconStyle={{ background: '#fc7b54', color: '#fff' }}
            icon={<i className="fa-solid fa-briefcase about-icon"></i>}
          >
            <h3 className="vertical-timeline-element-title">Mograsys Technologies</h3>
            <br />
            <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
            <p>React JS, TypeScript, Tailwind CSS</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022 - 2024"
            iconStyle={{ background: '#fc7b54', color: '#fff' }}
            icon={<i className="fa-solid fa-graduation-cap about-icon"></i>}
          >
            <h3 className="vertical-timeline-element-title">Savitribai Phule Pune University</h3>
            <br />
            <h3 className="vertical-timeline-element-title">Master Of Science, Computer Science MSc(CS)</h3>
            <p>Post Graduation</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 - 2022"
            iconStyle={{ background: '#fc7b54', color: '#fff' }}
            icon={<i className="fa-solid fa-building-columns about-icon"></i>}
          >
            <h3 className="vertical-timeline-element-title">Savitribai Phule Pune University</h3>
            <br />
            <h3 className="vertical-timeline-element-title">Bachelor Of Vocational, Software Development</h3>
            <br />
            <h3 className="vertical-timeline-element-title">Total CGPA: 9.56 (81.91%)</h3>
            <p>Graduation</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <main className="main">
        <animated.div className="about-text" style={aboutTextAnimation}>
          <h2 className="text head" style={{ textAlign: 'center' }}>
            About
          </h2>
          <div className="paragraph">
            <p>
              Greetings! I'm Saurabh Khatmode, a dynamic web developer pursuing post-grad studies in Computer Science. Thriving on challenges, I fuel my passion for web development with cutting-edge skills. A meticulous creator, I prioritize tech innovation for exceptional solutions and captivating user experiences. With a successful freelancing record, I've honed communication and deadline skills. I'm ready to collaborate on new visions, crafting tailored solutions that make lasting impacts. Eager for fresh challenges, I'm here to craft remarkable web experiences for clients and users alike!
            </p>
          </div>

        </animated.div>
        <animated.div className="hero" style={aboutImageAnimation}>
          <Lottie
            animationData={AboutAnimation}
            className="hero-img"
          />
        </animated.div>
      </main>
    </>
  );
};

export default About;
