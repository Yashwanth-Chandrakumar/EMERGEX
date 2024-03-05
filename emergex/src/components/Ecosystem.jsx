import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Ecosystem.css';

const Ecosystem = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [isOpen, setIsOpen] = useState(false);
  const ecoRef = useRef(null);
  const label = ["Blockchain/ Web3 Companies", "Investors & VCs", "Government", "Non Profit Orgs.", "Talent Recruiters", "Educational Institutions"]
  const ecocontent = ecoRef.current;
  const titleref = useRef(null)
  const rotate = (index, totalItems, padding = 60) => {
    const temp = isOpen ? (-360 * 2 / totalItems) * index : 0;
    const angle = temp + padding * index;
    return {
      transform: `rotate(${angle}deg)`,
      span: { transform: `rotate(${-angle}deg)` },
    };
  };

  const toggleOptions = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    if (ecoRef.current) {
      if (isOpen) {
        ecoRef.current.classList.add('open');
      } else {
        ecoRef.current.classList.remove('open');
      }
    }
  }, [isOpen]);

  const ecoContainer = useRef(null)
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (ecoRef.current) {
      const triggerElement = ecoRef.current;

      ScrollTrigger.create({
        trigger: triggerElement,
        start: 'top 70%',
        onEnter: () => {
          toggleOptions();
        },
        scrub: true,
        once: true,
      });
    }

    gsap.fromTo(
      '.eco-label',
      {
        scale: 0,
      },
      {
        scale: 1,
        scrollTrigger: {
          trigger: ecoRef.current,
          start: "top 70%",
        },
        duration: 2,
        ease: "back.out(1.7)",
      }
    );
    const title = titleref.current
    gsap.to(title.children, {
        y: 0,
        stagger: 0.05,
        delay: 0.5,
        duration: 0.5,
        ease: "back.out",
        scrollTrigger: {
          trigger: title
        },
        onComplete: () => {
          console.log("Ecosystem title came")
        }
      });
    }, { scope: ecoContainer })

  return (
    <div className='ecosystem' id='ecosystem' ref={ecoContainer}>
      <span className='eco-title col-md-12 m-0 ps-5 py-5'>
        <h1 ref={titleref}>{Array.from("ECOSYSTEM").map((letter, index) => (
          <div key={index} className="letter">{letter}</div>
        ))}</h1>
      </span>
      <div className='eco-content col-md-12 d-flex' ref={ecoRef}>
        <ul className="circle-group">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <li key={index} style={rotate(index, 6)} className='circle-card'>
              <span
                className='circle'
                style={rotate(index, 6).span}
              >
                {label[index]}
              </span>
            </li>
          ))}
        </ul>
        <h3 className='eco-label'>
          Emerge<span className='gradient-text'>X</span>
        </h3>
      </div>

      {/* for testing */}
      {/* <button className='eco-btn' onClick={toggleOptions}>
            EmergeX
            </button> */}
    </div>
  )
}

export default Ecosystem