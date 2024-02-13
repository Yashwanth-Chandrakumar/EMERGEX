import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Partner.css';
import push from '../assets/img/push.png';
import shardeum from '../assets/img/shardeum.png';
import buildbear from '../assets/img/buildbear.svg';

const Partner = () => {
    gsap.registerPlugin(ScrollTrigger);
    const partnerRef = useRef(null);
    
    useEffect(() => {
        gsap.to(partnerRef.current.children, {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            delay: 0.5,
            duration: 1,
            ease: "back.out",
            scrollTrigger: {
                trigger: partnerRef.current,
            },
        });
    }, []);
        

    return (
        <div className='partner-container'>
            <div className='partner-title'>
                <h1 ref={partnerRef}>
                    {"Trusted By Partners".split(" ").map((word, wordIndex) => (
                        <div key={wordIndex} className='word'>
                            {word.split("").map((char, charIndex) => (
                                <span key={charIndex} className='partner-title-char'>{char}</span>
                            ))}
                            </div>
                    ))}
                    </h1>
            </div>
            <div className='partner-content'>
                <span>
                    <img src={push} alt='push-protocol'/>
                    <p className='partner-text'>Push Protocol</p>
                </span>
                <span>
                    <img src={shardeum} alt='shardeum'/>
                    <p className='partner-text'>Shardeum</p>
                </span>
                <span>
                    <img src={buildbear} alt="build bear"/>
                    <p className='partner-text'>Build Bear</p>
                </span>
            </div>
        </div>
    );
}

export default Partner;