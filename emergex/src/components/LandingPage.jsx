import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import './LandingPage.css';
import Navbar from './Navbar';

export default function LandingPage() {
    const titleRef = useRef(null);

    useEffect(() => {
        const titleElement = titleRef.current;

        gsap.to(titleElement.children, {
            y: 0,
            stagger: 0.05,
            delay: 1.3,
            duration: 0.5,
            ease: "back.out",
        });
    }, []);

    return (
        <div className='mainpage'>
        <Navbar/>
        <div className='landing'>
            
            <h1 ref={titleRef} className='land-title'>
                {Array.from("EmergeX").map((letter, index) => (
                    <div key={index} className="letter">{letter}</div>
                ))}
            </h1>
            </div>
            </div>
    );
}
