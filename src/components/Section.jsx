import React from 'react';
import { useSpring, animated, useInView, config } from 'react-spring';
import RocketImg from '../assets/Rocket2.png';
import '../styles/Section.css';
import { Link } from 'react-router-dom';

const Section = () => {
    
    const [ref1, inView1] = useInView({
        triggerOnce: true,
    });

    const [ref2, inView2] = useInView({
        triggerOnce: true,
    });

    const imageAnimation = useSpring({
        opacity: inView1 ? 1 : 0,
        transform: inView1 ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)',
        config: config.default,
      
    });

    const textAnimation = useSpring({
        opacity: inView2 ? 1 : 0,
        transform: inView2 ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)',
        config: config.default,
      
    });


    return (
        <>
            <section className='secParent'>
                <div className="hero">
                    <animated.div ref={ref1} className="hero" style={imageAnimation}>
                        <img src={RocketImg} alt="hero" className="hero-img" />
                    </animated.div>
                </div>
                <animated.div ref={ref2} className="secChild1" style={textAnimation}>
                    <p className='project-line'>
                        <span className="main-text" style={{ fontSize: "30px", fontWeight: 'bold' }}>Successfully</span> completed 1 freelancing project and created 4 side projects, including 2 major full-stack projects.
                    </p>
                    <h6 className="project-line">
                        <Link style={{ color: '#fc7b54' }} to='/projects'>
                            Projects{' '}
                            <i className="fa-solid fa-arrow-right" style={{ color: 'black' }}></i>
                        </Link>
                    </h6>
                </animated.div>
            </section>
        </>
    );
};

export default Section;
