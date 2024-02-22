import React, { useRef, useEffect } from 'react';
import { useGSAP } from "@gsap/react"
import './Traction.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { isMobile } from 'react-device-detect';
gsap.registerPlugin(ScrollTrigger);

export default function Traction() {
  useEffect(() => {
    gsap.set('.cursor', { xPercent: -50, yPercent: -50 });

    let cursor = document.querySelector('.cursor');
    let hand = document.querySelector('.hand');
    let subPanels = document.querySelectorAll('.sub-panel');

    let mouseX;
    let mouseY;

    window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, 0.5, { x: mouseX, y: mouseY });
    });

    subPanels.forEach(subPanel => {
      subPanel.addEventListener('mouseenter', () => {
        gsap.to(hand, 1, {
          scale: 1,
          opacity: 1,
          top: '-75px',
          left: '-75px',
          rotate: 0,
          ease: 'elastic.out(1, 0.3)',
        });
      });

      subPanel.addEventListener('mousemove', () => {
        gsap.to(hand, 1, {
          x: mouseX,
          y: mouseY,
        });
      });

      subPanel.addEventListener('mouseleave', () => {
        gsap.to(hand, 0.2, {
          scale: 0,
          opacity: 0,
          top: '10',
          left: '40',
          rotate: 45,
        });
      });
    });
  }, []);
  const component = useRef();
  const slider = useRef();
  if (!isMobile) {
    console.log("Not a mobile")
    useGSAP(() => {
      let panels = gsap.utils.toArray(".panel");
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
    },{scope: component });
  }
  
  useGSAP(() => {
    gsap.to("#univNumber", {
      duration: 1, 
      textContent: "21",
      roundProps: "textContent",
      ease: "none",
      scrollTrigger: {
        trigger: "#univNumber",
      },
      onComplete: () => {
        gsap.to("#comNumber", {
          duration: 1,
          delay:1,
          textContent: "21",
          roundProps: "textContent",
          ease: "none",
          scrollTrigger: {
            trigger: "#comNumber",
          },
          onComplete: () => {
            gsap.to("#eventNumber", {
              duration: 1, 
              delay:1,
              textContent: "10",
              roundProps: "textContent",
              ease: "none",
              scrollTrigger: {
                trigger: ".eventTrigger",
              },
              onComplete: () => {
                gsap.to("#stateNumber", {
                  duration: 1, 
                  delay:1,
                  textContent: "4",
                  roundProps: "textContent",
                  ease: "none",
                  scrollTrigger: {
                    trigger: ".stateTrigger",
                  },
                  onComplete: () => {
                    gsap.to("#studentNumber", {
                      duration: 2,
                      delay:1,
                      textContent: "1000",
                      roundProps: "textContent",
                      ease: "none",
                      scrollTrigger: {
                        trigger: "#studentNumber",
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
    
  }, [])
  

  return (
    <div className='pin'>
    <div className="traction" ref={component}>
      <div ref={slider} className="container">
        <div className="cursor"></div>
        <div className="hand">View</div>
        <div className="panel univ">
          <div className="sub-panel ">
            <div className='traction-content'>
            <h3>
              <span><span id="univNumber">0</span>+ Universities</span> connected together in one community with equal opportunities to learn, connect and grow.
            </h3>
            <h4>
              View stats <NorthEastIcon className="arrow" />
              </h4>
              </div>
          </div>
          <div className="sub-panel">
          <div className='traction-content'>
            <h3>
              <span ><span id='comNumber'>0</span>+ Comrades</span> working together to make a difference.
            </h3>
            <h4>
              View stats <NorthEastIcon className="arrow" />
              </h4>
              </div>
          </div>
        </div>
        <div className="panel">
          <div className="sub-panel">
          <div className='traction-content eventTrigger'>
            <h3>
              <span><span id='eventNumber'>0</span>+ Events</span> conducted to connect students, developers, job seekers to enrich their knowledge and skills.
            </h3>
            <h4>
              View stats <NorthEastIcon className="arrow" />
              </h4>
              </div>
          </div>
          <div className="sub-panel">
          <div className='traction-content stateTrigger'>
            <h3>
              <span><span id='stateNumber'>0</span>+ States</span> united together to establish blockchain clubs in universities, fostering web3 culture.
            </h3>
            <h4>
              View stats <NorthEastIcon className="arrow" />
              </h4>
              </div>
          </div>
        </div>
        <div className="panel">
          <div className="sub-panel">
          <div className='traction-content'>
            <h3>
              <span><span id='studentNumber'>0</span>+ Students</span> working together to build a effective web3 community.
            </h3>
            <h4>
              View stats <NorthEastIcon className="arrow" />
              </h4>
              </div>
          </div>
          <div className="sub-panel">
          <div className='traction-content'>
            <h3>
              <span>Immense Expansion</span> of the Web3 ecosystem is ongoing...
            </h3>
            <h4>
              View stats <NorthEastIcon className="arrow" />
              </h4>
              </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}