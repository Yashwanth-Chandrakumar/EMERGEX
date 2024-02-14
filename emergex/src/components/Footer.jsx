import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
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
        </footer>
  )
}

export default Footer