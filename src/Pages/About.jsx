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

          <VerticalTimelineElement
            className='vertical-timeline-element--education'

            date="2017 - 2019"

            iconStyle={{
              background: "#fc7b54",
              color: "#fff"
            }}
            icon={<i className="fa-solid fa-school about-icon"></i>}>
            
            <h3 className="vertical-timeline-element-title" >
              Pune District Education Society (PDEA)
            </h3>
            <br />
            <h3 className="vertical-timeline-element-title" >
              Annasaheb Magar Junior College
            </h3>
            <p>High School</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
      <main className="main">

        <div className="about-text">
          <h2 className='text head' style={{
            textAlign: "center"
          }}>About</h2>
          <div className='paragraph'>
            <p>
              I am Saurabh Khatmode from Pune, Maharashtra .
               I am interested in Web Development,Front-End and React JS . I have completed my graduation in Bachelor of Vocational in Software Development from Savitribai Phule Pune University, and Now I am pursuing my post graduation in Master Of Science , Computer Science MSc(CS).
              Currently I am Learning MERN Stack.
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
