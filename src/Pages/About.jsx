import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/About.css';
import AboutImg from '../assets/about.jpg';
import { useSpring, animated, config } from 'react-spring';

const About = () => {
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
              Hello! I'm Saurabh Khatmode, a passionate web developer pursuing my post-graduation in Computer Science. I thrive on challenges and constantly elevate my skills in the dynamic world of web development.As a meticulous and devoted developer, I prioritize staying at the forefront of cutting-edge technologies. I'm dedicated to delivering exceptional solutions to clients and crafting captivating user experiences.Beyond academia, I've ventured into freelancing, completing 2 successful projects. These experiences taught me effective communication, meeting deadlines, and surpassing client expectations.Whether creating new applications or enhancing existing ones, I'm eager to collaborate with clients and bring their visions to life. My goal is to provide tailored and innovative solutions that leave a lasting impact on businesses and users alike.Looking forward to embracing new challenges and crafting remarkable web experiences that delight clients and users!
            </p>
          </div>

        </animated.div>
        <animated.div className="hero about-img" style={aboutImageAnimation}>
          <img src={AboutImg} alt="about" className="skill-img" />
        </animated.div>
      </main>
    </>
  );
};

export default About;
