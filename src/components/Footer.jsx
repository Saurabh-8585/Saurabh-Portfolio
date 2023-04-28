import React from 'react'
import '../styles/footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="copyright">
                <p>Developed by &copy;Saurabh Khatmode {new Date().getFullYear()} </p>
            </div>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/saurabh-khatmode/" target="_blank" rel='noreferrer'><i className="fa-brands fa-linkedin-in icon"></i></a>
                <a href="https://github.com/Saurabh-8585" target="_blank" rel='noreferrer'>  <i className="fa-brands fa-github icon git"></i></a>
                <a href="https://twitter.com/Saurabhkhatmode" target="_blank" rel='noreferrer'><i className="fa-brands fa-twitter icon"></i></a>
                <a href="https://www.instagram.com/saurabh7xd/" target="_blank" rel='noreferrer'> <i className="fa-brands fa-instagram icon"></i></a>
            </div>
        </footer>
    )
}

export default Footer