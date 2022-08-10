import React from 'react';


export default function Footer() {
  return (
    <footer className="footer-container">
        <div className='resume-wrapper'>
            <a className='resume-link font-resume-link' href='https://jkwalsh127.github.io/my-portfolio-page/' target='_blank' rel='noreferrer'>
                My Porftolio
            </a>
        </div>
        <div class="socials-wrapper">
            <a className='social-link' href="https://github.com/jkwalsh127" target='_blank' rel='noreferrer'>
                {/* <FontAwesomeIcon 
                    icon={faGithub} 
                    className='social-icon github'
                /> */}
            </a>
            <a className='social-link' href="https://www.linkedin.com/in/jake--walsh/" target='_blank' rel='noreferrer'>
                {/* <FontAwesomeIcon 
                    icon={faLinkedin} 
                    className='social-icon linkedin'
                /> */}
            </a>
            <a className='social-link' href='mailto:jkwalsh127@gmail.com' target='_blank' rel='noreferrer'>
                {/* <FontAwesomeIcon 
                    icon={faEnvelope} 
                    className='social-icon email'
                /> */}
            </a>
        </div>
        <p className='copyright font-copyright'>Copyright © 2022 - All rights reserved by Digital Eden Inc. </p>
    </footer>
  );
};