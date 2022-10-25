import React from 'react'
import "../styles/Contact.css"
import ContactForm from '../components/ContactForm'
import ContactImg from '../assets/contact us.jpg'
const Contact = () => {
    return (
        <>
        <h1 className='text-center head'>Contact</h1>
        <div className='contact-container'>
            <div className="c-form">
                <ContactForm />
            </div>
            <div className="contact-img-container">
                <img src={ContactImg} alt="" className='contact-img' />
            </div>
            </div>
        </>
    )
}

export default Contact