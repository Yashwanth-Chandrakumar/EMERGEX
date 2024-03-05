import React, { useRef } from 'react';
import './Services.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Services() {
  const serviceCont = useRef(null)
  const serviceRef = useRef(null)
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

      gsap.to(".service", {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "back.out",
        onComplete: () => {
          console.log("services animation completed");
        },
        scrollTrigger: {
          trigger: ".service",
          // markers:true
        }
      });
    const title = serviceRef.current
      gsap.to(title.children, {
        y: 0,
        stagger: 0.05,
        duration: 0.5,
      ease: "back.out",
      scrollTrigger: {
          trigger:title
        }
    });
    }, {scope:serviceCont });
  return (
    <div className="services" id='services' ref={serviceCont}>
      <h1 className='services-title' ref={serviceRef}>
      {Array.from("WHAT WE DO").map((letter, index) => (
                    <div key={index} className="letter" style={{whiteSpace:"pre"}}>{letter}</div>
                ))}
      </h1>
      <h4>EmergeX serves as a critical bridge, equipping students with the emerging tech skills needed to meet the growing talent demands of the industry.</h4>
      <div className='services-content'>
        <div className='plate service'>Workshops</div>
        <div className='plate service'>City Meetups</div>
        <div className='plate service'>Hackathons</div>
        <div className='plate service'>Bootcamps / Roadshow</div>
        <div className='plate service'>Other Customised events</div>
      </div>
    </div>
  );
}