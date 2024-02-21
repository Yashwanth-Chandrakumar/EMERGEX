import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css';
import { Link } from '@mui/material';

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
                      <div className='footer-left'>
                         
                <div className='footer__contact'>
                    <h1>
                        Join us today
                        </h1>
                    <form>
                        <input type='email' placeholder='Your Email' />
                        {/* <textarea placeholder='Your Message...' /> */}
                        {/* <button type='submit'>
                            Send
                            </button> */}
                        </form>
                          </div>
                          <div className='footer__text'>
                <p>
                    Emerge<span className='gradient-text'>X</span>
                    </p>
                </div>
                      </div>



                  <div className='footer-right'>
                      <div className='footer-img'>
                          Image comes here
                      </div>
                      <div className='footer-navigation'>
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
                              <p>Let's Chat!</p>
                              <p>name@mail.com</p>
                    <ul>
                        <li><a href=""><FacebookIcon/></a></li>
                        <li><a href=""><XIcon/></a></li>
                        <li><a href=""><InstagramIcon/>  </a></li>
                        <li><a href=""><LinkedInIcon/></a></li>
                        </ul>
                          </div>
                      </div>
                      </div>
                </section>
            </footer>
        </div>
  )
}

export default Footer