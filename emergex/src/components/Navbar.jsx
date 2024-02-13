import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Navbar.css';
import DarkModeToggle from './DarkMode';
import GsapMagnetic from './GsapMagnetic';

export default function Navbar() {
    
    const navbarRef = useRef(null);

    useEffect(() => {
        const navbar = navbarRef.current;

        gsap.to(navbar, {
            y: 0,
            opacity:1,
            delay: 4,
            duration: 1,
            ease: "back.out",
        });
        const logoContainer = navbar.querySelector('.nav-logo-container');
        const distance = 25; // Adjust this value as needed

        function handleMouseMove(event) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            const { top, left, width, height } = logoContainer.getBoundingClientRect();

            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const distanceX = mouseX - centerX;
            const distanceY = mouseY - centerY;
            console.log(distanceX,distanceY)
            if (Math.abs(distanceX) <= distance && Math.abs(distanceY) <= distance) {
                console.log("logo moving")
                gsap.to(logoContainer, {
                    x: distanceX,
                    y: distanceY,
                    duration: 0.5,
                    ease: "power2.out",
                });
            }
        }

        function handleMouseLeave() {
            gsap.to(logoContainer, {
                x: 0,
                y: 0,
                duration: 5,
                ease: "power2.out",
            });
        }

        logoContainer.addEventListener('mousemove', handleMouseMove);
        logoContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            logoContainer.removeEventListener('mousemove', handleMouseMove);
            logoContainer.removeEventListener('mouseleave', handleMouseLeave);
           
        };
    }, []);

    return (
        <div className='navbar' ref={navbarRef} >
            <div className='nav-logo-container'>
                <GsapMagnetic>
                    <div className='nav-logo'></div>
                    </GsapMagnetic>
            </div>
            <div className='nav-side'>
                <h3>LEARN | CONNECT | DEVELOP</h3>
                <div className='toggle'>
                <DarkModeToggle /></div>
                <ul className='navlist'>
                    <li><h3>About</h3></li>
                    <li><h3>Events</h3></li>
                    <li><h3>Partners</h3></li>
                    <li><h3>Gallery</h3></li>
                    <li><h3>Contact</h3></li>
                </ul>
            </div>
        </div>
    );
}