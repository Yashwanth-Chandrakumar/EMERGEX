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
    const partnerTitleRef = useRef(null);

    useEffect(() => {
        const chars = partnerRef.current.children;

        console.log(chars);
        
        // gsap.set(chars, { y: 150, opacity: 0 });

        // gsap.to(chars, {
        //     y: 150,
        //     opacity: 1,
        //     stagger: 0.05,
        //     delay: 2.8,
        //     duration: 2,
        //     ease: "back.out",
        //     scrollTrigger: {
        //         trigger: partnerRef.current,
        //         start: "top 60%",
        //         markers: true,
        //     },
        //     onComplete: () => {
        //         console.log("Title animation completed");
        //         gsap.set(chars, { opacity: 1 });
        //     }
        // });

        }, []);
        

    return (
        <div className='partner-container container-fluid d-flex'>
            <div className='partner-title col-md-5 d-flex align-item-center my-auto' ref={partnerTitleRef}>
                <h1 className='mx-auto d-flex flex-column' ref={partnerRef}>
                    {"Trusted By Partners".split(" ").map((word, wordIndex) => (
                        <div>
                            {word.split("").map((char, charIndex) => (
                                <span key={charIndex} className='partner-title-char'>{char}</span>
                            ))}
                            </div>
                    ))}
                    </h1>
            </div>
            <div className='partner-content col-md-7 d-flex my-auto'>
                <span>
                    <img src={push} alt='push-protocol' />
                    <p className='partner-text mt-5'>Push Protocol</p>
                </span>
                <span>
                    <img src={shardeum} alt='shardeum' />
                    <p className='partner-text mt-5'>Shardeum</p>
                </span>
                <span>
                    <img src={buildbear} alt="build bear" />
                    <p className='partner-text mt-5'>Build Bear</p>
                </span>
            </div>
        </div>
    );
}

export default Partner;
