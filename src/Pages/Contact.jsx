import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles/Contact.css';
import ContactForm from '../components/ContactForm';
import ContactImg from '../assets/contact us.jpg';

const Contact = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const contactFormAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        delay: 500,
    });

    const contactImgAnimation = useSpring({
        from: { opacity: 0, transform: 'scale(0)' },
        to: { opacity: 1, transform: 'scale(1)' },
        delay: 1000,
    });

    return (
        <>
            <h1 className="text-center head">Contact</h1>
            <div className="contact-container">
                <animated.div className="c-form" style={contactFormAnimation}>
                    <ContactForm />
                </animated.div>
                <animated.div className="contact-img-container" style={contactImgAnimation}>
                    <img src={ContactImg} alt="" className="contact-img" />
                </animated.div>
            </div>
        </>
    );
};

export default Contact;
