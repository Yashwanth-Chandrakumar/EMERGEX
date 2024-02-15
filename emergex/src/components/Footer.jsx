import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import './Footer.css';

const Footer = () => {

  useEffect(() => {
        gsap.set('section.footer-container', { yPercent: -50 })

        const uncover = gsap.timeline({ paused: true })

        uncover
        .to('section.footer-container', { yPercent: 20, ease: 'none' })
        ;

        ScrollTrigger.create({  
            trigger: 'section.conclusion',
            start: 'bottom bottom',
            end: 'bottom top',
            animation: uncover,
            scrub: true,
        });
    }, []);

  return (
    <div className='foot'>
        <section className="conclusion"></section>
        
        <footer className='footer'>
            <section className='footer-container'>
            <div className='footer__text'>
                <p>
                    Emerge<span className='gradient-text'>X</span>
                    </p>
                </div>
            <div className='footer__content'>
                <div className='footer__nav'>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Traction</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Ecosystem</a></li>
                        </ul>
                    </div>
                <div className='footer__social'>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">LinkedIn</a></li>
                        </ul>
                    </div>
                <div className='footer__contact'>
                    <h2>
                        Contact Us
                        </h2>
                    <form>
                        <input type='text' placeholder='Name' />
                        <textarea placeholder='Your Message...' />
                        <button type='submit'>
                            Send
                            </button>
                        </form>
                    </div>
                </div>
                </section>
            </footer>
        </div>
  )
}

export default Footer