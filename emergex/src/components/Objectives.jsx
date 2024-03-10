import React, { useRef } from 'react';
import "./Objectives.css";
import learn from "../assets/img/5437683.webp"
import connect from "../assets/img/2929907.webp"
import grow from "../assets/img/6736639.webp"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)
export default function Objectives() {
  const cardRefs = [useRef(null), useRef(null), useRef(null)]; // Create an array of refs for each card

  function rotateToMouse(e, index) {
    const bounds = cardRefs[index].current.getBoundingClientRect(); // Get the bounds for the current card
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    }
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    cardRefs[index].current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    cardRefs[index].current.querySelector('.glow').style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #b5b5b522,
        #0000000f
      )
    `;
  }

  function handleMouseEnter(index) {
    document.addEventListener('mousemove', (e) => rotateToMouse(e, index)); // Pass index to rotateToMouse function
  }

  function handleMouseLeave(index) {
    document.removeEventListener('mousemove', (e) => rotateToMouse(e, index)); // Pass index to rotateToMouse function
    cardRefs[index].current.style.transform = '';
    cardRefs[index].current.style.background = '';
  }
  const objContainer = useRef(null)
  const objRef = useRef(null)
  useGSAP(() => {
    const obj = objRef.current
    gsap.to(obj.children, {
        y: 0,
        stagger: 0.05,
        duration: 0.5,
      ease: "back.out",
      scrollTrigger: {
          trigger:obj
        }
    });
    gsap.fromTo(".obj-card", {
      x: -150,
      opacity:0,
    },{
      x: 0,
      stagger: 0.5,
      duration: 0.5,
      delay:1,
      opacity: 1,
      ease: "back.in",
      scrollTrigger: {
        trigger:".obj-wrapper"
      }
    })
  },{scope:objContainer})
  return (
    <div id='hub' className='objectives-container' ref={objContainer}>
      <h1 ref={objRef}>
      {Array.from("OBJECTIVES").map((letter, index) => (
                    <div key={index} className="letter">{letter}</div>
                ))}
      </h1>
      <p><span>EmergeX Hub</span>, an extension of EmergeX, gives students the chance to explore Web3 and emerging technologies. As an <span>EmergeX Comrade</span>, you'll actively promote Web3 awareness through events and workshops, fostering tech communities within educational institutions at EmergeX Hub.</p>

      <div className='obj-wrapper'>
        <div className='obj-card' ref={cardRefs[0]} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}>
          <img src={ learn} />
          <div className='obj-content'>
            <h3>Culture of Learning</h3>
            <p>Dive into a culture of continuous learning at EmergeX, where students acquire the skills needed for the dynamic Web3 space.
</p>
            <div className="glow" />
          </div>
        </div>
        <div className='obj-card' ref={cardRefs[1]} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
          <img src={ connect} />
          <div className='obj-content'>
            <h3>Connect with Industry</h3>
            <p>Get access to training, mentorship and technical knowledge from industry experts while fostering valuable connections.</p>
            <div className="glow" />
          </div>
        </div>
        <div className='obj-card' ref={cardRefs[2]} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
          <img src={ grow} />
          <div className='obj-content'>
            <h3>Grow in the ecosystem</h3>
            <p>Discover unparalleled job opportunities and entrepreneurial paths, while also gaining significant recognition and establishing your </p>
            <div className="glow" />
          </div>
        </div>
      </div>
    </div>
  );
}
