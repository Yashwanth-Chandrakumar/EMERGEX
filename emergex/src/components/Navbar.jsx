// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import './Navbar.css';
// import DarkModeToggle from './DarkMode';

// export default function Navbar() {
    
//     const navbarRef = useRef(null);

//     useEffect(() => {
//         const navbar = navbarRef.current;

//         gsap.to(navbar, {
//             y: 0,
//             opacity:1,
//             delay: 4,
//             duration: 1,
//             ease: "back.out",
//         });
//         // const logoContainer = navbar.querySelector('.nav-logo-container');
//         // const distance = 25; // Adjust this value as needed

//         // function handleMouseMove(event) {
//         //     const mouseX = event.clientX;
//         //     const mouseY = event.clientY;

//         //     const { top, left, width, height } = logoContainer.getBoundingClientRect();

//         //     const centerX = left + width / 2;
//         //     const centerY = top + height / 2;

//         //     const distanceX = mouseX - centerX;
//         //     const distanceY = mouseY - centerY;
//         //     console.log(distanceX,distanceY)
//         //     if (Math.abs(distanceX) <= distance && Math.abs(distanceY) <= distance) {
//         //         console.log("logo moving")
//         //         gsap.to(logoContainer, {
//         //             x: distanceX,
//         //             y: distanceY,
//         //             duration: 0.5,
//         //             ease: "power2.out",
//         //         });
//         //     }
//         // }

//         // function handleMouseLeave() {
//         //     gsap.to(logoContainer, {
//         //         x: 0,
//         //         y: 0,
//         //         duration: 5,
//         //         ease: "power2.out",
//         //     });
//         // }

//         // logoContainer.addEventListener('mousemove', handleMouseMove);
//         // logoContainer.addEventListener('mouseleave', handleMouseLeave);

//         // return () => {
//         //     logoContainer.removeEventListener('mousemove', handleMouseMove);
//         //     logoContainer.removeEventListener('mouseleave', handleMouseLeave);
           
//         // };
//     }, []);

//     return (
//         <div className='navbar' ref={navbarRef} >
//                 <GsapMagnetic>
//                     <div className='nav-logo'></div>
//                     </GsapMagnetic>
            
//             <div className='nav-side'>
                
//                 <ul className='navlist'>
//                 <div className='toggle'>
//                 <DarkModeToggle /></div>
//                     <li><h3>About</h3></li>
//                     <li><h3>Events</h3></li>
//                     <li><h3>Partners</h3></li>
//                     <li><h3>Gallery</h3></li>
//                     <li><h3>Contact</h3></li>
//                 </ul>
//             </div>
//         </div>
//     );
// }
import React, { useState } from "react";
import "./Navbar.css";
import GsapMagnetic from './GsapMagnetic';
import DarkModeToggle from "./DarkMode"
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
        <GsapMagnetic>
            <div className='nav-logo'></div>
          </GsapMagnetic>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#services">services</a>
            </li>
            <li>
              <a href="#ecosystem">ecosystem</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
            <li>
              <DarkModeToggle/>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;