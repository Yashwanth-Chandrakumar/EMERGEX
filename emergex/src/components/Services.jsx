import React, { useState, useEffect } from 'react';
import './Services.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Services() {
  useEffect(() => {
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
        trigger: ".service"
      }
    });
  }, []);

  return (
    <div className="services">
      <h1>WHAT WE DO</h1>
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
