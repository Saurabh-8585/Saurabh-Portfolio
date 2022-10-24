import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';



const ContactForm = () => {
    const [msg, setMsg] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_we4p34z', 'template_blnwib8', form.current, 'BeAecrCudO0zJlsCV')
            .then((result) => {
                console.log(result.text);
                setMsg(true);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                form.current.reset();
            });
    }
    return (

        <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
                <h1>Send Message 📩</h1>
                <input
                    type="text"
                    name="name"
                    className='name'
                    required="required"
                    placeholder='Enter Your Name' />

                <input
                    type="email"
                    name="email"
                    className='email'
                    required="required"
                    placeholder='Enter Your Email'
                />

                <textarea
                    name='message'
                    className='textarea'
                    required="required"
                    rows={12}
                    placeholder='Enter Your Message Here    '
                />
                <button type='submit' className='link-btn submit'>Send</button>
                <h1 className='submit-msg'>{msg ? "Thank You For Connecting With Me 🤝" :""}</h1>
            </form>
        </div>
    )
}
export default ContactForm