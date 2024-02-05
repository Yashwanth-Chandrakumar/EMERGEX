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
        delay: 0.5,
        duration: 0.5,
      ease: "back.out",
      scrollTrigger: {
          trigger:about
        }
    });
}, []);
  return (
    <div className='about' >
      <h1 ref={aboutRef} className='about-title'>
                {Array.from("About").map((letter, index) => (
                    <div key={index} className="letter">{letter}</div>
                ))}
                </h1>
    </div>
  )
}
