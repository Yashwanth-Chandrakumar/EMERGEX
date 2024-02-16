import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Partner.css';
import push from '../assets/img/push.png';
import shardeum from '../assets/img/shardeum.png';
import buildbear from '../assets/img/buildbear.svg';
gsap.registerPlugin(ScrollTrigger);

const Partner = () => {
    const partnerRef = useRef(null);

        useEffect(() => {
            const partner = partnerRef.current
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
                //   markers:true,
                },
                
            });
        }, []);

        

    return (
        <div className='partner-container container-fluid d-flex'>
            <div className='partner-title col-md-5 d-flex align-item-center my-auto'>
                <h1 className='mx-auto d-flex flex-column partner-title' ref={partnerRef}>
                {Array.from("PARTNERS").map((letter, index) => (
                    <div key={index} className="partner-letter">{letter}</div>
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
