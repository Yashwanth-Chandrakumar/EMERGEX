import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import gsap from 'gsap';

export default function Navbar() {
    const logoContainerRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.from(".navbar", {
            y: -50,
            opacity: 0,
            duration: 0.8,
            delay: 1,
            ease: "power2.out",
        })
        .to(".navbar", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 1,
            ease: "power2.in",
        });

        const logoContainer = logoContainerRef.current;
        const distance = 25; // Adjust this value as needed

        function handleMouseMove(event) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            const { top, left, width, height } = logoContainer.getBoundingClientRect();

            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const distanceX = mouseX - centerX;
            const distanceY = mouseY - centerY;

            if (Math.abs(distanceX) <= distance && Math.abs(distanceY) <= distance) {
                gsap.to(logoContainer, {
                    x: distanceX,
                    y: distanceY,
                    duration: 0.2,
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
        <div className='navbar'>
            <div ref={logoContainerRef} className='nav-logo-container'>
                <div className='nav-logo'></div>
            </div>
            <div className='nav-side'>
                <h3>BUILD | CREATE | DEVELOP</h3>
                <ul className='navlist'>
                    <li><h3>About</h3></li>
                    <li><h3>Partners</h3></li>
                    <li><h3>Ecosystem</h3></li>
                    <li><h3>Programs</h3></li>
                    <li><h3>Contact</h3></li>
                </ul>
            </div>
        </div>
    );
}
