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
              Greetings! I'm Saurabh Khatmode, a dedicated web developer advancing through post-grad studies in Computer Science. Fueled by challenges, I master cutting-edge tech to deliver exceptional user-centric solutions. With 1 freelance triumphs, I excel in communication, deadlines, and exceeding expectations. Let's collaborate to transform visions into impactful web realities. Together, we'll craft memorable user experiences and leave a lasting mark on businesses. Ready to create brilliance
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
