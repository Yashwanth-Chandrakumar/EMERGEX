import React, { useRef,useLayoutEffect } from 'react';
import './Traction.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Traction() {

    const component = useRef();
    const slider = useRef();
  
    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        let panels = gsap.utils.toArray(".panel");
        gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: slider.current,
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            end: () => "+=" + slider.current.offsetWidth,
            
          }
        });
      }, component);
      return () => ctx.revert();
    });
  
    return (
      <div className="App" ref={component}>
        
        <div ref={slider} className="traction-container">
          <div className="description panel blue">
            Universities
          </div>
          <div className="panel red">Comrades</div>
          <div className="panel orange">Events</div>
        </div>
        <div className="lastContainer">Last Container</div>
      </div>
  );
}
