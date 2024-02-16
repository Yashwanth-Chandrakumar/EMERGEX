import React, { useEffect, useLayoutEffect, useRef } from 'react';
import './Exit.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Exit() {
  const exit = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const exitcur = exit.current
    gsap.to(".special-text", {
      y:1000,
      scrollTrigger: {
        id:"zoom",
        trigger: exitcur,
        scrub: true,
        markers:true,
      }
  });
  }, []);

  return (
    <div className="exit-container" ref={exit}>
      <h1>
        Are you ready for new <span className="special-text">adventures?</span>
      </h1>
    </div>
  );
}


