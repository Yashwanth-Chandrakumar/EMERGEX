import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Partner.css';
import pushImg from '../assets/img/push.png';
import shardeumImg from '../assets/img/shardeum.png';
import buildbearImg from '../assets/img/buildbear.svg';

gsap.registerPlugin(ScrollTrigger);

const Partner = () => {
    const partnerRef = useRef(null);
    const partnerContainer = useRef(null);

    useGSAP(() => {
        gsap.to(".partner-letter", {
            y: 0,
            stagger: 0.05,
            delay: 0.5,
            duration: 0.5,
            ease: "back.out",
            onComplete: () => {
                console.log("Partners animation")
            },
            scrollTrigger: {
                trigger: ".partner-letter",
            },
        });
        gsap.to(".partner-logo", {
            y: 0,
            stagger: 0.05,
            delay: 0.5,
            duration: 1,
            ease: "back.out",
            scrollTrigger: {
                trigger: ".partner-content",
            },
        })
        
    }, { scope: partnerContainer });
    
    

    return (
        <div className='partner-container container-fluid d-flex' ref={partnerContainer}>
            <div className='partner-title col-md-5 d-flex align-item-center my-auto'>
                <h1 className='mx-auto d-flex flex-column' ref={partnerRef}>
                    {Array.from("PARTNERS").map((letter, index) => (
                        <div key={index} className="partner-letter">{letter}</div>
                    ))}
                </h1>
            </div>
            <div className='partner-content col-md-7 d-flex my-auto' >
                <span className='partner-logo'>
                    <img src={pushImg} alt='push-protocol' />
                    <p className='partner-text mt-5'>Push Protocol</p>
                </span>
                <span className='partner-logo'>
                    <img src={shardeumImg} alt='shardeum' />
                    <p className='partner-text mt-5'>Shardeum</p>
                </span>
                <span className='partner-logo'>
                    <img src={buildbearImg} alt="build bear" />
                    <p className='partner-text mt-5'>Build Bear</p>
                </span>
            </div>
        </div>
    );
}

export default Partner;
