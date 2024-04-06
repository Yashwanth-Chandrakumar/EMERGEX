import React, { useEffect, useRef} from 'react'
import gsap from 'gsap'
import  { ScrollTrigger }   from "gsap/ScrollTrigger"
import './About.css'
gsap.registerPlugin(ScrollTrigger)
import { isMobile } from 'react-device-detect'
import { useGSAP } from '@gsap/react'
export default function About() {
  const aboutRef = useRef(null);
  const des = useRef(null);
  const abtContainer = useRef(null)
  useGSAP(() => {
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
    const desc = des.current
    gsap.to(".about-description", {
      y: 0,
      opacity: 1,
      delay:0.5,
      duration: 1,
      ease: "back.out",
      scrollTrigger: {
        trigger:desc
      }
  });
}, {scope:abtContainer});
  return (
    <div className='about' id='about' ref={abtContainer}>
      <div className='about-title-container'>
      <h1 ref={aboutRef} className='about-title'>
                {Array.from("About").map((letter, index) => (
                    <div key={index} className="letter">{letter}</div>
                ))}
      </h1>
      </div>
      <div className='about-container' ref={des}>
       
      <h3 className='about-description'>
      <span>EmergeX</span> is a dynamic platform passionately committed to driving <span>Web3 growth and education</span>. With a focus on connecting students, job seekers, builders, and companies, we create a vibrant ecosystem that fosters a robust Web3 culture. Through <span>curated events, workshops, and hackathons,</span> we empower the next generation of innovators and leaders.
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmergeX is not just a platform; it's a <span>catalyst</span> for shaping the future of the decentralized web.
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to <span>EmergeX</span> – Your One Stop Solution for all Emerging Technologies!

        </h3>
        </div>
    </div>
  )
}