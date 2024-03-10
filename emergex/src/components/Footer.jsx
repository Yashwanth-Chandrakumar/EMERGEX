import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css';
import LanguageIcon from '@mui/icons-material/Language';
import footimg from "../assets/img/3974104.webp"
import { Link } from '@mui/material';

const Footer = () => {
    function contact(e) {
        e.preventDefault()
        window.location.href = `mailto:emergexofficial@gmail.com`;
        
    }
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
    <div className='foot' id='contact'>
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
                              <button className='footer-send' onClick={contact}><SendIcon /></button>
                        {/* <textarea placeholder='Your Message...' /> */}
                        {/* <button type='submit'>
                            Send
                            </button> */}
                        </form>
                          </div>
                          <div className='footer__text'>
                <h1>
                    Emerge<span className='gradient-text'>X</span>
                          </h1>
                          <p>Your one stop solution for all emerging technologies.</p>
                </div>
                      </div>



                  <div className='footer-right'>
                      <div className='footer-img'>
                          <img src={footimg}/>
                      </div>
                      <div className='footer-navigation'>
                <div className='footer__nav'>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Traction</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Ecosystem</a></li>
                        <li><a href="">Partners</a></li>
                        </ul>
                    </div>
                          <div className='footer__social'>
                              <p>Let's Chat!</p>
                              <p>emergexofficial@gmail.com</p>
                    <ul>
                        {/* <li><a href=""><FacebookIcon/></a></li> */}
                        <li><a href="https://twitter.com/EmergeXOfficial" target='_blank'><XIcon/></a></li>
                        <li><a href="https://www.instagram.com/emergexofficial/" target='_blank'><InstagramIcon/>  </a></li>
                        {/* <li><a href=""><LinkedInIcon /></a></li> */}
                        <li><a href="https://linktr.ee/emergexofficial" target="_blank"><LanguageIcon /></a></li>
                                  
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