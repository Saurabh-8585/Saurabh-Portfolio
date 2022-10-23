import React from 'react'
import ContactForm from '../components/ContactForm'
import ContactImg from '../assets/contact us.jpg'
import "../styles/Contact.css"
const Contact = () => {
    return (
        <div className='contact-container'>
            <div className="c-form">
                <ContactForm />
            </div>
            <div className="contact-img-container">
                <img src={ContactImg} alt="" className='contact-img' />
            </div>
        </div>
    )
}

export default Contact