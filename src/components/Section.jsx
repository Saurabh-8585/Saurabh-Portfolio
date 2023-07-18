import React from 'react';
import { useSpring, animated, useInView, config } from 'react-spring';
import RocketImg from '../assets/Rocket2.png';
import '../styles/Section.css';
import { Link } from 'react-router-dom';

const Section = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const textAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)',
        config: config.default,
    });

    const heroAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)',
        config: config.default,
    });

    return (
        <>
            <section className='secParent'>
                <div className="hero" ref={ref}>
                    <animated.img src={RocketImg} alt="hero" className="hero-img" style={heroAnimation} />
                </div>
                <div className="secChild1" style={textAnimation}>
                    <animated.p className='project-line'>
                        <span className="main-text" style={{fontSize:"30px", fontWeight:'bold'}}>  Successfully</span> completed 2 freelancing projects and created 4 side projects, including 2 major full-stack projects.
                    </animated.p>
                    <h6 className="project-line">
                        <Link style={{ color: '#fc7b54', }} to='/projects'>
                            Projects{' '}
                            <i className="fa-solid fa-arrow-right" style={{ color: 'black' }}></i>
                        </Link>
                    </h6>
                </div>
            </section>
        </>
    );
};

export default Section;
