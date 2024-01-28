import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

function Socials() {
  return (
    <div className='socials'>
        <a className="social-link" href='https://www.instagram.com/adrianic92/'>
            <FaInstagram className='react-icons' />
        </a>
        <a className="social-link" href='https://www.linkedin.com/in/adrian-sedano'>
            <FaLinkedin className='react-icons' />    
        </a>
        <a className="social-link" href='https://www.facebook.com/adrian.sedanocastro/'>
            <FaFacebook className='react-icons' />
        </a>
        <a className="social-link" href='https://github.com/adrianic92'>
            <FaGithub className='react-icons' />
        </a>
    </div>
  )
}

export default Socials