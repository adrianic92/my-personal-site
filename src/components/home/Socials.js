import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

function Socials() {
  return (
    <div className='socials'>
        <a className="social-button" href='https://www.instagram.com/adrianic92/'>
            <FaInstagram />
        </a>
        <a className="social-button" href='https://www.linkedin.com/in/adrian-sedano'>
            <FaLinkedin />    
        </a>
        <a className="social-button" href='https://www.facebook.com/adrian.sedanocastro/'>
            <FaFacebook />
        </a>
        <a className="social-button" href='https://github.com/adrianic92'>
            <FaGithub />
        </a>
    </div>
  )
}

export default Socials