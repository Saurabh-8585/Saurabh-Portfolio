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
                setMsg(true)
                console.log("done");
            }, (error) => {
                console.log(error.text);
            });
    }
    return (

        <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
                <input
                    type="text"
                    name="name"
                    className='name'
                    placeholder='Enter Your Name' />

                <input
                    type="text"
                    name="email"
                    className='email'
                    placeholder='Enter Your Email'
                />

                <textarea
                    name='message'
                    className='textarea'
                    // cols={12}
                    rows={12}
                    placeholder='Enter Your Message Here    '
                />
                <button type='submit' className='link-btn submit'>Send</button>
                <h1 className='submit-msg'>{msg ? "Thank You" : ""}</h1>
            </form>
        </div>
    )
}
export default ContactForm