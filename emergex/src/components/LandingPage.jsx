import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import './LandingPage.css';
import Navbar from './Navbar';
import { isMobile } from 'react-device-detect';

export default function LandingPage() {
    const titleRef = useRef(null);

    useEffect(() => {
        const titleElement = titleRef.current;

        gsap.to(titleElement.children, {
            y: -40,
            stagger: 0.05,
            delay: 2.8,
            duration: 0.5,
            ease: "back.out",
        });
        gsap.to(".landing-description", {
            y: 0,
            opacity: 1,
            delay: 4,
            duration: 1,
            ease: "back.out",
            onComplete: () => {
                console.log("Description animation completed");
            }
        });

        if (isMobile) {
            console.log("mobile detected");
        } else {
            gsap.fromTo(".land-title", {
                opacity: 1,
                y: 0,
            }, {
                y: 150,
                opacity: 0,
                scrollTrigger: {
                    trigger: ".landing",
                    start: "bottom bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });
            const tl = gsap.timeline();
            tl.fromTo(".landing-description", {
                opacity: 1,
                y: 0,
            }, {
                y: 150,
                opacity: 0,
                scrollTrigger: {
                    trigger: ".landing",
                    start: "bottom bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });

        }
    }, []);

    return (
        <div className='mainpage'>
            <Navbar />
            <div className='landing'>

                <h1 ref={titleRef} className='land-title'>
                    {Array.from("EmergeX").map((letter, index) => (
                        <div key={index} className="letter">{letter}</div>
                    ))}
                </h1>

                <h3 className='landing-description'>Your one stop solution for all emerging technologies.</h3>
            </div>
        </div>
    );
}
