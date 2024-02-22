import React, { useRef } from 'react';
import "./Objectives.css";
import learn from "../assets/img/5437683.png"
import connect from "../assets/img/2929907.png"
import grow from "../assets/img/6736639.png"
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

  return (
    <div className='objectives-container'>
      <h1>OBJECTIVES</h1>

      <div className='obj-wrapper'>
        <div className='obj-card' ref={cardRefs[0]} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}>
          <img src={ learn} />
          <div className='obj-content'>
            <h3>Culture of Learning</h3>
            <p>Create a culture of growth and learning with creative ideas and boost the same by organising hackathons and other events also branding EmergeX</p>
            <div className="glow" />
          </div>
        </div>
        <div className='obj-card' ref={cardRefs[1]} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
          <img src={ connect} />
          <div className='obj-content'>
            <h3>Connect with Industry</h3>
            <p>Access to community management training, mentorship and technical knowledge from industry experts while fostering valuable connections.</p>
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
