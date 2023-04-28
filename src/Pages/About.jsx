import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import '../styles/About.css';
import AboutImg from '../assets/about.jpg'

const About = () => {
  return (
    <>

      <div className="about">
        <VerticalTimeline
          lineColor="#f06529"
          style={{
            backgroundColor: "#f0f0f0"
          }}>

          <VerticalTimelineElement

            className='vertical-timeline-element--education'

            date="2023 JAN - 2023 MAR"
            iconStyle={{
              background: "#fc7b54",
              color: "#fff"
            }}

            icon={<i className="fa-solid fa-briefcase about-icon"></i>}>
            <h3 className="vertical-timeline-element-title" >
              Mograsys Technologies
            </h3>
            <br />
            <h3 className="vertical-timeline-element-title" >
              Software Developer Intern
            </h3>

            <p>React JS, TypeScript, Tailwind CSS</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement

            className='vertical-timeline-element--education'

            date="2022 - 2024"
            iconStyle={{
              background: "#fc7b54",
              color: "#fff"
            }}

            icon={<i className="fa-solid fa-graduation-cap about-icon"></i>}>
            <h3 className="vertical-timeline-element-title" >
              Savitribai Phule Pune University
            </h3>
            <br />
            <h3 className="vertical-timeline-element-title" >
              Master Of Science , Computer Science MSc(CS)
            </h3>

            <p>Post Graduation</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--education'

            date="2019 - 2022"

            iconStyle={{
              background: "#fc7b54",
              color: "#fff"
            }}
            icon={<i className="fa-solid fa-building-columns about-icon"></i>}>

            <h3 className="vertical-timeline-element-title" >
              Savitribai Phule Pune University
            </h3>
            <br />
            <h3 className="vertical-timeline-element-title" >
              Bachelor Of Vocational,Software Development
            </h3>
            <br />
            <h3 className="vertical-timeline-element-title" >
              Total CGPA : 9.56 (81.91%)
            </h3>

            <p>Graduation</p>
          </VerticalTimelineElement>



        </VerticalTimeline>
      </div>
      <div className="">
      </div>
      <main className="main">

        <div className="about-text">
          <h2 className='text head' style={{
            textAlign: "center"
          }}>About</h2>
          <div className='paragraph'>
            <p>
              Hi there! My name is Saurabh Khatmode, and I am currently pursuing my post-graduation in Computer Science. I have a passion for web development and I am a MERN stack developer.Throughout my academic and professional career, I have gained experience in using modern web development technologies, including MongoDB, Express, React, and Node.js. I am always looking for new challenges and opportunities to learn and grow as a developer.I have experience in building responsive and user-friendly web applications that are both functional and visually appealing. I am a detail-oriented and dedicated developer. I am committed to staying up-to-date with the latest technologies.





            </p>
          </div>
        </div>
        <div className="hero about-img">
          <img src={AboutImg} alt="about" className='skill-img' />
        </div>
      </main>
    </>
  )
}

export default About
