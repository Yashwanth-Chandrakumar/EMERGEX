import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import  { ScrollTrigger }   from "gsap/ScrollTrigger"
import './About.css'
gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const aboutRef = useRef(null)
  useEffect(() => {
    const about = aboutRef.current
    gsap.to(about.children, {
        y: 0,
        stagger: 0.05,
        duration: 0.5,
      ease: "back.out",
      scrollTrigger: {
          trigger:about
        }
    });
}, []);
  return (
    <div className='about' >
      <div className='about-title-container'>
      <h1 ref={aboutRef} className='about-title'>
                {Array.from("About").map((letter, index) => (
                    <div key={index} className="letter">{letter}</div>
                ))}
      </h1>
      </div>
      <div className='about-container'>
      <h3 className='about-description'>
      EmergeX drives Web3 community growth and education by connecting students with Web3 companies through events, workshops, and hackathons, alongside establishing blockchain clubs in colleges. It's a one-stop platform for students, job seekers, builders, companies, and other stakeholders, fostering a robust Web3 culture.
        </h3>
        </div>
    </div>
  )
}